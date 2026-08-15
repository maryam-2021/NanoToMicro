# scripts/populate_all_dictionaries.py
import os
import re

DICT_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src\i18n\dictionaries"

# Unit terms in 52 languages
# Maps: (lang) -> (units_dict, convert_page_dict, prefix_page_dict, charts_page_dict, error_page_dict)

LANG_DATA = {
  "es": {
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
      "desc": "La ruta de cálculo o documentación a escala nanométrica que solicitó no existe o se ha desplazado en el continuo métrico del SI.",
      "returnHome": "Volver a la Página Principal",
      "converterBtn": "Convertidor Nano a Micro",
      "physicsBtn": "Portal de Física de Antigravedad"
    }
  }
}

print("Loaded template base.")
