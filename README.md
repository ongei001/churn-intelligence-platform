# Churn Intelligence Platform

##  Case Study

The Churn Intelligence Platform is a complete CEO-facing web application for an insurance brokerage. It turns customer churn prediction into a boardroom-ready story: who is leaving, why they are leaving, how early the business can detect it, and exactly what brokers should do to retain high-value clients.

This project was designed as an executive analytics product rather than a generic dashboard. The goal was to show that machine learning can be communicated in plain business language, with enough technical depth to be credible and enough visual clarity for non-technical decision makers.

## Live Website

- Public website: https://ongei001.github.io/churn-intelligence-platform/
- GitHub repository: https://github.com/ongei001/churn-intelligence-platform

## Problem Statement

Insurance brokerages often know clients are leaving only after renewal dates have passed. By then, the revenue is already lost and the relationship is difficult to recover.

This project answers four business questions:

1. How much churn is costing the brokerage.
2. Which clients are most likely to leave.
3. Which signals predict churn before it happens.
4. What retention action should be taken for each client segment.

The app uses realistic simulated portfolio data for a Kenyan insurance brokerage, including KES revenue values, Kenyan client names, local regions, and insurance products such as motor, life, health, commercial, and WIBA.

## What I Built

I built a single-page, browser-based churn intelligence platform with eight narrative chapters:

1. The Wake-Up Call: annual churn rate, lost revenue, replacement cost, and high-risk client count.
2. Who Is Leaving: churn segmentation by policy type, tenure, age group, personas, and region.
3. The Signals We Were Missing: behavioural and transactional churn indicators.
4. How We Predict Churn: CEO-friendly explanations of logistic regression, random forest, XGBoost, Bayesian networks, survival analysis, and ensemble scoring.
5. Explainability: SHAP-style feature importance, client-level waterfall explanation, causal path, and regression coefficient table.
6. The Watchlist: filterable high-risk client table and revenue-versus-risk scatter plot.
7. The Retention Playbook: recommended interventions, ROI projections, timeline, what-if simulator, and recommendation assistant.
8. The North Star: 12-month scenarios, CLV improvement, model monitoring, and executive summary memo.

## Key Features

- Interactive executive dashboard with a dark Bloomberg-meets-McKinsey visual style.
- 50 simulated client records stored in a JavaScript `PORTFOLIO` data array.
- Filterable watchlist by policy type, risk band, region, tenure, and client name.
- Chart.js visualisations for churn trends, benchmarks, segmentation, model performance, SHAP impact, risk distribution, ROI, projections, and CLV.
- Recommendation assistant that returns broker-ready retention actions for watchlist clients.
- What-if simulator that adjusts churn probability based on premium change, broker contact, and claim resolution speed.
- Animated KPIs, scroll reveal effects, active chapter navigation, and responsive mobile layout.
- Export-to-PDF button using browser print styles.

## Technical Stack

- HTML5 for structure.
- CSS3 for layout, animation, glassmorphism cards, responsive design, and print styling.
- Vanilla JavaScript for state, filtering, chart setup, scroll tracking, chatbot logic, and simulation.
- Chart.js 4.x for data visualisation.
- Google Fonts for typography: Playfair Display for executive headings and DM Sans for data/UI text.
- GitHub Pages for public hosting.
- OpenAI Sites deployment for a Cloudflare Worker-compatible hosted version.

No frontend framework was used. The main product experience is intentionally contained in one `index.html` file so it can run directly in any modern browser.

## Data And Model Story

The app uses simulated brokerage data rather than a live backend. Each client record includes:

```js
{
  id,
  name,
  region,
  age,
  policyType,
  tenureYears,
  premiumKES,
  churnScore,
  riskBand,
  claimDenied,
  daysSinceContact,
  paymentsMissed,
  npsScore,
  multiPolicy,
  premiumChangePct,
  primaryRiskSignal,
  recommendedAction,
  revenueAtRisk
}
```

