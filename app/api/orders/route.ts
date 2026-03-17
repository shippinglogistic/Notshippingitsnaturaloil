import { NextResponse } from "next/server"
import { sendCustomerEmail, sendSellerEmail, type OrderEmailData } from "@/lib/email/resend-service"

export const dynamic = "force-dynamic"

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 })
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/orders?select=*&order=created_at.desc`, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json({ error: errorText }, { status: response.status })
    }

    const orders = await response.json()
    return NextResponse.json(orders)
  } catch (error) {
    console.error("Failed to fetch orders:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 })
  }

  try {
    const orderData = await request.json()

    const response = await fetch(`${supabaseUrl}/rest/v1/orders`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(orderData),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json({ error: errorText }, { status: response.status })
    }

    const [order] = await response.json()

    // Send emails to customer and seller
    try {
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

      // Send confirmation to customer
      const customerEmailResult = await sendCustomerEmail(emailData)
      if (!customerEmailResult.success) {
        console.warn("[Orders API] Customer email failed:", customerEmailResult.error)
      }

      // Send notification to seller
      const sellerEmail = process.env.SELLER_EMAIL || "admin@naturalcannabisoil.shop"
      const sellerEmailResult = await sendSellerEmail(emailData, sellerEmail)
      if (!sellerEmailResult.success) {
        console.warn("[Orders API] Seller email failed:", sellerEmailResult.error)
      }
    } catch (emailError) {
      // Log email error but don't fail the order
      console.error("[Orders API] Email service exception:", emailError)
    }

    return NextResponse.json(order)
  } catch (error) {
    console.error("Failed to create order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
