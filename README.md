<div align="center">

# Ankit Kumar — Portfolio &amp; Blog

**AI / ML / MLOps / GenAI Engineer**

A personal portfolio and technical blog covering MLOps platforms, production
generative-AI systems, and applied machine learning — built with the
[Chirpy][chirpy] Jekyll theme and deployed on GitHub Pages.

[![Live Site](https://img.shields.io/badge/Live-ankitkumar220694.github.io-0f766e?style=flat-square)](https://ankitkumar220694.github.io/)
[![Built with Jekyll](https://img.shields.io/badge/Built%20with-Jekyll-cc0000?style=flat-square&logo=jekyll&logoColor=white)](https://jekyllrb.com/)
[![Theme: Chirpy](https://img.shields.io/badge/Theme-Chirpy%20v7.6-0f766e?style=flat-square)][chirpy]
[![Deploy](https://github.com/ankitkumar220694/ankitkumar220694.github.io/actions/workflows/pages-deploy.yml/badge.svg)](https://github.com/ankitkumar220694/ankitkumar220694.github.io/actions)

🔗 **[ankitkumar220694.github.io](https://ankitkumar220694.github.io/)**

</div>

---

## About

I'm an AI/ML Engineer with 5 years building production ML systems, focused on
**MLOps** and **generative AI at scale**. This site is where I keep my project
case studies and write about the engineering behind them.

- 💼 **Projects** — professional work (MLOps framework, GenAI at 100k calls/day,
  Text-to-SQL, applied ML) and personal projects.
- ✍️ **Blog** — technical deep-dives on serving GenAI at scale and designing an
  MLOps platform.
- 📄 **About** — background, skills, and résumé.

## Tech Stack

| Layer | Tooling |
|-------|---------|
| Static site generator | [Jekyll](https://jekyllrb.com/) |
| Theme | [jekyll-theme-chirpy][chirpy] v7.6 |
| Typography | Space Grotesk (headings) + Inter (body) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions (`Build and Deploy`) |

## Repository Structure

```
.
├── _config.yml          # site config (title, theme, light mode, analytics)
├── _tabs/               # top-nav pages
│   ├── projects.md      #   Professional + Personal project case studies
│   └── about.md         #   bio, skills, education, résumé button
├── _posts/              # blog posts (YYYY-MM-DD-title.md)
├── _data/contact.yml    # sidebar contact links
├── assets/
│   ├── css/jekyll-theme-chirpy.scss   # custom light palette + typography
│   ├── img/avatar.jpg   # sidebar photo
│   ├── img/favicons/    # favicon set
│   └── resume/          # drop Ankit-Kumar-Resume.pdf here
└── .github/workflows/   # Pages build + deploy
```

## Local Development

Requires Ruby + Bundler ([setup guide](https://jekyllrb.com/docs/installation/)).

```bash
# install dependencies
bundle install

# serve locally with live reload at http://127.0.0.1:4000
bundle exec jekyll serve --livereload
```

## Updating Content

- **Add a blog post** — create `_posts/YYYY-MM-DD-title.md` with Chirpy front
  matter (`title`, `date`, `categories`, `tags`).
- **Edit projects** — update `_tabs/projects.md` (two sections: Professional
  Projects, Personal Projects).
- **Add the résumé** — drop the PDF at `assets/resume/Ankit-Kumar-Resume.pdf`;
  the download button on the About page appears automatically.
- **Deploy** — push to `main`; GitHub Actions builds and deploys within ~2 min.

## License

Site content © Ankit Kumar. The Chirpy theme is [MIT licensed][chirpy-license].

[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy
[chirpy-license]: https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/LICENSE