The churn scores are designed to be consistent with the risk signals. For example, a client with a recent claim denial, long period without broker contact, missed payments, and a large premium increase receives a higher churn score than a long-tenure multi-policy client with strong engagement.

The machine learning models are presented as an executive explanation layer:

- Logistic regression explains the baseline probability of churn.
- Random forest identifies complex behavioural patterns.
- XGBoost represents the highest-performing predictive model.
- Bayesian networks explain causal chains such as premium increase to competitor shopping to churn.
- Survival analysis estimates when a client is likely to leave.
- Ensemble scoring combines the strengths of all models into one unified churn score.

## Design Approach

The interface was designed for a CEO or senior insurance executive, so the project avoids technical clutter and focuses on business impact.

Design choices included:

- Dark navy and slate backgrounds for a premium executive feel.
- Gold accents for strategic highlights.
- Teal for positive opportunity and retention lift.
- Red for urgent churn risk.
- Full-screen narrative chapters instead of a crowded dashboard grid.
- Plain-English explanations beside technical concepts.
- Kenya-specific currency, names, regions, and policy types.

The result is a data product that tells a complete story instead of simply showing charts.

## How It Was Built

The project was built locally as a static web application:

1. Created the main application in `index.html`.
2. Added all HTML, CSS, JavaScript, data, interactions, and charts in one file.
3. Created a small `package.json` with a build command.
4. Added `scripts/build.mjs` to package the static site into a Cloudflare Worker-compatible `dist/` artifact for OpenAI Sites.
5. Added `.openai/hosting.json` to store Sites deployment metadata.
6. Captured a 1200 x 750 preview image and stored it as `public/screenshot.jpeg`.
7. Committed the project to Git.
8. Created a public GitHub repository under `ongei001`.
9. Pushed the full codebase to GitHub.
10. Enabled GitHub Pages from the `main` branch and `/ (root)` directory.
11. Verified that the public GitHub Pages URL loads the full application.

## Deployment

The project is deployed in two ways.

### GitHub Pages

GitHub Pages hosts the public portfolio version:

```text
https://ongei001.github.io/churn-intelligence-platform/
```

Because the app is static and has an `index.html` at the repository root, GitHub Pages can serve it directly from the `main` branch.

### OpenAI Sites

The project was also packaged for OpenAI Sites using:

```bash
npm run build
```

That command generates a `dist/` folder containing:

- `dist/server/index.js`
- `dist/server/public/index.html`
- `dist/server/public/screenshot.jpeg`
- `dist/_appgen_meta/appgarden.json`

This creates a Cloudflare Worker-compatible deployment artifact for the Sites platform.

## Run Locally

You can open the app directly:

```text
index.html
```

Or run a local static server:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://127.0.0.1:4173/index.html
```

## Build

```bash
npm run build
```

The build does not compile a framework. It packages the static app into the `dist/` structure required for Sites deployment.

## What This Project Demonstrates

This project demonstrates my ability to:

- Build an end-to-end analytics product from concept to deployment.
- Translate machine learning concepts into executive business language.
- Design data visualisations that support decision making.
- Create responsive, polished frontend interfaces using HTML, CSS, and JavaScript.
- Simulate realistic business data for a product demo.
- Build interactive filtering, scoring, recommendations, and what-if analysis.
- Deploy a static web app publicly using GitHub Pages.
- Package a web app for a Cloudflare Worker-compatible hosting platform.
- Present technical work as a business case study.

##  Summary

I built this Churn Intelligence Platform to show how predictive analytics can become a practical business tool. The application does not just say which clients may churn. It explains why, ranks them by revenue at risk, recommends retention actions, projects the financial upside, and presents the entire story in a format suitable for senior leadership.

It is a strong example of how I can combine frontend engineering, data storytelling, machine learning concepts, executive communication, and deployment into one complete product experience.
