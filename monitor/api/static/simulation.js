// simulation.js - Particle simulation visualization controls

async function startSimulation() {
    console.log('Start Simulation clicked');
    console.log('Current benchmark type:', selectedBenchType);
    console.log('Current mode:', selectedMode);
    
    const btn = document.getElementById('start-sim-btn');
    
    // Prevent multiple clicks while simulation is starting
    if (btn.disabled) {
        console.log('Simulation already starting, ignoring click');
        return;
    }
    
    // Check current benchmark type
    const currentType = selectedBenchType;
    let modeToUse;
    
    // If not on particle type, switch to it and use 'quick' mode
    if (currentType !== 'particle') {
        selectBenchType('particle');
        modeToUse = 'quick';
        selectMode('quick');
    } else {
        // Use the currently selected mode
        modeToUse = selectedMode;
    }
    
    const stopBtn = document.getElementById('stop-bench-btn');
    btn.disabled = true;
    btn.textContent = 'Opening Simulation...';
    stopBtn.style.display = 'inline-block';
    
    document.getElementById('benchmark-progress').style.display = 'block';
    document.getElementById('benchmark-live-charts').style.display = 'block';
    document.getElementById('benchmark-results').innerHTML = '';
    document.getElementById('bench-stop-reason').textContent = '';
    document.getElementById('iteration-counter').style.display = 'inline';
    document.getElementById('iteration-counter').textContent = 'Iteration #0';
    
    // Get duration and particles based on selected mode
    let duration = 60;
    let particles = 100000;
    let backendMultiplier = 1;  // Default to 1x (no backend stress)
    let autoScale = false;  // Only auto-scale in stress-test mode
    
    if (modeToUse === 'quick') {
        duration = 15;
        particles = 50000;
        backendMultiplier = 1;
        autoScale = false;
    } else if (modeToUse === 'standard') {
        duration = 60;
        particles = 100000;
        backendMultiplier = 1;
        autoScale = false;
    } else if (modeToUse === 'extended') {
        duration = 180;
        particles = 100000;
        backendMultiplier = 1;
        autoScale = false;
    } else if (modeToUse === 'stress-test') {
        duration = 60;
        particles = 200000;
        backendMultiplier = 15;
        autoScale = true;  // Enable auto-scaling for stress test
    } else if (modeToUse === 'custom') {
        duration = parseInt(document.getElementById('custom-duration-val').value);
        particles = Math.round(parseFloat(document.getElementById('custom-particles-val').value) * 1000000);
        backendMultiplier = 1;
        autoScale = false;
    }
    
    // Build URL with params - use actual mode and only enable auto-scaling for stress-test
    let url = `/api/benchmark/start?benchmark_type=particle&visualize=true&mode=${modeToUse}&auto_scale=${autoScale}&duration=${duration}&num_particles=${particles}&backend_multiplier=${backendMultiplier}`;
    
    // Initialize live charts
    initLiveCharts();
    
    try {
        await fetch(url, { method: 'POST' });
        btn.textContent = 'Simulation Running';
        benchmarkPollInterval = setInterval(pollBenchmarkStatus, 500);
    } catch (error) {
        console.error('Error starting simulation:', error);
        btn.disabled = false;
        btn.textContent = 'Start Simulation';
        stopBtn.style.display = 'none';
    }
}
