# MyGPU: GPU管理ユーティリティ

**軽量なGPU管理ツール: 簡潔な`nvidia-smi`ラッパーにエレガントなウェブダッシュボードを組み合わせたものです。**

<!-- ライセンス、Python、バージョン、プラットフォーム、CUDAバッジは変更しないでください -->
![ライセンス](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.10%2B-blue)
![バージョン](https://img.shields.io/badge/version-1.2.3-blue)
![プラットフォーム](https://img.shields.io/badge/platform-Windows-lightgrey)
![CUDA 12.x](https://img.shields.io/badge/CUDA-12.x-0f9d58?logo=nvidia)

## ギャラリー

### ウェブダッシュボード

<details>
  <summary>ウェブダッシュボード</summary>
  <div style="display:flex; overflow-x:auto; gap:10px; padding:12px 0; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch;">
    <!-- 画像は1624x675のアスペクト比に合わせてスライドフレームに配置し、`object-fit: contain`で内側にフィットさせます -->
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
  </div>
</details>

### 使用理由

- **軽量**: リソース消費量が少ない。
- **柔軟性**: CLIツールとして、または完全なウェブダッシュボードとして利用可能。
- **管理者向け**: VRAM制限（ポリシーの自動適用）やウォッチリストなどの機能を備えている。
- **開発者向け**: GEMMや粒子物理学シミュレーションなどのベンチマークとストレステスト機能を備えている。

---

## 特徴

- **リアルタイム監視**:
  - GPUメトリクス（利用率、VRAM、電力、温度）。
  - システムメトリクス（CPU、RAMなど）。

- **管理者機能**:
  - **VRAM制限**: 各GPUのVRAM使用量に上限を設定。
  - **自動終了**: VRAMポリシーに違反するプロセスを自動的に終了（管理者のみ）。
  - **ウォッチリスト**: 特定のPIDやプロセス名を監視。

- **ベンチマークとシミュレーション**:
  - **ストレステスト**: 構成可能なGEMMワークロードで熱的スローをテストし、システムの安定性を確認。
  - **視覚化シミュレーション**: インタラクティブな3D粒子物理学シミュレーションでGPU負荷を視覚化。

---

## ロードマップと将来の作業

貢献は歓迎します！主な今後のポイントは次のとおりです。

- **マルチGPUサポート**: マルチカードセットアップやNVLinkトポロジーの処理を強化。
- **コンテナ化**: 公式のDockerサポートで、コンテナ環境での簡単なデプロイを実現。
- **リモートアクセス**: SSHトンネル統合とセキュアなリモート管理。
- **クロスプラットフォーム**:
  - [ ] Linuxサポート（Ubuntu/Debianに焦点を当てて）。
  - [ ] macOSサポート（Apple Siliconの監視）。
- **ハードウェア非依存**:
  - [ ] AMD ROCmサポート。
  - [ ] Intel Arcサポート。
- [ ] **多言語ドキュメント**: GitHubで人気のある言語のほとんどをサポート。

[CONTRIBUTING.md](../CONTRIBUTING.md) を参照して、どのように貢献できるかを知ってください。

---

## 要件

- **OS**: Windows 10/11
- **Python**: 3.10+
- **ハードウェア**: NVIDIA GPU
- **CUDA**: 12.xツールキット（ベンチマークやシミュレーション機能を使用する場合は必須）。
- *注: CUDA 12.xが検出されない場合は、GPU固有のベンチマーク機能が無効になります。*

---

## インストール

ツールには、ニーズに合わせて複数のインストールオプションがあります。

### 1. 最小（CLIのみ）

ヘッドレスサーバーやバックグラウンド監視に最適です。

- コマンドラインインターフェイス。
- 基本的なシステム/GPUメトリクス。

### 2. 標準（CLI + ウェブUI）

ほとんどのユーザーに最適です。

- ウェブダッシュボードが含まれています。
- REST APIエンドポイント。
- リアルタイムチャート。
- しかし、シミュレーションやベンチマークは含まれていません。

### 3. フル（標準 + 視覚化）

開発やストレステストに最適です。

- シミュレーションが含まれています。
- ベンチマークにはPyTorch/CuPy依存関係が必要です。

### クイックスタート

1. **ダウンロード** またはリポジトリをクローンします。
2. **セットアップスクリプトを実行**:

  ```powershell
  .\setup.ps1
  ```

3. **起動**:

```powershell
# ウェブダッシュボードを起動（標準/フル）
python health_monitor.py web

# CLIを起動
python health_monitor.py cli
```