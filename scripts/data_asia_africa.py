# scripts/data_asia_africa.py

ASIA_AFRICA_DATA = {}

# Japanese (ja)
ASIA_AFRICA_DATA["ja"] = {
  "units": {
    "nano": "ナノ", "micro": "マイクロ", "pico": "ピコ",
    "nanometer": "ナノメートル", "nanometers": "ナノメートル", "micrometer": "マイクロメートル", "micrometers": "マイクロメートル",
    "picometer": "ピコメートル", "picometers": "ピコメートル", "millimeter": "ミリメートル", "millimeters": "ミリメートル",
    "meter": "メートル", "meters": "メートル", "nanogram": "ナノグラム", "nanograms": "ナノグラム",
    "microgram": "マイクログラム", "micrograms": "マイクログラム", "milligram": "ミリグラム", "milligrams": "ミリグラム",
    "gram": "グラム", "grams": "グラム", "kilogram": "キログラム", "kilograms": "キログラム",
    "nanofarad": "ナノファラド", "nanofarads": "ナノファラド", "microfarad": "マイクロファラド", "microfarads": "マイクロファラド",
    "picofarad": "ピコファラド", "picofarads": "ピコファラド", "nanomolar": "ナノモラー", "micromolar": "マイクロモラー",
    "nanosecond": "ナノ秒", "nanoseconds": "ナノ秒", "microsecond": "マイクロ秒", "microseconds": "マイクロ秒",
    "second": "秒", "seconds": "秒", "newton": "ニュートン", "newtons": "ニュートン",
    "micronewton": "マイクロニュートン", "micronewtons": "マイクロニュートン", "tesla": "テスラ", "gauss": "ガウス"
  },
  "convertPage": {
    "h1Pattern": "{from}から{to}への変換ツール",
    "introPattern": "{from}（{fromSymbol}）を{to}（{toSymbol}）へ瞬時に変換。正確な科学的計算式、換算表、段階的なメートル法の解説を掲載しています。",
    "formulaHeading": "変換計算式", "formulaDesc": "{from}（{fromSymbol}）から{to}（{toSymbol}）に変換するには、{factor}を掛けるか（または{divisor}で割る）。",
    "shortcutText": "ショートカット：小数点を3桁左に移動します。", "quickTableHeading": "クイック換算表", "faqHeading": "よくある質問",
    "faqQ1": "1 {from} は何 {to} ですか？", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "1000 {from} は何 {to} ですか？", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "2500 {from} は何 {to} ですか？", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "関連するメートル法変換ツール"
  },
  "siPrefixPage": {
    "badge": "単位系リファレンス", "title": "全24種 SI接頭語完全ガイド＆マトリックス",
    "subtitle": "国際単位系（SI）はクエクト（10⁻³⁰）からクエタ（10³⁰）まで、60桁に及ぶ24種類の接頭語を規定しています。",
    "thPrefix": "接頭語", "thSymbol": "記号", "thPower": "10の累乗", "thScale": "スケール名", "thMultiplier": "倍率値"
  },
  "chartsPage": {
    "badge": "印刷用リファレンス", "title": "ナノからマイクロへの換算チャート",
    "subtitle": "高頻度の科学計算および実験室測定のためのクイックルックアップ表。",
    "thScientific": "指数表記", "openCalc": "インタラクティブ計算ツールと公式を開く →"
  },
  "errorPage": {
    "badge": "404 エラー", "title": "指定された座標が見つかりません",
    "desc": "リクエストされたナノスケールの計算またはドキュメントルートは存在しないか、SI連続体上で移動しました。",
    "returnHome": "ホームページに戻る", "converterBtn": "ナノからマイクロ変換ツール", "physicsBtn": "反重力物理学リサーチハブ"
  }
}

