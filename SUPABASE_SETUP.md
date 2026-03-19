# Supabase Database Setup Instructions

## Quick Setup

To initialize your Supabase database and create the orders table:

### Option 1: Use Supabase Dashboard (Recommended)

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project: `lmrlitkzygcdafbjwacg`
3. Navigate to **SQL Editor**
4. Click **New Query**
5. Copy and paste the SQL from `/scripts/001_create_orders_table.sql`
6. Click **Run**

### Option 2: Use Supabase CLI

```bash
supabase db push
```

## Database Schema

The orders table includes the following columns:
- `id` (UUID) - Primary key
- `customer_first_name` (TEXT) - Customer's first name
- `customer_last_name` (TEXT) - Customer's last name
- `customer_email` (TEXT) - Customer's email address
- `customer_phone` (TEXT) - Customer's phone number
- `shipping_country` (TEXT) - Shipping country
- `shipping_address` (TEXT) - Street address
- `shipping_city` (TEXT) - City
- `shipping_state` (TEXT) - State/Province
- `shipping_zip` (TEXT) - ZIP/Postal code
- `shipping_method` (TEXT) - Shipping method (standard/express)
- `payment_method` (TEXT) - Payment method (zelle/bitcoin/chime/applepay/paypal)
- `payment_status` (TEXT) - Payment status (pending/completed/failed)
- `order_status` (TEXT) - Order status (pending/processing/shipped/delivered)
- `subtotal` (NUMERIC) - Order subtotal
- `shipping_fee` (NUMERIC) - Shipping fee
- `tax` (NUMERIC) - Tax amount
- `grand_total` (NUMERIC) - Total order amount
- `items` (JSONB) - Order items as JSON
- `created_at` (TIMESTAMP) - Order creation timestamp
- `updated_at` (TIMESTAMP) - Last update timestamp

## Row Level Security (RLS)

The table has RLS enabled with the following policies:
- **SELECT**: Public read access (allows admin dashboard to read orders)
- **INSERT**: Public insert access (allows checkout to create orders)
- **UPDATE**: Public update access (allows admin to update order status)

## Environment Variables

Make sure the following environment variables are set in your `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (for server-side operations)

These must be configured in your project environment variables.
