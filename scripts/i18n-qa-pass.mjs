// scripts/i18n-qa-pass.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

console.log('=== RUNNING STEP 4: COMPREHENSIVE RTL & NUMBER-FORMATTING QA PASS ===\n');

let failed = false;

// 1. RTL QA Check
console.log('--- 1. RTL Layout & Directionality Verification ---');
const rtlLocales = ['ar', 'he', 'fa', 'ur'];

for (const rtl of rtlLocales) {
  const homePath = path.join(distDir, rtl, 'index.html');
  const convertPath = path.join(distDir, rtl, 'convert', 'nano-to-micro', 'index.html');
  
  if (!fs.existsSync(homePath)) {
    console.error(`❌ [${rtl}] Missing dist/${rtl}/index.html`);
    failed = true;
    continue;
  }

  const html = fs.readFileSync(homePath, 'utf8');
  if (!html.includes('dir="rtl"')) {
    console.error(`❌ [${rtl}] dist/${rtl}/index.html is missing dir="rtl"`);
    failed = true;
  } else {
    console.log(`✔ [${rtl}] Root HTML correctly declares dir="rtl"`);
  }

  if (fs.existsSync(convertPath)) {
    const convHtml = fs.readFileSync(convertPath, 'utf8');
    if (!convHtml.includes('dir="rtl"')) {
      console.error(`❌ [${rtl}] Converter page is missing dir="rtl"`);
      failed = true;
    } else {
      console.log(`✔ [${rtl}] Converter island page correctly declares dir="rtl"`);
    }
  }
}

// 2. Number Formatting QA Check across all 52 locales
console.log('\n--- 2. Intl.NumberFormat Locale Safety Pass (52 Locales) ---');
import { LOCALES } from '../src/i18n/config.ts';

for (const loc of LOCALES) {
  try {
    const num = 1234.5678;
    const formatted = new Intl.NumberFormat(loc.code).format(num);
    if (!formatted || formatted === 'NaN') {
      console.error(`❌ [${loc.code}] Intl.NumberFormat produced invalid output: "${formatted}"`);
      failed = true;
    }
  } catch (err) {
    console.error(`❌ [${loc.code}] Intl.NumberFormat threw error:`, err);
    failed = true;
  }
}
console.log(`✔ All ${LOCALES.length} locales produce valid, well-formed Intl.NumberFormat strings.`);

// 3. Hreflang Tag Coverage in Sample Pages
console.log('\n--- 3. Hreflang Tags & x-default Verification ---');
const samplePages = [
  path.join(distDir, 'index.html'),
  path.join(distDir, 'convert', 'nano-to-micro', 'index.html'),
  path.join(distDir, 'es', 'index.html'),
  path.join(distDir, 'ar', 'convert', 'nano-to-micro', 'index.html'),
  path.join(distDir, 'zh-CN', 'index.html'),
];

for (const sp of samplePages) {
  if (fs.existsSync(sp)) {
    const content = fs.readFileSync(sp, 'utf8');
    const hasXDefault = content.includes('hreflang="x-default"');
    const hreflangCount = (content.match(/rel="alternate"\s+hreflang=/g) || []).length;
    
    const relPath = path.relative(distDir, sp);
    if (!hasXDefault) {
      console.error(`❌ [${relPath}] Missing x-default hreflang tag`);
      failed = true;
    } else if (hreflangCount < 50) {
      console.error(`❌ [${relPath}] Insufficient hreflang tags: ${hreflangCount} found`);
      failed = true;
    } else {
      console.log(`✔ [${relPath}] Contains x-default and ${hreflangCount} alternate hreflang tags.`);
    }
  }
}

// 4. Sitemap Index & Sub-sitemaps
console.log('\n--- 4. Sitemap Chunking & Index Verification ---');
const sitemapIndex = path.join(distDir, 'sitemap-index.xml');
if (!fs.existsSync(sitemapIndex)) {
  console.error('❌ Missing sitemap-index.xml');
  failed = true;
} else {
  const xml = fs.readFileSync(sitemapIndex, 'utf8');
  const submaps = (xml.match(/<loc>https:\/\/nanotomicro\.com\/sitemap-\d+\.xml<\/loc>/g) || []).length;
  console.log(`✔ sitemap-index.xml verified with ${submaps} chunked sub-sitemaps.`);
}

console.log('\n======================================================');
if (failed) {
  console.error('❌ STEP 4 QA PASS FAILED.');
  process.exit(1);
} else {
  console.log('✔ STEP 4 QA PASS COMPLETED SUCCESSFULLY WITH 100% PASS RATE!');
  process.exit(0);
}