# Simplified Chinese (zh-CN)
ASIA_AFRICA_DATA["zh-CN"] = {
  "units": {
    "nano": "纳", "micro": "微", "pico": "皮",
    "nanometer": "纳米", "nanometers": "纳米", "micrometer": "微米", "micrometers": "微米",
    "picometer": "皮米", "picometers": "皮米", "millimeter": "毫米", "millimeters": "毫米",
    "meter": "米", "meters": "米", "nanogram": "纳克", "nanograms": "纳克",
    "microgram": "微克", "micrograms": "微克", "milligram": "毫克", "milligrams": "毫克",
    "gram": "克", "grams": "克", "kilogram": "千克", "kilograms": "千克",
    "nanofarad": "纳法", "nanofarads": "纳法", "microfarad": "微法", "microfarads": "微法",
    "picofarad": "皮法", "picofarads": "皮法", "nanomolar": "纳摩尔", "micromolar": "微摩尔",
    "nanosecond": "纳秒", "nanoseconds": "纳秒", "microsecond": "微秒", "microseconds": "微秒",
    "second": "秒", "seconds": "秒", "newton": "牛顿", "newtons": "牛顿",
    "micronewton": "微牛顿", "micronewtons": "微牛顿", "tesla": "特斯拉", "gauss": "高斯"
  },
  "convertPage": {
    "h1Pattern": "{from}到{to}转换器",
    "introPattern": "即时将{from}（{fromSymbol}）转换为{to}（{toSymbol}），提供精确的科学公式、对照表和详细公制换算解析。",
    "formulaHeading": "换算公式", "formulaDesc": "要将{from}（{fromSymbol}）转换为{to}（{toSymbol}），乘以 {factor}（或除以 {divisor}）。",
    "shortcutText": "快捷算法：将小数点向左移动三位。", "quickTableHeading": "快速换算对照表", "faqHeading": "常见问题",
    "faqQ1": "1 {from}等于多少{to}？", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "1000 {from}等于多少{to}？", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "2500 {from}等于多少{to}？", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "相关公制换算器"
  },
  "siPrefixPage": {
    "badge": "公制标准参考", "title": "完整 24 个国际单位制 (SI) 词头速查矩阵",
    "subtitle": "国际单位制（SI）定义了从 10⁻³⁰ 到 10³⁰ 跨越 60 个数量级的 24 个词头。",
    "thPrefix": "词头", "thSymbol": "符号", "thPower": "10 的幂", "thScale": "数量级名称", "thMultiplier": "乘数值"
  },
  "chartsPage": {
    "badge": "打印版换算表", "title": "纳微公制换算图表",
    "subtitle": "适用于高频科学实验与微纳制造的高精度对照矩阵。",
    "thScientific": "科学计数法", "openCalc": "打开交互式计算器与公式 →"
  },
  "errorPage": {
    "badge": "404 错误", "title": "坐标超出范围",
    "desc": "您请求的纳米级计算或文档路由不存在，或已在 SI 公制连续体中移位。",
    "returnHome": "返回首页", "converterBtn": "纳到微转换器", "physicsBtn": "反重力物理研究中心"
  }
}

