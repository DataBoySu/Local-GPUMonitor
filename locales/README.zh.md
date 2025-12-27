<!-- HTML_BLOCK:1... -->

<div align="center">
  <a href="../README.md">🇺🇸 English</a> |
  <a href="../locales/README.de.md">🇩🇪 Deutsch</a> |
  <a href="../locales/README.ru.md">🇷🇺 Русский</a> |
  <a href="../locales/README.fr.md">🇫🇷 Français</a> |
  <a href="../locales/README.es.md">🇪🇸 Español</a> |
  <a href="../locales/README.ja.md">🇯🇵 日本語</a> |
  <a href="../locales/README.zh.md">🇨🇳 中文</a> |
  <a href="../locales/README.pt.md">🇵🇹 Português</a> |
  <a href="../locales/README.ko.md">🇰🇷 한국어</a> |
  <a href="../locales/README.hi.md">🇮🇳 हिंदी</a>
</div>

<!-- HTML_BLOCK:2... -->

<div style="text-align:center; margin:18px 0;">
  <img src="../monitor/api/static/logo.png" alt="MyGPU logo"/>
</div>

<!-- HTML_BLOCK:... -->

> *MyGPU: Lightweight GPU Management Utility: a compact `nvidia-smi` wrapper with an elegant web dashboard.*
<!-- HTML_BLOCK: no change to url; output entire as it is... -->
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.10%2B-blue)
![Version](https://img.shields.io/badge/version-1.2.3-blue)
![Platform](https://img.shields.io/badge/platform-Windows-lightgrey)
![cuda 12.x](https://img.shields.io/badge/CUDA-12.x-0f9d58?logo=nvidia)

## 画廊

<details>

  <summary>
    网络仪表板
  </summary>

  <div style="display:flex; overflow-x:auto; gap:10px; padding:12px 0; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch;">
    <!-- 使用第一张图片的 1624x675 宽高作为滑块框架；图片使用 `object-fit:contain` 填充框架 -->
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

### 为什么使用它？

- **轻量级**：资源占用最小。
- **灵活**：可作为命令行工具或全功能 Web 仪表板运行。
- **以管理员为中心的**：包含 **VRAM 强制执行**（自动杀死超出限制的进程）和 **监控列表**等功能。
- **开发人员友好**：内置基准测试和压力测试工具（GEMM、粒子物理），用于验证系统稳定性。

## 功能

- **实时监控**：
  - GPU 详细指标（利用率、VRAM、功耗、温度）。
  - 系统指标（CPU、内存等）。

- **管理与执行**：
  - **VRAM 限制**：为每个 GPU 设置 VRAM 使用量的硬限额。
  - **自动终止**：（仅管理员）自动终止违反 VRAM 政策的进程。
  - **监控列表**：监控特定 PIDs 或过程名称。

- **基准测试与模拟**：
  - **压力测试**：配置可调的 GEMM 加载量以测试热量限制和稳定性。
  - **视觉模拟**：交互式 3D 粒子物理模拟，以可视化 GPU 加载量。

## 路线图与未来工作

欢迎贡献！主要未来工作重点包括：

- **多GPU支持**：增强对多卡设置和NVLink拓扑的处理。
- **容器化**：官方Docker支持，方便在容器化环境中部署。
- **远程访问**：集成SSH隧道和安全远程管理。
- **跨平台**：
  - [ ] Linux支持（Ubuntu/Debian重点关注）。
  - [ ] macOS支持（Apple Silicon监控）。
- **硬件无感知**：
  - [ ] AMD ROCm支持。
  - [ ] Intel Arc支持。
- ~~**多语言文档**：支持GitHub上最受欢迎的语言。~~

请参阅[CONTRIBUTING.md](../CONTRIBUTING.md)了解如何参与。

## 要求

- **操作系统**：Windows 10/11
- **Python**：3.10及以上版本
- **硬件**：配备NVIDIA GPU，并安装驱动程序。
- **CUDA**：Toolkit 12.x（用于性能测试/模拟功能的严格要求）。
  - *注意*：如果未检测到CUDA 12.x，GPU特定性能测试功能将被禁用。

## 安装

该工具支持模块化安装，以满足您的需求：

### 1. 最小化（仅命令行界面）

适合无头服务器或后台监控。

- 命令行界面。
- 基本系统/GPU指标。

### 2. 标准版（命令行界面 + Web 用户界面）

适用于大多数用户。

- 包含 Web 仪表板。
- REST API 端点。
- 实时图表。
- 但无模拟或基准测试功能。

### 3. 全功能（标准 + 可视化）

最佳用于开发和压力测试。

- 包含模拟。
- PyTorch/CuPy 依赖项用于基准测试。

### 快速入门

1. **下载**最新版本或克隆仓库。
2. **运行设置**：

```powershell
  .\setup.ps1
  ```

3. **启动**：

```powershell
# 启动网络仪表板（标准/完整）
python health_monitor.py web

# 启动命令行界面 (CLI)
python health_monitor.py cli
```

**许可证**

MIT 许可证。详细信息请见 LICENSE。

MIT 许可证。详细信息请见 [LICENSE](../LICENSE)。

