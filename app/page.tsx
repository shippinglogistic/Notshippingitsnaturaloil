import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { TrustBadges } from "@/components/trust-badges"
import { CategorySection } from "@/components/category-section"
import { FAQSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { SEOTextSection } from "@/components/seo-text-section"
import { ShopPremiumCTA } from "@/components/shop-premium-cta"

import { RecentBlogArticles } from "@/components/recent-blog-articles"
import { WhatIsRSOSection } from "@/components/what-is-rso-section"
import { RSoProductsSection } from "@/components/rso-products-section"
import { WhatIsFECOSection } from "@/components/what-is-feco-section"
import { FECOProductsSection } from "@/components/feco-products-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { HowItWorksSection } from "@/components/how-it-works-section"

export const metadata: Metadata = {
  title: "Buy Premium RSO & FECO | Lab-Tested Cannabis Oil Online",
  description:
    "Buy lab-tested Rick Simpson Oil (RSO) and Full Extract Cannabis Oil (FECO) online. Premium cannabis extracts for pain, cancer support, and wellness. Discreet nationwide shipping.",
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
  alternates: {
    canonical: "https://www.naturalcannabisoil.shop",
  },
  openGraph: {
    title: "Buy Premium RSO & FECO Online - Lab-Tested Cannabis Extracts",
    description:
      "Authentic RSO and FECO with 72-95% THC. Lab-tested, multiple forms, discreet shipping, free over $100. 4.8★ rated.",
    url: "https://www.naturalcannabisoil.shop",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.naturalcannabisoil.shop/dark-amber-cannabis-oil-dropper-bottle.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Rick Simpson Oil and FECO Cannabis Extracts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Premium RSO & FECO Online - Lab-Tested Cannabis Extracts",
    description:
      "Authentic lab-tested RSO (72-74% THC) and FECO (92%+ THC). Syringes, capsules, tinctures. Free shipping $100+. 4.8★",
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

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Premium Cannabis Oil Products",
  description: "Shop our selection of lab-tested cannabis oils, RSO, FECO, tinctures, and edibles",
  numberOfItems: 9,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "RSO (Rick Simpson Oil)",
        description: "THC-rich, full-spectrum oil. Lab tested with 93.3% total THC. Strong symptom relief.",
        image: "https://www.naturalcannabisoil.shop/images/rso-1g.png",
        url: "https://www.naturalcannabisoil.shop/products/rso",
        brand: {
          "@type": "Brand",
          name: "Natural Cannabis Oil",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "60.00",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          url: "https://www.naturalcannabisoil.shop/products/rso",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
          bestRating: "5",
          worstRating: "1",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "FECO (Full Extract Cannabis Oil)",
        description: "Multiple cannabinoid ratios available. Choose from THC-dominant, CBD-dominant, or balanced.",
        image: "https://www.naturalcannabisoil.shop/images/feco-package.jpg",
        url: "https://www.naturalcannabisoil.shop/products/feco",
        brand: {
          "@type": "Brand",
          name: "Natural Cannabis Oil",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "55.00",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          url: "https://www.naturalcannabisoil.shop/products/feco",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "98",
          bestRating: "5",
          worstRating: "1",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Premium Tinctures",
        description: "Top 5 premium CBD brands. Easy sublingual dosing with fast absorption.",
        image: "https://www.naturalcannabisoil.shop/premium-cbd-tincture-bottles-collection.jpg",
        url: "https://www.naturalcannabisoil.shop/products/tinctures",
        brand: {
          "@type": "Brand",
          name: "Natural Cannabis Oil",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "39.99",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          url: "https://www.naturalcannabisoil.shop/products/tinctures",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          reviewCount: "215",
          bestRating: "5",
          worstRating: "1",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "THC/CBD Gummies",
        description: "Premium gummies from Kiva, Wana, and Papa & Barkley. Precise dosing for symptom relief.",
        image: "https://www.naturalcannabisoil.shop/premium-cannabis-gummies-colorful-assortment.jpg",
        url: "https://www.naturalcannabisoil.shop/products/edibles",
        brand: {
          "@type": "Brand",
          name: "Natural Cannabis Oil",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "24.99",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          url: "https://www.naturalcannabisoil.shop/products/edibles",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "287",
          bestRating: "5",
          worstRating: "1",
        },
      },
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is RSO (Rick Simpson Oil)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RSO (Rick Simpson Oil) is a full-spectrum cannabis extract known for its high THC content (typically 60-90%). It's made using a solvent extraction method and contains the full range of cannabinoids, terpenes, and other beneficial compounds found in the cannabis plant.",
      },
    },
    {
      "@type": "Question",
      name: "What is FECO (Full Extract Cannabis Oil)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FECO (Full Extract Cannabis Oil) is similar to RSO but typically made with food-grade ethanol. It preserves the full spectrum of cannabinoids and terpenes, offering various THC:CBD ratios for different therapeutic needs.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between RSO and FECO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both RSO and FECO are full-spectrum extracts with high potency. The main difference is the extraction method: RSO typically uses naphtha or other petroleum solvents, while FECO uses food-grade ethanol. Both preserve cannabinoids and terpenes, but FECO is often considered cleaner. Potency levels are similar (60-95% THC depending on starting material).",
      },
    },
    {
      "@type": "Question",
      name: "How much RSO should I take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with a dose the size of a grain of rice (about 1/20th of a gram), 2-3 times daily. Increase gradually over weeks as tolerated. Most patients find therapeutic doses between 1-3 grams daily after titration. Individual needs vary significantly—work with a healthcare professional for personalized guidance. Never rush the process.",
      },
    },
    {
      "@type": "Question",
      name: "How long does RSO last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Effects typically begin within 1-2 hours when taken orally and last 6-12 hours depending on dose and individual metabolism. Topical application provides localized relief in 15-45 minutes with effects lasting 3-4 hours. Storage: keep in a cool, dark place away from heat and light. Properly stored RSO remains potent for 1-2 years.",
      },
    },
    {
      "@type": "Question",
      name: "Is RSO legal where I live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cannabis legality varies significantly by location. RSO is legal in states where cannabis is legal for medical or recreational use. We ship to all 50 states and select international locations where permitted. Always verify local laws in your area before ordering, as legality depends on your jurisdiction.",
      },
    },
    {
      "@type": "Question",
      name: "Are your products lab-tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our RSO, FECO, and cannabis oil products undergo rigorous third-party laboratory testing for potency, purity, and safety. We test for cannabinoid content, terpene profiles, pesticides, heavy metals, residual solvents, and microbials. Certificates of Analysis (COA) are available upon request for every batch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you ship discreetly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all orders ship in plain, unmarked packaging with no indication of contents on the outside. Return address shows a generic business name for your privacy. We offer free shipping on orders over $100 to all 50 states, Canada, UK, and select international locations. Standard shipping takes 3-7 business days.",
      },
    },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Buy RSO and FECO Online",
  description:
    "Step-by-step guide to ordering lab-tested Rick Simpson Oil and Full Extract Cannabis Oil online with fast, discreet shipping.",
  image: "https://www.naturalcannabisoil.shop/og-image.jpg",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Browse Lab-Tested Products",
      description:
        "Explore our selection of premium RSO, FECO, and other cannabis extracts. All products are third-party lab tested for potency and purity.",
      image: "https://www.naturalcannabisoil.shop/images/rso-1g.png",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Add to Cart and Checkout",
      description:
        "Add your chosen products to your cart and proceed to our secure checkout. We accept multiple payment methods including Apple Pay, PayPal, Bitcoin, and more.",
      image: "https://www.naturalcannabisoil.shop/images/cart-checkout-example.jpg",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Receive Order Confirmation",
      description:
        "Get immediate order confirmation with tracking details. Your order is processed with priority handling and ships within 1-2 business days.",
      image: "https://www.naturalcannabisoil.shop/images/order-confirmation-email.jpg",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Fast, Discreet Shipping",
      description:
        "Orders arrive in plain, unmarked packaging. Free shipping on orders over $100. Most deliveries arrive within 3-7 business days to any location we serve.",
      image: "https://www.naturalcannabisoil.shop/images/plain-discreet-package.jpg",
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <WelcomeSection />
          <CategorySection />
          <WhyChooseUsSection />
          <WhatIsRSOSection />
          <RSoProductsSection />
          <WhatIsFECOSection />
          <FECOProductsSection />
          <HowItWorksSection />
          <NewsletterSection />
          <TrustBadges />
          <SEOTextSection />
          <FAQSection />
          <RecentBlogArticles />
          <ShopPremiumCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
