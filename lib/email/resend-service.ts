"use server"

import { Resend } from "resend"

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface OrderEmailData {
  orderId: string
  customerName: string
  customerEmail: string
  items: {
    name: string
    price: number
    quantity: number
  }[]
  subtotal: number
  shippingFee: number
  tax: number
  grandTotal: number
  shippingAddress: {
    address: string
    city: string
    state: string
    zip: string
    country: string
  }
  paymentMethod: string
  orderStatus: string
}

export interface EmailResponse {
  success: boolean
  id?: string
  error?: string
}

// ============================================
// LAZY RESEND CLIENT INITIALIZATION
// ============================================

let resendClient: Resend | null = null

function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set")
    }
    resendClient = new Resend(apiKey)
  }
  return resendClient
}

// ============================================
// EMAIL TEMPLATES
// ============================================

function customerEmailTemplate(data: OrderEmailData): string {
  const itemsHtml = data.items
    .map(
      (item) =>
        `<tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${item.name}</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; text-align: center;">x${item.quantity}</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>`
    )
    .join("")

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    
    <!-- Header -->
    <h1 style="color: #1a5f3d; margin-bottom: 10px; text-align: center;">Order Confirmation</h1>
    <p style="color: #666; text-align: center; margin-bottom: 30px;">Thank you for your purchase!</p>
    
    <!-- Order Details -->
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
      <p style="margin: 5px 0;"><strong>Order Number:</strong> #${data.orderId}</p>
      <p style="margin: 5px 0;"><strong>Status:</strong> ${data.orderStatus}</p>
      <p style="margin: 5px 0;"><strong>Payment Method:</strong> ${data.paymentMethod}</p>
    </div>
    
    <!-- Shipping Address -->
    <div style="margin-bottom: 25px;">
      <h3 style="color: #1a5f3d; margin-bottom: 10px;">Shipping Address</h3>
      <p style="margin: 5px 0; color: #666;">
        ${data.shippingAddress.address}<br>
        ${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.zip}<br>
        ${data.shippingAddress.country}
      </p>
    </div>
    
    <!-- Items Table -->
    <h3 style="color: #1a5f3d; margin-bottom: 15px;">Order Items</h3>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
      <thead>
        <tr style="background-color: #f0f0f0; border-bottom: 2px solid #1a5f3d;">
          <th style="padding: 10px; text-align: left; font-weight: bold;">Product</th>
          <th style="padding: 10px; text-align: center; font-weight: bold;">Quantity</th>
          <th style="padding: 10px; text-align: right; font-weight: bold;">Price</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
      </tbody>
    </table>
    
    <!-- Order Total -->
    <div style="border-top: 2px solid #1a5f3d; padding-top: 15px;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span>Subtotal:</span>
        <strong>$${data.subtotal.toFixed(2)}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span>Shipping:</span>
        <strong>$${data.shippingFee.toFixed(2)}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
        <span>Tax:</span>
        <strong>$${data.tax.toFixed(2)}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 18px; color: #1a5f3d;">
        <span><strong>Total:</strong></span>
        <strong>$${data.grandTotal.toFixed(2)}</strong>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 12px;">
      <p>We'll send tracking information once your order ships.</p>
      <p>Questions? Reply to this email or contact us at support@naturalcannabisoil.shop</p>
    </div>
    
  </div>
</body>
</html>
  `
}

function sellerEmailTemplate(data: OrderEmailData): string {
  const itemsHtml = data.items
    .map(
      (item) =>
        `<tr>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${item.name}</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; text-align: center;">x${item.quantity}</td>
      <td style="padding: 8px; border-bottom: 1px solid #e0e0e0; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>`
    )
    .join("")

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Order Received</title>
</head>
<body style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    
    <!-- Header -->
    <h1 style="color: #1a5f3d; margin-bottom: 10px;">New Order Received</h1>
    <p style="color: #666; margin-bottom: 25px;">Order #${data.orderId}</p>
    
    <!-- Customer Info -->
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
      <h3 style="color: #1a5f3d; margin-top: 0;">Customer Information</h3>
      <p style="margin: 5px 0;"><strong>Name:</strong> ${data.customerName}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> ${data.customerEmail}</p>
      <p style="margin: 5px 0;"><strong>Payment Method:</strong> ${data.paymentMethod}</p>
    </div>
    
    <!-- Shipping Address -->
    <div style="margin-bottom: 25px;">
      <h3 style="color: #1a5f3d;">Shipping Address</h3>
      <p style="margin: 5px 0; color: #666;">
        ${data.shippingAddress.address}<br>
        ${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.zip}<br>
        ${data.shippingAddress.country}
      </p>
    </div>
    
    <!-- Items Table -->
    <h3 style="color: #1a5f3d;">Items Ordered</h3>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
      <thead>
        <tr style="background-color: #f0f0f0; border-bottom: 2px solid #1a5f3d;">
          <th style="padding: 10px; text-align: left; font-weight: bold;">Product</th>
          <th style="padding: 10px; text-align: center; font-weight: bold;">Qty</th>
          <th style="padding: 10px; text-align: right; font-weight: bold;">Price</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
      </tbody>
    </table>
    
    <!-- Order Total -->
    <div style="border-top: 2px solid #1a5f3d; padding-top: 15px; margin-bottom: 25px;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span>Subtotal:</span>
        <strong>$${data.subtotal.toFixed(2)}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span>Shipping:</span>
        <strong>$${data.shippingFee.toFixed(2)}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
        <span>Tax:</span>
        <strong>$${data.tax.toFixed(2)}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 18px; color: #1a5f3d;">
        <span><strong>Total:</strong></span>
        <strong>$${data.grandTotal.toFixed(2)}</strong>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; color: #999; font-size: 12px;">
      <p>This is an automated message. Please do not reply to this email.</p>
    </div>
    
  </div>
