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
  Syringe,
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useCart } from "@/lib/cart-context"
import type { SyringeVariant } from "@/lib/rso-products-data"

const syringeVariants: Record<string, SyringeVariant> = {
  indica: {
    type: "indica",
    thc: 72,
    terps: 3.09,
    effects: ["Sleepy", "Calm", "Relaxed", "Happy"],
    topTerpenes: [
      { name: "Beta-Caryophyllene", percentage: "1.08% / 3.09%" },
      { name: "Linalool", percentage: "0.488% / 3.09%" },
      { name: "Alpha-Humulene", percentage: "0.370% / 3.09%" },
    ],
    price: 33,
  },
  hybrid: {
    type: "hybrid",
    thc: 74,
    terps: 2.9,
    effects: ["Creative", "Relaxed", "Happy", "Clear Mind"],
    topTerpenes: [
      { name: "Beta-Caryophyllene", percentage: "1.28% / 2.90%" },
      { name: "Alpha-Humulene", percentage: "0.389% / 2.90%" },
      { name: "Linalool", percentage: "0.354% / 2.90%" },
    ],
    price: 33,
  },
  sativa: {
    type: "sativa",
    thc: 73,
    terps: 1.33,
    effects: ["Focused", "Happy", "Clear Mind", "Uplifted"],
    topTerpenes: [
      { name: "Beta-Caryophyllene", percentage: "0.553% / 1.33%" },
      { name: "Alpha-Humulene", percentage: "0.179% / 1.33%" },
      { name: "Alpha-Bisabolol", percentage: "0.154% / 1.33%" },
    ],
    price: 33,
  },
}

const strainImages = {
  indica: "/images/rso-indica-syringe.png",
  hybrid: "/images/rso-hybrid-syringe.png",
  sativa: "/images/rso-sativa-syringe.png",
}

const strainDescriptions = {
  indica:
    "Experience nature's relief with our Indica RSO Syringe, crafted with full-spectrum Rick Simpson Oil (RSO) that's gently decarboxylated to preserve the pure essence of the plant. Each syringe captures the unique profile of its Indica-dominant cultivar, offering naturally calming support for body and mind. Designed for ease of use, the Indica RSO Syringe delivers approachable, plant-based wellness without inhalation, giving you versatile options for relief you can trust.",
  hybrid:
    "Experience balanced relief with our Hybrid RSO Syringe, crafted with full-spectrum Rick Simpson Oil (RSO) that's gently decarboxylated to preserve the pure essence of the plant. Each syringe captures the well-rounded profile of its Hybrid cultivar, offering versatile support that bridges relaxation and energy. Designed for ease of use, the Hybrid RSO Syringe delivers approachable, plant-based wellness without inhalation, giving you versatile options for relief you can trust.",
  sativa:
    "Experience uplifting relief with our Sativa RSO Syringe, crafted with full-spectrum Rick Simpson Oil (RSO) that's gently decarboxylated to preserve the pure essence of the plant. Each syringe captures the energizing and motivating qualities of its Sativa-dominant cultivar, offering naturally invigorating support for body and mind. Designed for ease of use, the Sativa RSO Syringe delivers approachable, plant-based wellness without inhalation, giving you versatile options for relief you can trust.",
}

const strainBenefits = {
  indica: [
    "Indica-dominant support is often chosen to promote relaxation, calm, and restful sleep",
    "Full-spectrum formulation provides long-lasting therapeutic effects from concentrated cannabinoids",
    "Syringe format makes it easy to measure, consume orally, or blend into food for personalized relief",
    "A convenient, non-inhalable format that integrates smoothly into daily routines",
  ],
  hybrid: [
    "Hybrid support is often chosen for balanced effects that provide both calm and focus",
    "Full-spectrum potency preserves cannabinoids and terpenes for long-lasting, holistic relief",
    "Syringe format makes it easy to measure, consume orally, or blend into food for personalized relief",
    "A convenient, non-inhalable format that integrates smoothly into daily routines",
  ],
  sativa: [
    "Sativa-dominant support is often chosen to promote focus, energy, and daytime relief",
    "Full-spectrum formulation preserves cannabinoids and terpenes for long-lasting, dynamic effects",
    "Syringe format makes it easy to measure, consume orally, or blend into food for personalized relief",
    "A convenient, non-inhalable format that integrates smoothly into daily routines",
  ],
}

