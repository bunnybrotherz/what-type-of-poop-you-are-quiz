# Poop Quiz (`poop-quiz`)

[![Deploy to GitHub Pages](https://github.com/<YOUR_GITHUB_USERNAME>/poop-quiz/actions/workflows/deploy.yml/badge.svg)](https://github.com/<YOUR_GITHUB_USERNAME>/poop-quiz/actions/workflows/deploy.yml)

A React + Vite personality quiz: **"Which Poop Attachment Style Are You?"**

## Stack

- React (functional components + hooks)
- Vite
- GitHub Actions + GitHub Pages deployment

## Run locally

```bash
npm install
npm run dev
```

App runs on `http://localhost:5173` by default.

## Build locally

```bash
npm run build
npm run preview
```

## Project structure

```text
.
|-- .github/
|   `-- workflows/
|       `-- deploy.yml
|-- src/
|   |-- components/
|   |   |-- Quiz.jsx
|   |   `-- ResultCard.jsx
|   |-- data/
|   |   |-- archetypes.json
|   |   `-- questions.json
|   |-- App.jsx
|   |-- main.jsx
|   `-- styles.css
|-- .env.example
|-- .gitignore
|-- index.html
|-- jsconfig.json
|-- package.json
|-- README.md
`-- vite.config.js
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `poop-quiz`.
2. Push this project to the `main` branch.
3. In GitHub repository settings:
   - Open `Settings -> Pages`.
   - Set `Source` to `GitHub Actions`.
4. Update the README badge URLs by replacing `<YOUR_GITHUB_USERNAME>`.
5. On each push to `main`, the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

## Environment config

Copy `.env.example` as `.env` only if you want to override defaults.

```bash
cp .env.example .env
```

Current app works without env variables.
