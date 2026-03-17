import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "RSO Dosage Guide 2025: Complete 90-Day Protocol Chart + How to Start Safely",
  description:
    "Complete RSO dosage guide for 2025: rice-grain starting dose, 90-day protocol chart, phase-by-phase breakdown, how much RSO to take, titration schedule, and exact weekly increases with lab-tested products.",
  keywords: [
    "RSO dosage",
    "rick simpson oil dosage",
    "RSO 90 day protocol",
    "RSO dosage chart",
    "how much RSO to take",
    "RSO rice grain dose",
    "rick simpson oil protocol",
    "RSO treatment protocol",
    "RSO starting dose",
    "RSO titration schedule",
    "RSO dosing guide",
    "complete RSO protocol",
    "beginner RSO dose",
    "RSO phase 1 protocol",
    "RSO therapeutic dose",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/rso-dosage-guide",
  },
  openGraph: {
    title: "RSO Dosage Guide 2025: Complete 90-Day Protocol Chart + How to Start Safely",
    description:
      "Rice-grain starting dose, 90-day protocol chart, phase breakdown, titration schedule, and exact weekly increases for Rick Simpson Oil.",
    url: "https://naturalcannabisoil.shop/rso-dosage-guide",
    type: "article",
    publishedTime: "2025-12-01",
    modifiedTime: "2025-12-12",
    images: ["/rso-dosage-chart-infographic-showing-90-day-protoc.jpg"],
  },
  robots: { index: true, follow: true },
}

const dosageData = [
  { weeks: "1–2", dailyDose: "Rice-grain (≈ 0.1g split 3×/day)", weekly: "0.7–1.4 grams", notes: "Start low, go slow" },
  {
    weeks: "3–4",
    dailyDose: "Pea-size (≈ 0.25g split 3×/day)",
    weekly: "1.75–3.5 grams",
    notes: "Increase only if comfortable",
  },
  {
    weeks: "5–12",
    dailyDose: "1 gram per day (split or night dose)",
    weekly: "7 grams",
    notes: "Maintenance phase - full dose",
  },
]

const faqs = [
  {
    q: "How much RSO should a beginner take?",
    a: "Start with half a rice grain (≈ 50 mg) three times daily. This minimizes side effects while your body adjusts to the cannabinoids. Most people feel comfortable increasing after 3-5 days.",
  },
  {
    q: "Can I speed up the protocol?",
    a: "Not recommended. Most side effects (extreme drowsiness, anxiety) come from increasing too quickly. The 90-day protocol exists because it works safely.",
  },
  {
    q: "What time of day should I take RSO?",
    a: "Most users prefer evening/night doses due to the sedative effects. As tolerance builds, daytime dosing becomes easier. Start with bedtime doses only.",
  },
  {
    q: "Should I take RSO with food?",
    a: "Yes. Taking RSO with fatty foods (peanut butter, coconut oil, avocado) increases absorption by up to 3x. Always pair with a small fatty snack.",
  },
  {
    q: "How long until I feel effects?",
    a: "Oral RSO takes 45-90 minutes to onset. Peak effects occur at 2-3 hours. Don't redose within 2 hours or you may over-consume.",
  },
  {
    q: "What if I take too much?",
    a: "RSO cannot cause fatal overdose. If you feel too high: stay calm, drink water, eat something, and rest. Effects will subside in 4-8 hours. Consider CBD to counteract THC.",
  },
  {
    q: "How much RSO do I need for the full 90-day treatment?",
    a: "The complete Rick Simpson protocol requires approximately 60 grams total over 90 days. This breaks down as follows:",
  },
  {
    q: "Can I use RSO topically?",
    a: "Yes. RSO can be applied directly to skin for localized relief. It's commonly used for skin conditions and muscle/joint pain. No psychoactive effects when used topically.",
  },
]

