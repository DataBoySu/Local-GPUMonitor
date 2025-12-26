# MyGPU : Un utilitaire de gestion de GPU léger

## Présentation

MyGPU est un outil de gestion de GPU léger, offrant une alternative compacte à `nvidia-smi` avec un tableau de bord web élégant. Il permet une surveillance et une administration efficaces des GPU NVIDIA, tout en offrant une flexibilité grâce à ses options CLI et Web.

## Caractéristiques

- **Surveillance en temps réel** : Obtenez des métriques détaillées sur les GPU, y compris l'utilisation, la VRAM, la puissance et la température.
- **Administration et contrôle** : Définissez des limites de VRAM, terminez automatiquement les processus dépassant les limites (pour les administrateurs) et créez des listes de surveillance pour surveiller des PIDs ou des noms de processus spécifiques.
- **Benchmarking et simulation** : Testez la stabilité de votre système avec des charges de travail GEMM configurables et visualisez la charge GPU avec une simulation de physique de particules interactive.

## Roadmap et travaux futurs

Les contributions sont les bienvenues ! Voici les points clés à aborder :

- **Prise en charge multi-GPU** : Améliorer la gestion des configurations multi-cartes et des topologies NVLink.
- **Conteneurisation** : Prise en charge officielle de Docker pour un déploiement facile dans des environnements conteneurisés.
- **Accès à distance** : Intégrer le tunnel SSH pour une gestion à distance sécurisée.
- **Prise en charge multi-plateforme** :

  - Prise en charge de Linux (focussée sur Ubuntu/Debian).
  - Prise en charge d'Apple Silicon sur macOS.
- **Indépendant du matériel** :

  - Prise en charge de ROCm d'AMD.
  - Prise en charge d'Intel Arc.
- **Documentation multilingue** : Prise en charge des principales langues GitHub.

Consultez [CONTRIBUTING.md](../CONTRIBUTING.md) pour savoir comment contribuer.

## Exigences

- **Système d'exploitation** : Windows 10/11
- **Python** : 3.10 ou version ultérieure
- **Matériel** : GPU NVIDIA avec pilotes installés.
- **CUDA** : Toolkit 12.x (strictement requis pour les fonctionnalités de benchmarking/simulation).

## Installation

L'outil offre plusieurs options d'installation modulaires :

### 1. Minimal (CLI uniquement)

Idéal pour les serveurs sans tête ou la surveillance en arrière-plan.

- Interface en ligne de commande.
- Métriques de base système/GPU.

### 2. Standard (CLI + Tableau de bord web)

Idéal pour la plupart des utilisateurs.

- Inclut le tableau de bord web.
- Points de terminaison API REST.
- Graphiques en temps réel.
- Mais sans simulation ou benchmarking.

### 3. Complet (Standard + Visualisation)

Idéal pour le développement et les tests de stress.

- Inclut la simulation.
- Dépendances PyTorch/CuPy pour le benchmarking.

### Démarrage rapide

1. **Téléchargez** la dernière version ou clonez le dépôt.
2. **Exécutez l'installation** :

   [[PB_0]]

3. **Lancez** :

[[PB_1]]

## Licence

Licence MIT. Veuillez consulter le fichier [LICENSE](../LICENSE) pour plus de détails.