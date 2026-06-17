# Feuerwehr Effeltrich Website

Static site for the Freiwillige Feuerwehr Effeltrich, built with Astro and Tailwind CSS.

## Tech stack

- **Astro** (static output) – `pnpm build` produces `dist/`
- **Tailwind CSS v4** via `@tailwindcss/vite` – configured in `src/styles/global.css`
- **@tailwindcss/typography** – used via `prose` class for markdown content
- **@astrojs/rss** – generates `/rss.xml` from the Einsätze collection
- **@astrojs/sitemap** – generates `sitemap-index.xml`, excludes `/impressum`
- **sharp** – image optimization at build time

## Commands

```
pnpm dev      # development server
pnpm build    # production build → dist/
pnpm preview  # serve dist/ locally
```

## Content: adding a new Einsatz

1. Create a folder under `src/content/einsaetze/` named `YYYY-MM-DD-type/`
   (type examples: `thl1`, `b3`, `thlu`, `abc`)
2. Add an `index.md` with this frontmatter:

```yaml
---
title: "Einsatz-Titel"
description: "Kurzbeschreibung"
date: YYYY-MM-DD
image: ./Bildname.webp   # optional, used as card cover and og:image
---

Content text in German markdown.

![Bildbeschreibung](./Bildname.webp)
```

3. Place image files (`.webp` preferred) in the same folder alongside `index.md`.
   Astro optimizes them automatically at build time.
4. For PDF downloads: put the PDF in `public/documents/` and link with an absolute path:
   `[Dateiname herunterladen](/documents/dateiname.pdf)`

The feed at `/einsaetze/` and the RSS feed update automatically.

## Pages

| File | Route |
|------|-------|
| `src/pages/index.astro` | `/` – landing, DWD widget, contact |
| `src/pages/einsaetze/index.astro` | `/einsaetze/` – all entries |
| `src/pages/einsaetze/[slug]/index.astro` | `/einsaetze/SLUG/` – single entry |
| `src/pages/jugendfeuerwehr.astro` | `/jugendfeuerwehr/` |
| `src/pages/verein.astro` | `/verein/` |
| `src/pages/was-ist-wenn.astro` | `/was-ist-wenn/` |
| `src/pages/impressum.astro` | `/impressum/` (noindex) |
| `src/pages/rss.xml.ts` | `/rss.xml` |

## Design system

Colors and font are defined via `@theme` in `src/styles/global.css`:
- `brand` (`#C74451`) – primary red, used for accents and links
- `brand-dark` (`#B5212F`) – hover state
- `font-sans` – Inter + system fallback

Dark mode follows `prefers-color-scheme` via Tailwind's `dark:` variant.
Reduced motion follows `prefers-reduced-motion` via the `@media` block in `global.css`.

The base layout (`src/layouts/Base.astro`) includes the header, sticky nav, footer, and all meta tags. Pass `noindex={true}` for pages that should not be indexed.

## Static assets

`public/` is served as-is:
- `public/fonts/` – Inter OTF files
- `public/images/` – site images (e.g., `FWGH.webp`)
- `public/documents/` – downloadable PDFs
- `public/logo-lq.webp`, `public/logo-hq.png` – logo variants

## Content collection schema

Defined in `src/content.config.ts`. If you add frontmatter fields to Einsatz entries, update the Zod schema there too, otherwise Astro will reject the content at build time.

## Deployment

- **Production**: push to `main` → GitHub Actions builds with pnpm and deploys via SFTP to Strato (`dist/` → server root)
- **Docker**: `Dockerfile` builds the site and serves it with static-web-server

## Self-documentation rule

When you change the content structure (new frontmatter fields, new pages, new route conventions), update the relevant sections of this file so the next session starts with an accurate picture.
