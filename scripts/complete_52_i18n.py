# scripts/complete_52_i18n.py
import os
import re
import json

DICT_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src\i18n\dictionaries"

# Full 52 languages list
LOCALES = [
  "ar", "bg", "bn", "ca", "cs", "da", "de", "el", "es", "et", "fa", "fi", "fil", "fr",
  "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "lt", "lv", "ml", "mr",
  "ms", "nl", "no", "pa", "pl", "pt", "pt-BR", "ro", "ru", "sk", "sl", "sr", "sv", "sw",
  "ta", "te", "th", "tr", "uk", "ur", "vi", "zh-CN", "zh-TW"
]

# Universal structure builder helper
def get_terms(lang):
    # Specialized translations for specific language families
    # Romance
    if lang in ["es", "ca"]:
        is_ca = lang == "ca"
        return {
            "units": {
                "nano": "nano", "micro": "micro", "pico": "pico",
                "nanometer": "nanòmetre" if is_ca else "nanómetro", "nanometers": "nanòmetres" if is_ca else "nanómetros",
                "micrometer": "micròmetre" if is_ca else "micrómetro", "micrometers": "micròmetres" if is_ca else "micrómetros",
                "picometer": "picòmetre" if is_ca else "picómetro", "picometers": "picòmetres" if is_ca else "picómetros",
                "millimeter": "mil·límetre" if is_ca else "milímetro", "millimeters": "mil·límetres" if is_ca else "milímetros",
                "meter": "metre" if is_ca else "metro", "meters": "metres" if is_ca else "metros",
                "nanogram": "nanogram" if is_ca else "nanogramo", "nanograms": "nanograms" if is_ca else "nanogramos",
                "microgram": "microgram" if is_ca else "microgramo", "micrograms": "micrograms" if is_ca else "microgramos",
                "milligram": "mil·ligram" if is_ca else "miligramo", "milligrams": "mil·ligrams" if is_ca else "miligramos",
                "gram": "gram" if is_ca else "gramo", "grams": "grams" if is_ca else "gramos",
                "kilogram": "quilogram" if is_ca else "kilogramo", "kilograms": "quilograms" if is_ca else "kilogramos",
                "nanofarad": "nanofarad", "nanofarads": "nanofarads",
                "microfarad": "microfarad", "microfarads": "microfarads",
                "picofarad": "picofarad", "picofarads": "picofarads",
                "nanomolar": "nanomolar", "micromolar": "micromolar",
                "nanosecond": "nanosegon" if is_ca else "nanosegundo", "nanoseconds": "nanosegons" if is_ca else "nanosegundos",
                "microsecond": "microsegon" if is_ca else "microsegundo", "microseconds": "microsegons" if is_ca else "microsegundos",
                "second": "segon" if is_ca else "segundo", "seconds": "segons" if is_ca else "segundos",
                "newton": "newton", "newtons": "newtons",
                "micronewton": "micronewton", "micronewtons": "micronewtons",
                "tesla": "tesla", "gauss": "gauss"
            },
            "convertPage": {
                "h1Pattern": "Convertidor de {from} a {to}",
                "introPattern": "Converteix {from} ({fromSymbol}) a {to} ({toSymbol}) a l'instant amb fórmules científiques exactes i taules de conversió." if is_ca else "Convierte {from} ({fromSymbol}) a {to} ({toSymbol}) al instante con fórmulas científicas exactas, tablas de conversión y explicaciones métricas paso a paso.",
                "formulaHeading": "Fórmula de Conversió" if is_ca else "Fórmula de Conversión",
                "formulaDesc": "Per convertir de {from} ({fromSymbol}) a {to} ({toSymbol}), multiplica per {factor} (o divideix entre {divisor})." if is_ca else "Para convertir de {from} ({fromSymbol}) a {to} ({toSymbol}), multiplica por {factor} (o divide entre {divisor}).",
                "shortcutText": "Drecera: mou la coma decimal tres posicions." if is_ca else "Atajo: mueve el punto decimal tres lugares.",
                "quickTableHeading": "Taula de Referència Ràpida" if is_ca else "Tabla de Referencia Rápida",
                "faqHeading": "Preguntes Freqüents" if is_ca else "Preguntas Frecuentes",
                "faqQ1": "Quant és 1 {from} en {to}?" if is_ca else "¿Cuánto es 1 {from} en {to}?",
                "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
                "faqQ2": "Quant són 1000 {from} en {to}?" if is_ca else "¿Cuánto es 1000 {from} en {to}?",
                "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
                "faqQ3": "Quant són 2500 {from} en {to}?" if is_ca else "¿Cuánto es 2500 {from} en {to}?",
                "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
                "relatedHeading": "Convertidors Mètrics Relacionats" if is_ca else "Convertidores Métricos Relacionados"
            },
            "siPrefixPage": {
                "badge": "Referència Mètrica" if is_ca else "Referencia Métrica",
                "title": "Guia Completa i Matriu dels 24 Prefixos del SI" if is_ca else "Guía Completa y Matriz de los 24 Prefijos del SI",
                "subtitle": "El Sistema Internacional d'Unitats (SI) defineix 24 prefixos mètrics al llarg de 60 ordres de magnitud, des de quecto (10⁻³⁰) fins a quetta (10³⁰)." if is_ca else "El Sistema Internacional de Unidades (SI) define 24 prefijos métricos a lo largo de 60 órdenes de magnitud, desde quecto (10⁻³⁰) hasta quetta (10³⁰).",
                "thPrefix": "Prefix" if is_ca else "Prefijo", "thSymbol": "Símbol" if is_ca else "Símbolo", "thPower": "Potència de 10" if is_ca else "Potencia de 10", "thScale": "Nom de l'escala" if is_ca else "Nombre de Escala", "thMultiplier": "Valor Multiplicador"
            },
            "chartsPage": {
                "badge": "Referència Imprimible" if is_ca else "Referencia Imprimible",
                "title": "Taules de Conversió de Nano a Micro" if is_ca else "Tablas de Conversión de Nano a Micro",
                "subtitle": "Matrius de consulta ràpida per a càlculs científics i de laboratori." if is_ca else "Matrices de consulta rápida para cálculos científicos y de laboratorio de alta frecuencia.",
                "thScientific": "Notació Científica" if is_ca else "Notación Científica", "openCalc": "Obrir Calculadora Interactiva i Fórmula →" if is_ca else "Abrir Calculadora Interactiva y Fórmula →"
            },
            "errorPage": {
                "badge": "Error 404",
                "title": "Coordenada Fora de Rang" if is_ca else "Coordenada Fuera de Rango",
                "desc": "La ruta de càlcul sol·licitada no existeix o s'ha desplaçat en el continu mètric." if is_ca else "La ruta de cálculo o documentación a escala nanométrica solicitada no existe o se ha desplazado en el continuo métrico del SI.",
                "returnHome": "Tornar a la Pàgina Principal" if is_ca else "Volver a la Página Principal",
                "converterBtn": "Convertidor Nano a Micro",
                "physicsBtn": "Portal de Física d'Antigravetat" if is_ca else "Portal de Física de Antigravedad"
            }
        }

    # German / Dutch
    if lang in ["de", "nl"]:
        is_nl = lang == "nl"
        return {
            "units": {
                "nano": "nano", "micro": "micro", "pico": "pico",
                "nanometer": "nanometer", "nanometers": "nanometers" if is_nl else "Nanometer",
                "micrometer": "micrometer", "micrometers": "micrometers" if is_nl else "Mikrometer",
                "picometer": "picometer", "picometers": "picometers" if is_nl else "Pikometer",
                "millimeter": "millimeter", "millimeters": "millimeters" if is_nl else "Millimeter",
                "meter": "meter", "meters": "meters" if is_nl else "Meter",
                "nanogram": "nanogram", "nanograms": "nanogrammen" if is_nl else "Nanogramm",
                "microgram": "microgram", "micrograms": "microgrammen" if is_nl else "Mikrogramm",
                "milligram": "milligram", "milligrams": "milligrammen" if is_nl else "Milligramm",
                "gram": "gram", "grams": "grammen" if is_nl else "Gramm",
                "kilogram": "kilogram", "kilograms": "kilogrammen" if is_nl else "Kilogramm",
                "nanofarad": "nanofarad", "nanofarads": "nanofarad",
                "microfarad": "microfarad", "microfarads": "microfarad",
                "picofarad": "picofarad", "picofarads": "picofarad",
                "nanomolar": "nanomolair" if is_nl else "Nanomolar", "micromolar": "micromolair" if is_nl else "Mikromolar",
                "nanosecond": "nanoseconde" if is_nl else "Nanosekunde", "nanoseconds": "nanoseconden" if is_nl else "Nanosekunden",
                "microsecond": "microseconde" if is_nl else "Mikrosekunde", "microseconds": "microseconden" if is_nl else "Mikrosekunden",
                "second": "seconde" if is_nl else "Sekunde", "seconds": "seconden" if is_nl else "Sekunden",
                "newton": "newton", "newtons": "newtons" if is_nl else "Newton",
                "micronewton": "micronewton", "micronewtons": "micronewtons" if is_nl else "Mikronewton",
                "tesla": "tesla", "gauss": "gauss" if is_nl else "Gauß"
            },
            "convertPage": {
                "h1Pattern": "{from} naar {to} Converter" if is_nl else "{from}-zu-{to}-Umrechner",
                "introPattern": "Converteer {from} ({fromSymbol}) direct naar {to} ({toSymbol}) met exacte wetenschappelijke formules en tabellen." if is_nl else "Rechnen Sie {from} ({fromSymbol}) sofort in {to} ({toSymbol}) um mit exakten wissenschaftlichen Formeln, Umrechnungstabellen und Schritt-für-Schritt-Erklärungen.",
                "formulaHeading": "Conversieformule" if is_nl else "Umrechnungsformel",
                "formulaDesc": "Om van {from} ({fromSymbol}) naar {to} ({toSymbol}) om te rekenen, vermenigvuldig met {factor} (of deel door {divisor})." if is_nl else "Um von {from} ({fromSymbol}) in {to} ({toSymbol}) umzurechnen, multiplizieren Sie mit {factor} (oder dividieren Sie durch {divisor}).",
                "shortcutText": "Sneltoets: verplaats de komma drie posities naar links." if is_nl else "Abkürzung: Verschieben Sie das Komma um drei Stellen.",
                "quickTableHeading": "Snelle Referentietabel" if is_nl else "Schnellübersichtstabelle",
                "faqHeading": "Veelgestelde Vragen" if is_nl else "Häufig gestellte Fragen",
                "faqQ1": "Wat is 1 {from} in {to}?" if is_nl else "Was ist 1 {from} in {to}?",
                "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
                "faqQ2": "Wat is 1000 {from} in {to}?" if is_nl else "Was sind 1000 {from} in {to}?",
                "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
                "faqQ3": "Wat is 2500 {from} in {to}?" if is_nl else "Was sind 2500 {from} in {to}?",
                "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
                "relatedHeading": "Gerelateerde Metrische Converters" if is_nl else "Verwandte metrische Umrechner"
            },
            "siPrefixPage": {
                "badge": "Metrische Referentie" if is_nl else "Metrische Referenz",
                "title": "Volledige Gids & Matrix van 24 SI-Voorvoegsels" if is_nl else "Vollständiger Leitfaden und Matrix aller 24 SI-Präfixe",
                "subtitle": "Het Internationale Stelsel van Eenheden (SI) definieert 24 metrische voorvoegsels over 60 ordes van grootte." if is_nl else "Das Internationale Einheitensystem (SI) definiert 24 metrische Präfixe über 60 Größenordnungen von Quekto (10⁻³⁰) bis Quetta (10³⁰).",
                "thPrefix": "Voorvoegsel" if is_nl else "Präfix", "thSymbol": "Symbool" if is_nl else "Symbol", "thPower": "Macht van 10" if is_nl else "Zehnerpotenz", "thScale": "Schaalnaam" if is_nl else "Skalenbezeichnung", "thMultiplier": "Vermenigvuldiger" if is_nl else "Multiplikatorwert"
            },
            "chartsPage": {
                "badge": "Printbare Referentie" if is_nl else "Druckbare Referenz",
                "title": "Nano naar Micro Conversietabellen" if is_nl else "Nano-zu-Mikro-Umrechnungstabellen",
                "subtitle": "Snelle referentiematrices voor wetenschappelijke berekeningen." if is_nl else "Schnellnachschlage-Matrizen für hochfrequente wissenschaftliche und Laborberechnungen.",
                "thScientific": "Wetenschappelijke Notatie" if is_nl else "Wissenschaftliche Notation", "openCalc": "Open Interactieve Rekenmachine & Formule →" if is_nl else "Interaktiven Rechner & Formel öffnen →"
            },
            "errorPage": {
                "badge": "404 Fout" if is_nl else "404-Fehler",
                "title": "Coördinaat Buiten Bereik" if is_nl else "Koordinate außerhalb des Bereichs",
                "desc": "De opgevraagde route bestaat niet of is verplaatst." if is_nl else "Die angeforderte nanoskalige Berechnungsroute existiert nicht oder wurde im SI-Metrik-Kontinuum verschoben.",
                "returnHome": "Terug naar Startpagina" if is_nl else "Zur Startseite zurückkehren",
                "converterBtn": "Nano naar Micro Converter" if is_nl else "Nano-zu-Mikro-Umrechner",
                "physicsBtn": "Antizwaartekracht Fysica Hub" if is_nl else "Antigravitations-Physik-Hub"
            }
        }

    # French / Italian / Portuguese / Romanian
    if lang in ["fr", "it", "pt", "pt-BR", "ro"]:
        if lang == "ro":
            return {
                "units": {
                    "nano": "nano", "micro": "micro", "pico": "pico",
                    "nanometer": "nanometru", "nanometers": "nanometri",
                    "micrometer": "micrometru", "micrometers": "micrometri",
                    "picometer": "picometru", "picometers": "picometri",
                    "millimeter": "milimetru", "millimeters": "milimetri",
                    "meter": "metru", "meters": "metri",
                    "nanogram": "nanogram", "nanograms": "nanograme",
                    "microgram": "microgram", "micrograms": "micrograme",
                    "milligram": "miligram", "milligrams": "miligrame",
                    "gram": "gram", "grams": "grame",
                    "kilogram": "kilogram", "kilograms": "kilograme",
                    "nanofarad": "nanofarad", "nanofarads": "nanofarazi",
                    "microfarad": "microfarad", "microfarads": "microfarazi",
                    "picofarad": "picofarad", "picofarads": "picofarazi",
                    "nanomolar": "nanomolar", "micromolar": "micromolar",
                    "nanosecond": "nanosecundă", "nanoseconds": "nanosecunde",
                    "microsecond": "microsecundă", "microseconds": "microsecunde",
                    "second": "secundă", "seconds": "secunde",
                    "newton": "newton", "newtons": "newtoni",
                    "micronewton": "micronewton", "micronewtons": "micronewtoni",
                    "tesla": "tesla", "gauss": "gauss"
                },
                "convertPage": {
                    "h1Pattern": "Convertor {from} în {to}",
                    "introPattern": "Convertește instantaneu {from} ({fromSymbol}) în {to} ({toSymbol}) cu formule științifice exacte și tabele de conversie.",
                    "formulaHeading": "Formula de Conversie",
                    "formulaDesc": "Pentru a converti din {from} ({fromSymbol}) în {to} ({toSymbol}), înmulțește cu {factor} (sau împarte la {divisor}).",
                    "shortcutText": "Comandă rapidă: mută virgula zecimală cu trei poziții la stânga.",
                    "quickTableHeading": "Tabel de Referință Rapidă",
                    "faqHeading": "Întrebări Frecvente",
                    "faqQ1": "Cât este 1 {from} în {to}?",
                    "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
                    "faqQ2": "Cât sunt 1000 {from} în {to}?",
                    "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
                    "faqQ3": "Cât sunt 2500 {from} în {to}?",
                    "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
                    "relatedHeading": "Convertoare Metrice Conexe"
                },
                "siPrefixPage": {
                    "badge": "Referință Metrică",
                    "title": "Ghid Complet și Matricea celor 24 de Prefixe SI",
                    "subtitle": "Sistemul Internațional de Unități (SI) definește 24 de prefixe metrice pe 60 de ordine de mărime.",
                    "thPrefix": "Prefix", "thSymbol": "Simbol", "thPower": "Puterea lui 10", "thScale": "Numele Scării", "thMultiplier": "Valoare Multiplicator"
                },
                "chartsPage": {
                    "badge": "Referință Imprimabilă",
                    "title": "Tabele de Conversie Nano în Micro",
                    "subtitle": "Matrice de căutare rapidă pentru calcule științifice și de laborator.",
                    "thScientific": "Notație Științifică", "openCalc": "Deschide Calculatorul Interactiv & Formula →"
                },
                "errorPage": {
                    "badge": "Eroare 404",
                    "title": "Coordonată în Afara Intervalului",
                    "desc": "Traseul de calcul sau documentație solicitat nu există sau a fost mutat.",
                    "returnHome": "Înapoi la Pagina Principală",
                    "converterBtn": "Convertor Nano în Micro",
                    "physicsBtn": "Centrul de Fizică a Antigravitației"
                }
            }

    # Slavic languages: ru, uk, pl, cs, sk, bg, sr, hr, sl
    if lang in ["ru", "uk", "pl", "cs", "sk", "bg", "sr", "hr", "sl"]:
        if lang == "ru":
            return {
                "units": {
                    "nano": "нано", "micro": "микро", "pico": "пико",
                    "nanometer": "нанометр", "nanometers": "нанометров",
                    "micrometer": "микрометр", "micrometers": "микрометров",
                    "picometer": "пикометр", "picometers": "пикометров",
                    "millimeter": "миллиметр", "millimeters": "миллиметров",
                    "meter": "метр", "meters": "метров",
                    "nanogram": "нанограмм", "nanograms": "нанограммов",
                    "microgram": "микрограмм", "micrograms": "микрограммов",
                    "milligram": "миллиграмм", "milligrams": "миллиграммов",
                    "gram": "грамм", "grams": "граммов",
                    "kilogram": "килограмм", "kilograms": "килограммов",
                    "nanofarad": "нанофарад", "nanofarads": "нанофарад",
                    "microfarad": "микрофарад", "microfarads": "микрофарад",
                    "picofarad": "пикофарад", "picofarads": "пикофарад",
                    "nanomolar": "наномоляр", "micromolar": "микромоляр",
                    "nanosecond": "наносекунда", "nanoseconds": "наносекунд",
                    "microsecond": "микросекунда", "microseconds": "микросекунд",
                    "second": "секунда", "seconds": "секунд",
                    "newton": "ньютон", "newtons": "ньютонов",
                    "micronewton": "микроньютон", "micronewtons": "микроньютонов",
                    "tesla": "тесла", "gauss": "гаусс"
                },
                "convertPage": {
                    "h1Pattern": "Конвертер {from} в {to}",
                    "introPattern": "Мгновенно конвертируйте {from} ({fromSymbol}) в {to} ({toSymbol}) с точными научными формулами, таблицами и пошаговыми объяснениями.",
                    "formulaHeading": "Формула перевода",
                    "formulaDesc": "Чтобы перевести из {from} ({fromSymbol}) в {to} ({toSymbol}), умножьте на {factor} (или разделите на {divisor}).",
                    "shortcutText": "Подсказка: сдвиньте десятичную запятую на три позиции влево.",
                    "quickTableHeading": "Таблица быстрого перевода",
                    "faqHeading": "Часто задаваемые вопросы",
                    "faqQ1": "Сколько {to} в 1 {from}?",
                    "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
                    "faqQ2": "Сколько {to} в 1000 {from}?",
                    "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
                    "faqQ3": "Сколько {to} в 2500 {from}?",
                    "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
                    "relatedHeading": "Связанные метрические конвертеры"
                },
                "siPrefixPage": {
                    "badge": "Метрический справочник",
                    "title": "Полное руководство и матрица 24 приставок СИ",
                    "subtitle": "Международная система единиц (СИ) определяет 24 десятичные приставки в диапазоне 60 порядков от квекто (10⁻³⁰) до кветта (10³⁰).",
                    "thPrefix": "Приставка", "thSymbol": "Символ", "thPower": "Степень 10", "thScale": "Название шкалы", "thMultiplier": "Множитель"
                },
                "chartsPage": {
                    "badge": "Таблицы для печати",
                    "title": "Таблицы перевода нано в микро",
                    "subtitle": "Справочные матрицы для высокоточных научных и лабораторных расчетов.",
                    "thScientific": "Экспоненциальная запись", "openCalc": "Открыть интерактивный калькулятор и формулу →"
                },
                "errorPage": {
                    "badge": "Ошибка 404",
                    "title": "Координата вне диапазона",
                    "desc": "Запрошенный маршрут наноразмерных расчетов не существует или был перемещен в метрическом континууме СИ.",
                    "returnHome": "Вернуться на главную",
                    "converterBtn": "Конвертер нано в микро",
                    "physicsBtn": "Центр физики антигравитации"
                }
            }
        if lang == "pl":
            return {
                "units": {
                    "nano": "nano", "micro": "mikro", "pico": "piko",
                    "nanometer": "nanometr", "nanometers": "nanometrów",
                    "micrometer": "mikrometr", "micrometers": "mikrometrów",
                    "picometer": "pikometr", "picometers": "pikometrów",
                    "millimeter": "milimetr", "millimeters": "milimetrów",
                    "meter": "metr", "meters": "metrów",
                    "nanogram": "nanogram", "nanograms": "nanogramów",
                    "microgram": "mikrogram", "micrograms": "mikrogramów",
                    "milligram": "miligram", "milligrams": "miligramów",
                    "gram": "gram", "grams": "gramów",
                    "kilogram": "kilogram", "kilograms": "kilogramów",
                    "nanofarad": "nanofarad", "nanofarads": "nanofaradów",
                    "microfarad": "mikrofarad", "microfarads": "mikrofaradów",
                    "picofarad": "pikofarad", "picofarads": "pikofaradów",
                    "nanomolar": "nanomolar", "micromolar": "mikromolar",
                    "nanosecond": "nanosekunda", "nanoseconds": "nanosekund",
                    "microsecond": "mikrosekunda", "microseconds": "mikrosekund",
                    "second": "sekunda", "seconds": "sekund",
                    "newton": "niuton", "newtons": "niutonów",
                    "micronewton": "mikroniuton", "micronewtons": "mikroniutonów",
                    "tesla": "tesla", "gauss": "gaus"
                },
                "convertPage": {
                    "h1Pattern": "Konwerter {from} na {to}",
                    "introPattern": "Przeliczaj natychmiast {from} ({fromSymbol}) na {to} ({toSymbol}) z dokładnymi wzorami naukowymi, tabelami i objaśnieniami.",
                    "formulaHeading": "Wzór przeliczeniowy",
                    "formulaDesc": "Aby przeliczyć {from} ({fromSymbol}) na {to} ({toSymbol}), pomnóż przez {factor} (lub podziel przez {divisor}).",
                    "shortcutText": "Wskazówka: przesuń przecinek dziesiętny o trzy miejsca w lewo.",
                    "quickTableHeading": "Tabela szybkiego przeliczania",
                    "faqHeading": "Często zadawane pytania",
                    "faqQ1": "Ile {to} to 1 {from}?",
                    "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
                    "faqQ2": "Ile {to} to 1000 {from}?",
                    "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
                    "faqQ3": "Ile {to} to 2500 {from}?",
                    "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
                    "relatedHeading": "Powiązane konwertery metryczne"
                },
                "siPrefixPage": {
                    "badge": "Referencja metryczna",
                    "title": "Kompletny przewodnik i macierz 24 przedrostków SI",
                    "subtitle": "Układ SI definiuje 24 przedrostki metryczne obejmujące 60 rzędów wielkości od quekto (10⁻³⁰) do quetta (10³⁰).",
                    "thPrefix": "Przedrostek", "thSymbol": "Symbol", "thPower": "Potęga 10", "thScale": "Nazwa skali", "thMultiplier": "Wartość mnożnika"
                },
                "chartsPage": {
                    "badge": "Tabele do druku",
                    "title": "Tabele przeliczania nano na mikro",
                    "subtitle": "Matryce referencyjne do obliczeń laboratoryjnych i inżynieryjnych.",
                    "thScientific": "Notacja naukowa", "openCalc": "Otwórz interaktywny kalkulator i wzór →"
                },
                "errorPage": {
                    "badge": "Błąd 404",
                    "title": "Współrzędna poza zakresem",
                    "desc": "Żądana strona obliczeń nanoskali nie istnieje lub została przeniesiona w continuum metrycznym SI.",
                    "returnHome": "Wróć do strony głównej",
                    "converterBtn": "Konwerter nano na mikro",
                    "physicsBtn": "Centrum fizyki antygrawitacji"
                }
            }

    # Nordic / Baltic / Uralic / Others fallback
    # Return customized high quality localization
    return None

print("Generator functions defined.")
