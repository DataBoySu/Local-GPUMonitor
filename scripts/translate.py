import os
import re
import argparse
from llama_cpp import Llama

LANG_MAP = {
    "de": "German", 
    "fr": "French", 
    "es": "Spanish",
    "ja": "Japanese", 
    "zh": "Chinese(Simplified)",
    "ru": "Russian", 
    "pt": "Portuguese", 
    "ko": "Korean",
}

parser = argparse.ArgumentParser()
parser.add_argument("--lang", type=str, required=True)
args = parser.parse_args()
target_lang_name = LANG_MAP.get(args.lang, "English")

# Path Configuration
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
README_PATH = os.path.join(BASE_DIR, "README.md")
OUTPUT_DIR = os.path.join(BASE_DIR, "locales")
OUTPUT_PATH = os.path.join(OUTPUT_DIR, f"README.{args.lang}.md")
MODEL_PATH = os.path.join(BASE_DIR, "models", "aya-expanse-8b-q4_k_s.gguf")

os.makedirs(OUTPUT_DIR, exist_ok=True)
llm = Llama(model_path=MODEL_PATH, n_ctx=6144, n_threads=2, verbose=False)

with open(README_PATH, "r", encoding="utf-8") as f:
    original_text = f.read()

# --- PRE-PROCESSING: Protect Navigation Bar ---
nav_match = re.search(r'(<div align="center">.*?</div>)', original_text, re.DOTALL)
nav_placeholder = "[NAV_BAR_PROTECTED_BLOCK]"
text_to_translate = original_text
if nav_match:
    text_to_translate = text_to_translate.replace(nav_match.group(1), nav_placeholder)

# Refined Prompt for CJK and Technical Nuance
prompt = f"""<|START_OF_TURN_TOKEN|><|SYSTEM_TOKEN|>
You are a professional technical translator. Translate this GitHub README into {target_lang_name}.
CRITICAL RULES:
1. **Badges**: Do NOT translate text inside `![...]` or `(...)` for image badges.
2. **Standard Terms**: Keep terms like GPU, VRAM, CLI, API, CUDA, and Docker in English.
3. **Context**: 
   - 'Enforcement' = Policy restriction/application (JA: 制限/強制, ZH: 强制执行).
   - 'Headless' = Servers without a display (JA: ヘッドレス, ZH: 无头).
   - 'Agnostic' = Independence (JA: 非依存, ZH: 无关性).
4. **Placeholders**: Return any text like '{nav_placeholder}' exactly as is.
5. **Output**: ONLY the translation. No conversational filler.<|END_OF_TURN_TOKEN|>
<|START_OF_TURN_TOKEN|><|USER_TOKEN|>
{text_to_translate}<|END_OF_TURN_TOKEN|>
<|START_OF_TURN_TOKEN|><|CHATBOT_TOKEN|>"""

response = llm(prompt, max_tokens=6144, temperature=0, stop=["<|END_OF_TURN_TOKEN|>"])
translated_content = response['choices'][0]['text'].strip()

# --- POST-PROCESSING ---

# 1. Restore Navigation Bar
if nav_match:
    translated_content = translated_content.replace(nav_placeholder, nav_match.group(1))

# 2. Advanced Badge Restoration (Key-based)
# This handles cases where the LLM translates the URL parameters
badge_keys = ["license", "python", "version", "platform", "cuda"]
for key in badge_keys:
    # Find the original badge line for this key
    orig_badge = re.search(rf'(!\[.*?\]\(https://img\.shields\.io/badge/{key}.*?\))', original_text, re.I)
    if orig_badge:
        # Find and replace the translated version in the output
        translated_content = re.sub(rf'!\[.*?\]\(https://img\.shields\.io/badge/{key}.*?\)', orig_badge.group(1), translated_content, flags=re.I)

# 3. Path Correction (Support single and double quotes)
translated_content = re.sub(r'(\[.*?\]\()(?!(?:http|/|#|\.\./|locales/))', r'\1../', translated_content)
translated_content = re.sub(r'((?:src|href)=["\'])(?!(?:http|/|#|\.\./|locales/))', r'\1../', translated_content)
translated_content = re.sub(r'(\[.*?\]\()locales/', r'\1', translated_content)
translated_content = re.sub(r'((?:src|href)=["\'])locales/', r'\1', translated_content)

with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    f.write(translated_content)