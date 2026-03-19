"use client"

import type React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
    Lock,
    CheckCircle,
    Bitcoin,
    CreditCard,
    AlertTriangle,
    Wallet,
    Smartphone,
    MessageCircle,
  } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/lib/cart-context"

const countries = [
  { code: "US", name: "United States", region: "usa" },
  { code: "AT", name: "Austria", region: "eu" },
  { code: "BE", name: "Belgium", region: "eu" },
  { code: "BG", name: "Bulgaria", region: "eu" },
  { code: "HR", name: "Croatia", region: "eu" },
  { code: "CY", name: "Cyprus", region: "eu" },
  { code: "CZ", name: "Czech Republic", region: "eu" },
  { code: "DK", name: "Denmark", region: "eu" },
  { code: "EE", name: "Estonia", region: "eu" },
  { code: "FI", name: "Finland", region: "eu" },
  { code: "FR", name: "France", region: "eu" },
  { code: "DE", name: "Germany", region: "eu" },
  { code: "GR", name: "Greece", region: "eu" },
  { code: "HU", name: "Hungary", region: "eu" },
  { code: "IE", name: "Ireland", region: "eu" },
  { code: "IT", name: "Italy", region: "eu" },
  { code: "LV", name: "Latvia", region: "eu" },
  { code: "LT", name: "Lithuania", region: "eu" },
  { code: "LU", name: "Luxembourg", region: "eu" },
  { code: "MT", name: "Malta", region: "eu" },
  { code: "NL", name: "Netherlands", region: "eu" },
  { code: "PL", name: "Poland", region: "eu" },
  { code: "PT", name: "Portugal", region: "eu" },
  { code: "RO", name: "Romania", region: "eu" },
  { code: "SK", name: "Slovakia", region: "eu" },
  { code: "SI", name: "Slovenia", region: "eu" },
  { code: "ES", name: "Spain", region: "eu" },
  { code: "SE", name: "Sweden", region: "eu" },
  { code: "GB", name: "United Kingdom", region: "eu" },
  { code: "NO", name: "Norway", region: "eu" },
  { code: "CH", name: "Switzerland", region: "eu" },
]

const PAYMENT_METHODS = [
  {
    id: "zelle",
    name: "Zelle",
    icon: Wallet,
    logo: "/payment-logos/zelle-payment.webp",
    description: "USA only - Fast bank transfer",
    needsAgent: true,
    region: "usa",
  },
  {
    id: "bitcoin",
    name: "Bitcoin",
    icon: Bitcoin,
    logo: "/payment-logos/bitcoin-logo.png",
    description: "Pay with cryptocurrency",
    needsAgent: false,
    walletAddress: "1Jmhf5VrjEobrQ5xY4evZKEsmSDawBWGRe",
  },
  {
    id: "chime",
    name: "Chime",
    icon: CreditCard,
    logo: "/payment-logos/chime-payment.jpeg",
    description: "USA only - Direct payment",
    needsAgent: true,
    region: "usa",
  },
  {
    id: "applepay",
    name: "Apple Pay",
    icon: Smartphone,
    logo: "/payment-logos/apple-pay-logo.jpg",
    description: "USA only - Quick & secure",
    needsAgent: true,
    region: "usa",
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: CreditCard,
    logo: "/payment-logos/paypal-logo.jpg",
    description: "Global payment solution",
    needsAgent: true,
    region: "intl",
  },
]

const MINIMUM_ORDER = 200

