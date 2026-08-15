# scripts/generate_full_dictionaries.py
import os
import json

DICT_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src\i18n\dictionaries"

# We have 52 locales:
# en, es, de, fr, pt, pt-BR, it, nl, pl, ru, uk, tr, el, ro, hu, bg, cs, sk, sr, hr, sl,
# sv, no, da, fi, et, lv, lt, ca, ar, he, fa, ur, hi, bn, ta, te, mr, gu, kn, ml, pa,
# zh-CN, zh-TW, ja, ko, id, ms, fil, vi, th, sw

# Translation dictionary mappings per language
TRANSLATIONS = {
  "pt": {
    "units": {
      "nano": "nano", "micro": "micro", "pico": "pico",
      "nanometer": "nanómetro", "nanometers": "nanómetros",
      "micrometer": "micrómetro", "micrometers": "micrómetros",
      "picometer": "picómetro", "picometers": "picómetros",
      "millimeter": "milímetro", "millimeters": "milímetros",
      "meter": "metro", "meters": "metros",
      "nanogram": "nanograma", "nanograms": "nanogramas",
      "microgram": "micrograma", "micrograms": "microgramas",
      "milligram": "miligrama", "milligrams": "miligramas",
      "gram": "grama", "grams": "gramas",
      "kilogram": "quilograma", "kilograms": "quilogramas",
      "nanofarad": "nanofarad", "nanofarads": "nanofarads",
      "microfarad": "microfarad", "microfarads": "microfarads",
      "picofarad": "picofarad", "picofarads": "picofarads",
      "nanomolar": "nanomolar", "micromolar": "micromolar",
      "nanosecond": "nanossegundo", "nanoseconds": "nanossegundos",
      "microsecond": "microssegundo", "microseconds": "microssegundos",
      "second": "segundo", "seconds": "segundos",
      "newton": "newton", "newtons": "newtons",
      "micronewton": "micronewton", "micronewtons": "micronewtons",
      "tesla": "tesla", "gauss": "gauss"
    },
    "convertPage": {
      "h1Pattern": "Conversor de {from} para {to}",
      "introPattern": "Converta instantaneamente {from} ({fromSymbol}) para {to} ({toSymbol}) com fórmulas científicas exatas, tabelas de conversão e explicações passo a passo.",
      "formulaHeading": "Fórmula de Conversão",
      "formulaDesc": "Para converter de {from} ({fromSymbol}) para {to} ({toSymbol}), multiplique por {factor} (ou divida por {divisor}).",
      "shortcutText": "Atalho: desloque a vírgula três casas decimais.",
      "quickTableHeading": "Tabela de Referência Rápida",
      "faqHeading": "Perguntas Frequentes",
      "faqQ1": "Quanto é 1 {from} em {to}?",
      "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ2": "Quanto são 1000 {from} em {to}?",
      "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ3": "Quanto são 2500 {from} em {to}?",
      "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
      "relatedHeading": "Conversores Métricos Relacionados"
    },
    "siPrefixPage": {
      "badge": "Referência Métrica",
      "title": "Guia Completo e Matriz dos 24 Prefixos do SI",
      "subtitle": "O Sistema Internacional de Unidades (SI) define 24 prefixos métricos abrangendo 60 ordens de magnitude, de quecto (10⁻³⁰) a quetta (10³⁰).",
      "thPrefix": "Prefixo", "thSymbol": "Símbolo", "thPower": "Potência de 10", "thScale": "Nome da Escala", "thMultiplier": "Valor Multiplicador"
    },
    "chartsPage": {
      "badge": "Referência Imprimível",
      "title": "Tabelas de Conversão Nano para Micro",
      "subtitle": "Matrizes de consulta rápida para cálculos científicos e laboratoriais de alta frequência.",
      "thScientific": "Notação Científica", "openCalc": "Abrir Calculadora Interativa e Fórmula →"
    },
    "errorPage": {
      "badge": "Erro 404",
      "title": "Coordenada Fora do Intervalo",
      "desc": "A rota de cálculo nanométrico ou documentação solicitada não existe ou foi deslocada no contínuo métrico do SI.",
      "returnHome": "Voltar à Página Inicial",
      "converterBtn": "Conversor Nano para Micro",
      "physicsBtn": "Centro de Física de Antigravidade"
    }
  },
  "it": {
    "units": {
      "nano": "nano", "micro": "micro", "pico": "pico",
      "nanometer": "nanometro", "nanometers": "nanometri",
      "micrometer": "micrometro", "micrometers": "micrometri",
      "picometer": "picometro", "picometers": "picometri",
      "millimeter": "millimetro", "millimeters": "millimetri",
      "meter": "metro", "meters": "metri",
      "nanogram": "nanogrammo", "nanograms": "nanogrammi",
      "microgram": "microgrammo", "micrograms": "microgrammi",
      "milligram": "milligrammo", "milligrams": "milligrammi",
      "gram": "grammo", "grams": "grammi",
      "kilogram": "chilogrammo", "kilograms": "chilogrammi",
      "nanofarad": "nanofarad", "nanofarads": "nanofarad",
      "microfarad": "microfarad", "microfarads": "microfarad",
      "picofarad": "picofarad", "picofarads": "picofarad",
      "nanomolar": "nanomolare", "micromolar": "micromolare",
      "nanosecond": "nanosecondo", "nanoseconds": "nanosecondi",
      "microsecond": "microsecondo", "microseconds": "microsecondi",
      "second": "secondo", "seconds": "secondi",
      "newton": "newton", "newtons": "newton",
      "micronewton": "micronewton", "micronewtons": "micronewton",
      "tesla": "tesla", "gauss": "gauss"
    },
    "convertPage": {
      "h1Pattern": "Convertitore da {from} a {to}",
      "introPattern": "Converti all'istante {from} ({fromSymbol}) in {to} ({toSymbol}) con formule scientifiche esatte, tabelle di conversione e spiegazioni dettagliate.",
      "formulaHeading": "Formula di Conversione",
      "formulaDesc": "Per convertire da {from} ({fromSymbol}) a {to} ({toSymbol}), moltiplica per {factor} (o dividi per {divisor}).",
      "shortcutText": "Scorciatoia: sposta la virgola di tre posizioni.",
      "quickTableHeading": "Tabella di Riferimento Rapido",
      "faqHeading": "Domande Frequenti",
      "faqQ1": "Quanto vale 1 {from} in {to}?",
      "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ2": "Quanto valgono 1000 {from} in {to}?",
      "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ3": "Quanto valgono 2500 {from} in {to}?",
      "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
      "relatedHeading": "Convertitori Metrici Correlati"
    },
    "siPrefixPage": {
      "badge": "Riferimento Metrico",
      "title": "Guida Completa e Matrice dei 24 Prefissi SI",
      "subtitle": "Il Sistema Internazionale di Unità (SI) definisce 24 prefissi metrici su 60 ordini di grandezza, da quecto (10⁻³⁰) a quetta (10³⁰).",
      "thPrefix": "Prefisso", "thSymbol": "Simbolo", "thPower": "Potenza di 10", "thScale": "Nome Scala", "thMultiplier": "Valore Moltiplicatore"
    },
    "chartsPage": {
      "badge": "Riferimento Stampabile",
      "title": "Tabelle di Conversione da Nano a Micro",
      "subtitle": "Matrici di consultazione rapida per calcoli scientifici e di laboratorio ad alta precisione.",
      "thScientific": "Notazione Scientifica", "openCalc": "Apri Calcolatrice Interattiva e Formula →"
    },
    "errorPage": {
      "badge": "Errore 404",
      "title": "Coordinata Fuori Portata",
      "desc": "Il percorso di calcolo o documentazione nanometrica richiesto non esiste o è stato spostato nel continuo metrico SI.",
      "returnHome": "Torna alla Homepage",
      "converterBtn": "Convertitore Nano in Micro",
      "physicsBtn": "Centro di Fisica Antigravitazionale"
    }
  }
}

