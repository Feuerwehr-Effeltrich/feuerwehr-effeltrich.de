![Zola Check](https://github.com/Feuerwehr-Effeltrich/feuerwehr-effeltrich.de/actions/workflows/check.yml/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ed633b0e-accf-461a-b99b-d685c6fb2e3e/deploy-status)](https://app.netlify.com/sites/feuerwehr-effeltrich/deploys)
![Uptime Robot status](https://img.shields.io/uptimerobot/status/m798326144-52ff09adc025c3e21a1bb8a5)
![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m798326144-52ff09adc025c3e21a1bb8a5?label=uptime%20(30d))

# Feuerwehr-Effeltrich.de

Website für die [Freiwillige Feuerwehr Effeltrich](https://feuerwehr-effeltrich.de),
bereitgestellt mittels [Zola](https://getzola.org/) und dem [Toucan Theme](https://toucan.coinduf.eu/).
Deployment erfolgt mittels [netlify](https://www.netlify.com/). Einen Uptime-Monitor von UptimeRobot gibt es [hier](https://stats.uptimerobot.com/H8G5AKCxnv).

![Logo](/static/logo-hq.png)

# Dokumentation

## Einsatz anlegen

Als Hilfestellung kann man sich frühere Einsätze ansehen.

1. Ordner unter [/content/einsaetze](/content/einsaetze/) für den Einsatz anlegen (Format `<Jahr>-<Monat>-<Tag>-<Typ>`)
2. Ggf. Bilder hinzufügen
3. `index.md` anlegen
4. Commit und Push, deploy erfolgt automatisch

## Tipps

- Bilder als webp formatieren, zb mit [cwebp](https://developers.google.com/speed/webp/docs/cwebp), Standardeinstellungen reichen aus
- [PageSpeed Insights](https://pagespeed.web.dev/) als Hilfe, um Geschwindigkeit, Barrierefreiheit und SEO zu prüfen
- [Google Search Console](https://search.google.com/search-console) um Impressionen und CTR zu prüfen. Nur Statistiken der Google-Suche, da die Website selbst prinzipiell keine Tracker verwendet
