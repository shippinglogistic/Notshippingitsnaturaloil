"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function CartPageClient() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 mx-auto px-4 py-20 w-[85%]">
          <BackButton label="Continue Shopping" className="mb-8" />
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="p-6 rounded-full bg-muted inline-block">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-foreground">Your cart is empty</h1>
            <p className="text-muted-foreground">Looks like you haven&apos;t added any products to your cart yet.</p>
            <Button asChild className="gap-2">
              <Link href="/products/rso">
                <ArrowLeft className="h-4 w-4" />
                Browse RSO Products
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto px-4 py-12 w-[85%]">
        <BackButton label="Continue Shopping" className="mb-6" />
        <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="relative w-24 h-24 rounded-md overflow-hidden shrink-0 bg-muted">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.name} - Cannabis Oil Product`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                  <p className="font-semibold text-foreground mt-1">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove {item.name} from cart</span>
                  </Button>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-transparent"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                      <span className="sr-only">Decrease quantity of {item.name}</span>
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-transparent"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                      <span className="sr-only">Increase quantity of {item.name}</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-24 space-y-4">
              <h2 className="font-semibold text-lg text-foreground">Order Summary</h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                  <span className="text-foreground">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button asChild className="w-full" size="lg">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>

              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/products/rso">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
