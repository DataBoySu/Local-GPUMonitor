# MyGPU : Outil de gestion légère des GPU

*MyGPU : Un utilitaire de gestion légère des GPU, un wrapper compact de `nvidia-smi` avec un tableau de bord web propre.*

![Licence](https://img.shields.io/badge/licence-MIT-blue.svg)
![Python](https://img.shields.io/badge/Python-3.10%2B-blue)
![Version](https://img.shields.io/badge/version-1.2.3-blue)
![Plateforme](https://img.shields.io/badge/plateforme-Windows-lightgrey)
![CUDA 12.x](https://img.shields.io/badge/CUDA-12.x-0f9d58?logo=nvidia)

## Galerie

<details>
  <summary>Tableau de bord web</summary>
  <div style="display:flex; overflow-x:auto; gap:10px; padding:12px 0; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch;">
    <!-- Utilisez la première image pour le cadre de diaporama avec un rapport hauteur/largeur de 1624/675; les autres images s'ajustent à l'intérieur en utilisant object-fit:contain -->
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
  <summary>Interface en ligne de commande (CLI)</summary>
  <div style="display:flex; overflow-x:auto; gap:10px; padding:12px 0; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch;">
    <div style="flex:0 0 100%; scroll-snap-align:center; aspect-ratio:1624/675; display:flex; align-items:center; justify-content:center;">
      <img src="../monitor/api/static/cli1.png" style="width:100%; height:100%; object-fit:contain;" />
    </div>
    <!-- Ajoutez d'autres images CLI ici -->
  </div>
</details>

### Pourquoi utiliser MyGPU ?

- **Légèreté** : Empreinte ressource minimale.
- **Flexibilité** : Fonctionne comme un outil CLI, un service en arrière-plan ou un tableau de bord web complet.
- **Orienté administration** : Inclut des fonctionnalités telles que **l'enforcement de la VRAM** (arrêt automatique des processus dépassant les limites) et les **listes de surveillance**.
- **Amical pour les développeurs** : Outils intégrés de test et de simulation de stress (GEMM, physique des particules) pour valider la stabilité du système.

---

## Fonctionnalités

- **Surveillance en temps réel** :
  - Métriques détaillées sur les GPU (Utilisation, VRAM, Puissance, Température).
  - Métriques système (CPU, RAM, etc.).

- **Administration et application de règles** :
  - **Limites de VRAM** : Définir des limites dures sur l'utilisation de la VRAM par GPU.
  - **Arrêt automatique** : Arrêter automatiquement les processus qui violent les politiques de VRAM (uniquement pour les administrateurs).
  - **Listes de surveillance** : Surveiller des PIDs ou des noms de processus spécifiques.

- **Test et simulation** :
  - **Test de stress** : Utiliser des charges de travail GEMM configurables pour tester la thermolage et la stabilité.
  - **Simulation visuelle** : Simulation interactive de physique des particules pour visualiser la charge de travail du GPU.

---

## Roadmap et travaux futurs

Les contributions sont les bienvenues ! Les points principaux à aborder seraient :

- **Prise en charge multi-GPU** : Amélioration du traitement des configurations multi-cartes et des topologies NVLink.
- **Conteneurisation** : Support officiel pour Docker pour un déploiement facile dans des environnements conteneurisés.
- **Accès à distance** : Intégration du tunnel SSH et gestion à distance sécurisée.
- **Prise en charge multiplateforme** :
  - [ ] Linux (concentration sur Ubuntu/Debian).
  - [ ] macOS (prise en charge de la surveillance Apple Silicon).
- **Indépendant du matériel** :
  - [ ] Prise en charge de ROCm d'AMD.
  - [ ] Prise en charge d'Arc d'Intel.

Consultez [CONTRIBUTING.md](../CONTRIBUTING.md) pour savoir comment participer.

---

## Exigences

- **Système d'exploitation** : Windows 10/11
- **Python** : 3.10+
- **Matériel** : GPU NVIDIA avec pilotes installés.
- **CUDA** : Version 12.x (strictement requise pour les fonctionnalités de test et de simulation).
  - *Remarque : Si CUDA 12.x n'est pas détecté, les fonctionnalités de test et de simulation seront désactivées.*

---

## Installation

L'outil prend en charge une installation modulaire pour répondre à vos besoins :

### 1. Installation minimale (CLI uniquement)

Idéale pour les serveurs sans tête ou la surveillance en arrière-plan.

- Interface en ligne de commande.
- Métriques système et GPU de base.

### 2. Installation standard (CLI + Tableau de bord web)

Idéale pour la plupart des utilisateurs.

- Inclut le tableau de bord web.
- Points de terminaison API REST.
- Graphiques en temps réel.

### 3. Installation complète (Standard + Simulation)

Idéale pour le développement et les tests de stress.

- Inclut la simulation de particules.
- Dépendances PyTorch/CuPy pour les tests de performance.

### Démarrage rapide

1. **Téléchargez** la dernière version ou clonez le dépôt.
2. **Exécutez l'installation** :

   ```powershell
   .\setup.ps1
   ```

3. **Lancez** :

```powershell
# Démarrez le tableau de bord web (Standard/Complete)
python health_monitor.py web

# Lancez l'interface en ligne de commande
python health_monitor.py cli
```