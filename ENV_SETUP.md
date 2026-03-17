# Environment Variables Setup Guide

This guide will help you set up all required environment variables for your e-commerce platform.

## Quick Setup (5 Minutes)

### Step 1: Get Your Resend API Key ⚡ (REQUIRED FOR EMAILS)

1. Go to **[https://resend.com](https://resend.com)**
2. Click **"Sign Up"** (or login if you have an account)
3. Complete the signup process
4. Navigate to **"API Keys"** in the dashboard (left sidebar)
5. Click **"Create API Key"**
6. Copy the key (it starts with `re_`)
7. **Save this key - you'll need it in the next step**

### Step 2: Add Environment Variables to Vercel

#### In Vercel Dashboard:

1. Go to your Vercel project: **https://vercel.com/dashboard**
2. Click on your project **"Notshippingitsnaturaloil"**
3. Click **"Settings"** (top navigation)
4. Click **"Environment Variables"** (left sidebar)
5. Click **"Add New"** for each variable below:

| Variable Name | Value | Example |
|---|---|---|
| `RESEND_API_KEY` | Your Resend API key | `re_abc123xyz789` |
| `SELLER_EMAIL` | Your email (for order notifications) | `your-email@gmail.com` |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase URL | `https://xyz.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | `eyJhbG...` |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key | `eyJhbG...` |

#### For OPTIONAL features:

| Feature | Variable Name | Where to Get It |
|---|---|---|
| **Chatra Live Chat** | `NEXT_PUBLIC_CHATRA_ID` | [https://chatra.com](https://chatra.com) - Dashboard → Settings |
| **WhatsApp** | `NEXT_PUBLIC_WHATSAPP_NUMBER` | Your WhatsApp business number |

### Step 3: Deploy

1. After adding environment variables, go to **"Deployments"** tab in Vercel
2. Find the most recent failed deployment
3. Click the **three dots (...)** → **"Redeploy"**
4. Wait for deployment to complete (2-3 minutes)

✅ **Done!** Your site is now deployed with email notifications enabled.

---

## Detailed Variable Explanations

### Required Variables

#### `RESEND_API_KEY`
- **What it is:** API key to send emails
- **How to get it:**
  1. Create account at resend.com
  2. Go to API Keys section
  3. Create a new key (looks like: `re_1234567890abcdef`)
- **Used for:** Customer order confirmations and seller notifications

#### `SELLER_EMAIL`
- **What it is:** Your email address
- **Example:** `your-email@gmail.com` or `seller@yourcompany.com`
- **Used for:** Receiving order notifications when customers place orders

#### Supabase Variables (Already Set)
These should already be configured from earlier setup:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase public key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase admin key

### Optional Variables

#### `NEXT_PUBLIC_CHATRA_ID`
- **What it is:** Live chat widget ID
- **How to get it:**
  1. Go to chatra.com
  2. Sign up and create account
  3. Create a new Chat widget
  4. Copy the Chat ID (numeric)
- **Used for:** Customer live chat support

#### `NEXT_PUBLIC_WHATSAPP_NUMBER`
- **What it is:** Your WhatsApp business number
- **Format:** Include country code (e.g., `+1234567890`)
- **Used for:** WhatsApp contact button

---

## Testing Your Setup

After deployment, test that emails work:

1. Go to your website
2. Place a test order
3. You should receive:
   - ✅ Customer confirmation email (to order email)
   - ✅ Seller notification email (to SELLER_EMAIL)

If you don't receive emails:
1. Check `RESEND_API_KEY` is correct
2. Check `SELLER_EMAIL` is correct
3. Check spam/junk folder
4. Redeploy the site in Vercel

---

## Common Issues & Solutions

### "RESEND_API_KEY not configured" message appears

**Solution:** 
1. Make sure you added `RESEND_API_KEY` to Vercel Environment Variables
2. Redeploy your site
3. Wait 2-3 minutes for deployment to complete

### Emails not being sent

**Check:**
1. ✅ `RESEND_API_KEY` is added to Vercel
2. ✅ `SELLER_EMAIL` is set to a valid email
3. ✅ Site has been redeployed after adding variables
4. ✅ Check spam folder for emails

### Custom domain and Chatra widget not showing

**Solution:**
1. Add `NEXT_PUBLIC_CHATRA_ID` to environment variables
2. Redeploy
3. Visit your custom domain (not localhost)
4. Widget should appear in bottom-right corner

---

## Quick Copy-Paste Template

Use this as a checklist when setting up in Vercel:

```
□ RESEND_API_KEY = re_xxx...
□ SELLER_EMAIL = your@email.com
□ NEXT_PUBLIC_SUPABASE_URL = https://xxx.supabase.co
□ NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJ...
□ SUPABASE_SERVICE_ROLE_KEY = eyJ...
□ (Optional) NEXT_PUBLIC_CHATRA_ID = 123456
□ (Optional) NEXT_PUBLIC_WHATSAPP_NUMBER = +1234567890
```

---

## Need Help?

- **Resend Issues:** Visit [resend.com/docs](https://resend.com/docs)
- **Supabase Issues:** Visit [supabase.com/docs](https://supabase.com/docs)
- **Chatra Issues:** Visit [chatra.com/support](https://chatra.com/support)
- **Vercel Issues:** Visit [vercel.com/docs](https://vercel.com/docs)

---

**Last Updated:** 2025
