![Zola Check](https://github.com/Feuerwehr-Effeltrich/feuerwehr-effeltrich.de/actions/workflows/check.yml/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/ed633b0e-accf-461a-b99b-d685c6fb2e3e/deploy-status)](https://app.netlify.com/sites/feuerwehr-effeltrich/deploys)

# Feuerwehr-Effeltrich.de

Website für die [Freiwillige Feuerwehr Effeltrich](https://feuerwehr-effeltrich.de),
bereitgestellt mittels [Zola](https://getzola.org/) und dem [Toucan Theme](https://toucan.coinduf.eu/).

---

# Dokumentation

## Einsatz anlegen

1. Ordner unter [/content/einsaetze](/content/einsaetze/) für den Einsatz anlegen (Format \<Datum\>-\<Typ\>)
2. `index.md` anlegen, als Hilfestellung kann man sich frühere Einsätze ansehen
3. Commit und Push, deploy erfolgt automatisch

## Tipps

- Bilder als webp formatieren, zb mit [cwebp](https://developers.google.com/speed/webp/docs/cwebp), Standardeinstellungen reichen aus
- [PageSpeed Insights](https://pagespeed.web.dev/) als Hilfe, um Geschwindigkeit, Barrierefreiheit und SEO zu prüfen
- [Search Console](https://search.google.com/search-console) um Impressionen und CTR zu prüfen. Hier nur Google, da die Website selbst prinzipiell keine Tracker verwendet
