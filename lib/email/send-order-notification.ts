import { Resend } from "resend"

interface SendOrderStatusUpdateEmailProps {
  orderId: string
  customerEmail: string
  customerName: string
  newStatus: string
  trackingNumber?: string
}

export async function sendOrderStatusUpdateEmail({
  orderId,
  customerEmail,
  customerName,
  newStatus,
  trackingNumber,
}: SendOrderStatusUpdateEmailProps) {
  const resendApiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL || "sales@naturalcannabisoil.shop"

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not configured")
    return
  }

  const resend = new Resend(resendApiKey)

  const statusMessages: Record<string, string> = {
    pending: "Your order is being prepared for shipment.",
    processing: "We are processing your order.",
    shipped: `Your order has been shipped! ${trackingNumber ? `Tracking number: ${trackingNumber}` : ""}`,
    delivered: "Your order has been delivered!",
    cancelled: "Your order has been cancelled.",
  }

  const statusMessage = statusMessages[newStatus] || `Your order status has been updated to: ${newStatus}`

  try {
    await resend.emails.send({
      from: fromEmail,
      to: customerEmail,
      subject: `Order ${orderId} Status Update`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Order Status Update</h2>
          <p>Hi ${customerName},</p>
          <p>${statusMessage}</p>
          <p><strong>Order ID:</strong> ${orderId}</p>
          <p>Thank you for your order!</p>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">Natural Cannabis Oil - Premium RSO & FECO</p>
        </div>
      `,
    })
  } catch (error) {
    console.error("Failed to send order status email:", error)
    throw error
  }
}
