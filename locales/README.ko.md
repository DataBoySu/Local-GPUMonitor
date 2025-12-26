# MyGPU: GPU 관리 도구

MyGPU는 NVIDIA `nvidia-smi`의 컴팩트한 랩핑으로, 우아한 웹 대시보드를 갖춘 가벼운 GPU 관리 유틸리티입니다.

## 갤러리

### 웹 대시보드

<details>
  <summary>웹 대시보드</summary>
  <div style="display: flex; overflow-x: auto; gap: 10px; padding: 12px 0; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;">
    <!-- 각 이미지 1624x675 비율로 설정하여 슬라이드 프레임에 맞춤 -->
    <div style="flex: 0 0 100%; scroll-snap-align: center; aspect-ratio: 1624/675; display: flex; align-items: center; justify-content: center;">
      <img src="../monitor/api/static/web1.png" style="width: 100%; height: 100%; object-fit: contain;" />
    </div>
    <div style="flex: 0 0 100%; scroll-snap-align: center; aspect-ratio: 1624/675; display: flex; align-items: center; justify-content: center;">
      <img src="../monitor/api/static/web2.png" style="width: 100%; height: 100%; object-fit: contain;" />
    </div>
    <!-- 추가 이미지 동일한 형식으로 추가 -->
  </div>
</details>

<details>
  <summary>CLI</summary>
  <div style="display: flex; overflow-x: auto; gap: 10px; padding: 12px 0; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;">
    <div style="flex: 0 0 100%; scroll-snap-align: center; aspect-ratio: 1624/675; display: flex; align-items: center; justify-content: center;">
      <img src="../monitor/api/static/cli1.png" style="width: 100%; height: 100%; object-fit: contain;" />
    </div>
    <!-- 추가 이미지 동일한 형식으로 추가 -->
  </div>
</details>

## 사용 이유

- **가볍다**: 리소스 사용량이 적음.
- **유연하다**: CLI 도구 또는 웹 대시보드로 실행 가능.
- **관리자 중심**: VRAM 강제 제한 및 감시 기능 포함.
- **개발자 친화적**: GEMM, 입자 물리학 테스트를 통한 시스템 안정성 검증 도구 제공.

---

## 기능

- **실시간 모니터링**:
  - GPU 및 시스템 메트릭(사용률, VRAM, 전력, 온도) 제공.
- **관리 및 강제**:
  - **VRAM 제한**: GPU당 VRAM 사용량 제한 설정.
  - **자동 종료**: VRAM 정책을 위반하는 프로세스를 자동 종료 (관리자 전용).
  - **감시 목록**: 특정 PID 또는 프로세스 이름으로 감시.
- **벤치마킹 및 시뮬레이션**:
  - **스트레스 테스트**: GEMM 워크로드를 통해 열적 저하 및 안정성 테스트.
  - **시각화 시뮬레이션**: 입자 물리학 시뮬레이션을 통한 GPU 부하 시각화.

---

## 로드맵 및 미래 작업

기여 환영합니다! 향후 주요 포인트는 다음과 같습니다.

- **다중 GPU 지원**: NVLink 토폴로지를 포함한 다중 카드 설정 향상.
- **컨테이너화**: Docker 공식 지원을 통한 컨테이너 환경 배포 용이성 향상.
- **원격 접근**: SSH 터널링 통합 및 보안 원격 관리.
- **플랫폼 간 지원**:
  - [ ] Linux 지원 (Ubuntu/Debian 중점).
  - [ ] Apple Silicon을 위한 macOS 지원.
- **하드웨어 독립성**:
  - [ ] AMD ROCm 지원.
  - [ ] Intel Arc 지원.
- [ ] 다국어 문서화 (GitHub에서 인기 있는 언어 지원).

[CONTRIBUTING.md](../CONTRIBUTING.md)를 참조하세요.

---

## 요구 사항

- **OS**: Windows 10/11
- **Python**: 3.10 이상
- **하드웨어**: NVIDIA GPU 및 설치 드라이버
- **CUDA**: 12.x (벤치마킹/시뮬레이션 기능 사용 시 필수).
  - *참고: CUDA 12.x 미탐지 시 GPU 관련 벤치마킹 기능이 비활성화됩니다.*

---

## 설치

도구의 모듈식 설치로 다양한 요구 사항을 충족할 수 있습니다.

### 1. 최소 (CLI 전용)

헤드리스 서버 또는 백그라운드 모니터링에 적합합니다.

- 명령줄 인터페이스
- 기본 시스템/GPU 메트릭 제공

### 2. 표준 (CLI + 웹 UI)

대부분의 사용자에게 적합합니다.

- 웹 대시보드 포함
- REST API 엔드포인트
- 실시간 차트
- 시뮬레이션 및 벤치마킹 없음

### 3. 풀 (표준 + 시각화)

개발 및 스트레스 테스트에 적합합니다.

- 시뮬레이션 포함
- PyTorch/CuPy 의존성 (벤치마킹용)

### 빠른 시작

1. **최신 릴리스 다운로드 또는 저장소 복제**
2. **설정 실행**

   ```powershell
   .\setup.ps1
   ```

3. **실행**

   ```powershell
   # 웹 대시보드 (표준/풀) 시작
   python health_monitor.py web

   # CLI 시작
   python health_monitor.py cli
   ```