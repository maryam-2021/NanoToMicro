# scripts/data_rtl_indic.py

RTL_INDIC_DATA = {}

# Arabic (ar)
RTL_INDIC_DATA["ar"] = {
  "units": {
    "nano": "نانو", "micro": "مايكرو", "pico": "بيكو",
    "nanometer": "نانومتر", "nanometers": "نانومترات", "micrometer": "مايكرومتر", "micrometers": "مايكرومترات",
    "picometer": "بيكومتر", "picometers": "بيكومترات", "millimeter": "ملمتر", "millimeters": "ملمترات",
    "meter": "متر", "meters": "أمتار", "nanogram": "نانوغرام", "nanograms": "نانوغرامات",
    "microgram": "مايكروغرام", "micrograms": "مايكروغرامات", "milligram": "ملغرام", "milligrams": "ملغرامات",
    "gram": "غرام", "grams": "غرامات", "kilogram": "كيلوغرام", "kilograms": "كيلوغرامات",
    "nanofarad": "نانوفاراد", "nanofarads": "نانوفاراد", "microfarad": "مايكروفاراد", "microfarads": "مايكروفاراد",
    "picofarad": "بيكوفاراد", "picofarads": "بيكوفاراد", "nanomolar": "نانومولار", "micromolar": "مايكرومولار",
    "nanosecond": "نانوثانية", "nanoseconds": "نانوثواني", "microsecond": "مايكروثانية", "microseconds": "مايكروثواني",
    "second": "ثانية", "seconds": "ثواني", "newton": "نيوتن", "newtons": "نيوتن",
    "micronewton": "مايكرونيوتن", "micronewtons": "مايكرونيوتن", "tesla": "تسلا", "gauss": "غاوس"
  },
  "convertPage": {
    "h1Pattern": "محول {from} إلى {to}",
    "introPattern": "قم بتحويل {from} ({fromSymbol}) إلى {to} ({toSymbol}) على الفور باستخدام الصيغ العلمية الدقيقة وجداول التحويل والشروحات المترية خطوة بخطوة.",
    "formulaHeading": "صيغة التحويل", "formulaDesc": "للتحويل من {from} ({fromSymbol}) إلى {to} ({toSymbol})، اضرب في {factor} (أو اقسم على {divisor}).",
    "shortcutText": "اختصار: انقل الفاصلة العشرية ثلاث خانات إلى اليسار.", "quickTableHeading": "جدول المرجع السريع", "faqHeading": "الأسئلة الشائعة",
    "faqQ1": "كم يساوي 1 {from} في {to}؟", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "كم يساوي 1000 {from} في {to}؟", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "كم يساوي 2500 {from} في {to}؟", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "محولات مترية ذات صلة"
  },
  "siPrefixPage": {
    "badge": "مرجع متري", "title": "دليل ومصفوفة بادئات النظام الدولي (SI) الـ 24 الكاملة",
    "subtitle": "يحدد النظام الدولي للوحدات (SI) 24 بادئة مترية تمتد عبر 60 رتبة مقدارية من كويكتو (10⁻³⁰) إلى كويتا (10³⁰).",
    "thPrefix": "البادئة", "thSymbol": "الرمز", "thPower": "قوة 10", "thScale": "اسم المقياس", "thMultiplier": "قيمة المضاعف"
  },
  "chartsPage": {
    "badge": "مرجع قابل للطباعة", "title": "جداول تحويل النانو إلى مايكرو",
    "subtitle": "مصفوفات مرجعية سريعة للحسابات العلمية والمخبرية عالية الدقة.",
    "thScientific": "الترميز العلمي", "openCalc": "افتح الحاسبة التفاعلية والصيغة ←"
  },
  "errorPage": {
    "badge": "خطأ 404", "title": "الإحداثي خارج النطاق",
    "desc": "مسار الحساب أو التوثيق النانوي المطلوب غير موجود أو تم نقله في التسلسل المتري للنظام الدولي.",
    "returnHome": "العودة إلى الصفحة الرئيسية", "converterBtn": "محول النانو إلى مايكرو", "physicsBtn": "مركز أبحاث فيزياء مضاد الجاذبية"
  }
}

