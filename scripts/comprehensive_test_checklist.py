# scripts/comprehensive_test_checklist.py
import os
import re
import json

DIST_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\dist"

results = {
    "total_pages": 0,
    "pages_without_404": True,
    "breadcrumbs_present": True,
    "canonical_present": True,
    "sitemap_present": False,
    "robots_present": False,
    "meta_viewport_present": True,
    "images_have_alt": True,
    "schema_valid": True,
    "unique_titles": set(),
    "broken_internal_links": 0,
    "physics_pages": [],
    "converters_working": True,
}

# Check robots and sitemaps
if os.path.exists(os.path.join(DIST_DIR, "robots.txt")):
    results["robots_present"] = True

if os.path.exists(os.path.join(DIST_DIR, "sitemap.xml")) and os.path.exists(os.path.join(DIST_DIR, "sitemap-index.xml")):
    results["sitemap_present"] = True

all_html_files = []
for root, dirs, files in os.walk(DIST_DIR):
    for f in files:
        if f.endswith(".html"):
            all_html_files.append(os.path.join(root, f))

results["total_pages"] = len(all_html_files)

for filepath in all_html_files:
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    rel_path = os.path.relpath(filepath, DIST_DIR).replace("\\", "/")

    # Check viewport
    if '<meta name="viewport"' not in content:
        results["meta_viewport_present"] = False

    # Check canonical
    if '<link rel="canonical"' not in content:
        results["canonical_present"] = False

    # Check breadcrumbs
    if 'aria-label="Breadcrumb"' not in content and 'class="breadcrumb' not in content:
        # Check if homepage
        if rel_path != "index.html" and not rel_path.endswith("/index.html") and "/" in rel_path:
            results["breadcrumbs_present"] = False

    # Check img alt
    img_matches = re.findall(r'<img\b[^>]*>', content, re.IGNORECASE)
    for img in img_matches:
        if 'alt=' not in img:
            results["images_have_alt"] = False

    # Check JSON-LD
    json_ld_matches = re.findall(r'<script type="application/ld\+json">([\s\S]*?)</script>', content)
    for script in json_ld_matches:
        try:
            json.loads(script)
        except Exception:
            results["schema_valid"] = False

    # Track physics pages
    if "physics/" in rel_path:
        results["physics_pages"].append(rel_path)

print("=== CHECKLIST VERIFICATION SUMMARY ===")
print(f"Total HTML pages audited: {results['total_pages']}")
print(f"Robots.txt present: {results['robots_present']}")
print(f"Sitemap.xml & index present: {results['sitemap_present']}")
print(f"Mobile Viewport on all pages: {results['meta_viewport_present']}")
print(f"Canonical Tags on all pages: {results['canonical_present']}")
print(f"Breadcrumbs present across sub-pages: {results['breadcrumbs_present']}")
print(f"All images have alt tags: {results['images_have_alt']}")
print(f"Schema.org JSON-LD valid: {results['schema_valid']}")
print(f"Physics Authority Pages ({len(results['physics_pages'])}):")
for p in sorted(results["physics_pages"]):
    print(f"  - {p}")
