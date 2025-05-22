import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://buzhi.dev', // Update with actual domain
  integrations: [mdx(), sitemap()],
  
  // Configure Astro to work alongside existing Gulp build
  srcDir: './astro-src',
  outDir: './astro-dist',
  publicDir: './public', // Will use a separate public directory
  
  // Support for SCSS
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/scss/components/abstracts/_variable.scss";`
        }
      }
    }
  },
  
  // Build configuration
  build: {
    assets: 'assets'
  }
});