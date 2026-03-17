import type { Metadata } from "next"
import CheckoutWrapper from "./checkout-wrapper"

export const metadata: Metadata = {
  title: "Checkout | Natural Cannabis Oil",
  description:
    "Complete your cannabis oil order securely. Multiple payment options available. Discreet shipping on all orders.",
  alternates: {
    canonical: "https://naturalcannabisoil.shop/checkout",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function CheckoutPage() {
  return <CheckoutWrapper />
}
