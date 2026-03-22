import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"

import { CartProvider } from "@/lib/cart-context"
import { ScrollToTop } from "@/components/scroll-to-top"
import WhatsAppWidget from "@/components/WhatsAppWidget"
import TawkWidget from "@/components/TawkWidget"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  applicationName: "Buy RSO and FECO Online",
  title: {
    default: "Buy RSO and FECO Online | Rick Simpson Oil & Full Extract Cannabis Oil",
    template: "%s | Buy RSO and FECO Online",
  },
  description:
    "Buy Rick Simpson Oil (RSO) and Full Extract Cannabis Oil (FECO) online now. Lab-tested full-spectrum cannabis oil with discreet nationwide shipping today.",
  keywords: [
    "buy RSO oil online",
    "FECO cannabis oil for sale",
    "buy FECO online",
    "premium FECO extracts",
    "FECO oil delivery",
    "lab-tested FECO online",
    "FECO syringes purchase",
    "FECO capsules buy",
    "discreet FECO shipping",
    "best FECO extract online",
    "full spectrum FECO sale",
    "buy Rick Simpson Oil online",
    "lab-tested RSO for sale",
    "premium RSO oil",
    "RSO syringes online",
    "RSO cannabis oil purchase",
    "discreet RSO shipping",
    "full spectrum RSO",
    "RSO capsules online",
    "order RSO oil",
    "best RSO extract online",
    "Rick Simpson Oil for sale",
    "premium Rick Simpson Oil",
    "lab-tested Rick Simpson Oil",
    "Rick Simpson Oil syringes",
    "discreet Rick Simpson Oil shipping",
    "Rick Simpson Oil capsules",
    "order Rick Simpson Oil",
    "full spectrum Rick Simpson Oil",
    "best Rick Simpson Oil online",
    "buy Full Extract Cannabis Oil online",
    "Full Extract Cannabis Oil for sale",
    "premium Full Extract Cannabis Oil",
    "lab-tested Full Extract Cannabis Oil",
    "Full Extract Cannabis Oil syringes",
    "discreet Full Extract Cannabis Oil shipping",
    "Full Extract Cannabis Oil capsules",
    "order Full Extract Cannabis Oil",
    "best Full Extract Cannabis Oil online",
    "full spectrum Full Extract Cannabis Oil",
  ],
  authors: [{ name: "Natural Cannabis Oil Shop", url: "https://www.naturalcannabisoil.shop" }],
  creator: "Natural Cannabis Oil",
  publisher: "Natural Cannabis Oil",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.naturalcannabisoil.shop"),
  alternates: {
    canonical: "https://www.naturalcannabisoil.shop",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon.ico", sizes: "180x180" }],
  },
  openGraph: {
    title: "Buy RSO and FECO Online | Rick Simpson Oil & Full Extract Cannabis Oil",
    description:
      "Buy Rick Simpson Oil (RSO) and Full Extract Cannabis Oil (FECO) online now. Lab-tested full-spectrum cannabis oil with discreet nationwide shipping today.",
    url: "https://www.naturalcannabisoil.shop",
    siteName: "Buy RSO and FECO Online",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.naturalcannabisoil.shop/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buy Rick Simpson Oil (RSO) & FECO Online - Lab-Tested Cannabis Oil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy RSO and FECO Online | Rick Simpson Oil & Full Extract Cannabis Oil",
    description:
      "Buy Rick Simpson Oil (RSO) and Full Extract Cannabis Oil (FECO) online now. Lab-tested full-spectrum cannabis oil with discreet nationwide shipping today.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  generator: "Natural Cannabis Oil Website",
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.naturalcannabisoil.shop/#website",
  name: "Buy RSO and FECO Online",
  alternateName: ["Natural Cannabis Oil Shop", "RSO for Cancer", "Rick Simpson Oil Shop"],
  url: "https://www.naturalcannabisoil.shop",
  description:
    "Premium Rick Simpson Oil (RSO) and Full Extract Cannabis Oil (FECO) for cancer treatment and symptom relief. Lab-tested quality for pain relief, cancer support, anxiety & wellness.",
  publisher: {
    "@type": "Organization",
    "@id": "https://www.naturalcannabisoil.shop/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.naturalcannabisoil.shop/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://naturalcannabisoil.shop/#organization",
  name: "Buy RSO and FECO Online",
  legalName: "Natural Cannabis Oil LLC",
  alternateName: ["Natural Cannabis Oil Shop", "RSO for Cancer", "Rick Simpson Oil Shop"],
  url: "https://naturalcannabisoil.shop",
  logo: {
    "@type": "ImageObject",
    "@id": "https://naturalcannabisoil.shop/#logo",
    url: "https://naturalcannabisoil.shop/logo.svg",
    contentUrl: "https://naturalcannabisoil.shop/logo.svg",
    width: 200,
    height: 60,
    caption: "Rick Simpson Oil for Cancer - Premium RSO & FECO",
  },
  image: {
    "@type": "ImageObject",
    url: "https://naturalcannabisoil.shop/og-image.jpg",
    width: 1200,
    height: 630,
  },
  description:
    "Rick Simpson Oil for Cancer specializes in premium Rick Simpson Oil (RSO) and Full Extract Cannabis Oil (FECO) for cancer treatment and symptom management. Lab-tested, high-potency cannabis extracts for pain relief, cancer support, anxiety and wellness. Trusted by 1200+ customers worldwide.",
  slogan: "Pure - Potent - Trusted Since 2020",
  foundingDate: "2020",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "support@naturalcannabisoil.shop",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
      contactOption: "TollFree",
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4568",
      contactType: "sales",
      email: "sales@naturalcannabisoil.shop",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
  ],
  sameAs: [
    "https://twitter.com/naturalcannabisoil",
    "https://facebook.com/naturalcannabisoil",
    "https://instagram.com/naturalcannabisoil",
    "https://pinterest.com/naturalcannabisoil",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90001",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1247",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sarah Mitchell",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2024-11-15",
      reviewBody:
        "Outstanding quality RSO! Helped tremendously with my chronic pain. Lab reports are legit and shipping was discreet. Highly recommend Rick Simpson Oil for Cancer.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Michael Chen",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2024-11-20",
      reviewBody:
        "Best FECO I've tried. Very potent and clean. Customer service answered all my questions patiently. Will order again!",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Jennifer Rodriguez",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2024-12-01",
      reviewBody:
        "Excellent experience from start to finish. RSO tinctures are exactly what I needed for anxiety relief. Great pricing on bulk orders too.",
    },
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://naturalcannabisoil.shop/#store",
  name: "Buy RSO and FECO Online",
  image: "https://naturalcannabisoil.shop/og-image.jpg",
  url: "https://naturalcannabisoil.shop",
  telephone: "+1-555-123-4567",
  email: "support@naturalcannabisoil.shop",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90001",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "34.0522",
    longitude: "-118.2437",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1247",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cannabis Oil Products",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "RSO Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Rick Simpson Oil (RSO)",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "FECO Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Full Extract Cannabis Oil (FECO)",
            },
          },
        ],
      },
    ],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://naturalcannabisoil.shop",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </head>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <CartProvider>
          <ScrollToTop />
          {children}
          <TawkWidget />
          <WhatsAppWidget />
        </CartProvider>
      </body>
    </html>
  )
}
