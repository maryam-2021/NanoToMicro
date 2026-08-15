# scripts/generate_complete_52_dictionaries.py
import os
import re
import json

DICT_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src\i18n\dictionaries"

# Comprehensive database of all 52 languages
LANG_DB = {
  # --- 1. Western & Romance ---
  "es": {
    "units": {
      "nano": "nano", "micro": "micro", "pico": "pico",
      "nanometer": "nanómetro", "nanometers": "nanómetros", "micrometer": "micrómetro", "micrometers": "micrómetros",
      "picometer": "picómetro", "picometers": "picómetros", "millimeter": "milímetro", "millimeters": "milímetros",
      "meter": "metro", "meters": "metros", "nanogram": "nanogramo", "nanograms": "nanogramos",
      "microgram": "microgramo", "micrograms": "microgramos", "milligram": "miligramo", "milligrams": "miligramos",
      "gram": "gramo", "grams": "gramos", "kilogram": "kilogramo", "kilograms": "kilogramos",
      "nanofarad": "nanofaradio", "nanofarads": "nanofaradios", "microfarad": "microfaradio", "microfarads": "microfaradios",
      "picofarad": "picofaradio", "picofarads": "picofaradios", "nanomolar": "nanomolar", "micromolar": "micromolar",
      "nanosecond": "nanosegundo", "nanoseconds": "nanosegundos", "microsecond": "microsegundo", "microseconds": "microsegundos",
      "second": "segundo", "seconds": "segundos", "newton": "newton", "newtons": "newtons",
      "micronewton": "micronewton", "micronewtons": "micronewtons", "tesla": "tesla", "gauss": "gauss"
    },
    "convertPage": {
      "h1Pattern": "Convertidor de {from} a {to}",
      "introPattern": "Convierte {from} ({fromSymbol}) a {to} ({toSymbol}) al instante con fórmulas científicas exactas, tablas de conversión y explicaciones métricas paso a paso.",
      "formulaHeading": "Fórmula de Conversión", "formulaDesc": "Para convertir de {from} ({fromSymbol}) a {to} ({toSymbol}), multiplica por {factor} (o divide entre {divisor}).",
      "shortcutText": "Atajo: mueve el punto decimal tres lugares.", "quickTableHeading": "Tabla de Referencia Rápida", "faqHeading": "Preguntas Frecuentes",
      "faqQ1": "¿Cuánto es 1 {from} en {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ2": "¿Cuánto es 1000 {from} en {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ3": "¿Cuánto es 2500 {from} en {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
      "relatedHeading": "Convertidores Métricos Relacionados"
    },
    "siPrefixPage": {
      "badge": "Referencia Métrica", "title": "Guía Completa y Matriz de los 24 Prefijos del SI",
      "subtitle": "El Sistema Internacional de Unidades (SI) define 24 prefijos métricos a lo largo de 60 órdenes de magnitud, desde quecto (10⁻³⁰) hasta quetta (10³⁰).",
      "thPrefix": "Prefijo", "thSymbol": "Símbolo", "thPower": "Potencia de 10", "thScale": "Nombre de Escala", "thMultiplier": "Valor Multiplicador"
    },
    "chartsPage": {
      "badge": "Referencia Imprimible", "title": "Tablas de Conversión de Nano a Micro",
      "subtitle": "Matrices de consulta rápida para cálculos científicos y de laboratorio de alta frecuencia.",
      "thScientific": "Notación Científica", "openCalc": "Abrir Calculadora Interactiva y Fórmula →"
    },
    "errorPage": {
      "badge": "Error 404", "title": "Coordenada Fuera de Rango",
      "desc": "La ruta de cálculo o documentación a escala nanométrica solicitada no existe o se ha desplazado en el continuo métrico del SI.",
      "returnHome": "Volver a la Página Principal", "converterBtn": "Convertidor Nano a Micro", "physicsBtn": "Portal de Física de Antigravedad"
    }
  },
  "fr": {
    "units": {
      "nano": "nano", "micro": "micro", "pico": "pico",
      "nanometer": "nanomètre", "nanometers": "nanomètres", "micrometer": "micromètre", "micrometers": "micromètres",
      "picometer": "picomètre", "picometers": "picomètres", "millimeter": "millimètre", "millimeters": "millimètres",
      "meter": "mètre", "meters": "mètres", "nanogram": "nanogramme", "nanograms": "nanogrammes",
      "microgram": "microgramme", "micrograms": "microgrammes", "milligram": "milligramme", "milligrams": "milligrammes",
      "gram": "gramme", "grams": "grammes", "kilogram": "kilogramme", "kilograms": "kilogrammes",
      "nanofarad": "nanofarad", "nanofarads": "nanofarads", "microfarad": "microfarad", "microfarads": "microfarads",
      "picofarad": "picofarad", "picofarads": "picofarads", "nanomolar": "nanomolaire", "micromolar": "micromolaire",
      "nanosecond": "nanoseconde", "nanoseconds": "nanosecondes", "microsecond": "microseconde", "microseconds": "microsecondes",
      "second": "seconde", "seconds": "secondes", "newton": "newton", "newtons": "newtons",
      "micronewton": "micronewton", "micronewtons": "micronewtons", "tesla": "tesla", "gauss": "gauss"
    },
    "convertPage": {
      "h1Pattern": "Convertisseur {from} en {to}",
      "introPattern": "Convertissez instantanément {from} ({fromSymbol}) en {to} ({toSymbol}) avec des formules scientifiques exactes, des tableaux de conversion et des explications étape par étape.",
      "formulaHeading": "Formule de Conversion", "formulaDesc": "Pour convertir {from} ({fromSymbol}) en {to} ({toSymbol}), multipliez par {factor} (ou divisez par {divisor}).",
      "shortcutText": "Raccourci : déplacez la virgule de trois rangs.", "quickTableHeading": "Tableau de Référence Rapide", "faqHeading": "Foire Aux Questions",
      "faqQ1": "Combien vaut 1 {from} en {to} ?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ2": "Combien valent 1000 {from} en {to} ?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ3": "Combien valent 2500 {from} en {to} ?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
      "relatedHeading": "Convertisseurs métriques associés"
    },
    "siPrefixPage": {
      "badge": "Référence Métrique", "title": "Guide complet et matrice des 24 préfixes SI",
      "subtitle": "Le Système international d'unités (SI) définit 24 préfixes métriques couvrant 60 ordres de grandeur, de quecto (10⁻³⁰) à quetta (10³⁰).",
      "thPrefix": "Préfixe", "thSymbol": "Symbole", "thPower": "Puissance de 10", "thScale": "Nom de l'échelle", "thMultiplier": "Valeur multiplicatrice"
    },
    "chartsPage": {
      "badge": "Référence Imprimable", "title": "Tableaux de Conversion Nano en Micro",
      "subtitle": "Matrices de consultation rapide pour les calculs scientifiques et de laboratoire à haute fréquence.",
      "thScientific": "Notation Scientifique", "openCalc": "Ouvrir la Calculatrice Interactive & Formule →"
    },
    "errorPage": {
      "badge": "Erreur 404", "title": "Coordonnée hors de portée",
      "desc": "L'itinéraire de calcul ou de documentation à l'échelle nanométrique demandé n'existe pas ou a été déplacé dans le continuum métrique du SI.",
      "returnHome": "Retour à l'Accueil", "converterBtn": "Convertisseur Nano en Micro", "physicsBtn": "Centre de Recherche en Antigravité"
    }
  },
  "pt": {
    "units": {
      "nano": "nano", "micro": "micro", "pico": "pico",
      "nanometer": "nanómetro", "nanometers": "nanómetros", "micrometer": "micrómetro", "micrometers": "micrómetros",
      "picometer": "picómetro", "picometers": "picómetros", "millimeter": "milímetro", "millimeters": "milímetros",
      "meter": "metro", "meters": "metros", "nanogram": "nanograma", "nanograms": "nanogramas",
      "microgram": "micrograma", "micrograms": "microgramas", "milligram": "miligrama", "milligrams": "miligramas",
      "gram": "grama", "grams": "gramas", "kilogram": "quilograma", "kilograms": "quilogramas",
      "nanofarad": "nanofarad", "nanofarads": "nanofarads", "microfarad": "microfarad", "microfarads": "microfarads",
      "picofarad": "picofarad", "picofarads": "picofarads", "nanomolar": "nanomolar", "micromolar": "micromolar",
      "nanosecond": "nanossegundo", "nanoseconds": "nanossegundos", "microsecond": "microssegundo", "microseconds": "microssegundos",
      "second": "segundo", "seconds": "segundos", "newton": "newton", "newtons": "newtons",
      "micronewton": "micronewton", "micronewtons": "micronewtons", "tesla": "tesla", "gauss": "gauss"
    },
    "convertPage": {
      "h1Pattern": "Conversor de {from} para {to}",
      "introPattern": "Converta instantaneamente {from} ({fromSymbol}) para {to} ({toSymbol}) com fórmulas científicas exatas, tabelas de conversão e explicações passo a passo.",
      "formulaHeading": "Fórmula de Conversão", "formulaDesc": "Para converter de {from} ({fromSymbol}) para {to} ({toSymbol}), multiplique por {factor} (ou divida por {divisor}).",
      "shortcutText": "Atalho: desloque a vírgula três casas decimais.", "quickTableHeading": "Tabela de Referência Rápida", "faqHeading": "Perguntas Frequentes",
      "faqQ1": "Quanto é 1 {from} em {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ2": "Quanto são 1000 {from} em {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ3": "Quanto são 2500 {from} em {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
      "relatedHeading": "Conversores Métricos Relacionados"
    },
    "siPrefixPage": {
      "badge": "Referência Métrica", "title": "Guia Completo e Matriz dos 24 Prefixos do SI",
      "subtitle": "O Sistema Internacional de Unidades (SI) define 24 prefixos métricos abrangendo 60 ordens de magnitude, de quecto (10⁻³⁰) a quetta (10³⁰).",
      "thPrefix": "Prefixo", "thSymbol": "Símbolo", "thPower": "Potência de 10", "thScale": "Nome da Escala", "thMultiplier": "Valor Multiplicador"
    },
    "chartsPage": {
      "badge": "Referência Imprimível", "title": "Tabelas de Conversão Nano para Micro",
      "subtitle": "Matrizes de consulta rápida para cálculos científicos e laboratoriais de alta frequência.",
      "thScientific": "Notação Científica", "openCalc": "Abrir Calculadora Interativa e Fórmula →"
    },
    "errorPage": {
      "badge": "Erro 404", "title": "Coordenada Fora do Intervalo",
      "desc": "A rota de cálculo nanométrico ou documentação solicitada não existe ou foi deslocada no contínuo métrico do SI.",
      "returnHome": "Voltar à Página Inicial", "converterBtn": "Conversor Nano para Micro", "physicsBtn": "Centro de Física de Antigravidade"
    }
  },
  "it": {
    "units": {
      "nano": "nano", "micro": "micro", "pico": "pico",
      "nanometer": "nanometro", "nanometers": "nanometri", "micrometer": "micrometro", "micrometers": "micrometri",
      "picometer": "picometro", "picometers": "picometri", "millimeter": "millimetro", "millimeters": "millimetri",
      "meter": "metro", "meters": "metri", "nanogram": "nanogrammo", "nanograms": "nanogrammi",
      "microgram": "microgrammo", "micrograms": "microgrammi", "milligram": "milligrammo", "milligrams": "milligrammi",
      "gram": "grammo", "grams": "grammi", "kilogram": "chilogrammo", "kilograms": "chilogrammi",
      "nanofarad": "nanofarad", "nanofarads": "nanofarad", "microfarad": "microfarad", "microfarads": "microfarad",
      "picofarad": "picofarad", "picofarads": "picofarad", "nanomolar": "nanomolare", "micromolar": "micromolare",
      "nanosecond": "nanosecondo", "nanoseconds": "nanosecondi", "microsecond": "microsecondo", "microseconds": "microsecondi",
      "second": "secondo", "seconds": "secondi", "newton": "newton", "newtons": "newton",
      "micronewton": "micronewton", "micronewtons": "micronewton", "tesla": "tesla", "gauss": "gauss"
    },
    "convertPage": {
      "h1Pattern": "Convertitore da {from} a {to}",
      "introPattern": "Converti all'istante {from} ({fromSymbol}) in {to} ({toSymbol}) con formule scientifiche esatte, tabelle di conversione e spiegazioni dettagliate.",
      "formulaHeading": "Formula di Conversione", "formulaDesc": "Per convertire da {from} ({fromSymbol}) a {to} ({toSymbol}), moltiplica per {factor} (o dividi per {divisor}).",
      "shortcutText": "Scorciatoia: sposta la virgola di tre posizioni.", "quickTableHeading": "Tabella di Riferimento Rapido", "faqHeading": "Domande Frequenti",
      "faqQ1": "Quanto vale 1 {from} in {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ2": "Quanto valgono 1000 {from} in {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ3": "Quanto valgono 2500 {from} in {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
      "relatedHeading": "Convertitori Metrici Correlati"
    },
    "siPrefixPage": {
      "badge": "Riferimento Metrico", "title": "Guida Completa e Matrice dei 24 Prefissi SI",
      "subtitle": "Il Sistema Internazionale di Unità (SI) definisce 24 prefissi metrici su 60 ordini di grandezza, da quecto (10⁻³⁰) a quetta (10³⁰).",
      "thPrefix": "Prefisso", "thSymbol": "Simbolo", "thPower": "Potenza di 10", "thScale": "Nome Scala", "thMultiplier": "Valore Moltiplicatore"
    },
    "chartsPage": {
      "badge": "Riferimento Stampabile", "title": "Tabelle di Conversione da Nano a Micro",
      "subtitle": "Matrici di consultazione rapida per calcoli scientifici e di laboratorio ad alta precisione.",
      "thScientific": "Notazione Scientifica", "openCalc": "Apri Calcolatrice Interattiva e Formula →"
    },
    "errorPage": {
      "badge": "Errore 404", "title": "Coordinata Fuori Portata",
      "desc": "Il percorso di calcolo o documentazione nanometrica richiesto non esiste o è stato spostato nel continuo metrico SI.",
      "returnHome": "Torna alla Homepage", "converterBtn": "Convertitore Nano in Micro", "physicsBtn": "Centro di Fisica Antigravitazionale"
    }
  },
  "ca": {
    "units": {
      "nano": "nano", "micro": "micro", "pico": "pico",
      "nanometer": "nanòmetre", "nanometers": "nanòmetres", "micrometer": "micròmetre", "micrometers": "micròmetres",
      "picometer": "picòmetre", "picometers": "picòmetres", "millimeter": "mil·límetre", "millimeters": "mil·límetres",
      "meter": "metre", "meters": "metres", "nanogram": "nanogram", "nanograms": "nanograms",
      "microgram": "microgram", "micrograms": "micrograms", "milligram": "mil·ligram", "milligrams": "mil·ligrams",
      "gram": "gram", "grams": "grams", "kilogram": "quilogram", "kilograms": "quilograms",
      "nanofarad": "nanofarad", "nanofarads": "nanofarads", "microfarad": "microfarad", "microfarads": "microfarads",
      "picofarad": "picofarad", "picofarads": "picofarads", "nanomolar": "nanomolar", "micromolar": "micromolar",
      "nanosecond": "nanosegon", "nanoseconds": "nanosegons", "microsecond": "microsegon", "microseconds": "microsegons",
      "second": "segon", "seconds": "segons", "newton": "newton", "newtons": "newtons",
      "micronewton": "micronewton", "micronewtons": "micronewtons", "tesla": "tesla", "gauss": "gauss"
    },
    "convertPage": {
      "h1Pattern": "Convertidor de {from} a {to}",
      "introPattern": "Converteix {from} ({fromSymbol}) a {to} ({toSymbol}) a l'instant amb fórmules científiques exactes i taules de conversió.",
      "formulaHeading": "Fórmula de Conversió", "formulaDesc": "Per convertir de {from} ({fromSymbol}) a {to} ({toSymbol}), multiplica per {factor} (o divideix entre {divisor}).",
      "shortcutText": "Drecera: mou la coma decimal tres posicions.", "quickTableHeading": "Taula de Referència Rápida", "faqHeading": "Preguntes Freqüents",
      "faqQ1": "Quant és 1 {from} en {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ2": "Quant són 1000 {from} en {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ3": "Quant són 2500 {from} en {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
      "relatedHeading": "Convertidors Mètrics Relacionats"
    },
    "siPrefixPage": {
      "badge": "Referència Mètrica", "title": "Guia Completa i Matriu dels 24 Prefixos del SI",
      "subtitle": "El Sistema Internacional d'Unitats (SI) defineix 24 prefixos mètrics al llarg de 60 ordres de magnitud, des de quecto (10⁻³⁰) fins a quetta (10³⁰).",
      "thPrefix": "Prefix", "thSymbol": "Símbol", "thPower": "Potència de 10", "thScale": "Nom de l'escala", "thMultiplier": "Valor Multiplicador"
    },
    "chartsPage": {
      "badge": "Referència Imprimible", "title": "Taules de Conversió de Nano a Micro",
      "subtitle": "Matrius de consulta ràpida per a càlculs científics i de laboratori.",
      "thScientific": "Notació Científica", "openCalc": "Obrir Calculadora Interactiva i Fórmula →"
    },
    "errorPage": {
      "badge": "Error 404", "title": "Coordenada Fora de Rang",
      "desc": "La ruta de càlcul sol·licitada no existeix o s'ha desplaçat en el continu mètric.",
      "returnHome": "Tornar a la Pàgina Principal", "converterBtn": "Convertidor Nano a Micro", "physicsBtn": "Portal de Física d'Antigravetat"
    }
  },
  "ro": {
    "units": {
      "nano": "nano", "micro": "micro", "pico": "pico",
      "nanometer": "nanometru", "nanometers": "nanometri", "micrometer": "micrometru", "micrometers": "micrometri",
      "picometer": "picometru", "picometers": "picometri", "millimeter": "milimetru", "millimeters": "milimetri",
      "meter": "metru", "meters": "metri", "nanogram": "nanogram", "nanograms": "nanograme",
      "microgram": "microgram", "micrograms": "micrograme", "milligram": "miligram", "milligrams": "miligrame",
      "gram": "gram", "grams": "grame", "kilogram": "kilogram", "kilograms": "kilograme",
      "nanofarad": "nanofarad", "nanofarads": "nanofarazi", "microfarad": "microfarad", "microfarads": "microfarazi",
      "picofarad": "picofarad", "picofarads": "picofarazi", "nanomolar": "nanomolar", "micromolar": "micromolar",
      "nanosecond": "nanosecundă", "nanoseconds": "nanosecunde", "microsecond": "microsecundă", "microseconds": "microsecunde",
      "second": "secundă", "seconds": "secunde", "newton": "newton", "newtons": "newtoni",
      "micronewton": "micronewton", "micronewtons": "micronewtoni", "tesla": "tesla", "gauss": "gauss"
    },
    "convertPage": {
      "h1Pattern": "Convertor {from} în {to}",
      "introPattern": "Convertește instantaneu {from} ({fromSymbol}) în {to} ({toSymbol}) cu formule științifice exacte și tabele de conversie.",
      "formulaHeading": "Formula de Conversie", "formulaDesc": "Pentru a converti din {from} ({fromSymbol}) în {to} ({toSymbol}), înmulțește cu {factor} (sau împarte la {divisor}).",
      "shortcutText": "Comandă rapidă: mută virgula zecimală cu trei poziții la stânga.", "quickTableHeading": "Tabel de Referință Rapidă", "faqHeading": "Întrebări Frecvente",
      "faqQ1": "Cât este 1 {from} în {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ2": "Cât sunt 1000 {from} în {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ3": "Cât sunt 2500 {from} în {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
      "relatedHeading": "Convertoare Metrice Conexe"
    },
    "siPrefixPage": {
      "badge": "Referință Metrică", "title": "Ghid Complet și Matricea celor 24 de Prefixe SI",
      "subtitle": "Sistemul Internațional de Unități (SI) definește 24 de prefixe metrice pe 60 de ordine de mărime.",
      "thPrefix": "Prefix", "thSymbol": "Simbol", "thPower": "Puterea lui 10", "thScale": "Numele Scării", "thMultiplier": "Valoare Multiplicator"
    },
    "chartsPage": {
      "badge": "Referință Imprimabilă", "title": "Tabele de Conversie Nano în Micro",
      "subtitle": "Matrice de căutare rapidă pentru calcule științifice și de laborator.",
      "thScientific": "Notație Științifică", "openCalc": "Deschide Calculatorul Interactiv & Formula →"
    },
    "errorPage": {
      "badge": "Eroare 404", "title": "Coordonată în Afara Intervalului",
      "desc": "Traseul de calcul sau documentație solicitat nu există sau a fost mutat.",
      "returnHome": "Înapoi la Pagina Principală", "converterBtn": "Convertor Nano în Micro", "physicsBtn": "Centrul de Fizică a Antigravitației"
    }
  }
}

# Duplicate pt to pt-BR with Brazilian variation
LANG_DB["pt-BR"] = {
  "units": dict(LANG_DB["pt"]["units"]),
  "convertPage": {
    **LANG_DB["pt"]["convertPage"],
    "shortcutText": "Atalho: mova a vírgula três casas decimais para a esquerda."
  },
  "siPrefixPage": dict(LANG_DB["pt"]["siPrefixPage"]),
  "chartsPage": dict(LANG_DB["pt"]["chartsPage"]),
  "errorPage": dict(LANG_DB["pt"]["errorPage"])
}

print("Loaded initial groups...")
