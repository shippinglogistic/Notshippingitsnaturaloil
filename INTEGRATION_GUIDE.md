# Integration Guide - Resend & Tawk.to

## Overview

This guide covers the production-ready integrations for:
- **Resend**: Email notifications for orders
- **Tawk.to**: Live chat widget

Both are fully configured and safe for Vercel + Bun + Next.js 13+

---

## ✅ What's Been Done

### ✓ Removed
- `lib/email/resend-service.ts` (old, broken version)
- `components/chat-widgets.tsx` (old Chatra integration)
- Old email imports from API routes

### ✓ Created
- `lib/email/resend-service.ts` (production-ready, lazy-loaded)
- `components/TawkWidget.tsx` (client-safe, Bun-safe)
- Updated API routes with new email functions
- Updated layout to use TawkWidget

### ✓ Fixed
- No more Resend initialization errors at build time
- Tawk widget now properly loads client-side only
- Safe for Vercel deployments

---

## 📧 Resend Email Integration

### File: `/lib/email/resend-service.ts`

**Features:**
- Lazy-loads Resend client (only when needed)
- Two functions: `sendCustomerEmail()` and `sendSellerEmail()`
- Beautiful HTML email templates
- Error handling with return objects
- Server-side only (`"use server"`)
- Production-ready for Vercel + Bun

**Email Templates:**
- Customer: Order confirmation with all details
- Seller: Order alert for admin/owner

**Environment Variables Needed:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
SELLER_EMAIL=admin@yourdomain.com
```

### How It Works

1. Customer completes checkout
2. Order is saved to Supabase
3. API route calls `sendCustomerEmail()` → Customer gets confirmation email
4. API route calls `sendSellerEmail()` → Seller gets order alert
5. Errors logged but don't fail the order

### API Usage Example

```typescript
import { sendCustomerEmail, sendSellerEmail, type OrderEmailData } from "@/lib/email/resend-service"

// In your API route after order is created:
const emailData: OrderEmailData = {
  orderId: order.id,
  customerName: `${order.customer_first_name} ${order.customer_last_name}`,
  customerEmail: order.customer_email,
  items: order.items,
  subtotal: Number(order.subtotal),
  shippingFee: Number(order.shipping_fee),
  tax: Number(order.tax),
  grandTotal: Number(order.grand_total),
  shippingAddress: {
    address: order.shipping_address,
    city: order.shipping_city,
    state: order.shipping_state,
    zip: order.shipping_zip,
    country: order.shipping_country,
  },
  paymentMethod: order.payment_method,
  orderStatus: order.order_status || "pending",
}

// Send emails
const customerResult = await sendCustomerEmail(emailData)
const sellerResult = await sendSellerEmail(emailData, "admin@domain.com")

// Check results
if (customerResult.success) {
  console.log("Customer email sent:", customerResult.id)
}
if (sellerResult.success) {
  console.log("Seller email sent:", sellerResult.id)
}
```

---

## 💬 ChatWay Chat Widget

### File: `/components/ChatWayWidget.tsx`

**Features:**
- Client-side only (`"use client"`)
- Proper useEffect implementation
- Safe for Next.js SSR
- Error handling
- Cleanup on unmount
- Bun + Vercel compatible

**How It Works:**
1. Component renders as `null` (invisible)
2. useEffect runs only on client-side
3. Creates and appends ChatWay script to body
4. ChatWay widget appears on all pages
5. Script unloaded on component unmount (cleanup)

### Usage in Layout

```typescript
import ChatWayWidget from "@/components/ChatWayWidget"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        {/* ChatWay widget loads globally */}
        <ChatWayWidget />
      </body>
    </html>
  )
}
```

### Current Configuration

- **Widget ID**: `i3kTzjNeW8UX`
- **URL**: `https://cdn.chatway.app/widget.js?id=i3kTzjNeW8UX`

To change the ChatWay ID:
1. Go to ChatWay dashboard
2. Create/copy your widget ID
3. Update the widget ID in `components/ChatWayWidget.tsx`

## 📱 WhatsApp Widget

### File: `/components/WhatsAppWidget.tsx`

