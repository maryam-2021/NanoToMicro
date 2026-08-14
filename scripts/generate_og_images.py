import os
import json
from PIL import Image, ImageDraw, ImageFont

LOCALES_FILE = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src\i18n\config.ts"
OUTPUT_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public\og"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Parse locales from config.ts
with open(LOCALES_FILE, "r", encoding="utf-8") as f:
    text = f.read()

# Extract code and name
locales = []
for line in text.splitlines():
    if "code:" in line and "name:" in line:
        code_part = line.split("code: '")[1].split("'")[0]
        name_part = line.split("name: '")[1].split("'")[0]
        locales.append((code_part, name_part))

print(f"Generating OG images for {len(locales)} locales...")

for code, name in locales:
    # 1200x630 Dark Theme Image
    img = Image.new("RGB", (1200, 630), color="#070b12")
    draw = ImageDraw.Draw(img)

    # Accent Grid Pattern & Borders
    draw.rectangle([(20, 20), (1180, 610)], outline="#f59e0b", width=2)
    draw.rectangle([(28, 28), (1172, 602)], outline="#1e293b", width=1)

    # Badge Pill
    draw.rounded_rectangle([(80, 60), (450, 105)], radius=20, fill="#172554", outline="#38bdf8", width=1)
    
    try:
        font_badge = ImageFont.truetype("arial.ttf", 20)
        font_title = ImageFont.truetype("arialbd.ttf", 46)
        font_sub = ImageFont.truetype("arial.ttf", 24)
        font_scale = ImageFont.truetype("arialbd.ttf", 20)
        font_node = ImageFont.truetype("arial.ttf", 16)
    except Exception:
        font_badge = font_title = font_sub = font_scale = font_node = ImageFont.load_default()

    draw.text((105, 72), "1 µm = 1,000 nm  ·  SI METROLOGY", fill="#38bdf8", font=font_badge)

    # Title & Subtitle
    title_text = f"NanoToMicro  |  {name}"
    draw.text((80, 130), title_text, fill="#ffffff", font=font_title)
    
    sub_text = "Precision Metric SI Conversions & Peer-Reviewed Physics"
    draw.text((80, 195), sub_text, fill="#94a3b8", font=font_sub)

    # Visual Scale Continuum Box
    draw.rounded_rectangle([(80, 270), (1120, 520)], radius=16, fill="#0f172a", outline="#334155", width=1)

    # Scale Line
    draw.line([(140, 390), (1060, 390)], fill="#475569", width=4)
    # Highlight segment
    draw.line([(140, 390), (600, 390)], fill="#38bdf8", width=5)
    draw.line([(600, 390), (1060, 390)], fill="#f59e0b", width=5)

    # Scale Markers
    markers = [
        (140, "0.1 nm", "Atom (0.1 nm)", "#38bdf8"),
        (320, "2.5 nm", "DNA Helix (2.5 nm)", "#38bdf8"),
        (500, "100 nm", "Viruses (20-400 nm)", "#38bdf8"),
        (660, "500 nm", "Visible Light", "#fbbf24"),
        (840, "1 µm", "Bacteria Cell", "#f59e0b"),
        (1060, "100 µm", "Human Hair", "#f59e0b"),
    ]

    for x, top_label, bot_label, col in markers:
        draw.ellipse([(x-6, 390-6), (x+6, 390+6)], fill=col)
        draw.text((x-30, 350), top_label, fill=col, font=font_scale)
        draw.text((x-40, 415), bot_label, fill="#e2e8f0", font=font_node)

    # Domain Labels
    draw.text((140, 480), "◀  NANOSCALE DOMAIN (10⁻⁹ m)", fill="#38bdf8", font=font_node)
    draw.text((780, 480), "MICROSCALE DOMAIN (10⁻⁶ m)  ▶", fill="#f59e0b", font=font_node)

    # Footer Watermark
    draw.text((80, 555), "nanotomicro.com  ·  NIST & BIPM Compliant  ·  Zero Floating-Point Drift", fill="#64748b", font=font_node)

    out_path = os.path.join(OUTPUT_DIR, f"{code}.png")
    img.save(out_path, format="PNG")

print(f"Successfully generated all {len(locales)} localized OG images in {OUTPUT_DIR}")
