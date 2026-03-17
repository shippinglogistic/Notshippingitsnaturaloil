import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function RSoInfoSection() {
  return (
    <section className="py-12 md:py-18 bg-gradient-to-r from-amber-50/50 to-background">
      <div className="mx-auto px-4 w-[85%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center max-w-5xl mx-auto">
          <div className="relative w-full h-auto min-h-[600px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/king-harvest-wellness-rso-rick-simpson-oil.png"
              alt="Natural Cannabis Oil RSO Rick Simpson Oil Syringe"
              fill
              className="object-contain object-center bg-white"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              What is Rick Simpson Oil (RSO)?
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-6">
              <p>
                Rick Simpson Oil (RSO) is a highly concentrated full-spectrum cannabis extract popularized by Rick Simpson. Known for its dark color and thick texture, RSO oil preserves many of the natural cannabinoids and plant compounds found in cannabis.
              </p>

              <p>
                These concentrated extracts are commonly dispensed using an RSO syringe, allowing precise dosing of thick cannabis oil. Many people searching for buy Rick Simpson Oil, RSO oil, or buy RSO online choose syringe formats for convenience and accuracy.
              </p>

              <p>
                Explore our collection of premium RSO syringes, available in multiple strain types, alongside other full spectrum cannabis oil products.
              </p>
            </div>

            <Button asChild size="lg" className="gap-2">
              <Link href="/products/rso">Shop RSO Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
