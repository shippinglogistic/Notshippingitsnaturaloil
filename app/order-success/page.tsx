import type { Metadata } from "next"
import { Suspense } from "react"
import OrderSuccessContent from "./order-success-content"

export const metadata: Metadata = {
  title: "Order Confirmed | Natural Cannabis Oil",
  description: "Your order has been successfully placed. Thank you for your purchase!",
  robots: {
    index: false,
    follow: false,
  },
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <OrderSuccessContent />
    </Suspense>
  )
}
