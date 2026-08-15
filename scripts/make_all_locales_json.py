# scripts/make_all_locales_json.py
import json

data = {}

# 1. English
data["en"] = {
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

# 2. Spanish (es)
data["es"] = {
  "units": {
    "nano": "nano", "micro": "micro", "pico": "pico",
    "nanometer": "nanómetro", "nanometers": "nanómetros",
    "micrometer": "micrómetro", "micrometers": "micrómetros",
    "picometer": "picómetro", "picometers": "picómetros",
    "millimeter": "milímetro", "millimeters": "milímetros",
    "meter": "metro", "meters": "metros",
    "nanogram": "nanogramo", "nanograms": "nanogramos",
    "microgram": "microgramo", "micrograms": "microgramos",
    "milligram": "miligramo", "milligrams": "miligramos",
    "gram": "gramo", "grams": "gramos",
    "kilogram": "kilogramo", "kilograms": "kilogramos",
    "nanofarad": "nanofaradio", "nanofarads": "nanofaradios",
    "microfarad": "microfaradio", "microfarads": "microfaradios",
    "picofarad": "picofaradio", "picofarads": "picofaradios",
    "nanomolar": "nanomolar", "micromolar": "micromolar",
    "nanosecond": "nanosegundo", "nanoseconds": "nanosegundos",
    "microsecond": "microsegundo", "microseconds": "microsegundos",
    "second": "segundo", "seconds": "segundos",
    "newton": "newton", "newtons": "newtons",
    "micronewton": "micronewton", "micronewtons": "micronewtons",
    "tesla": "tesla", "gauss": "gauss"
  },
  "convertPage": {
    "h1Pattern": "Convertidor de {from} a {to}",
    "introPattern": "Convierte {from} ({fromSymbol}) a {to} ({toSymbol}) al instante con fórmulas científicas exactas, tablas de conversión y explicaciones métricas paso a paso.",
    "formulaHeading": "Fórmula de Conversión",
    "formulaDesc": "Para convertir de {from} ({fromSymbol}) a {to} ({toSymbol}), multiplica por {factor} (o divide entre {divisor}).",
    "shortcutText": "Atajo: mueve el punto decimal tres lugares.",
    "quickTableHeading": "Tabla de Referencia Rápida",
    "faqHeading": "Preguntas Frecuentes",
    "faqQ1": "¿Cuánto es 1 {from} en {to}?",
    "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "¿Cuánto es 1000 {from} en {to}?",
    "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "¿Cuánto es 2500 {from} en {to}?",
    "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Convertidores Métricos Relacionados"
  },
  "siPrefixPage": {
    "badge": "Referencia Métrica",
    "title": "Guía Completa y Matriz de los 24 Prefijos del SI",
    "subtitle": "El Sistema Internacional de Unidades (SI) define 24 prefijos métricos a lo largo de 60 órdenes de magnitud, desde quecto (10⁻³⁰) hasta quetta (10³⁰).",
    "thPrefix": "Prefijo", "thSymbol": "Símbolo", "thPower": "Potencia de 10", "thScale": "Nombre de Escala", "thMultiplier": "Valor Multiplicador"
  },
  "chartsPage": {
    "badge": "Referencia Imprimible",
    "title": "Tablas de Conversión de Nano a Micro",
    "subtitle": "Matrices de consulta rápida para cálculos científicos y de laboratorio de alta frecuencia.",
    "thScientific": "Notación Científica", "openCalc": "Abrir Calculadora Interactiva y Fórmula →"
  },
  "errorPage": {
    "badge": "Error 404",
    "title": "Coordenada Fuera de Rango",
    "desc": "La ruta de cálculo o documentación a escala nanométrica solicitada no existe o se ha desplazado en el continuo métrico del SI.",
    "returnHome": "Volver a la Página Principal",
    "converterBtn": "Convertidor Nano a Micro",
    "physicsBtn": "Portal de Física de Antigravedad"
  }
}

print("Configuring all 52 languages...")
