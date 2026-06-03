# Churn Intelligence Platform

A CEO-facing churn prediction and retention intelligence website for an insurance brokerage.

## Live Website

- Public GitHub Pages site: https://ongei001.github.io/churn-intelligence-platform/
- Sites deployment: https://churn-intelligence-platform.numida-3187.chatgpt-team.site

## What It Includes

- Eight narrative chapters covering churn impact, churner segments, predictive signals, models, explainability, watchlist, recommendations, and 12-month outcomes.
- Simulated Kenyan insurance brokerage portfolio data with 50 realistic client records.
- Chart.js visualisations for benchmarks, timelines, segmentation, model accuracy, SHAP importance, risk distribution, ROI, projections, and CLV.
- A working high-risk client watchlist with filters for policy type, risk band, region, tenure, and client name.
- A Chapter 7 recommendation assistant that returns broker-ready retention actions.
- Responsive dark executive dashboard styling.

## Run Locally

Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://127.0.0.1:4173/index.html
```

## Build For Sites

```bash
npm run build
```

The build command creates a Cloudflare Worker-compatible `dist/` artifact for Sites.
