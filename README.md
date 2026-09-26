<div align="center">

# Ankit Kumar — AI Engineering Portfolio

**Full-Stack AI & ML Engineer · Production GenAI · MLOps · Applied ML · Cloud Economics**

[![Live portfolio](https://img.shields.io/badge/Live-Portfolio-75f4e3?style=flat-square&labelColor=080c1a)](https://ankitkumar220694.github.io/)
[![Validate](https://github.com/ankitkumar220694/ankitkumar220694.github.io/actions/workflows/pr-check.yml/badge.svg)](https://github.com/ankitkumar220694/ankitkumar220694.github.io/actions/workflows/pr-check.yml)
[![Deploy](https://github.com/ankitkumar220694/ankitkumar220694.github.io/actions/workflows/pages-deploy.yml/badge.svg)](https://github.com/ankitkumar220694/ankitkumar220694.github.io/actions/workflows/pages-deploy.yml)

**[Open the portfolio](https://ankitkumar220694.github.io/)**

</div>

## Design system

The site uses one **Neo-Arcade Editorial** language across the homepage, project dossiers, profile, writing archive, topic index, articles and 404 page:

- Modern Manrope typography for readable content
- Space Mono for restrained retro labels and route identifiers
- A dark technical grid with cyan, gold and coral signal colors
- Flat editorial rows and hairline dividers instead of card-heavy interfaces
- Topic-specific pixel characters with lossless 2× assets for high-DPI displays
- Chirpy-owned layout behavior on secondary routes, with a skin-only custom layer

## Stack

| Area | Technology |
|---|---|
| Site | Jekyll + `jekyll-theme-chirpy` 7.6 |
| UI | Liquid, semantic HTML, custom SCSS/CSS, vanilla JavaScript |
| Typography | Manrope + Space Mono |
| Hosting | GitHub Pages |
| Quality | Source contracts, Jekyll production build, HTMLProofer, 20 route screenshots |
| Delivery | Pull-request validation followed by protected Pages deployment |

## Repository map

```text
.
├── index.html                         # standalone editorial homepage
├── assets/404.html                    # custom recovery route and theme override
├── _includes/route-hero.html          # shared secondary-page identity
├── _sass/_retro-editorial.scss        # Chirpy route skin
├── _tabs/                             # Projects, About, Writing, Topics
├── _posts/                            # technical writing with topic figures
├── assets/css/
│   ├── retro-game.css                 # homepage presentation
│   └── jekyll-theme-chirpy.scss       # theme entrypoint
├── assets/img/game/hd/                # lossless 2× pixel characters
├── assets/js/retro-game.js            # accessible mobile navigation
├── assets/resume/                     # downloadable résumé
└── .github/                           # contracts, screenshots and deployment
```

## Run locally

Requires Ruby and Bundler.

```bash
bundle install
bundle exec jekyll serve --livereload --host 127.0.0.1
```

Open [the local site](http://127.0.0.1:4000/).

## Content updates

- Add articles under `_posts/YYYY-MM-DD-title.md`.
- Edit project outcomes in `_tabs/projects.md`.
- Edit biography and capabilities in `_tabs/about.md`.
- Replace `assets/resume/Ankit-Kumar-Resume.pdf` to update the résumé.
- Reuse `_includes/route-hero.html` for a new top-level route.
- Preserve Chirpy layout positioning; visual changes belong in `_sass/_retro-editorial.scss`.

## Review and deployment

Every pull request to `main`:

1. Validates source and high-DPI asset contracts.
2. Builds the production Jekyll site.
3. checks generated routes and internal links with HTMLProofer.
4. Captures all ten public page templates at desktop and mobile sizes.
5. Uploads the 20 screenshots as a pre-deployment review artifact.

Only merging a green pull request into `main` triggers GitHub Pages deployment.

## License

Portfolio content © Ankit Kumar. Chirpy is available under the [MIT License][chirpy-license].

[chirpy-license]: https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/LICENSE
