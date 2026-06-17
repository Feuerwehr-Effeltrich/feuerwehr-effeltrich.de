![Build Check](https://github.com/Feuerwehr-Effeltrich/feuerwehr-effeltrich.de/actions/workflows/check.yml/badge.svg)
![Strato Deploy](https://github.com/Feuerwehr-Effeltrich/feuerwehr-effeltrich.de/actions/workflows/deploy.yml/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ed633b0e-accf-461a-b99b-d685c6fb2e3e/deploy-status)](https://app.netlify.com/sites/feuerwehr-effeltrich/deploys)
![Uptime Robot status](https://img.shields.io/uptimerobot/status/m798326144-52ff09adc025c3e21a1bb8a5)
![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m798326144-52ff09adc025c3e21a1bb8a5?label=uptime%20(30d))

# Feuerwehr-Effeltrich.de

Website für die [Freiwillige Feuerwehr Effeltrich](https://feuerwehr-effeltrich.de),
gebaut mit [Astro](https://astro.build) und [Tailwind CSS](https://tailwindcss.com).
Deployment erfolgt mittels SFTP bei [Strato](https://strato.de/).

Einen Uptime-Monitor von UptimeRobot gibt es [hier](http://status.feuerwehr-effeltrich.de/).

## Lokal ausführen

```sh
pnpm install
pnpm dev      # Entwicklungsserver auf http://localhost:4321
pnpm build    # Produktionsbuild → dist/
pnpm preview  # dist/ lokal servieren
```

## Einsatz anlegen

1. Ordner unter `src/content/einsaetze/` anlegen (Format: `YYYY-MM-DD-typ`)
2. Bilder hinzufügen (`.webp` empfohlen, z.B. mit [cwebp](https://developers.google.com/speed/webp/docs/cwebp))
3. `index.md` anlegen:

```yaml
---
title: "Einsatz-Titel"
description: "Kurzbeschreibung"
date: YYYY-MM-DD
image: ./Bildname.webp
---

Text des Einsatzberichts.

![Bildbeschreibung](./Bildname.webp)
```

4. Commit und Push – Deployment erfolgt automatisch.