# Traditional Chinese (zh-TW)
ASIA_AFRICA_DATA["zh-TW"] = {
  "units": {
    "nano": "奈", "micro": "微", "pico": "皮",
    "nanometer": "奈米", "nanometers": "奈米", "micrometer": "微米", "micrometers": "微米",
    "picometer": "皮米", "picometers": "皮米", "millimeter": "毫米", "millimeters": "毫米",
    "meter": "公尺", "meters": "公尺", "nanogram": "奈克", "nanograms": "奈克",
    "microgram": "微克", "micrograms": "微克", "milligram": "毫克", "milligrams": "毫克",
    "gram": "公克", "grams": "公克", "kilogram": "公斤", "kilograms": "公斤",
    "nanofarad": "奈法拉", "nanofarads": "奈法拉", "microfarad": "微法拉", "microfarads": "微法拉",
    "picofarad": "皮法拉", "picofarads": "皮法拉", "nanomolar": "奈莫耳", "micromolar": "微莫耳",
    "nanosecond": "奈秒", "nanoseconds": "奈秒", "microsecond": "微秒", "microseconds": "微秒",
    "second": "秒", "seconds": "秒", "newton": "牛頓", "newtons": "牛頓",
    "micronewton": "微牛頓", "micronewtons": "微牛頓", "tesla": "特斯拉", "gauss": "高斯"
  },
  "convertPage": {
    "h1Pattern": "{from}到{to}轉換器",
    "introPattern": "即時將{from}（{fromSymbol}）轉換為{to}（{toSymbol}），提供精確的科學公式、對照表和公制換算說明。",
    "formulaHeading": "換算公式", "formulaDesc": "要將{from}（{fromSymbol}）轉換為{to}（{toSymbol}），乘以 {factor}（或除以 {divisor}）。",
    "shortcutText": "快捷算法：將小數點向左移動三位。", "quickTableHeading": "快速換算對照表", "faqHeading": "常見問題",
    "faqQ1": "1 {from}等於多少{to}？", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "1000 {from}等於多少{to}？", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "2500 {from}等於多少{to}？", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "相關公制轉換器"
  },
  "siPrefixPage": {
    "badge": "公制標準參考", "title": "完整 24 個國際單位制 (SI) 字首速查矩陣",
    "subtitle": "國際單位制（SI）定義了從 10⁻³⁰ 到 10³⁰ 跨越 60 個數量級的 24 個字首。",
    "thPrefix": "字首", "thSymbol": "符號", "thPower": "10 的次方", "thScale": "數量級名稱", "thMultiplier": "乘數值"
  },
  "chartsPage": {
    "badge": "列印版換算表", "title": "奈微公制換算圖表",
    "subtitle": "適用於高頻科學實驗與微奈米製造的高精度對照矩陣。",
    "thScientific": "科學記號", "openCalc": "打開互動式計算器與公式 →"
  },
  "errorPage": {
    "badge": "404 錯誤", "title": "座標超出範圍",
    "desc": "您請求的奈米級計算或文件路徑不存在，或已在 SI 公制連續體中移位。",
    "returnHome": "返回首頁", "converterBtn": "奈到微轉換器", "physicsBtn": "反重力物理研究中心"
  }
}

# Korean (ko)
ASIA_AFRICA_DATA["ko"] = {
  "units": {
    "nano": "나노", "micro": "마이크로", "pico": "피코",
    "nanometer": "나노미터", "nanometers": "나노미터", "micrometer": "마이크로미터", "micrometers": "마이크로미터",
    "picometer": "피코미터", "picometers": "피코미터", "millimeter": "밀리미터", "millimeters": "밀리미터",
    "meter": "미터", "meters": "미터", "nanogram": "나노그램", "nanograms": "나노그램",
    "microgram": "마이크로그램", "micrograms": "마이크로그램", "milligram": "밀리그램", "milligrams": "밀리그램",
    "gram": "그램", "grams": "그램", "kilogram": "킬로그램", "kilograms": "킬로그램",
    "nanofarad": "나노패럿", "nanofarads": "나노패럿", "microfarad": "마이크로패럿", "microfarads": "마이크로패럿",
    "picofarad": "피코패럿", "picofarads": "피코패럿", "nanomolar": "나노몰", "micromolar": "마이크로몰",
    "nanosecond": "나노초", "nanoseconds": "나노초", "microsecond": "마이크로초", "microseconds": "마이크로초",
    "second": "초", "seconds": "초", "newton": "뉴턴", "newtons": "뉴턴",
    "micronewton": "마이크로뉴턴", "micronewtons": "마이크로뉴턴", "tesla": "테슬라", "gauss": "가우스"
  },
  "convertPage": {
    "h1Pattern": "{from}에서 {to} 변환기",
    "introPattern": "{from} ({fromSymbol})을(를) {to} ({toSymbol})(으)로 즉시 변환하세요. 정확한 과학 공식, 변환표 및 단계별 미터법 설명이 제공됩니다.",
    "formulaHeading": "변환 공식", "formulaDesc": "{from} ({fromSymbol})에서 {to} ({toSymbol})(으)로 변환하려면 {factor}을(를) 곱하거나 {divisor}(으)로 나눕니다.",
    "shortcutText": "단축 팁: 소수점을 왼쪽으로 세 자리 이동합니다.", "quickTableHeading": "빠른 참조 표", "faqHeading": "자주 묻는 질문",
    "faqQ1": "1 {from}은(는) 몇 {to}인가요?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "1000 {from}은(는) 몇 {to}인가요?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "2500 {from}은(는) 몇 {to}인가요?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "관련 미터법 변환기"
  },
  "siPrefixPage": {
    "badge": "미터법 표준 참조", "title": "24개 SI 접두사 완전 가이드 및 매트릭스",
    "subtitle": "국제단위계(SI)는 퀘크토(10⁻³⁰)부터 퀘타(10³⁰)까지 60자릿수에 걸쳐 24개 접두사를 정의합니다.",
    "thPrefix": "접두사", "thSymbol": "기호", "thPower": "10의 거듭제곱", "thScale": "단위 규모", "thMultiplier": "배율 값"
  },
  "chartsPage": {
    "badge": "인쇄용 참조표", "title": "나노-마이크로 변환 차트",
    "subtitle": "고정밀 과학 계산 및 실험실 측정을 위한 빠른 조회 차트.",
    "thScientific": "공학용 지수 표기법", "openCalc": "대화형 계산기 및 공식 열기 →"
  },
  "errorPage": {
    "badge": "404 오류", "title": "좌표 범위를 벗어남",
    "desc": "요청하신 나노스케일 계산 또는 문서 경로가 존재하지 않거나 SI 연속체에서 이동되었습니다.",
    "returnHome": "홈페이지로 돌아가기", "converterBtn": "나노-마이크로 변환기", "physicsBtn": "반중력 물리학 연구 허브"
  }
}

