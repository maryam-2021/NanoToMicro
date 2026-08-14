// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import { LOCALES } from './src/i18n/config.ts';

const localesMap = {};
for (const loc of LOCALES) {
  localesMap[loc.code] = loc.hreflang;
}

// https://astro.build/config
export default defineConfig({
  site: 'https://nanotomicro.com',
  trailingSlash: 'always',
  integrations: [
    svelte(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: localesMap,
      },
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      entryLimit: 500, // Chunking for granular Google Search Console indexing
    }),
  ],
});
