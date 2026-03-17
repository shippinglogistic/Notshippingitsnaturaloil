import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CategorySection() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="mx-auto px-4 w-full md:w-[70%] lg:w-[70%]">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Product Categories
          </h2>
          <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            <p>
              Premium Rick Simpson Oil (RSO) and Full Extract Cannabis Oil (FECO) syringes made from high-potency cannabis extracts.
            </p>
            <p>
              Shop lab-verified RSO oil, RSO syringes, and FECO oil syringes designed for purity, potency, and precise dosing.
            </p>
            <p>
              A trusted source to buy Rick Simpson Oil, buy RSO online, and explore premium full spectrum cannabis oil products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* RSO Category */}
          <Link
            href="/products/rso"
            className="group block rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
          >
            <div className="relative overflow-hidden rounded-t-xl md:rounded-t-2xl" style={{ height: "403px" }}>
              <Image
                src="/images/rso-rick-simpson-oil.webp"
                alt="Rick Simpson Oil (RSO) Products"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 md:p-8">
              <span className="text-xs md:text-sm font-medium text-muted-foreground">5 Products</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">
                Rick Simpson Oil (RSO)
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Syringes, Tinctures, Capsules, Gummies & Suppositories
              </p>
              <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-primary group-hover:gap-3 transition-all">
                Shop RSO <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </span>
            </div>
          </Link>

          {/* FECO Category */}
          <Link
            href="/products/feco"
            className="group block rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
          >
            <div className="relative overflow-hidden rounded-t-xl md:rounded-t-2xl" style={{ height: "403px" }}>
              <Image
                src="/images/feco-1-1024x1024-402x-20-281-29.jpg"
                alt="Full Extract Cannabis Oil (FECO) Syringes and Products"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 md:p-8">
              <span className="text-xs md:text-sm font-medium text-muted-foreground">7 Products</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">Full Extract Cannabis Oil (FECO)</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                High Test CBD, 1:3 CBD-Dom, Standard CBD, Standard THC & Premium Ratios
              </p>
              <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-primary group-hover:gap-3 transition-all">
                Shop FECO <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
