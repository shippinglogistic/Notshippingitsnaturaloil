"use server"

interface OrderEmailData {
  orderId: string
  customerEmail: string
  customerName: string
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
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
  shippingMethod: string
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "orders@naturalcannabisoil.shop"
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Natural Cannabis Oil <orders@naturalcannabisoil.shop>"

export async function sendOrderNotificationEmail(orderData: OrderEmailData) {
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    console.error("RESEND_API_KEY not configured - skipping email notifications")
    return { success: false, error: "Email service not configured" }
  }

  try {
    // Send customer confirmation email
    const customerEmailResult = await sendCustomerConfirmation(resendApiKey, orderData)

    // Send admin notification email
    const adminEmailResult = await sendAdminNotification(resendApiKey, orderData)

    return {
      success: customerEmailResult.success && adminEmailResult.success,
      customerEmailId: customerEmailResult.id,
      adminEmailId: adminEmailResult.id,
    }
  } catch (error) {
    console.error("Failed to send order notification emails:", error)
    return { success: false, error: "Failed to send emails" }
  }
}

export async function sendOrderStatusUpdateEmail(orderData: {
  orderId: string
  customerEmail: string
  customerName: string
  newStatus: string
  trackingNumber?: string
}) {
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    console.error("RESEND_API_KEY not configured")
    return { success: false, error: "Email service not configured" }
  }

  const statusMessages: Record<string, { title: string; message: string; color: string }> = {
    processing: {
      title: "Order Being Processed",
      message: "Great news! Your order is now being processed and will be shipped soon.",
      color: "#2563eb",
    },
    shipped: {
      title: "Order Shipped!",
      message: "Your order is on its way! You can track your package using the tracking number below.",
      color: "#7c3aed",
    },
    delivered: {
      title: "Order Delivered",
      message: "Your order has been delivered. We hope you enjoy your products!",
      color: "#16a34a",
    },
    cancelled: {
      title: "Order Cancelled",
      message: "Your order has been cancelled. If you have any questions, please contact our support team.",
      color: "#dc2626",
    },
  }

  const status = statusMessages[orderData.newStatus] || {
    title: "Order Update",
    message: `Your order status has been updated to: ${orderData.newStatus}`,
    color: "#6b7280",
  }

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); overflow: hidden;">
          <div style="background-color: ${status.color}; padding: 32px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">${status.title}</h1>
          </div>
          
          <div style="padding: 32px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
              Hi ${orderData.customerName},
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
              ${status.message}
            </p>
            
            <div style="background-color: #f3f4f6; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <p style="color: #6b7280; font-size: 12px; margin: 0 0 4px; text-transform: uppercase;">Order ID</p>
              <p style="color: #111827; font-size: 14px; font-family: monospace; margin: 0;">${orderData.orderId}</p>
            </div>
            
            ${
              orderData.trackingNumber
                ? `
            <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <p style="color: #166534; font-size: 12px; margin: 0 0 4px; text-transform: uppercase; font-weight: 600;">Tracking Number</p>
              <p style="color: #14532d; font-size: 16px; font-family: monospace; margin: 0;">${orderData.trackingNumber}</p>
            </div>
            `
                : ""
            }
            
            <p style="color: #6b7280; font-size: 14px; margin: 24px 0 0;">
              Thank you for choosing Natural Cannabis Oil!
            </p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 24px 32px; text-align: center;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Questions? Contact us at support@naturalcannabisoil.shop
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: orderData.customerEmail,
        subject: `${status.title} - Order ${orderData.orderId.slice(0, 8)}`,
        html,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("Failed to send status update email:", error)
      return { success: false, error }
    }

    const data = await response.json()
    return { success: true, id: data.id }
  } catch (error) {
    console.error("Failed to send status update email:", error)
    return { success: false, error: "Failed to send email" }
  }
}

