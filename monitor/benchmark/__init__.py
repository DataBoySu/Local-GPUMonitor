"""GPU Benchmark module - modular benchmark system.

Public API:
- GPUBenchmark: Main benchmark orchestrator
- BenchmarkConfig: Configuration dataclass
- get_benchmark_instance: Global benchmark instance factory
"""

from .config import BenchmarkConfig
from .runner import GPUBenchmark, get_benchmark_instance
from .storage import BaselineStorage
from .workloads import GPUStressWorker

__all__ = [
    'BenchmarkConfig',
    'GPUBenchmark',
    'get_benchmark_instance',
    'BaselineStorage',
    'GPUStressWorker',
]
