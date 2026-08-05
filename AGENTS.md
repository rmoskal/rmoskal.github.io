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
- `src/chronology/` — Individual project entries as JS files
- `src/partials/` — Reusable EJS components (e.g., chronbox)
- `src/layouts/` — Page layouts
- `src/assets/` — Static assets (images, CSS)
- `src/pages/*.md` — Blog posts (rarely used; most writing lives on stripmall.software)
- `docs/` — **Built output**. Deployed by GitHub Pages. Never edit directly.

## Chronology System
The chronology is the main content of the homepage. It is built from JS modules in `src/chronology/`.

### How it works
1. `site.config.js` reads every file in `src/chronology/` with `fs.readdirSync`.
2. Each file exports a project object with fields like `title`, `link`, `when`, `stack`, `roles`, `long`, and `body`.
3. The build passes the array to `src/pages/index.ejs`, which iterates over it and renders each entry via `src/partials/chronbox.ejs`.
4. `index.ejs` computes the displayed number as `length - count - 1`, so the **first file in alphabetical order displays as the highest-numbered, newest entry** at the top of the page.

### File naming and sort order
- Files are sorted alphabetically by filename.
- Use a numeric prefix to control position.
- `000-*` sorts first and displays as the newest/top entry.
- `001-*` sorts second and displays as the next entry.
- Letter-prefixed files (e.g., `a-cool.js`, `zz_nagano.js`) sort after numeric ones.
- Existing pattern: newest writing is `001-plant-flowers.js`; older entries use prefixes like `08moss`, `140-agt`, or letters.

### Adding a new chronology entry
1. Create a new JS file in `src/chronology/` with a prefix that places it where you want.
2. To put a new item at the top, name it `000-descriptive-name.js` (and bump the previous `000` if one exists).
3. Run `npm run build`.
4. Verify `docs/index.html` reflects the change.
5. Commit both the new source file and the rebuilt `docs/` output.

### Linking to stripmall.software posts
Several chronology entries link to blog posts on `stripmall.software`. The source of truth for those posts is the `stripmall-site` repo (`/home/node/source/stripmall-site`). The chronology entry here is just a pointer and a short blurb.

## Build and Deploy
- `npm run build` regenerates `docs/` from `src/`.
- `docs/` is committed to git and served by GitHub Pages from the `main` branch.
- **Always edit source files in `src/` and rebuild.** Editing `docs/index.html` directly will be lost on the next build.

## Voice
- Direct, first-person, opinionated.
- Mix of client work, side projects, and thought pieces.
