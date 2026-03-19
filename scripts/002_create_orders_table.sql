-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  -- Customer Information
  customer_first_name VARCHAR(255) NOT NULL,
  customer_last_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(20) NOT NULL,
  
  -- Shipping Information
  shipping_country VARCHAR(2),
  shipping_address VARCHAR(255),
  shipping_city VARCHAR(100),
  shipping_state VARCHAR(100),
  shipping_zip VARCHAR(20),
  shipping_method VARCHAR(50),
  
  -- Payment Information
  payment_method VARCHAR(50),
  payment_status VARCHAR(50) DEFAULT 'pending',
  
  -- Order Status
  order_status VARCHAR(50) DEFAULT 'pending',
  
  -- Pricing
  subtotal DECIMAL(10, 2) NOT NULL,
  shipping_fee DECIMAL(10, 2) DEFAULT 0,
  grand_total DECIMAL(10, 2) NOT NULL,
  
  -- Order Items (stored as JSONB)
  items JSONB,
  
  -- Notes
  admin_notes TEXT,
  customer_notes TEXT
);

-- Create indexes for faster queries
CREATE INDEX idx_orders_customer_email ON orders(customer_email);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX idx_orders_order_status ON orders(order_status);
CREATE INDEX idx_orders_payment_status ON orders(payment_status);

-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create RLS policy for admin access (can be modified later)
CREATE POLICY "Enable read access for authenticated users" ON orders
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for unauthenticated users" ON orders
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON orders
  FOR UPDATE
  USING (auth.role() = 'authenticated');
