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
  title: "FECO Dosage Guide 2025: Full Extract Cannabis Oil Dosing + Safe Beginner Protocol",
  description:
    "Complete FECO dosage guide: rice-grain starting dose, beginner to advanced dosing, how to take FECO oil safely, syringe dosing tips, and the start-low-go-slow protocol for Full Extract Cannabis Oil.",
  keywords: [
    "FECO dosage",
    "full extract cannabis oil dosage",
    "FECO dosing guide",
    "how much FECO to take",
    "FECO rice grain dose",
    "FECO starting dose",
    "FECO syringe dosage",
    "FECO for beginners",
    "FECO dosing chart",
    "full spectrum cannabis oil dosage",
    "FECO sublingual dosing",
    "FECO oral dosing",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/feco-dosage-guide",
  },
  openGraph: {
    title: "FECO Dosage Guide 2025: Full Extract Cannabis Oil Dosing + Safe Beginner Protocol",
    description:
      "Complete FECO dosage guide with rice-grain starting dose, beginner to advanced protocols, and safe dosing practices for Full Extract Cannabis Oil.",
    url: "https://naturalcannabisoil.shop/feco-dosage-guide",
    type: "article",
    publishedTime: "2025-12-01",
    modifiedTime: "2025-12-15",
    images: ["/public/images/feco-package.jpg"],
  },
  robots: { index: true, follow: true },
}

const dosageData = [
  {
    level: "Beginner",
    dose: "5–10 mg (rice-grain sized)",
    frequency: "Once daily",
    duration: "Days 1–7",
    notes: "Start with smallest possible amount",
  },
  {
    level: "Beginner+",
    dose: "10–15 mg",
    frequency: "1–2 times daily",
    duration: "Days 8–21",
    notes: "Only increase if fully comfortable",
  },
  {
    level: "Moderate",
    dose: "15–25 mg",
    frequency: "1–2 times daily",
    duration: "Weeks 4–8",
    notes: "Established tolerance level",
  },
  {
    level: "Advanced",
    dose: "25–50 mg",
    frequency: "2–3 times daily",
    duration: "Week 9+",
    notes: "Experienced users only",
  },
]

const faqs = [
  {
    q: "How much FECO should a complete beginner take?",
    a: "Start with a rice-grain sized amount (5–10 mg) once daily. This is the absolute minimum effective dose that allows your body to adjust to the cannabinoids. Most beginners feel comfortable increasing after 3–7 days.",
  },
  {
    q: "What's the difference between FECO and RSO dosing?",
    a: "FECO and RSO are similar full-spectrum extracts, but FECO is often slightly less potent depending on the strain and extraction method. Start with the same rice-grain protocol for FECO, but you may reach your therapeutic dose slightly faster.",
  },
  {
    q: "Can I take FECO sublingually?",
    a: "Yes, sublingual dosing (under the tongue) is excellent for FECO. Place the oil under your tongue for 30–60 seconds before swallowing. Effects onset in 20–45 minutes, faster than oral dosing.",
  },
  {
    q: "How do I measure FECO from a syringe accurately?",
    a: "FECO syringes have measurement markings. For a rice-grain dose, dispense just 5–10 mg (the oil should be barely visible). Many users warm the syringe slightly under warm water to improve dispensing.",
  },
  {
    q: "Should I take FECO with food?",
    a: "Yes, always pair FECO with fatty foods (peanut butter, coconut oil, avocado, full-fat yogurt). Fat increases cannabinoid absorption by 3–5x, making your dose more effective.",
  },
  {
    q: "How long until I feel FECO effects?",
    a: "Oral FECO: 30–90 minutes onset, peak at 2–3 hours. Sublingual: 20–45 minutes onset. Effects typically last 4–8 hours depending on dose and individual metabolism.",
  },
  {
    q: "What if I accidentally take too much FECO?",
    a: "FECO overdose is not dangerous, but uncomfortable. If you feel too high: stay calm, drink water, rest, and use CBD if available (CBD counteracts THC). Effects will subside in 4–8 hours.",
  },
  {
    q: "Can I use FECO topically?",
    a: "Yes. FECO works well for topical application on skin irritations, muscle soreness, and localized pain. No psychoactive effects when applied to skin. Mix with a carrier oil for better absorption.",
  },
  {
    q: "How should I store FECO oil?",
    a: "Store FECO syringes in a cool, dark place (60–70°F ideal). Refrigeration extends shelf life. Keep away from direct sunlight and heat, which can degrade cannabinoids. Properly stored FECO lasts 6–12 months.",
  },
  {
    q: "Is FECO better than smoking or vaping?",
    a: "FECO provides full-spectrum effects (full cannabinoid and terpene profile), unlike isolated THC products. Effects are longer-lasting and more medicinal. However, onset is slower. Choose based on your needs.",
  },
]

