# MyGPU: Utilitário de Gerenciamento de GPU Leve: um wrapper compacto `nvidia-smi` com um dashboard web elegante.

## Galeria

### Dashboard Web

- Interface intuitiva para monitoramento e gerenciamento de GPUs.
- Gráficos em tempo real para métricas de GPU e sistema.
- Funcionalidades administrativas, como limites de VRAM e listas de observação.

### Interface de Linha de Comando (CLI)

- Ferramenta leve para monitoramento e gerenciamento de GPUs.
- Suporte para tarefas administrativas e de benchmarking.

## Por que usar?

- **Leve**: Pés no chão, alto impacto.
- **Flexível**: Funciona como uma ferramenta CLI ou um dashboard web completo.
- **Orientado a Administração**: Inclui recursos como **limites de VRAM** e **listas de observação**.
- **Amigável para Desenvolvedores**: Ferramentas de benchmarking e teste de estresse embutidas para validação de estabilidade.

---

## Recursos

- **Monitoramento em Tempo Real**:
  - Métricas detalhadas de GPU (Utilização, VRAM, Potência, Temperatura).
  - Métricas do sistema (CPU, RAM, etc.).

- **Administração e Aplicação de Políticas**:
  - **Limites de VRAM**: Defina limites rígidos de uso de VRAM por GPU.
  - **Terminação Automática**: Termine automaticamente processos que violem as políticas de VRAM (apenas para administradores).
  - **Listas de Observação**: Monitore PIDs ou nomes de processos específicos.

- **Benchmarking e Simulação**:
  - **Teste de Estresse**: Crie cargas de trabalho GEMM configuráveis para testar a capacidade térmica e a estabilidade.
  - **Simulação Visual**: Simulação interativa de física de partículas para visualizar a carga de trabalho da GPU.

---

## Roadmap e Trabalho Futuro

Contribuições são bem-vindas! Os principais pontos a serem abordados no futuro incluem:

- **Suporte Multi-GPU**: Melhoria no manuseio de configurações multi-cartão e topologias NVLink.
- **Containerização**: Suporte oficial para Docker para implantação fácil em ambientes contêineres.
- **Acesso Remoto**: Integração de túnel SSH e gerenciamento remoto seguro.
- **Plataformas Cruzadas**:
  - [ ] Suporte para Linux (foco em Ubuntu/Debian).
  - [ ] Suporte para macOS (monitoramento de Apple Silicon).
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
- **CUDA**: Toolkit 12.x (obrigatório para recursos de benchmarking/simulação).
  - *Observação: Se o CUDA 12.x não for detectado, os recursos de benchmarking GPU serão desabilitados.*

---

## Instalação

A ferramenta oferece opções de instalação modular para atender às suas necessidades:

### 1. Mínimo (apenas CLI)

Ideal para servidores sem cabeça ou monitoramento em segundo plano.

- Interface de linha de comando.
- Métricas básicas do sistema e da GPU.

### 2. Padrão (CLI + Dashboard Web)

Ideal para a maioria dos usuários.

- Inclui dashboard web.
- Pontos de extremidade de API REST.
- Gráficos em tempo real.
- Sem recursos de simulação ou benchmarking.

### 3. Completo (Padrão + Visualização)

Ideal para desenvolvimento e testes de estresse.

- Inclui simulação.
- Dependências PyTorch/CuPy para benchmarking.

### Início Rápido

1. **Baixe** a versão mais recente ou clone o repositório.
2. **Execute o Setup**:

   [[PB_0]]

3. **Inicie**:

[[PB_1]]

---

## Licença

MIT License. Consulte o arquivo [LICENSE](../LICENSE) para detalhes.