"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Star,
  ShoppingCart,
  ArrowLeft,
  Check,
  AlertTriangle,
  Package,
  Lightbulb,
  Info,
  Percent,
  Clock,
  Droplets,
  Pill,
  Syringe,
  Cookie,
  CircleDot,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useCart } from "@/lib/cart-context"
import type { RSOProduct } from "@/lib/rso-products-data"

const iconMap = {
  droplets: Droplets,
  pill: Pill,
  syringe: Syringe,
  cookie: Cookie,
  "circle-dot": CircleDot,
}

export function RSOProductDetail({ product }: { product: RSOProduct }) {
  const { addItem } = useCart()
  const IconComponent = iconMap[product.iconType as keyof typeof iconMap]
  const [selectedTier, setSelectedTier] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)

  const currentTier = product.pricingTiers[selectedTier]

  const getVariantName = () => {
    if ((product as any).flavorVariants) {
      return (product as any).flavorVariants[selectedVariant]?.flavor || ""
    }
    if ((product as any).strainVariants) {
      return (product as any).strainVariants[selectedVariant]?.strain || ""
    }
    return ""
  }

  const handleAddToCart = () => {
    const variantName = getVariantName()
    const variantSuffix = variantName ? ` - ${variantName}` : ""

    addItem({
      id: `${product.id}-qty-${currentTier.quantity}-var-${selectedVariant}`,
      name: `${product.name}${variantSuffix} (${currentTier.quantity} ${product.unit}${currentTier.quantity > 1 ? "s" : ""})`,
      price: currentTier.totalPrice,
      image: product.image,
      quantity: 1,
    })
  }

  const handleFullTreatmentPurchase = () => {
    if (product.fullTreatmentPrice) {
      addItem({
        id: `${product.id}-full-treatment`,
        name: `${product.name} - Full Treatment (60g)`,
        price: product.fullTreatmentPrice,
        image: product.image,
        quantity: 1,
      })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="mx-auto px-4 w-[85%]">
            <Breadcrumb
              items={[
                { label: "Products", href: "/products/rso" },
                { label: "RSO", href: "/products/rso" },
                { label: product.name },
              ]}
            />

            <Link
              href="/products/rso"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to RSO Products
            </Link>

            {/* Product Header */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted max-w-md mx-auto w-full">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">RSO</Badge>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
                <p className="text-sm text-muted-foreground mb-4">{product.unitContent}</p>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(4.8 out of 5)</span>
                </div>

                {/* Flavor/Strain Variant Selection - Only show if variants exist */}
                {((product as any).flavorVariants?.length > 0 || (product as any).strainVariants?.length > 0) && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">
                      {(product as any).flavorVariants ? "Select Flavor" : "Select Strain"}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {((product as any).flavorVariants || (product as any).strainVariants).map(
                        (variant: any, idx: number) => {
                          const isFlavorVariant = !!(product as any).flavorVariants
                          const variantLabel = isFlavorVariant ? variant.flavor : variant.strain
                          const thcValue = variant.thc

                          return (
                            <button
                              key={idx}
                              onClick={() => setSelectedVariant(idx)}
                              className={`p-3 rounded-lg border-2 text-left transition-all ${
                                selectedVariant === idx
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <div className="font-bold text-foreground">{variantLabel}</div>
                              <div className="text-sm text-primary font-medium">{thcValue}% THC</div>
                              {(product as any).flavorVariants && (
                                <div className="text-xs text-muted-foreground">{variant.strain}</div>
                              )}
                              {variant.effects && (
                                <div className="text-xs text-muted-foreground mt-1">
                                  {variant.effects.slice(0, 2).join(", ")}
                                </div>
                              )}
                            </button>
                          )
                        },
                      )}
                    </div>
                  </div>
                )}

                {/* Quantity/Pricing Tier Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Select Quantity</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {product.pricingTiers.map((tier, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedTier(idx)}
                        className={`p-3 rounded-lg border-2 text-center transition-all ${
                          selectedTier === idx
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="font-bold text-foreground text-lg">{tier.quantity}</div>
                        <div className="text-xs text-muted-foreground">{product.unit}${tier.quantity > 1 ? "s" : ""}</div>
                        <div className="text-sm text-primary font-semibold mt-1">${tier.unitPrice.toFixed(2)}</div>
                        {tier.discount > 0 && (
                          <div className="text-xs text-green-600 font-bold">Save {tier.discount}%</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Full Treatment Package - Syringes Only */}
                {product.slug === "syringe" && product.fullTreatmentPrice && (
                  <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-2 border-amber-300 dark:border-amber-700">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h4 className="font-bold text-amber-800 dark:text-amber-400 text-lg">
                          Full Treatment Package
                        </h4>
                        <p className="text-sm text-amber-700 dark:text-amber-300">60 grams - Complete RSO Protocol</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-amber-600 dark:text-amber-400">
                          <Clock className="h-4 w-4" />
                          <span>90+ days depending on your condition</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-amber-800 dark:text-amber-400">
                          ${product.fullTreatmentPrice.toLocaleString()}
                        </div>
                        <Button
                          size="sm"
                          className="mt-2 bg-amber-600 hover:bg-amber-700 text-white"
                          onClick={handleFullTreatmentPurchase}
                        >
                          Add Full Treatment
                        </Button>
                      </div>
                    </div>
                    {/* Treatment duration flexibility note */}
                    <p className="mt-3 text-xs text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/50 p-2 rounded">
                      <strong>Note:</strong> Treatment duration varies by individual. Some patients complete in 60-90
                      days, while others with more serious conditions may need longer. Consult your healthcare
                      provider for personalized guidance.
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold text-primary">${currentTier.totalPrice.toLocaleString()}</div>
                  {currentTier.discount > 0 && (
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      Save {currentTier.discount}%
                    </Badge>
                  )}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{product.whatItIs}</p>

                <div className="flex flex-col gap-3">
                  <Button size="lg" className="gap-2 text-lg py-6" onClick={handleAddToCart}>
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart - ${currentTier.totalPrice.toLocaleString()}
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Dosage Guide */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 md:p-8 border border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Info className="h-6 w-6 text-primary" />
                  Dosage Guide
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-primary/20">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Level</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Dose</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Frequency</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.dosageGuide.map((guide, idx) => (
                        <tr key={idx} className="border-b border-primary/10 last:border-0">
                          <td className="py-3 px-4">
                            <Badge variant="outline" className="font-medium">
                              {guide.level}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">{guide.dose}</td>
                          <td className="py-3 px-4 text-muted-foreground">{guide.frequency}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{guide.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground italic">
                  Start low, go slow. Bioavailability differs by consumption method - sublingual absorption is faster
                  and more efficient than oral ingestion.
                </p>
              </div>

              {/* Uses */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                  Uses
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.uses.map((use, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Effects */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                  Effects
                </h2>
                <ul className="space-y-3">
                  {product.effects.map((effect, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span className="text-muted-foreground text-lg">{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to Use */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                  How to Use
                </h2>
                <ol className="space-y-4">
                  {product.howToUse.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-muted-foreground text-lg pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* User Scenarios */}
              <div className="bg-muted/50 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                  Real User Scenarios
                </h2>
                <ul className="space-y-4">
                  {product.userScenarios.map((scenario, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 bg-background rounded-xl p-4 border border-border/50"
                    >
                      <span className="text-primary text-xl">→</span>
                      <span className="text-muted-foreground italic">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Safety & Storage */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 dark:bg-amber-950/30 rounded-2xl p-6 md:p-8 border border-amber-200 dark:border-amber-900">
                  <h2 className="text-xl font-bold text-amber-800 dark:text-amber-400 mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Safety Notes
                  </h2>
                  <ul className="space-y-3">
                    {product.safetyNotes.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-amber-700 dark:text-amber-300">
                        <span className="shrink-0">!</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-6 md:p-8 border border-blue-200 dark:border-blue-900">
                  <h2 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-4 flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Storage Tips
                  </h2>
                  <ul className="space-y-3">
                    {product.storageTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-blue-700 dark:text-blue-300">
                        <span className="shrink-0">*</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  Additional Information
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.additionalInfo.map((info, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{info}</span>
                    </li>
                  ))}
                </ul>
              </div>


            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
