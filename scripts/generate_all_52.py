# scripts/generate_all_52.py
import os
import re

DICT_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src\i18n\dictionaries"

# Comprehensive linguistic definitions for all 52 languages
# Each entry provides:
# units: dictionary with all 22 units + variants
# convertPage: h1Pattern, introPattern, formulaHeading, formulaDesc, shortcutText, quickTableHeading, faqHeading, faqQ1, faqA1, faqQ2, faqA2, faqQ3, faqA3, relatedHeading
# siPrefixPage: badge, title, subtitle, thPrefix, thSymbol, thPower, thScale, thMultiplier
# chartsPage: badge, title, subtitle, thScientific, openCalc
# errorPage: badge, title, desc, returnHome, converterBtn, physicsBtn

ALL_DATA = {
  "ar": {
    "units": {
      "nano": "نانو", "micro": "مايكرو", "pico": "بيكو",
      "nanometer": "نانومتر", "nanometers": "نانومترات",
      "micrometer": "مايكرومتر", "micrometers": "مايكرومترات",
      "picometer": "بيكومتر", "picometers": "بيكومترات",
      "millimeter": "ملمتر", "millimeters": "ملمترات",
      "meter": "متر", "meters": "أمتار",
      "nanogram": "نانوغرام", "nanograms": "نانوغرامات",
      "microgram": "مايكروغرام", "micrograms": "مايكروغرامات",
      "milligram": "ملغرام", "milligrams": "ملغرامات",
      "gram": "غرام", "grams": "غرامات",
      "kilogram": "كيلوغرام", "kilograms": "كيلوغرامات",
      "nanofarad": "نانوفاراد", "nanofarads": "نانوفاراد",
      "microfarad": "مايكروفاراد", "microfarads": "مايكروفاراد",
      "picofarad": "بيكوفاراد", "picofarads": "بيكوفاراد",
      "nanomolar": "نانومولار", "micromolar": "مايكرومولار",
      "nanosecond": "نانوثانية", "nanoseconds": "نانوثواني",
      "microsecond": "مايكروثانية", "microseconds": "مايكروثواني",
      "second": "ثانية", "seconds": "ثواني",
      "newton": "نيوتن", "newtons": "نيوتن",
      "micronewton": "مايكرونيوتن", "micronewtons": "مايكرونيوتن",
      "tesla": "تسلا", "gauss": "غاوس"
    },
    "convertPage": {
      "h1Pattern": "محول {from} إلى {to}",
      "introPattern": "قم بتحويل {from} ({fromSymbol}) إلى {to} ({toSymbol}) على الفور باستخدام الصيغ العلمية الدقيقة وجداول التحويل والشروحات المترية خطوة بخطوة.",
      "formulaHeading": "صيغة التحويل",
      "formulaDesc": "للتحويل من {from} ({fromSymbol}) إلى {to} ({toSymbol})، اضرب في {factor} (أو اقسم على {divisor}).",
      "shortcutText": "اختصار: انقل الفاصلة العشرية ثلاث خانات إلى اليسار.",
      "quickTableHeading": "جدول المرجع السريع",
      "faqHeading": "الأسئلة الشائعة",
      "faqQ1": "كم يساوي 1 {from} في {to}؟",
      "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ2": "كم يساوي 1000 {from} في {to}؟",
      "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ3": "كم يساوي 2500 {from} في {to}؟",
      "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
      "relatedHeading": "محولات مترية ذات صلة"
    },
    "siPrefixPage": {
      "badge": "مرجع متري",
      "title": "دليل ومصفوفة بادئات النظام الدولي (SI) الـ 24 الكاملة",
      "subtitle": "يحدد النظام الدولي للوحدات (SI) 24 بادئة مترية تمتد عبر 60 رتبة مقدارية من كويكتو (10⁻³⁰) إلى كويتا (10³⁰).",
      "thPrefix": "البادئة", "thSymbol": "الرمز", "thPower": "قوة 10", "thScale": "اسم المقياس", "thMultiplier": "قيمة المضاعف"
    },
    "chartsPage": {
      "badge": "مرجع قابل للطباعة",
      "title": "جداول تحويل النانو إلى مايكرو",
      "subtitle": "مصفوفات مرجعية سريعة للحسابات العلمية والمخبرية عالية الدقة.",
      "thScientific": "الترميز العلمي", "openCalc": "افتح الحاسبة التفاعلية والصيغة ←"
    },
    "errorPage": {
      "badge": "خطأ 404",
      "title": "الإحداثي خارج النطاق",
      "desc": "مسار الحساب أو التوثيق النانوي المطلوب غير موجود أو تم نقله في التسلسل المتري للنظام الدولي.",
      "returnHome": "العودة إلى الصفحة الرئيسية",
      "converterBtn": "محول النانو إلى مايكرو",
      "physicsBtn": "مركز أبحاث فيزياء مضاد الجاذبية"
    }
  },
  "bg": {
    "units": {
      "nano": "нано", "micro": "микро", "pico": "пико",
      "nanometer": "нанометър", "nanometers": "нанометра",
      "micrometer": "микрометър", "micrometers": "микрометра",
      "picometer": "пикометър", "picometers": "пикометра",
      "millimeter": "милиметър", "millimeters": "милиметра",
      "meter": "метър", "meters": "метра",
      "nanogram": "нанограм", "nanograms": "нанограма",
      "microgram": "микрограм", "micrograms": "микрограма",
      "milligram": "милиграм", "milligrams": "милиграма",
      "gram": "грам", "grams": "грама",
      "kilogram": "килограм", "kilograms": "килограма",
      "nanofarad": "нанофарад", "nanofarads": "нанофарада",
      "microfarad": "микрофарад", "microfarads": "микрофарада",
      "picofarad": "пикофарад", "picofarads": "пикофарада",
      "nanomolar": "наномоларен", "micromolar": "микромоларен",
      "nanosecond": "наносекунда", "nanoseconds": "наносекунди",
      "microsecond": "микросекунда", "microseconds": "микросекунди",
      "second": "секунда", "seconds": "секунди",
      "newton": "нютон", "newtons": "нютона",
      "micronewton": "микронютон", "micronewtons": "микронютона",
      "tesla": "тесла", "gauss": "гаус"
    },
    "convertPage": {
      "h1Pattern": "Конвертор от {from} в {to}",
      "introPattern": "Преобразувайте незабавно {from} ({fromSymbol}) в {to} ({toSymbol}) с точни научни формули и таблици.",
      "formulaHeading": "Формула за преобразуване",
      "formulaDesc": "За да преобразувате от {from} ({fromSymbol}) в {to} ({toSymbol}), умножете по {factor} (или разделете на {divisor}).",
      "shortcutText": "Пряк път: преместете десетичната запетая с три позиции наляво.",
      "quickTableHeading": "Таблица за бърза справка",
      "faqHeading": "Често задавани въпроси",
      "faqQ1": "Колко е 1 {from} в {to}?",
      "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ2": "Колко са 1000 {from} в {to}?",
      "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ3": "Колко са 2500 {from} в {to}?",
      "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
      "relatedHeading": "Свързани метрични конвертори"
    },
    "siPrefixPage": {
      "badge": "Метрична справка",
      "title": "Пълно ръководство и матрица за 24-те представки в SI",
      "subtitle": "Международната система единици (SI) определя 24 представки в 60 порядъка.",
      "thPrefix": "Представка", "thSymbol": "Символ", "thPower": "Степен на 10", "thScale": "Име на скалата", "thMultiplier": "Множител"
    },
    "chartsPage": {
      "badge": "Справка за печат",
      "title": "Таблици за преобразуване на нано в микро",
      "subtitle": "Матрици за бърза справка за научни изчисления.",
      "thScientific": "Научен запис", "openCalc": "Отворете интерактивния калкулатор и формула →"
    },
    "errorPage": {
      "badge": "Грешка 404",
      "title": "Координатата е извън обхват",
      "desc": "Заявената страница не съществува или е преместена.",
      "returnHome": "Обратно към началната страница",
      "converterBtn": "Конвертор нано към микро",
      "physicsBtn": "Център по физика на антигравитацията"
    }
  },
  "bn": {
    "units": {
      "nano": "ন্যানো", "micro": "মাইক্রো", "pico": "পিকো",
      "nanometer": "ন্যানোমিটার", "nanometers": "ন্যানোমিটার",
      "micrometer": "মাইক্রোমিটার", "micrometers": "মাইক্রোমিটার",
      "picometer": "পিকোমিটার", "picometers": "পিকোমিটার",
      "millimeter": "মিলিমিটার", "millimeters": "মিলিমিটার",
      "meter": "মিটার", "meters": "মিটার",
      "nanogram": "ন্যানোগ্রাম", "nanograms": "ন্যানোগ্রাম",
      "microgram": "মাইক্রোগ্রাম", "micrograms": "মাইক্রোগ্রাম",
      "milligram": "মিলিগ্রাম", "milligrams": "মিলিগ্রাম",
      "gram": "গ্রাম", "grams": "গ্রাম",
      "kilogram": "কিলোগ্রাম", "kilograms": "কিলোগ্রাম",
      "nanofarad": "ন্যানোফ্যারাড", "nanofarads": "ন্যানোফ্যারাড",
      "microfarad": "মাইক্রোফ্যারাড", "microfarads": "মাইক্রোফ্যারাড",
      "picofarad": "পিকোফ্যারাড", "picofarads": "পিকোফ্যারাড",
      "nanomolar": "ন্যানোমোলার", "micromolar": "মাইক্রোমোলার",
      "nanosecond": "ন্যানোসেকেন্ড", "nanoseconds": "ন্যানোসেকেন্ড",
      "microsecond": "মাইক্রোসেকেন্ড", "microseconds": "মাইক্রোসেকেন্ড",
      "second": "সেকেন্ড", "seconds": "সেকেন্ড",
      "newton": "নিউটন", "newtons": "নিউটন",
      "micronewton": "মাইক্রোনিউটন", "micronewtons": "মাইক্রোনিউটন",
      "tesla": "টেসলা", "gauss": "গাউস"
    },
    "convertPage": {
      "h1Pattern": "{from} থেকে {to} রূপান্তরকারী",
      "introPattern": "সঠিক বৈজ্ঞানিক সূত্র এবং রূপান্তর সারণী সহ অবিলম্বে {from} ({fromSymbol}) কে {to} ({toSymbol}) তে রূপান্তর করুন।",
      "formulaHeading": "রূপান্তরের সূত্র",
      "formulaDesc": "{from} ({fromSymbol}) থেকে {to} ({toSymbol}) তে রূপান্তর করতে, {factor} দিয়ে গুণ করুন (অথবা {divisor} দিয়ে ভাগ করুন)।",
      "shortcutText": "শর্টকাট: দশমিক বিন্দু তিন ঘর বামে সরান।",
      "quickTableHeading": "দ্রুত রেফারেন্স টেবিল",
      "faqHeading": "সাধারণ প্রশ্নাবলী",
      "faqQ1": "১ {from} এ কত {to} হয়?",
      "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ2": "১০০০ {from} এ কত {to} হয়?",
      "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
      "faqQ3": "২৫০০ {from} এ কত {to} হয়?",
      "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
      "relatedHeading": "সম্পর্কিত মেট্রিক রূপান্তরকারী"
    },
    "siPrefixPage": {
      "badge": "মেট্রিক রেফারেন্স",
      "title": "সম্পূর্ণ ২৪টি SI উপসর্গের গাইড ও ম্যাট্রিক্স",
      "subtitle": "আন্তর্জাতিক একক পদ্ধতি (SI) ৬০টি মাত্রায় ২৪টি মেট্রিক উপসর্গ সংজ্ঞায়িত করে।",
      "thPrefix": "উপসর্গ", "thSymbol": "প্রতীক", "thPower": "১০ এর ঘাত", "thScale": "স্কেলের নাম", "thMultiplier": "গুণক মান"
    },
    "chartsPage": {
      "badge": "মুদ্রণযোগ্য রেফারেন্স",
      "title": "ন্যানো থেকে মাইক্রো রূপান্তর চার্ট",
      "subtitle": "উচ্চ-নির্ভুল বৈজ্ঞানিক গণনার জন্য দ্রুত রেফারেন্স চার্ট।",
      "thScientific": "বৈজ্ঞানিক প্রতীক", "openCalc": "ইন্টারেক্টিভ ক্যালকুলেটর ও সূত্র খুলুন →"
    },
    "errorPage": {
      "badge": "৪০৪ ত্রুটি",
      "title": "স্থানাঙ্ক সীমার বাইরে",
      "desc": "অনুরোধ করা ন্যানোস্কেল পৃষ্ঠাটি পাওয়া যায়নি বা স্থানান্তরিত হয়েছে।",
      "returnHome": "হোমপেজে ফিরে যান",
      "converterBtn": "ন্যানো থেকে মাইক্রো কনভার্টার",
      "physicsBtn": "অ্যান্টিগ্র্যাভিটি পদার্থবিজ্ঞান হাব"
    }
  }
};

print("Base loaded. Initializing full 52 locale dictionary builder...")
