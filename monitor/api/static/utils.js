// utils.js - Dashboard update and utility functions

function updateDashboard(data) {
    console.log('Updating dashboard with:', data);
    const badge = document.getElementById('status-badge');
    badge.className = 'status-badge status-' + data.status;
    badge.textContent = data.status.toUpperCase();

    // Add tooltip with alert count
    const alertCount = data.alerts ? data.alerts.length : 0;
    if (data.status === 'warning' && alertCount > 0) {
        badge.setAttribute('data-hover', `${alertCount} active alert${alertCount > 1 ? 's' : ''}`);
    } else if (data.status === 'info') {
        badge.setAttribute('data-hover', 'System information available');
    } else {
        badge.setAttribute('data-hover', 'All systems operational');
    }

    const gpuList = document.getElementById('gpu-list');
    gpuList.innerHTML = data.metrics.gpus.map(gpu => {
        if (gpu.error) return `<div class="gpu-card">Error: ${gpu.error}</div>`;

        const util = gpu.utilization || 0;
        const memPct = gpu.memory_total > 0 ? (gpu.memory_used / gpu.memory_total * 100) : 0;
        const temp = gpu.temperature || 0;

        return `
            <div class="gpu-card">
                <div class="gpu-header">
                    <span class="gpu-name">GPU ${gpu.index}: ${gpu.name}</span>
                    <span class="gpu-temp ${temp > 80 ? 'hot' : ''}">${temp}C</span>
                </div>
                <div class="metric-row">
                    <span class="metric-label">Utilization</span>
                    <span class="metric-value">${util}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill ${util > 90 ? 'crit' : util > 70 ? 'warn' : ''}" style="width: ${util}%"></div>
                </div>
                <div class="metric-row">
                    <span class="metric-label">Memory</span>
                    <span class="metric-value">${(gpu.memory_used / 1024).toFixed(1)}/${(gpu.memory_total / 1024).toFixed(1)} GB</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill ${memPct > 90 ? 'crit' : memPct > 70 ? 'warn' : ''}" style="width: ${memPct}%"></div>
                </div>
                <div class="metric-row">
                    <span class="metric-label">Power</span>
                    <span class="metric-value">${(gpu.power || 0).toFixed(0)}W</span>
                </div>
            </div>
        `;
    }).join('');

    const sys = data.metrics.system;
    document.getElementById('system-info').innerHTML = `
        <div class="metric-row"><span class="metric-label">Hostname</span><span class="metric-value">${sys.hostname || 'N/A'}</span></div>
        <div class="metric-row"><span class="metric-label">CPU</span><span class="metric-value">${(sys.cpu_percent || 0).toFixed(1)}%</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width: ${sys.cpu_percent || 0}%"></div></div>
        <div class="metric-row"><span class="metric-label">Memory</span><span class="metric-value">${(sys.memory_used_gb || 0).toFixed(1)}/${(sys.memory_total_gb || 0).toFixed(1)} GB</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width: ${sys.memory_percent || 0}%"></div></div>
        <div class="metric-row"><span class="metric-label">Disk</span><span class="metric-value">${(sys.disk_used_gb || 0).toFixed(1)}/${(sys.disk_total_gb || 0).toFixed(1)} GB</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width: ${sys.disk_percent || 0}%"></div></div>
    `;

    const alertsList = document.getElementById('alerts-list');
    if (data.alerts && data.alerts.length > 0) {
        alertsList.innerHTML = data.alerts.map(a => `<div class="alert-item"><strong>${a.severity.toUpperCase()}</strong>: ${a.message}</div>`).join('');
    } else {
        alertsList.innerHTML = '<div style="color: var(--accent-green);">No active alerts</div>';
    }
    // Show client toasts for new alerts (dedupe by alert name/timestamp)
    try {
        // track seen alerts and cooldowns to avoid spamming users
        if (!window._seenAlerts) window._seenAlerts = new Set();
        if (!window._lastAlertAt) window._lastAlertAt = {};
        const COOLDOWN_MS = 10000; // 10 seconds cooldown per alert
        if (data.alerts && data.alerts.length > 0) {
            for (const a of data.alerts) {
                const aid = a.name || (a.timestamp ? a.timestamp + '|' + a.message : a.message);
                // dedupe: skip if we've shown this exact alert before
                if (window._seenAlerts.has(aid)) continue;
                // cooldown: skip if shown recently
                const now = Date.now();
                const last = window._lastAlertAt[aid] || 0;
                if (now - last < COOLDOWN_MS) continue;
                window._seenAlerts.add(aid);
                window._lastAlertAt[aid] = now;
                try {
                    // If this is a GPU VRAM cap exceed alert, show a red toast with GPU number
                    const m = /gpu_(\d+)_vram_cap_exceeded/.exec(a.name || '');
                    if (m) {
                        if (typeof showToast === 'function') showToast(`VRAM of GPU ${m[1]} exceeded`, { level: 'red', duration: 8000 });
                    } else {
                        const level = (a.severity === 'warning' || a.severity === 'critical' || a.severity === 'error') ? 'red' : 'yellow';
                        if (typeof showToast === 'function') showToast(a.message || (a.name || 'Alert'), { level, duration: 8000 });
                    }
                } catch (e) { console.debug('show alert toast failed', e); }
            }
        }
    } catch (e) { console.debug('alert toast processing failed', e); }

    document.getElementById('last-update').textContent = 'Last update: ' + new Date().toLocaleTimeString();
    if (data.is_admin !== undefined) window.isAdmin = data.is_admin;
}

