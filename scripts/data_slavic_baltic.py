# scripts/data_slavic_baltic.py

SLAVIC_BALTIC_DATA = {}

# Russian (ru)
SLAVIC_BALTIC_DATA["ru"] = {
  "units": {
    "nano": "нано", "micro": "микро", "pico": "пико",
    "nanometer": "нанометр", "nanometers": "нанометров", "micrometer": "микрометр", "micrometers": "микрометров",
    "picometer": "пикометр", "picometers": "пикометров", "millimeter": "миллиметр", "millimeters": "миллиметров",
    "meter": "метр", "meters": "метров", "nanogram": "нанограмм", "nanograms": "нанограммов",
    "microgram": "микрограмм", "micrograms": "микрограммов", "milligram": "миллиграмм", "milligrams": "миллиграммов",
    "gram": "грамм", "grams": "граммов", "kilogram": "килограмм", "kilograms": "килограммов",
    "nanofarad": "нанофарад", "nanofarads": "нанофарад", "microfarad": "микрофарад", "microfarads": "микрофарад",
    "picofarad": "пикофарад", "picofarads": "пикофарад", "nanomolar": "наномоляр", "micromolar": "микромоляр",
    "nanosecond": "наносекунда", "nanoseconds": "наносекунд", "microsecond": "микросекунда", "microseconds": "микросекунд",
    "second": "секунда", "seconds": "секунд", "newton": "ньютон", "newtons": "ньютонов",
    "micronewton": "микроньютон", "micronewtons": "микроньютонов", "tesla": "тесла", "gauss": "гаусс"
  },
  "convertPage": {
    "h1Pattern": "Конвертер {from} в {to}",
    "introPattern": "Мгновенно конвертируйте {from} ({fromSymbol}) в {to} ({toSymbol}) с точными научными формулами, таблицами и пошаговыми объяснениями.",
    "formulaHeading": "Формула перевода", "formulaDesc": "Чтобы перевести из {from} ({fromSymbol}) в {to} ({toSymbol}), умножьте на {factor} (или разделите на {divisor}).",
    "shortcutText": "Подсказка: сдвиньте десятичную запятую на три позиции влево.", "quickTableHeading": "Таблица быстрого перевода", "faqHeading": "Часто задаваемые вопросы",
    "faqQ1": "Сколько {to} в 1 {from}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Сколько {to} в 1000 {from}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Сколько {to} в 2500 {from}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Связанные метрические конвертеры"
  },
  "siPrefixPage": {
    "badge": "Метрический справочник", "title": "Полное руководство и матрица 24 приставок СИ",
    "subtitle": "Международная система единиц (СИ) определяет 24 десятичные приставки в диапазоне 60 порядков от квекто (10⁻³⁰) до кветта (10³⁰).",
    "thPrefix": "Приставка", "thSymbol": "Символ", "thPower": "Степень 10", "thScale": "Название шкалы", "thMultiplier": "Множитель"
  },
  "chartsPage": {
    "badge": "Таблицы для печати", "title": "Таблицы перевода нано в микро",
    "subtitle": "Справочные матрицы для высокоточных научных и лабораторных расчетов.",
    "thScientific": "Экспоненциальная запись", "openCalc": "Открыть интерактивный калькулятор и формулу →"
  },
  "errorPage": {
    "badge": "Ошибка 404", "title": "Координата вне диапазона",
    "desc": "Запрошенный маршрут наноразмерных расчетов не существует или был перемещен в метрическом континууме СИ.",
    "returnHome": "Вернуться на главную", "converterBtn": "Конвертер нано в микро", "physicsBtn": "Центр физики антигравитации"
  }
}

