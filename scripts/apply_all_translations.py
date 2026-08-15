# scripts/apply_all_translations.py
import os
import json
import re

DICT_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src\i18n\dictionaries"

# 1. Linguistic data matrix for all language groups
# Groups:
# 1. English (en)
# 2. Romance (es, fr, it, pt, pt-BR, ca, ro)
# 3. Germanic (de, nl, sv, no, da)
# 4. Slavic (ru, uk, pl, cs, sk, bg, sr, hr, sl)
# 5. Baltic & Finno-Ugric (fi, et, lv, lt, hu)
# 6. Hellenic & Turkic (el, tr)
# 7. Semitic & Persian & Urdu (ar, he, fa, ur)
# 8. South Asian (hi, bn, ta, te, mr, gu, kn, ml, pa)
# 9. East Asian (zh-CN, zh-TW, ja, ko)
# 10. Southeast Asian & Austronesian (id, ms, fil, vi, th, sw)

LANGUAGES = {
  "en": {
    "units": {
      "nano": "nano", "micro": "micro", "pico": "pico",
      "nanometer": "nanometer", "nanometers": "nanometers",
      "micrometer": "micrometer", "micrometers": "micrometers",
      "picometer": "picometer", "picometers": "picometers",
      "millimeter": "millimeter", "millimeters": "millimeters",
      "meter": "meter", "meters": "meters",
      "nanogram": "nanogram", "nanograms": "nanograms",
      "microgram": "microgram", "micrograms": "micrograms",
      "milligram": "milligram", "milligrams": "milligrams",
      "gram": "gram", "grams": "grams",
      "kilogram": "kilogram", "kilograms": "kilograms",
      "nanofarad": "nanofarad", "nanofarads": "nanofarads",
      "microfarad": "microfarad", "microfarads": "microfarads",
      "picofarad": "picofarad", "picofarads": "picofarads",
      "nanomolar": "nanomolar", "micromolar": "micromolar",
      "nanosecond": "nanosecond", "nanoseconds": "nanoseconds",
      "microsecond": "microsecond", "microseconds": "microseconds",
      "second": "second", "seconds": "seconds",
      "newton": "newton", "newtons": "newtons",
      "micronewton": "micronewton", "micronewtons": "micronewtons",
      "tesla": "tesla", "gauss": "gauss"
    },
    "convertPage": {
      "h1Pattern": "{from} to {to} Converter",
      "introPattern": "Convert {from} ({fromSymbol}) to {to} ({toSymbol}) instantly with exact scientific formulas, conversion tables, and step-by-step metric explanations.",
      "formulaHeading": "Conversion Formula",
      "formulaDesc": "To convert from {from} ({fromSymbol}) to {to} ({toSymbol}), multiply by {factor} (or divide by {divisor}).",
      "shortcutText": "Shortcut: move the decimal point three places.",
      "quickTableHeading": "Quick Reference Table",
      "faqHeading": "Frequently Asked Questions",
      "faqQ1": "What is 1 {from} in {to}?",
      "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ2": "What is 1000 {from} in {to}?",
      "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ3": "What is 2500 {from} in {to}?",
      "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
      "relatedHeading": "Related Metric Converters"
    },
    "siPrefixPage": {
      "badge": "Metric Reference",
      "title": "Complete 24 SI Prefix Guide & Matrix",
      "subtitle": "The International System of Units (SI) defines 24 metric prefixes ranging across 60 orders of magnitude from quecto (10⁻³⁰) to quetta (10³⁰).",
      "thPrefix": "Prefix", "thSymbol": "Symbol", "thPower": "Power of 10", "thScale": "Scale Name", "thMultiplier": "Multiplier Value"
    },
    "chartsPage": {
      "badge": "Printable Reference",
      "title": "Nano to Micro Conversion Charts",
      "subtitle": "Quick-reference lookup matrices for high-frequency scientific and laboratory calculations.",
      "thScientific": "Scientific Notation", "openCalc": "Open Interactive Calculator & Formula →"
    },
    "errorPage": {
      "badge": "404 Error",
      "title": "Coordinate Out of Range",
      "desc": "The nanoscale calculation or documentation route you requested does not exist or has been shifted across the SI metric continuum.",
      "returnHome": "Return to Homepage",
      "converterBtn": "Nano to Micro Converter",
      "physicsBtn": "Antigravity Physics Hub"
    }
  }
}

print("Base English template ready.")
