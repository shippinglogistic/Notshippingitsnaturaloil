# Email Configuration Guide

## Current Email Setup

### FROM Address
- **Email:** `sales@naturalcannabisoil.shop`
- **Environment Variable:** `RESEND_FROM_EMAIL`
- **Must be verified in Resend dashboard**

### TO Addresses

#### Customer Emails
- **Recipient:** Customer email provided during checkout
- **Type:** Order confirmation with full order details
- **When:** Automatically sent after order is placed

#### Seller/Admin Emails
- **Recipient:** `orders@naturalcannabisoil.shop`
- **Environment Variable:** `RESEND_SELLER_EMAIL`
- **Type:** New order notification
- **When:** Automatically sent after order is placed

## Environment Variables to Set in Vercel

Go to **Vercel Dashboard → Your Project → Settings → Environment Variables** and add:

```
RESEND_API_KEY=re_your_actual_key_here
RESEND_FROM_EMAIL=sales@naturalcannabisoil.shop
RESEND_SELLER_EMAIL=orders@naturalcannabisoil.shop
```

## Setup Instructions

### 1. Get Resend API Key
- Go to https://resend.com
- Sign up and create account
- Navigate to **API Keys** section
- Create new API key
- Copy the key (starts with `re_`)

### 2. Verify Sender Domain
- In Resend dashboard, go to **Domains**
- Add domain: `naturalcannabisoil.shop`
- Follow verification steps (DNS records)
- Wait for verification to complete

### 3. Add to Vercel
- Go to Vercel project settings
- Click **Environment Variables**
- Add the 3 variables above
- **Redeploy** your site

### 4. Test
- Go to your website
- Place a test order
- Check customer email inbox for confirmation
- Check orders@naturalcannabisoil.shop for admin notification

## Email Flow

```
Order Placed
    ↓
sendCustomerEmail()
    → FROM: sales@naturalcannabisoil.shop
    → TO: customer@example.com
    → Subject: Order Confirmation #[ORDER_ID]
    ↓
sendSellerEmail()
    → FROM: sales@naturalcannabisoil.shop
    → TO: orders@naturalcannabisoil.shop
    → Subject: New Order Received #[ORDER_ID]
```

## Troubleshooting

### Email Not Sending
- ✅ Check `RESEND_API_KEY` is set in Vercel
- ✅ Check domain `naturalcannabisoil.shop` is verified in Resend
- ✅ Check `RESEND_FROM_EMAIL` is set to `sales@naturalcannabisoil.shop`
- ✅ Check `RESEND_SELLER_EMAIL` is set to `orders@naturalcannabisoil.shop`
- ✅ Redeploy after adding env vars

### Emails Going to Spam
- Check Resend documentation for SPF/DKIM records
- Verify domain authentication is complete
- Contact Resend support if domain verification fails

## Files Modified
- `lib/email/resend-service.ts` - Uses environment variables for sender
- `app/api/orders/route.ts` - Uses RESEND_SELLER_EMAIL variable
- `.env.example` - Shows all required variables
