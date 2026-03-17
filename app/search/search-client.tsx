"use client"

import { useState, useMemo } from "react"
import { Search, X } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { ProductFilter } from "@/components/product-filter"
import { allProducts } from "@/lib/products"

export function SearchPageClient() {
  const [query, setQuery] = useState("")
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])

  const filteredProducts = useMemo(() => {
    let results = allProducts

    if (query.trim()) {
      const lowerQuery = query.toLowerCase()
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerQuery) ||
          product.description.toLowerCase().includes(lowerQuery) ||
          product.benefits.some((b) => b.toLowerCase().includes(lowerQuery)),
      )
    }

    if (selectedSymptoms.length > 0) {
      results = results.filter((product) =>
        selectedSymptoms.some((symptom) => product.symptoms.includes(symptom as any)),
      )
    }

    return results
  }, [query, selectedSymptoms])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto px-4 py-12 w-[85%]">
        <div className="max-w-4xl mx-auto space-y-8">
          <BackButton href="/" label="Back to Home" />
          <div className="text-center space-y-4">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Search Products</h1>
            <p className="text-muted-foreground">Find the perfect product for your wellness needs</p>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name, description, or benefit..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-12 h-14 text-lg"
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setQuery("")}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </div>

          <ProductFilter selectedSymptoms={selectedSymptoms} onFilterChange={setSelectedSymptoms} />

          <div>
            <p className="text-sm text-muted-foreground mb-6">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products match your search.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setQuery("")
                    setSelectedSymptoms([])
                  }}
                  className="mt-2"
                >
                  Clear all filters
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
        </div>
      </main>
      <Footer />
    </div>
  )
}