# Ukrainian (uk)
SLAVIC_BALTIC_DATA["uk"] = {
  "units": {
    "nano": "нано", "micro": "мікро", "pico": "піко",
    "nanometer": "нанометр", "nanometers": "нанометрів", "micrometer": "мікрометр", "micrometers": "мікрометрів",
    "picometer": "пікометр", "picometers": "пікометрів", "millimeter": "міліметр", "millimeters": "міліметрів",
    "meter": "метр", "meters": "метрів", "nanogram": "нанограм", "nanograms": "нанограмів",
    "microgram": "мікрограм", "micrograms": "мікрограмів", "milligram": "міліграм", "milligrams": "міліграмів",
    "gram": "грам", "grams": "грамів", "kilogram": "кілограм", "kilograms": "кілограмів",
    "nanofarad": "нанофарад", "nanofarads": "нанофарад", "microfarad": "мікрофарад", "microfarads": "мікрофарад",
    "picofarad": "пікофарад", "picofarads": "пікофарад", "nanomolar": "наномоляр", "micromolar": "мікромоляр",
    "nanosecond": "наносекунда", "nanoseconds": "наносекунд", "microsecond": "мікросекунда", "microseconds": "мікросекунд",
    "second": "секунда", "seconds": "секунд", "newton": "ньютон", "newtons": "ньютонів",
    "micronewton": "мікроньютон", "micronewtons": "мікроньютонів", "tesla": "тесла", "gauss": "гаус"
  },
  "convertPage": {
    "h1Pattern": "Конвертер {from} в {to}",
    "introPattern": "Миттєво конвертуйте {from} ({fromSymbol}) у {to} ({toSymbol}) за точними науковими формулами та таблицями.",
    "formulaHeading": "Формула переведення", "formulaDesc": "Щоб перевести з {from} ({fromSymbol}) у {to} ({toSymbol}), помножте на {factor} (або розділіть на {divisor}).",
    "shortcutText": "Підказка: посуньте десяткову кому на три позиції ліворуч.", "quickTableHeading": "Таблиця швидкого переведення", "faqHeading": "Часті запитання",
    "faqQ1": "Скільки {to} в 1 {from}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Скільки {to} в 1000 {from}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Скільки {to} в 2500 {from}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Пов'язані метричні конвертери"
  },
  "siPrefixPage": {
    "badge": "Метричний довідник", "title": "Повний посібник і матриця 24 префіксів SI",
    "subtitle": "Міжнародна система одиниць (SI) визначає 24 префікси в діапазоні 60 порядків від квекто (10⁻³⁰) до кветта (10³⁰).",
    "thPrefix": "Префікс", "thSymbol": "Символ", "thPower": "Степінь 10", "thScale": "Назва шкали", "thMultiplier": "Множник"
  },
  "chartsPage": {
    "badge": "Таблиці для друку", "title": "Таблиці переведення нано в мікро",
    "subtitle": "Довідкові матриці для високоточних наукових та інженерних розрахунків.",
    "thScientific": "Експоненційний запис", "openCalc": "Відкрити інтерактивний калькулятор і формулу →"
  },
  "errorPage": {
    "badge": "Помилка 404", "title": "Координата поза межами",
    "desc": "Запитана сторінка наномасштабних розрахунків не існує або була переміщена.",
    "returnHome": "Повернутися на головну", "converterBtn": "Конвертер нано в мікро", "physicsBtn": "Центр фізики антигравітації"
  }
}

# Polish (pl)
SLAVIC_BALTIC_DATA["pl"] = {
  "units": {
    "nano": "nano", "micro": "mikro", "pico": "piko",
    "nanometer": "nanometr", "nanometers": "nanometrów", "micrometer": "mikrometr", "micrometers": "mikrometrów",
    "picometer": "pikometr", "picometers": "pikometrów", "millimeter": "milimetr", "millimeters": "milimetrów",
    "meter": "metr", "meters": "metrów", "nanogram": "nanogram", "nanograms": "nanogramów",
    "microgram": "mikrogram", "micrograms": "mikrogramów", "milligram": "miligram", "milligrams": "miligramów",
    "gram": "gram", "grams": "gramów", "kilogram": "kilogram", "kilograms": "kilogramów",
    "nanofarad": "nanofarad", "nanofarads": "nanofaradów", "microfarad": "mikrofarad", "microfarads": "mikrofaradów",
    "picofarad": "pikofarad", "picofarads": "pikofaradów", "nanomolar": "nanomolar", "micromolar": "mikromolar",
    "nanosecond": "nanosekunda", "nanoseconds": "nanosekund", "microsecond": "mikrosekunda", "microseconds": "mikrosekund",
    "second": "sekunda", "seconds": "sekund", "newton": "niuton", "newtons": "niutonów",
    "micronewton": "mikroniuton", "micronewtons": "mikroniutonów", "tesla": "tesla", "gauss": "gaus"
  },
  "convertPage": {
    "h1Pattern": "Konwerter {from} na {to}",
    "introPattern": "Przeliczaj natychmiast {from} ({fromSymbol}) na {to} ({toSymbol}) z dokładnymi wzorami naukowymi, tabelami i objaśnieniami.",
    "formulaHeading": "Wzór przeliczeniowy", "formulaDesc": "Aby przeliczyć {from} ({fromSymbol}) na {to} ({toSymbol}), pomnóż przez {factor} (lub podziel przez {divisor}).",
    "shortcutText": "Wskazówka: przesuń przecinek dziesiętny o trzy miejsca w lewo.", "quickTableHeading": "Tabela szybkiego przeliczania", "faqHeading": "Często zadawane pytania",
    "faqQ1": "Ile {to} to 1 {from}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Ile {to} to 1000 {from}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Ile {to} to 2500 {from}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Powiązane konwertery metryczne"
  },
  "siPrefixPage": {
    "badge": "Referencja metryczna", "title": "Kompletny przewodnik i macierz 24 przedrostków SI",
    "subtitle": "Układ SI definiuje 24 przedrostki metryczne obejmujące 60 rzędów wielkości od quekto (10⁻³⁰) do quetta (10³⁰).",
    "thPrefix": "Przedrostek", "thSymbol": "Symbol", "thPower": "Potęga 10", "thScale": "Nazwa skali", "thMultiplier": "Wartość mnożnika"
  },
  "chartsPage": {
    "badge": "Tabele do druku", "title": "Tabele przeliczania nano na mikro",
    "subtitle": "Matryce referencyjne do obliczeń laboratoryjnych i inżynieryjnych.",
    "thScientific": "Notacja naukowa", "openCalc": "Otwórz interaktywny kalkulator i wzór →"
  },
  "errorPage": {
    "badge": "Błąd 404", "title": "Współrzędna poza zakresem",
    "desc": "Żądana strona obliczeń nanoskali nie istnieje lub została przeniesiona w continuum metrycznym SI.",
    "returnHome": "Wróć do strony głównej", "converterBtn": "Konwerter nano na mikro", "physicsBtn": "Centrum fizyki antygrawitacji"
  }
}

