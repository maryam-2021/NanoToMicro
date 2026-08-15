# scripts/data_western.py

WESTERN_DATA = {}

# Spanish (es)
WESTERN_DATA["es"] = {
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

# French (fr)
WESTERN_DATA["fr"] = {
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

# German (de)
WESTERN_DATA["de"] = {
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

# Portuguese (pt) & pt-BR
WESTERN_DATA["pt"] = {
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
WESTERN_DATA["pt-BR"] = {
  "units": dict(WESTERN_DATA["pt"]["units"]),
  "convertPage": {**WESTERN_DATA["pt"]["convertPage"], "shortcutText": "Atalho: mova a vírgula três casas decimais para a esquerda."},
  "siPrefixPage": dict(WESTERN_DATA["pt"]["siPrefixPage"]),
  "chartsPage": dict(WESTERN_DATA["pt"]["chartsPage"]),
  "errorPage": dict(WESTERN_DATA["pt"]["errorPage"])
}

# Italian (it)
WESTERN_DATA["it"] = {
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
}

# Dutch (nl)
WESTERN_DATA["nl"] = {
  "units": {
    "nano": "nano", "micro": "micro", "pico": "pico",
    "nanometer": "nanometer", "nanometers": "nanometers", "micrometer": "micrometer", "micrometers": "micrometers",
    "picometer": "picometer", "picometers": "picometers", "millimeter": "millimeter", "millimeters": "millimeters",
    "meter": "meter", "meters": "meters", "nanogram": "nanogram", "nanograms": "nanogrammen",
    "microgram": "microgram", "micrograms": "microgrammen", "milligram": "milligram", "milligrams": "milligrammen",
    "gram": "gram", "grams": "grammen", "kilogram": "kilogram", "kilograms": "kilogrammen",
    "nanofarad": "nanofarad", "nanofarads": "nanofarad", "microfarad": "microfarad", "microfarads": "microfarad",
    "picofarad": "picofarad", "picofarads": "picofarad", "nanomolar": "nanomolair", "micromolar": "micromolair",
    "nanosecond": "nanoseconde", "nanoseconds": "nanoseconden", "microsecond": "microseconde", "microseconds": "microseconden",
    "second": "seconde", "seconds": "seconden", "newton": "newton", "newtons": "newtons",
    "micronewton": "micronewton", "micronewtons": "micronewtons", "tesla": "tesla", "gauss": "gauss"
  },
  "convertPage": {
    "h1Pattern": "{from} naar {to} Converter",
    "introPattern": "Converteer {from} ({fromSymbol}) direct naar {to} ({toSymbol}) met exacte wetenschappelijke formules en tabellen.",
    "formulaHeading": "Conversieformule", "formulaDesc": "Om van {from} ({fromSymbol}) naar {to} ({toSymbol}) om te rekenen, vermenigvuldig met {factor} (of deel door {divisor}).",
    "shortcutText": "Sneltoets: verplaats de komma drie posities naar links.", "quickTableHeading": "Snelle Referentietabel", "faqHeading": "Veelgestelde Vragen",
    "faqQ1": "Wat is 1 {from} in {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Wat is 1000 {from} in {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Wat is 2500 {from} in {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Gerelateerde Metrische Converters"
  },
  "siPrefixPage": {
    "badge": "Metrische Referentie", "title": "Volledige Gids & Matrix van 24 SI-Voorvoegsels",
    "subtitle": "Het Internationale Stelsel van Eenheden (SI) definieert 24 metrische voorvoegsels over 60 ordes van grootte.",
    "thPrefix": "Voorvoegsel", "thSymbol": "Symbool", "thPower": "Macht van 10", "thScale": "Schaalnaam", "thMultiplier": "Vermenigvuldiger"
  },
  "chartsPage": {
    "badge": "Printbare Referentie", "title": "Nano naar Micro Conversietabellen",
    "subtitle": "Snelle referentiematrices voor wetenschappelijke berekeningen.",
    "thScientific": "Wetenschappelijke Notatie", "openCalc": "Open Interactieve Rekenmachine & Formule →"
  },
  "errorPage": {
    "badge": "404 Fout", "title": "Coördinaat Buiten Bereik",
    "desc": "De opgevraagde route bestaat niet of is verplaatst.",
    "returnHome": "Terug naar Startpagina", "converterBtn": "Nano naar Micro Converter", "physicsBtn": "Antizwaartekracht Fysica Hub"
  }
}

# Swedish (sv)
WESTERN_DATA["sv"] = {
  "units": {
    "nano": "nano", "micro": "mikro", "pico": "piko",
    "nanometer": "nanometer", "nanometers": "nanometer", "micrometer": "mikrometer", "micrometers": "mikrometer",
    "picometer": "pikometer", "picometers": "pikometer", "millimeter": "millimeter", "millimeters": "millimeter",
    "meter": "meter", "meters": "meter", "nanogram": "nanogram", "nanograms": "nanogram",
    "microgram": "mikrogram", "micrograms": "mikrogram", "milligram": "milligram", "milligrams": "milligram",
    "gram": "gram", "grams": "gram", "kilogram": "kilogram", "kilograms": "kilogram",
    "nanofarad": "nanofarad", "nanofarads": "nanofarad", "microfarad": "mikrofarad", "microfarads": "mikrofarad",
    "picofarad": "pikofarad", "picofarads": "pikofarad", "nanomolar": "nanomolar", "micromolar": "mikromolar",
    "nanosecond": "nanosekund", "nanoseconds": "nanosekunder", "microsecond": "mikrosekund", "microseconds": "mikrosekunder",
    "second": "sekund", "seconds": "sekunder", "newton": "newton", "newtons": "newton",
    "micronewton": "mikronewton", "micronewtons": "mikronewton", "tesla": "tesla", "gauss": "gauss"
  },
  "convertPage": {
    "h1Pattern": "Omvandlare från {from} till {to}",
    "introPattern": "Omvandla {from} ({fromSymbol}) till {to} ({toSymbol}) direkt med exakta vetenskapliga formler och tabeller.",
    "formulaHeading": "Omvandlingsformel", "formulaDesc": "För att omvandla från {from} ({fromSymbol}) till {to} ({toSymbol}), multiplicera med {factor} (eller dividera med {divisor}).",
    "shortcutText": "Genväg: flytta kommatecknet tre steg åt vänster.", "quickTableHeading": "Snabbreferenstabell", "faqHeading": "Vanliga frågor",
    "faqQ1": "Hur mycket är 1 {from} i {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Hur mycket är 1000 {from} i {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Hur mycket är 2500 {from} i {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Relaterade metriska omvandlare"
  },
  "siPrefixPage": {
    "badge": "Metrisk referens", "title": "Komplett guide och matris över alla 24 SI-prefix",
    "subtitle": "Det internationella måttenhetssystemet (SI) definierar 24 metriska prefix över 60 storleksordningar.",
    "thPrefix": "Prefix", "thSymbol": "Symbol", "thPower": "Tiopotens", "thScale": "Skalnamn", "thMultiplier": "Multiplikator"
  },
  "chartsPage": {
    "badge": "Utskriftsbar referens", "title": "Omvandlingstabeller från nano till mikro",
    "subtitle": "Snabbreferensmatriser för vetenskapliga beräkningar.",
    "thScientific": "Grundpotensform", "openCalc": "Öppna interaktiv kalkylator & formel →"
  },
  "errorPage": {
    "badge": "404-fel", "title": "Koordinat utanför intervallet",
    "desc": "Den begärda sidan finns inte eller har flyttats.",
    "returnHome": "Tillbaka till startsidan", "converterBtn": "Nano till mikro omvandlare", "physicsBtn": "Centrum för antigravitationsfysik"
  }
}

# Norwegian (no)
WESTERN_DATA["no"] = {
  "units": {
    "nano": "nano", "micro": "mikro", "pico": "piko",
    "nanometer": "nanometer", "nanometers": "nanometer", "micrometer": "mikrometer", "micrometers": "mikrometer",
    "picometer": "pikometer", "picometers": "pikometer", "millimeter": "millimeter", "millimeters": "millimeter",
    "meter": "meter", "meters": "meter", "nanogram": "nanogram", "nanograms": "nanogram",
    "microgram": "mikrogram", "micrograms": "mikrogram", "milligram": "milligram", "milligrams": "milligram",
    "gram": "gram", "grams": "gram", "kilogram": "kilogram", "kilograms": "kilogram",
    "nanofarad": "nanofarad", "nanofarads": "nanofarad", "microfarad": "mikrofarad", "microfarads": "mikrofarad",
    "picofarad": "pikofarad", "picofarads": "pikofarad", "nanomolar": "nanomolar", "micromolar": "mikromolar",
    "nanosecond": "nanosekund", "nanoseconds": "nanosekunder", "microsecond": "mikrosekund", "microseconds": "mikrosekunder",
    "second": "sekund", "seconds": "sekunder", "newton": "newton", "newtons": "newton",
    "micronewton": "mikronewton", "micronewtons": "mikronewton", "tesla": "tesla", "gauss": "gauss"
  },
  "convertPage": {
    "h1Pattern": "Konverter fra {from} til {to}",
    "introPattern": "Konverter {from} ({fromSymbol}) til {to} ({toSymbol}) umiddelbart med nøyaktige formler og tabeller.",
    "formulaHeading": "Konverteringsformel", "formulaDesc": "For å konvertere fra {from} ({fromSymbol}) til {to} ({toSymbol}), multipliser med {factor} (eller del på {divisor}).",
    "shortcutText": "Snarvei: flytt desimalkommaet tre plasser til venstre.", "quickTableHeading": "Hurtigreferansetabell", "faqHeading": "Ofte stilte spørsmål",
    "faqQ1": "Hvor mye er 1 {from} i {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Hvor mye er 1000 {from} i {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Hvor mye er 2500 {from} i {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Relaterte metriske konvertere"
  },
  "siPrefixPage": {
    "badge": "Metrisk referanse", "title": "Komplett guide og matrise over 24 SI-prefikser",
    "subtitle": "Det internasjonale enhetssystemet (SI) definerer 24 prefikser over 60 størrelsesordener.",
    "thPrefix": "Prefiks", "thSymbol": "Symbol", "thPower": "Tierpotens", "thScale": "Skalanavn", "thMultiplier": "Multiplikator"
  },
  "chartsPage": {
    "badge": "Utskriftsvennlig referanse", "title": "Nano til mikro konverteringstabeller",
    "subtitle": "Hurtigoppslagsmatriser for vitenskapelige beregninger.",
    "thScientific": "Vitenskapelig notasjon", "openCalc": "Åpne interaktiv kalkulator og formel →"
  },
  "errorPage": {
    "badge": "404-feil", "title": "Koordinat utenfor rekkevidde",
    "desc": "Siden du ba om finnes ikke eller har blitt flyttet.",
    "returnHome": "Tilbake til forsiden", "converterBtn": "Nano til mikro kalkulator", "physicsBtn": "Hub for antigravitasjonsfysikk"
  }
}

# Danish (da)
WESTERN_DATA["da"] = {
  "units": {
    "nano": "nano", "micro": "mikro", "pico": "piko",
    "nanometer": "nanometer", "nanometers": "nanometer", "micrometer": "mikrometer", "micrometers": "mikrometer",
    "picometer": "pikometer", "picometers": "pikometer", "millimeter": "millimeter", "millimeters": "millimeter",
    "meter": "meter", "meters": "meter", "nanogram": "nanogram", "nanograms": "nanogram",
    "microgram": "mikrogram", "micrograms": "mikrogram", "milligram": "milligram", "milligrams": "milligram",
    "gram": "gram", "grams": "gram", "kilogram": "kilogram", "kilograms": "kilogram",
    "nanofarad": "nanofarad", "nanofarads": "nanofarad", "microfarad": "mikrofarad", "microfarads": "mikrofarad",
    "picofarad": "pikofarad", "picofarads": "pikofarad", "nanomolar": "nanomolær", "micromolar": "mikromolær",
    "nanosecond": "nanosekund", "nanoseconds": "nanosekunder", "microsecond": "mikrosekund", "microseconds": "mikrosekunder",
    "second": "sekund", "seconds": "sekunder", "newton": "newton", "newtons": "newton",
    "micronewton": "mikronewton", "micronewtons": "mikronewton", "tesla": "tesla", "gauss": "gauss"
  },
  "convertPage": {
    "h1Pattern": "Omregner fra {from} til {to}",
    "introPattern": "Omregn {from} ({fromSymbol}) til {to} ({toSymbol}) øjeblikkeligt med nøjagtige formler og tabeller.",
    "formulaHeading": "Omregningsformel", "formulaDesc": "For at omregne fra {from} ({fromSymbol}) til {to} ({toSymbol}), gang med {factor} (eller divider med {divisor}).",
    "shortcutText": "Genvej: flyt kommaet tre pladser til venstre.", "quickTableHeading": "Hurtig referencetabel", "faqHeading": "Ofte stillede spørgsmål",
    "faqQ1": "Hvor meget er 1 {from} i {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Hvor meget er 1000 {from} i {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Hvor meget er 2500 {from} i {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Relaterede metriske omregnere"
  },
  "siPrefixPage": {
    "badge": "Metrisk reference", "title": "Komplet vejledning og matrix over 24 SI-præfikser",
    "subtitle": "Det internationale enhedssystem (SI) definerer 24 metriske præfikser over 60 størrelsesordener.",
    "thPrefix": "Præfiks", "thSymbol": "Symbol", "thPower": "Tierpotens", "thScale": "Skalanavn", "thMultiplier": "Multiplikator"
  },
  "chartsPage": {
    "badge": "Udskriftsvenlig reference", "title": "Omregningstabeller fra nano til mikro",
    "subtitle": "Hurtige opslagsmatricer til videnskabelige beregninger.",
    "thScientific": "Videnskabelig notation", "openCalc": "Åbn interaktiv beregner og formel →"
  },
  "errorPage": {
    "badge": "404-fejl", "title": "Koordinat uden for rækkevidde",
    "desc": "Den ønskede side findes ikke eller er blevet flyttet.",
    "returnHome": "Tilbage til forsiden", "converterBtn": "Nano til mikro omregner", "physicsBtn": "Hub for antigravitationsfysik"
  }
}

# Catalan (ca) & Romanian (ro)
# (Added in earlier block)

print("Western data loaded.")
