import os
from llama_cpp import Llama

# 1. Setup paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
README_PATH = os.path.join(BASE_DIR, "README.md")
OUTPUT_PATH = os.path.join(BASE_DIR, "translated_readme.md")
MODEL_PATH = os.path.join(BASE_DIR, "models", "qwen3-1.7b.gguf")

# 2. Load the 1.7B Qwen3 Model
print(f"--- Loading Model from {MODEL_PATH} ---")
llm = Llama(
    model_path=MODEL_PATH,
    n_ctx=4096, 
    verbose=False
)

# 3. Read the English Readme
if not os.path.exists(README_PATH):
    print("Error: README.md not found in root!")
    exit(1)

with open(README_PATH, "r", encoding="utf-8") as f:
    text_to_translate = f.read()

# 4. Professional Translation Prompt
prompt = f"""<|im_start|>system
You are a senior technical translator. 
Translate the following GitHub README into German.
Rules:
- Keep all Markdown syntax (tags, links, images, tables) exactly as they are.
- Keep technical terms like 'commits', 'workflow', or 'repository' if they are standard in German dev circles.
- Only output the translated German text.<|im_end|>
<|im_start|>user
Translate this:
{text_to_translate}<|im_end|>
<|im_start|>assistant
"""

# 5. Generate
print("--- Generating German Translation ---")
response = llm(
    prompt,
    max_tokens=2048,
    temperature=0.1, # Low temp for high accuracy
    stop=["<|im_end|>"]
)

translated_content = response['choices'][0]['text'].strip()

# 6. Write the result
with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    f.write(translated_content)

print(f"--- Success! Created {OUTPUT_PATH} ---")