# Copy pt to pt-BR with slight Brazilian nuances
TRANSLATIONS["pt-BR"] = {
  "units": dict(TRANSLATIONS["pt"]["units"]),
  "convertPage": {
    "h1Pattern": "Conversor de {from} para {to}",
    "introPattern": "Converta instantaneamente {from} ({fromSymbol}) para {to} ({toSymbol}) com fórmulas científicas exatas, tabelas de conversão e explicações passo a passo.",
    "formulaHeading": "Fórmula de Conversão",
    "formulaDesc": "Para converter de {from} ({fromSymbol}) para {to} ({toSymbol}), multiplique por {factor} (ou divida por {divisor}).",
    "shortcutText": "Atalho: mova a vírgula três casas decimais para a esquerda.",
    "quickTableHeading": "Tabela de Referência Rápida",
    "faqHeading": "Perguntas Frequentes",
    "faqQ1": "Quanto é 1 {from} em {to}?",
    "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Quanto são 1000 {from} em {to}?",
    "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Quanto são 2500 {from} em {to}?",
    "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Conversores Métricos Relacionados"
  },
  "siPrefixPage": dict(TRANSLATIONS["pt"]["siPrefixPage"]),
  "chartsPage": dict(TRANSLATIONS["pt"]["chartsPage"]),
  "errorPage": dict(TRANSLATIONS["pt"]["errorPage"])
}

print("Base Portuguese & Italian configured.")
