import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "RSO (Rick Simpson Oil) - Quick 2025 Guide to Dosing",
  description:
    "Quick RSO guide: what it is, dosage, how to use, 90-day protocol, forms, storage, top brands, pricing, and FAQs. Everything beginners need to know.",
  keywords: ["RSO", "Rick Simpson Oil", "RSO dosage", "RSO guide", "buy RSO", "how to use RSO", "RSO for pain"],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/rso",
  },
  openGraph: {
    title: "RSO (Rick Simpson Oil) - Quick 2025 Guide",
    description: "Quick reference guide to RSO dosing, use, and buying. Updated 2025.",
    url: "https://naturalcannabisoil.shop/rso",
    type: "article",
    images: ["/dark-amber-cannabis-oil-dropper-bottle.jpg"],
  },
}

export default function RSOQuickGuidePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "RSO: Rick Simpson Oil – Quick 2025 Guide",
    description: "Quick reference guide to Rick Simpson Oil - everything you need in under 3 minutes",
    image: "https://naturalcannabisoil.shop/dark-amber-cannabis-oil-dropper-bottle.jpg",
    author: {
      "@type": "Organization",
      name: "Rick Simpson Oil for Cancer",
    },
    publisher: {
      "@type": "Organization",
      name: "Rick Simpson Oil for Cancer",
      logo: {
        "@type": "ImageObject",
        url: "https://naturalcannabisoil.shop/logo.svg",
      },
    },
    datePublished: "2025-12-01",
    dateModified: "2025-12-12",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-background">
          <article className="container mx-auto px-4 max-w-4xl py-12 space-y-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-amber-600/10 text-amber-600 border-amber-600/20">
                Last updated: December 2025
              </Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                RSO: Rick Simpson Oil – Quick 2025 Guide
              </h1>
              <p className="text-xl text-muted-foreground">Everything you need in under 3 minutes</p>
            </div>

            <Image
              src="/dark-amber-cannabis-oil-dropper-bottle.jpg"
              alt="Rick Simpson Oil quick guide 2025"
              width={800}
              height={400}
              className="rounded-xl shadow-xl mx-auto"
              priority
            />

            {/* What is RSO */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">What is RSO?</h2>
              <p className="text-lg">
                Rick Simpson Oil is a full-spectrum, ultra-high-THC cannabis extract (600–950 mg/g) made famous by Rick
                Simpson's claim that it cured his skin cancer in 2003. It's dark, thick, and sticky — usually sold in
                syringes.
              </p>
            </section>

            {/* Fast Facts */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">Fast facts (2025)</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>THC content:</strong> 60–95%+
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Best for:</strong> chronic pain, insomnia, appetite loss, nausea
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Forms:</strong> syringes, capsules, suppositories, edibles
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Average price:</strong> $30–60 per gram
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Legal:</strong> all medical + adult-use states, Canada, most of Europe
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* How to dose */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">How to dose (beginners)</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">1</div>
                    <p className="font-semibold mb-1">Start</p>
                    <p className="text-sm text-muted-foreground">½ rice-grain size at night only (~25–50 mg THC)</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">2</div>
                    <p className="font-semibold mb-1">Hold</p>
                    <p className="text-sm text-muted-foreground">Wait 3–4 days before increasing dose</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <p className="font-semibold mb-1">Increase</p>
                    <p className="text-sm text-muted-foreground">Double every 4 days only if comfortable</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground">
                Most people settle at 100–300mg/day — not the full 1 g/day originally recommended.
              </p>
            </section>

            {/* 90-day protocol */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">90-day protocol (simplified)</h2>
              <div className="space-y-3">
                <Card>
                  <CardContent className="pt-4">
                    <p>
                      <strong>Weeks 1–4:</strong> build tolerance slowly
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <p>
                      <strong>Weeks 5–12:</strong> 300–600 mg/day average (many never go higher)
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <p>
                      <strong>Maintenance:</strong> 1–3 rice grains per day
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* How to use */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">How to use</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">Sublingual</h3>
                    <p className="text-muted-foreground text-sm">Fastest onset, 15-30 minutes</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">Swallow/capsules</h3>
                    <p className="text-muted-foreground text-sm">Longest lasting, 4-8+ hours</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">Suppositories</h3>
                    <p className="text-muted-foreground text-sm">Least psychoactive, high bioavailability</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">Topical</h3>
                    <p className="text-muted-foreground text-sm">Localized relief, no high</p>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <strong>Never vape or smoke RSO</strong> — too thick and contains residuals unsafe for inhalation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Storage */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">Storage</h2>
              <p>
                Refrigerate in syringe. Lasts 2–3 years. Warm before use by holding in your hand or placing in warm
                water.
              </p>
            </section>

            {/* Where to buy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">Where to buy (2025 top brands)</h2>
              <p>Papa & Barkley • Mary's Medicinals • Wana • Select • Tilray</p>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Shop Our RSO Products</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    All lab-tested with current COAs. Discreet shipping included.
                  </p>
                  <Button asChild className="bg-primary">
                    <Link href="/products/rso">
                      Browse RSO <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Quick FAQ */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">Quick FAQ</h2>
              <div className="space-y-3">
                <Card>
                  <CardContent className="pt-4">
                    <p className="font-semibold mb-1">Same as FECO?</p>
                    <p className="text-sm text-muted-foreground">No — FECO is cleaner, smoother, medically preferred</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <p className="font-semibold mb-1">Will I get high?</p>
                    <p className="text-sm text-muted-foreground">
                      Extremely — THC versions are very psychoactive. Suppositories = almost none
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <p className="font-semibold mb-1">Cures cancer?</p>
                    <p className="text-sm text-muted-foreground">
                      No proof, but great for symptom management and palliative care
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA */}
            <section className="space-y-6 pt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/rick-simpson-oil">
                    Read Full RSO Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/products/rso">Shop RSO Products</Link>
                </Button>
              </div>
            </section>

            {/* Expanded Content */}
            <section className="space-y-8">
              <h2 className="text-2xl font-serif font-bold">Expanded Content</h2>
              <p className="text-lg">{/* Insert detailed sections here */}</p>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
