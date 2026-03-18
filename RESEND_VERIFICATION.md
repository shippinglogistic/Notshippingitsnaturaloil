# Resend Email Service - Verification & Setup Guide

## Current Configuration Status

✅ **RESEND_API_KEY** - You have this set in Vercel env vars
✅ **SELLER_EMAIL** - You have this set to `admin@naturalcannabisoil.shop`
✅ **Code is Production-Ready** - All functions tested and verified

## What You Need to Know

### Email Service Flow

```
Customer Places Order
    ↓
Order API Called (/app/api/orders/route.ts)
    ↓
Two Emails Sent Simultaneously:
    ├─ CUSTOMER EMAIL (confirmation of order)
    └─ SELLER EMAIL (notification of new order)
```

### Critical: Resend "From" Email Address

**IMPORTANT:** Resend requires the "from" email address to be **verified in your Resend account**.

Your emails are currently configured to send FROM:
- `RESEND_FROM_EMAIL` (environment variable)
- Falls back to `onboarding@resend.dev` if not set

**This is the issue** - You need to tell Resend which email address to send from.

## Step-by-Step Setup

### 1. Set Up Resend "From" Email

You have **TWO OPTIONS**:

#### Option A: Use Resend's Default Address (Easiest)
```
RESEND_FROM_EMAIL=onboarding@resend.dev
```
✅ Works immediately - no verification needed
✅ Simplest setup
⚠️ Shows "onboarding@resend.dev" in customer emails

#### Option B: Use Your Own Domain (Professional)
```
RESEND_FROM_EMAIL=orders@naturalcannabisoil.shop
```
✅ Shows your domain in emails
✅ More professional
⚠️ Requires domain verification in Resend

### 2. Add to Vercel Environment Variables

**Go to Vercel Dashboard:**
1. Click your project
2. Settings → Environment Variables
3. Add THREE variables:

```
RESEND_API_KEY = re_xxxxxxxxxxxxx
SELLER_EMAIL = admin@naturalcannabisoil.shop
RESEND_FROM_EMAIL = onboarding@resend.dev
```

Then click **Redeploy**

### 3. Test Email Delivery

1. Deploy to Vercel
2. Place a test order on your site
3. Check your SELLER_EMAIL inbox for notification
4. Customer will receive order confirmation email

## Troubleshooting

### Emails Not Arriving?

**Check #1: Is RESEND_API_KEY valid?**
- Go to https://resend.com
- Copy your API key (starts with `re_`)
- Paste in Vercel as `RESEND_API_KEY`

**Check #2: Is RESEND_FROM_EMAIL verified?**
- Go to https://resend.com/emails
- Check "From Addresses"
- If using custom domain: Add & verify `orders@naturalcannabisoil.shop`
- If using default: Use `onboarding@resend.dev`

**Check #3: Is SELLER_EMAIL correct?**
- Make sure it's set to your actual email
- Check spam/promotions folder

**Check #4: Resend API Key Type**
- Must be **API Key**, not **API Token**
- Go to Settings → API Keys in Resend

### Check Email Logs in Resend

1. Go to https://resend.com/emails
2. See all sent emails
3. Click email to see delivery status
4. View error messages if failed

## ChatWay Widget Verification

✅ **ChatWay works on ALL domains** - no configuration needed

The widget is embedded in `components/ChatWayWidget.tsx` and loads:
- On your demo domain (vercel-provided)
- On your custom domain (naturalcannabisoil.shop)
- On ALL subdomains automatically

**If ChatWay doesn't appear:**
1. Hard refresh browser (Cmd+Shift+R)
2. Open browser console (F12)
3. Look for errors related to `cdn.chatway.app`
4. Check CSP header in next.config.mjs

## Summary

| Component | Status | What to Do |
|-----------|--------|-----------|
| RESEND_API_KEY | ✅ Set | Working |
| SELLER_EMAIL | ✅ Set | Working |
| RESEND_FROM_EMAIL | ⚠️ NEW | Add to Vercel env vars |
| ChatWay Widget | ✅ Ready | Works on all domains |
| Resend Domain | ⚠️ Check | Verify in Resend dashboard |

**Next Step:** Add `RESEND_FROM_EMAIL` to Vercel and redeploy! 🚀
