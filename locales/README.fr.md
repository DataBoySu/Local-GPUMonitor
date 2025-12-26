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


*MyGPU : Outil de gestion de GPU léger : un wrapper compact pour `nvidia-smi` avec un tableau de bord web élégant.*

### Pourquoi l'utiliser ?

- **Léger** : empreinte minimale en ressources.
- **Polyvalent** : fonctionne en tant qu'outil en ligne de commande ou avec un tableau de bord web complet.
- **Centré administration** : inclut des fonctionnalités telles que **la limitation de la VRAM** (arrêt automatique des processus dépassant les limites) et les **listes de surveillance**.
- **Amical pour les développeurs** : outils intégrés de benchmark et de test de stress (GEMM, physique des particules) pour valider la stabilité du système.

---

## Fonctionnalités

- **Surveillance en temps réel** :
  - Métriques GPU détaillées (Utilisation, VRAM, Puissance, Température).
  - Métriques système (CPU, RAM, etc.).

- **Administration et application de règles** :
  - **Limites de VRAM** : définissez des limites strictes sur l'utilisation de la VRAM par GPU.
  - **Arrêt automatique** : arrêtez automatiquement les processus qui violent les règles de la VRAM (uniquement pour les administrateurs).
  - **Listes de surveillance** : surveillez des PIDs ou des noms de processus spécifiques.

- **Benchmarking et simulation** :
  - **Tests de stress** : charges de travail GEMM configurables pour tester le throttage thermique et la stabilité.
  - **Simulation visuelle** : simulation interactive de physique des particules pour visualiser la charge GPU.

---

## Roadmap et travaux futurs

Les contributions sont les bienvenues ! Les points principaux à couvrir dans le futur seraient :

- **Prise en charge multi-GPU** : gestion améliorée des configurations multi-cartes et des topologies NVLink.
- **Conteneurisation** : prise en charge officielle de Docker pour un déploiement facile dans des environnements conteneurisés.
- **Accès à distance** : intégration du tunnel SSH et de la gestion à distance sécurisée.
- **Cross-plateforme** :
  - [ ] Prise en charge de Linux (focalisation sur Ubuntu/Debian).
  - [ ] Prise en charge d'Apple Silicon sur macOS.
- **Indépendant de l'hardware** :
  - [ ] Prise en charge de ROCm d'AMD.
  - [ ] Prise en charge d'Intel Arc.
- ~~**Documentation multi-langues** : prise en charge des principales langues GitHub.~~

Consultez [CONTRIBUTING.md](../CONTRIBUTING.md) pour savoir comment participer.

---

## Exigences

- **Système d'exploitation** : Windows 10/11
- **Python** : 3.10+
- **Hardware** : GPU NVIDIA avec pilotes installés.
- **CUDA** : Toolkit 12.x (strictement requis pour les fonctionnalités de benchmark/simulation).
  - *Note : Si CUDA 12.x n'est pas détecté, les fonctionnalités de benchmark GPU seront désactivées.*

---

## Installation

L'outil prend en charge une installation modulaire pour répondre à vos besoins :

### 1. Minimal (seule l'interface en ligne de commande)

Idéal pour les serveurs sans tête ou la surveillance en arrière-plan.

- Interface en ligne de commande.
- Métriques système/GPU de base.

### 2. Standard (interface en ligne de commande + tableau de bord web)

Idéal pour la plupart des utilisateurs.

- Inclut le tableau de bord web.
- Points de terminaison d'API REST.
- Graphiques en temps réel.

### 3. Complet (Standard + visualisation)

Idéal pour le développement et les tests de stress.

- Inclut la simulation de particules.
- Dépendances PyTorch/CuPy pour le benchmark.

### Démarrage rapide

1. **Téléchargez** la dernière version ou clonez le dépôt.
2. **Exécutez l'installation** :

   ```powershell
   .\setup.ps1
   ```

3. **Démarrez** :

```powershell
# Démarrez le tableau de bord web (Standard/Complet)
python health_monitor.py web

# Démarrez l'interface en ligne de commande
python health_monitor.py cli
```

---

## Licence

Licence MIT. Veuillez consulter le fichier [LICENSE](../LICENSE) pour plus de détails.