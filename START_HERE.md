# 🚀 START HERE - Environment Setup

Your e-commerce platform is ready! Follow these 3 simple steps to get everything working:

## ⚡ 3-Step Quick Start (5 Minutes)

### 1️⃣ Get Resend API Key
- Visit **https://resend.com**
- Sign up → API Keys → Create Key
- Copy the key (starts with `re_`)

### 2️⃣ Add to Vercel Environment
Go to **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add these variables:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_xxx...` (from step 1) |
| `SELLER_EMAIL` | Your email for order notifications |

Then click **"Redeploy"** on the Deployments page.

### 3️⃣ Test It Works
Place a test order and check your email for confirmation.

---

## 📋 Complete List of Environment Variables

### ✅ REQUIRED (Copy from Vercel Settings)

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

### ⚡ ADD FOR EMAIL NOTIFICATIONS

```
RESEND_API_KEY = re_your_api_key_here
SELLER_EMAIL = your@email.com
```

### 🟢 OPTIONAL

```
NEXT_PUBLIC_CHATRA_ID = your_chatra_id (for live chat)
NEXT_PUBLIC_WHATSAPP_NUMBER = +1234567890 (for WhatsApp button)
```

---

## 📖 Detailed Guides

- **See `.env.example`** for all variables explained
- **See `ENV_SETUP.md`** for step-by-step instructions
- **See `SETUP_GUIDE.md`** for complete setup details

---

## ✅ What's Fixed & Ready

✅ **Email Notifications** - Customers & sellers get emails on orders  
✅ **Chatra Widget** - Live chat widget now displays properly  
✅ **No v0 Branding** - All v0/Vercel references removed  
✅ **GitHub Clean** - Repository ready for custom domain  
✅ **Supabase Orders** - Database table created & working  

---

## 🎯 What You Need to Do NOW

1. **Get API Keys:**
   - Resend API key (https://resend.com)
   - (Optional) Chatra ID (https://chatra.com)

2. **Add to Vercel:**
   - Go to project Settings → Environment Variables
   - Add `RESEND_API_KEY` and `SELLER_EMAIL`
   - Redeploy

3. **Test:**
   - Place test order
   - Verify emails arrive

4. **Deploy Custom Domain:**
   - Add custom domain in Vercel
   - Update DNS
   - Done!

---

## 🔗 Important Links

| Service | Link | What It's For |
|---------|------|---------------|
| Resend | https://resend.com | Email notifications |
| Supabase | https://supabase.com | Database |
| Chatra | https://chatra.com | Live chat (optional) |
| Vercel | https://vercel.com | Hosting & deployment |

---

## 📞 Quick Support

**Emails not working?**
- Check `RESEND_API_KEY` is added
- Check `SELLER_EMAIL` is valid
- Redeploy site
- Wait 2-3 minutes

**Chat widget not showing?**
- Add `NEXT_PUBLIC_CHATRA_ID` to env vars
- Redeploy
- Visit on custom domain (not localhost)

**Need more help?** Check `ENV_SETUP.md` or `SETUP_GUIDE.md`

---

**You're all set! Good luck with your business! 🎉**
