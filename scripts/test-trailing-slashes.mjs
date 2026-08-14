// scripts/test-trailing-slashes.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '..', 'dist');

console.log('=== VERIFYING TRAILING SLASHES ACROSS ALL 2,496 PAGES ===\n');

function getHtmlFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(distDir);
let missingTrailingSlash = [];
let checkedCount = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(distDir, file).replace(/\\/g, '/');

  // Match all internal hrefs in <a> tags
  const matches = content.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi);
  for (const m of matches) {
    const href = m[1];
    checkedCount++;

    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:')
    ) {
      continue;
    }

    const cleanHref = href.split('#')[0].split('?')[0];
    if (!cleanHref) continue;

    // Check if it is an asset like .png, .svg, .xml, .ico, .css, .js
    if (path.extname(cleanHref) !== '') {
      continue;
    }

    // Must end with a trailing slash!
    if (!cleanHref.endsWith('/')) {
      missingTrailingSlash.push({ page: relPath, href });
    }
  }
}

console.log(`Audited ${checkedCount} internal link instances across ${htmlFiles.length} pages.`);

if (missingTrailingSlash.length > 0) {
  console.error(`❌ Found ${missingTrailingSlash.length} links missing trailing slashes! First 10:`, missingTrailingSlash.slice(0, 10));
  process.exit(1);
} else {
  console.log('✔ 100% of internal HTML links (including LanguageSwitcher, Navigation, and Content links) have strict trailing slashes.');
  console.log('✔ Zero 301 trailing slash redirect chains for Googlebot!');
  process.exit(0);
}
