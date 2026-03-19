import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface OrderEmailData {
  orderId: string
  customerName: string
  customerEmail: string
  items: Array<{ name: string; quantity: number; price: number }>
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

export async function sendOrderNotifications(orderData: OrderEmailData) {
  try {
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'sales@naturalcannabisoil.shop'
    const sellerEmail = process.env.RESEND_SELLER_EMAIL || 'orders@naturalcannabisoil.shop'

    const itemsHtml = orderData.items
      .map(
        (item) =>
          `<tr><td>${item.name}</td><td>${item.quantity}</td><td>$${item.price.toFixed(2)}</td></tr>`
      )
      .join('')

    const customerHtml = `
      <h2>Order Confirmation</h2>
      <p>Thank you for your order!</p>
      <p><strong>Order ID:</strong> ${orderData.orderId}</p>
      <table border="1" cellpadding="10">
        <tr><th>Product</th><th>Qty</th><th>Price</th></tr>
        ${itemsHtml}
      </table>
      <p><strong>Subtotal:</strong> $${orderData.subtotal.toFixed(2)}</p>
      <p><strong>Shipping:</strong> $${orderData.shippingFee.toFixed(2)}</p>
      <p><strong>Tax:</strong> $${orderData.tax.toFixed(2)}</p>
      <p><strong>Total:</strong> $${orderData.grandTotal.toFixed(2)}</p>
      <p><strong>Shipping Address:</strong><br/>${orderData.shippingAddress.address}, ${orderData.shippingAddress.city}, ${orderData.shippingAddress.state} ${orderData.shippingAddress.zip}, ${orderData.shippingAddress.country}</p>
    `

    const sellerHtml = `
      <h2>New Order Received</h2>
      <p><strong>Customer:</strong> ${orderData.customerName}</p>
      <p><strong>Email:</strong> ${orderData.customerEmail}</p>
      <p><strong>Order ID:</strong> ${orderData.orderId}</p>
      <table border="1" cellpadding="10">
        <tr><th>Product</th><th>Qty</th><th>Price</th></tr>
        ${itemsHtml}
      </table>
      <p><strong>Total:</strong> $${orderData.grandTotal.toFixed(2)}</p>
    `

    // Send to customer
    await resend.emails.send({
      from: fromEmail,
      to: orderData.customerEmail,
      subject: `Order Confirmation #${orderData.orderId}`,
      html: customerHtml,
    })

    // Send to seller
    await resend.emails.send({
      from: fromEmail,
      to: sellerEmail,
      subject: `New Order #${orderData.orderId}`,
      html: sellerHtml,
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending emails:', error)
    throw error
  }
}
