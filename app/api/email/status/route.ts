import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  const resendApiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const adminEmail = process.env.ADMIN_EMAIL

  return NextResponse.json({
    configured: Boolean(resendApiKey),
    hasFromEmail: Boolean(fromEmail),
    hasAdminEmail: Boolean(adminEmail),
    // Don't expose actual values for security
  })
}
