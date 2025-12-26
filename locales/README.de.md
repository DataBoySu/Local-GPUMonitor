# MyGPU: Eine leichte GPU-Verwaltungshilfe mit eleganten Web-Dashboard

## Übersicht

*MyGPU* ist ein kompaktes Tool für die Verwaltung von NVIDIA-GPUs mit einem eleganten Web-Dashboard.

## Mehrsprachige Unterstützung

- Englisch
- Deutsch
- Französisch
- Spanisch
- Japanisch
- Chinesisch
- Portugiesisch
- Koreanisch
- Hindi

## Funktionen

- **Echtzeitüberwachung**: Detaillierte Metriken zu GPU-Nutzung, VRAM, Leistung und Temperatur.
- **Verwaltung und Durchsetzung**: Festlegung von VRAM-Grenzen, automatisches Beenden von Prozessen, die die Richtlinien verletzen (nur für Administratoren), und Überwachungslisten.
- **Benchmarking und Simulation**: Stresstests mit GEMM-Lasten (für Stabilitätstests) und interaktive 3D-Partikelphysiksimulation zur Visualisierung der GPU-Belastung.

## Roadmap und zukünftige Arbeiten

Beiträge sind willkommen! Zukünftige Schwerpunkte:

- Unterstützung für Multi-GPU-Konfigurationen und NVLink-Topologien.
- Offizielle Docker-Unterstützung für eine einfache Bereitstellung in Containerumgebungen.
- Remote-Zugriff über SSH-Tunneling und sichere Remoteverwaltung.
- Plattformübergreifende Unterstützung:
  - Linux-Unterstützung (Ubuntu/Debian-Fokus).
  - macOS-Unterstützung (Apple Silicon-Überwachung).
- Hardware-agnostisch:
  - AMD ROCm-Unterstützung.
  - Intel Arc-Unterstützung.
- ~~Mehrsprachige Dokumentation für die beliebtesten GitHub-Sprachen.~~

## Anforderungen

- Betriebssystem: Windows 10/11
- Python: 3.10+
- Hardware: NVIDIA-GPU mit installierten Treibern.
- CUDA: Toolkit 12.x (streng erforderlich für Benchmarking- und Simulationsfunktionen).

## Installation

Das Tool bietet modulare Installationen, um den Anforderungen gerecht zu werden:

### 1. Minimal (CLI nur)

Am besten für Headless-Server oder Hintergrundüberwachung geeignet.

- Befehlszeileninterface.
- Grundlegende System- und GPU-Metriken.

### 2. Standard (CLI + Web-UI)

Am besten für die meisten Benutzer geeignet.

- Enthält Web-Dashboard.
- REST-API-Endpunkte.
- Echtzeitdiagramme.
- Aber keine Simulation oder Benchmarking.

### 3. Vollständig (Standard + Visualisierung)

Am besten für Entwicklung und Stresstests geeignet.

- Enthält Simulation.
- Abhängigkeiten für PyTorch/CuPy für Benchmarking.

## Schnelle Einführung

1. **Herunterladen** der neuesten Version oder Klonen des Repos.
2. **Einrichten** und ausführen:

   [[PB_0]]

3. **Starten**:

   [[PB_1]]

## Lizenz

MIT-Lizenz. Details im [LICENSE](../LICENSE)-Dokument.