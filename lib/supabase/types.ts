export interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

export interface SupabaseOrder {
  id: string
  created_at: string
  updated_at: string
  customer_first_name: string
  customer_last_name: string
  customer_email: string
  customer_phone: string
  shipping_country: string
  shipping_address: string
  shipping_city: string
  shipping_state: string
  shipping_zip: string
  shipping_method: string
  payment_method: string
  payment_status: "pending" | "confirmed" | "failed"
  order_status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  subtotal: number
  shipping_fee: number
  tax: number
  grand_total: number
  items: OrderItem[]
}