# Urdu (ur)
RTL_INDIC_DATA["ur"] = {
  "units": {
    "nano": "نینو", "micro": "مائیکرو", "pico": "پیکو",
    "nanometer": "نینو میٹر", "nanometers": "نینو میٹرز", "micrometer": "مائیکرو میٹر", "micrometers": "مائیکرو میٹرز",
    "picometer": "پیکو میٹر", "picometers": "پیکو میٹرز", "millimeter": "ملی میٹر", "millimeters": "ملی میٹرز",
    "meter": "میٹر", "meters": "میٹرز", "nanogram": "نینو گرام", "nanograms": "نینو گرامز",
    "microgram": "مائیکرو گرام", "micrograms": "مائیکرو گرامز", "milligram": "ملی گرام", "milligrams": "ملی گرامز",
    "gram": "گرام", "grams": "گرامز", "kilogram": "کلوگرام", "kilograms": "کلوگرامز",
    "nanofarad": "نینو فیراڈ", "nanofarads": "نینو فیراڈز", "microfarad": "مائیکرو فیراڈ", "microfarads": "مائیکرو فیراڈز",
    "picofarad": "پیکو فیراڈ", "picofarads": "پیکو فیراڈز", "nanomolar": "نینو مولر", "micromolar": "مائیکرو مولر",
    "nanosecond": "نینو سیکنڈ", "nanoseconds": "نینو سیکنڈز", "microsecond": "مائیکرو سیکنڈ", "microseconds": "مائیکرو سیکنڈز",
    "second": "سیکنڈ", "seconds": "سیکنڈز", "newton": "نیوٹن", "newtons": "نیوٹنز",
    "micronewton": "مائیکرو نیوٹن", "micronewtons": "مائیکرو نیوٹنز", "tesla": "ٹیسلا", "gauss": "گاس"
  },
  "convertPage": {
    "h1Pattern": "{from} سے {to} کنورٹر",
    "introPattern": "{from} ({fromSymbol}) کو فوری طور پر {to} ({toSymbol}) میں تبدیل کریں، درست سائنسی فارمولوں، کنورژن ٹیبلز اور میٹرک وضاحت کے ساتھ۔",
    "formulaHeading": "تبدیلی کا فارمولا", "formulaDesc": "{from} ({fromSymbol}) کو {to} ({toSymbol}) میں تبدیل کرنے کے لیے {factor} سے ضرب دیں (یا {divisor} سے تقسیم کریں)۔",
    "shortcutText": "شارٹ کٹ: اعشاریہ کو تین درجے بائیں منتقل کریں۔", "quickTableHeading": "فوری حوالہ جدول", "faqHeading": "اکثر پوچھے گئے سوالات",
    "faqQ1": "1 {from} میں کتنے {to} ہوتے ہیں؟", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "1000 {from} میں کتنے {to} ہوتے ہیں؟", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "2500 {from} میں کتنے {to} ہوتے ہیں؟", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "متعلقہ میٹرک کنورٹرز"
  },
  "siPrefixPage": {
    "badge": "میٹرک حوالہ", "title": "تمام 24 SI سابقوں کی جامع گائیڈ اور میٹرکس",
    "subtitle": "انٹرنیشنل سسٹم آف یونٹس (SI) 60 آرڈرز آف میگنیٹیوڈ میں 24 میٹرک سابقوں کی وضاحت کرتا ہے، کوئیکٹو (10⁻³⁰) سے کوئٹا (10³⁰) تک۔",
    "thPrefix": "سابقہ (Prefix)", "thSymbol": "علامت", "thPower": "10 کی طاقت", "thScale": "پیمانے کا نام", "thMultiplier": "ضرب کی قدر"
  },
  "chartsPage": {
    "badge": "پرنٹ کے قابل حوالہ", "title": "نینو سے مائیکرو کنورژن چارٹس",
    "subtitle": "سائنسی اور لیبارٹری پیمائش کے لیے فوری حوالہ جاتی چارٹس۔",
    "thScientific": "سائنسی نوٹیشن", "openCalc": "انٹرایکٹو کیلکولیٹر اور فارمولا کھولیں ←"
  },
  "errorPage": {
    "badge": "404 خرابی", "title": "کوآرڈینیٹ حد سے باہر ہے",
    "desc": "آپ کا مطلوبہ نینو اسکیل حساب یا دستاویز کا صفحہ موجود نہیں ہے یا SI میٹرک تسلسل میں منتقل ہو گیا ہے۔",
    "returnHome": "مرکزی صفحہ پر واپس جائیں", "converterBtn": "نینو سے مائیکرو کنورٹر", "physicsBtn": "اینٹی گریویٹی فزکس ہب"
  }
}

