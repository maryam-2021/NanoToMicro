import os
from PIL import Image, ImageDraw, ImageFont

def generate_og():
    width = 1200
    height = 630
    img = Image.new('RGB', (width, height), color=(7, 11, 18))
    draw = ImageDraw.Draw(img)

    # Subtle grid lines
    for x in range(0, width, 40):
        draw.line([(x, 0), (x, height)], fill=(245, 158, 11, 8), width=1)
    for y in range(0, height, 40):
        draw.line([(0, y), (width, y)], fill=(245, 158, 11, 8), width=1)

    # Gradient border frame
    draw.rectangle([(20, 20), (width - 20, height - 20)], outline=(245, 158, 11, 60), width=2)

    # Load system font or default
    try:
        font_large = ImageFont.truetype("arialbd.ttf", 46)
        font_med = ImageFont.truetype("arialbd.ttf", 24)
        font_small = ImageFont.truetype("arial.ttf", 16)
        font_mono = ImageFont.truetype("consola.ttf", 15)
        font_mono_bold = ImageFont.truetype("consolab.ttf", 18)
    except Exception:
        font_large = font_med = font_small = font_mono = font_mono_bold = ImageFont.load_default()

    # Pill badge at top
    badge_text = "1 Nano = 0.001 Micro (Exact SI Metric Ratio)"
    badge_x, badge_y = 60, 60
    draw.rounded_rectangle([(badge_x, badge_y), (badge_x + 440, badge_y + 36)], radius=18, fill=(245, 158, 11, 30), outline=(245, 158, 11, 90), width=1)
    draw.text((badge_x + 20, badge_y + 8), badge_text, fill=(251, 191, 36), font=font_mono)

    # Headline
    draw.text((60, 115), "Nano to Micro Converter", fill=(255, 255, 255), font=font_large)
    draw.text((60, 175), "Precision SI Metric Ratios, Formulas & Evidence-Based Antigravity Research", fill=(203, 213, 225), font=font_med)

    # Scale Continuum Background Card
    card_x1, card_y1, card_x2, card_y2 = 60, 240, width - 60, 550
    draw.rounded_rectangle([(card_x1, card_y1), (card_x2, card_y2)], radius=16, fill=(15, 22, 35), outline=(255, 255, 255, 25), width=1)

    # Axis Bar
    axis_y = 380
    draw.rounded_rectangle([(100, axis_y - 4), (width - 100, axis_y + 4)], radius=4, fill=(245, 158, 11))

    # Center Marker (1 um = 1,000 nm)
    draw.line([(600, axis_y - 45), (600, axis_y + 45)], fill=(245, 158, 11), width=2)
    draw.rounded_rectangle([(520, axis_y - 75), (680, axis_y - 48)], radius=12, fill=(245, 158, 11, 40), outline=(245, 158, 11), width=1)
    draw.text((535, axis_y - 70), "1 µm = 1,000 nm", fill=(251, 191, 36), font=font_mono_bold)

    # Nodes on Scale
    nodes = [
        (130, "0.1 nm", "Water Molecule", (56, 189, 248)),
        (240, "2 nm", "Transistor Gate", (56, 189, 248)),
        (350, "10 nm", "DNA Helix", (129, 140, 248)),
        (460, "100 nm", "Viruses", (245, 158, 11)),
        (560, "500 nm", "Visible Light", (245, 158, 11)),
        (680, "1 µm", "Bacteria Cell", (245, 158, 11)),
        (820, "10 µm", "Red Blood Cell", (244, 63, 94)),
        (980, "100 µm", "Human Hair", (236, 72, 153)),
    ]

    for nx, val, label, col in nodes:
        # node circle
        draw.ellipse([(nx - 7, axis_y - 7), (nx + 7, axis_y + 7)], fill=(7, 11, 18), outline=col, width=3)
        # value above
        draw.text((nx - 24, axis_y - 32), val, fill=col, font=font_mono_bold)
        # label below
        draw.text((nx - 35, axis_y + 20), label, fill=(248, 250, 252), font=font_small)

    # Footer note
    draw.text((60, 580), "nanotomicro.com · Zero Floating-Point Drift · NIST & BIPM Metric Compliant", fill=(148, 163, 184), font=font_mono)

    os.makedirs('public', exist_ok=True)
    img.save('public/og-image.png', 'PNG')
    print("Created public/og-image.png (1200x630)")

if __name__ == '__main__':
    generate_og()
