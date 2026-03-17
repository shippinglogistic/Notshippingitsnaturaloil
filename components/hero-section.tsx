import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Droplets, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0">
        <Image
          src="/product-display-premium-extracts.jpg"
          alt="Premium cannabis wellness lifestyle"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-xs md:text-sm font-medium border border-white/30 backdrop-blur-sm">
              <Droplets className="h-3.5 w-3.5" />
              <span>Premium Organic Rick Simpson Oil & FECO</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
            Buy Rick Simpson Oil (RSO) & FECO Syringes Online
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-8 text-pretty">
            Shop premium Rick Simpson Oil syringes and Full Extract Cannabis Oil (FECO) syringes made from high-potency cannabis extracts. Explore lab-tested RSO oil, RSO syringes, and FECO oil syringes from a trusted cannabis oil source.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="gap-2 text-base md:text-lg bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 md:px-10 py-6 md:py-7 shadow-2xl shadow-amber-500/30 rounded-full transition-all hover:shadow-amber-500/50"
            >
              <Link href="/products/rso">
                Shop RSO Syringes
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base md:text-lg bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 md:px-10 py-6 md:py-7 rounded-full"
            >
              <Link href="/products/feco">Buy FECO Oil</Link>
            </Button>
          </div>

          <div className="flex flex-col gap-6 pt-8 border-t border-white/20">
            <div className="space-y-2">
              <p className="text-sm font-medium text-white/80">Why Choose Us:</p>
              <div className="grid grid-cols-3 gap-3 md:gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span className="text-xs md:text-sm text-white">Lab Tested RSO & FECO</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span className="text-xs md:text-sm text-white">Discreet Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span className="text-xs md:text-sm text-white">Premium Full Spectrum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
