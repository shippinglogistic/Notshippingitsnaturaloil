"use client"

import { ShoppingCart, Check } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    price: number
    image: string
  }
  quantity?: number
  variant?: "default" | "outline" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function AddToCartButton({
  product,
  quantity = 1,
  variant = "default",
  size = "default",
  className,
}: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Button onClick={handleAddToCart} variant={variant} size={size} className={className} disabled={isAdded}>
      {isAdded ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          Added
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </>
      )}
    </Button>
  )
}
