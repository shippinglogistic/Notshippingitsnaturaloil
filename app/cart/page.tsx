import type { Metadata } from "next"
import { CartPageClient } from "./cart-client"

export const metadata: Metadata = {
  title: "Shopping Cart | Natural Cannabis Oil",
  description:
    "Review your cannabis oil order. Premium RSO, FECO, tinctures, and edibles in your cart. Secure checkout with discreet shipping.",
  alternates: {
    canonical: "https://naturalcannabisoil.shop/cart",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function CartPage() {
  return <CartPageClient />
}
