<div align="center">
  <a href="../ja/README.md">🇺🇸 英語</a> |
  <a href="ja/README.de.md">🇩🇪 ドイツ語</a> |
  <a href="ja/README.fr.md">🇫🇷 フランス語</a> |
  <a href="ja/README.es.md">🇪🇸 スペイン語</a> |
  <a href="ja/README.ja.md">🇯🇵 日本語</a> |
  <a href="ja/README.zh.md">🇨🇳 中国語</a> |
  <a href="ja/README.pt.md">🇵🇹 ポルトガル語</a> |
  <a href="ja/README.ko.md">🇰🇷 韓国語</a>
</div>

<div style="text-align:center; margin:18px 0;">
  <img src="../monitor/api/static/logo.png" alt="MyGPU ロゴ"/>
</div>

> *MyGPU: GPU 管理ユーティリティの軽量版: NVIDIA nvidia-smi のコンパクトラッパーにクリーンなウェブダッシュボードを備えたものです。*

![ライセンス](https://img.shields.io/badge/ライセンス-MIT-blue.svg)
![Python](https://img.shields.io/badge/Python-3.10%2B-blue)
![バージョン](https://img.shields.io/badge/バージョン-1.2.3-blue)
![プラットフォーム](https://img.shields.io/badge/プラットフォーム-Windows-lightgrey)
![cuda 12.x](https://img.shields.io/badge/CUDA-12.x-0f9d58?logo=nvidia)

## ギャラリー

<details>
  <summary>ウェブダッシュボード</summary>
  <div style="display:flex; overflow-x:auto; gap:10px; padding:12px 0; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch;">
    <!-- 画像は 1624x675 のアスペクト比に合わせてスライドフレームに配置 -->
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
    <!-- 他の画像も同様に配置 -->
  </div>
</details>

### このツールを使う理由

- **軽量**: リソース消費量が少ない。
- **柔軟性**: CLI ツールとして、または完全なウェブダッシュボードとして実行可能。
- **管理者向け**: **VRAM エンジアンス** (VRAM 使用量を制限する機能) や **ウォッチリスト** などの機能を備えている。
- **開発者向け**: システムの安定性を検証するための組み込みベンチマークとストレステスト (GEMM、粒子物理学など) 機能を備えている。

---

## 機能

- **リアルタイム監視**:
  - GPU メトリック (利用率、VRAM、電力、温度)
  - システムメトリック (CPU、RAM など)

- **管理者向け**:
  - **VRAM キャップ**: 各 GPU に対する VRAM 使用量の制限を設定。
  - **自動終了**: VRAM ポリシーに違反するプロセスを自動的に終了 (管理者のみ)。
  - **ウォッチリスト**: 特定の PID やプロセス名を監視。

- **ベンチマークとシミュレーション**:
  - **ストレステスト**: 構成可能な GEMM ワークロードで熱的スローシングと安定性をテスト。
  - **視覚化シミュレーション**: インタラクティブな 3D 粒子物理学シミュレーションで GPU 負荷を視覚化。

---

## ロードマップと将来の作業

貢献は歓迎します！ 主な今後のポイントは次のとおりです。

- **マルチGPU サポート**: マルチカードセットアップと NVLink トポロジーの強化。
- **コンテナ化**: 公式 Docker サポートで簡単なコンテナ環境へのデプロイを実現。
- **リモートアクセス**: SSH トンネリング統合とセキュアなリモート管理。
- **クロスプラットフォーム**:
  - [ ] Linux サポート (Ubuntu/Debian 集中)。
  - [ ] macOS サポート (Apple Silicon モニタリング)。
- **ハードウェアアノニマス**:
  - [ ] AMD ROCm サポート。
  - [ ] Intel Arc サポート。
- [ ] **多言語ドキュメント**: GitHub 上で最も人気のある言語のサポート。

[CONTRIBUTING.md](../CONTRIBUTING.md) を参照して、どのように貢献できるかを知ってください。

---

## 要件

- **OS**: Windows 10/11
- **Python**: 3.10+
- **ハードウェア**: NVIDIA GPU とインストールされたドライバー。
- **CUDA**: 12.x ツールキット (ベンチマーク/シミュレーション機能を使用する場合は必須)。
  - *注: CUDA 12.x が検出されない場合は、ベンチマーク機能が無効になります。*

---

## インストール

ツールには、ニーズに合わせてモジュール形式でインストールできます。

### 1. 最小 (CLI のみ)

ヘッドレスサーバーやバックグラウンド監視に最適です。

- コマンドラインインターフェイス。
- システム/GPU メトリックの基本。

### 2. 標準 (CLI + ウェブ UI)

ほとんどのユーザーに適したオプションです。

- ウェブダッシュボードが含まれています。
- REST API エンドポイント。
- リアルタイムチャート。

### 3. フル (標準 + 視覚化)

開発やストレステストに最適です。

- 粒子シミュレーションが含まれています。
- PyTorch/CuPy 依存関係によるベンチマーク。

### クイックスタート

1. **ダウンロード** またはリポジトリをクローンします。
2. **セットアップスクリプトを実行**:

  ```powershell
  .\setup.ps1
  ```

3. **起動**:

```powershell
# ウェブダッシュボード (標準/フル) を起動
python health_monitor.py web

# CLI を起動
python health_monitor.py cli
```