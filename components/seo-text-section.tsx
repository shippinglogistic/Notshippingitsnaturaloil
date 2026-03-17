import Link from "next/link"
import Image from "next/image"

export function SEOTextSection() {
  return (
    <section className="py-10 md:py-12 bg-background">
      <div className="mx-auto px-4 w-[85%]">
        <div className="max-w-5xl mx-auto">
          {/* Main SEO Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Buy Authentic RSO & FECO Online - Lab-Tested Cannabis Extracts
            </h2>

            <p className="text-muted-foreground mb-4">
              High-quality <strong className="text-foreground">Rick Simpson Oil (RSO)</strong> and{" "}
              <strong className="text-foreground">FECO</strong> delivered discreetly across the USA. Shop premium
              full-spectrum cannabis extracts at <strong className="text-foreground">NaturalCannabisOil.shop</strong>.
            </p>

            <div className="bg-muted/50 rounded-xl p-5 mb-6">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">RSO vs CBD Oil vs Hemp Oil</h3>
              <ul className="list-disc pl-6 mb-3 text-muted-foreground space-y-2">
                <li>
                  <strong className="text-foreground">Rick Simpson Oil (RSO)</strong> - Full-spectrum, high-THC extract
                  (60-90%). The strongest cannabis oil for therapeutic use with whole plant benefits.
                </li>
                <li>
                  <strong className="text-foreground">CBD Oil</strong> - Contains primarily CBD with minimal THC.
                  Non-intoxicating but less potent than RSO.
                </li>
                <li>
                  <strong className="text-foreground">Hemp Oil</strong> - Extracted from hemp seeds. Contains no
                  cannabinoids, used as nutritional supplement.
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center my-6">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/premium-product-showcase.jpg"
                  alt="Premium RSO and FECO product showcase"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Authentic RSO Products</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Organic full-spectrum extract</li>
                  <li>Third-party lab verified</li>
                  <li>High THC potency (60-90%)</li>
                  <li>Available in syringes, capsules, tinctures, and gummies</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-5 mb-6">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">USA & California Shipping</h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Fast shipping to all 50 states</strong> with discreet packaging.
                Same-day processing for orders placed before 2PM EST. Learn more about{" "}
                <Link href="/rso-vs-feco" className="text-primary hover:underline">
                  RSO vs FECO differences
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
