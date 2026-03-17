import type { Metadata } from "next"
import { FECOProductsPage } from "./feco-products-page"

export const metadata: Metadata = {
  title: "FECO (Full Extract Cannabis Oil) - 5 Product Formats Available | Buy Online",
  description:
    "Buy premium FECO online in 5 formats: Tinctures, Capsules, Syringes, Edibles & Suppositories. Lab-tested, full-spectrum cannabis extract. Discreet shipping.",
  keywords: [
    "FECO",
    "Full Extract Cannabis Oil",
    "buy FECO online",
    "FECO tincture",
    "FECO capsules",
    "FECO syringe",
    "FECO edibles",
    "FECO suppositories",
    "medical cannabis",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/products/feco",
  },
  openGraph: {
    title: "FECO (Full Extract Cannabis Oil) - 5 Product Formats | Buy Online",
    description: "Premium FECO in Tinctures, Capsules, Syringes, Edibles & Suppositories. Lab-tested quality.",
    url: "https://naturalcannabisoil.shop/products/feco",
    siteName: "Natural Cannabis Oil",
  },
}

export default function FECOPage() {
  return <FECOProductsPage />
}
