import json

log_path = r'C:\Users\Admin\.gemini\antigravity\brain\9d0a7621-1604-4a64-9cd1-52e313521046\.system_generated\logs\transcript_full.jsonl'
best_html = ''

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        if 'content' in data:
            content = data['content']
            if '<section class="schedule-offers">' in content and '<footer class="footer">' in content:
                best_html = content

with open('d:/CUT/recovered_index.txt', 'w', encoding='utf-8') as f:
    f.write(best_html)
