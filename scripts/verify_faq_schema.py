import json
import re

with open('dist/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

matches = re.findall(r'<script\s+type="application/ld\+json">([\s\S]*?)</script>', text)
for m in matches:
    try:
        data = json.loads(m)
        if data.get('@type') == 'FAQPage':
            print('Found FAQPage Schema in dist/index.html with', len(data.get('mainEntity', [])), 'questions:')
            for q in data.get('mainEntity', []):
                print('  - Q:', q.get('name'))
    except Exception as e:
        pass
