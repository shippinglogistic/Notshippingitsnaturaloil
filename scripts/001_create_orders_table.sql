-- Drop existing table and policies if they exist
DROP TABLE IF EXISTS public.orders CASCADE;

-- Create orders table for storing customer orders
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_first_name TEXT NOT NULL,
  customer_last_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  shipping_country TEXT NOT NULL,
  shipping_address TEXT NOT NULL,
  shipping_city TEXT NOT NULL,
  shipping_state TEXT NOT NULL,
  shipping_zip TEXT NOT NULL,
  shipping_method TEXT NOT NULL,
  payment_method TEXT NOT NULL,
  payment_status TEXT NOT NULL DEFAULT 'pending',
  order_status TEXT NOT NULL DEFAULT 'pending',
  subtotal NUMERIC(10, 2) NOT NULL,
  shipping_fee NUMERIC(10, 2) NOT NULL DEFAULT 0,
  tax NUMERIC(10, 2) DEFAULT 0,
  grand_total NUMERIC(10, 2) NOT NULL,
  items JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX idx_orders_created_at ON public.orders(created_at DESC);
CREATE INDEX idx_orders_status ON public.orders(order_status);
CREATE INDEX idx_orders_payment_status ON public.orders(payment_status);
CREATE INDEX idx_orders_email ON public.orders(customer_email);

-- Enable RLS
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Policy to allow all reads (admin dashboard)
CREATE POLICY "Allow public read access" ON public.orders FOR SELECT USING (true);

-- Policy to allow inserts (checkout)
CREATE POLICY "Allow public insert access" ON public.orders FOR INSERT WITH CHECK (true);

-- Policy to allow updates (admin can update status)
CREATE POLICY "Allow public update access" ON public.orders FOR UPDATE USING (true);
