# MyGPU: GPU管理ユーティリティの軽量版

**MyGPU** は、NVIDIA `nvidia-smi` のコンパクトなラッパーであり、クリーンなウェブダッシュボードを備えた管理ツールです。

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
    <!-- 最初の画像を1624x675のアスペクト比で設定し、他の画像は内側に収まるようにobject-fit:containを使用 -->
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

### CLI

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

## 使用理由

- **軽量**: リソース消費量が最小限。
- **柔軟性**: CLIツール、バックグラウンドサービス、または完全なウェブダッシュボードとして実行可能。
- **管理者向け**: VRAM制限（ポリシー自動停止）やウォッチリストなどの機能を備えている。
- **開発者向け**: GEMMや粒子物理学シミュレーションなどのベンチマークツールを内蔵し、システムの安定性を検証。

---

## 機能

- **リアルタイム監視**:
  - GPUメトリクス（利用率、VRAM、電力、温度）。
  - システムメトリクス（CPU、RAMなど）。
- **管理・執行**:
  - **VRAMキャップ**: 各GPUのVRAM使用量に上限を設定。
  - **自動停止**: VRAMポリシーに違反するプロセスを自動的に停止（管理者のみ）。
  - **ウォッチリスト**: 特定のPIDやプロセス名を監視。
- **ベンチマークとシミュレーション**:
  - **ストレステスト**: GEMMワークロードで熱的スローシングと安定性をテスト。
  - **視覚化シミュレーション**: 粒子物理学のインタラクティブな3DシミュレーションでGPU負荷を視覚化。

---

## ロードマップと将来の作業

貢献は歓迎します！主な今後のポイントは次のとおりです。

- **マルチGPUサポート**: マルチカードセットアップやNVLinkトポロジーの強化。
- **コンテナ化**: Docker公式サポートでコンテナ環境への簡単なデプロイ。
- **リモートアクセス**: SSHトンネル統合とセキュアなリモート管理。
- **クロスプラットフォーム**:
  - [ ] Linuxサポート（Ubuntu/Debianに焦点）。
  - [ ] Apple SiliconのモニタリングのためのmacOSサポート。
- **ハードウェアアノニマス**:
  - [ ] AMD ROCmサポート。
  - [ ] Intel Arcサポート。

[CONTRIBUTING.md](../CONTRIBUTING.md) を参照してください。

---

## 要件

- **OS**: Windows 10/11
- **Python**: 3.10+
- **ハードウェア**: NVIDIA GPUとインストールされたドライバー。
- **CUDA**: 12.xツールキット（ベンチマーク/シミュレーション機能を使用する場合に必須）。
  - *注: CUDA 12.xが検出されない場合、GPUベンチマーク機能が無効になります。*

---

## インストール

ツールには、ニーズに合わせて複数のインストールオプションがあります。

### 1. 最小（CLIのみ）

ヘッドレスサーバーやバックグラウンド監視に最適です。

- コマンドラインインターフェース。
- 基本的なシステム/GPUメトリクス。

### 2. 標準（CLI + ウェブUI）

ほとんどのユーザーに最適です。

- ウェブダッシュボードが含まれています。
- REST APIエンドポイント。
- リアルタイムチャート。

### 3. フル（標準 + 視覚化）

開発やストレステストに最適です。

- 粒子シミュレーションが含まれています。
- ベンチマークにはPyTorch/CuPy依存関係。

### クイックスタート

1. **ダウンロード** またはリポジトリをクローンします。
2. **セットアップスクリプトを実行**:

  ```powershell
  .\setup.ps1
  ```

3. **起動**:

```powershell
# ウェブダッシュボード（標準/フル）を起動
python health_monitor.py web

# CLIを起動
python health_monitor.py cli
```