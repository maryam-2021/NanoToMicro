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
    canonical: `${SITE}/`, lang: 'en',
  }],
  ['nano-to-micro-conversion', {
    title: 'Nano to Micro Conversion: Formula, Guide & Calculators',
    description: 'Convert nano units to micro units using the universal ÷1,000 formula. Explore calculators for nanometers, nanoseconds, nanograms, nanosieverts and more.',
    canonical: `${SITE}/nano-to-micro-conversion/`, lang: 'en', alternates: true,
  }],
  ['length/nm-to-um', {
    title: 'Nanometers to Micrometers Converter (nm to µm) & Scale Guide',
    description: 'Convert nanometers to micrometers with the nm-to-µm calculator, formula, conversion table and real-world examples from optics, biology and technology.',
    canonical: `${SITE}/length/nm-to-um/`, lang: 'en',
  }],
  ['time/ns-to-us', {
    title: 'Nanoseconds to Microseconds Converter (ns to µs) & Latency Guide',
    description: 'Convert nanoseconds to microseconds using the ns-to-µs calculator, formula and table, with practical examples from CPUs, memory, networks and electronics.',
    canonical: `${SITE}/time/ns-to-us/`, lang: 'en',
  }],
  ['radiation/nsv-to-usv', {
    title: 'Nanosieverts to Microsieverts Converter (nSv to µSv) & Dose Guide',
    description: 'Convert nanosieverts to microsieverts using the nSv-to-µSv calculator, formula and table, with carefully sourced radiation-dose terminology and context.',
    canonical: `${SITE}/radiation/nsv-to-usv/`, lang: 'en',
  }],
  ['radiation/gray-vs-sievert', {
    title: 'Gray vs Sievert (Gy vs Sv): Radiation Units Explained | NanoToMicro',
    description: 'Understand the difference between gray (Gy) absorbed dose and sievert (Sv) radiation-protection dose quantities, why they are not generally interchangeable, and where becquerel fits.',
    canonical: `${SITE}/radiation/gray-vs-sievert/`, lang: 'en',
  }],
  ['radiation/usv-vs-usv-per-hour', {
    title: 'µSv vs µSv/h: Microsievert vs Dose Rate Explained | NanoToMicro',
    description: 'Understand the difference between microsieverts (µSv), which express a dose quantity, and microsieverts per hour (µSv/h), which express a dose rate.',
    canonical: `${SITE}/radiation/usv-vs-usv-per-hour/`, lang: 'en',
  }],
  ['radiation/usv-to-msv', {
    title: 'Microsieverts to Millisieverts Converter (µSv to mSv) | NanoToMicro',
    description: 'Convert microsieverts to millisieverts instantly. 1,000 µSv = 1 mSv. Exact µSv-to-mSv calculator, formula, examples and radiation-unit cautions.',
    canonical: `${SITE}/radiation/usv-to-msv/`, lang: 'en',
  }],
  ['si-prefix-converter', {
    title: 'SI Prefix Converter — Nano, Micro, Milli, Pico & All 24 Prefixes | NanoToMicro',
    description: 'Convert between all 24 SI prefixes instantly: nano to micro, pico to nano, micro to milli and more. Exact powers-of-ten calculator with the full prefix table.',
    canonical: `${SITE}/si-prefix-converter/`, lang: 'en',
  }],
  ['conversion-charts', {
    title: 'Nano to Micro Conversion Charts — Quick Reference Tables | NanoToMicro',
    description: 'Quick-reference nano to micro conversion charts: nm to µm, ng to µg, nM to µM, nF to µF, ns to µs, nL to µL, nA to µA and nC to µC. Exact values, printable tables.',
    canonical: `${SITE}/conversion-charts/`, lang: 'en',
  }],
  ['guides', {
    title: 'Guides & Articles — Nano, Micro and SI Prefixes Explained | NanoToMicro',
    description: 'In-depth guides on nano vs micro, SI prefixes, nM to µM conversion, capacitor codes and more — written to make unit conversion finally click.',
    canonical: `${SITE}/guides/`, lang: 'en',
  }],
  ['about', {
    title: 'About NanoToMicro — Exact SI Unit Conversion Tools',
    description: 'Learn how NanoToMicro builds focused SI prefix converters, reference tables and educational guides for nano, micro, pico and milli measurements.',
    canonical: `${SITE}/about/`, lang: 'en',
  }],
  ['contact', {
    title: 'Contact NanoToMicro — Corrections, Feedback & Questions',
    description: 'Contact NanoToMicro about calculator corrections, scientific sources, broken links, accessibility issues or general feedback.',
    canonical: `${SITE}/contact/`, lang: 'en',
  }],
  ['privacy', {
    title: 'Privacy Policy | NanoToMicro',
    description: 'Read the NanoToMicro privacy policy, including how browser-based calculators handle input, hosting logs, external links and contact information.',
    canonical: `${SITE}/privacy/`, lang: 'en',
  }],
  ['terms', {
    title: 'Terms of Use | NanoToMicro',
    description: 'Terms of use for NanoToMicro calculators, educational guides, external references and informational content.',
    canonical: `${SITE}/terms/`, lang: 'en',
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
    records.push({ slug, title: decodeJsString(titleMatch[1]), description: decodeJsString(descriptionMatch[1]) });
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
      canonical: `${SITE}/${record.slug}/`,
      lang: 'en',
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
    canonical: `${SITE}/${route}/`,
    lang: 'en',
  });
}

