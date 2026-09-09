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

## Tech stack

React, TypeScript, and Vite, with client-side routing via `react-router-dom` and
persistence via `localStorage`. No backend or account required.
