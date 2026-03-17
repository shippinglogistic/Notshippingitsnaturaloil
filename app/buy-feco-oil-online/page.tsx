import type { Metadata } from "next"
import { sanitizeString } from "@/lib/sanitize-string"
import { BuyFECOClient } from "./buy-feco-client"
import { FECOPurchasingGuide } from "./feco-purchasing-guide"

export const metadata: Metadata = {
  title: "Buy FECO Oil Online 2025 - Premium Lab-Tested Full Extract Cannabis Oil | Medical Grade | Free Shipping",
  description:
    "Buy premium lab-tested FECO (Full Extract Cannabis Oil) online with superior purity (92%+ THC). Syringes, capsules, suppositories. Medical-grade extraction, discreet shipping, Bitcoin accepted.",
  keywords: [
    "buy FECO oil online",
    "full extract cannabis oil for sale",
    "premium FECO 2025",
    "lab-tested FECO",
    "FECO syringes online",
    "medical-grade cannabis oil",
    "where to buy FECO",
    "authentic full-spectrum extract",
    "high-purity FECO",
    "FECO capsules for sale",
    "FECO suppositories",
    "professional cannabis extract",
    "ethanol extracted FECO",
    "clean cannabis oil",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/buy-feco-oil-online",
  },
  openGraph: {
    title: "Buy FECO Oil Online 2025 - Premium Lab-Tested Full Extract Cannabis Oil",
    description:
      "Medical-grade FECO with 92%+ THC. Multiple forms including suppositories. Lab-certified, discreet shipping, free over $100.",
    url: "https://naturalcannabisoil.shop/buy-feco-oil-online",
    type: "website",
    publishedTime: "2025-12-01",
    modifiedTime: "2025-12-12",
    images: [
      {
        url: "https://naturalcannabisoil.shop/green-cannabis-oil-syringe-with-natural-packaging.jpg",
        width: 1200,
        height: 630,
        alt: "Buy FECO Oil Online - Premium Lab-Tested Full Extract Cannabis Oil 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy FECO Oil Online 2025 - Premium Lab-Tested Full Extract Cannabis Oil",
    description:
      "Medical-grade FECO • 92%+ THC • Lab-certified • Multiple delivery methods • Discreet shipping • Free over $100",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const fecoLandingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: sanitizeString("FECO Oil - Full Extract Cannabis Oil"),
  description: sanitizeString(
    "Premium lab-tested FECO oil available online. Choose from 7 therapeutic ratios: THC-dominant, balanced 1:1, CBD-dominant. Lab-verified 90-96% cannabinoid potency. Discreet shipping, same-day processing.",
  ),
  image: "https://naturalcannabisoil.shop/green-cannabis-oil-syringe-with-natural-packaging.jpg",
  brand: {
    "@type": "Brand",
    name: sanitizeString("Natural Cannabis Oil Shop"),
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "55",
    highPrice: "1500",
    offerCount: "7",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: sanitizeString("Jennifer M.") },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: sanitizeString(
        "The 1:1 ratio FECO is perfect for my needs. Great for daytime use without being too sedating.",
      ),
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: sanitizeString("Robert H.") },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: sanitizeString(
        "High quality FECO with excellent ratio options. Highly recommend for sensitive users.",
      ),
    },
  ],
}

export default function BuyFECOOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fecoLandingSchema) }} />
      <BuyFECOClient />
      <FECOPurchasingGuide />
    </>
  )
}
