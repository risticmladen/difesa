# Difesa

Static website built with HTML, PostCSS, and vanilla JavaScript.  
Build tool: [Vite](https://vitejs.dev/)

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build → dist/
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
difesa/
├── index.html                  # Entry point (SEO, schema.org, ARIA)
├── vite.config.js              # Vite config (dev server, build output)
├── postcss.config.js           # PostCSS plugins
├── package.json
├── public/                     # Static assets (copied as-is to dist/)
│   └── robots.txt
├── dist/                       # Production build output (git-ignored)
└── src/
    ├── css/
    │   ├── style.css           # Main entry — imports all modules
    │   ├── base/
    │   │   ├── _variables.css  # CSS custom properties (colors, spacing, type scale)
    │   │   ├── _reset.css      # Modern CSS reset
    │   │   └── _fonts.css      # @font-face + base typography
    │   ├── layout/
    │   │   ├── _header.css     # Sticky header + responsive hamburger
    │   │   ├── _main-content.css  # Section spacing, container
    │   │   └── _footer.css
    │   ├── components/         # Future component styles
    │   └── utilities/
    │       └── _utilities.css  # sr-only, skip-link, loader, animations
    ├── js/
    │   ├── main.js             # JS entry — imports CSS + inits modules
    │   └── modules/
    │       ├── loader.js       # Page loader (fade-out on load)
    │       ├── toggle.js       # Mobile menu + generic data-toggle
    │       └── animations.js   # IntersectionObserver scroll animations
    └── assets/
        ├── fonts/              # Custom font files (.woff2)
        └── images/
```

---

## How It Works

### CSS (PostCSS)

All CSS is modular. `src/css/style.css` imports everything via `@import`, and PostCSS resolves imports + compiles modern syntax.

**Plugins:**
- `postcss-import` — resolves `@import` into a single file
- `postcss-preset-env` — CSS nesting, custom media queries, autoprefixer

### Use generic toggle

```html
<button data-toggle="panel-id" aria-expanded="false">Toggle</button>
<div id="panel-id">Content</div>
```

---

## SEO Checklist

Before going live, fill in these empty values in `index.html`:

- [ ] `<meta name="description">` — page description (max ~155 chars)
- [ ] `<link rel="canonical">` — full URL
- [ ] `og:url`, `og:description`, `og:image` — Open Graph meta
- [ ] `twitter:description`, `twitter:image` — Twitter card meta
- [ ] Schema.org `url` and `description` in both JSON-LD blocks
- [ ] Add favicon files to `public/` (favicon.ico, favicon.svg, apple-touch-icon.png)
- [ ] Update `Sitemap` URL in `public/robots.txt`

---

## Recreate From Scratch

If you need to set up the same structure in a new project:

```bash
# 1. Create project directory
mkdir my-project && cd my-project

# 2. Init package.json
npm init -y

# 3. Install dev dependencies
npm install --save-dev vite postcss postcss-import postcss-preset-env

# 4. Create directory structure
mkdir -p src/css/{base,layout,components,utilities} \
         src/js/modules \
         src/assets/{fonts,images} \
         public

# 5. Add scripts to package.json
npm pkg set type="module"
npm pkg set scripts.dev="vite"
npm pkg set scripts.build="vite build"
npm pkg set scripts.preview="vite preview"
```

Then copy over the config files (`vite.config.js`, `postcss.config.js`) and start building.
