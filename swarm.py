import os
import requests
import json
import replicate
from dotenv import load_dotenv
from social_publisher import publish_dispatch

# 1. SETUP
load_dotenv()
GROQ_KEY = os.getenv("GROQ_API_KEY")
# Replicate is used as fallback or if specifically configured, 
# but Pollinations is default for free generation.

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
    """
    Generates gritty poster via Pollinations.ai (FREE)
    """
    try:
        # Clean the prompt for URL encoding
        clean_prompt = requests.utils.quote(prompt[:1000])
        
        # Pollinations.ai FREE API
        url = f"https://image.pollinations.ai/prompt/{clean_prompt}%20political%20propaganda%20poster%20cockroach%20mascot%20Kashmir%20aggressive%20orange%20black%20gritty%20texture?width=1080&height=1920&nologo=true&enhance=true"
        
        print(f"🎨 Generating visual: {prompt[:50]}...")
        
        response = requests.get(url, timeout=60)
        
        if response.status_code == 200:
            filename = "cjp_latest_post.png"
            with open(filename, "wb") as f:
                f.write(response.content)
            print(f"✅ Poster saved as {filename}")
            return filename
        else:
            print(f"❌ Image Engine Error: {response.status_code}")
            return None
            
    except Exception as e:
        print(f"❌ Image Exception: {e}")
        return None

def run_swarm_cycle():
    print("🐳 CJP SWARM ACTIVATED...")
    
    # AGENT 1: THE SCOUT
    print("🕵️ Scout gathering intel...")
    scout_report = call_groq(
        "You are the Kashmir Intelligence Scout. Find a pressing systemic issue in J&K (unemployment, power, corruption).",
        "Search for the most viral systemic failure in Kashmir this week."
    )
    if not scout_report: return

    # AGENT 2: THE WRITER
    print("✍️ Propaganda Chief writing content...")
    writer_content = call_groq(
        "You are the CJP Propaganda Chief. Write an aggressive, satirical Instagram caption. Start with 'CJP HAS ENTERED THE SYSTEM'. Use hashtags like #CJPKashmir #DigitalRebellion.",
        f"Intel: {scout_report}"
    )
    if not writer_content: return

    # AGENT 3: THE ARTIST
    print("🎨 Visual Agitator designing prompt...")
    image_prompt = call_groq(
        "You are the Visual Agitator. Create a gritty 1-sentence image prompt for a political poster focusing on a cockroach soldier vs the system.",
        f"Content: {writer_content}"
    )
    if not image_prompt: return

    print("\n==================================")
    print("📢 DISPATCH READY:")
    print(writer_content)
    print("==================================\n")

    # 🚀 GENERATE IMAGE
    image_path = generate_cjp_poster(image_prompt)
    
    # 📡 AUTO-PUBLISH
    if image_path:
        publish_dispatch(image_path, writer_content)
        print("\n✅ Swarm Cycle Complete.")
    else:
        print("\n⚠️ Dispatch generated but image failed. Skipping publish.")

if __name__ == "__main__":
    run_swarm_cycle()
