import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Natural Cannabis Oil <onboarding@resend.dev>"

  if (!resendApiKey) {
    return NextResponse.json({ error: "RESEND_API_KEY not configured" }, { status: 400 })
  }

  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email address required" }, { status: 400 })
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: email,
        subject: "Test Email - Natural Cannabis Oil",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px 20px; background-color: #f9fafb;">
            <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h1 style="color: #166534; margin: 0 0 16px;">Email Configuration Test</h1>
              <p style="color: #374151; line-height: 1.6;">
                This is a test email from your Natural Cannabis Oil store.
              </p>
              <p style="color: #374151; line-height: 1.6;">
                If you received this email, your Resend integration is working correctly!
              </p>
              <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0;">
                  Sent from: ${fromEmail}
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      return NextResponse.json({ error }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json({ success: true, id: data.id })
  } catch (error) {
    console.error("Failed to send test email:", error)
    return NextResponse.json({ error: "Failed to send test email" }, { status: 500 })
  }
}