# Czech (cs)
SLAVIC_BALTIC_DATA["cs"] = {
  "units": {
    "nano": "nano", "micro": "mikro", "pico": "piko",
    "nanometer": "nanometr", "nanometers": "nanometrů", "micrometer": "mikrometr", "micrometers": "mikrometrů",
    "picometer": "pikometr", "picometers": "pikometrů", "millimeter": "milimetr", "millimeters": "milimetrů",
    "meter": "metr", "meters": "metrů", "nanogram": "nanogram", "nanograms": "nanogramů",
    "microgram": "mikrogram", "micrograms": "mikrogramů", "milligram": "miligram", "milligrams": "miligramů",
    "gram": "gram", "grams": "gramů", "kilogram": "kilogram", "kilograms": "kilogramů",
    "nanofarad": "nanofarad", "nanofarads": "nanofaradů", "microfarad": "mikrofarad", "microfarads": "mikrofaradů",
    "picofarad": "pikofarad", "picofarads": "pikofaradů", "nanomolar": "nanomolární", "micromolar": "mikromolární",
    "nanosecond": "nanosekunda", "nanoseconds": "nanosekund", "microsecond": "mikrosekunda", "microseconds": "mikrosekund",
    "second": "sekunda", "seconds": "sekund", "newton": "newton", "newtons": "newtonů",
    "micronewton": "mikronewton", "micronewtons": "mikronewtonů", "tesla": "tesla", "gauss": "gauss"
  },
  "convertPage": {
    "h1Pattern": "Převodník {from} na {to}",
    "introPattern": "Převeďte okamžitě {from} ({fromSymbol}) na {to} ({toSymbol}) pomocí přesných vzorců a tabulek.",
    "formulaHeading": "Vzorec pro převod", "formulaDesc": "Pro převod z {from} ({fromSymbol}) na {to} ({toSymbol}) vynásobte číslem {factor} (nebo vydělte číslem {divisor}).",
    "shortcutText": "Zkratka: posuňte desetinnou čárku o tři místa doleva.", "quickTableHeading": "Rychlá referenční tabulka", "faqHeading": "Často kladené otázky",
    "faqQ1": "Kolik je 1 {from} v {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Kolik je 1000 {from} v {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Kolik je 2500 {from} v {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Související metrické převodníky"
  },
  "siPrefixPage": {
    "badge": "Metrická reference", "title": "Kompletní průvodce a matice 24 předpon SI",
    "subtitle": "Mezinárodní systém jednotek (SI) definuje 24 metrických předpon v rozsahu 60 řádů.",
    "thPrefix": "Předpona", "thSymbol": "Symbol", "thPower": "Mocnina 10", "thScale": "Název stupnice", "thMultiplier": "Hodnota násobitele"
  },
  "chartsPage": {
    "badge": "Tabulky k tisku", "title": "Tabulky převodu nano na mikro",
    "subtitle": "Rychlé vyhledávací matice pro vědecké a laboratorní výpočty.",
    "thScientific": "Vědecký zápis", "openCalc": "Otevřít interaktivní kalkulačku a vzorec →"
  },
  "errorPage": {
    "badge": "Chyba 404", "title": "Souřadnice mimo rozsah",
    "desc": "Požadovaná stránka neexistuje nebo byla přesunuta.",
    "returnHome": "Zpět na domovskou stránku", "converterBtn": "Převodník nano na mikro", "physicsBtn": "Centrum antigravitační fyziky"
  }
}

