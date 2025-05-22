import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://buzhi.io',
  integrations: [mdx(), sitemap()],
  outDir: './astro-dist',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/abstracts/variables.scss";`
        }
      }
    }
  }
});