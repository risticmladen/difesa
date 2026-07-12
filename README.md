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
