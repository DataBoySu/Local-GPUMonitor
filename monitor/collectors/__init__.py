"""Collector helpers for the monitor package.

Provide lightweight imports and a stable ``__all__`` so callers can do::

	from monitor.collectors import GPUCollector, SystemCollector

Avoid importing heavy optional dependencies at package import time.
"""

from importlib import import_module
from typing import TYPE_CHECKING

if TYPE_CHECKING:
	# Type-checkers can import concrete symbols without executing runtime code
	from .gpu import GPUCollector  # type: ignore
	from .system import SystemCollector  # type: ignore
	from .network import NetworkCollector  # type: ignore


def _lazy(name: str):
	mod = import_module(f"monitor.collectors.{name}")
	# Try several candidate class names to handle acronyms (GPU) and
	# different naming styles, then fall back to any attribute that
	# ends with 'Collector'. This avoids incorrect capitalization like
	# 'GpuCollector' when the class is named 'GPUCollector'.
	parts = name.split('_')
	candidates = [
		name.upper() + 'Collector',
		''.join(p.capitalize() for p in parts) + 'Collector',
		parts[0].capitalize() + 'Collector',
	]

	for cand in candidates:
		if hasattr(mod, cand):
			return getattr(mod, cand)

	# Fallback: find any symbol that ends with 'Collector'
	for attr in dir(mod):
		if attr.endswith('Collector'):
			return getattr(mod, attr)

	raise AttributeError(f"No Collector class found in module monitor.collectors.{name}")

GPUCollector = _lazy('gpu')
SystemCollector = _lazy('system')
NetworkCollector = _lazy('network')

__all__ = ['GPUCollector', 'SystemCollector', 'NetworkCollector']
