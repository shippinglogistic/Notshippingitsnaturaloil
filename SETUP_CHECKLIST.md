# Setup Checklist - Ready for Production

## ✅ What's Been Done

### Resend Email Service
- [x] Created `/lib/email/resend-service.ts` - Production-ready email service
- [x] `sendCustomerEmail()` - Sends order confirmation to customers
- [x] `sendSellerEmail()` - Sends order alert to admin
- [x] Updated `/app/api/orders/route.ts` - Calls email functions on order creation
- [x] Added to `package.json` - Resend package included
- [x] Error handling - Won't break if email fails
- [x] Build-safe - No syntax errors, works with Bun + Vercel

### ChatWay Chat Widget
- [x] Deleted old TawkWidget.tsx
- [x] Created `/components/ChatWayWidget.tsx` - ChatWay integration
- [x] Updated `/app/layout.tsx` - Imports and uses ChatWayWidget
- [x] Widget ID configured: `i3kTzjNeW8UX`
- [x] Client-side only (no SSR issues)

### Environment Variables
- [x] Created `.env.example` - Template for all required vars
- [x] Ready for you to add keys

---

## 🔑 Next Steps (What You Need to Do)

### Step 1: Get Resend API Key
```
1. Go to https://resend.com
2. Sign up (free account)
3. Go to Settings → API Keys
4. Create new API key
5. Copy it (looks like: re_xxxxxxxxxxxx)
```

### Step 2: Add Environment Variables to Vercel
```
1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Add two variables:

   Name: RESEND_API_KEY
   Value: re_xxxxxxxxxxxx
   
   Name: SELLER_EMAIL
   Value: admin@naturalcannabisoil.shop
```

### Step 3: Redeploy
```
1. Go to Vercel Dashboard
2. Deployments tab
3. Click "Redeploy" on latest deployment
4. Wait for deployment to complete
```

### Step 4: Test Everything
```
1. Go to your website
2. Verify ChatWay widget appears (bottom right)
3. Place a test order
4. Check your email for customer confirmation
5. Check SELLER_EMAIL inbox for order alert
```

---

## 📁 Files Created/Modified

### New Files
- `lib/email/resend-service.ts` - Email service
- `components/ChatWayWidget.tsx` - Chat widget
- `.env.example` - Environment variables template
- `SETUP_CHECKLIST.md` - This file

### Modified Files
- `app/api/orders/route.ts` - Updated to use Resend functions
- `app/layout.tsx` - Updated to use ChatWayWidget
- `QUICK_REFERENCE.md` - Updated with ChatWay info

### Deleted Files
- `components/TawkWidget.tsx` - Replaced with ChatWayWidget

---

## 📧 Email Configuration

**Customer Emails From:** `sales@naturalcannabisoil.shop`
**Customer Reply-To:** `support@naturalcannabisoil.shop`
**Seller Emails To:** `admin@naturalcannabisoil.shop`
**Seller Reply-To:** `support@naturalcannabisoil.shop`

You can change these in `/lib/email/resend-service.ts`

---

## 💬 Chat Widget Configuration

**Widget ID:** `i3kTzjNeW8UX`
**Script URL:** `https://cdn.chatway.app/widget.js?id=i3kTzjNeW8UX`

To change the widget ID:
1. Edit `/components/ChatWayWidget.tsx`
2. Find the line with `https://cdn.chatway.app/widget.js?id=`
3. Replace `i3kTzjNeW8UX` with your new ID
4. Redeploy

---

## ✨ Features Enabled

✅ **Automatic Customer Emails** - Confirmation with order details
✅ **Seller Notifications** - Alert when new order received
✅ **Chat Widget** - ChatWay live chat on every page
✅ **Error Handling** - Graceful failures, doesn't break orders
✅ **Production-Ready** - No syntax errors, build-safe

---

## 🐛 Troubleshooting

### "RESEND_API_KEY not set" Error
- Go to Vercel Dashboard
- Settings → Environment Variables
- Add `RESEND_API_KEY` with your key
- Redeploy

### Emails Not Arriving
- Check Resend dashboard for logs
- Verify `SELLER_EMAIL` is correct
- Check spam folder
- Try placing another test order

### Chat Widget Not Showing
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
- Check browser console for errors
- Verify ChatWay widget ID is correct
- Test in incognito window

### Build Failing
- Make sure env vars are set in Vercel (not in `.env` file)
- Redeploy from Vercel dashboard
- Check build logs for specific errors

---

## 📚 Documentation

- `QUICK_REFERENCE.md` - 3-step setup guide
- `INTEGRATION_GUIDE.md` - Detailed documentation
- `README_INTEGRATIONS.md` - Overview of changes
- `.env.example` - All environment variables explained

---

## 🎯 Production Checklist

Before going live:
- [ ] Added `RESEND_API_KEY` to Vercel
- [ ] Added `SELLER_EMAIL` to Vercel
- [ ] Redeployed site
- [ ] Placed test order
- [ ] Received customer confirmation email
- [ ] Received seller alert email
- [ ] ChatWay widget appears
- [ ] Chat widget opens and responds
- [ ] Custom domain configured (if applicable)

---

**Everything is configured and ready!** Just add your API key and email, then redeploy. 🚀
