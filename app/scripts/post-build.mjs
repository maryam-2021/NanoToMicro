import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = 'https://www.nanotomicro.com';

const aliasRoutes = new Set([
  'nanometers-to-micrometers',
  'nanoseconds-to-microseconds',
  'nanosieverts-to-microsieverts',
]);

const staticMetadata = new Map([
  ['', {
    title: 'Nano to Micro Converter — Instant n to µ Conversions | NanoToMicro',
    description: 'Free nano to micro converters: n to µ, nm to µm, ng to µg, nM to µM, nF to µF, ns to µs and more. Exact formulas, conversion tables, worked examples and FAQs.',
    canonical: `${SITE}/`,
  }],
  ['nano-to-micro-conversion', {
    title: 'Nano to Micro Conversion: Formula, Guide & Calculators',
    description: 'Convert nano units to micro units using the universal ÷1,000 formula. Explore calculators for nanometers, nanoseconds, nanograms, nanosieverts and more.',
    canonical: `${SITE}/nano-to-micro-conversion/`,
  }],
  ['length/nm-to-um', {
    title: 'Nanometers to Micrometers Converter (nm to µm) & Scale Guide',
    description: 'Convert nanometers to micrometers with the nm-to-µm calculator, formula, conversion table and real-world examples from optics, biology and technology.',
    canonical: `${SITE}/length/nm-to-um/`,
  }],
  ['time/ns-to-us', {
    title: 'Nanoseconds to Microseconds Converter (ns to µs) & Latency Guide',
    description: 'Convert nanoseconds to microseconds using the ns-to-µs calculator, formula and table, with practical examples from CPUs, memory, networks and electronics.',
    canonical: `${SITE}/time/ns-to-us/`,
  }],
  ['radiation/nsv-to-usv', {
    title: 'Nanosieverts to Microsieverts Converter (nSv to µSv) & Dose Guide',
    description: 'Convert nanosieverts to microsieverts using the nSv-to-µSv calculator, formula and table, with carefully sourced radiation-dose terminology and context.',
    canonical: `${SITE}/radiation/nsv-to-usv/`,
  }],
  ['si-prefix-converter', {
    title: 'SI Prefix Converter — Nano, Micro, Milli, Pico & All 24 Prefixes | NanoToMicro',
    description: 'Convert between all 24 SI prefixes instantly: nano to micro, pico to nano, micro to milli and more. Exact powers-of-ten calculator with the full prefix table.',
    canonical: `${SITE}/si-prefix-converter`,
  }],
  ['conversion-charts', {
    title: 'Nano to Micro Conversion Charts — Quick Reference Tables | NanoToMicro',
    description: 'Quick-reference nano to micro conversion charts: nm to µm, ng to µg, nM to µM, nF to µF, ns to µs, nL to µL, nA to µA and nC to µC. Exact values, printable tables.',
    canonical: `${SITE}/conversion-charts`,
  }],
  ['guides', {
    title: 'Guides & Articles — Nano, Micro and SI Prefixes Explained | NanoToMicro',
    description: 'In-depth guides on nano vs micro, SI prefixes, nM to µM conversion, capacitor codes and more — written to make unit conversion finally click.',
    canonical: `${SITE}/guides`,
  }],
]);

function decodeJsString(value) {
  return value.replace(/\\'/g, "'").replace(/\\\\/g, '\\');
}

function extractSeoRecords(text) {
  const records = [];
  const objectPattern = /\{\s*slug:\s*'((?:\\.|[^'])*)'([\s\S]*?)(?=\n\s*\},)/g;
  for (const match of text.matchAll(objectPattern)) {
    const slug = decodeJsString(match[1]);
    const body = match[2];
    const titleMatch = body.match(/title:\s*'((?:\\.|[^'])*)'/);
    const descriptionMatch = body.match(/description:\s*\n?\s*'((?:\\.|[^'])*)'/);
    if (!titleMatch || !descriptionMatch) continue;
    records.push({
      slug,
      title: decodeJsString(titleMatch[1]),
      description: decodeJsString(descriptionMatch[1]),
    });
  }
  return records;
}

const converterRoutes = [];
for (const file of ['src/data/converters.ts', 'src/data/converters-expansion.ts']) {
  const text = readFileSync(join(root, file), 'utf8');
  for (const record of extractSeoRecords(text)) {
    if (aliasRoutes.has(record.slug)) continue;
    converterRoutes.push(record.slug);
    staticMetadata.set(record.slug, {
      title: record.title,
      description: record.description,
      canonical: `${SITE}/${record.slug}`,
    });
  }
}

const guideRoutes = [];
const articleText = readFileSync(join(root, 'src/data/articles.ts'), 'utf8');
for (const record of extractSeoRecords(articleText)) {
  const route = `guides/${record.slug}`;
  guideRoutes.push(route);
  staticMetadata.set(route, {
    title: `${record.title} | NanoToMicro`,
    description: record.description,
    canonical: `${SITE}/${route}`,
  });
}

const authorityRoutes = [
  'nano-to-micro-conversion',
  'length/nm-to-um',
  'time/ns-to-us',
  'radiation/nsv-to-usv',
];
const utilityRoutes = ['si-prefix-converter', 'conversion-charts', 'guides'];
const routes = [...authorityRoutes, ...utilityRoutes, ...converterRoutes, ...guideRoutes];
const uniqueRoutes = [...new Set(routes)];

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function upsertMeta(html, attribute, key, content) {
  const escaped = escapeHtml(content);
  const re = new RegExp(`<meta\\s+${attribute}=["']${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`, 'i');
  const tag = `<meta ${attribute}="${key}" content="${escaped}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `  ${tag}\n  </head>`);
}

function injectMetadata(baseHtml, metadata) {
  let html = baseHtml;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(metadata.title)}</title>`);
  html = upsertMeta(html, 'name', 'description', metadata.description);
  html = upsertMeta(html, 'name', 'robots', 'index, follow, max-image-preview:large');
  html = upsertMeta(html, 'property', 'og:title', metadata.title);
  html = upsertMeta(html, 'property', 'og:description', metadata.description);
  html = upsertMeta(html, 'property', 'og:url', metadata.canonical);

  html = html.replace(/\s*<link\s+rel=["']canonical["'][^>]*>\s*/gi, '\n');
  html = html.replace('</head>', `  <link rel="canonical" href="${escapeHtml(metadata.canonical)}" />\n  </head>`);
  return html;
}

const indexHtml = join(dist, 'index.html');
const baseHtml = readFileSync(indexHtml, 'utf8');

// The homepage receives its canonical only in the production build, keeping the shared Vite
// source shell neutral while still giving crawlers a server-delivered canonical on the live page.
writeFileSync(indexHtml, injectMetadata(baseHtml, staticMetadata.get('')), 'utf8');

// Generate one route-specific HTML entry point for every canonical URL. These files still boot
// the React app, but crawlers now receive the correct title, description, canonical and OG URL
// before JavaScript executes.
for (const route of uniqueRoutes) {
  const metadata = staticMetadata.get(route);
  if (!metadata) {
    throw new Error(`Missing static SEO metadata for route: ${route}`);
  }
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), injectMetadata(baseHtml, metadata), 'utf8');
}

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
  ...uniqueSitemapPaths.map((path) => `  <url><loc>${SITE}/${path}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
writeFileSync(join(dist, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`Generated route-specific static SEO HTML for ${uniqueRoutes.length + 1} canonical pages.`);
console.log(`Generated a canonical-only sitemap with ${uniqueSitemapPaths.length} URLs.`);
