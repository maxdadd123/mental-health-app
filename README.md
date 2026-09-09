# Calm Space

A private mental wellness companion — mood tracking, guided breathing, a coping-skills
toolkit, and a journal, all in a single web app. All data stays in your browser's
local storage; nothing is sent to a server.

**This app is a self-help tool, not a substitute for professional mental health care.**
If you or someone else is in crisis, see the in-app **Resources** page for crisis lines,
or call your local emergency number.

## Features

- **Mood Tracker** — log your mood on a 5-point scale with optional tags and notes, and
  see a 7-day trend chart plus your check-in history.
- **Breathe** — an animated guided box-breathing exercise (4-4-4-4) to help calm the
  nervous system.
- **Coping Toolkit** — short, actionable coping strategies organized by how you're
  feeling (anxious, sad, angry, overwhelmed, can't sleep).
- **Journal** — free-write journaling with rotating gentle prompts.
- **Resources** — crisis lines for several regions and guidance on finding ongoing
  professional support.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run the linter

## Installing it as an app (PWA)

Calm Space is a Progressive Web App: once it's built and hosted (or run via
`npm run preview`), it can be installed to a phone or desktop home screen and works
offline like a native app. The dev server (`npm run dev`) does **not** register the
service worker — use `npm run build && npm run preview`, or a real deployment, to test
installability.

- **Android (Chrome)** — open the site, tap the menu, choose "Install app" (or "Add to
  Home screen").
- **iPhone/iPad (Safari)** — open the site, tap Share, choose "Add to Home Screen".
- **Desktop (Chrome/Edge)** — open the site, click the install icon in the address bar.

### Live deployment (GitHub Pages)

This repo includes `.github/workflows/deploy.yml`, which builds the app and deploys it
to GitHub Pages on every push to `main`. To turn it on (one-time setup):

1. The repository must be **public** (GitHub Pages needs a paid plan for private repos).
2. In repo **Settings → Pages → Build and deployment**, set **Source** to
   **GitHub Actions**.

After that, pushes to `main` publish automatically to
`https://<owner>.github.io/mental-health-app/` — open that URL on your phone and use
"Add to Home Screen" / "Install app" to install it.

Note: `vite.config.ts` sets `base: '/mental-health-app/'` to match this GitHub Pages
path. If you deploy elsewhere (a custom domain, a different host, or the repo root),
update or remove that `base` setting to match.

## Tech stack

React, TypeScript, and Vite, with client-side routing via `react-router-dom`,
persistence via `localStorage`, and offline/installable support via
`vite-plugin-pwa`. No backend or account required.
