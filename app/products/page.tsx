import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "All Products | PURE. POTENT. TRUSTED.",
  description:
    "Browse all our premium cannabis products - RSO syringes, tinctures, capsules, gummies, suppositories, FECO oils, and more. Lab-tested and third-party verified.",
}

export default function AllProductsPage() {
  return (
    <main>
      <div className="bg-muted/30">
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
            ]}
          />
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              All Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our complete collection of premium Rick Simpson Oil (RSO) and Full Extract Cannabis Oil (FECO) products. Each product is lab-tested and crafted for purity, potency, and precise dosing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* RSO Products Card */}
            <Link
              href="/products/rso"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 hover:border-amber-600 transition-all duration-300 p-8"
            >
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-amber-100 text-amber-900 text-sm font-semibold rounded-full">
                    5 Products
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Rick Simpson Oil (RSO)
                </h2>
                <p className="text-muted-foreground text-lg">
                  Premium full-spectrum cannabis syringes, tinctures, capsules, gummies, and suppositories. Each product delivers consistent potency for therapeutic use.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Available formats:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• RSO Syringes (1g, 5g, 10g, 20g, 30g, 60g, 80g, 120g)</li>
                    <li>• RSO Tinctures (4200mg per bottle)</li>
                    <li>• RSO Capsules (6000mg per 30-pack)</li>
                    <li>• RSO Gummies (4200mg per pack)</li>
                    <li>• RSO Suppositories (1000mg per pack)</li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-base font-semibold text-amber-600 group-hover:gap-3 transition-all mt-4">
                  Shop RSO <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </Link>

            {/* FECO Products Card */}
            <Link
              href="/products/feco"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-600 transition-all duration-300 p-8"
            >
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-green-100 text-green-900 text-sm font-semibold rounded-full">
                    7 Products
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Full Extract Cannabis Oil (FECO)
                </h2>
                <p className="text-muted-foreground text-lg">
                  Whole-plant extracts with preserved cannabinoids and terpenes. Various CBD and THC ratios designed for specific therapeutic needs.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Available varieties:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• High Test CBD FECO (CBD-dominant)</li>
                    <li>• 1:3 FECO CBD DOM (1:3 THC:CBD ratio)</li>
                    <li>• CBD FECO Standard (Pure CBD)</li>
                    <li>• Standard THC FECO Syringe (High THC)</li>
                    <li>• 1:1 THC/CBD FECO Oil (Balanced)</li>
                    <li>• High Test THC FECO (Ultra-potent)</li>
                    <li>• 3:1 FECO THC DOM (3:1 THC:CBD ratio)</li>
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-base font-semibold text-green-600 group-hover:gap-3 transition-all mt-4">
                  Shop FECO <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          </div>

          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Quality Assurance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Lab Tested</h4>
                <p className="text-sm text-muted-foreground">
                  All products are third-party lab tested for potency, purity, and safety.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Premium Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Made from organically grown cannabis using solvent-free extraction methods.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Precise Dosing</h4>
                <p className="text-sm text-muted-foreground">
                  Pre-measured formats ensure consistent, accurate dosing for therapeutic protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
