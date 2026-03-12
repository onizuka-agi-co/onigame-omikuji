<div align="center">
  <h1>onigame-omikuji</h1>
  <p>One-click omikuji for short breaks, shipped as a fully static GitHub Pages app.</p>
  <img src="./assets/omikuji-mark.svg" alt="onigame-omikuji icon" width="220">
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

## 🎯 Overview

`onigame-omikuji` is a tiny browser app for drawing a quick fortune in one click.
It is built for the ONIZUKA Game AGI Co. style of lightweight releases:

- no build step
- no backend
- no external API
- no account setup
- fast enough to open, tap once, and close

## ✨ Highlights

- one-click omikuji draw
- five fortune tiers with different tone and message
- lucky color and lucky item suggestions
- recent result history stored in `localStorage`
- fully static deployment from the repo root

## 🌐 Live Demo

- [Play on GitHub Pages](https://onizuka-agi-co.github.io/onigame-omikuji/)

## 🧩 Project Structure

```text
onigame-omikuji/
|- assets/
|  `- omikuji-mark.svg
|- index.html
|- styles.css
|- app.js
|- README.md
`- README.ja.md
```

## 🛠 Local Run

Because the app is fully static, the fastest option is to open `index.html` directly in a browser.

If you prefer a local server:

```bash
npx serve .
```

or

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## 🚀 GitHub Pages Setup

This repository is intended to publish directly from the repository root.

- branch: `main`
- path: `/`
- homepage: `https://onizuka-agi-co.github.io/onigame-omikuji/`

## 🎨 Design Direction

- make the first impression warm and playful
- keep the interaction readable on both desktop and mobile
- preserve the "one small action, one quick payoff" rhythm
- use a reusable SVG mark so the repository has a simple visual identity

## 📝 Notes

- This repo intentionally stays small and static.
- If the project grows, keep the GitHub Pages path simple and avoid introducing backend requirements.