const categoryRoutes = [];
const categoryText = readFileSync(join(root, 'src/data/category-hubs.ts'), 'utf8');
for (const record of extractSeoRecords(categoryText)) {
  const route = `units/${record.slug}`;
  categoryRoutes.push(route);
  staticMetadata.set(route, {
    title: record.title,
    description: record.description,
    canonical: `${SITE}/${route}/`,
    lang: 'en',
  });
}

const localeRoutes = [];
const localeText = readFileSync(join(root, 'src/data/localized-hubs.ts'), 'utf8');
const localePattern = /\{\s*code:\s*'((?:\\.|[^'])*)'[\s\S]*?seoTitle:\s*'((?:\\.|[^'])*)'[\s\S]*?seoDescription:\s*'((?:\\.|[^'])*)'/g;
for (const match of localeText.matchAll(localePattern)) {
  const code = decodeJsString(match[1]);
  localeRoutes.push(code);
  staticMetadata.set(code, {
    title: decodeJsString(match[2]),
    description: decodeJsString(match[3]),
    canonical: `${SITE}/${code}/`,
    lang: code === 'zh' ? 'zh-Hans' : code,
    dir: code === 'ar' || code === 'ur' ? 'rtl' : 'ltr',
    alternates: true,
  });
}

const authorityRoutes = ['nano-to-micro-conversion', 'length/nm-to-um', 'time/ns-to-us', 'radiation/nsv-to-usv'];
const specialtyRoutes = ['radiation/gray-vs-sievert', 'radiation/usv-vs-usv-per-hour', 'radiation/usv-to-msv'];
const utilityRoutes = ['si-prefix-converter', 'conversion-charts', 'guides', 'about', 'contact', 'privacy', 'terms'];
const routes = [...authorityRoutes, ...specialtyRoutes, ...utilityRoutes, ...categoryRoutes, ...converterRoutes, ...guideRoutes, ...localeRoutes];
const uniqueRoutes = [...new Set(routes)];

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function upsertMeta(html, attribute, key, content) {
  const escaped = escapeHtml(content);
  const safeKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`<meta\\s+${attribute}=["']${safeKey}["'][^>]*>`, 'i');
  const tag = `<meta ${attribute}="${key}" content="${escaped}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `  ${tag}\n  </head>`);
}

const hreflangLinks = [
  { hreflang: 'en', href: `${SITE}/nano-to-micro-conversion/` },
  ...localeRoutes.map((code) => ({ hreflang: code === 'zh' ? 'zh-Hans' : code, href: `${SITE}/${code}/` })),
  { hreflang: 'x-default', href: `${SITE}/nano-to-micro-conversion/` },
];

function injectAlternates(html) {
  html = html.replace(/\s*<link[^>]+data-static-hreflang=["']1["'][^>]*>\s*/gi, '\n');
  const tags = hreflangLinks.map((item) => `  <link rel="alternate" hreflang="${item.hreflang}" href="${item.href}" data-static-hreflang="1" />`).join('\n');
  return html.replace('</head>', `${tags}\n  </head>`);
}

function injectMetadata(baseHtml, metadata) {
  let html = baseHtml;
  html = html.replace(/<html\s+lang=["'][^"']*["'](?:\s+dir=["'][^"']*["'])?/i, `<html lang="${metadata.lang ?? 'en'}"${metadata.dir ? ` dir="${metadata.dir}"` : ''}`);
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(metadata.title)}</title>`);
  html = upsertMeta(html, 'name', 'description', metadata.description);
  html = upsertMeta(html, 'name', 'robots', 'index, follow, max-image-preview:large');
  html = upsertMeta(html, 'property', 'og:title', metadata.title);
  html = upsertMeta(html, 'property', 'og:description', metadata.description);
  html = upsertMeta(html, 'property', 'og:url', metadata.canonical);
  html = html.replace(/\s*<link\s+rel=["']canonical["'][^>]*>\s*/gi, '\n');
  html = html.replace('</head>', `  <link rel="canonical" href="${escapeHtml(metadata.canonical)}" />\n  </head>`);
  if (metadata.alternates) html = injectAlternates(html);
  return html;
}

const indexHtml = join(dist, 'index.html');
const baseHtml = readFileSync(indexHtml, 'utf8');
writeFileSync(indexHtml, injectMetadata(baseHtml, staticMetadata.get('')), 'utf8');

for (const route of uniqueRoutes) {
  const metadata = staticMetadata.get(route);
  if (!metadata) throw new Error(`Missing static SEO metadata for route: ${route}`);
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), injectMetadata(baseHtml, metadata), 'utf8');
}

const sitemapPaths = ['', ...uniqueRoutes.map((route) => `${route}/`)];
const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapPaths.map((path) => `  <url><loc>${SITE}/${path}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
writeFileSync(join(dist, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`Generated route-specific static SEO HTML for ${uniqueRoutes.length + 1} canonical pages.`);
console.log(`Generated a trailing-slash canonical sitemap with ${sitemapPaths.length} URLs.`);
console.log(`Generated reciprocal hreflang annotations for English plus ${localeRoutes.length} localized hub pages.`);
