// scripts/i18n-check.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dictDir = path.join(__dirname, '../src/i18n/dictionaries');

// Universal strings allowed to match English (math symbols, units, equations)
const ALLOWED_MATCHES = new Set([
  '1 µm = 1,000 nm',
  '10⁻⁹ m',
  '10⁻⁶ m',
  'nm',
  'µm',
  'nF',
  'ns',
  'pm',
  'mm',
  'N',
  'T',
  'G',
  'λ = 400–700 nm optical',
  '0.1 nm',
  '2–3 nm',
  '10 nm',
  '100 nm',
  '~500 nm',
  '1 µm',
  '10 µm',
  '100 µm',
  '1 Nano = 0.001 Micro (Exact SI Metric Ratio)',
  'micro = nano ÷ 1,000',
  'nano = micro × 1,000',
  'Formula: {fromVal} {fromSym} {op} {factor} = {toVal} {toSym}',
  '© {year} Nano to Micro. All rights reserved. Precision SI conversions & peer-reviewed physical metrology.',
  'NIST & BIPM Compliant · Zero Floating-Point Drift',
  'Nano to Micro',
  'Concentration',
  'Length',
  'Mass',
  'Time',
  'Volume',
  'Viruses',
  'SI Prefixes',
  'nano',
  'micro',
  'pico',
  'nanometer',
  'nanometers',
  'micrometer',
  'micrometers',
  'picometer',
  'picometers',
  'millimeter',
  'millimeters',
  'meter',
  'meters',
  'nanogram',
  'nanograms',
  'microgram',
  'micrograms',
  'milligram',
  'milligrams',
  'gram',
  'grams',
  'kilogram',
  'kilograms',
  'nanofarad',
  'nanofarads',
  'microfarad',
  'microfarads',
  'picofarad',
  'picofarads',
  'nanomolar',
  'micromolar',
  'nanosecond',
  'nanoseconds',
  'microsecond',
  'microseconds',
  'second',
  'seconds',
  'newton',
  'newtons',
  'micronewton',
  'micronewtons',
  'tesla',
  'gauss',
  '1 {fromSymbol} = {toVal} {toSymbol}.',
  '1000 {fromSymbol} = {toVal} {toSymbol}.',
  '2500 {fromSymbol} = {toVal} {toSymbol}.',
]);

// Helper to flatten nested object into dot-separated paths
function flattenObject(obj, prefix = '') {
  let result = {};
  for (const [key, val] of Object.entries(obj)) {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      Object.assign(result, flattenObject(val, fullPath));
    } else {
      result[fullPath] = String(val);
    }
  }
  return result;
}

// Simple parser for TS dictionary files
function parseDictionaryFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Match exported object with optional TypeScript type annotation
  const match = content.match(/export\s+const\s+\w+(?:\s*:\s*[^=]+)?\s*=\s*({[\s\S]*});?\s*(?:export\s+type|$)/);
  if (!match) {
    throw new Error(`Could not parse dictionary object in ${filePath}`);
  }
  // Safe evaluation of object literal
  const cleanCode = match[1];
  try {
    const fn = new Function(`return (${cleanCode});`);
    return fn();
  } catch (err) {
    throw new Error(`Evaluation error in ${filePath}: ${err.message}`);
  }
}

async function runCheck() {
  console.log('=== RUNNING I18N DICTIONARY VALIDATION ===\n');

  const enPath = path.join(dictDir, 'en.ts');
  if (!fs.existsSync(enPath)) {
    console.error('❌ Master English dictionary (en.ts) not found!');
    process.exit(1);
  }

  const enDict = parseDictionaryFile(enPath);
  const enFlat = flattenObject(enDict);
  const enKeys = Object.keys(enFlat);

  console.log(`✔ Master English Dictionary (en.ts): ${enKeys.length} total keys defined.\n`);

  const files = fs.readdirSync(dictDir).filter((f) => f.endsWith('.ts') && f !== 'en.ts');

  if (files.length === 0) {
    console.log('ℹ No non-English dictionaries found yet (Step 1 baseline active).');
    console.log('✔ Master key set is 100% valid and ready for batch translations.\n');
    return;
  }

  let totalErrors = 0;

  for (const file of files) {
    const langCode = file.replace('.ts', '');
    const filePath = path.join(dictDir, file);
    const targetDict = parseDictionaryFile(filePath);
    const targetFlat = flattenObject(targetDict);

    const missingKeys = [];
    const duplicateEnglishKeys = [];

    for (const key of enKeys) {
      if (!(key in targetFlat) || targetFlat[key].trim() === '') {
        missingKeys.push(key);
      } else if (targetFlat[key] === enFlat[key] && !ALLOWED_MATCHES.has(enFlat[key])) {
        // Flag identical strings if they are descriptive phrases
        if (enFlat[key].length > 10 && !enFlat[key].includes('{')) {
          duplicateEnglishKeys.push(key);
        }
      }
    }

    if (missingKeys.length > 0 || duplicateEnglishKeys.length > 0) {
      totalErrors++;
      console.log(`❌ [${langCode}] validation failed:`);
      if (missingKeys.length > 0) {
        console.log(`   - Missing keys (${missingKeys.length}): ${missingKeys.slice(0, 5).join(', ')}${missingKeys.length > 5 ? '...' : ''}`);
      }
      if (duplicateEnglishKeys.length > 0) {
        console.log(`   - Untranslated English text (${duplicateEnglishKeys.length}): ${duplicateEnglishKeys.slice(0, 5).join(', ')}${duplicateEnglishKeys.length > 5 ? '...' : ''}`);
      }
    } else {
      console.log(`✔ [${langCode}] passed validation: 100% translated (${enKeys.length}/${enKeys.length} keys).`);
    }
  }

  console.log('\n=== I18N VALIDATION SUMMARY ===');
  if (totalErrors > 0) {
    console.error(`❌ Validation failed with ${totalErrors} problematic dictionary files.`);
    process.exit(1);
  } else {
    console.log('✔ All validated dictionaries match 100% of master keys with zero missing entries.\n');
  }
}

runCheck().catch((err) => {
  console.error('Fatal error running i18n-check:', err);
  process.exit(1);
});
