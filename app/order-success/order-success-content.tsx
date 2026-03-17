"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Truck, Mail, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function OrderSuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [orderId, setOrderId] = useState<string>("")

  useEffect(() => {
    const id = searchParams.get("orderId")
    if (!id) {
      router.push("/")
      return
    }
    setOrderId(id)
  }, [searchParams, router])

  if (!orderId) {
    return null
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-4">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Order Confirmed!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Order Number</span>
                </div>
                <span className="text-muted-foreground font-mono">{orderId}</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Confirmation Email</span>
                </div>
                <span className="text-muted-foreground">Sent to your email</span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Shipping Status</span>
                </div>
                <span className="text-muted-foreground">Processing</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Order Confirmation</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an email confirmation with your order details and payment instructions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Payment Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete payment using the instructions sent to your email. Your order will be processed upon
                    payment confirmation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Discreet Shipping</h3>
                  <p className="text-sm text-muted-foreground">
                    Your order will be shipped discreetly with tracking information provided via email.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/products/rso">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Continue Shopping
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