# Persian (fa)
RTL_INDIC_DATA["fa"] = {
  "units": {
    "nano": "نانو", "micro": "میکرو", "pico": "پیکو",
    "nanometer": "نانومتر", "nanometers": "نانومتر", "micrometer": "میکرومتر", "micrometers": "میکرومتر",
    "picometer": "پیکومتر", "picometers": "پیکومتر", "millimeter": "میلی‌متر", "millimeters": "میلی‌متر",
    "meter": "متر", "meters": "متر", "nanogram": "نانوگرم", "nanograms": "نانوگرم",
    "microgram": "میکروگرم", "micrograms": "میکروگرم", "milligram": "میلی‌گرم", "milligrams": "میلی‌گرم",
    "gram": "گرم", "grams": "گرم", "kilogram": "کیلوگرم", "kilograms": "کیلوگرم",
    "nanofarad": "نانوفاراد", "nanofarads": "نانوفاراد", "microfarad": "میکروفاراد", "microfarads": "میکروفاراد",
    "picofarad": "پیکوفاراد", "picofarads": "پیکوفاراد", "nanomolar": "نانومولار", "micromolar": "میکرومولار",
    "nanosecond": "نانوثانیه", "nanoseconds": "نانوثانیه", "microsecond": "میکروثانیه", "microseconds": "میکروثانیه",
    "second": "ثانیه", "seconds": "ثانیه", "newton": "نیوتن", "newtons": "نیوتن",
    "micronewton": "میکرونیوتن", "micronewtons": "میکرونیوتن", "tesla": "تسلا", "gauss": "گاوس"
  },
  "convertPage": {
    "h1Pattern": "مبدل {from} به {to}",
    "introPattern": "تبدیل فوری {from} ({fromSymbol}) به {to} ({toSymbol}) با فرمول‌های علمی دقیق، جدول‌های تبدیل و توضیحات گام‌به‌گام سیستم متریک.",
    "formulaHeading": "فرمول تبدیل", "formulaDesc": "برای تبدیل از {from} ({fromSymbol}) به {to} ({toSymbol})، در {factor} ضرب کنید (یا بر {divisor} تقسیم کنید).",
    "shortcutText": "میانبر: ممیز اعشاری را سه رقم به چپ ببرید.", "quickTableHeading": "جدول مرجع سریع", "faqHeading": "پرسش‌های متداول",
    "faqQ1": "هر ۱ {from} چند {to} است؟", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "هر ۱۰۰۰ {from} چند {to} است؟", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "هر ۲۵۰۰ {from} چند {to} است؟", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "مبدل‌های متریک مرتبط"
  },
  "siPrefixPage": {
    "badge": "مرجع متریک", "title": "راهنمای کامل و ماتریس ۲۴ پیشوند SI",
    "subtitle": "سیستم بین‌المللی یکاها (SI) تعداد ۲۴ پیشوند متریک را در ۶۰ مرتبه بزرگی از کوئکتو (10⁻³⁰) تا کوئتا (10³⁰) تعریف می‌کند.",
    "thPrefix": "پیشوند", "thSymbol": "نماد", "thPower": "توان ۱۰", "thScale": "نام مقیاس", "thMultiplier": "مقدار ضریب"
  },
  "chartsPage": {
    "badge": "مرجع قابل چاپ", "title": "نمودارهای تبدیل نانو به میکرو",
    "subtitle": "ماتریس‌های مرجع سریع برای محاسبات با دقت بالا در آزمایشگاه و صنعت.",
    "thScientific": "نماد علمی", "openCalc": "باز کردن ماشین حساب تعاملی و فرمول ←"
  },
  "errorPage": {
    "badge": "خطای ۴۰۴", "title": "مختصات خارج از محدوده",
    "desc": "صفحه محاسبات نانومقیاس درخواستی وجود ندارد یا در زنجیره متریک جابجا شده است.",
    "returnHome": "بازگشت به صفحه اصلی", "converterBtn": "مبدل نانو به میکرو", "physicsBtn": "مرکز تحقیقات فیزیک ضدگرانش"
  }
}