# Indonesian (id)
ASIA_AFRICA_DATA["id"] = {
  "units": {
    "nano": "nano", "micro": "mikro", "pico": "piko",
    "nanometer": "nanometer", "nanometers": "nanometer", "micrometer": "mikrometer", "micrometers": "mikrometer",
    "picometer": "pikometer", "picometers": "pikometer", "millimeter": "milimeter", "millimeters": "milimeter",
    "meter": "meter", "meters": "meter", "nanogram": "nanogram", "nanograms": "nanogram",
    "microgram": "mikrogram", "micrograms": "mikrogram", "milligram": "miligram", "milligrams": "miligram",
    "gram": "gram", "grams": "gram", "kilogram": "kilogram", "kilograms": "kilogram",
    "nanofarad": "nanofarad", "nanofarads": "nanofarad", "microfarad": "mikrofarad", "microfarads": "mikrofarad",
    "picofarad": "pikofarad", "picofarads": "pikofarad", "nanomolar": "nanomolar", "micromolar": "mikromolar",
    "nanosecond": "nanodetik", "nanoseconds": "nanodetik", "microsecond": "mikrodetik", "microseconds": "mikrodetik",
    "second": "detik", "seconds": "detik", "newton": "newton", "newtons": "newton",
    "micronewton": "mikronewton", "micronewtons": "mikronewton", "tesla": "tesla", "gauss": "gauss"
  },
  "convertPage": {
    "h1Pattern": "Konverter {from} ke {to}",
    "introPattern": "Konversikan {from} ({fromSymbol}) ke {to} ({toSymbol}) secara instan dengan rumus ilmiah yang tepat, tabel konversi, dan penjelasan langkah demi langkah.",
    "formulaHeading": "Rumus Konversi", "formulaDesc": "Untuk mengonversi dari {from} ({fromSymbol}) ke {to} ({toSymbol}), kalikan dengan {factor} (atau bagi dengan {divisor}).",
    "shortcutText": "Pintasan: geser koma desimal tiga tempat ke kiri.", "quickTableHeading": "Tabel Referensi Cepat", "faqHeading": "Pertanyaan yang Sering Diajukan",
    "faqQ1": "Berapa 1 {from} dalam {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Berapa 1000 {from} dalam {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Berapa 2500 {from} dalam {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Konverter Metrik Terkait"
  },
  "siPrefixPage": {
    "badge": "Referensi Metrik", "title": "Panduan Lengkap & Matriks 24 Awalan SI",
    "subtitle": "Sistem Satuan Internasional (SI) mendefinisikan 24 awalan metrik dalam rentang 60 tingkat besaran.",
    "thPrefix": "Awalan", "thSymbol": "Simbol", "thPower": "Pangkat 10", "thScale": "Nama Skala", "thMultiplier": "Nilai Pengali"
  },
  "chartsPage": {
    "badge": "Referensi Cetak", "title": "Bagan Konversi Nano ke Mikro",
    "subtitle": "Matriks referensi cepat untuk perhitungan ilmiah dan laboratorium.",
    "thScientific": "Notasi Ilmiah", "openCalc": "Buka Kalkulator Interaktif & Rumus →"
  },
  "errorPage": {
    "badge": "Kesalahan 404", "title": "Koordinat di Luar Jangkauan",
    "desc": "Rute perhitungan skala nano yang Anda minta tidak ada atau telah dipindahkan dalam kontinum metrik SI.",
    "returnHome": "Kembali ke Beranda", "converterBtn": "Konverter Nano ke Mikro", "physicsBtn": "Pusat Fisika Antigravitasi"
  }
}

