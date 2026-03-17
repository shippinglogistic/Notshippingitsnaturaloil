import type { Metadata } from "next"
import { RSOProductsPage } from "./rso-products-page"

export const metadata: Metadata = {
  title: "RSO (Rick Simpson Oil) - 5 Product Formats Available | Buy Online",
  description:
    "Buy premium Rick Simpson Oil (RSO) online in 5 formats: Tinctures, Capsules, Syringes, Edibles & Suppositories. Lab-tested, full-spectrum. Discreet shipping.",
  keywords: [
    "RSO",
    "Rick Simpson Oil",
    "buy RSO online",
    "RSO tincture",
    "RSO capsules",
    "RSO syringe",
    "RSO edibles",
    "RSO suppositories",
    "medical cannabis",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/products/rso",
  },
  openGraph: {
    title: "RSO (Rick Simpson Oil) - 5 Product Formats | Buy Online",
    description: "Premium RSO in Tinctures, Capsules, Syringes, Edibles & Suppositories. Lab-tested quality.",
    url: "https://naturalcannabisoil.shop/products/rso",
    siteName: "Natural Cannabis Oil",
  },
}

export default function RSOPage() {
  return <RSOProductsPage />
}
