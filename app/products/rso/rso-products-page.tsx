"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingBag, Droplets, Pill, Syringe, Cookie, CircleDot } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { rsoProducts } from "@/lib/rso-products-data"

const iconMap = {
  droplets: Droplets,
  pill: Pill,
  syringe: Syringe,
  cookie: Cookie,
  "circle-dot": CircleDot,
}

export function RSOProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto px-4 w-[85%]">
            <Breadcrumb items={[{ label: "Products", href: "/products" }, { label: "RSO (Rick Simpson Oil)" }]} />

            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">5 Product Formats</Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">RSO (Rick Simpson Oil)</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Premium Rick Simpson Oil available in 5 convenient formats. Named after its creator, RSO is renowned for
                its full-spectrum cannabinoid profile and powerful therapeutic effects.
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {rsoProducts.map((product) => {
                const IconComponent = iconMap[product.iconType as keyof typeof iconMap]
                const displayPrice =
                  product.slug === "syringe" ? `$${product.basePrice} / syringe` : `From $${product.basePrice}`

                return (
                  <Card
                    key={product.id}
                    className="overflow-hidden border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full group"
                  >
                    <Link href={`/products/rso/${product.slug}`}>
                      <div className="relative aspect-square bg-muted flex items-center justify-center max-w-sm mx-auto">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="object-cover group-hover:scale-105 transition-transform duration-300 max-w-full h-auto"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1">{displayPrice}</Badge>
                        </div>
                        {product.slug === "syringe" && product.fullTreatmentPrice && (
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-amber-500 text-white text-xs px-2 py-1">
                              Full Treatment: ${product.fullTreatmentPrice.toLocaleString()}
                            </Badge>
                          </div>
                        )}
                        <div className="absolute top-4 right-4">
                          <div className="p-2 rounded-full bg-background/90 backdrop-blur-sm">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <CardContent className="p-5">
                      <Link href={`/products/rso/${product.slug}`}>
                        <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h2>
                      </Link>
                      <p className="text-xs text-muted-foreground mb-2">{product.unitContent}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">(4.8)</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.shortDesc}</p>
                      <Link href={`/products/rso/${product.slug}`}>
                        <Button className="w-full gap-2">
                          <ShoppingBag className="h-4 w-4" />
                          Shop Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <section className="mt-20 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/5 to-transparent rounded-3xl p-8 md:p-12 border border-primary/10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Discover Premium Rick Simpson Oil (RSO): Full-Spectrum Cannabis Concentrate
                </h2>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Rick Simpson Oil (RSO) is one of the most recognized full-spectrum cannabis extracts available today. Originally popularized by Rick Simpson, this thick, dark cannabis oil is known for its high cannabinoid concentration and whole-plant extraction process. Often referred to as RSO oil or Phoenix Tears, this powerful cannabis concentrate captures a broad range of naturally occurring plant compounds.
                </p>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Unlike refined cannabis distillates that isolate a single cannabinoid, Rick Simpson Oil preserves the natural profile of the cannabis plant. This includes cannabinoids such as THC, CBD, and other minor compounds alongside naturally occurring terpenes and flavonoids. Because of this full-plant composition, many people searching for buy Rick Simpson Oil, buy RSO online, or RSO oil for sale are specifically looking for authentic full spectrum cannabis oil products.
                </p>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Most RSO oil products are packaged in convenient RSO syringes, allowing accurate and controlled dispensing of thick cannabis extract. The Rick Simpson Oil syringe format has become the most common way to store and dose this concentrated cannabis oil.
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-6">The Origins of Rick Simpson Oil</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The story of Rick Simpson Oil began with Canadian cannabis advocate Rick Simpson, who developed a method of producing a highly concentrated cannabis extract using the entire plant. His goal was to create a powerful whole-plant cannabis oil that retained as many natural compounds as possible.
                </p>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Over time, this cannabis oil became widely known as RSO oil or Phoenix Tears, gaining attention among people interested in full-spectrum cannabis extracts. Today, Rick Simpson Oil is produced by various manufacturers using modern extraction methods designed to preserve the natural cannabinoid profile of the cannabis plant.
                </p>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Because of its strong potency and whole-plant composition, RSO oil remains one of the most well-known cannabis concentrates available on the market.
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-6">What Makes Rick Simpson Oil Different?</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Rick Simpson Oil (RSO) stands apart from many cannabis concentrates because it is designed to preserve the complete chemical profile of the cannabis plant. Instead of isolating THC or CBD, the extraction process captures a broad spectrum of cannabinoids and plant compounds.
                </p>

                <p className="text-lg text-muted-foreground font-semibold mb-4">Key characteristics of RSO oil include:</p>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Full Spectrum Cannabis Extract</h4>
                    <p className="text-muted-foreground">RSO retains naturally occurring cannabinoids and plant compounds found in cannabis.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">High Cannabinoid Concentration</h4>
                    <p className="text-muted-foreground">Many RSO oil products are known for their high THC content compared to other cannabis oils.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Thick, Dark Cannabis Oil</h4>
                    <p className="text-muted-foreground">The oil is typically deep in color and extremely viscous due to its concentrated nature.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Convenient RSO Syringe Format</h4>
                    <p className="text-muted-foreground">Most products are packaged as RSO syringes or Rick Simpson Oil syringes for precise dosing.</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Because of these characteristics, people searching for RSO syringe, Rick Simpson Oil syringe, or high-THC cannabis oil are often looking specifically for authentic RSO oil products.
                </p>

                <h3 className="text-2xl font-bold text-foreground mb-6">Cannabinoids, Terpenes, and the Entourage Effect</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  One of the defining features of Rick Simpson Oil is its complex cannabinoid and terpene profile. Since RSO oil is extracted from the entire cannabis plant, it contains multiple naturally occurring compounds that contribute to its unique characteristics.
                </p>

                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  These compounds may include:
                </p>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">THC (Tetrahydrocannabinol)</h4>
                    <p className="text-muted-foreground">Often the dominant cannabinoid in RSO oil, contributing to the oil's strong potency.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">CBD and Minor Cannabinoids</h4>
                    <p className="text-muted-foreground">Compounds such as CBG, CBN, and others may also be present depending on the cannabis strain used.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Terpenes</h4>
                    <p className="text-muted-foreground">Naturally occurring aromatic compounds that contribute to the scent and flavor of cannabis.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Plant Flavonoids and Compounds</h4>
                    <p className="text-muted-foreground">Additional plant components that remain in full-spectrum cannabis extracts.</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Together, these compounds create what is commonly referred to as the entourage effect, where multiple plant compounds interact within the cannabis extract.
                </p>

                <div className="mt-8 pt-8 border-t border-primary/10">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Why Many People Choose RSO Oil</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Rick Simpson Oil has become one of the most widely recognized cannabis concentrates due to its strong potency and whole-plant composition. Many cannabis users prefer RSO oil because it retains the natural profile of the cannabis plant rather than isolating individual cannabinoids.
                  </p>

                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Some of the reasons people explore RSO oil include:
                  </p>
                  <ul className="space-y-2 mb-6 text-muted-foreground text-lg">
                    <li>• High-potency full spectrum cannabis oil</li>
                    <li>• Thick, concentrated cannabis extract</li>
                    <li>• Convenient RSO syringe dosing format</li>
                    <li>• Whole-plant cannabis oil with natural compounds</li>
                    <li>• One of the most recognized cannabis concentrates available</li>
                  </ul>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Because of its potency and composition, RSO oil continues to attract interest from people researching Rick Simpson Oil, RSO cannabis oil, or high-THC cannabis extracts.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-primary/10">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Buy Rick Simpson Oil Online</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    If you are looking to buy Rick Simpson Oil online, our store offers carefully prepared RSO syringes designed for convenient and accurate dispensing. Each Rick Simpson Oil syringe contains concentrated cannabis oil packaged for easy storage and controlled dosing.
                  </p>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our selection includes premium RSO oil products, full-spectrum cannabis extracts, and other cannabis concentrates designed for customers searching for RSO oil for sale, buy RSO online, or Rick Simpson Oil syringes.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Explore our collection of RSO syringes, full spectrum cannabis oil, and high-quality cannabis extracts available for purchase online.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default RSOProductsPage