# Slovak (sk)
SLAVIC_BALTIC_DATA["sk"] = {
  "units": {
    "nano": "nano", "micro": "mikro", "pico": "piko",
    "nanometer": "nanometer", "nanometers": "nanometrov", "micrometer": "mikrometer", "micrometers": "mikrometrov",
    "picometer": "pikometer", "picometers": "pikometrov", "millimeter": "milimeter", "millimeters": "milimetrov",
    "meter": "meter", "meters": "metrov", "nanogram": "nanogram", "nanograms": "nanogramov",
    "microgram": "mikrogram", "micrograms": "mikrogramov", "milligram": "miligram", "milligrams": "miligramov",
    "gram": "gram", "grams": "gramov", "kilogram": "kilogram", "kilograms": "kilogramov",
    "nanofarad": "nanofarad", "nanofarads": "nanofaradov", "microfarad": "mikrofarad", "microfarads": "mikrofaradov",
    "picofarad": "pikofarad", "picofarads": "pikofaradov", "nanomolar": "nanomolárny", "micromolar": "mikromolárny",
    "nanosecond": "nanosekunda", "nanoseconds": "nanosekúnd", "microsecond": "mikrosekunda", "microseconds": "mikrosekúnd",
    "second": "sekunda", "seconds": "sekúnd", "newton": "newton", "newtons": "newtonov",
    "micronewton": "mikronewton", "micronewtons": "mikronewtonov", "tesla": "tesla", "gauss": "gauss"
  },
  "convertPage": {
    "h1Pattern": "Prevodník {from} na {to}",
    "introPattern": "Preveďte okamžite {from} ({fromSymbol}) na {to} ({toSymbol}) pomocou presných vzorcov a tabuliek.",
    "formulaHeading": "Vzorec na prevod", "formulaDesc": "Pre prevod z {from} ({fromSymbol}) na {to} ({toSymbol}) vynásobte číslom {factor} (alebo vydeľte číslom {divisor}).",
    "shortcutText": "Skratka: posuňte desatinnú čiarku o tri miesta doľava.", "quickTableHeading": "Rýchla referenčná tabuľka", "faqHeading": "Často kladené otázky",
    "faqQ1": "Koľko je 1 {from} v {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Koľko je 1000 {from} v {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Koľko je 2500 {from} v {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Súvisiace metrické prevodníky"
  },
  "siPrefixPage": {
    "badge": "Metrická referencia", "title": "Kompletný sprievodca a matica 24 predpôn SI",
    "subtitle": "Medzinárodný systém jednotiek (SI) definuje 24 predpôn v rozsahu 60 rádov.",
    "thPrefix": "Predpona", "thSymbol": "Symbol", "thPower": "Mocnina 10", "thScale": "Názov stupnice", "thMultiplier": "Hodnota násobiteľa"
  },
  "chartsPage": {
    "badge": "Tabuľky na tlač", "title": "Tabuľky prevodu nano na mikro",
    "subtitle": "Rýchle referenčné matice pre vedecké a laboratórne výpočty.",
    "thScientific": "Vedecký zápis", "openCalc": "Otvoriť interaktívnu kalkulačku a vzorec →"
  },
  "errorPage": {
    "badge": "Chyba 404", "title": "Súradnica mimo rozsahu",
    "desc": "Požadovaná stránka neexistuje alebo bola presunutá.",
    "returnHome": "Späť na domovskú stránku", "converterBtn": "Prevodník nano na mikro", "physicsBtn": "Centrum fyziky antigravitácie"
  }
}

# Greek (el) & Turkish (tr) & Hungarian (hu) & Finnish (fi) & Baltic
# (We add them in batch runner)

print("Slavic & Baltic modules loaded.")
