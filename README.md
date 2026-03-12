# onigame-omikuji

Small static omikuji app built for GitHub Pages.

## Overview

`onigame-omikuji` is a tiny browser app for drawing a quick fortune in one click.
It is intentionally lightweight: no build step, no backend, no external API, and no account setup.

Live site:

- [https://onizuka-agi-co.github.io/onigame-omikuji/](https://onizuka-agi-co.github.io/onigame-omikuji/)

## Features

- one-click fortune draw
- five fortune tiers with distinct tone and message
- lucky color and lucky item suggestions
- recent result history stored in `localStorage`
- fully static deployment for GitHub Pages

## Tech

- HTML
- CSS
- Vanilla JavaScript
- GitHub Pages

## Project Structure

```text
onigame-omikuji/
|- index.html
|- styles.css
|- app.js
`- README.md
```

## Local Usage

Because the app is fully static, you can run it by opening `index.html` directly in a browser.

If you want a simple local server instead, use one of these examples:

```bash
npx serve .
```

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

This repository is designed to publish directly from the repository root.

- branch: `main`
- path: `/`
- homepage: `https://onizuka-agi-co.github.io/onigame-omikuji/`

## Design Notes

- keep the interaction fast enough for a short break
- keep the first release completely static
- prefer charm and readability over heavy game structure

## License

No license file has been added yet.