async function sendCustomerConfirmation(apiKey: string, orderData: OrderEmailData) {
  const itemsHtml = orderData.items
    .map(
      (item) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${item.name}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
      </tr>
    `,
    )
    .join("")

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); overflow: hidden;">
          <div style="background-color: #166534; padding: 32px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Order Confirmed!</h1>
          </div>
          
          <div style="padding: 32px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
              Hi ${orderData.customerName},
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
              Thank you for your order! We've received your order and will process it shortly.
            </p>
            
            <div style="background-color: #f3f4f6; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <p style="color: #6b7280; font-size: 12px; margin: 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em;">Order ID</p>
              <p style="color: #111827; font-size: 14px; font-family: monospace; margin: 0;">${orderData.orderId}</p>
            </div>
            
            <h2 style="color: #111827; font-size: 18px; margin: 0 0 16px;">Order Details</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <thead>
                <tr style="background-color: #f9fafb;">
                  <th style="padding: 12px; text-align: left; font-size: 12px; color: #6b7280; text-transform: uppercase;">Item</th>
                  <th style="padding: 12px; text-align: center; font-size: 12px; color: #6b7280; text-transform: uppercase;">Qty</th>
                  <th style="padding: 12px; text-align: right; font-size: 12px; color: #6b7280; text-transform: uppercase;">Price</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>
            
            <div style="border-top: 2px solid #e5e7eb; padding-top: 16px;">
              <table style="width: 100%;">
                <tr>
                  <td style="color: #6b7280; padding: 4px 0;">Subtotal</td>
                  <td style="color: #111827; text-align: right; padding: 4px 0;">$${orderData.subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; padding: 4px 0;">Shipping (${orderData.shippingMethod})</td>
                  <td style="color: #111827; text-align: right; padding: 4px 0;">$${orderData.shippingFee.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; padding: 4px 0;">Tax</td>
                  <td style="color: #111827; text-align: right; padding: 4px 0;">$${orderData.tax.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="color: #111827; font-weight: 600; font-size: 18px; padding: 12px 0 4px; border-top: 1px solid #e5e7eb;">Total</td>
                  <td style="color: #166534; font-weight: 600; font-size: 18px; text-align: right; padding: 12px 0 4px; border-top: 1px solid #e5e7eb;">$${orderData.grandTotal.toFixed(2)}</td>
                </tr>
              </table>
            </div>
            
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
              <h3 style="color: #111827; font-size: 14px; margin: 0 0 8px;">Shipping Address</h3>
              <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 0;">
                ${orderData.shippingAddress.address}<br>
                ${orderData.shippingAddress.city}, ${orderData.shippingAddress.state} ${orderData.shippingAddress.zip}<br>
                ${orderData.shippingAddress.country}
              </p>
            </div>
            
            <div style="margin-top: 16px;">
              <h3 style="color: #111827; font-size: 14px; margin: 0 0 8px;">Payment Method</h3>
              <p style="color: #6b7280; font-size: 14px; margin: 0; text-transform: capitalize;">${orderData.paymentMethod}</p>
            </div>
          </div>
          
          <div style="background-color: #f9fafb; padding: 24px 32px; text-align: center;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Questions? Reply to this email or contact support@naturalcannabisoil.shop
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: orderData.customerEmail,
      subject: `Order Confirmed - ${orderData.orderId.slice(0, 8)}`,
      html,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error("Failed to send customer email:", error)
    return { success: false, error }
  }

  const data = await response.json()
  return { success: true, id: data.id }
}

async function sendAdminNotification(apiKey: string, orderData: OrderEmailData) {
  const itemsList = orderData.items
    .map((item) => `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
    .join("\n")

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); overflow: hidden;">
          <div style="background-color: #dc2626; padding: 32px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Order Received!</h1>
          </div>
          
          <div style="padding: 32px;">
            <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <p style="color: #991b1b; font-size: 12px; margin: 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">New Order</p>
              <p style="color: #7f1d1d; font-size: 14px; font-family: monospace; margin: 0;">${orderData.orderId}</p>
            </div>
            
            <div style="margin-bottom: 24px;">
              <h2 style="color: #111827; font-size: 16px; margin: 0 0 12px;">Customer Information</h2>
              <p style="color: #374151; font-size: 14px; margin: 0 0 4px;"><strong>Name:</strong> ${orderData.customerName}</p>
              <p style="color: #374151; font-size: 14px; margin: 0;"><strong>Email:</strong> ${orderData.customerEmail}</p>
            </div>
            
            <div style="margin-bottom: 24px;">
              <h2 style="color: #111827; font-size: 16px; margin: 0 0 12px;">Order Summary</h2>
              <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px;">
                <pre style="color: #374151; font-size: 14px; margin: 0; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">${itemsList}</pre>
              </div>
            </div>
            
            <div style="background-color: #f3f4f6; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <table style="width: 100%;">
                <tr>
                  <td style="color: #6b7280; font-size: 14px; padding: 4px 0;">Subtotal</td>
                  <td style="color: #111827; font-size: 14px; text-align: right; padding: 4px 0;">$${orderData.subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px; padding: 4px 0;">Shipping</td>
                  <td style="color: #111827; font-size: 14px; text-align: right; padding: 4px 0;">$${orderData.shippingFee.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px; padding: 4px 0;">Tax</td>
                  <td style="color: #111827; font-size: 14px; text-align: right; padding: 4px 0;">$${orderData.tax.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="color: #111827; font-size: 16px; font-weight: 600; padding: 8px 0 4px; border-top: 1px solid #e5e7eb;">Total</td>
                  <td style="color: #166534; font-size: 16px; font-weight: 600; text-align: right; padding: 8px 0 4px; border-top: 1px solid #e5e7eb;">$${orderData.grandTotal.toFixed(2)}</td>
                </tr>
              </table>
            </div>
            
            <table style="width: 100%;">
              <tr>
                <td style="vertical-align: top; width: 50%; padding-right: 8px;">
                  <h3 style="color: #111827; font-size: 14px; margin: 0 0 8px;">Shipping Address</h3>
                  <p style="color: #6b7280; font-size: 13px; line-height: 1.5; margin: 0;">
                    ${orderData.shippingAddress.address}<br>
                    ${orderData.shippingAddress.city}, ${orderData.shippingAddress.state} ${orderData.shippingAddress.zip}<br>
                    ${orderData.shippingAddress.country}
                  </p>
                </td>
                <td style="vertical-align: top; width: 50%; padding-left: 8px;">
                  <h3 style="color: #111827; font-size: 14px; margin: 0 0 8px;">Payment</h3>
                  <p style="color: #6b7280; font-size: 13px; margin: 0; text-transform: capitalize;">${orderData.paymentMethod}</p>
                  <p style="color: #6b7280; font-size: 13px; margin: 4px 0 0; text-transform: capitalize;">Shipping: ${orderData.shippingMethod}</p>
                </td>
              </tr>
            </table>
            
            <div style="margin-top: 32px; text-align: center;">
              <a href="https://naturalcannabisoil.shop/admin-orders" style="display: inline-block; background-color: #166534; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 500;">View All Orders</a>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Order - $${orderData.grandTotal.toFixed(2)} - ${orderData.customerName}`,
      html,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error("Failed to send admin email:", error)
    return { success: false, error }
  }

  const data = await response.json()
  return { success: true, id: data.id }
}
