import { ProductCard } from "@/components/product-card"
import { rsoProducts } from "@/lib/products"
import { fecoProducts } from "@/lib/feco-products-data"
import { RSoInfoSection } from "@/components/rso-info-section"
import { FECOInfoSection } from "@/components/feco-info-section"

export function FeaturedProducts() {
  const featuredRSO = rsoProducts.slice(0, 5)
  const featuredFECO = fecoProducts.slice(0, 7)

  return (
    <section id="featured" className="py-16 bg-gradient-to-b from-background via-amber-50/5 to-background">
      <div className="mx-auto px-4 w-[85%]">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Finest Extracts
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Premium Rick Simpson Oil (RSO) and Full Extract Cannabis Oil (FECO) products, lab-verified and trusted for
            authentic quality and potency.
          </p>
        </div>

        <div className="space-y-16">
          {/* RSO Products Section */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Rick Simpson Oil (RSO) - 5 Premium Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {featuredRSO.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <RSoInfoSection />

          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Full Extract Cannabis Oil (FECO) - 7 Premium Syringes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
              {featuredFECO.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-lg border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="aspect-square bg-muted relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-foreground mb-2">{product.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{product.potency}</p>
                    <p className="text-sm text-foreground font-semibold mb-3">From ${product.volumes[0]?.price || 0}</p>
                    <a
                      href={`/products/feco/${product.slug}`}
                      className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FECOInfoSection />
        </div>
      </div>
    </section>
  )
}