export default function CheckoutPageClient() {
  const { items, totalPrice, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState("")
  const [selectedPayment, setSelectedPayment] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const formRef = useRef<HTMLFormElement>(null)

  const isUSA = selectedCountry === "US"
  const paymentMethods = PAYMENT_METHODS.filter((method) => {
    if (isUSA) {
      return method.region === "usa" || !method.region
    }
    return method.region === "intl" || method.id === "bitcoin"
  })

  const shippingFee = shippingMethod === "express" ? (isUSA ? 15 : 25) : 0
  const grandTotal = totalPrice + shippingFee

  const selectedPaymentMethod = paymentMethods.find((m) => m.id === selectedPayment)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (totalPrice < MINIMUM_ORDER) {
      alert(`Minimum order amount is $${MINIMUM_ORDER}. Please add more items to your cart.`)
      return
    }

    const form = formRef.current
    if (!form) return

    setIsSubmitting(true)
    setSubmitError(null)

    const formData = new FormData(form)

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_first_name: formData.get("firstName") as string,
          customer_last_name: formData.get("lastName") as string,
          customer_email: formData.get("email") as string,
          customer_phone: formData.get("phone") as string,
          shipping_country: selectedCountry,
          shipping_address: formData.get("address") as string,
          shipping_city: formData.get("city") as string,
          shipping_state: formData.get("state") as string,
          shipping_zip: formData.get("zip") as string,
          shipping_method: shippingMethod,
          payment_method: selectedPayment,
          payment_status: "pending",
          order_status: "pending",
          subtotal: totalPrice,
          shipping_fee: shippingFee,
          grand_total: grandTotal,
          items: items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })),
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to place order")
      }

      const order = await response.json()
      setOrderId(order.id)
      setOrderPlaced(true)
      clearCart()
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to place order")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 mx-auto px-4 py-20 w-[85%]">
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="p-6 rounded-full bg-primary/10 inline-block">
              <CheckCircle className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-foreground">Order Confirmed!</h1>
            {orderId && (
              <p className="text-sm font-mono bg-muted px-3 py-2 rounded-md inline-block">Order ID: {orderId}</p>
            )}
            <p className="text-muted-foreground">
              Thank you for your order. We&apos;ll send you payment instructions and tracking details to your email
              shortly.
            </p>
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 mx-auto px-4 py-20 w-[85%]">
          <BackButton href="/products/rso" label="Browse Products" className="mb-8" />
          <div className="max-w-md mx-auto text-center space-y-6">
            <h1 className="font-serif text-2xl font-bold text-foreground">Your cart is empty</h1>
            <p className="text-muted-foreground">Add some products before checking out.</p>
            <Button asChild>
              <Link href="/products/rso">Browse Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const isBelowMinimum = totalPrice < MINIMUM_ORDER

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto px-4 py-12 w-[85%]">
        <BackButton href="/cart" label="Back to Cart" className="mb-8" />

        <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Checkout</h1>

        {isBelowMinimum && (
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-amber-800">Minimum Order Required</p>
              <p className="text-sm text-amber-700">
                Your cart total is ${totalPrice.toFixed(2)}. Minimum order amount is ${MINIMUM_ORDER}. Please add $
                {(MINIMUM_ORDER - totalPrice).toFixed(2)} more to proceed.
              </p>
            </div>
          </div>
        )}

        {submitError && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-red-800">Order Failed</p>
              <p className="text-sm text-red-700">{submitError}</p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Contact Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Shipping Address</h2>

                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US" className="font-semibold">
                        United States
                      </SelectItem>
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">European Countries</div>
                      {countries
                        .filter((c) => c.region === "eu")
                        .map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" name="address" placeholder="123 Main St" required />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" placeholder="Los Angeles" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State / Province</Label>
                    <Input id="state" name="state" placeholder="CA" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP / Postal Code</Label>
                    <Input id="zip" name="zip" placeholder="90001" required />
                  </div>
                </div>

                {selectedCountry && (
                  <div className="space-y-3 pt-2">
                    <Label>Shipping Method</Label>
                    <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="space-y-2">
                      <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard" className="cursor-pointer">
                            <span className="font-medium">Standard Shipping</span>
                            <span className="block text-sm text-muted-foreground">5-7 business days</span>
                          </Label>
                        </div>
                        <span className="font-medium">Free</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="express" id="express" />
                          <Label htmlFor="express" className="cursor-pointer">
                            <span className="font-medium">Express Shipping</span>
                            <span className="block text-sm text-muted-foreground">2-3 business days</span>
                          </Label>
                        </div>
                        <span className="font-medium">${isUSA ? "15.00" : "25.00"}</span>
                      </div>
                    </RadioGroup>
                  </div>
                )}
              </div>

              {/* Payment Method */}
              {selectedCountry && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Payment Method</h2>
                  <p className="text-sm text-muted-foreground">
                    {isUSA
                      ? "Available payment methods for USA customers:"
                      : "Available payment methods for international customers:"}
                  </p>

                  <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment} className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={method.id} id={method.id} />
                          <Label htmlFor={method.id} className="cursor-pointer flex-1">
                            <span className="font-medium">{method.name}</span>
                            <span className="block text-sm text-muted-foreground">{method.description}</span>
                          </Label>
                        </div>
                        {method.logo && (
                          <Image
                            src={method.logo}
                            alt={method.name}
                            width={40}
                            height={40}
                            className="h-10 w-auto"
                          />
                        )}
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary - Right Column */}
          <div className="flex flex-col gap-8">
            <div className="bg-muted/30 rounded-lg p-6 space-y-6 sticky top-4">
              <h2 className="font-semibold text-lg text-foreground">Order Summary</h2>

              <div className="space-y-4 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0 bg-muted">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={`${item.name} - Cannabis Oil Product - $${item.price.toFixed(2)}`}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground truncate">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                    </div>
                    <p className="text-sm font-medium text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">
                    {selectedCountry ? `$${shippingFee.toFixed(2)}` : "Select country"}
                  </span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {selectedPaymentMethod && (
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-medium text-foreground mb-2">Payment: {selectedPaymentMethod.name}</p>
                  {selectedPaymentMethod.needsAgent ? (
                    <div className="flex items-start gap-2 p-3 bg-primary/10 rounded-lg">
                      <MessageCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-xs text-foreground">
                        Contact our livechat agent for payment information after placing your order.
                      </p>
                    </div>
                  ) : selectedPaymentMethod.id === "bitcoin" ? (
                    <div className="space-y-3">
                      <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <Bitcoin className="h-5 w-5 text-orange-600" />
                          <p className="font-semibold text-orange-900">Bitcoin Payment Details</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs font-medium text-orange-900">Wallet Address:</p>
                          <div className="bg-white p-2 rounded border border-orange-200">
                            <p className="text-xs font-mono break-all text-orange-800">
                              {selectedPaymentMethod.walletAddress}
                            </p>
                          </div>
                          <p className="text-xs text-orange-700 italic">
                            Send exact order total to this Bitcoin address. Include your order ID in the transaction
                            memo.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            {/* Place Order Button - Below Order Summary */}
            <Button 
              type="submit" 
              disabled={isBelowMinimum || isSubmitting} 
              size="lg" 
              className="w-full"
              onClick={() => formRef.current?.requestSubmit()}
            >
              {isSubmitting ? "Processing..." : `Place Order - $${grandTotal.toFixed(2)}`}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
