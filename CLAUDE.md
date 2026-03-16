# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for Hearthwood Cabinetry. Plain HTML/CSS/JS — no framework, no build step, no package.json. The entire site is deployable by dropping files on any static host.

**Live site:** https://hearthwood-cabinetry.netlify.app
**GitHub:** https://github.com/naturesfriendandresources-byte/hearthwood-cabinetry

## Deployment

Every `git push` to `master` deploys automatically via GitHub Actions → Netlify.

```bash
git add <files>
git commit -m "message"
git push
```

GitHub Actions workflow: `.github/workflows/deploy.yml` — uses `nwtgck/actions-netlify@v3`, publishes from repo root, no build command. Secrets `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` are stored in the GitHub repo.

To preview locally, open `index.html` directly in a browser or use any static file server:
```bash
# Python (if installed)
python -m http.server 8080
# Node (if installed)
npx serve .
```

## Data Architecture

Two files are the single source of truth for all content:

**`js/cabinet-data.js`** — Defines `CABINET_LINES` (global), a two-key object (`line1`, `line2`). Each line has `name`, `tagline`, `description`, `doorStyles[]`, `colors[]`, and `cabinets[]`. Also exports `STANDARD_WIDTHS` array used by the visualizer's bin-packing algorithm and `CABINET_TYPE_LABELS` map.

**`data/image-manifest.js`** — Defines `IMAGES` (global), mapping cabinet names to filenames for hero carousel, line1 cabinet photos, line2 cabinet photos, and door swatches. The key in `IMAGES.line1` / `IMAGES.line2` must **exactly match** `cabinet.name` in `cabinet-data.js` or the image won't load.

Both files are loaded as plain `<script>` tags before any page-specific JS, making their globals available to all scripts.

## How Each Page Works

**`line1.html` / `line2.html`** — Identical structure. The only difference is `<body data-line="line1">` vs `data-line="line2"`. `catalog.js` reads this attribute on init and looks up `CABINET_LINES[lineId]` to render everything dynamically. Door styles, color swatches, and all 14 cabinet cards are injected into the DOM at runtime.

**Color overlay system** — Each cabinet card has a `.color-overlay` div positioned absolute over the image. When a color swatch is selected, `catalog.js` sets `backgroundColor` and `opacity: 0.35` on every `.color-overlay`, while also applying a `cssFilter` property (from the color object in `cabinet-data.js`) to the `<img>` element. The `mix-blend-mode: color` on the overlay handles the visual tinting.

**`visualizer.html`** — 4-step wizard. Steps are `.viz-step` divs shown/hidden via `active` class. The layout engine (`visualizer.js`) runs a greedy left-to-right bin-packing algorithm: tries each width in `STANDARD_WIDTHS` order, places the largest that fits, repeats until the wall is full. Tall cabinets (≥84" ceiling) are placed first at x=0. The canvas is redrawn on every style selection change.

**`contact.html`** — Formspree AJAX form. The `action` URL contains `YOUR_FORM_ID` as a placeholder — the owner must replace this with a real Formspree form ID. Pre-fills the message textarea via `?summary=` URL param (set by visualizer and catalog "Request Quote" buttons).

## Script Load Order (critical)

Each HTML page loads scripts in this order — order matters because later scripts depend on earlier globals:
1. `data/image-manifest.js` → defines `IMAGES`
2. `js/cabinet-data.js` → defines `CABINET_LINES`, `STANDARD_WIDTHS`
3. Page-specific script (`carousel.js` / `catalog.js` / `visualizer.js`)

## Adding or Modifying Content

**Add a cabinet type:** Add an entry to `cabinets[]` in both `line1` and `line2` (or just one) in `cabinet-data.js`. Add a matching key/filename to `data/image-manifest.js`. Drop the image in `images/line1/` or `images/line2/`.

**Add hero images:** Drop files in `images/hero/`, add filenames to `IMAGES.hero` array in `data/image-manifest.js`.

**Change a color or door style:** Edit the `colors[]` or `doorStyles[]` arrays in `cabinet-data.js`. The `cssFilter` string on each color object is applied directly as a CSS `filter` property on cabinet images to simulate the finish.

**Change line names/descriptions:** Edit `name`, `tagline`, `description` fields in `cabinet-data.js`. The catalog pages and visualizer pull these at runtime.

## Pending TODOs (pre-launch)

- `contact.html`: Replace `YOUR_FORM_ID` in the `<form action>` with a real Formspree ID (free at formspree.io → send to `cabinetsbyhearthwood@gmail.com`)
- All page footers + `contact.html`: Replace `href="#"` on all four social media icons (Instagram, Facebook, Pinterest, YouTube) with actual profile URLs

## Design System

CSS custom properties defined in `css/styles.css` `:root`:
- `--navy: #1C2B4A`, `--gold: #C9A96E`, `--alabaster: #F2EEE6`, `--greige: #C2B5A5`, `--sage: #8BA888`, `--charcoal: #4A4F5C`
- Fonts: Playfair Display (headings), Lato (body) — loaded from Google Fonts CDN
- Icons: Font Awesome 6 — loaded from cdnjs CDN

`css/carousel.css` and `css/visualizer.css` are scoped to their respective pages and loaded only where needed.

---

## Frontend Build Rules

### Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

### Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

### Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

### Screenshot Workflow
- Puppeteer is installed at `C:/Users/natur/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/natur/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

### Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

### Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

### Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Use Hearthwood brand colors — navy, gold, alabaster, greige, sage, charcoal.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Hearthwood uses Playfair Display (headings) + Lato (body).
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

### Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
