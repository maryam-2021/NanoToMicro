// src/i18n/utils.ts
import { en, type Dictionary } from './dictionaries/en';
import { es } from './dictionaries/es';
import { de } from './dictionaries/de';
import { fr } from './dictionaries/fr';
import { pt } from './dictionaries/pt';
import { ptBR } from './dictionaries/pt-BR';
import { it } from './dictionaries/it';
import { nl } from './dictionaries/nl';
import { pl } from './dictionaries/pl';
import { ru } from './dictionaries/ru';
import { uk } from './dictionaries/uk';
import { tr } from './dictionaries/tr';
import { el } from './dictionaries/el';
import { ro } from './dictionaries/ro';
import { hu } from './dictionaries/hu';
import { bg } from './dictionaries/bg';
import { cs } from './dictionaries/cs';
import { sk } from './dictionaries/sk';
import { sr } from './dictionaries/sr';
import { hr } from './dictionaries/hr';
import { sl } from './dictionaries/sl';
import { sv } from './dictionaries/sv';
import { no } from './dictionaries/no';
import { da } from './dictionaries/da';
import { fi } from './dictionaries/fi';
import { et } from './dictionaries/et';
import { lv } from './dictionaries/lv';
import { lt } from './dictionaries/lt';
import { ca } from './dictionaries/ca';
import { ar } from './dictionaries/ar';
import { he } from './dictionaries/he';
import { fa } from './dictionaries/fa';
import { ur } from './dictionaries/ur';
import { hi } from './dictionaries/hi';
import { bn } from './dictionaries/bn';
import { ta } from './dictionaries/ta';
import { te } from './dictionaries/te';
import { mr } from './dictionaries/mr';
import { gu } from './dictionaries/gu';
import { kn } from './dictionaries/kn';
import { ml } from './dictionaries/ml';
import { pa } from './dictionaries/pa';
import { zhCN } from './dictionaries/zh-CN';
import { zhTW } from './dictionaries/zh-TW';
import { ja } from './dictionaries/ja';
import { ko } from './dictionaries/ko';
import { id } from './dictionaries/id';
import { ms } from './dictionaries/ms';
import { fil } from './dictionaries/fil';
import { vi } from './dictionaries/vi';
import { th } from './dictionaries/th';
import { sw } from './dictionaries/sw';
import { DEFAULT_LOCALE } from './config';

// Registry of loaded dictionaries
const dictionaries: Record<string, Dictionary> = {
  en,
  es,
  de,
  fr,
  pt,
  'pt-BR': ptBR,
  it,
  nl,
  pl,
  ru,
  uk,
  tr,
  el,
  ro,
  hu,
  bg,
  cs,
  sk,
  sr,
  hr,
  sl,
  sv,
  no,
  da,
  fi,
  et,
  lv,
  lt,
  ca,
  ar,
  he,
  fa,
  ur,
  hi,
  bn,
  ta,
  te,
  mr,
  gu,
  kn,
  ml,
  pa,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ja,
  ko,
  id,
  ms,
  fil,
  vi,
  th,
  sw,
};

export function registerDictionary(code: string, dict: Dictionary) {
  dictionaries[code] = dict;
}

export function getDictionary(lang: string = DEFAULT_LOCALE): Dictionary {
  return dictionaries[lang] || en;
}

/**
 * Access nested key with dot-notation (e.g. 'hero.badge')
 */
function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * Type-safe translation function with string interpolation, plural support, and empty fallback
 * Usage: t('formula.exampleText', undefined, 'id')
 */
export function t(
  key: string,
  params?: Record<string, string | number>,
  lang: string = DEFAULT_LOCALE
): string {
  const dict = getDictionary(lang);
  let text = getNestedValue(dict, key);

  // Fallback to English if key missing or empty string
  if (text === undefined || text === '') {
    text = getNestedValue(en, key);
  }

  if (text === undefined || text === '') {
    return key;
  }

  if (params) {
    for (const [pKey, pValue] of Object.entries(params)) {
      text = text.replace(new RegExp(`\\{${pKey}\\}`, 'g'), String(pValue));
    }
  }

  return text;
}
