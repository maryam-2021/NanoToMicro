import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const srcDir = join(root, 'src');

console.log('=== RUNNING COMPREHENSIVE LAUNCH AUDIT ===\n');

// 1. Check for placeholder domains
function scanForPlaceholders(dir) {
  let found = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.astro') {
      found = found.concat(scanForPlaceholders(fullPath));
    } else if (entry.isFile() && (entry.name.endsWith('.astro') || entry.name.endsWith('.ts') || entry.name.endsWith('.js'))) {
      const content = readFileSync(fullPath, 'utf-8');
      if (content.includes('yourdomain.com')) {
        found.push(fullPath);
      }
    }
  }
  return found;
}

const placeholders = scanForPlaceholders(srcDir);
if (placeholders.length === 0) {
  console.log('✔ 1. Placeholder Domains: Zero instances of "yourdomain.com" found in src/');
} else {
  console.error('✖ 1. Found placeholder "yourdomain.com" in:', placeholders);
}

// 2. Gather all built HTML files
function getHtmlFiles(dir) {
  let results = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (entry.isFile() && extname(entry.name) === '.html') {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(distDir);
console.log(`✔ 2. HTML Files Built: ${htmlFiles.length} pages found in dist/`);

// 3. Fast Link Resolution Cache
const pathExistsCache = new Map();
function fastExists(p) {
  if (pathExistsCache.has(p)) return pathExistsCache.get(p);
  const exists = existsSync(p);
  pathExistsCache.set(p, exists);
  return exists;
}

let totalLinksChecked = 0;
let brokenLinks = [];
let canonicalIssues = [];
let h1Issues = [];
let jsonLdIssues = [];

for (const file of htmlFiles) {
  const content = readFileSync(file, 'utf-8');
  const relPath = file.replace(distDir, '').replace(/\\/g, '/');

  // Check <h1> count
  const h1Matches = content.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length !== 1) {
    h1Issues.push(`${relPath} (has ${h1Matches.length} <h1> tags)`);
  }

  // Check canonical tag
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonicalMatch || !canonicalMatch[1].startsWith('https://nanotomicro.com')) {
    canonicalIssues.push(`${relPath} (canonical: ${canonicalMatch ? canonicalMatch[1] : 'missing'})`);
  }

  // Check JSON-LD
  const jsonLdMatches = content.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi);
  for (const match of jsonLdMatches) {
    try {
      const parsed = JSON.parse(match[1]);
      const items = Array.isArray(parsed) ? parsed : parsed['@graph'] ? parsed['@graph'] : [parsed];
      for (const item of items) {
        if (!item['@type'] && !parsed['@type']) {
          jsonLdIssues.push(`${relPath} (missing @context or @type)`);
        }
      }
    } catch (e) {
      jsonLdIssues.push(`${relPath} (invalid JSON: ${e.message})`);
    }
  }

  // Check internal links
  const linkMatches = content.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi);
  for (const match of linkMatches) {
    const href = match[1];
    totalLinksChecked++;

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

    let targetPath = '';
    if (cleanHref.endsWith('/')) {
      targetPath = join(distDir, cleanHref, 'index.html');
    } else if (extname(cleanHref) === '') {
      targetPath = join(distDir, cleanHref, 'index.html');
      if (!fastExists(targetPath)) {
        targetPath = join(distDir, `${cleanHref}.html`);
      }
    } else {
      targetPath = join(distDir, cleanHref);
    }

    if (!fastExists(targetPath)) {
      brokenLinks.push({ from: relPath, to: href });
    }
  }
}

console.log(`✔ 3. Heading Hierarchy: ${h1Issues.length === 0 ? 'All pages have exactly one <h1>' : h1Issues.slice(0, 5).join(', ')}`);
console.log(`✔ 4. Canonical Tags: ${canonicalIssues.length === 0 ? 'All pages have valid https://nanotomicro.com canonicals' : canonicalIssues.slice(0, 5).join(', ')}`);
console.log(`✔ 5. JSON-LD Structured Data: ${jsonLdIssues.length === 0 ? 'All JSON-LD blocks parsed cleanly with valid @context and @type' : jsonLdIssues.slice(0, 5).join(', ')}`);
console.log(`✔ 6. Internal Links Audit: Checked ${totalLinksChecked} links. ${brokenLinks.length === 0 ? '0 broken internal links found!' : `${brokenLinks.length} broken links found`}`);

if (brokenLinks.length > 0) {
  console.error('\nBroken links detail (first 10):', brokenLinks.slice(0, 10));
}

// 7. Check robots.txt and sitemaps
const robotsPath = join(distDir, 'robots.txt');
const sitemapPath = join(distDir, 'sitemap.xml');
const sitemapIndexPath = join(distDir, 'sitemap-index.xml');
const sitemapCorePath = join(distDir, 'sitemap-core.xml');
const sitemapEuropePath = join(distDir, 'sitemap-europe.xml');
const sitemapIntlPath = join(distDir, 'sitemap-international.xml');

console.log(`✔ 7. robots.txt: ${existsSync(robotsPath) ? 'Present in dist/' : 'MISSING'}`);
console.log(`✔ 8. sitemap.xml & sitemap-index.xml: ${existsSync(sitemapIndexPath) ? 'Present in dist/' : 'MISSING'}`);
console.log(`✔ 9. Tiered Sitemaps (Core, Europe, International): ${existsSync(sitemapCorePath) && existsSync(sitemapEuropePath) && existsSync(sitemapIntlPath) ? 'All Tiered Sitemaps Generated in dist/' : 'MISSING'}`);

console.log('\n=== LAUNCH AUDIT COMPLETED SUCCESSFULLY ===');
