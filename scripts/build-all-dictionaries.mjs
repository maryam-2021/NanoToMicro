// scripts/build-all-dictionaries.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dictDir = path.join(__dirname, '../src/i18n/dictionaries');

// Base English structure
import { en } from '../src/i18n/dictionaries/en.ts';

// 52 Language configurations
const LOCALES = [
  'es', 'de', 'fr', 'pt', 'pt-BR', 'it', 'nl', 'pl', 'ru', 'uk', 'tr', 'el', 'ro', 'hu', 'bg', 'cs', 'sk', 'sr', 'hr', 'sl',
  'sv', 'no', 'da', 'fi', 'et', 'lv', 'lt', 'ca', 'ar', 'he', 'fa', 'ur', 'hi', 'bn', 'ta', 'te', 'mr', 'gu', 'kn', 'ml', 'pa',
  'zh-CN', 'zh-TW', 'ja', 'ko', 'id', 'ms', 'fil', 'vi', 'th', 'sw'
];

console.log(`Checking ${LOCALES.length} non-default locales...`);
