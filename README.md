# Quiet Grove

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

Quiet Grove is a Progressive Web App: once it's built and hosted (or run via
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

Note: `vite.config.ts` sets `base: './'` (relative) so the same build works whether
it's hosted at a domain root, under a GitHub Pages subpath, or loaded locally inside
the native app shell below.

## Submitting to the App Store (iOS)

This repo is wrapped with [Capacitor](https://capacitorjs.com/), which packages the
web app into a real native iOS project under `ios/`. To build and submit it, you need
a **Mac with Xcode** and an **Apple Developer account** ($99/year) — neither of those
steps can be done from this environment.

```bash
npm install
npm run build
npx cap sync ios
npx cap open ios     # opens the project in Xcode
```

From Xcode:

1. Select the `App` target → **Signing & Capabilities** → choose your Apple Developer
   team. The bundle identifier is `com.maxdaddario.quietgrove` (set in
   `capacitor.config.ts` — change it there, then re-run `npx cap sync ios`, if you
   want a different one before your first submission).
2. Set a version/build number, then **Product → Archive** to build a release archive.
3. Use the **Organizer** window's **Distribute App** flow to upload it to
   **App Store Connect**.
4. In [App Store Connect](https://appstoreconnect.apple.com), create the app listing
   (screenshots, description, privacy policy URL, pricing), attach an in-app purchase
   or subscription in StoreKit if you want to charge for it, and submit for review.

Whenever the web app changes, re-run `npm run build && npx cap sync ios` before
opening/archiving in Xcode so the native shell picks up the latest build.

**Before submitting:** Apple reviews mental-health-adjacent apps more closely
(Guideline 1.4.1) — avoid diagnostic/treatment claims, keep the in-app crisis
resources, and publish a privacy policy (this app collects no data — everything is
stored on-device — which is worth stating explicitly in the listing and policy).

## Tech stack

React, TypeScript, and Vite, with client-side routing via `react-router-dom`,
persistence via `localStorage`, offline/installable support via `vite-plugin-pwa`,
and a native iOS wrapper via `@capacitor/ios`. No backend or account required for the
web app itself.
