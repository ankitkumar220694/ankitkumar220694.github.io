<div align="center">

# Ankit Kumar — AI Engineering Portfolio

**Full-Stack AI & ML Engineer · 6+ years · Production GenAI, MLOps, FinOps, and Applied ML**

[![Live portfolio](https://img.shields.io/badge/Live-Portfolio-fec303?style=flat-square&labelColor=050505)](https://ankitkumar220694.github.io/)
[![Validate](https://github.com/ankitkumar220694/ankitkumar220694.github.io/actions/workflows/pr-check.yml/badge.svg)](https://github.com/ankitkumar220694/ankitkumar220694.github.io/actions/workflows/pr-check.yml)
[![Deploy](https://github.com/ankitkumar220694/ankitkumar220694.github.io/actions/workflows/pages-deploy.yml/badge.svg)](https://github.com/ankitkumar220694/ankitkumar220694.github.io/actions/workflows/pages-deploy.yml)

**[Open the portfolio](https://ankitkumar220694.github.io/)**

</div>

## Overview

A fast, responsive portfolio presenting production work across:

- **Agentic GenAI:** multi-agent DevSecOps automation with LangGraph, FastAPI, FastMCP, and AWS.
- **MLOps:** lifecycle monitoring for data quality, drift, model health, deployment, and cloud cost.
- **Production AI:** voice analytics at 100,000+ calls/day, enterprise RAG, and Text-to-SQL.
- **FinOps and applied ML:** multi-cloud cost optimization, acoustic diagnostics, propensity modelling, and data engineering.

The homepage uses an original kinetic-comic visual system. Projects, About, Tags, Archives, and technical posts retain Chirpy's proven responsive structure while sharing the same black, paper, yellow, cyan, magenta, and red design language.

## Stack

| Area | Technology |
|---|---|
| Site | Jekyll + `jekyll-theme-chirpy` 7.6 |
| UI | Liquid, semantic HTML, custom SCSS/CSS, vanilla JavaScript |
| Typography | Bebas Neue, Manrope, Space Mono |
| Hosting | GitHub Pages |
| Quality gates | Node assertions, Jekyll production build, HTMLProofer, desktop/mobile route renders |
| Delivery | GitHub Actions pull-request validation and protected Pages deployment |

## Repository map

```text
.
├── index.html                         # portfolio landing page
├── _layouts/landing.html              # standalone landing shell
├── _includes/kinetic-avatar.html      # original animated SVG portrait
├── _tabs/                             # Projects, About, Tags, Archives
├── _posts/                            # technical writing
├── assets/css/
│   ├── portfolio-landing.css          # landing design and responsive motion
│   └── jekyll-theme-chirpy.scss       # shared skin for Chirpy routes
├── assets/js/portfolio-landing.js     # menu, reveals, gaze, pointer effects
├── assets/resume/                     # downloadable résumé
└── .github/                           # tests, visual evidence, Pages deployment
```

## Run locally

Requires Ruby and Bundler.

```bash
bundle install
bundle exec jekyll serve --livereload --host 127.0.0.1
```

Open [the local site](http://127.0.0.1:4000/).

## Update content

- Add posts under `_posts/YYYY-MM-DD-title.md`.
- Edit case studies in `_tabs/projects.md`.
- Edit biography and skills in `_tabs/about.md`.
- Replace `assets/resume/Ankit-Kumar-Resume.pdf` to update the résumé.
- Keep visual changes in the two dedicated style entry points; do not override Chirpy's layout positioning.

## Validation and deployment

Every pull request to `main`:

1. Tests landing-page logic and source contracts.
2. Builds the production Jekyll site.
3. Checks generated routes and internal links with HTMLProofer.
4. Captures desktop and mobile evidence for the homepage and all primary secondary routes.

Merging a green pull request into `main` triggers the GitHub Pages deployment workflow.

## License

Portfolio content © Ankit Kumar. Chirpy is available under the [MIT License][chirpy-license].

[chirpy-license]: https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/LICENSE
