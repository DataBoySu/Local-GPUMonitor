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

> *MyGPU: Leichtgewichtiges GPU-Verwaltungstool: ein kompakter Wrapper für `nvidia-smi` mit einem eleganten Web-Dashboard.*

<!-- HTML_BLOCK: no change to url; output entire as it is... -->
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.10%2B-blue)
![Version](https://img.shields.io/badge/version-1.2.3-blue)
![Platform](https://img.shields.io/badge/platform-Windows10/11-lightgrey)
![cuda 12.x](https://img.shields.io/badge/CUDA-12.x-0f9d58?logo=nvidia)

## Galerie

<details>

  <summary>
  Web-Dashboard
  </summary>

  <div class="galerie">
    <!-- Bilder werden in einem flexiblen Container mit Scroll-Snap-Funktionalität angezeigt -->
    <div class="slide" style="flex: 0 0 calc(25% - 10px); scroll-snap-align: center; aspect-ratio: 1624/675; display: flex; align-items: center; justify-content: center;">
      <img src="../monitor/api/static/web1.png" alt="Web-Dashboard Bild 1" style="width: 100%; height: 100%; object-fit: contain;" />
    </div>
    <div class="slide" style="flex: 0 0 calc(25% - 10px); scroll-snap-align: center; aspect-ratio: 1624/675; display: flex; align-items: center; justify-content: center;">
      <img src="../monitor/api/static/web2.png" alt="Web-Dashboard Bild 2" style="width: 100%; height: 100%; object-fit: contain;" />
    </div>
    <div class="slide" style="flex: 0 0 calc(25% - 10px); scroll-snap-align: center; aspect-ratio: 1624/675; display: flex; align-items: center; justify-content: center;">
      <img src="../monitor/api/static/web3.png" alt="Web-Dashboard Bild 3" style="width: 100%; height: 100%; object-fit: contain;" />
    </div>
    <div class="slide" style="flex: 0 0 calc(25% - 10px); scroll-snap-align: center; aspect-ratio: 1624/675; display: flex; align-items: center; justify-content: center;">
      <img src="../monitor/api/static/web4.png" alt="Web-Dashboard Bild 4" style="width: 100%; height: 100%; object-fit: contain;" />
    </div>
  </div>

</details>

<details>
  <summary>
  CLI
  </summary>
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

### Warum sollte man dies nutzen?

- **Leichtgewichtig**: Minimale Ressourcenbelastung.
- **Flexibel**: Als CLI-Tool oder als umfassendes Web-Dashboard ausführbar.
- **admin-zentriert**: Enthält Funktionen wie **VRAM-Durchsetzung** (automatische Beendigung von Prozessen, die die Grenzen überschreiten) und **Watchlists**.
- **entwicklerfreundlich**: Integrierte Benchmarking- und Stress-Test-Tools (GEMM, Teilchenphysik) zur Überprüfung der Systemstabilität.

## Funktionen

- **Echtzeitüberwachung**:
  - Detaillierte GPU-Metriken (Nutzung, VRAM, Stromverbrauch, Temperatur).
  - Systemmetriken (CPU, RAM usw.).

- **Verwaltung und Durchsetzung**:
  - **VRAM-Begrenzung**: Setze harte Obergrenzen für den VRAM-Verbrauch pro GPU.
  - **Automatische Beendigung**: Automatische Beendigung von Prozessen, die gegen VRAM-Richtlinien verstoßen (nur Administrator).
  - **Watchlists**: Überwache spezifische PIDs oder Prozessnamen.

- **Benchmarking und Simulation**:
  - **Stresstests**: Konfigurierbare GEMM-Lasttests zur Prüfung der thermischen Drosselung und Stabilität.
  - **Visualisierungssimulation**: Interaktive 3D-Partikelphysiksimulation zur Visualisierung der GPU-Belastung.

## Roadmap & Zukunftsplanung

Deine Beiträge sind willkommen! Die wichtigsten zukünftigen Schwerpunkte umfassen:

- **Mehrfach-GPU-Unterstützung**: Verbesserte Handhabung von Mehrkarten-Einrichtungen und NVLink-Topologien.
- **Containerisierung**: Offizielle Docker-Unterstützung für einfache Bereitstellung in Container-Umgebungen.
- **Fernzugriff**: Integration von SSH-Tunneling und sicherem Fernmanagement.
- **Cross-Platform**:
  - [ ] Linux-Unterstützung (Ubuntu/Debian Fokus).
  - [ ] macOS-Unterstützung (Apple Silicon Überwachung).
- **Hardwareunabhängig**:
  - [ ] AMD ROCm Unterstützung.
  - [ ] Intel Arc Unterstützung.
- ~~**Mehrsprachige Dokumentation**: Unterstützung der beliebtesten GitHub-Sprachen.~~

Sieh [CONTRIBUTING.md](../CONTRIBUTING.md) für Hinweise, wie du dich einbringen kannst.

## Anforderungen

- **Betriebssystem**: Windows 10/11
- **Python**: Version 3.10 oder höher
- **Hardware**: NVIDIA-GPU mit installierten Treibern.
- **CUDA**: Toolkit 12.x (Für die Benutzerung der Benchmarking-/Simulationsfunktionen zwingend erforderlich).
  - *Hinweis: Wird CUDA 12.x nicht erkannt, werden die GPU-spezifischen Benchmarking-Funktionen deaktiviert.*

## Installation

Das Tool unterstützt eine modulare Installation, um sich an deine Anforderungen anzupassen:

### 1. Minimal (CLI Nur)

Am besten für Headless-Server oder Hintergrundüberwachung geeignet.

- Befehlszeilen-Schnittstelle.
- Grundlegende System-/GPU-Metriken.

### 2. Standard (CLI + Web-Benutzeroberfläche)

Am besten für die meisten Benutzer geeignet.

- Enthält Web-Dashboard.
- REST-API-Endpunkte.
- Echtzeit-Diagramme.
- Ohne Simulation oder Leistungsanalyse.

### 3. Vollständige Konfiguration (Standard + Visualisierung)

Am besten für Entwicklung und Stresstests geeignet.

- Enthält Simulationen.
- Abhängigkeiten von PyTorch/CuPy für Leistungsanalysen.

### Schnellstart

1. **Lade** die neueste Version herunter oder klone das Repository.
2. **Führe die Einrichtung aus**:

```powershell
  .\setup.ps1
  ```

## 3. **Starten**:

```powershell
# Web-Dashboard starten (Standard/Vollständig)
python health_monitor.py web

# CLI starten
python health_monitor.py cli
```

---

## License

Siehe die [Lizenz](../LICENSE) für Details.

