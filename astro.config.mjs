import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://feuerwehr-effeltrich.de',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/impressum'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
