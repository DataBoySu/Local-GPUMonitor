import json
from translate_seg import get_smart_chunks, merge_small_chunks

if __name__ == '__main__':
    with open('README.md', 'r', encoding='utf-8') as f:
        content = f.read()

    chunks = merge_small_chunks(get_smart_chunks(content))

    for i, (ctype, ctext) in enumerate(chunks, start=1):
        excerpt = ctext.replace('\n', '\\n')
        if len(excerpt) > 300:
            excerpt = excerpt[:300] + '...'
        print(f"--- CHUNK {i} ({ctype}) ---")
        print(excerpt)
        print()
