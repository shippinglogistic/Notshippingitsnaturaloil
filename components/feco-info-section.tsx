import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FECOInfoSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-background to-amber-50/50">
      <div className="mx-auto px-4 w-[85%]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            What is Full Extract Cannabis Oil (FECO)?
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
            <p>
              Full Extract Cannabis Oil (FECO) is a concentrated cannabis extract made from the whole cannabis plant using solvent-based extraction methods, often with food-grade ethanol. Similar to Rick Simpson Oil (RSO), FECO preserves a wide range of natural cannabinoids and plant compounds found in cannabis.
            </p>

            <p>
              Because FECO oil maintains the plant's natural cannabinoid and terpene profile, it is commonly described as a full spectrum cannabis oil. These extracts are most often dispensed using a FECO syringe, allowing precise dosing of thick cannabis oil.
            </p>

            <p>
              Explore our selection of FECO oil syringes, full extract cannabis oil, and premium cannabis extracts for customers looking to buy FECO oil online.
            </p>
          </div>

          <Button asChild size="lg" className="gap-2">
            <Link href="/products/feco">Shop FECO Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
