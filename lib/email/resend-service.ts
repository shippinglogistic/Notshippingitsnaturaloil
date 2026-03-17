import { Resend } from "resend"

// Initialize Resend with API key (lazy initialization to avoid build errors)
let resend: Resend | null = null

function getResendClient(): Resend {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error(
        'RESEND_API_KEY environment variable is not set. Please add it to your Vercel environment variables.'
      )
    }
    resend = new Resend(apiKey)
  }
  return resend
}

export interface OrderEmailData {
  orderId: string
  customerName: string
  customerEmail: string
  items: Array<{
    name: string
    price: number
    quantity: number
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
  orderStatus: string
}

// Email templates
const customerOrderConfirmationTemplate = (data: OrderEmailData) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #b8860b 0%, #daa520 100%); color: white; padding: 20px; border-radius: 5px; }
    .content { background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px; }
    .order-details { background: white; padding: 15px; border-radius: 5px; margin: 10px 0; }
    .item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
    .total { font-size: 18px; font-weight: bold; color: #b8860b; margin-top: 10px; }
    .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Order Confirmation</h1>
    </div>
    
    <div class="content">
      <p>Thank you for your order, ${data.customerName}!</p>
      
      <p>Your order has been received and is being processed. Here are your order details:</p>
      
      <div class="order-details">
        <strong>Order ID:</strong> ${data.orderId}<br/>
        <strong>Status:</strong> ${data.orderStatus}<br/>
        <strong>Order Date:</strong> ${new Date().toLocaleDateString()}<br/>
      </div>
      
      <h3>Items Ordered:</h3>
      <div class="order-details">
        ${data.items
          .map(
            (item) => `
          <div class="item">
            <div>
              <strong>${item.name}</strong><br/>
              Quantity: ${item.quantity}
            </div>
            <div>$${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        `
          )
          .join("")}
      </div>
      
      <div class="order-details">
        <div class="item">
          <div>Subtotal</div>
          <div>$${data.subtotal.toFixed(2)}</div>
        </div>
        <div class="item">
          <div>Shipping Fee</div>
          <div>$${data.shippingFee.toFixed(2)}</div>
        </div>
        <div class="item">
          <div>Tax</div>
          <div>$${data.tax.toFixed(2)}</div>
        </div>
        <div class="total">
          <div class="item">
            <div>TOTAL</div>
            <div>$${data.grandTotal.toFixed(2)}</div>
          </div>
        </div>
      </div>
      
      <h3>Shipping Address:</h3>
      <div class="order-details">
        ${data.shippingAddress.address}<br/>
        ${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.zip}<br/>
        ${data.shippingAddress.country}
      </div>
      
      <p><strong>Payment Method:</strong> ${data.paymentMethod}</p>
      
      <p>We will send you tracking information once your order ships. If you have any questions, please don't hesitate to contact us.</p>
    </div>
    
    <div class="footer">
      <p>Natural Cannabis Oil Shop | https://naturalcannabisoil.shop</p>
      <p>© 2025 Natural Cannabis Oil. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`

const sellerOrderNotificationTemplate = (data: OrderEmailData) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #333; color: white; padding: 20px; border-radius: 5px; }
    .content { background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px; }
    .alert { background: #fff3cd; border: 1px solid #ffc107; padding: 15px; border-radius: 5px; margin: 10px 0; }
    .item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
    .total { font-size: 18px; font-weight: bold; color: #333; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Order Received - Order ID: ${data.orderId}</h1>
    </div>
    
    <div class="alert">
      <strong>⚠️ New Order Alert</strong><br/>
      A new order has been received and requires processing.
    </div>
    
    <div class="content">
      <h3>Customer Information:</h3>
      <p>
        <strong>Name:</strong> ${data.customerName}<br/>
        <strong>Email:</strong> ${data.customerEmail}<br/>
      </p>
      
      <h3>Items Ordered:</h3>
      ${data.items
        .map(
          (item) => `
        <div class="item">
          <div>
            <strong>${item.name}</strong><br/>
            Quantity: ${item.quantity}
          </div>
          <div>$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      `
        )
        .join("")}
      
      <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
        <div class="item">
          <div>Subtotal</div>
          <div>$${data.subtotal.toFixed(2)}</div>
        </div>
        <div class="item">
          <div>Shipping</div>
          <div>$${data.shippingFee.toFixed(2)}</div>
        </div>
        <div class="item">
          <div>Tax</div>
          <div>$${data.tax.toFixed(2)}</div>
        </div>
        <div class="total">
          <div class="item">
            <div>TOTAL</div>
            <div>$${data.grandTotal.toFixed(2)}</div>
          </div>
        </div>
      </div>
      
      <h3>Shipping Address:</h3>
      <p>
        ${data.shippingAddress.address}<br/>
        ${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.zip}<br/>
        ${data.shippingAddress.country}
      </p>
      
      <p><strong>Payment Method:</strong> ${data.paymentMethod}</p>
    </div>
  </div>
</body>
</html>
`

/**
 * Send order confirmation email to customer
 */
export async function sendCustomerOrderConfirmation(data: OrderEmailData) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured - email notification skipped")
      return { success: false, error: "Email service not configured" }
    }

    const client = getResendClient()
    const response = await client.emails.send({
      from: "orders@naturalcannabisoil.shop",
      to: data.customerEmail,
      subject: `Order Confirmation - Order #${data.orderId}`,
      html: customerOrderConfirmationTemplate(data),
      replyTo: "support@naturalcannabisoil.shop",
    })

    return { success: true, messageId: response.data?.id }
  } catch (error) {
    console.error("Failed to send customer confirmation email:", error)
    return { success: false, error: "Failed to send email" }
  }
}

/**
 * Send order notification email to seller/admin
 */
export async function sendSellerOrderNotification(data: OrderEmailData, sellerEmail: string) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured - email notification skipped")
      return { success: false, error: "Email service not configured" }
    }

    const client = getResendClient()
    }

    const response = await client.emails.send({
      from: "orders@naturalcannabisoil.shop",
      to: sellerEmail,
      subject: `New Order Received - #${data.orderId}`,
      html: sellerOrderNotificationTemplate(data),
      replyTo: "support@naturalcannabisoil.shop",
    })

    return { success: true, messageId: response.data?.id }
  } catch (error) {
    console.error("Failed to send seller notification email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
