import { NextResponse } from "next/server"
import { sendOrderNotifications, type OrderEmailData } from "@/lib/email"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 })
  }

  try {
    const orderData = await request.json()

    // Insert order into Supabase
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
      console.error("Supabase error:", errorText)
      return NextResponse.json({ error: "Failed to save order" }, { status: response.status })
    }

    const order = await response.json()

    // Send emails
    try {
      const emailData: OrderEmailData = {
        orderId: order[0].id,
        customerName: `${order[0].customer_first_name} ${order[0].customer_last_name}`,
        customerEmail: order[0].customer_email,
        items: order[0].items,
        subtotal: Number(order[0].subtotal),
        shippingFee: Number(order[0].shipping_fee),
        tax: Number(order[0].tax || 0),
        grandTotal: Number(order[0].grand_total),
        shippingAddress: {
          address: order[0].shipping_address,
          city: order[0].shipping_city,
          state: order[0].shipping_state,
          zip: order[0].shipping_zip,
          country: order[0].shipping_country,
        },
        paymentMethod: order[0].payment_method,
        orderStatus: order[0].order_status || "pending",
      }

      await sendOrderNotifications(emailData)
    } catch (emailError) {
      console.error("Email send error:", emailError)
      // Don't fail the order if emails don't send
    }

    return NextResponse.json(
      { success: true, orderId: order[0].id },
      { status: 201 }
    )
  } catch (error) {
    console.error("Order creation error:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
