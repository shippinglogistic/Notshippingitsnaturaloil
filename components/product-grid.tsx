"use client"

import { Button } from "@/components/ui/button"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { ProductFilter } from "@/components/product-filter"
import type { Product } from "@/lib/products"

interface ProductGridProps {
  products: Product[]
  title: string
  description?: string
}

export function ProductGrid({ products, title, description }: ProductGridProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])

  const filteredProducts = useMemo(() => {
    if (selectedSymptoms.length === 0) return products
    return products.filter((product) => selectedSymptoms.some((symptom) => product.symptoms.includes(symptom as any)))
  }, [products, selectedSymptoms])

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h1>
          {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
        </div>
        <ProductFilter selectedSymptoms={selectedSymptoms} onFilterChange={setSelectedSymptoms} />
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products match your selected filters.</p>
          <Button variant="link" onClick={() => setSelectedSymptoms([])} className="mt-2">
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
