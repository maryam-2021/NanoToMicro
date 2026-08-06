/**
 * Generates public/sitemap.xml from all converter slugs defined in the data files.
 * Run after adding/removing converters:  node scripts/gen-sitemap.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataFiles = ['src/data/converters.ts', 'src/data/converters-expansion.ts'];
const BASE = 'https://www.nanotomicro.com';
const today = new Date().toISOString().slice(0, 10);

const slugs = new Set();
const guideSlugs = new Set();
for (const file of dataFiles) {
  const text = readFileSync(join(root, file), 'utf8');
  for (const match of text.matchAll(/slug: '([^']+)'/g)) {
    slugs.add(match[1]);
  }
}

const articleText = readFileSync(join(root, 'src/data/articles.ts'), 'utf8');
for (const match of articleText.matchAll(/slug: '([^']+)'/g)) {
  guideSlugs.add(match[1]);
}

const urls = [
  { loc: `${BASE}/`, priority: '1.0', changefreq: 'weekly' },
  { loc: `${BASE}/nano-to-micro-conversion/`, priority: '1.0', changefreq: 'weekly' },
  { loc: `${BASE}/length/nm-to-um/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${BASE}/time/ns-to-us/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${BASE}/radiation/nsv-to-usv/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${BASE}/si-prefix-converter`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE}/conversion-charts`, priority: '0.7', changefreq: 'monthly' },
  { loc: `${BASE}/guides`, priority: '0.7', changefreq: 'weekly' },
  ...[...guideSlugs].map((s) => ({ loc: `${BASE}/guides/${s}`, priority: '0.7', changefreq: 'monthly' })),
  ...[...slugs].map((s) => ({ loc: `${BASE}/${s}`, priority: '0.9', changefreq: 'monthly' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

mkdirSync(join(root, 'public'), { recursive: true });
writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml written with ${urls.length} URLs (${slugs.size} converters, ${guideSlugs.size} guides)`);
