# Cluster Health Monitor

Real-time GPU and system monitoring with web dashboard and CLI interface. Features intelligent GPU stress testing with auto-scaling workloads and performance baselines.

## Features

### Monitoring
- Real-time GPU metrics (utilization, memory, temperature, power)
- System metrics (CPU, memory, disk I/O)
- Web dashboard with live charts
- Terminal interface with auto-refresh
- Historical data storage and alerting

### GPU Benchmarking
- GEMM (matrix multiplication) stress test
- Particle simulation workload
- Auto-scaling stress test (dynamically increases load to 98% GPU utilization)
- Performance baseline tracking per GPU and benchmark type
- Multiple test modes: Quick (15s), Standard (60s), Extended (180s), Stress Test, Custom

## Requirements

### Core Monitoring (Always Available)
- Python 3.8+
- NVIDIA GPU with drivers installed
- `nvidia-smi` command available

### GPU Benchmarking (Optional)
- CUDA Toolkit 12.0+ or compatible
- One of:
  - CuPy: `pip install cupy-cuda12x` (or appropriate CUDA version)
  - PyTorch: `pip install torch --index-url https://download.pytorch.org/whl/cu121`

## Installation

### 1. Clone Repository
```bash
git clone https://github.com/DataBoySu/cluster-monitor.git
cd cluster-health-monitor
```

### 2. Create Virtual Environment
```bash
python -m venv .venv
```

Activate:
- Windows: `.venv\Scripts\activate`
- Linux/Mac: `source .venv/bin/activate`

### 3. Install Dependencies

**Basic Monitoring:**
```bash
pip install -r requirements.txt
```

**With GPU Benchmarking (CuPy):**
```bash
pip install -r requirements.txt
pip install cupy-cuda12x  # Adjust for your CUDA version
```

**With GPU Benchmarking (PyTorch):**
```bash
pip install -r requirements.txt
pip install torch --index-url https://download.pytorch.org/whl/cu121
```

### 4. Verify Installation
```bash
python health_monitor.py --help
```

## Usage

### Web Dashboard (Recommended)
```bash
python health_monitor.py monitor --web
```

Access at: http://localhost:8090

Features:
- Real-time GPU/system metrics
- Interactive benchmark controls
- Live performance charts
- Historical data visualization

### Terminal Dashboard
```bash
python health_monitor.py monitor
```

Displays live metrics in terminal with auto-refresh.

### CLI Benchmark
```bash
# Quick 15-second test
python health_monitor.py benchmark --mode quick

# Standard 60-second test  
python health_monitor.py benchmark --mode standard

# Stress test with auto-scaling (pushes GPU to 98% util)
python health_monitor.py benchmark --mode stress-test --type particle

# Extended 180-second burn-in
python health_monitor.py benchmark --mode extended

# Custom configuration
python health_monitor.py benchmark --mode custom --duration 120 --temp-limit 85
```

## Benchmark Modes

| Mode | Duration | Workload | Auto-Scale | Use Case |
|------|----------|----------|------------|----------|
| Quick | 15s | Fixed | No | Quick baseline check |
| Standard | 60s | Fixed | No | Standard benchmark |
| Extended | 180s | Fixed | No | Long-term stability |
| Stress Test | 60s | Dynamic | Yes | Maximum GPU load testing |
| Custom | Variable | Fixed | Optional | User-defined parameters |

### Auto-Scaling Stress Test

The Stress Test mode automatically increases workload intensity:

1. Starts with baseline workload (2048x2048 GEMM or 100K particles)
2. Every 2 seconds, checks GPU utilization
3. Scales workload aggressively if GPU util < target:
   - `<70% util`: 2.0x scaling
   - `70-85% util`: 1.5x scaling  
   - `85-93% util`: 1.2x scaling
   - `>93% util`: Target reached
4. Continues scaling up to 15 times or until 98% GPU utilization achieved