export default function FECODosageGuidePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://naturalcannabisoil.shop/feco-dosage-guide#article",
        headline: "FECO Dosage Guide 2025: Full Extract Cannabis Oil Dosing Protocol + Beginner Safety",
        description: "Complete FECO dosage guide with rice-grain starting dose and protocols for all experience levels.",
        datePublished: "2025-12-01",
        dateModified: "2025-12-15",
        author: { "@type": "Organization", name: "Natural Cannabis Oil" },
        publisher: {
          "@type": "Organization",
          name: "Natural Cannabis Oil",
          logo: { "@type": "ImageObject", url: "https://naturalcannabisoil.shop/logo.png" },
        },
        mainEntityOfPage: "https://naturalcannabisoil.shop/feco-dosage-guide",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://naturalcannabisoil.shop" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Full Extract Cannabis Oil",
            item: "https://naturalcannabisoil.shop/full-extract-cannabis-oil",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "FECO Dosage Guide",
            item: "https://naturalcannabisoil.shop/feco-dosage-guide",
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
                <Link href="/full-extract-cannabis-oil" className="hover:text-primary">
                  Full Extract Cannabis Oil
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Dosage Guide</span>
              </nav>

              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-primary/10 text-primary border-primary/20">Updated December 15, 2025</Badge>
                  <Badge variant="outline" className="text-xs">
                    Educational Reference
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-5 leading-tight">
                  Complete FECO Dosage Guide: Full Extract Cannabis Oil for Beginners & Advanced Users
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                  Master FECO dosing safely: rice-grain starting dose, beginner-to-advanced protocols, syringe measurement
                  tips, and the "start low, go slow" method for maximum effectiveness.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  FECO is incredibly potent—this comprehensive guide removes all confusion and helps you find your perfect
                  dose safely.
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
                    This guide is for educational purposes only. FECO (Full Extract Cannabis Oil) is extremely potent.
                    Always consult a qualified healthcare professional before starting, especially if you are pregnant,
                    nursing, taking medications, or managing a medical condition. Start low, go slow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FECO Dosage at a Glance */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-6">FECO Dosage at a Glance</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Start</div>
                        <p className="text-sm text-muted-foreground">Rice grain (5–10 mg)</p>
                        <p className="text-xs text-muted-foreground">Once daily</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Build</div>
                        <p className="text-sm text-muted-foreground">10–15 mg</p>
                        <p className="text-xs text-muted-foreground">1–2× daily</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Moderate</div>
                        <p className="text-sm text-muted-foreground">15–25 mg</p>
                        <p className="text-xs text-muted-foreground">1–2× daily</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Advanced</div>
                        <p className="text-sm text-muted-foreground">25–50 mg</p>
                        <p className="text-xs text-muted-foreground">2–3× daily</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t text-center text-sm text-muted-foreground">
                      <strong>Key Rule:</strong> Start with a rice-grain size and increase only if comfortable
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What Is FECO */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-6">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-6">What Is FECO? Complete Overview</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Full Extract Cannabis Oil (FECO) is a potent full-spectrum cannabis concentrate that preserves all
                    cannabinoids (THC, CBD, CBG, CBN) and terpenes from the plant. Unlike isolated products, FECO provides
                    the "entourage effect"—all compounds working together for enhanced therapeutic benefits.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    FECO is <strong>extremely concentrated</strong>—typically 50–90% THC content depending on the source
                    plant. The potency is why precise dosing is absolutely critical. A rice-grain sized dose (5–10 mg) can
                    produce significant effects, making FECO unsuitable for casual use.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Because of its concentrated nature, FECO comes in syringes that allow accurate measurement. The thick
                    oil requires careful dispensing, making the syringe format ideal for safe, controlled dosing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Principles */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">The "Start Low, Go Slow" Principles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Begin with a rice-grain dose</h3>
                          <p className="text-sm text-muted-foreground">5–10 mg is the absolute starting point</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Wait 3–7 days before increasing</h3>
                          <p className="text-sm text-muted-foreground">Allow body adaptation between dose changes</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Use with fatty foods</h3>
                          <p className="text-sm text-muted-foreground">
                            Fat increases absorption and makes effects more stable
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
                          <h3 className="font-semibold mb-2">Track your response</h3>
                          <p className="text-sm text-muted-foreground">Note effects to find your ideal dose</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Consistency matters</h3>
                          <p className="text-sm text-muted-foreground">Regular dosing produces better results than sporadic</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Stop if uncomfortable</h3>
                          <p className="text-sm text-muted-foreground">
                            You can always increase, but reducing takes time
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Dosage Levels */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-6">FECO Dosage Levels by Experience</h2>

                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold">Experience Level</TableHead>
                          <TableHead className="font-semibold">Dose per Use</TableHead>
                          <TableHead className="font-semibold">Daily Frequency</TableHead>
                          <TableHead className="font-semibold">Timeline</TableHead>
                          <TableHead className="font-semibold">Notes</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {dosageData.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{row.level}</TableCell>
                            <TableCell>{row.dose}</TableCell>
                            <TableCell>{row.frequency}</TableCell>
                            <TableCell>{row.duration}</TableCell>
                            <TableCell className="text-muted-foreground text-sm">{row.notes}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card className="border-primary/50 bg-primary/5 mt-8">
                  <CardContent className="pt-5">
                    <div className="flex gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Finding Your Perfect FECO Dose</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Everyone's tolerance is different. Some people feel effects at 5 mg, others need 25 mg or more.
                          Start at the beginner level and adjust based on how you feel over 1–2 weeks.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1 mb-3">
                          <li>• <strong>Week 1:</strong> Rice grain (5–10 mg) once daily at bedtime</li>
                          <li>• <strong>Week 2–3:</strong> Increase to 10–15 mg or add a second dose</li>
                          <li>• <strong>Week 4+:</strong> Adjust upward or stay at current level if satisfied</li>
                          <li>
                            • <strong>Goal:</strong> Find the minimum effective dose that provides desired effects
                          </li>
                        </ul>
                        <p className="text-sm text-muted-foreground">
                          Most users find their ideal dose between 15–25 mg per day. Advanced users may take 50+ mg, but
                          this is not necessary for therapeutic benefits.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Consumption Methods */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">How to Take FECO: Consumption Methods</h2>

                <div className="grid gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-4">Oral (Swallowing)</h3>
                      <p className="text-muted-foreground mb-3">
                        Dispense from syringe directly into mouth or mix with food. Effects onset in 30–90 minutes, peak
                        at 2–3 hours, last 4–8 hours.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>✓ Longest-lasting effects</li>
                        <li>✓ Most discreet method</li>
                        <li>✓ Great for consistent daily dosing</li>
                        <li>✗ Slowest onset</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-4">Sublingual (Under the Tongue)</h3>
                      <p className="text-muted-foreground mb-3">
                        Place oil under tongue for 30–60 seconds, then swallow. Faster absorption via oral mucosa. Onset
                        in 20–45 minutes.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>✓ Faster onset than oral</li>
                        <li>✓ Direct mucosa absorption</li>
                        <li>✓ Good for acute symptom relief</li>
                        <li>✗ Taste can be strong</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-4">Mixed with Food</h3>
                      <p className="text-muted-foreground mb-3">
                        Mix FECO with yogurt, honey, peanut butter, or smoothies. Fat in food increases absorption by
                        3–5x, making your dose more effective.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>✓ Masks the strong taste</li>
                        <li>✓ Increases bioavailability dramatically</li>
                        <li>✓ Easier to measure precise doses</li>
                        <li>✗ Still slow onset</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-4">Topical Application</h3>
                      <p className="text-muted-foreground mb-3">
                        Mix with carrier oil (coconut, jojoba) and apply to skin for localized relief. No psychoactive
                        effects when absorbed through skin.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>✓ No psychoactive effects</li>
                        <li>✓ Excellent for inflammation, pain</li>
                        <li>✓ Precise localized relief</li>
                        <li>✗ Slower absorption</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Syringe Dosing Tips */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-6">FECO Syringe Dosing: Pro Tips</h2>

                <Card className="border-primary/50 bg-primary/5">
                  <CardContent className="pt-6">
                    <ul className="space-y-4 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">1.</span>
                        <span>
                          <strong>Warm the syringe:</strong> Hold the FECO syringe under warm (not hot) water for 30
                          seconds. Warmth makes the oil flow easier for precise measurement.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">2.</span>
                        <span>
                          <strong>Read the markings:</strong> Most FECO syringes have 0.5g to 1g total capacity with
                          measurement lines. For 10 mg, you'll dispense a tiny amount barely visible.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">3.</span>
                        <span>
                          <strong>Use the plunger slowly:</strong> Gently push the plunger. Jerky movements can cause
                          over-dispensing.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">4.</span>
                        <span>
                          <strong>Dispense onto a parchment square:</strong> For tiny doses, dispense onto parchment
                          paper to see exactly how much you're using.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">5.</span>
                        <span>
                          <strong>Store properly:</strong> Keep syringe in cool, dark place. Refrigeration extends
                          shelf life. Do not expose to direct heat or sunlight.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">6.</span>
                        <span>
                          <strong>Consider capsule filling:</strong> Some users fill empty vegetable capsules with FECO
                          for easy, consistent dosing.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <span className="text-left text-base font-semibold text-foreground">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="border-primary/50 bg-gradient-to-r from-primary/10 to-primary/5">
                  <CardContent className="pt-8">
                    <h2 className="text-2xl font-bold mb-3">Ready to Start Your FECO Journey?</h2>
                    <p className="text-muted-foreground mb-6">
                      Browse our lab-tested FECO products in various ratios and strains. Start with a small amount and
                      increase gradually using this guide.
                    </p>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link href="/products/feco">
                        Shop FECO Products <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
