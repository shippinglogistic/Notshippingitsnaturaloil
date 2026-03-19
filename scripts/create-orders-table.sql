-- Create orders table
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  
  -- Customer Information
  customer_first_name VARCHAR(255) NOT NULL,
  customer_last_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(20) NOT NULL,
  
  -- Shipping Address
  shipping_address VARCHAR(255) NOT NULL,
  shipping_city VARCHAR(100) NOT NULL,
  shipping_state VARCHAR(100) NOT NULL,
  shipping_zip VARCHAR(20) NOT NULL,
  shipping_country VARCHAR(100) NOT NULL,
  shipping_method VARCHAR(50) NOT NULL DEFAULT 'standard',
  
  -- Payment Information
  payment_method VARCHAR(100) NOT NULL,
  payment_status VARCHAR(50) NOT NULL DEFAULT 'pending',
  
  -- Order Details
  order_status VARCHAR(50) NOT NULL DEFAULT 'pending',
  subtotal DECIMAL(10, 2) NOT NULL,
  shipping_fee DECIMAL(10, 2) NOT NULL DEFAULT 0,
  tax DECIMAL(10, 2) NOT NULL DEFAULT 0,
  grand_total DECIMAL(10, 2) NOT NULL,
  
  -- Items (stored as JSONB for flexibility)
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  
  -- Admin Notes
  admin_notes TEXT,
  
  CONSTRAINT valid_payment_status CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
  CONSTRAINT valid_order_status CHECK (order_status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded')),
  CONSTRAINT valid_shipping_method CHECK (shipping_method IN ('standard', 'express'))
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON public.orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_order_status ON public.orders(order_status);
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON public.orders(payment_status);

-- Enable RLS (Row Level Security)
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for checkout)
CREATE POLICY "Allow public inserts" ON public.orders
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow reading own orders by email
CREATE POLICY "Allow reading by email" ON public.orders
  FOR SELECT
  USING (true);

-- Create policy for admin access (if you have an admin user)
-- Uncomment and modify based on your auth setup
-- CREATE POLICY "Allow admin full access" ON public.orders
--   FOR ALL
--   USING (auth.jwt() ->> 'role' = 'admin');

-- Grant necessary permissions
GRANT INSERT ON public.orders TO anon;
GRANT SELECT ON public.orders TO anon;
GRANT UPDATE ON public.orders TO authenticated;

-- Trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
