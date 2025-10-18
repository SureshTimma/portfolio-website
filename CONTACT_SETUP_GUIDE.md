# Contact Feature Setup Guide

## 🔍 Problem Identified

The contact feature is not working because the `.env` file is missing. The contact form requires environment variables to send emails via Gmail and optional Telegram notifications.

## ✅ What I Did

1. Created a `.env` file in the root directory with placeholder values
2. The file is based on `.env.example` structure

## 🛠️ Required Setup Steps

To make the contact feature work, you need to configure the following environment variables:

### 1. **EMAIL_ADDRESS** (Required)
- Your Gmail address that will receive contact form messages
- Example: `your.email@gmail.com`

### 2. **GMAIL_PASSKEY** (Required)
- Gmail App Password (NOT your regular Gmail password)
- Follow the setup guide below to generate this

### 3. **TELEGRAM_BOT_TOKEN** (Optional)
- Token for Telegram bot notifications
- Leave blank if you don't want Telegram notifications

### 4. **TELEGRAM_CHAT_ID** (Optional)
- Your Telegram chat ID for receiving notifications
- Leave blank if you don't want Telegram notifications

### 5. **NEXT_PUBLIC_APP_URL** (Optional)
- Your website URL
- For local development: `http://localhost:3000`
- For production: Your deployed URL

### 6. **NEXT_PUBLIC_GTM** (Optional)
- Google Tag Manager ID
- Leave blank if not using Google Analytics

---

## 📧 Gmail App Password Setup (REQUIRED)

### Step-by-Step:

1. **Go to your Google Account**
   - Visit: https://myaccount.google.com/

2. **Navigate to Security**
   - Click "Security" in the left sidebar

3. **Enable 2-Step Verification**
   - Scroll to "Signing in to Google"
   - Turn ON "2-Step Verification" if not already enabled
   - Follow the prompts to set it up

4. **Generate App Password**
   - After enabling 2-Step Verification, you'll see "App Passwords"
   - Click on "App Passwords"
   - You may need to enter your password again

5. **Create the App Password**
   - Select app: Choose "Mail"
   - Select device: Choose "Other (Custom name)"
   - Name it: "Portfolio" (or any name you prefer)
   - Click "Generate"

6. **Save the Password**
   - A 16-character password will appear
   - **Copy this password immediately**
   - You won't be able to see it again
   - This is your `GMAIL_PASSKEY`

---

## 🤖 Telegram Bot Setup (OPTIONAL)

If you want to receive contact form messages via Telegram:

### Step 1: Create a Bot

1. Open Telegram
2. Search for **@BotFather**
3. Start chat and send: `/newbot`
4. Choose a name for your bot (e.g., "Portfolio Assistant")
5. Choose a username ending with "bot" (e.g., "MyPortfolioBot")
6. **Save the token** - this is your `TELEGRAM_BOT_TOKEN`

### Step 2: Get Your Chat ID

1. Send a message to your bot
2. Visit this URL in your browser (replace `YOUR_BOT_TOKEN`):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
3. Look for `"chat":{"id":123456789}` in the response
4. **Save that number** - this is your `TELEGRAM_CHAT_ID`

---

## 📝 Update Your .env File

Open the `.env` file I created and fill in your values:

```env
NEXT_PUBLIC_GTM = 
NEXT_PUBLIC_APP_URL = http://localhost:3000
TELEGRAM_BOT_TOKEN = your_telegram_bot_token_here
TELEGRAM_CHAT_ID = your_telegram_chat_id_here
GMAIL_PASSKEY = your_16_character_app_password_here
EMAIL_ADDRESS = your.email@gmail.com
```

### Example (with fake values):

```env
NEXT_PUBLIC_GTM = 
NEXT_PUBLIC_APP_URL = http://localhost:3000
TELEGRAM_BOT_TOKEN = 7234567890:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw
TELEGRAM_CHAT_ID = 987654321
GMAIL_PASSKEY = abcd efgh ijkl mnop
EMAIL_ADDRESS = myemail@gmail.com
```

---

## 🚀 After Setup

1. **Save the .env file**
2. **Restart your development server**:
   ```bash
   # Stop the current server (Ctrl+C)
   # Then restart:
   npm run dev
   ```
3. **Test the contact form** on your website
4. You should receive emails at your Gmail address
5. If configured, you'll also get Telegram notifications

---

## ⚠️ Important Notes

- **Never commit the .env file to Git** - it's already in `.gitignore`
- **Gmail App Password** is different from your regular password
- **2-Step Verification** must be enabled to create app passwords
- **Telegram setup is optional** - the form will work with just email
- The `.env` file only works locally
- For production (Vercel/Netlify), add these as environment variables in the dashboard

---

## 🐛 Troubleshooting

### Contact form shows error:
- Check that all required env variables are set
- Restart the development server
- Check browser console for specific errors

### Not receiving emails:
- Verify `EMAIL_ADDRESS` is correct
- Verify `GMAIL_PASSKEY` is the 16-character app password
- Check Gmail spam folder
- Ensure 2-Step Verification is enabled

### Telegram not working:
- This is optional, email should still work
- Verify bot token and chat ID are correct
- Make sure you've sent at least one message to your bot

---

## 📞 Test Your Setup

1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Check for success notification
4. Check your email inbox
5. If configured, check Telegram for notification

---

## 🎯 Next Steps for Production

When deploying to Vercel or Netlify:

1. Don't upload the .env file
2. Add environment variables in the platform's dashboard:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
3. Add all the same variables you have in your local .env file
4. Redeploy your site

---

## ✅ Summary

- ✅ Created `.env` file
- ⚙️ Need to configure Gmail App Password (required)
- ⚙️ Optional: Configure Telegram Bot
- 🔄 Restart dev server after updating .env
- 🎯 Contact form will work once configured!

Good luck! 🚀
