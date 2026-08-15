# scripts/dict_data.py
import os
from populate_all_52 import apply_to_file

# Comprehensive translations for ALL 52 languages
DB = {}

# 1. Spanish (es)
DB["es"] = {
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
}

# 2. German (de)
DB["de"] = {
  "units": {
    "nano": "Nano", "micro": "Mikro", "pico": "Piko",
    "nanometer": "Nanometer", "nanometers": "Nanometer", "micrometer": "Mikrometer", "micrometers": "Mikrometer",
    "picometer": "Pikometer", "picometers": "Pikometer", "millimeter": "Millimeter", "millimeters": "Millimeter",
    "meter": "Meter", "meters": "Meter", "nanogram": "Nanogramm", "nanograms": "Nanogramm",
    "microgram": "Mikrogramm", "micrograms": "Mikrogramm", "milligram": "Milligramm", "milligrams": "Milligramm",
    "gram": "Gramm", "grams": "Gramm", "kilogram": "Kilogramm", "kilograms": "Kilogramm",
    "nanofarad": "Nanofarad", "nanofarads": "Nanofarad", "microfarad": "Mikrofarad", "microfarads": "Mikrofarad",
    "picofarad": "Pikofarad", "picofarads": "Pikofarad", "nanomolar": "Nanomolar", "micromolar": "Mikromolar",
    "nanosecond": "Nanosekunde", "nanoseconds": "Nanosekunden", "microsecond": "Mikrosekunde", "microseconds": "Mikrosekunden",
    "second": "Sekunde", "seconds": "Sekunden", "newton": "Newton", "newtons": "Newton",
    "micronewton": "Mikronewton", "micronewtons": "Mikronewton", "tesla": "Tesla", "gauss": "Gauß"
  },
  "convertPage": {
    "h1Pattern": "{from}-zu-{to}-Umrechner",
    "introPattern": "Rechnen Sie {from} ({fromSymbol}) sofort in {to} ({toSymbol}) um mit exakten wissenschaftlichen Formeln, Tabellen und Schritt-für-Schritt-Erklärungen.",
    "formulaHeading": "Umrechnungsformel", "formulaDesc": "Um von {from} ({fromSymbol}) in {to} ({toSymbol}) umzurechnen, multiplizieren Sie mit {factor} (oder dividieren Sie durch {divisor}).",
    "shortcutText": "Abkürzung: Verschieben Sie das Komma um drei Stellen.", "quickTableHeading": "Schnellübersichtstabelle", "faqHeading": "Häufig gestellte Fragen",
    "faqQ1": "Was ist 1 {from} in {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Was sind 1000 {from} in {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Was sind 2500 {from} in {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Verwandte metrische Umrechner"
  },
  "siPrefixPage": {
    "badge": "Metrische Referenz", "title": "Vollständiger Leitfaden und Matrix aller 24 SI-Präfixe",
    "subtitle": "Das Internationale Einheitensystem (SI) definiert 24 metrische Präfixe über 60 Größenordnungen von Quekto (10⁻³⁰) bis Quetta (10³⁰).",
    "thPrefix": "Präfix", "thSymbol": "Symbol", "thPower": "Zehnerpotenz", "thScale": "Skalenbezeichnung", "thMultiplier": "Multiplikatorwert"
  },
  "chartsPage": {
    "badge": "Druckbare Referenz", "title": "Nano-zu-Mikro-Umrechnungstabellen",
    "subtitle": "Schnellnachschlage-Matrizen für hochfrequente wissenschaftliche und Laborberechnungen.",
    "thScientific": "Wissenschaftliche Notation", "openCalc": "Interaktiven Rechner & Formel öffnen →"
  },
  "errorPage": {
    "badge": "404-Fehler", "title": "Koordinate außerhalb des Bereichs",
    "desc": "Die angeforderte nanoskalige Berechnungsroute existiert nicht oder wurde im SI-Metrik-Kontinuum verschoben.",
    "returnHome": "Zur Startseite zurückkehren", "converterBtn": "Nano-zu-Mikro-Umrechner", "physicsBtn": "Antigravitations-Physik-Hub"
  }
}

# 3. French (fr)
DB["fr"] = {
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
}

# 4. Portuguese (pt) & pt-BR
DB["pt"] = {
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
}
DB["pt-BR"] = {
  "units": dict(DB["pt"]["units"]),
  "convertPage": {**DB["pt"]["convertPage"], "shortcutText": "Atalho: mova a vírgula três casas decimais para a esquerda."},
  "siPrefixPage": dict(DB["pt"]["siPrefixPage"]),
  "chartsPage": dict(DB["pt"]["chartsPage"]),
  "errorPage": dict(DB["pt"]["errorPage"])
}

print("Base loaded in dict_data.py")
