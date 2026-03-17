"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Star, Plus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { SymptomIcon, symptomLabels, symptomColors } from "@/components/symptom-icons"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
  }

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (product.href) {
      return (
        <Link href={product.href} className="block">
          {children}
        </Link>
      )
    }
    return <>{children}</>
  }

  return (
    <CardWrapper>
      <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
        <div className="relative aspect-square overflow-hidden bg-white">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={`${product.name} - ${product.category} Cannabis Oil Product - $${product.price.toFixed(2)}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.href && (
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              View Options
              <ArrowRight className="h-3 w-3" />
            </div>
          )}
          {product.strain && (
            <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
              {product.strain}
            </div>
          )}
        </div>
        <CardContent className="p-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-foreground leading-tight">{product.name}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground shrink-0">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>

          {(product.thcPercentage || product.cbdPercentage) && (
            <div className="flex gap-2 text-xs text-muted-foreground">
              {product.thcPercentage !== undefined && <span className="font-medium">THC {product.thcPercentage}%</span>}
              {product.cbdPercentage !== undefined && <span className="font-medium">CBD {product.cbdPercentage}%</span>}
            </div>
          )}

          {product.effects && product.effects.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {product.effects.slice(0, 2).map((effect, idx) => (
                <span
                  key={idx}
                  className="inline-block px-2 py-0.5 rounded-full text-xs bg-secondary text-secondary-foreground"
                >
                  {effect}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1">
            {product.symptoms.slice(0, 2).map((symptom) => (
              <span
                key={symptom}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${symptomColors[symptom]}`}
              >
                <SymptomIcon symptom={symptom} className="h-3 w-3" />
                {symptomLabels[symptom]}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-foreground">
              {product.priceLabel || `$${product.price.toFixed(2)}`}
            </span>
            {product.href ? (
              <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                View Details
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleAddToCart} size="sm" className="gap-1">
                <Plus className="h-4 w-4" />
                Add to Cart
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  )
}
