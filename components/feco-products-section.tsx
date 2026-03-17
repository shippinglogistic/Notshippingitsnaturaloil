"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { fecoProducts } from "@/lib/feco-products-data"
import { ArrowRight } from "lucide-react"

export function FECOProductsSection() {
  const displayProducts = fecoProducts.slice(0, 7)

  return (
    <section className="py-12 md:py-16 bg-muted/30 pt-[32.4%] pb-[32.4%] md:pt-[27.6%] md:pb-[27.6%]">
      <div className="mx-auto px-[6%] md:px-4 w-[91%]">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Full Extract Cannabis Oil (FECO) Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our premium FECO oil collection featuring high-potency whole-plant extracts with preserved cannabinoids and terpenes. Choose from various CBD and THC ratios, delivery formats, and potency levels for your wellness needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/feco/${product.slug}`}
              className="group block h-full"
            >
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-amber-600/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden flex-shrink-0" style={{ height: "442px" }}>
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={false}
                    />
                  )}
                </div>
                <div className="px-6 py-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 group-hover:gap-3 transition-all mt-auto">
                    View Product <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/products/feco">
              View All FECO Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
