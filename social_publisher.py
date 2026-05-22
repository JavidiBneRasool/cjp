import os
import telebot
from instagrapi import Client
from dotenv import load_dotenv

load_dotenv()

class TelegramPublisher:
    def __init__(self):
        self.token = os.getenv("TELEGRAM_BOT_TOKEN")
        self.chat_id = os.getenv("TELEGRAM_CHAT_ID", "@cjpkashmir")
        if not self.token:
            print("⚠️ TELEGRAM_BOT_TOKEN not found in .env")
            self.bot = None
        else:
            self.bot = telebot.TeleBot(self.token)

    def publish(self, image_path, caption):
        if not self.bot: return False
        try:
            print(f"📡 Telegram: Sending to {self.chat_id}...")
            with open(image_path, 'rb') as photo:
                self.bot.send_photo(self.chat_id, photo, caption=caption)
            print("✅ Telegram: Successfully posted.")
            return True
        except Exception as e:
            print(f"❌ Telegram Error: {e}")
            return False

class InstagramPublisher:
    def __init__(self):
        self.username = os.getenv("IG_USERNAME")
        self.password = os.getenv("IG_PASSWORD")
        self.client = None
        self.logged_in = False

    def login(self):
        if not self.username or not self.password:
            print("⚠️ IG_USERNAME or IG_PASSWORD not found in .env")
            return False
        try:
            from instagrapi import Client
            self.client = Client()
            print(f"📡 Instagram: Logging in as @{self.username}...")
            self.client.login(self.username, self.password)
            self.logged_in = True
            return True
        except ImportError:
            print("❌ instagrapi not installed. Skipping Instagram.")
            return False
        except Exception as e:
            print(f"❌ Instagram Login Error: {e}")
            return False

    def publish(self, image_path, caption):
        if not self.logged_in and not self.login(): return False
        try:
            print("📡 Instagram: Uploading photo...")
            self.client.photo_upload(image_path, caption)
            print("✅ Instagram: Successfully posted.")
            return True
        except Exception as e:
            print(f"❌ Instagram Post Error: {e}")
            return False

def publish_dispatch(image_path, caption):
    """
    Main entry point for swarm.py to publish to all platforms.
    """
    print("\n📢 BROADCASTING DISPATCH...")
    
    # 1. Telegram (Sync)
    tg = TelegramPublisher()
    tg.publish(image_path, caption)
    
    # 2. Instagram (Sync)
    ig = InstagramPublisher()
    ig.publish(image_path, caption)

if __name__ == "__main__":
    # Test Run
    test_img = "cjp_latest_post.png"
    if os.path.exists(test_img):
        publish_dispatch(test_img, "Test Dispatch from CJP Swarm CLI 🪳 #CJPKashmir #DigitalRebellion")
    else:
        print(f"❌ Test failed: {test_img} not found.")