async function loadHistory() {
    const metric = document.getElementById('metric-select').value;
    const hours = document.getElementById('hours-select').value;

    try {
        const historyResponse = await fetch(`/api/history?metric=${metric}&hours=${hours}`);
        const historyData = await historyResponse.json();

        const ctx = document.getElementById('historyChart').getContext('2d');

        if (historyChart) historyChart.destroy();

        const getUnit = (metric) => {
            if (metric.includes('utilization') || metric.includes('percent')) return '%';
            if (metric.includes('memory_used')) return 'MB';
            if (metric.includes('temperature')) return '°C';
            if (metric.includes('power')) return 'W';
            return '';
        }

        const unit = getUnit(metric);

        const yAxisOptions = {
            ticks: { color: '#a0a0a0' },
            grid: { color: '#4a4a4a' },
            beginAtZero: true,
            title: {
                display: true,
                text: unit,
                color: '#a0a0a0',
                font: {
                    size: 14,
                    weight: 'bold'
                }
            }
        };

        if (metric.includes('utilization') || metric.includes('percent')) {
            yAxisOptions.suggestedMax = 100;
        }
        if (metric.includes('temperature')) {
            yAxisOptions.suggestedMax = 100;
        }

        if (metric.startsWith('gpu_') && metric.includes('_memory_used')) {
            const statusResponse = await fetch('/api/status');
            const statusData = await statusResponse.json();
            const gpuIndex = parseInt(metric.split('_')[1]);
            const gpu = statusData.metrics.gpus[gpuIndex];
            if (gpu && gpu.memory_total) {
                yAxisOptions.max = gpu.memory_total;
            }
        }

        historyChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: historyData.data.map(d => new Date(d.timestamp).toLocaleTimeString()),
                datasets: [{
                    label: document.getElementById('metric-select').selectedOptions[0].text,
                    data: historyData.data.map(d => d.value),
                    borderColor: '#76b900',
                    backgroundColor: 'rgba(118, 185, 0, 0.1)',
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: '#f0f0f0',
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: '#a0a0a0', maxTicksLimit: 10 },
                        grid: { color: '#4a4a4a' }
                    },
                    y: yAxisOptions
                }
            }
        });
    } catch (error) {
        console.error('Error loading history:', error);
        if (window.showError) window.showError(error && error.message ? error.message : String(error));
    }
}

