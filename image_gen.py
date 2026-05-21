import os
import replicate
from dotenv import load_dotenv

load_dotenv()

def generate_cjp_image(prompt_text):
    """
    Generates an image using Replicate based on the Artist agent's prompt.
    """
    if not os.getenv("REPLICATE_API_TOKEN"):
        print("❌ ERROR: REPLICATE_API_TOKEN missing in .env file.")
        return None

    # Enhance the prompt to match CJP style (in case the agent missed it)
    full_prompt = f"Political propaganda poster, aggressive style, texture of old newspaper, {prompt_text}, high contrast, black and orange colors, cockroach mascot --ar 4:5"
    
    print(f"🎨 Generating visual for prompt: '{prompt_text}'...")
    
    try:
        output = replicate.run(
            "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
            input={"prompt": full_prompt}
        )
        print("✅ Visual generated successfully!")
        return output[0] # Returns URL of the image
    except Exception as e:
        print(f"❌ Failed to generate image: {e}")
        return None

if __name__ == "__main__":
    # Test generation
    test_prompt = "Cockroach soldier holding a flag with CJP logo in Srinagar"
    url = generate_cjp_image(test_prompt)
    if url:
        print(f"Image URL: {url}")
