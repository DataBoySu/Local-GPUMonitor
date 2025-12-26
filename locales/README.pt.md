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


*MyGPU: Utilitário de Gerenciamento de GPU Leve: um wrapper compacto para nvidia-smi com um dashboard web elegante.*

### Por que usá-lo?

- **Leve**: Pés no chão em termos de consumo de recursos.
- **Flexível**: Funciona como uma ferramenta de linha de comando ou como um dashboard web completo.
- **Orientado a Administradores**: Inclui recursos como **Limites de VRAM** (desabilitação automática de processos que excedem os limites) e **Listas de Observação**.
- **Amigável para Desenvolvedores**: Ferramentas de benchmarking e teste de estresse embutidas (GEMM, Física de Partículas) para validar a estabilidade do sistema.

---

## Recursos

- **Monitoramento em Tempo Real**:
  - Métricas de GPU detalhadas (Utilização, VRAM, Potência, Temperatura).
  - Métricas do sistema (CPU, RAM, etc.).

- **Admin e Aplicação de Políticas**:
  - **Limites de VRAM**: Defina limites rígidos de uso de VRAM por GPU.
  - **Desabilitação Automática**: Desabilite automaticamente processos que violem as políticas de VRAM (apenas para administradores).
  - **Listas de Observação**: Monitore PIDs ou nomes de processos específicos.

- **Benchmarking e Simulação**:
  - **Teste de Estresse**: Cargas de trabalho GEMM configuráveis para testar a sobreaquecimento e estabilidade.
  - **Simulação Visual**: Simulação interativa de física de partículas para visualizar a carga de trabalho da GPU.

---

## Roadmap e Trabalho Futuro

Contribuições são bem-vindas! Os principais pontos a serem abordados no futuro incluem:

- **Suporte Multi-GPU**: Melhoria no manuseio de configurações multi-cartão e topologias NVLink.
- **Containerização**: Suporte oficial para Docker para implantação fácil em ambientes contêineres.
- **Acesso Remoto**: Integração de túnel SSH e gerenciamento remoto seguro.
- **Cross-Platform**:
  - [ ] Suporte para Ubuntu/Debian (foco em Linux).
  - [ ] Suporte para Apple Silicon (monitoramento em macOS).
- **Hardware Agnostic**:
  - [ ] Suporte para AMD ROCm.
  - [ ] Suporte para Intel Arc.
- **Documentação Multilíngue**: Suporte para as principais linguagens do GitHub.

Consulte o [CONTRIBUTING.md](../CONTRIBUTING.md) para saber como contribuir.

---

## Requisitos

- **Sistema Operacional**: Windows 10/11
- **Python**: 3.10+
- **Hardware**: GPU NVIDIA com drivers instalados.
- **CUDA**: Toolkit 12.x (obrigatório estritamente para recursos de benchmarking/simulação).
  - *Observação: Se o CUDA 12.x não for detectado, os recursos de benchmarking GPU específicos serão desativados.*

---

## Instalação

A ferramenta suporta instalação modular para atender às suas necessidades:

### 1. Mínimo (apenas CLI)

Ideal para servidores sem cabeça ou monitoramento em segundo plano.

- Interface de linha de comando.
- Métricas básicas do sistema/GPU.

### 2. Padrão (CLI + Dashboard Web)

Ideal para a maioria dos usuários.

- Inclui Dashboard Web.
- Pontos de extremidade de API REST.
- Gráficos em tempo real.

### 3. Completo (Padrão + Simulação)

Ideal para desenvolvimento e testes de estresse.

- Inclui Simulação de Partículas.
- Dependências de PyTorch/CuPy para benchmarking.

### Início Rápido

1. **Baixe** a versão mais recente ou clone o repositório.
2. **Execute o Setup**:

  ```powershell
  .\setup.ps1
  ```

3. **Inicie**:

```powershell
# Inicie o dashboard web (Padrão/Completo)
python health_monitor.py web

# Inicie o CLI
python health_monitor.py cli
```

---

## Licença

MIT License. Consulte o [LICENSE](../LICENSE) para detalhes.