</body>
</html>
  `
}

// ============================================
// EMAIL FUNCTIONS
// ============================================

/**
 * Send order confirmation email to customer
 */
export async function sendCustomerEmail(data: OrderEmailData): Promise<EmailResponse> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("[Resend] RESEND_API_KEY not configured - customer email skipped")
      return { success: false, error: "Email service not configured" }
    }

    const client = getResendClient()
    const response = await client.emails.send({
      from: "orders@naturalcannabisoil.shop",
      to: data.customerEmail,
      subject: `Order Confirmation #${data.orderId}`,
      html: customerEmailTemplate(data),
      replyTo: "support@naturalcannabisoil.shop",
    })

    if (response.error) {
      console.error("[Resend] Customer email error:", response.error)
      return { success: false, error: response.error.message }
    }

    console.log("[Resend] Customer email sent:", response.data?.id)
    return { success: true, id: response.data?.id }
  } catch (error) {
    console.error("[Resend] Customer email exception:", error)
    return { success: false, error: String(error) }
  }
}

/**
 * Send order notification email to seller/admin
 */
export async function sendSellerEmail(data: OrderEmailData, sellerEmail: string): Promise<EmailResponse> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("[Resend] RESEND_API_KEY not configured - seller email skipped")
      return { success: false, error: "Email service not configured" }
    }

    const client = getResendClient()
    const response = await client.emails.send({
      from: "orders@naturalcannabisoil.shop",
      to: sellerEmail,
      subject: `New Order Received #${data.orderId}`,
      html: sellerEmailTemplate(data),
      replyTo: "support@naturalcannabisoil.shop",
    })

    if (response.error) {
      console.error("[Resend] Seller email error:", response.error)
      return { success: false, error: response.error.message }
    }

    console.log("[Resend] Seller email sent:", response.data?.id)
    return { success: true, id: response.data?.id }
  } catch (error) {
    console.error("[Resend] Seller email exception:", error)
    return { success: false, error: String(error) }
  }
}
