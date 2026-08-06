import { mkdirSync, copyFileSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const routes = [
  'nano-to-micro-conversion',
  'si-prefix-converter',
  'conversion-charts',
  'guides',
];

// Extract all converter slugs and guide slugs
const dataFiles = ['src/data/converters.ts', 'src/data/converters-expansion.ts'];
for (const file of dataFiles) {
  const text = readFileSync(join(root, file), 'utf8');
  for (const match of text.matchAll(/slug: '([^']+)'/g)) {
    routes.push(match[1]);
  }
}

const articleText = readFileSync(join(root, 'src/data/articles.ts'), 'utf8');
for (const match of articleText.matchAll(/slug: '([^']+)'/g)) {
  routes.push(`guides/${match[1]}`);
}

const indexHtml = join(dist, 'index.html');

for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(indexHtml, join(dir, 'index.html'));
  if (!route.includes('/')) {
    copyFileSync(indexHtml, join(dist, `${route}.html`));
  }
}

console.log(`Successfully generated static index.html fallbacks for ${routes.length} routes.`);