async function loadProcesses() {
    try {
        const response = await fetch('/api/processes');
        const data = await response.json();

        // Update VRAM bar if we have GPU memory stats
        if (data.gpu_memory && Object.keys(data.gpu_memory).length > 0) {
            const gpuKeys = Object.keys(data.gpu_memory);
            const gpu0 = data.gpu_memory[gpuKeys[0]];

            if (gpu0 && gpu0.total > 0) {
                const usedGB = (gpu0.used / 1024).toFixed(1);
                const totalGB = (gpu0.total / 1024).toFixed(1);
                const freeGB = (gpu0.free / 1024).toFixed(1);
                const usedPct = ((gpu0.total - gpu0.free) / gpu0.total) * 100;

                document.getElementById('vram-bar-container').style.display = 'block';
                document.getElementById('vram-used-bar').style.width = usedPct + '%';
                document.getElementById('vram-free').textContent = `${usedGB} / ${totalGB} GB (${freeGB} GB Free)`;

                // Change color based on usage - solid colors only
                const bar = document.getElementById('vram-used-bar');
                if (usedPct > 90) {
                    bar.style.background = 'var(--accent-red)';
                } else if (usedPct > 70) {
                    bar.style.background = 'var(--accent-yellow)';
                } else {
                    bar.style.background = 'var(--accent-green)';
                }
            }
        }

        const tbody = document.getElementById('process-list');
        if (!data.processes || data.processes.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 20px; color: var(--text-secondary);">No GPU processes running</td></tr>';
        } else {
            // Check if any process has utilization data
            const hasUtilData = data.processes.some(p => p.gpu_utilization !== null && p.gpu_utilization !== undefined);

            // Sort by GPU memory usage (descending)
            const sorted = data.processes.sort((a, b) => (b.gpu_memory_mb || 0) - (a.gpu_memory_mb || 0));

            const admin = window.isAdmin || false;
            const currentKeys = new Set(Array.from(tbody.querySelectorAll('tr[data-key]')).map(r => r.dataset.key));
            const newKeys = new Set(sorted.map(p => `proc-${p.pid}`));

            // 1. Remove rows no longer present
            Array.from(tbody.querySelectorAll('tr[data-key]')).forEach(row => {
                if (!newKeys.has(row.dataset.key)) row.remove();
            });

            // 2. Add or Update rows
            sorted.forEach(p => {
                const key = `proc-${p.pid}`;
                let row = tbody.querySelector(`tr[data-key="${key}"]`);

                let utilDisplay;
                if (p.gpu_utilization !== null && p.gpu_utilization !== undefined) {
                    utilDisplay = `${p.gpu_utilization.toFixed(1)}%`;
                } else if (hasUtilData) {
                    utilDisplay = '<span style="opacity: 0.5;">N/A</span>';
                } else {
                    if (sorted.indexOf(p) === 0) {
                        utilDisplay = `<span style="opacity: 0.5;" data-hover="Per-process GPU utilization requires:\n1. CUDA/compute workloads (not graphics)\n2. Accounting mode enabled\n3. Supported GPU hardware">Not available</span>`;
                    } else {
                        utilDisplay = '<span style="opacity: 0.5;">—</span>';
                    }
                }

                const btnHover = !admin ? 'data-hover="Available in Admin Mode"' : '';
                const actions = p.pid ? `<button onclick="terminateProcess(${p.pid})" ${!admin ? 'disabled' : ''} ${btnHover} class="terminate-btn" style="background: var(--accent-red); padding: 5px 10px; border: none; border-radius: 4px; color: white; cursor: pointer; font-size: 0.85em;">Terminate</button>` : '<span style="opacity: 0.5;">—</span>';

                const html = `
                    <td class="large-font" style="font-family: monospace; color: var(--accent-blue);">${p.pid}</td>
                    <td style="font-weight: 600;">${p.name || 'N/A'}</td>
                    <td style="font-size: 0.9em; opacity: 0.8;">GPU ${p.gpu_index}</td>
                    <td class="large-font" style="color: var(--accent-blue);">${utilDisplay}</td>
                    <td style="font-size: 0.9em;">${p.username || 'N/A'}</td>
                    <td>${actions}</td>
                `;

                if (row) {
                    if (row.innerHTML !== html) row.innerHTML = html;
                } else {
                    const newRow = document.createElement('tr');
                    newRow.dataset.key = key;
                    newRow.innerHTML = html;
                    tbody.appendChild(newRow);
                }
            });

            // Cleanup legacy
            Array.from(tbody.querySelectorAll('tr')).forEach(r => {
                if (!r.dataset.key) r.remove();
            });
        }
    } catch (error) {
        console.error('Error loading processes:', error);
        document.getElementById('process-list').innerHTML =
            '<tr><td colspan="6" style="color: var(--accent-red);">Error loading processes</td></tr>';
        if (window.showError) window.showError(error && error.message ? error.message : String(error));
    }
}

