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


**MeinGPU: Ein leichtgewichtiges GPU-Verwaltungstool: Ein kompaktes Wrapper für `nvidia-smi` mit einer eleganten Web-Dashboard-Schnittstelle.**

### Warum dieses Tool verwenden?

- **Leichtgewichtig**: Minimale Ressourcenbelastung.
- **Flexibel**: Als CLI-Tool oder als voll ausgestattetes Web-Dashboard ausführbar.
- **admin-zentriert**: Enthält Funktionen wie **VRAM-Enforcement** (Automatische Beendigung von Prozessen, die die VRAM-Grenzen überschreiten) und **Watchlists**.
- **entwicklerfreundlich**: Integrierte Benchmarking- und Stresstest-Tools (GEMM, Teilchenphysik) zur Überprüfung der Systemstabilität.

---

## Funktionen

- **Echtzeitüberwachung**:
  - Detaillierte GPU-Metriken (Nutzung, VRAM, Leistung, Temperatur).
  - Systemmetriken (CPU, RAM usw.).

- **Admin- und Enforcement-Funktionen**:
  - **VRAM-Limits**: Festlegen von Hardlimits für die VRAM-Nutzung pro GPU.
  - **Automatische Beendigung**: Prozesse, die VRAM-Richtlinien verletzen, automatisch beenden (nur für Administratoren).
  - **Watchlists**: Überwachung spezifischer PIDs oder Prozessnamen.

- **Benchmarking und Simulation**:
  - **Stresstest**: Konfigurierbare GEMM-Lasten zur Überprüfung der Kühlung und Stabilität.
  - **Interaktive Simulation**: Visuelle Teilchenphysik-Simulation zur Visualisierung der GPU-Belastung.

---

## Roadmap und zukünftige Arbeiten

Ihre Beiträge sind willkommen! Die wichtigsten zukünftigen Punkte, die abgedeckt werden müssen, wären:

- **Multi-GPU-Unterstützung**: Verbesserte Handhabung von Multi-Card-Setups und NVLink-Topologien.
- **Containerisierung**: Offizielle Docker-Unterstützung für einfache Bereitstellung in Containerumgebungen.
- **Remote-Zugriff**: Integration von SSH-Tunneling und sicherer Remote-Verwaltung.
- **Cross-Platform**:
  - [ ] Linux-Unterstützung (Ubuntu/Debian-Fokus).
  - [ ] macOS-Unterstützung (Apple Silicon-Überwachung).
- **Hardware-agnostisch**:
  - [ ] AMD ROCm-Unterstützung.
  - [ ] Intel Arc-Unterstützung.
- ~~**Mehrsprachige Dokumentation**: Unterstützung der beliebtesten GitHub-Sprachen.~~

Siehe [CONTRIBUTING.md](../CONTRIBUTING.md) für Informationen, wie Sie mitwirken können.

---

## Anforderungen

- **OS**: Windows 10/11
- **Python**: 3.10+
- **Hardware**: NVIDIA-GPU mit installierten Treibern.
- **CUDA**: Toolkit 12.x (Streng erforderlich für Benchmarking-/Simulationsfunktionen).
  - *Hinweis: Wenn CUDA 12.x nicht erkannt wird, werden GPU-spezifische Benchmarkingfunktionen deaktiviert.*

---

## Installation

Das Tool unterstützt modulare Installationen, um Ihren Anforderungen gerecht zu werden:

### 1. Minimal (CLI nur)

Am besten für Headless-Server oder Hintergrundüberwachung geeignet.

- Befehlszeileninterface.
- Grundlegende System-/GPU-Metriken.

### 2. Standard (CLI + Web-UI)

Am besten für die meisten Benutzer geeignet.

- Enthält Web-Dashboard.
- REST-API-Endpunkte.
- Echtzeitdiagramme.

### 3. Vollständig (Standard + Visualisierung)

Am besten für Entwicklung und Stresstest geeignet.

- Enthält Teilchen-Simulation.
- Abhängigkeiten für PyTorch/CuPy zur Benchmarking-Ausführung.

### Schnelle Startanleitung

1. **Herunterladen** der neuesten Version oder Klonen des Repos.
2. **Einrichten**:

  ```powershell
  .\setup.ps1
  ```

3. **Starten**:

```powershell
# Starten des Web-Dashboards (Standard/Vollständig)
python health_monitor.py web

# Starten der CLI
python health_monitor.py cli
```

---

## Lizenz

MIT-Lizenz. Siehe [LICENSE](../LICENSE) für Details.