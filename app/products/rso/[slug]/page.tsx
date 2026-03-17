import { notFound } from "next/navigation"
import { rsoProducts } from "@/lib/rso-products-data"
import { sanitizeString } from "@/lib/sanitize-string"
import { RSOProductDetail } from "./rso-product-detail"
import { RSOSyringeDetail } from "./rso-syringe-detail"

export async function generateStaticParams() {
  return rsoProducts.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = rsoProducts.find((p) => p.slug === slug)

  if (!product) {
    return { title: "Product Not Found" }
  }

  const description = `${product.whatItIs.substring(0, 165)}...`

  return {
    title: `${sanitizeString(product.name)} | Buy RSO Online - From $${product.basePrice}`,
    description,
    keywords: [
      "RSO",
      "Rick Simpson Oil",
      product.name,
      "buy RSO online",
      "cannabis oil",
      "full spectrum RSO",
      "THC oil",
      "lab tested",
      "certificate of analysis",
    ],
    alternates: {
      canonical: `https://naturalcannabisoil.shop/products/rso/${slug}`,
    },
    openGraph: {
      title: `${sanitizeString(product.name)} | Buy RSO Online`,
      description,
      url: `https://naturalcannabisoil.shop/products/rso/${slug}`,
      type: "website",
      siteName: "Natural Cannabis Oil",
      images: [
        {
          url: product.image || "/placeholder.svg",
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${sanitizeString(product.name)} | Buy RSO Online`,
      description,
      images: [product.image || "/placeholder.svg"],
    },
  }
}

export default async function RSOProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = rsoProducts.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  if (slug === "syringe") {
    return <RSOSyringeDetail />
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
      {
        "@type": "ListItem",
        position: 2,
        name: "RSO Products",
        item: "https://naturalcannabisoil.shop/products/rso",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://naturalcannabisoil.shop/products/rso/${slug}`,
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${sanitizeString(product.name)}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: sanitizeString(product.whatItIs),
        },
      },
      {
        "@type": "Question",
        name: "How do I use this product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: sanitizeString(product.howToUse.join(" ")),
        },
      },
      {
        "@type": "Question",
        name: "What are the dosage recommendations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Start with ${sanitizeString(product.dosageGuide[0].dose)} and gradually increase. Always consult with a healthcare provider.`,
        },
      },
    ],
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: sanitizeString(product.name),
    description: sanitizeString(product.whatItIs),
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "Natural Cannabis Oil",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: product.pricingTiers[0].totalPrice,
      highPrice: product.pricingTiers[product.pricingTiers.length - 1].totalPrice,
      offerCount: product.pricingTiers.length,
      availability: "https://schema.org/InStock",
      url: `https://naturalcannabisoil.shop/products/rso/${slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RSOProductDetail product={product} />
    </>
  )
}
