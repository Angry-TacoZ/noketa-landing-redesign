# Noketa landing page redesign

A standalone landing-page redesign concept for Noketa's developer-first email platform.

## Stack

- Next.js 15
- React 19
- TypeScript

This is intentionally a static marketing surface. It uses the applicable pieces of the hiring stack without inventing a database, payment flow, or backend API that the concept does not need.

## What was used

- **Next.js 15, React 19, and TypeScript** for a focused static marketing build.
- **CSS-built product visuals** for the email editor, message artwork, grid, visual orbits, and workflow scene—no stock photography or UI kit.
- **Manrope** for readable display headings, **Instrument Serif** for editorial emphasis, **DM Sans** for body copy, and **DM Mono** for technical UI details.
- **Small purposeful interactions:** pointer-responsive perspective on the hero editor, staged entrance motion, button hover feedback, and smooth in-page navigation.
- **Responsive composition:** the desktop editor anchors the first viewport; small screens collapse secondary navigation and move the editor below the hero copy.

## Visual approach

The redesign uses an editorial developer-tool aesthetic: near-black interface surfaces, warm off-white reading space, acid lime for actions/status, and orange for the workflow chapter. The page deliberately avoids generic SaaS card grids in favor of oversized type, open space, product-led storytelling, and technical detail.

The narrative progresses from the email canvas, to the lifecycle workflow, to a typed SDK surface, then into a decisive final call to action. This makes Noketa feel like an opinionated system for serious teams—not another send-only email service.

## Concept notice

This is an independent redesign concept created for portfolio and hiring-review purposes. It is not an official Noketa website or affiliated product release.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Then visit `http://127.0.0.1:3000`.

## Checks

```powershell
npm.cmd run lint
npm.cmd run build
```