export function RSOSyringeDetail() {
  const { addItem } = useCart()
  const [selectedStrain, setSelectedStrain] = useState<"indica" | "hybrid" | "sativa">("hybrid")
  const [selectedTier, setSelectedTier] = useState(0)

  const variant = syringeVariants[selectedStrain]
  const image = strainImages[selectedStrain]
  const description = strainDescriptions[selectedStrain]
  const benefits = strainBenefits[selectedStrain]

  const pricingTiers = [
    { quantity: 1, unitPrice: 33.0, discount: 0, totalPrice: 33.0 },
    { quantity: 5, unitPrice: 31.5, discount: 5, totalPrice: 157.5 },
    { quantity: 10, unitPrice: 29.7, discount: 10, totalPrice: 297.0 },
    { quantity: 20, unitPrice: 27.9, discount: 15, totalPrice: 558.0 },
    { quantity: 30, unitPrice: 26.4, discount: 20, totalPrice: 792.0 },
    { quantity: 60, unitPrice: 24.75, discount: 25, totalPrice: 1485.0 },
    { quantity: 80, unitPrice: 23.1, discount: 30, totalPrice: 1848.0 },
    { quantity: 120, unitPrice: 21.45, discount: 35, totalPrice: 2574.0 },
  ]

  const currentTier = pricingTiers[selectedTier]
  const fullTreatmentPrice = 1485

  const dosageGuide = [
    {
      level: "Week 1-2",
      dose: "Rice grain size (5-10mg)",
      frequency: "3 times daily",
      notes: "Build tolerance slowly",
    },
    {
      level: "Week 3-4",
      dose: "Half rice grain to rice grain",
      frequency: "3 times daily",
      notes: "Double dose every 4 days",
    },
    {
      level: "Week 5-8",
      dose: "Increase gradually",
      frequency: "3 times daily",
      notes: "Work up to 1g per day",
    },
    {
      level: "Full Protocol",
      dose: "1g daily",
      frequency: "Divided into 3 doses",
      notes: "60g total over 90 days",
    },
  ]

  const handleAddToCart = () => {
    addItem({
      id: `rso-syringe-${selectedStrain}-qty-${currentTier.quantity}`,
      name: `${selectedStrain.charAt(0).toUpperCase() + selectedStrain.slice(1)} RSO Syringe (${currentTier.quantity} x 1g)`,
      price: currentTier.totalPrice,
      image: image,
      quantity: 1,
    })
  }

  const handleFullTreatmentPurchase = () => {
    addItem({
      id: `rso-syringe-${selectedStrain}-full-treatment`,
      name: `${selectedStrain.charAt(0).toUpperCase() + selectedStrain.slice(1)} RSO Syringe - Full Treatment (60g)`,
      price: fullTreatmentPrice,
      image: image,
      quantity: 1,
    })
  }

  const strainColor = {
    indica: "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-900",
    hybrid: "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900",
    sativa: "bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900",
  }

  const strainTextColor = {
    indica: "text-purple-800 dark:text-purple-400",
    hybrid: "text-green-800 dark:text-green-400",
    sativa: "text-yellow-800 dark:text-yellow-400",
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
                { label: "RSO Syringe (1g)" },
              ]}
            />

            <Link
              href="/products/rso"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to RSO Products
            </Link>

            <div className="mb-8 p-6 bg-card rounded-2xl border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Leaf className="h-6 w-6 text-primary" />
                Select Your Strain
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(syringeVariants).map(([strainKey, strainData]) => (
                  <button
                    key={strainKey}
                    onClick={() => setSelectedStrain(strainKey as "indica" | "hybrid" | "sativa")}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      selectedStrain === strainKey
                        ? `border-primary ${strainColor[strainKey as "indica" | "hybrid" | "sativa"]}`
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3
                          className={`text-lg font-bold capitalize mb-1 ${strainTextColor[strainKey as "indica" | "hybrid" | "sativa"]}`}
                        >
                          {strainKey}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {strainData.thc}% THC | {strainData.terps}% Terps
                        </p>
                      </div>
                      {selectedStrain === strainKey && <Check className="h-5 w-5 text-primary" />}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {strainData.effects.map((effect, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {effect}
                        </Badge>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Header */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${selectedStrain} RSO Syringe`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Syringe className="h-8 w-8 text-primary" />
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 capitalize">
                    {selectedStrain} RSO
                  </Badge>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {selectedStrain.charAt(0).toUpperCase() + selectedStrain.slice(1)} RSO Syringe
                </h1>
                <p className="text-sm text-muted-foreground mb-4">
                  {variant.thc}% THC | {variant.terps}% Terpenes | 1000mg per syringe
                </p>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(4.8 out of 5)</span>
                </div>

                <div className="mb-6 p-4 rounded-lg bg-muted/50">
                  <h3 className="font-semibold text-foreground mb-3">Effects</h3>
                  <div className="flex flex-wrap gap-2">
                    {variant.effects.map((effect, idx) => (
                      <Badge key={idx} className="bg-primary/20 text-primary border-primary/30">
                        {effect}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6 p-4 rounded-lg bg-muted/50">
                  <h3 className="font-semibold text-foreground mb-3">Top Terpenes</h3>
                  <div className="space-y-2">
                    {variant.topTerpenes.map((terpene, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{terpene.name}</span>
                        <span className="font-medium text-foreground">{terpene.percentage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Tiers */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Percent className="h-5 w-5 text-primary" />
                    Select Quantity - Save More with Bulk Orders
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {pricingTiers.map((tier, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedTier(idx)}
                        className={`p-3 rounded-lg border-2 text-left transition-all ${
                          selectedTier === idx ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="font-bold text-foreground text-sm">{tier.quantity} g</div>
                        <div className="text-sm text-primary font-medium">${tier.totalPrice.toLocaleString()}</div>
                        {tier.discount > 0 && (
                          <div className="text-xs text-green-600 font-semibold">{tier.discount}% OFF</div>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-2 border-amber-300 dark:border-amber-700">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h4 className="font-bold text-amber-800 dark:text-amber-400 text-lg">Full Treatment Package</h4>
                        <p className="text-sm text-amber-700 dark:text-amber-300">60 grams - Complete RSO Protocol</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-amber-600 dark:text-amber-400">
                          <Clock className="h-4 w-4" />
                          <span>90+ days depending on your condition</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-amber-800 dark:text-amber-400">
                          ${fullTreatmentPrice.toLocaleString()}
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
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold text-primary">${currentTier.totalPrice.toLocaleString()}</div>
                  {currentTier.discount > 0 && (
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      Save {currentTier.discount}%
                    </Badge>
                  )}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{description}</p>

                <Button size="lg" className="gap-2 text-lg py-6" onClick={handleAddToCart}>
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart - ${currentTier.totalPrice.toLocaleString()}
                </Button>
              </div>
            </div>

            <div className="mb-8 bg-card rounded-2xl p-6 md:p-8 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-6">Designed for Everyday Wellness</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Highlights */}
            <div className="mb-8 bg-card rounded-2xl p-6 md:p-8 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-6">Product Highlights</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  "Potent full-spectrum cannabis oil",
                  "Long-lasting therapeutic relief",
                  "Convenient syringe format",
                  "Non-inhalable option for wellness support",
                  "Made with independently tested, indoor-grown flower",
                  "Backed by Trulieve's commitment to quality, variety, and value",
                ].map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dosage Guide */}
            <div className="mb-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 md:p-8 border border-primary/20">
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
                    {dosageGuide.map((guide, idx) => (
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
                Start low, go slow. Average dose: 100mg per serving. Wait 1–2 hours before increasing dosage.
              </p>
            </div>

            {/* How to Use */}
            <div className="mb-8 bg-card rounded-2xl p-6 md:p-8 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                How to Use
              </h2>
              <ol className="space-y-4">
                {[
                  "Dispense a rice-grain-sized amount onto food or under the tongue",
                  "Apply topically to sore joints or muscles",
                  "Store syringe upright in a cool, dark place",
                  "Clean tip after each use",
                  "Each syringe delivers 1000mg (1g) of RSO",
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-muted-foreground text-lg pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Brand Info */}
            <div className="mb-8 bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6">About Our RSO Products</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our premium Rick Simpson Oil products empower you to bring balance and wellness into your everyday
                routine. Designed to meet the demands of daily life with diverse options, our full-spectrum line offers
                medical-grade cannabis products in effective, familiar formats such as capsules, tinctures, syringes,
                and suppositories—each one reliable and ready to meet you wherever you are on the path to wellness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By weaving seamlessly into daily and nightly routines, our RSO products nurture mind, body, and
                spirit—infusing everyday moments with clarity, comfort, and connection while supporting long-term
                wellbeing.
              </p>
            </div>

            {/* Safety & Storage */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 dark:bg-amber-950/30 rounded-2xl p-6 md:p-8 border border-amber-200 dark:border-amber-900">
                <h2 className="text-xl font-bold text-amber-800 dark:text-amber-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Safety Notes
                </h2>
                <ul className="space-y-3">
                  {[
                    "Do not inject - syringes are for dispensing only",
                    "Measure carefully with rice grain sizing to avoid overdosing",
                    "Keep out of reach of children and pets",
                    "Start with smallest dose possible (5-10mg)",
                    "Made with independently tested, indoor-grown flower",
                  ].map((note, idx) => (
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
                  {[
                    "Store syringe upright in a cool, dark place",
                    "Clean the tip after each use",
                    "Avoid exposure to air to maintain freshness",
                    "Keep refrigerated for extended storage (up to 2 years)",
                    "Backed by Trulieve's commitment to quality",
                  ].map((tip, idx) => (
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
                {[
                  "Complete 60-gram treatment protocol available ($1,500)",
                  "Treatment duration varies based on individual condition",
                  "Graduated syringe markings for precise dosing",
                  "Traditional Rick Simpson method extraction",
                  "Three strain options: Indica, Hybrid, Sativa",
                  "Highest concentration available (100mg per dose)",
                  "Each syringe contains 1000mg (1g) of RSO",
                  "Full-spectrum potency preserves cannabinoids and terpenes",
                  "BONUS: Get 1 month FREE RSO oil with every 90-day treatment package!",
                  "Certificate of Analysis (COA) available for verification",
                ].map((info, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{info}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RSO Syringe Information */}
            <div className="mt-8 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl p-8 md:p-12 border border-primary/10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                RSO Syringe – Premium Rick Simpson Oil (RSO) Full Spectrum Cannabis Extract
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our RSO syringe contains high-potency Rick Simpson Oil (RSO), a thick and concentrated full spectrum cannabis oil known for preserving the natural cannabinoids and plant compounds found in the cannabis plant. Originally popularized by Rick Simpson, RSO oil remains one of the most recognized cannabis concentrates available today.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Each Rick Simpson Oil syringe is filled with dark, viscous cannabis oil designed for convenient and accurate dispensing. Because RSO oil is extremely concentrated, the syringe format allows users to measure precise amounts while storing the oil safely.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Unlike refined cannabis extracts that isolate specific cannabinoids, RSO cannabis oil retains a broad spectrum of plant compounds including THC, CBD, minor cannabinoids, terpenes, and flavonoids. This whole-plant extraction method creates what many people describe as full spectrum cannabis oil, where multiple plant compounds remain present in the final extract.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Many customers searching for buy Rick Simpson Oil, buy RSO online, RSO oil for sale, or Rick Simpson Oil syringe choose the syringe format because it offers precise dosing and easy storage for thick cannabis oil concentrates.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Features of Our RSO Syringe</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Premium Rick Simpson Oil",
                      desc: "Made from whole-plant cannabis extracts designed to preserve natural cannabinoids and plant compounds.",
                    },
                    {
                      title: "High-Potency Cannabis Oil",
                      desc: "RSO oil is known for its strong cannabinoid concentration and full spectrum composition.",
                    },
                    {
                      title: "Convenient Syringe Format",
                      desc: "Each RSO syringe allows accurate and controlled dispensing of thick cannabis oil.",
                    },
                    {
                      title: "Full Spectrum Cannabis Extract",
                      desc: "Contains a range of cannabinoids and natural plant compounds found in cannabis.",
                    },
                  ].map((feature, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 pt-8 border-t border-primary/10">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose RSO Syringes?</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The RSO syringe format has become the most popular way to store and dispense Rick Simpson Oil because of the oil's thick consistency and potency. Syringes make it easy to measure small amounts of cannabis oil while keeping the extract protected from air and light.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Customers researching RSO syringe, Rick Simpson Oil syringe, or high THC RSO oil often prefer this format because it offers a practical way to handle concentrated cannabis extracts.
                </p>
              </div>

              <div className="pt-8 border-t border-primary/10">
                <h3 className="text-2xl font-bold text-foreground mb-6">Buy Rick Simpson Oil Online</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Looking to buy Rick Simpson Oil online? Our store offers carefully selected RSO syringes designed for customers seeking authentic RSO oil and full spectrum cannabis extracts.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Browse our selection of Rick Simpson Oil syringes, RSO oil products, and other cannabis concentrates available for purchase online.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
