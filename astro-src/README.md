# Buzhi Astro Migration

This directory contains the Astro version of the Buzhi website, migrated from Twig templates.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy assets to public directory:
   ```bash
   cp -r src/assets/* astro-src/public/assets/
   ```

3. Start development server:
   ```bash
   npm run astro:dev
   ```

## Build

```bash
npm run astro:build
```

## Preview

```bash
npm run astro:preview
```

## Structure

- `components/` - Reusable Astro components
  - `svg/` - SVG components migrated from Twig
  - `sections/` - Page section components
- `layouts/` - Layout templates  
- `pages/` - Route pages
- `styles/` - SCSS styles
- `public/` - Static assets (fonts, images, etc.)

## Migration Status

✅ **Completed:**
- All SVG components converted from Twig
- All page sections migrated to Astro components
- Main layout and header components
- Footer component
- Complete index page assembly
- Package.json configuration

🚧 **Next Steps:**
- Copy static assets to public directory
- Test build and development server
- Optimize component performance
- Add blog pages migration (Phase 3)