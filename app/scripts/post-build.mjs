import { mkdirSync, copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const authorityRoutes = [
  'nano-to-micro-conversion',
  'length/nm-to-um',
  'time/ns-to-us',
  'radiation/nsv-to-usv',
];

const utilityRoutes = [
  'si-prefix-converter',
  'conversion-charts',
  'guides',
];

// These legacy converter slugs now permanently redirect to the richer authority spokes.
// Do not generate standalone static HTML or sitemap entries for them.
const aliasRoutes = new Set([
  'nanometers-to-micrometers',
  'nanoseconds-to-microseconds',
  'nanosieverts-to-microsieverts',
]);

const converterRoutes = [];
const dataFiles = ['src/data/converters.ts', 'src/data/converters-expansion.ts'];
for (const file of dataFiles) {
  const text = readFileSync(join(root, file), 'utf8');
  for (const match of text.matchAll(/slug: '([^']+)'/g)) {
    if (!aliasRoutes.has(match[1])) {
      converterRoutes.push(match[1]);
    }
  }
}

const guideRoutes = [];
const articleText = readFileSync(join(root, 'src/data/articles.ts'), 'utf8');
for (const match of articleText.matchAll(/slug: '([^']+)'/g)) {
  guideRoutes.push(`guides/${match[1]}`);
}

const routes = [
  ...authorityRoutes,
  ...utilityRoutes,
  ...converterRoutes,
  ...guideRoutes,
];

const uniqueRoutes = [...new Set(routes)];
const indexHtml = join(dist, 'index.html');

for (const route of uniqueRoutes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(indexHtml, join(dir, 'index.html'));

  const parentDir = dirname(join(dist, `${route}.html`));
  mkdirSync(parentDir, { recursive: true });
  copyFileSync(indexHtml, join(dist, `${route}.html`));
}

// Build the deployed sitemap from canonical URLs only.
// Authority pages use their canonical trailing-slash form; generic converter and guide URLs
// retain the site's current no-trailing-slash canonical convention.
const sitemapPaths = [
  '',
  'nano-to-micro-conversion/',
  'length/nm-to-um/',
  'time/ns-to-us/',
  'radiation/nsv-to-usv/',
  ...utilityRoutes,
  ...converterRoutes,
  ...guideRoutes,
];

const uniqueSitemapPaths = [...new Set(sitemapPaths)];
const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...uniqueSitemapPaths.map((path) => `  <url><loc>https://www.nanotomicro.com/${path}</loc></url>`),
  '</urlset>',
  '',
].join('\n');

writeFileSync(join(dist, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`Successfully generated static index.html fallbacks for ${uniqueRoutes.length} canonical routes.`);
console.log(`Successfully generated a canonical-only sitemap with ${uniqueSitemapPaths.length} URLs.`);
