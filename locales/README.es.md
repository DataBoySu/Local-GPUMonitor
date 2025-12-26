<div align="center">
  <a href="../README.md">🇺🇸 English</a> |
  <a href="../README.de.md">🇩🇪 Deutsch</a> |
  <a href="../README.fr.md">🇫🇷 Français</a> |
  <a href="../README.es.md">🇪🇸 Español</a> |
  <a href="../README.ja.md">🇯🇵 日本語</a> |
  <a href="../README.zh.md">🇨🇳 中文</a> |
  <a href="../README.pt.md">🇵🇹 Português</a> |
  <a href="../README.ko.md">🇰🇷 한국어</a> |
  <a href="../README.hi.md">🇮🇳 Hindi</a>
</div>

<div style="text-align:center; margin:18px 0;">
  <img src="../monitor/api/static/logo.png" alt="MyGPU logo"/>
</div>

> *MyGPU: Utilidad de gestión de GPU ligera: un envoltorio compacto de `nvidia-smi` con un elegante tablero web.*

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.10%2B-blue)
![Version](https://img.shields.io/badge/version-1.2.3-blue)
![Platform](https://img.shields.io/badge/platform-Windows-lightgrey)
![cuda 12.x](https://img.shields.io/badge/CUDA-12.x-0f9d58?logo=nvidia)

## Gallery

<details>
  <summary>Web Dashboard</summary>
  <div style="display:flex; overflow-x:auto; gap:10px; padding:12px 0; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch;">
    <!-- Use first image aspect ratio 1624x675 for slide frame; images fit inside using object-fit:contain -->
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/web1.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/web2.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/web3.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/web4.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
  </div>

</details>
<details>
  <summary>CLI</summary>
  <div style="display:flex; overflow-x:auto; gap:10px; padding:12px 0; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch;">

  <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/cli1.png" style="width:100%; height:100%; object-fit:contain;" />
  </div>
  <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/cli2.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/cli3.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/cli4.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/cli5.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>

</details>

### ¿Por qué usar esto?

- **Ligera**: Huella de recursos mínima.
- **Versátil**: Se ejecuta como una herramienta de línea de comandos o un tablero web completo.
- **Centrada en la administración**: Incluye características como **límites de VRAM** (desactivación automática de procesos que superan los límites) y **listas de vigilancia**.
- **Amigable para desarrolladores**: Herramientas de benchmarking y pruebas de estrés integradas (GEMM, Física de Partículas) para validar la estabilidad del sistema.

---

## Características

- **Monitoreo en tiempo real**:
  - Métricas detalladas de la GPU (Utilización, VRAM, Potencia, Temperatura).
  - Métricas del sistema (CPU, RAM, etc.).

- **Administración y aplicación de políticas**:
  - **Límites de VRAM**: Establecer límites duros en el uso de VRAM por GPU.
  - **Desactivación automática**: Desactivar automáticamente los procesos que violen las políticas de VRAM (solo para administradores).
  - **Listas de vigilancia**: Monitorear PIDs o nombres de procesos específicos.

- **Benchmarking y simulación**:
  - **Pruebas de estrés**: Cargas de trabajo GEMM configurables para probar el sobrecalentamiento y la estabilidad.
  - **Simulación visual**: Simulación interactiva de física de partículas para visualizar la carga de trabajo de la GPU.

---

## Roadmap y trabajo futuro

¡Las contribuciones son bienvenidas! Los puntos futuros principales a cubrir serían:

- **Soporte multi-GPU**: Manejo mejorado para configuraciones de múltiples tarjetas y topologías NVLink.
- **Contenedorización**: Soporte oficial de Docker para una fácil implementación en entornos contenedorizados.
- **Acceso remoto**: Integración de túneles SSH y gestión remota segura.
- **Plataforma cruzada**:
  - [ ] Soporte para Ubuntu/Debian (enfocado en Linux).
  - [ ] Soporte para Apple Silicon (monitoreo en macOS).
- **Independiente de hardware**:
  - [ ] Soporte para AMD ROCm.
  - [ ] Soporte para Intel Arc.
- ~~**Documentación multilingüe**: Apoyo a los lenguajes más populares de GitHub.~~

Consulte [CONTRIBUTING.md](../CONTRIBUTING.md) para saber cómo involucrarse.

---

## Requisitos

- **Sistema operativo**: Windows 10/11
- **Python**: 3.10+
- **Hardware**: GPU NVIDIA con controladores instalados.
- **CUDA**: Toolkit 12.x (requerido estrictamente para las características de benchmarking/simulación).
  - *Nota: Si CUDA 12.x no se detecta, las características de benchmarking GPU se desactivarán.*

---

## Instalación

La herramienta admite una instalación modular para adaptarse a sus necesidades:

### 1. Mínima (solo línea de comandos)

Ideal para servidores sin cabeza o monitoreo en segundo plano.

- Interfaz de línea de comandos.
- Métricas básicas del sistema/GPU.

### 2. Estándar (línea de comandos + interfaz web)

Ideal para la mayoría de los usuarios.

- Incluye tablero web.
- Puntos finales de API REST.
- Gráficos en tiempo real.

### 3. Completa (Estándar + Visualización)

Ideal para desarrollo y pruebas de estrés.

- Incluye simulación de partículas.
- Dependencias de PyTorch/CuPy para benchmarking.

### Inicio rápido

1. **Descargar** la última versión o clonar el repositorio.
2. **Ejecutar el script de configuración**:

  ```powershell
  .\setup.ps1
  ```

3. **Iniciar**:

```powershell
# Iniciar el tablero web (Estándar/Completa)
python health_monitor.py web

# Iniciar la CLI
python health_monitor.py cli
```

---

## Licencia

Licencia MIT. Consulte [LICENSE](../LICENSE) para más detalles.