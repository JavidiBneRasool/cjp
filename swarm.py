import os
import requests
import json
import replicate
from dotenv import load_dotenv

# 1. SETUP
load_dotenv()
GROQ_KEY = os.getenv("GROQ_API_KEY")
REPLICATE_TOKEN = os.getenv("REPLICATE_API_TOKEN")

GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

def call_groq(system_prompt, user_prompt):
    headers = {
        "Authorization": f"Bearer {GROQ_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "model": "llama-3.3-70b-versatile",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ],
        "temperature": 0.8
    }
    try:
        response = requests.post(GROQ_URL, headers=headers, json=data)
        if response.status_code == 200:
            return response.json()['choices'][0]['message']['content']
        else:
            print(f"❌ Groq Error: {response.status_code}")
            return None
    except Exception as e:
        print(f"❌ Connection Error: {e}")
        return None

def generate_cjp_poster(prompt):
    try:
        print(f"🎨 Generating Visual: {str(prompt)[:50]}...")
        
        output = replicate.run(
            "black-forest-labs/flux-schnell",
            input={
                "prompt": f"Political propaganda poster, aggressive style, gritty newspaper texture, cockroach mascot in Kashmir, bold orange/black typography, {prompt}, high contrast, 9:16 aspect ratio",
                "aspect_ratio": "9:16",
                "output_format": "png",
                "num_outputs": 1
            }
        )
        
        image_url = output[0] if isinstance(output, list) else output
        print(f"✅ Image URL: {image_url}")
        
        img_data = requests.get(image_url).content
        filename = "cjp_latest_post.png"
        with open(filename, "wb") as f:
            f.write(img_data)
        print(f"💾 Saved as {filename}")
        return filename
    except Exception as e:
        print(f"❌ Image Error: {e}")
        return None

def run_swarm_cycle():
    print("🐳 CJP SWARM ACTIVATED (Lightweight Engine)...")
    
    # 🕵️ SCOUT
    print("🕵️ Scout gathering intel...")
    scout_report = call_groq(
        "You are the Kashmir Intelligence Scout. Find a pressing systemic issue in J&K (power crisis, unemployment).",
        "What is the most viral systemic failure in Kashmir right now?"
    )
    if not scout_report: return

    # ✍️ WRITER
    print("✍️ Propaganda Chief writing content...")
    writer_content = call_groq(
        "You are the CJP Propaganda Chief. Write an aggressive, satirical caption. Headline: 'CJP HAS ENTERED THE SYSTEM'.",
        f"Intel: {scout_report}"
    )
    if not writer_content: return

    # 🎨 ARTIST
    print("🎨 Visual Agitator designing prompt...")
    image_prompt = call_groq(
        "You are the Visual Agitator. Create a gritty 1-sentence image prompt for a political poster.",
        f"Content: {writer_content}"
    )
    if not image_prompt: return

    print("\n==================================")
    print("📢 DISPATCH:")
    print(writer_content)
    print("==================================\n")

    # 🚀 GENERATE
    generate_cjp_poster(image_prompt)
    print("✅ Swarm Cycle Complete.")

if __name__ == "__main__":
    run_swarm_cycle()
