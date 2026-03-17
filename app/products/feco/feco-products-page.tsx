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
import { fecoProducts } from "@/lib/feco-products-data"

const iconMap = {
  droplets: Droplets,
  pill: Pill,
  syringe: Syringe,
  cookie: Cookie,
  "circle-dot": CircleDot,
}

export function FECOProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto px-4 w-[85%]">
            <Breadcrumb items={[{ label: "Products", href: "/products" }, { label: "FECO (Full Extract Cannabis Oil)" }]} />

            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">5 Product Formats</Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                FECO (Full Extract Cannabis Oil)
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Premium Full Extract Cannabis Oil available in 5 convenient formats. Each product preserves the complete
                spectrum of cannabinoids, terpenes, and beneficial compounds for maximum therapeutic benefit.
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {fecoProducts.map((product) => {
                const IconComponent = iconMap[product.iconType as keyof typeof iconMap]
                const displayPrice = `From $${product.volumes[0]?.price || product.volumes[0].price}`

                return (
                  <Card
                    key={product.id}
                    className="overflow-hidden border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full group"
                  >
                    <Link href={`/products/feco/${product.slug}`}>
                      <div className="relative aspect-square bg-muted">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1">{displayPrice}</Badge>
                        </div>
                        {product.slug === "syringe" &&
                          "fullTreatmentPrice" in product &&
                          product.fullTreatmentPrice && (
                            <div className="absolute bottom-4 left-4">
                              <Badge className="bg-emerald-500 text-white text-xs px-2 py-1">
                                Full Treatment: ${(product.fullTreatmentPrice as number).toLocaleString()}
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
                      <Link href={`/products/feco/${product.slug}`}>
                        <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h2>
                      </Link>
                      <p className="text-xs text-muted-foreground mb-2">{product.potency}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">(4.8)</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.description}</p>
                      <Link href={`/products/feco/${product.slug}`}>
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
                  Discover Premium Full Extract Cannabis Oil (FECO): Powerful Full-Spectrum Cannabis Concentrate
                </h2>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Full Extract Cannabis Oil (FECO) is one of the most concentrated forms of full spectrum cannabis oil, created by extracting the natural compounds from the entire cannabis plant. Often referred to simply as FECO oil, this thick and potent cannabis extract contains a broad range of cannabinoids and plant compounds that remain naturally present in the cannabis plant.
                </p>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Unlike cannabis products that isolate individual cannabinoids, FECO oil retains the plant's natural profile. This includes cannabinoids such as THC, CBD, CBG, CBN, and other minor compounds along with naturally occurring terpenes and flavonoids. Because of this complete plant profile, many customers searching for buy FECO oil online, full extract cannabis oil, or FECO oil for sale are specifically looking for authentic whole-plant cannabis extracts.
                </p>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Most FECO oil products are packaged in convenient FECO syringes, allowing precise dosing and easy dispensing of thick cannabis oil. The FECO syringe format has become one of the most popular ways to store and use concentrated cannabis oil extracts.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">What Makes FECO Oil Unique?</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Full Extract Cannabis Oil (FECO) is known for preserving the natural cannabinoid and terpene profile of the cannabis plant. The extraction process captures a wide range of plant compounds instead of isolating individual cannabinoids.
                    </p>
                    <p className="text-muted-foreground leading-relaxed font-semibold mb-2">Key characteristics of FECO oil include:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong>Full Spectrum Cannabis Extract:</strong> FECO preserves multiple cannabinoids and plant compounds found in cannabis.</li>
                      <li><strong>High-Potency Cannabis Oil:</strong> Many FECO oil products contain high concentrations of cannabinoids compared to standard cannabis oils.</li>
                      <li><strong>Thick, Concentrated Cannabis Oil:</strong> FECO typically has a dark amber to black color and a thick, viscous consistency.</li>
                      <li><strong>Convenient FECO Syringe Format:</strong> Most products are packaged as FECO syringes for controlled dispensing and accurate dosing.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">FECO vs RSO: Understanding the Difference</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Both Full Extract Cannabis Oil (FECO) and Rick Simpson Oil (RSO) are full-spectrum cannabis extracts created using the entire cannabis plant. The primary difference usually comes from the extraction methods used to produce the oil.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Many FECO oil products are produced using food-grade ethanol extraction methods designed to preserve cannabinoids and plant compounds while maintaining the natural profile of the cannabis plant. Because of this process, FECO oil is widely recognized as one of the most complete forms of full spectrum cannabis oil.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Both FECO oil syringes and RSO syringes are commonly used by customers looking for highly concentrated cannabis extracts.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Cannabinoids, Terpenes, and the Full-Spectrum Profile
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    One of the defining features of FECO oil is its diverse cannabinoid and terpene composition. Since full extract cannabis oil is derived from the entire plant, it contains multiple naturally occurring compounds that contribute to its unique characteristics.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    These compounds may include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                    <li><strong>THC (Tetrahydrocannabinol):</strong> Often present in high concentrations within FECO oil depending on the cannabis strain used.</li>
                    <li><strong>CBD and Minor Cannabinoids:</strong> Additional cannabinoids such as CBG, CBN, and CBC may also be present.</li>
                    <li><strong>Terpenes:</strong> Aromatic plant compounds that contribute to the scent and flavor of cannabis extracts.</li>
                    <li><strong>Plant Flavonoids and Natural Compounds:</strong> Additional plant components that remain in full spectrum cannabis oil.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Together, these compounds create what is often referred to as the entourage effect, where multiple cannabis plant compounds interact within the extract.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-primary/10">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Why Many Customers Choose FECO Oil
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Full Extract Cannabis Oil (FECO) has become one of the most recognized full-spectrum cannabis concentrates due to its potency and whole-plant composition.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Many cannabis users choose FECO oil because it retains the natural profile of the cannabis plant rather than isolating individual cannabinoids.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Some common reasons people explore FECO oil include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                    <li>Highly concentrated full spectrum cannabis oil</li>
                    <li>Thick and potent cannabis extract</li>
                    <li>Convenient FECO syringe dosing format</li>
                    <li>Whole-plant cannabis oil with natural cannabinoids</li>
                    <li>One of the most complete cannabis concentrates available</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Because of its potency and composition, FECO oil continues to attract interest from people researching full extract cannabis oil, buy FECO oil online, or high potency cannabis oil.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-primary/10">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Buy FECO Oil Online
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    If you are looking to buy FECO oil online, our store offers carefully prepared FECO syringes designed for convenient and accurate dispensing. Each FECO syringe contains concentrated cannabis oil packaged for easy storage and controlled dosing.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our collection includes premium full extract cannabis oil, FECO oil syringes, and high-quality cannabis concentrates available for customers searching for FECO oil for sale, buy FECO oil online, or full spectrum cannabis oil products.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Explore our selection of FECO syringes, full extract cannabis oil, and premium cannabis extracts available for purchase online.
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

export default FECOProductsPage
