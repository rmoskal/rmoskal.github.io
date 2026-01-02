# mostmedia.com

Personal portfolio/consultancy site for Robert Moskal.

## Tech Stack
- **Static site generator**: nanogen
- **Templating**: EJS
- **Dependencies**: lodash, marked

## Commands
```bash
# Development server
npm start

# Build
npm run build
```

## Content Structure
- `src/pages/index.ejs` — Main page with bio, services, and chronology
- `src/chronology/` — Individual project entries as JS files (sorted alphabetically for ordering)
- `src/partials/` — Reusable EJS components (e.g., chronbox)
- `src/layouts/` — Page layouts
- `src/assets/` — Static assets (images, CSS)

## Chronology System
Projects are defined as JS files in `src/chronology/`. File naming controls sort order. Each file exports project metadata that gets rendered via the `chronbox` partial.

## Deployment
Site is live at https://www.mostmedia.com/

## Content Notes
- Numbered project list (000-043+)
- Mix of client work, side projects, and thought pieces
- Voice: direct, first-person, opinionated
- Footer shows "Most Media © 2023" — may need updating
