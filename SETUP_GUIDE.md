# Setup Guide - Natural Cannabis Oil E-Commerce Platform

This document contains all the setup instructions needed to deploy and run the platform successfully.

## 1. Environment Variables

Create a `.env.local` file in the project root with the following variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://lmrlitkzygcdafbjwacg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-supabase-service-role-key>

# Resend Email Service
RESEND_API_KEY=<your-resend-api-key>

# Optional: Seller Email (for order notifications)
SELLER_EMAIL=orders@naturalcannabisoil.shop

# Optional: Chatra Live Chat
NEXT_PUBLIC_CHATRA_ID=<your-chatra-id>

# Optional: WhatsApp Support
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
```

## 2. Database Setup

### Create Orders Table in Supabase

1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Run the migration script from `/scripts/001_create_orders_table.sql`
4. This creates the `orders` table with proper RLS policies

### Table Structure

The `orders` table includes:
- Customer information (name, email, phone)
- Shipping address (address, city, state, zip, country)
- Order details (items, subtotal, shipping fee, tax, total)
- Payment information (method, status)
- Order status tracking
- Timestamps for created/updated dates

## 3. Email Configuration (Resend)

### Set Up Resend

1. Sign up at [resend.com](https://resend.com)
2. Create a new API key
3. Add your domain for email sending (optional but recommended)
4. Add `RESEND_API_KEY` to your environment variables

### Email Features

The system sends two types of emails:

**Customer Order Confirmation**
- Sent automatically when order is placed
- Contains order details, items, and shipping address
- Formatted HTML email with styling
- Reply-to: support@naturalcannabisoil.shop

**Seller Order Notification**
- Sent to seller/admin email
- Contains full order details for processing
- Alert formatting for quick review
- Configurable recipient via `SELLER_EMAIL`

## 4. Chat & Communication

### Chatra Live Chat Setup

**Issue**: Chatra widget not appearing on published site

**Solution Applied**:
- Updated widget loading to append script to `document.body` instead of `document.head`
- Added 100ms delay for DOM readiness
- Added error handling and initialization checks
- Added `data-embed-version="4"` attribute for proper initialization
- Improved charset declaration

**To Enable**:
1. Get your Chatra ID from chatra.io
2. Add to environment: `NEXT_PUBLIC_CHATRA_ID=your-chatra-id`
3. Import `ChatWidgets` component in layout
4. Pass `chatraId` prop to the component

**Verification**:
- Check browser console for errors
- Verify Chatra ID is correct
- Ensure `https://app.chatra.io` and `https://call.chatra.io` are not blocked
- Clear browser cache and refresh

### WhatsApp Support

Already integrated with working button:
- Set `NEXT_PUBLIC_WHATSAPP_NUMBER` environment variable
- WhatsApp button appears at bottom-left corner
- Opens WhatsApp conversation on click

## 5. Removed v0 & Vercel References

All developer/platform indicators have been removed:

### Changes Made:
- ✅ Removed `generator: 'v0.app'` from metadata
- ✅ Updated README.md to remove all v0.app badges
- ✅ Removed "Built with v0" badge
- ✅ Updated project description from v0-specific to production-ready
- ✅ Tech stack clearly documented as Next.js + custom features

### Notes for GitHub:
When pushing to GitHub, the repository now shows:
- Professional project description
- Next.js as primary framework
- No v0 or Vercel platform references
- Ready for custom domain deployment

## 6. Deployment Checklist

Before deploying to production:

### Environment Variables
- [ ] `NEXT_PUBLIC_SUPABASE_URL` configured
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` configured
- [ ] `SUPABASE_SERVICE_ROLE_KEY` configured
- [ ] `RESEND_API_KEY` configured
- [ ] `SELLER_EMAIL` set to your email
- [ ] `NEXT_PUBLIC_CHATRA_ID` configured (if using chat)

### Database
- [ ] Supabase project created
- [ ] Migration script executed
- [ ] Orders table verified
- [ ] RLS policies enabled

### Email
- [ ] Resend account created
- [ ] API key generated
- [ ] Domain configured (optional)
- [ ] Test email sent successfully

### Domain
- [ ] Custom domain connected to Vercel
- [ ] SSL certificate auto-provisioned
- [ ] DNS records updated
- [ ] Metadata updated with new domain URL

### Testing
- [ ] Add item to cart and checkout
- [ ] Verify order created in Supabase
- [ ] Check confirmation email received
- [ ] Check seller notification email received
- [ ] Test Chatra widget if enabled
- [ ] Test WhatsApp button

## 7. Production Deployment

### Vercel Deployment

1. Connect GitHub repository to Vercel
2. Configure environment variables in Vercel project settings
3. Deploy main branch
4. Verify all features working on production URL

### Custom Domain Setup

1. Add custom domain in Vercel project settings
2. Update DNS records (CNAME for subdomain or A record for root)
3. Wait for SSL certificate provisioning (usually 15-30 minutes)
4. Update metadata `metadataBase` URL to new domain
5. Test site with custom domain

## 8. Monitoring & Maintenance

### Order Monitoring
- Check Supabase dashboard for new orders
- Monitor email delivery via Resend dashboard
- Set up email forwarding if needed

### Chat Monitoring
- Monitor Chatra messages in real-time
- Set up notifications for new messages
- Configure auto-responses

### Error Tracking
- Monitor Vercel deployment logs
- Check for API errors in Supabase
- Review email send failures in Resend dashboard

## 9. Security Notes

- Never commit `.env.local` to git
- Use strong API keys from Resend
- Enable RLS policies in Supabase (already configured)
- Keep Resend API key secret
- Monitor for suspicious orders in Supabase

## Support

For issues:
1. Check browser console for JavaScript errors
2. Verify environment variables are set correctly
3. Check Vercel function logs
4. Verify Supabase connectivity
5. Test Resend API key validity

---

**Last Updated**: March 2025  
**Status**: Production Ready
