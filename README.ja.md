<div align="center">
  <h1>onigame-omikuji</h1>
  <p>スキマ時間に1回引ける、GitHub Pages向けの完全静的おみくじアプリ。</p>
  <p>
    <img src="https://img.shields.io/badge/Type-Static%20Web%20App-C85C38" alt="Static Web App">
    <img src="https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=222" alt="Vanilla JavaScript">
    <img src="https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=githubpages&logoColor=white" alt="GitHub Pages">
    <img src="https://img.shields.io/badge/Storage-localStorage-5D7B6F" alt="localStorage">
  </p>
  <p>
    <a href="./README.md">
      <img src="https://img.shields.io/badge/Language-English-blue.svg" alt="English">
    </a>
    <a href="./README.ja.md">
      <img src="https://img.shields.io/badge/Language-Japanese-lightgrey.svg" alt="Japanese">
    </a>
  </p>
</div>

## 🎯 概要

`onigame-omikuji` は、ワンクリックで今日の運勢を引ける小さなブラウザアプリです。  
ONIZUKA Game AGI Co. の「軽く、早く、静的に出せるゲーム」の方針に合わせて、次の条件を守っています。

- ビルド不要
- バックエンド不要
- 外部 API 不要
- アカウント不要
- 開いてすぐ遊べる

## ✨ 特徴

- ワンクリックでおみくじを引ける
- 5段階の運勢と短いメッセージ
- ラッキーカラーとラッキーアイテム表示
- 直近の結果を `localStorage` に保存
- GitHub Pages にそのまま置ける完全静的構成

## 🌐 ライブURL

- [GitHub Pages で遊ぶ](https://onizuka-agi-co.github.io/onigame-omikuji/)

## 🧩 ファイル構成

```text
onigame-omikuji/
|- index.html
|- styles.css
|- app.js
|- README.md
`- README.ja.md
```

## 🛠 ローカル確認

完全静的アプリなので、最速なら `index.html` をそのままブラウザで開けば動きます。

ローカルサーバーを使うなら、たとえば:

```bash
npx serve .
```

または

```bash
python -m http.server 8000
```

その後 `http://localhost:8000` を開きます。

## 🚀 GitHub Pages 設定

この repo は、リポジトリルートをそのまま GitHub Pages で配信する前提です。

- branch: `main`
- path: `/`
- homepage: `https://onizuka-agi-co.github.io/onigame-omikuji/`

## 🎨 デザイン方針

- 最初の印象をやわらかく、遊び心のあるものにする
- PC とモバイルの両方で読みやすくする
- 「1回引く → すぐ結果が出る」の気持ちよさを優先する

## 📝 メモ

- この repo は意図的に小さく保っています。
- 将来広げる場合も、まずは GitHub Pages で完結する範囲を守る想定です。
