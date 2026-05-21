# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static portfolio/CV website for Adrián Durán, a Unity game developer. Deployed to GitHub Pages at `adriplodocus.github.io`. No build step, no package manager, no framework — pure HTML, CSS, and vanilla JS.

## Running locally

Open any `.html` file via a local HTTP server (required because `header.js`, `footer.js`, and `subnav.js` use `fetch()` to load HTML partials):

```
npx serve .
# or
python -m http.server 8080
```

Opening `.html` files directly via `file://` will fail to load the header, footer, and subnav components.

## Architecture

### Component injection pattern
`header.html`, `footer.html`, and `subnav.html` are HTML partials. Each page that needs them has a container element (`<header id="header">`, `<div id="footer">`, `<div id="div_games">`) and loads the matching script (`Scripts/header.js`, `Scripts/footer.js`, `Scripts/subnav.js`). The scripts `fetch()` the partial, inject it into the container, then call `window.applyTranslations()` to apply the current language.

### Localization system
All user-visible text is localized via `Scripts/localization.js`. The `translations` object holds `'en'` and `'es'` keys. HTML elements carry `data-i18n="key"` (text content) and `data-i18n-title="key"` (title attribute) attributes. `applyTranslations(lang)` walks all such elements. Language preference is stored in `localStorage` under `'language'`.

**When adding new text:** add the key to both `'en'` and `'es'` blocks in `localization.js`, then reference it with `data-i18n` in HTML.

### Scroll reveal and animations
`Scripts/animations.js` runs on load. Elements with `data-reveal` attribute get scroll-triggered `is-visible` class via IntersectionObserver. Elements already in the viewport on load get a direct CSS animation instead. Videos with `<source data-src="...">` are lazy-loaded on intersection.

### Design system
The portfolio uses its **own** CSS design system in `Style/style.css` — it is separate from the global MrKlypp brand system in `~/.claude/CLAUDE.md`. Key tokens:

| Variable | Value | Role |
|---|---|---|
| `--bg-color` | `#0d0d11` | Page background |
| `--card-bg` | `#14141c` | Card background |
| `--primary-color` | `#c8956a` | Accent / headings |
| `--text-color` | `#e8e4dd` | Body text |
| `--secondary-text` | `#6b697c` | Muted text |

Font: `Louis` (local TTF at `Fonts/Louis.ttf`), fallback `system-ui`.

### Pages
- `index.html` — Hero / landing
- `CV.html` — CV image + PDF download (language-swapped via localization: `cv-img-src` / `cv-pdf-src`)
- `PersonalProjects.html` — Personal project showcase
- `CaseStudies.html` — Company test projects
- `Overcrowded.html`, `TinyHunters.html`, `CutTheRope.html`, `Eduzland.html` — Individual studio work pages
- `Tools.html` — Reusable Unity tools showcase
- `subnav.html` — Portfolio sub-navigation partial (loaded by `Scripts/subnav.js` into `<div id="div_games">`)

### Deployment
Push to `main` → GitHub Pages deploys automatically. The live URL is `https://adriplodocus.github.io`.
