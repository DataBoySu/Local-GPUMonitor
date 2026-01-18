import os
import platform
import socket
from typing import Dict, Any

try:
    import psutil
    PSUTIL_AVAILABLE = True
except ImportError:
    PSUTIL_AVAILABLE = False


class SystemCollector:
    """Collects system metrics via psutil."""
    
    def collect(self) -> Dict[str, Any]:
        metrics = {
            'hostname': socket.gethostname(),
            'platform': platform.system(),
        }
        
        if PSUTIL_AVAILABLE:
            metrics.update(self._collect_psutil())
        else:
            metrics['warning'] = 'Install psutil for detailed system metrics'
        
        return metrics
    
    def _collect_psutil(self) -> Dict[str, Any]:
        metrics = {}
        
        try:
            metrics['cpu_percent'] = psutil.cpu_percent(interval=0.1)
            metrics['cpu_count'] = psutil.cpu_count()
            metrics['cpu_freq'] = psutil.cpu_freq().current if psutil.cpu_freq() else 0
        except Exception as e:
            metrics['cpu_error'] = str(e)
        
        try:
            mem = psutil.virtual_memory()
            metrics['memory_total_gb'] = mem.total / (1024**3)
            metrics['memory_used_gb'] = mem.used / (1024**3)
            metrics['memory_available_gb'] = mem.available / (1024**3)
            metrics['memory_percent'] = mem.percent
        except Exception as e:
            metrics['memory_error'] = str(e)
        
        try:
            disk = psutil.disk_usage('/')
            metrics['disk_total_gb'] = disk.total / (1024**3)
            metrics['disk_used_gb'] = disk.used / (1024**3)
            metrics['disk_free_gb'] = disk.free / (1024**3)
            metrics['disk_percent'] = disk.percent
        except Exception as e:
            metrics['disk_error'] = str(e)
        
        try:
            if hasattr(os, 'getloadavg'):
                metrics['load_avg'] = list(os.getloadavg())
            else:
                metrics['load_avg'] = [0, 0, 0]
        except Exception:
            metrics['load_avg'] = [0, 0, 0]
        
        try:
            net = psutil.net_io_counters()
            metrics['net_bytes_sent'] = net.bytes_sent
            metrics['net_bytes_recv'] = net.bytes_recv
        except Exception:
            pass
        
        try:
            metrics['uptime_seconds'] = (psutil.time.time() - psutil.boot_time())
        except Exception:
            pass
        
        return metrics

    def collect_ports(self) -> list:
        """Collect active ports and associated processes."""
        if not PSUTIL_AVAILABLE:
            return []
            
        ports = []
        try:
            connections = psutil.net_connections(kind='inet')
            
            # Helper to categorize users
            system_users = {
                'SYSTEM', 'LOCAL SERVICE', 'NETWORK SERVICE', 
                'NT AUTHORITY\\SYSTEM', 'NT AUTHORITY\\LocalService', 'NT AUTHORITY\\NetworkService',
                'root', 'bin', 'daemon', 'sys', 'systemd-network', 'systemd-resolve'
            }

            for conn in connections:
                if not conn.laddr:
                    continue
                    
                port_info = {
                    'fd': conn.fd,
                    'family': 'IPv4' if conn.family == socket.AF_INET else 'IPv6',
                    'type': 'TCP' if conn.type == socket.SOCK_STREAM else 'UDP',
                    'local_address': conn.laddr.ip,
                    'local_port': conn.laddr.port,
                    'remote_address': conn.raddr.ip if conn.raddr else None,
                    'remote_port': conn.raddr.port if conn.raddr else None,
                    'status': conn.status,
                    'pid': conn.pid,
                    'process_name': 'Unknown',
                    'username': 'Unknown',
                    'ownership': 'System'
                }
                
                if conn.pid:
                    try:
                        proc = psutil.Process(conn.pid)
                        port_info['process_name'] = proc.name()
                        try:
                            username = proc.username()
                            port_info['username'] = username
                            # ownership categorization
                            if username and not any(u.lower() in username.lower() for u in system_users):
                                port_info['ownership'] = 'User'
                        except Exception:
                            pass
                    except (psutil.NoSuchProcess, psutil.AccessDenied):
                        pass
                
                ports.append(port_info)
        except Exception:
            pass
            
        # Sorting: User apps first, then port number
        return sorted(ports, key=lambda x: (0 if x['ownership'] == 'User' else 1, x['local_port']))