Example progression:
```
100K particles → 200K → 400K → 800K → 1.2M → 1.8M → 2.2M → 2.6M (94% GPU util)
```

## Benchmark Types

### GEMM (Matrix Multiplication)
Dense matrix multiplication for maximum compute stress. Measures TFLOPS.

```bash
python health_monitor.py benchmark --type gemm --mode stress-test
```

### Particle Simulation
Vectorized particle physics simulation with collision detection. Measures steps/second.

```bash
python health_monitor.py benchmark --type particle --mode stress-test
```

## Configuration

Edit `config.yaml`:

```yaml
monitoring:
  interval_seconds: 5
  history_retention_hours: 168

alerts:
  gpu_temperature_warn: 80
  gpu_temperature_critical: 90
  gpu_memory_usage_warn: 90

web:
  host: 0.0.0.0
  port: 8090

storage:
  path: ./metrics.db
```

## Project Structure

```
cluster-health-monitor/
├── monitor/
│   ├── benchmark/
│   │   ├── config.py          # Benchmark configuration
│   │   ├── storage.py         # Baseline storage (SQLite)
│   │   ├── workloads.py       # GPU workloads (GEMM/Particle)
│   │   └── runner.py          # Benchmark orchestration
│   ├── collectors/
│   │   ├── gpu.py             # GPU metrics via nvidia-smi
│   │   ├── system.py          # CPU, memory, disk
│   │   └── network.py         # Network info
│   ├── storage/
│   │   └── sqlite.py          # Metrics persistence
│   ├── api/
│   │   ├── server.py          # FastAPI web server
│   │   └── templates/
│   │       └── index.html     # Web dashboard
│   └── cli/
│       └── benchmark_cli.py   # CLI commands
├── config.yaml                # Configuration
├── requirements.txt           # Dependencies
└── health_monitor.py          # Main entry point
```

## API Endpoints

When running web server (`--web`):

- `GET /` - Web dashboard
- `GET /api/status` - Current metrics
- `GET /api/history` - Historical data
- `POST /api/benchmark/start` - Start benchmark
- `GET /api/benchmark/status` - Benchmark progress
- `POST /api/benchmark/stop` - Stop benchmark
- `GET /api/benchmark/results` - Get results
- `GET /api/benchmark/baseline` - Get baseline for GPU

## Troubleshooting

### "nvidia-smi not found"
- Install NVIDIA drivers
- Add nvidia-smi to PATH
- Verify: `nvidia-smi` in terminal

### "No CUDA libraries found"
Benchmarking features disabled without CUDA libraries. Install CuPy or PyTorch.

### Web dashboard not loading data
- Check terminal for errors
- Verify port 8090 is available
- Check firewall settings
- Try: `http://127.0.0.1:8090`

### Benchmark not scaling GPU to 98%
- Increase max_scales in runner.py
- Check GPU has available memory
- Verify no other GPU workloads running
- Try different benchmark type (GEMM vs Particle)

## Performance Tips

1. **Close other GPU applications** during benchmarking
2. **Adequate cooling** for stress tests
3. **Monitor temperatures** - tests will stop at temp limit
4. **Use Stress Test mode** to find maximum GPU performance
5. **Run Extended mode** for stability validation

## Development

### Run Tests
```bash
pytest tests/
```

### Code Structure
- Modular design: config, storage, workloads, runner separated
- Clean API exports via `__init__.py`
- Type hints throughout
- Comprehensive error handling

### Contributing
1. Fork repository
2. Create feature branch
3. Add tests for new features
4. Submit pull request

## License

MIT License - See LICENSE file

## Acknowledgments

- Built with FastAPI, Rich, Chart.js
- GPU compute via CuPy and PyTorch
- Inspired by nvidia-smi and GPU monitoring tools

## Support

- Issues: GitHub Issues
- Documentation: This README
- CUDA setup: https://developer.nvidia.com/cuda-downloads
