# scripts/inject_reading_progress.py
import os
import re

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"

PROGRESS_HTML = """<div class="progress-bar" id="readingProgress" style="height: 3px; background: linear-gradient(90deg, #4fc3f7, #1a1a2e); position: fixed; top: 0; left: 0; width: 0%; z-index: 1000;"></div>

<script>
window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  const bar = document.getElementById('readingProgress');
  if (bar) bar.style.width = progress + '%';
});
</script>"""

count = 0
for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.endswith(".html"):
            filepath = os.path.join(root, f)
            with open(filepath, "r", encoding="utf-8") as fp:
                content = fp.read()

            if 'id="readingProgress"' not in content:
                content = re.sub(r'<body[^>]*>', r'\g<0>\n  ' + PROGRESS_HTML, content, count=1)
                with open(filepath, "w", encoding="utf-8") as fp:
                    fp.write(content)
                count += 1

print(f"Injected reading progress bar into {count} pages in public/")