export default function RSODosageGuidePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://naturalcannabisoil.shop/rso-dosage-guide#article",
        headline: "RSO Dosage Guide 2025: Complete Rick Simpson Oil Protocol Chart + How to Start Safely",
        description: "Full 2025 Rick Simpson Oil dosage chart, 90-day protocol, rice-grain starting dose.",
        datePublished: "2025-12-01",
        dateModified: "2025-12-12",
        author: { "@type": "Organization", name: "Natural Cannabis Oil" },
        publisher: {
          "@type": "Organization",
          name: "Natural Cannabis Oil",
          logo: { "@type": "ImageObject", url: "https://naturalcannabisoil.shop/logo.png" },
        },
        mainEntityOfPage: "https://naturalcannabisoil.shop/rso-dosage-guide",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://naturalcannabisoil.shop" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Rick Simpson Oil",
            item: "https://naturalcannabisoil.shop/rick-simpson-oil",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "RSO Dosage Guide",
            item: "https://naturalcannabisoil.shop/rso-dosage-guide",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "Product",
        name: "60g RSO Full Treatment Package – Complete 90-Day Protocol",
        description: "Complete Rick Simpson Oil treatment package - 60 grams for the full 90-day protocol",
        offers: { "@type": "Offer", priceCurrency: "USD", price: "1500", availability: "https://schema.org/InStock" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "89" },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-background">
          {/* Hero */}
          <section className="py-10 md:py-16 bg-gradient-to-b from-primary/10 to-background">
            <div className="container mx-auto px-4">
              <BackButton href="/" label="Back to Home" className="mb-4" />
              <nav className="mb-6 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link href="/rick-simpson-oil" className="hover:text-primary">
                  Rick Simpson Oil
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Dosage Guide</span>
              </nav>

              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-primary/10 text-primary border-primary/20">Updated December 12, 2025</Badge>
                  <Badge variant="outline" className="text-xs">
                    Medical Reference
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-5 leading-tight">
                  Complete Rick Simpson Oil Dosage Guide: 2025 90-Day Protocol Chart
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                  Step-by-step RSO dosing guide for first-time users: rice-grain starting dose, 4-phase protocol,
                  titration schedule, exact weekly increases, and safety tips for the complete 90-day treatment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Starting RSO is daunting—this guide removes all guesswork. Start low, go slow, and reach your
                  therapeutic dose safely.
                </p>
              </div>
            </div>
          </section>

          {/* Important Safety Notice */}
          <section className="py-8 bg-yellow-50 dark:bg-yellow-950/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto flex gap-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                    Important: Educational Purposes Only
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    This guide is for educational purposes only. RSO (Rick Simpson Oil) is extremely potent. Always
                    consult a qualified healthcare professional before starting, especially if you are pregnant,
                    nursing, taking medications, or managing a medical condition. Start low, go slow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* RSO Dosage at a Glance */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-6">RSO Dosage at a Glance</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Start</div>
                        <p className="text-sm text-muted-foreground">½ rice grain</p>
                        <p className="text-xs text-muted-foreground">Night only</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Build</div>
                        <p className="text-sm text-muted-foreground">1 grain</p>
                        <p className="text-xs text-muted-foreground">2–3× daily</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Therapeutic</div>
                        <p className="text-sm text-muted-foreground">2 grains</p>
                        <p className="text-xs text-muted-foreground">3–4× daily</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Full Dose</div>
                        <p className="text-sm text-muted-foreground">1g per day</p>
                        <p className="text-xs text-muted-foreground">Days 61–90</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t text-center text-sm text-muted-foreground">
                      <strong>Total for 90-day protocol:</strong> ~60 grams
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What Is RSO Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-6">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-6">What Is RSO? Quick Overview</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Rick Simpson Oil (RSO) is a full-spectrum cannabis extract known for its exceptionally high THC
                    content (60–95%+) and rich cannabinoid profile including CBD, CBG, CBN, and over 200 aromatic
                    terpenes. Created by Rick Simpson in 2003, RSO has become one of the most potent cannabis medicines
                    available.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Because of its extreme potency,{" "}
                    <strong>precise dosing and gradual dose increases are absolutely critical</strong>. Taking too much
                    too fast leads to overwhelming psychoactive effects. The 90-day protocol exists because it works—it
                    allows your body to build tolerance slowly while achieving therapeutic effects safely.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* General Principles */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">General Principles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Start with a very small dose</h3>
                          <p className="text-sm text-muted-foreground">Begin with a rice grain size or less</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Increase slowly to avoid side effects</h3>
                          <p className="text-sm text-muted-foreground">Take time between dose increases</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Split doses throughout the day</h3>
                          <p className="text-sm text-muted-foreground">
                            Multiple smaller doses work better than one large dose
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Consistency matters more than speed</h3>
                          <p className="text-sm text-muted-foreground">Regular dosing produces better results</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Dosage Chart */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-6">Official 2025 Rick Simpson Oil Dosage Chart</h2>

                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/rso-dosage-chart-infographic-showing-90-day-protoc.jpg"
                    alt="Rick Simpson Oil dosage chart 2025 – complete 90-day protocol with weekly increases from rice grain starting dose"
                    width={800}
                    height={400}
                    className="w-full"
                  />
                </div>

                <Card className="mb-6">
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold">Weeks</TableHead>
                          <TableHead className="font-semibold">Daily Dose</TableHead>
                          <TableHead className="font-semibold">Total per Week</TableHead>
                          <TableHead className="font-semibold">Notes</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {dosageData.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{row.weeks}</TableCell>
                            <TableCell>{row.dailyDose}</TableCell>
                            <TableCell>{row.weekly}</TableCell>
                            <TableCell className="text-muted-foreground">{row.notes}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card className="border-primary/50 bg-primary/5 mb-8">
                  <CardContent className="pt-5">
                    <div className="flex gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Complete 90-Day Treatment: 60 Grams Total
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          The full Rick Simpson protocol requires <strong>60 grams of RSO over 90 days</strong>. This
                          breaks down as follows:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1 mb-3">
                          <li>• Weeks 1-2: Approximately 1-1.4g total (building tolerance)</li>
                          <li>• Weeks 3-4: Approximately 3.5-7g total (gradual increase)</li>
                          <li>• Weeks 5-12: 7 grams per week × 8 weeks = 56 grams</li>
                          <li>
                            • <strong className="text-foreground">Total: ~60 grams for complete protocol</strong>
                          </li>
                        </ul>
                        <p className="text-sm text-muted-foreground">
                          Our full treatment package provides all 60 grams you need at the best value pricing.
                          Individual results vary - some may complete their protocol in 60-90 days, while others may
                          extend treatment based on their condition and response.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Warning Box */}
                <Card className="border-yellow-500/50 bg-yellow-500/5 mb-10">
                  <CardContent className="pt-5">
                    <div className="flex gap-4">
                      <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                          Important Safety Note
                        </h3>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                          Never exceed recommended doses. If you experience discomfort, reduce your dose and slow down
                          the titration. Everyone&apos;s tolerance is different. Listen to your body.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How to Measure */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">How to Measure</h2>
                <Card className="mb-6">
                  <CardContent className="pt-6 space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Rice Grain Sizes:</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          • <strong>Rice grain size</strong> ≈ very small starting dose
                        </li>
                        <li>
                          • <strong>Half grain</strong> ≈ mid-step
                        </li>
                        <li>
                          • <strong>Full grain</strong> ≈ standard reference
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <h3 className="font-semibold mb-2">Application Methods:</h3>
                      <p className="text-muted-foreground mb-2">Use a syringe for accuracy. You may place RSO:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Under the tongue</li>
                        <li>• On food (bread, fruit, yogurt)</li>
                        <li>• Inside an empty capsule</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* 90-Day RSO Dosage Schedule */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">90-Day RSO Dosage Schedule</h2>

                {/* Phase 1 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
                    Phase 1: Introduction & Tolerance Building (Days 1–30)
                  </h3>
                  <p className="text-muted-foreground mb-4 font-medium">Goal: Allow the body to adjust</p>

                  <div className="space-y-3">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-semibold mb-1">Days 1–5</h4>
                            <p className="text-sm text-muted-foreground">
                              <strong>Dose:</strong> ¼ grain of rice
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Frequency:</strong> Once daily (night)
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Days 6–10</h4>
                            <p className="text-sm text-muted-foreground">
                              <strong>Dose:</strong> ¼ grain
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Frequency:</strong> Twice daily (morning & night)
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Days 11–15</h4>
                            <p className="text-sm text-muted-foreground">
                              <strong>Dose:</strong> ½ grain
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Frequency:</strong> Twice daily
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-1">Days 16–20</h4>
                            <p className="text-sm text-muted-foreground">
                              <strong>Dose:</strong> ½ grain
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Frequency:</strong> Three times daily
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Days 21–30</h4>
                            <p className="text-sm text-muted-foreground">
                              <strong>Dose:</strong> 1 full grain
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Frequency:</strong> Three times daily
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="mt-4 border-yellow-500/50 bg-yellow-500/5">
                    <CardContent className="pt-4">
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        ⚠️ If side effects occur (dizziness, anxiety, nausea), reduce to the previous comfortable dose
                        for several days.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Phase 2 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
                    Phase 2: Therapeutic Range (Days 31–60)
                  </h3>
                  <p className="text-muted-foreground mb-4 font-medium">Goal: Reach and maintain effective dosing</p>

                  <div className="space-y-3 mb-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-semibold mb-1">Days 31–40</h4>
                            <p className="text-sm text-muted-foreground">
                              <strong>Dose:</strong> 1 grain
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Frequency:</strong> 3–4 times daily
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Days 41–50</h4>
                            <p className="text-sm text-muted-foreground">
                              <strong>Dose:</strong> 1½ grains
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Frequency:</strong> 3–4 times daily
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Days 51–60</h4>
                            <p className="text-sm text-muted-foreground">
                              <strong>Dose:</strong> 2 grains
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Frequency:</strong> 3–4 times daily
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-emerald-50 dark:bg-emerald-950">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-3">Focus on:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Hydration</li>
                        <li>• Light meals</li>
                        <li>• Adequate sleep</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Phase 3 */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
                    Phase 3: Full Protocol / Maintenance (Days 61–90)
                  </h3>
                  <p className="text-muted-foreground mb-4 font-medium">Goal: Sustain full therapeutic intake</p>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Days 61–90</h4>
                        <p className="text-sm text-muted-foreground">
                          <strong>Dose:</strong> Up to 1 gram per day total
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Frequency:</strong> Divided into 3–5 doses
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Many users reach approximately 60 grams total over 90 days, but this varies by tolerance and
                        individual response.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Tips for Best Results */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Tips for Best Results</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <CheckCircle className="h-5 w-5 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Avoid alcohol and other intoxicants</h3>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <CheckCircle className="h-5 w-5 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Do not drive or operate machinery</h3>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <CheckCircle className="h-5 w-5 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Store RSO in a cool, dark place</h3>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <CheckCircle className="h-5 w-5 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Keep out of reach of children</h3>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Possible Side Effects */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Possible Side Effects</h2>
                <p className="text-muted-foreground mb-6">These usually lessen as tolerance builds:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">• Drowsiness</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">• Dry mouth</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">• Dizziness</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">• Increased appetite</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* When to Stop or Adjust */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">When to Stop or Adjust</h2>
                <Card className="border-red-500/30 bg-red-50 dark:bg-red-950/20">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-4">Stop or lower your dose if you experience:</p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Persistent anxiety or panic</li>
                      <li>• Severe nausea or vomiting</li>
                      <li>• Confusion or extreme sedation</li>
                    </ul>
                    <p className="text-red-700 dark:text-red-300 font-semibold">
                      Seek medical advice immediately if symptoms are severe.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Final Note */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Final Note</h2>
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-lg leading-relaxed">
                      Everyone responds differently to RSO. This 90-day guide emphasizes patience, consistency, and
                      safety. The best results come from listening to your body and progressing at a comfortable pace.
                    </p>
                    <div className="bg-emerald-50 dark:bg-emerald-950 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <h3 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-3">Golden Rules:</h3>
                      <ul className="space-y-2 text-sm text-emerald-600 dark:text-emerald-400">
                        <li>✓ Start very small</li>
                        <li>✓ Increase slowly</li>
                        <li>✓ Split doses during the day</li>
                        <li>✓ If it feels too strong, lower the dose</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How Much Is One Dose */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">How Much Is One Dose?</h2>
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-4">Use the size of a grain of rice as your reference:</p>
                    <ul className="space-y-2 text-muted-foreground mb-6">
                      <li>
                        • <strong>¼ grain</strong> = very tiny (starter dose)
                      </li>
                      <li>
                        • <strong>½ grain</strong> = small
                      </li>
                      <li>
                        • <strong>1 grain</strong> = standard
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-4">You can place RSO:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Under the tongue</li>
                      <li>• On food (bread, fruit, yogurt)</li>
                      <li>• Inside an empty capsule</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* 90-Day RSO Schedule Easy Version */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">90-Day RSO Schedule (Easy Version)</h2>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Step 1: Start Very Small (Days 1–10)</h3>
                      <p className="text-muted-foreground mb-3">Goal: Let your body adjust</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          • <strong>Dose:</strong> ¼ grain of rice
                        </li>
                        <li>
                          • <strong>Time:</strong> Once at night
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-3 p-3 bg-muted rounded">
                        If you feel okay after a few days, you may take: ¼ grain in the morning + ¼ grain at night
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Step 2: Slow Increase (Days 11–30)</h3>
                      <p className="text-muted-foreground mb-3">Goal: Build tolerance without discomfort</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          • <strong>Dose:</strong> ½ grain
                        </li>
                        <li>
                          • <strong>Times per day:</strong> 2–3 times
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-3 p-3 bg-muted rounded">
                        Stay at this level if it feels strong. There is no rush.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Step 3: Medium Dose (Days 31–60)</h3>
                      <p className="text-muted-foreground mb-3">Goal: Reach a helpful daily amount</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          • <strong>Dose:</strong> 1 grain
                        </li>
                        <li>
                          • <strong>Times per day:</strong> 3 times
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-3 p-3 bg-muted rounded">
                        Most beginners feel effects clearly at this stage.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Step 4: Full Daily Use (Days 61–90)</h3>
                      <p className="text-muted-foreground mb-3">Goal: Maintain a steady routine</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          • <strong>Total per day:</strong> Up to 1 gram total
                        </li>
                        <li>
                          • <strong>Split into:</strong> 3–5 small doses
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-3 p-3 bg-muted rounded">
                        Not everyone needs the full amount. Use what feels right for your body.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Final Advice */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Final Advice for First-Time Users</h2>
                <Card className="bg-emerald-50 dark:bg-emerald-950">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-emerald-700 dark:text-emerald-300">
                          Slow progress = better experience.
                        </p>
                        <p className="text-sm text-emerald-600 dark:text-emerald-400">
                          Taking less RSO more consistently works better than taking too much at once.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-emerald-700 dark:text-emerald-300">Listen to your body.</p>
                        <p className="text-sm text-emerald-600 dark:text-emerald-400">Go at your own pace.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Product Recommendation */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-6">Best RSO Products for the 90-Day Protocol</h2>

                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="p-6 md:p-8">
                      <Badge className="mb-3 bg-primary/10 text-primary">Best Value</Badge>
                      <h3 className="text-2xl font-bold mb-2">60g RSO Full Treatment Package</h3>
                      <p className="text-muted-foreground mb-3">
                        Complete 90-day protocol package. Includes 60 grams of premium RSO with batch-matched lab
                        results and dosing guide.
                      </p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-3xl font-bold text-primary">$1,500</span>
                        <Badge variant="secondary">Complete Protocol</Badge>
                      </div>
                      <div className="flex items-center gap-4 mb-5">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="text-yellow-400">
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">(4.9★ from 89 reviews)</span>
                      </div>
                      <div className="mb-5 p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">FREE BONUS:</strong> Get 1 month of RSO oil absolutely
                          FREE with every 90-day treatment package! Treatment duration may vary based on individual
                          condition and response.
                        </p>
                      </div>
                      <Button asChild className="w-full">
                        <Link href="/products/rso/syringe">Shop Full Treatment Package</Link>
                      </Button>
                    </div>
                    <div className="bg-muted flex items-center justify-center p-6">
                      <Image
                        src="/images/rso-1g.png"
                        alt="60g Rick Simpson Oil full treatment package for 90-day protocol 2025"
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="bg-card rounded-lg border px-6">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-serif font-bold mb-6">Continue Learning</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="/rick-simpson-oil"
                    className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors flex items-center justify-between group"
                  >
                    <span className="font-medium">Rick Simpson Oil Hub</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/full-extract-cannabis-oil"
                    className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors flex items-center justify-between group"
                  >
                    <span className="font-medium">FECO vs RSO Comparison</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/products/rso"
                    className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors flex items-center justify-between group"
                  >
                    <span className="font-medium text-primary">Shop RSO Products</span>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/products/feco"
                    className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors flex items-center justify-between group"
                  >
                    <span className="font-medium">Shop FECO Products</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