async function terminateProcess(pid, action = 'kill') {
    const actionLabel = action === 'free' ? 'free port from' : 'terminate';
    if (!confirm(`Are you sure you want to ${actionLabel} process ${pid}?`)) return;
    try {
        const res = await fetch('/api/processes/terminate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pid, action })
        });
        const data = await res.json();
        if (data.status === 'success') {
            if (window.showSuccess) window.showSuccess(data.message);
            // Refresh whatever is visible
            if (typeof loadProcesses === 'function') loadProcesses();
            if (typeof loadPorts === 'function') loadPorts();
        } else if (data.status === 'warning') {
            if (window.showWarn) window.showWarn(data.message);
        } else {
            if (window.showError) window.showError(data.message);
        }
    } catch (e) {
        if (window.showError) window.showError('Termination failed: ' + e.message);
    }
}

async function loadPorts() {
    try {
        const response = await fetch('/api/ports');
        const data = await response.json();
        const ports = data.ports || [];

        const tbody = document.getElementById('port-list');
        const admin = window.isAdmin || false;

        // Differential update logic: use map to compare
        const currentKeys = new Set(Array.from(tbody.querySelectorAll('tr[data-key]')).map(r => r.dataset.key));
        const newKeys = new Set(ports.map(p => `${p.local_port}-${p.pid}-${p.type}`));

        // 1. Remove rows no longer present
        Array.from(tbody.querySelectorAll('tr[data-key]')).forEach(row => {
            if (!newKeys.has(row.dataset.key)) row.remove();
        });

        if (ports.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 20px; color: var(--text-secondary);">No active ports detected</td></tr>';
            return;
        }

        // 2. Add or Update rows
        ports.forEach(p => {
            const key = `${p.local_port}-${p.pid}-${p.type}`;
            let row = tbody.querySelector(`tr[data-key="${key}"]`);

            // Two buttons: Free Port (soft) and Terminate (hard)
            // Both are shown, but disabled if not admin
            const btnHover = !admin ? 'data-hover="Available in Admin Mode"' : '';
            const freeBtn = `<button onclick="terminateProcess(${p.pid}, 'free')" ${!admin ? 'disabled' : ''} ${btnHover} class="terminate-btn" style="background: var(--accent-blue); padding: 5px 10px; border: none; border-radius: 4px; color: white; cursor: pointer; font-size: 0.8em; margin-right: 5px;">Free Port</button>`;
            const termBtn = `<button onclick="terminateProcess(${p.pid}, 'kill')" ${!admin ? 'disabled' : ''} ${btnHover} class="terminate-btn" style="background: var(--accent-red); padding: 5px 10px; border: none; border-radius: 4px; color: white; cursor: pointer; font-size: 0.8em;">Terminate</button>`;
            const actions = p.pid ? (freeBtn + termBtn) : '<span style="opacity: 0.5;">—</span>';

            const statusClass = p.status === 'LISTEN' ? 'status-healthy' : 'status-info';
            const html = `
                <td class="large-font" style="font-family: monospace; color: var(--accent-blue);">${p.local_port}</td>
                <td><span style="font-size: 0.8em; opacity: 0.8; background: var(--bg-tertiary); padding: 2px 5px; border-radius: 3px;">${p.type}</span></td>
                <td title="${p.ownership} process" style="font-weight: 500;">${p.process_name} ${p.ownership === 'System' ? '<span title="System Process">🛡️</span>' : ''}</td>
                <td class="large-font" style="font-family: monospace; opacity: 0.9;">${p.pid || '—'}</td>
                <td class="large-font"><span class="status-badge ${statusClass}" style="padding: 4px 10px; font-size: 0.8em; border-radius: 12px;">${p.status || 'ACTIVE'}</span></td>
                <td>${actions}</td>
            `;

            if (row) {
                if (row.innerHTML !== html) row.innerHTML = html;
            } else {
                const newRow = document.createElement('tr');
                newRow.dataset.key = key;
                newRow.innerHTML = html;
                tbody.appendChild(newRow);
            }
        });

        // Cleanup: remove any legacy "Loading..." or "No data" rows that don't have a data-key
        Array.from(tbody.querySelectorAll('tr')).forEach(r => {
            if (!r.dataset.key) r.remove();
        });

    } catch (e) {
        console.error('Error loading ports:', e);
        if (window.showError) window.showError('Failed to load ports');
    }
}

