"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Sparkles } from "lucide-react"

export function ShopPremiumCTA() {
  return (
    <section className="py-10 md:py-12 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-9">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Limited Selection</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Shop Premium Products Now</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Ready to experience the benefits? Browse our collection of high-THC RSO, full-spectrum FECO, RSO edibles,
            and more.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-9">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/products/rso">
              <ShoppingBag className="mr-2 w-5 h-5" />
              Shop RSO Products
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/products/feco">
              <ShoppingBag className="mr-2 w-5 h-5" />
              Shop FECO Products
            </Link>
          </Button>
        </div>

        {/* Trust Statement */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-foreground text-lg mb-4">
              <span className="font-semibold">Join thousands trusting our best RSO oil and top FECO extracts</span> for
              natural wellness support.
            </p>
            <p className="text-muted-foreground mb-6">
              Questions?{" "}
              <Link href="#contact" className="text-accent hover:underline font-semibold">
                Contact us today!
              </Link>
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-accent">1000+</div>
                <p className="text-xs text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">100%</div>
                <p className="text-xs text-muted-foreground">Lab Tested</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">24/7</div>
                <p className="text-xs text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
