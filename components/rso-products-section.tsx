"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { rsoProducts } from "@/lib/rso-products-data"
import { ArrowRight } from "lucide-react"

export function RSoProductsSection() {
  const displayProducts = rsoProducts.slice(0, 5)

  return (
    <section className="py-12 md:py-16 bg-white pt-[32.4%] pb-[32.4%] md:pt-[27.6%] md:pb-[27.6%]">
      <div className="mx-auto px-[6%] md:px-4 w-[91%]">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Premium Rick Simpson Oil (RSO) Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Shop our curated selection of high-potency RSO syringes, tinctures, capsules, gummies, and suppositories. Each product is carefully crafted to deliver consistent potency and precise dosing for therapeutic use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/rso/${product.slug}`}
              className="group block"
            >
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-amber-600/50 transition-all duration-300 flex flex-col h-full">
                <div className="relative overflow-hidden flex-shrink-0" style={{ width: "100%", height: "288px" }}>
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
                <div className="px-6 py-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.shortDesc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 group-hover:gap-3 transition-all w-fit">
                    View Product <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/products/rso">
              View All RSO Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
