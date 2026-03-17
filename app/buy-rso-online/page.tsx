import type { Metadata } from "next"
import { sanitizeString } from "@/lib/sanitize-string"
import { BuyRSOClient } from "./buy-rso-client"

export const metadata: Metadata = {
  title: "Buy Authentic RSO Online 2025 - Lab-Tested Rick Simpson Oil | Premium Quality | Free Shipping Over $100",
  description:
    "Buy premium lab-tested Rick Simpson Oil (RSO) online with guaranteed potency (72-74% THC). Syringes, capsules, tinctures. Discreet nationwide shipping, same-day processing, secure payments.",
  keywords: [
    "buy RSO online",
    "Rick Simpson Oil for sale online",
    "authentic RSO purchase",
    "lab-tested RSO syringes",
    "premium RSO oils 2025",
    "where buy RSO",
    "RSO capsules online",
    "full spectrum RSO extract",
    "high-THC cannabis oil",
    "RSO tinctures for sale",
    "best RSO products",
    "discreet cannabis shipping",
    "lab certified RSO",
    "potent cannabis extracts",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/buy-rso-online",
  },
  openGraph: {
    title: "Buy Authentic RSO Online 2025 - Premium Lab-Tested Rick Simpson Oil",
    description:
      "Premium lab-tested RSO with 72-74% THC. Syringes, capsules, tinctures. Discreet nationwide shipping + free over $100.",
    url: "https://naturalcannabisoil.shop/buy-rso-online",
    type: "website",
    publishedTime: "2025-12-01",
    modifiedTime: "2025-12-12",
    images: [
      {
        url: "/images/rs02.jpg",
        width: 1200,
        height: 630,
        alt: "Buy RSO Online - Premium Lab-Tested Rick Simpson Oil 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Authentic RSO Online 2025 - Premium Lab-Tested Rick Simpson Oil",
    description:
      "Lab-tested RSO • 72-74% THC • Multiple forms • Discreet shipping • Free shipping over $100 • Same-day processing",
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

const rsoLandingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: sanitizeString("Buy Authentic RSO Online 2025 - Lab-Tested Rick Simpson Oil"),
    url: "https://naturalcannabisoil.shop/buy-rso-online",
    description: sanitizeString(
      "Buy premium lab-tested Rick Simpson Oil (RSO) online with guaranteed potency (72-74% THC). Syringes, capsules, tinctures. Discreet nationwide shipping, same-day processing, secure payments.",
    ),
    publisher: {
      "@type": "Organization",
      name: sanitizeString("Natural Cannabis Oil"),
      logo: {
        "@type": "ImageObject",
        url: "https://naturalcannabisoil.shop/logo.png",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: sanitizeString("What is Rick Simpson Oil (RSO)?"),
        acceptedAnswer: {
          "@type": "Answer",
          text: sanitizeString(
            "RSO is a potent, full-spectrum cannabis extract originally developed by Rick Simpson. It's known for its high THC content (72-74%) and is used for various therapeutic purposes including pain relief, sleep support, and appetite stimulation.",
          ),
        },
      },
      {
        "@type": "Question",
        name: sanitizeString("How do I use RSO products?"),
        acceptedAnswer: {
          "@type": "Answer",
          text: sanitizeString(
            "Start with a rice-grain sized dose (about 5-10mg) placed under the tongue or swallowed with fatty food. Wait 60-90 minutes before considering additional doses. Gradually increase over weeks following the standard protocol.",
          ),
        },
      },
      {
        "@type": "Question",
        name: sanitizeString("How long does RSO shipping take?"),
        acceptedAnswer: {
          "@type": "Answer",
          text: sanitizeString(
            "1-3 business days nationwide with USPS Priority Mail. Free tracked shipping on orders over $100. Same-day processing on orders placed before 2 PM PST.",
          ),
        },
      },
      {
        "@type": "Question",
        name: sanitizeString("Is RSO lab tested?"),
        acceptedAnswer: {
          "@type": "Answer",
          text: sanitizeString(
            "Yes, every batch is tested by independent third-party laboratories. Each product includes a QR code linking to the latest lab report showing cannabinoid profile, potency, and safety testing.",
          ),
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: sanitizeString("Home"), item: "https://naturalcannabisoil.shop" },
      {
        "@type": "ListItem",
        position: 2,
        name: sanitizeString("Buy RSO Online"),
        item: "https://naturalcannabisoil.shop/buy-rso-online",
      },
    ],
  },
]

export default function BuyRSOOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rsoLandingSchema) }} />
      <BuyRSOClient />
      {/* Full buyer's guide content goes here */}
    </>
  )
}
