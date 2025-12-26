# MyGPU: Utilidad de Gestión de GPU Ligera: un envoltorio compacto de `nvidia-smi` con un elegante tablero web.

## Galería

### Tablero Web

- **Interfaz de usuario web**
- Gráficos en tiempo real
- Monitoreo detallado de la GPU y el sistema

### CLI

- Herramienta de línea de comandos para administración y monitoreo
- Configuración flexible
- Integración con Docker

### Características

- **Monitoreo en tiempo real**: Métricas detalladas de la GPU y el sistema.
- **Administración y aplicación de políticas**: Límites de VRAM, terminación automática de procesos, listas de vigilancia.
- **Benchmarking y simulación**: Pruebas de estrés, simulación de física de partículas.

### Roadmap y Trabajo Futuro

- **Soporte multi-GPU**: Manejo mejorado para configuraciones multi-tarjeta y topologías NVLink.
- **Contenedorización**: Soporte oficial de Docker para una fácil implementación en entornos contenedorizados.
- **Acceso remoto**: Integración de túneles SSH y gestión remota segura.
- **Plataformas cruzadas**:
  - Soporte para Linux (Ubuntu/Debian).
  - Soporte para Apple Silicon en macOS.
- **Independencia de hardware**:
  - Soporte para AMD ROCm.
  - Soporte para Intel Arc.
- **Documentación multilingüe**: (en desarrollo)

### Requisitos

- **Sistema operativo**: Windows 10/11
- **Python**: 3.10 o superior
- **Hardware**: GPU NVIDIA con controladores instalados.
- **CUDA**: Toolkit 12.x (requerido estrictamente para características de benchmarking y simulación).

### Instalación

La herramienta admite una instalación modular para adaptarse a sus necesidades:

#### 1. Mínima (solo CLI)

Ideal para servidores sin cabeza o monitoreo en segundo plano.

- Interfaz de línea de comandos.
- Métricas básicas del sistema y la GPU.

#### 2. Estándar (CLI + Tablero Web)

Ideal para la mayoría de los usuarios.

- Incluye Tablero Web.
- Puntos finales de API REST.
- Gráficos en tiempo real.
- Sin simulación ni benchmarking.

#### 3. Completa (Estándar + Visualización)

Ideal para desarrollo y pruebas de estrés.

- Incluye simulación.
- Dependencias de PyTorch/CuPy para benchmarking.

### Inicio rápido

1. **Descargar** la última versión o clonar el repositorio.
2. **Ejecutar configuración**:

   [[PB_0]]

3. **Lanzar**:

[[PB_1]]

## Licencia

Licencia MIT. Consulte los detalles en [LICENSE](../LICENSE).