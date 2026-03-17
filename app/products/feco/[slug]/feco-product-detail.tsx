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
  Info,
  Percent,
  Clock,
  Droplets,
  Pill,
  Syringe,
  Cookie,
  CircleDot,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useCart } from "@/lib/cart-context"
import type { FECOProduct } from "@/lib/feco-products-data"

const iconMap = {
  droplets: Droplets,
  pill: Pill,
  syringe: Syringe,
  cookie: Cookie,
  "circle-dot": CircleDot,
}

export function FECOProductDetail({ product }: { product: FECOProduct }) {
  const { addItem } = useCart()
  const IconComponent = iconMap[product.iconType as keyof typeof iconMap]
  const [selectedVolume, setSelectedVolume] = useState(0)
  const [selectedStrain, setSelectedStrain] = useState(0)
  const [activeTab, setActiveTab] = useState("overview")

  const currentVolume = product.volumes[selectedVolume]
  const currentStrain = product.strains[selectedStrain]

  const handleAddToCart = () => {
    const productName = `${product.name} - ${currentVolume.label} - ${currentStrain.name} Strain`
    addItem({
      id: `${product.id}-${selectedVolume}-${selectedStrain}`,
      name: productName,
      price: currentVolume.price,
      image: product.image,
      quantity: 1,
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="mx-auto px-4 w-[85%]">
            <Breadcrumb
              items={[
                { label: "Products", href: "/products/feco" },
                { label: "FECO", href: "/products/feco" },
                { label: product.name },
              ]}
            />

            <Link
              href="/products/feco"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to FECO Products
            </Link>

            {/* Product Header */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Image - Added fallback and proper image handling */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
                {product.image && product.image !== "undefined" ? (
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Syringe className="h-20 w-20 text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">{product.category}</Badge>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
                <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                <p className="text-sm font-medium text-primary mb-4">{product.potency}</p>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(4.9 out of 5 - Lab Tested)</span>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Percent className="h-5 w-5 text-primary" />
                    Select Volume
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {product.volumes.map((volume, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedVolume(idx)}
                        className={`p-3 rounded-lg border-2 text-left transition-all ${
                          selectedVolume === idx
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="font-bold text-foreground">{volume.label}</div>
                        <div className="text-sm text-primary font-medium">${volume.price.toFixed(2)}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Select Strain Type</h3>
                  <div className="space-y-2">
                    {product.strains.map((strain, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedStrain(idx)}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                          selectedStrain === idx
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-foreground">{strain.name}</div>
                            <div className="text-sm text-muted-foreground">{strain.description}</div>
                          </div>
                          {selectedStrain === idx && <Check className="h-5 w-5 text-primary" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold text-primary">${currentVolume.price.toFixed(2)}</div>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    {currentVolume.grams}g
                  </Badge>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{product.fullDescription}</p>

                <div className="flex flex-col gap-3">
                  <Button size="lg" className="gap-2 text-lg py-6" onClick={handleAddToCart}>
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart - ${currentVolume.price.toFixed(2)}
                  </Button>

                </div>
              </div>
            </div>

            {/* Product Details Tabs - Added tabbed interface for better information organization */}
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-2 mb-8 border-b border-border/50">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "usage", label: "Usage & Safety" },
                  { id: "pricing", label: "Pricing" },
                  { id: "details", label: "Details" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 font-medium text-sm transition-colors border-b-2 ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="space-y-8">
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <>
                    {/* Potency Info */}
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 md:p-8 border border-primary/20">
                      <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <Info className="h-6 w-6 text-primary" />
                        Potency & Composition
                      </h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground">Potency</p>
                          <p className="text-lg font-bold text-foreground">{product.potency}</p>
                        </div>
                        <div className="bg-background rounded-lg p-4">
                          <p className="text-sm text-muted-foreground">THC/CBD Profile</p>
                          <p className="text-lg font-bold text-foreground">{product.thcCbd}</p>
                        </div>
                      </div>
                    </div>

                    {/* Uses */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                        Primary Uses
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

                    {/* Conditions Treated */}
                    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                        Conditions This Addresses
                      </h2>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {product.conditions.map((condition, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-muted rounded-lg p-3">
                            <Check className="h-4 w-4 text-primary shrink-0" />
                            <span className="text-sm text-foreground">{condition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Usage & Safety Tab */}
                {activeTab === "usage" && (
                  <>
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

                    {/* Dosage Guide */}
                    <div className="bg-amber-50 dark:bg-amber-950/30 rounded-2xl p-6 md:p-8 border border-amber-200 dark:border-amber-900">
                      <h2 className="text-xl font-bold text-amber-800 dark:text-amber-400 mb-4 flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Dosage Guidelines
                      </h2>
                      <p className="text-amber-700 dark:text-amber-300 leading-relaxed">{product.dosageGuide}</p>
                    </div>

                    {/* Safety & Storage */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 dark:bg-red-950/30 rounded-2xl p-6 md:p-8 border border-red-200 dark:border-red-900">
                        <h2 className="text-xl font-bold text-red-800 dark:text-red-400 mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Safety Notes
                        </h2>
                        <ul className="space-y-3">
                          {product.safetyNotes.map((note, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-red-700 dark:text-red-300">
                              <span className="shrink-0">!</span>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-6 md:p-8 border border-blue-200 dark:border-blue-900">
                        <h2 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-4 flex items-center gap-2">
                          <Package className="h-5 w-5" />
                          Additional Information
                        </h2>
                        <ul className="space-y-3">
                          {product.additionalInfo.map((info, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-blue-700 dark:text-blue-300">
                              <span className="shrink-0">•</span>
                              <span>{info}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* Pricing Tab */}
                {activeTab === "pricing" && (
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Percent className="h-6 w-6 text-primary" />
                      Volume Pricing & Discounts
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Bulk orders receive automatic discounts. Larger volumes offer better value per gram.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Volume</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Total Price</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Price/Gram</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Savings</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.volumes.map((volume, idx) => {
                            const basePrice =
                              volume.grams === 1 ? volume.price : product.volumes[0].price * volume.grams
                            const savings = basePrice - volume.price
                            const savingsPercent = savings > 0 ? ((savings / basePrice) * 100).toFixed(1) : "0"
                            return (
                              <tr
                                key={idx}
                                className={`border-b border-border/50 last:border-0 ${selectedVolume === idx ? "bg-primary/5" : ""}`}
                              >
                                <td className="py-3 px-4 font-medium text-foreground">{volume.label}</td>
                                <td className="py-3 px-4 font-bold text-primary">${volume.price.toFixed(2)}</td>
                                <td className="py-3 px-4 text-muted-foreground">
                                  ${(volume.price / volume.grams).toFixed(2)}/g
                                </td>
                                <td className="py-3 px-4">
                                  {savings > 0 && (
                                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                                      Save {savingsPercent}%
                                    </Badge>
                                  )}
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Details Tab */}
                {activeTab === "details" && (
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Product Details</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-start pb-4 border-b border-border/50">
                        <span className="text-muted-foreground">Product ID</span>
                        <span className="font-medium text-foreground">{product.id}</span>
                      </div>
                      <div className="flex justify-between items-start pb-4 border-b border-border/50">
                        <span className="text-muted-foreground">Category</span>
                        <span className="font-medium text-foreground">{product.category}</span>
                      </div>
                      <div className="flex justify-between items-start pb-4 border-b border-border/50">
                        <span className="text-muted-foreground">Potency Level</span>
                        <span className="font-medium text-foreground">{product.potency}</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-muted-foreground">Available Strains</span>
                        <div className="text-right">
                          {product.strains.map((s, i) => (
                            <div key={i} className="font-medium text-foreground">
                              {s.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