# Hebrew (he)
RTL_INDIC_DATA["he"] = {
  "units": {
    "nano": "נאנו", "micro": "מיקרו", "pico": "פיקו",
    "nanometer": "ננומטר", "nanometers": "ננומטרים", "micrometer": "מיקרומטר", "micrometers": "מיקרומטרים",
    "picometer": "פיקומטר", "picometers": "פיקומטרים", "millimeter": "מילימטר", "millimeters": "מילימטרים",
    "meter": "מטר", "meters": "מטרים", "nanogram": "ננוגרם", "nanograms": "ננוגרמים",
    "microgram": "מיקרוגרם", "micrograms": "מיקרוגרמים", "milligram": "מיליגרם", "milligrams": "מיליגרמים",
    "gram": "גרם", "grams": "גרמים", "kilogram": "קילוגרם", "kilograms": "קילוגרמים",
    "nanofarad": "ננופאראד", "nanofarads": "ננופאראד", "microfarad": "מיקרופאראד", "microfarads": "מיקרופאראד",
    "picofarad": "פיקופאראד", "picofarads": "פיקופאראד", "nanomolar": "ננומולר", "micromolar": "מיקרומולר",
    "nanosecond": "ננו-שנייה", "nanoseconds": "ננו-שניות", "microsecond": "מיקרו-שנייה", "microseconds": "מיקרו-שניות",
    "second": "שנייה", "seconds": "שניות", "newton": "ניוטון", "newtons": "ניוטון",
    "micronewton": "מיקרוניוטון", "micronewtons": "מיקרוניוטון", "tesla": "טסלה", "gauss": "גאוס"
  },
  "convertPage": {
    "h1Pattern": "מחשבון המרה מ-{from} ל-{to}",
    "introPattern": "המר באופן מיידי {from} ({fromSymbol}) ל-{to} ({toSymbol}) עם נוסחאות מדעיות מדויקות, טבלאות המרה והסברים מטריים שלב אחר שלב.",
    "formulaHeading": "נוסחת המרה", "formulaDesc": "כדי להמיר מ-{from} ({fromSymbol}) ל-{to} ({toSymbol}), הכפל ב-{factor} (או חלק ב-{divisor}).",
    "shortcutText": "קיצור דרך: הזז את הנקודה העשרונית שלושה מקומות שמאלה.", "quickTableHeading": "טבלת התייחסות מהירה", "faqHeading": "שאלות נפוצות",
    "faqQ1": "כמה זה 1 {from} ב-{to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "כמה זה 1000 {from} ב-{to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "כמה זה 2500 {from} ב-{to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "ממירי יחידות מטריים קשורים"
  },
  "siPrefixPage": {
    "badge": "מדריך יחידות SI", "title": "מדריך ומטריצה מלאה ל-24 קידומות SI",
    "subtitle": "מערכת היחידות הבינלאומית (SI) מגדירה 24 קידומות מטריות על פני 60 סדרי גודל מקווקטו (10⁻³⁰) ועד קווטה (10³⁰).",
    "thPrefix": "קידומת", "thSymbol": "סמל", "thPower": "חזקת 10", "thScale": "שם הסולם", "thMultiplier": "ערך מכפיל"
  },
  "chartsPage": {
    "badge": "טבלאות להדפסה", "title": "טבלאות המרה מנאנו למיקרו",
    "subtitle": "מטריצות בדיקה מהירות לחישובים מדעיים ומעבדתיים.",
    "thScientific": "כתיב מדעי", "openCalc": "פתח מחשבון אינטראקטיבי ונוסחה ←"
  },
  "errorPage": {
    "badge": "שגיאה 404", "title": "קואורדינטה מחוץ לטווח",
    "desc": "נתיב החישוב הננומטרי המבוקש אינו קיים או הועבר ברצף המטרי של SI.",
    "returnHome": "חזרה לדף הבית", "converterBtn": "ממיר נאנו למיקרו", "physicsBtn": "מרכז פיזיקת אנטי-גרביטציה"
  }
}

# Hindi (hi)
RTL_INDIC_DATA["hi"] = {
  "units": {
    "nano": "नैनो", "micro": "माइक्रो", "pico": "पिको",
    "nanometer": "नैनोमीटर", "nanometers": "नैनोमीटर", "micrometer": "माइक्रोमीटर", "micrometers": "माइक्रोमीटर",
    "picometer": "पिकोमीटर", "picometers": "पिकोमीटर", "millimeter": "मिलीमीटर", "millimeters": "मिलीमीटर",
    "meter": "मीटर", "meters": "मीटर", "nanogram": "नैनोग्राम", "nanograms": "नैनोग्राम",
    "microgram": "माइครोग्राम", "micrograms": "माइครोग्राम", "milligram": "मिलीग्राम", "milligrams": "मिलीग्राम",
    "gram": "ग्राम", "grams": "ग्राम", "kilogram": "किलोग्राम", "kilograms": "किलोग्राम",
    "nanofarad": "नैनोफैराड", "nanofarads": "नैनोफैराड", "microfarad": "माइक्रोफैराड", "microfarads": "माइक्रोफैराड",
    "picofarad": "पिकोफैराड", "picofarads": "पिकोफैराड", "nanomolar": "नैनोमोलर", "micromolar": "माइक्रोमोलर",
    "nanosecond": "नैनोसेकंड", "nanoseconds": "नैनोसेकंड", "microsecond": "माइक्रोसेकंड", "microseconds": "माइक्रोसेकंड",
    "second": "सेकंड", "seconds": "सेकंड", "newton": "न्यूटन", "newtons": "न्यूटन",
    "micronewton": "माइक्रोन्यूटन", "micronewtons": "माइक्रोन्यूटन", "tesla": "टेस्ला", "gauss": "गॉस"
  },
  "convertPage": {
    "h1Pattern": "{from} से {to} कनवर्टर",
    "introPattern": "{from} ({fromSymbol}) को तुरंत {to} ({toSymbol}) में सटीक वैज्ञानिक सूत्रों, तालिकाओं और चरण-दर-चरण मीट्रिक व्याख्या के साथ बदलें।",
    "formulaHeading": "रूपांतरण सूत्र", "formulaDesc": "{from} ({fromSymbol}) को {to} ({toSymbol}) में बदलने के लिए, {factor} से गुणा करें (या {divisor} से भाग दें)।",
    "shortcutText": "शॉर्टकट: दशमलव बिंदु को तीन स्थान बाईं ओर ले जाएं।", "quickTableHeading": "त्वरित संदर्भ तालिका", "faqHeading": "अक्सर पूछे जाने वाले प्रश्न",
    "faqQ1": "1 {from} में कितने {to} होते हैं?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "1000 {from} में कितने {to} होते हैं?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "2500 {from} में कितने {to} होते हैं?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "संबंधित मीट्रिक कनवर्टर"
  },
  "siPrefixPage": {
    "badge": "मीट्रिक संदर्भ", "title": "सभी 24 SI उपसर्गों की संपूर्ण मार्गदर्शिका और मैट्रिक्स",
    "subtitle": "अंतर्राष्ट्रीय इकाई प्रणाली (SI) क्वेक्टो (10⁻³⁰) से लेकर क्वेटा (10³⁰) तक 60 परिमाणों में 24 उपसर्गों को परिभाषित करती है।",
    "thPrefix": "उपसर्ग (Prefix)", "thSymbol": "प्रतीक", "thPower": "10 की घात", "thScale": "पैमाने का नाम", "thMultiplier": "गुणक मान"
  },
  "chartsPage": {
    "badge": "प्रिंट करने योग्य संदर्भ", "title": "नैनो से माइक्रो रूपांतरण चार्ट",
    "subtitle": "वैज्ञानिक और प्रयोगशाला गणनाओं के लिए त्वरित संदर्भ चार्ट।",
    "thScientific": "वैज्ञानिक संकेतन", "openCalc": "इंटरैक्टिव कैलकुलेटर और सूत्र खोलें →"
  },
  "errorPage": {
    "badge": "404 त्रुटि", "title": "निर्देशांक सीमा से बाहर है",
    "desc": "आपके द्वारा अनुरोधित नैनोस्केल गणना पृष्ठ उपलब्ध नहीं है या मीट्रिक सातत्य में स्थानांतरित हो गया है।",
    "returnHome": "मुख्य पृष्ठ पर लौटें", "converterBtn": "नैनो से माइक्रो कनवर्टर", "physicsBtn": "एंटीग्रेविटी भौतिकी हब"
  }
}

# Bengali (bn)
RTL_INDIC_DATA["bn"] = {
  "units": {
    "nano": "ন্যানো", "micro": "মাইক্রো", "pico": "পিকো",
    "nanometer": "ন্যানোমিটার", "nanometers": "ন্যানোমিটার", "micrometer": "মাইক্রোমিটার", "micrometers": "মাইক্রোমিটার",
    "picometer": "পিকোমিটার", "picometers": "পিকোমিটার", "millimeter": "মিলিমিটার", "millimeters": "মিলিমিটার",
    "meter": "মিটার", "meters": "মিটার", "nanogram": "ন্যানোগ্রাম", "nanograms": "ন্যানোগ্রাম",
    "microgram": "মাইক্রোগ্রাম", "micrograms": "মাইক্রোগ্রাম", "milligram": "মিলিগ্রাম", "milligrams": "মিলিগ্রাম",
    "gram": "গ্রাম", "grams": "গ্রাম", "kilogram": "কিলোগ্রাম", "kilograms": "কিলোগ্রাম",
    "nanofarad": "ন্যানোফ্যারাড", "nanofarads": "ন্যানোফ্যারাড", "microfarad": "মাইক্রোফ্যারাড", "microfarads": "মাইক্রোফ্যারাড",
    "picofarad": "পিকোফ্যারাড", "picofarads": "পিকোফ্যারাড", "nanomolar": "ন্যানোমোলার", "micromolar": "মাইক্রোমোলার",
    "nanosecond": "ন্যানোসেকেন্ড", "nanoseconds": "ন্যানোসেকেন্ড", "microsecond": "মাইক্রোসেকেন্ড", "microseconds": "মাইক্রোসেকেন্ড",
    "second": "সেকেন্ড", "seconds": "সেকেন্ড", "newton": "নিউটন", "newtons": "নিউটন",
    "micronewton": "মাইক্রোনিউটন", "micronewtons": "মাইক্রোনিউটন", "tesla": "টেসলা", "gauss": "গাউস"
  },
  "convertPage": {
    "h1Pattern": "{from} থেকে {to} রূপান্তরকারী",
    "introPattern": "সঠিক বৈজ্ঞানিক সূত্র এবং রূপান্তর সারণী সহ অবিলম্বে {from} ({fromSymbol}) কে {to} ({toSymbol}) তে রূপান্তর করুন।",
    "formulaHeading": "রূপান্তরের সূত্র", "formulaDesc": "{from} ({fromSymbol}) থেকে {to} ({toSymbol}) তে রূপান্তর করতে, {factor} দিয়ে গুণ করুন (অথবা {divisor} দিয়ে ভাগ করুন)।",
    "shortcutText": "শর্টকাট: দশমিক বিন্দু তিন ঘর বামে সরান।", "quickTableHeading": "দ্রুত রেফারেন্স টেবিল", "faqHeading": "সাধারণ প্রশ্নাবলী",
    "faqQ1": "১ {from} এ কত {to} হয়?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "১০০০ {from} এ কত {to} হয়?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "২৫০০ {from} এ কত {to} হয়?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "সম্পর্কিত মেট্রিক রূপান্তরকারী"
  },
  "siPrefixPage": {
    "badge": "মেট্রিক রেফারেন্স", "title": "সম্পূর্ণ ২৪টি SI উপসর্গের গাইড ও ম্যাট্রিক্স",
    "subtitle": "আন্তর্জাতিক একক পদ্ধতি (SI) ৬০টি মাত্রায় ২৪টি মেট্রিক উপসর্গ সংজ্ঞায়িত করে।",
    "thPrefix": "উপসর্গ", "thSymbol": "প্রতীক", "thPower": "১০ এর ঘাত", "thScale": "স্কেলের নাম", "thMultiplier": "গুণক মান"
  },
  "chartsPage": {
    "badge": "মুদ্রণযোগ্য রেফারেন্স", "title": "ন্যানো থেকে মাইক্রো রূপান্তর চার্ট",
    "subtitle": "উচ্চ-নির্ভুল বৈজ্ঞানিক গণনার জন্য দ্রুত রেফারেন্স চার্ট।",
    "thScientific": "বৈজ্ঞানিক প্রতীক", "openCalc": "ইন্টারেক্টিভ ক্যালকুলেটর ও সূত্র খুলুন →"
  },
  "errorPage": {
    "badge": "৪০৪ ত্রুটি", "title": "স্থানাঙ্ক সীমার বাইরে",
    "desc": "অনুরোধ করা ন্যানোস্কেল পৃষ্ঠাটি পাওয়া যায়নি বা স্থানান্তরিত হয়েছে।",
    "returnHome": "হোমপেজে ফিরে যান", "converterBtn": "ন্যানো থেকে মাইক্রো কনভার্টার", "physicsBtn": "অ্যান্টিগ্র্যাভিটি পদার্থবিজ্ঞান হাব"
  }
}

print("RTL & Indic data loaded.")