# Vietnamese (vi)
ASIA_AFRICA_DATA["vi"] = {
  "units": {
    "nano": "nano", "micro": "micro", "pico": "pico",
    "nanometer": "nanomet", "nanometers": "nanomet", "micrometer": "micromet", "micrometers": "micromet",
    "picometer": "picomet", "picometers": "picomet", "millimeter": "milimet", "millimeters": "milimet",
    "meter": "met", "meters": "met", "nanogram": "nanogam", "nanograms": "nanogam",
    "microgram": "microgam", "micrograms": "microgam", "milligram": "miligam", "milligrams": "miligam",
    "gram": "gam", "grams": "gam", "kilogram": "kilogam", "kilograms": "kilogam",
    "nanofarad": "nanofarad", "nanofarads": "nanofarad", "microfarad": "microfarad", "microfarads": "microfarad",
    "picofarad": "picofarad", "picofarads": "picofarad", "nanomolar": "nanomolar", "micromolar": "micromolar",
    "nanosecond": "nanogiây", "nanoseconds": "nanogiây", "microsecond": "microgiây", "microseconds": "microgiây",
    "second": "giây", "seconds": "giây", "newton": "newton", "newtons": "newton",
    "micronewton": "micronewton", "micronewtons": "micronewton", "tesla": "tesla", "gauss": "gauss"
  },
  "convertPage": {
    "h1Pattern": "Công cụ chuyển đổi {from} sang {to}",
    "introPattern": "Chuyển đổi tức thì {from} ({fromSymbol}) sang {to} ({toSymbol}) với công thức khoa học chính xác, bảng chuyển đổi và giải thích chi tiết.",
    "formulaHeading": "Công thức chuyển đổi", "formulaDesc": "Để chuyển đổi từ {from} ({fromSymbol}) sang {to} ({toSymbol}), nhân với {factor} (hoặc chia cho {divisor}).",
    "shortcutText": "Mẹo nhanh: dịch chuyển dấu thập phân ba chữ số sang trái.", "quickTableHeading": "Bảng tra cứu nhanh", "faqHeading": "Câu hỏi thường gặp",
    "faqQ1": "1 {from} bằng bao nhiêu {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "1000 {from} bằng bao nhiêu {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "2500 {from} bằng bao nhiêu {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Công cụ chuyển đổi số đo liên quan"
  },
  "siPrefixPage": {
    "badge": "Tham chiếu hệ mét", "title": "Hướng dẫn đầy đủ & ma trận 24 tiền tố SI",
    "subtitle": "Hệ đo lường quốc tế (SI) định nghĩa 24 tiền tố trải rộng trên 60 bậc độ lớn.",
    "thPrefix": "Tiền tố", "thSymbol": "Ký hiệu", "thPower": "Lũy thừa của 10", "thScale": "Tên bậc", "thMultiplier": "Giá trị nhân"
  },
  "chartsPage": {
    "badge": "Bảng in sẵn", "title": "Bảng chuyển đổi Nano sang Micro",
    "subtitle": "Ma trận tra cứu nhanh cho các phép tính khoa học và phòng thí nghiệm.",
    "thScientific": "Ký hiệu khoa học", "openCalc": "Mở máy tính tương tác & công thức →"
  },
  "errorPage": {
    "badge": "Lỗi 404", "title": "Tọa độ ngoài phạm vi",
    "desc": "Trang tính toán quy mô nano bạn yêu cầu không tồn tại hoặc đã được di chuyển.",
    "returnHome": "Quay lại trang chủ", "converterBtn": "Chuyển đổi Nano sang Micro", "physicsBtn": "Trung tâm nghiên cứu lực phản trọng lực"
  }
}

# Swahili (sw)
ASIA_AFRICA_DATA["sw"] = {
  "units": {
    "nano": "nano", "micro": "maikro", "pico": "piko",
    "nanometer": "nanomita", "nanometers": "nanomita", "micrometer": "maikromita", "micrometers": "maikromita",
    "picometer": "pikomita", "picometers": "pikomita", "millimeter": "milimita", "millimeters": "milimita",
    "meter": "mita", "meters": "mita", "nanogram": "nanograme", "nanograms": "nanograme",
    "microgram": "maikrograme", "micrograms": "maikrograme", "milligram": "miligrame", "milligrams": "miligrame",
    "gram": "grame", "grams": "grame", "kilogram": "kilograme", "kilograms": "kilograme",
    "nanofarad": "nanofaradi", "nanofarads": "nanofaradi", "microfarad": "maikrofaradi", "microfarads": "maikrofaradi",
    "picofarad": "pikofaradi", "picofarads": "pikofaradi", "nanomolar": "nanomola", "micromolar": "maikromola",
    "nanosecond": "nanosekunde", "nanoseconds": "nanosekunde", "microsecond": "maikrosekunde", "microseconds": "maikrosekunde",
    "second": "sekunde", "seconds": "sekunde", "newton": "newton", "newtons": "newton",
    "micronewton": "maikronewton", "micronewtons": "maikronewton", "tesla": "tesla", "gauss": "gauss"
  },
  "convertPage": {
    "h1Pattern": "Kigeuzi cha {from} hadi {to}",
    "introPattern": "Badilisha {from} ({fromSymbol}) kuwa {to} ({toSymbol}) papo hapo kwa fomula sahihi za kisayansi na jedwali za ubadilishaji.",
    "formulaHeading": "Fomula ya Ubadilishaji", "formulaDesc": "Ili kubadilisha kutoka {from} ({fromSymbol}) hadi {to} ({toSymbol}), zidisha kwa {factor} (au gawa kwa {divisor}).",
    "shortcutText": "Njia ya mkato: sogeza nukta ya desimali nafasi tatu kushoto.", "quickTableHeading": "Jedwali la Marejeleo ya Haraka", "faqHeading": "Maswali Yanayoulizwa Mara kwa Mara",
    "faqQ1": "Je, 1 {from} ni ngapi katika {to}?", "faqA1": "1 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ2": "Je, 1000 {from} ni ngapi katika {to}?", "faqA2": "1000 {fromSymbol} = {toVal} {toSymbol}.",
    "faqQ3": "Je, 2500 {from} ni ngapi katika {to}?", "faqA3": "2500 {fromSymbol} = {toVal} {toSymbol}.",
    "relatedHeading": "Vigeuzi Vinavyohusiana vya Metriki"
  },
  "siPrefixPage": {
    "badge": "Rejeleo la Vipimo", "title": "Mwongozo Kamili wa Viambishi Awali 24 vya SI",
    "subtitle": "Mfumo wa Kimataifa wa Vipimo (SI) unafafanua viambishi awali 24 vya metriki.",
    "thPrefix": "Kiambishi Awali", "thSymbol": "Alama", "thPower": "Kipeuo cha 10", "thScale": "Jina la Mizani", "thMultiplier": "Kuzidisha"
  },
  "chartsPage": {
    "badge": "Rejeleo la Kuchapishwa", "title": "Chati za Ubadilishaji wa Nano hadi Maikro",
    "subtitle": "Chati za marejeleo ya haraka kwa mahesabu ya kisayansi na maabara.",
    "thScientific": "Nukuu ya Kisayansi", "openCalc": "Fungua Kikokotoo na Fomula →"
  },
  "errorPage": {
    "badge": "Hitilafu 404", "title": "Kipimo Kiko Nje ya Masafa",
    "desc": "Ukurasa wa mahesabu ya nanoscale uliyouliza haupo au umehamishwa.",
    "returnHome": "Rudi kwenye Ukurasa Mkuu", "converterBtn": "Kigeuzi cha Nano hadi Maikro", "physicsBtn": "Kituo cha Fizikia ya Kuzuia Mvuto"
  }
}

print("Asia & Africa data loaded.")
