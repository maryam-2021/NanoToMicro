// scripts/generate-tiered-sitemaps.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

console.log('=== GENERATING TIERED SITEMAPS FOR SEARCH CONSOLE ===\n');

// Core Tier: English root + top 5 high-value languages
const CORE_LOCALES = ['en', 'es', 'de', 'fr', 'ja', 'zh-CN'];

// Tier 2: European, Slavic, Nordic & Baltic languages
const TIER2_LOCALES = [
  'pt', 'pt-BR', 'it', 'nl', 'pl', 'ru', 'uk', 'tr', 'el', 'ro',
  'hu', 'bg', 'cs', 'sk', 'sr', 'hr', 'sl', 'sv', 'no', 'da', 'fi', 'et', 'lv', 'lt', 'ca'
];

// Tier 3: Middle Eastern, South Asian, Southeast Asian & African languages
const TIER3_LOCALES = [
  'ar', 'he', 'fa', 'ur', 'hi', 'bn', 'ta', 'te', 'mr', 'gu',
  'kn', 'ml', 'pa', 'zh-TW', 'ko', 'id', 'ms', 'fil', 'vi', 'th', 'sw'
];

function getAllHtmlUrls(dir, baseDir = dir) {
  let urls = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      urls = urls.concat(getAllHtmlUrls(fullPath, baseDir));
    } else if (entry.isFile() && entry.name === 'index.html') {
      const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
      let urlPath = relPath.replace(/\/index\.html$/, '/').replace(/^index\.html$/, '');
      if (urlPath && !urlPath.endsWith('/')) urlPath += '/';
      urls.push(`https://nanotomicro.com/${urlPath}`);
    }
  }
  return urls;
}

const allUrls = getAllHtmlUrls(distDir);
console.log(`Found ${allUrls.length} total HTML pages in dist/\n`);

function getLocaleForUrl(url) {
  const parsed = new URL(url);
  const pathParts = parsed.pathname.split('/').filter(Boolean);
  if (pathParts.length === 0) return 'en';
  const firstSegment = pathParts[0];
  if (firstSegment === 'convert' || firstSegment === 'antigravity' || firstSegment === 'si-prefix-converter') {
    return 'en';
  }
  return firstSegment;
}

function buildSitemapXml(urls) {
  const lastmod = new Date().toISOString().split('T')[0];
  const urlEntries = urls.map(u => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;
}

// 1. Generate Core Sitemap (en + es, de, fr, ja, zh-CN)
const coreUrls = allUrls.filter(u => CORE_LOCALES.includes(getLocaleForUrl(u)));
const coreXml = buildSitemapXml(coreUrls);
fs.writeFileSync(path.join(distDir, 'sitemap-core.xml'), coreXml, 'utf8');
console.log(`✔ [Core Tier] Generated sitemap-core.xml (${coreUrls.length} URLs: en, es, de, fr, ja, zh-CN)`);

// 2. Generate Tier 2 Sitemap (European & Slavic languages)
const tier2Urls = allUrls.filter(u => TIER2_LOCALES.includes(getLocaleForUrl(u)));
const tier2Xml = buildSitemapXml(tier2Urls);
fs.writeFileSync(path.join(distDir, 'sitemap-europe.xml'), tier2Xml, 'utf8');
console.log(`✔ [Tier 2] Generated sitemap-europe.xml (${tier2Urls.length} URLs: European & Slavic languages)`);

// 3. Generate Tier 3 Sitemap (Asia, Middle East, Africa)
const tier3Urls = allUrls.filter(u => TIER3_LOCALES.includes(getLocaleForUrl(u)));
const tier3Xml = buildSitemapXml(tier3Urls);
fs.writeFileSync(path.join(distDir, 'sitemap-international.xml'), tier3Xml, 'utf8');
console.log(`✔ [Tier 3] Generated sitemap-international.xml (${tier3Urls.length} URLs: Asia, Middle East, Africa)`);

console.log('\n=== TIERED SITEMAPS GENERATED SUCCESSFULLY ===');
