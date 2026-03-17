import { notFound } from "next/navigation"
import { fecoProducts } from "@/lib/feco-products-data"
import { sanitizeString } from "@/lib/sanitize-string"
import { FECOProductDetail } from "./feco-product-detail"

export async function generateStaticParams() {
  return fecoProducts.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = fecoProducts.find((p) => p.slug === slug)

  if (!product) {
    return { title: "Product Not Found" }
  }

  const description = `Buy ${sanitizeString(product.name)} online - ${sanitizeString(product.description)}. Lab-tested, premium FECO. From $${product.basePrice}/g.`

  return {
    title: `${sanitizeString(product.name)} | Buy FECO Online - From $${product.basePrice}`,
    description,
    keywords: [
      "FECO",
      "Full Extract Cannabis Oil",
      product.name,
      "buy FECO online",
      "cannabis oil",
      "full spectrum FECO",
      "THC oil",
      "CBD oil",
    ],
    alternates: {
      canonical: `https://naturalcannabisoil.shop/products/feco/${slug}`,
    },
    openGraph: {
      title: `${sanitizeString(product.name)} | Buy FECO Online`,
      description,
      url: `https://naturalcannabisoil.shop/products/feco/${slug}`,
      type: "website",
      siteName: "Natural Cannabis Oil",
      images: [
        {
          url: product.image || "/placeholder.svg",
          width: 800,
          height: 800,
          alt: `${sanitizeString(product.name)} - Premium Full Extract Cannabis Oil`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${sanitizeString(product.name)} | Buy FECO Online`,
      description,
      images: [product.image || "/placeholder.svg"],
    },
  }
}

export default async function FECOProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = fecoProducts.find((p) => p.slug === slug)

  if (!product) {
    notFound()
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
        name: "FECO Products",
        item: "https://naturalcannabisoil.shop/products/feco",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://naturalcannabisoil.shop/products/feco/${slug}`,
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
          text: sanitizeString(product.fullDescription),
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
          text: sanitizeString(product.dosageGuide),
        },
      },
    ],
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: sanitizeString(product.fullDescription),
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "Natural Cannabis Oil",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: product.volumes[0].price,
      highPrice: product.volumes[product.volumes.length - 1].price,
      offerCount: product.volumes.length,
      availability: "https://schema.org/InStock",
      url: `https://naturalcannabisoil.shop/products/feco/${slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "98",
      bestRating: "5",
      worstRating: "1",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FECOProductDetail product={product} />
    </>
  )
}
