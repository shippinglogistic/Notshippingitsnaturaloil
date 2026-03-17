import { NextResponse } from "next/server"
import { sendOrderStatusUpdateEmail } from "@/lib/email/send-order-notification"

export const dynamic = "force-dynamic"

// GET single order
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 })
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/orders?id=eq.${id}&select=*`, {
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
    if (orders.length === 0) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    return NextResponse.json(orders[0])
  } catch (error) {
    console.error("Failed to fetch order:", error)
    return NextResponse.json({ error: "Failed to fetch order" }, { status: 500 })
  }
}

// PATCH to update order status
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 })
  }

  try {
    const updates = await request.json()

    // First get the current order to have customer info for email
    const getResponse = await fetch(`${supabaseUrl}/rest/v1/orders?id=eq.${id}&select=*`, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })

    if (!getResponse.ok) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    const [currentOrder] = await getResponse.json()
    if (!currentOrder) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    // Update the order
    const response = await fetch(`${supabaseUrl}/rest/v1/orders?id=eq.${id}`, {
      method: "PATCH",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        ...updates,
        updated_at: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json({ error: errorText }, { status: response.status })
    }

    const [updatedOrder] = await response.json()

    // Send status update email if order_status changed
    if (updates.order_status && updates.order_status !== currentOrder.order_status) {
      try {
        await sendOrderStatusUpdateEmail({
          orderId: id,
          customerEmail: currentOrder.customer_email,
          customerName: `${currentOrder.customer_first_name} ${currentOrder.customer_last_name}`,
          newStatus: updates.order_status,
          trackingNumber: updates.tracking_number,
        })
      } catch (emailError) {
        console.error("Failed to send status update email:", emailError)
      }
    }

    return NextResponse.json(updatedOrder)
  } catch (error) {
    console.error("Failed to update order:", error)
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 })
  }
}
