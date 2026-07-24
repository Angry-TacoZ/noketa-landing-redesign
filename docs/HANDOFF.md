# Goal

Create a portfolio-ready redesign concept for Noketa's landing page, responding to the July 2026 hiring brief.

# Current status

Implemented as a standalone Next.js + TypeScript project. The landing page is ready for local review; it has not been deployed or submitted to Noketa.

# Decisions

- Used Next.js, React, and TypeScript because they are meaningful for a static marketing experience in the requested stack.
- Did not add TanStack, Astro, Hono, Drizzle, Stripe, or AWS without a real product need.
- Reframed the page around a large interactive email-design canvas, with editorial black/lime/orange art direction instead of a generic SaaS card layout.
- Replaced compressed display headings with Manrope and relaxed the tracking after browser review showed letter collisions.

# Changed files

- `app/page.tsx` — landing structure and pointer-reactive product canvas.
- `app/globals.css` — responsive visual system and motion.
- `app/layout.tsx` — document metadata.
- `app/readability.css` — legible Manrope display-heading override.
- `app/icon.svg` — branded browser icon, removing the production favicon 404.
- `eslint.config.mjs` — excludes generated Next and browser-artifact output from source linting.
- Project configuration, lint configuration, and README.

# Verification

- `npm.cmd run lint` passed.
- `npm.cmd run build` passed.
- `verify-project.cmd --project C:\Users\angry\.codex\sessions\noketa-landing-redesign` passed.
- Browser visual review completed at desktop and 390 x 844 mobile viewports; the revised developer heading is readable at desktop size.
- A fresh local production server pass reported zero browser console errors.
- Playwright browser inspection passed at desktop and 390 x 844 mobile viewports; no page console errors were reported.

# Next task

Decide whether to deploy a portfolio preview and prepare the submission email/portfolio note.

# Risks or blockers

- This is an independent concept with intentionally nonfunctional marketing links except the final app link.
- No production-readiness assessment or deployment has been performed.