**Features:**
- Client-side only (`"use client"`)
- Green WhatsApp button in bottom-left corner
- Direct messaging link
- Mobile responsive
- Opens WhatsApp app on mobile, web on desktop
- No API key needed

**How It Works:**
1. Component renders WhatsApp button
2. Button positioned at bottom-left with fixed positioning
3. Clicking opens WhatsApp conversation with preset message
4. Uses wa.me service (WhatsApp official)

### Usage in Layout

```typescript
import WhatsAppWidget from "@/components/WhatsAppWidget"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        {/* WhatsApp widget loads globally */}
        <WhatsAppWidget />
      </body>
    </html>
  )
}
```

### Current Configuration

- **Phone Number**: `9194632493`
- **Message**: "Hi, I have a question about your products."
- **Position**: Bottom-left corner, fixed

To change the WhatsApp number:
1. Edit `components/WhatsAppWidget.tsx`
2. Update the `phoneNumber` variable
3. Redeploy

---

## 🚀 Setup Checklist

### 1. Get Resend API Key

- [ ] Go to https://resend.com
- [ ] Create account
- [ ] Copy API Key (starts with `re_`)

### 2. Add Environment Variables in Vercel

**Go to Vercel → Your Project → Settings → Environment Variables**

Add:
```
RESEND_API_KEY = re_xxxxxxxxxxxxx
SELLER_EMAIL = admin@naturalcannabisoil.shop
```

### 3. Redeploy

- [ ] Go to Deployments tab
- [ ] Redeploy from `v0/icedoutgenetics03-9278-3094eb38` branch
- [ ] Wait for build to complete

### 4. Test

- [ ] Create test order on live site
- [ ] Check customer email inbox
- [ ] Check seller email (SELLER_EMAIL)
- [ ] Verify Tawk widget appears in browser

### 5. Optional: Update Tawk ID

If you want to use a different Tawk widget:
- [ ] Update `/components/TawkWidget.tsx` with new embed ID
- [ ] Redeploy

---

## 📝 Email Configuration

### Customer Email
- **From**: `orders@naturalcannabisoil.shop`
- **To**: Customer's email address
- **Subject**: `Order Confirmation #[OrderID]`
- **Template**: Full order details, items, total

### Seller Email
- **From**: `orders@naturalcannabisoil.shop`
- **To**: `${process.env.SELLER_EMAIL}`
- **Subject**: `New Order Received #[OrderID]`
- **Template**: Customer info, items, total

**Note:** Update the "from" email addresses if needed in `/lib/email/resend-service.ts` (search for "orders@naturalcannabisoil.shop")

---

## 🔧 Troubleshooting

### Emails Not Sending

1. **Check `RESEND_API_KEY`** is set in Vercel
2. **Check `SELLER_EMAIL`** is set correctly
3. **Check API logs**: Look for `[Resend]` tagged messages in Vercel logs
4. **Verify email addresses** are correct (typos in checkout form)

### Tawk Widget Not Showing

1. **Refresh browser** (hard refresh: Cmd+Shift+R)
2. **Check console** for errors: Open DevTools → Console tab
3. **Verify script URL** is correct in `components/TawkWidget.tsx`
4. **Check Tawk status**: Go to https://tawk.to/dashboard

### Build Errors

If you get build errors about Resend:
1. Make sure `RESEND_API_KEY` is in Vercel environment variables
2. Resend is now lazy-loaded, so it won't fail build without the key
3. Redeploy and errors should resolve

---

## 📚 File Structure

```
lib/email/
  └── resend-service.ts          # Email service (server-side)

components/
  └── TawkWidget.tsx             # Chat widget (client-side)

app/api/orders/
  └── route.ts                   # Updated to use new email functions

app/
  └── layout.tsx                 # Updated to use TawkWidget
```

---

## 🎯 Next Steps

1. ✅ Add environment variables to Vercel
2. ✅ Redeploy your site
3. ✅ Test order → verify emails arrive
4. ✅ Test Tawk widget appears
5. ✅ Add custom domain when ready

Your site is now ready for production with full email notifications and live chat support!