// Load server-detected features and update UI accordingly
async function loadFeatures() {
    try {
        const resp = await fetch('/api/features');
        if (!resp.ok) return;
        const features = await resp.json();
        const backendSelect = document.getElementById('benchmark-backend-select');
        if (!backendSelect) return;

        // Enable all by default then disable unsupported
        Array.from(backendSelect.options).forEach(opt => { opt.disabled = false; });

        if (!features.cupy) {
            const opt = Array.from(backendSelect.options).find(o => o.value === 'cupy');
            if (opt) { opt.disabled = true; opt.setAttribute('data-hover', 'CuPy not available on server'); }
        }
        if (!features.torch) {
            const opt = Array.from(backendSelect.options).find(o => o.value === 'torch');
            if (opt) { opt.disabled = true; opt.setAttribute('data-hover', 'PyTorch (CUDA) not available on server'); }
        }

        // If neither cupy nor torch available, set default to Auto (client will show no GPU backends)
        if (!features.cupy && !features.torch) {
            backendSelect.value = 'auto';
        }
    } catch (e) {
        console.debug('loadFeatures failed', e);
    }
}

// Check GitHub releases for updates to the UI/backend project
async function checkForUpdates() {
    try {
        // Read current version from footer text
        const footer = document.querySelector('footer p');
        let current = null;
        if (footer) {
            const m = footer.textContent.match(/v?(\d+\.\d+\.\d+)/);
            if (m) current = m[1];
        }

        const apiUrl = 'https://api.github.com/repos/DataBoySu/MyGPU/releases/latest';
        const resp = await fetch(apiUrl, { headers: { 'Accept': 'application/vnd.github.v3+json' } });
        if (!resp.ok) {
            const txt = await resp.text();
            if (window.showError) window.showError('Update check failed: ' + resp.status + ' ' + txt);
            return;
        }

        const data = await resp.json();
        const latestTag = data.tag_name || data.name || data.tag || '';
        const latestMatch = (latestTag || '').match(/v?(\d+\.\d+\.\d+)/);
        const latest = latestMatch ? latestMatch[1] : null;

        if (!current || !latest) {
            if (window.showSuccess) window.showSuccess('Latest release: ' + (latestTag || 'unknown'));
            return;
        }

        function cmpVer(a, b) {
            const pa = a.split('.').map(n => parseInt(n || '0'));
            const pb = b.split('.').map(n => parseInt(n || '0'));
            for (let i = 0; i < 3; i++) { if ((pa[i] || 0) < (pb[i] || 0)) return -1; if ((pa[i] || 0) > (pb[i] || 0)) return 1; }
            return 0;
        }

        const comp = cmpVer(current, latest);
        if (comp < 0) {
            // newer available
            const url = data.html_url || ('https://github.com/DataBoySu/MyGPU/releases');
            if (window.showError) window.showError('Update available: ' + latest + ' — ' + url, 20000);
        } else {
            if (window.showSuccess) window.showSuccess('You are up-to-date (' + current + ')');
        }
    } catch (e) {
        console.debug('checkForUpdates failed', e);
        if (window.showError) window.showError('Update check error: ' + (e && e.message ? e.message : String(e)));
    }
}
