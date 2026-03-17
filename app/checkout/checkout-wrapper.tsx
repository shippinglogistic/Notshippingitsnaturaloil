"use client"

import dynamic from "next/dynamic"

const CheckoutClient = dynamic(() => import("./checkout-client"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground">Loading checkout...</div>
    </div>
  ),
})

export default function CheckoutWrapper() {
  return <CheckoutClient />
}
