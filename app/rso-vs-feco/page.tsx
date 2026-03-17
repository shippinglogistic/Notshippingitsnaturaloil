import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "RSO vs FECO: Complete 2025 Comparison Guide | Production, Effects & Which Is Better",
  description:
    "RSO vs FECO comparison: production methods, potency, effects, dosing, taste, and pricing. Full guide to choosing between Rick Simpson Oil and Full Extract Cannabis Oil in 2025.",
  keywords: [
    "RSO vs FECO",
    "Rick Simpson Oil vs FECO",
    "RSO versus full extract cannabis oil",
    "FECO vs RSO which is better",
    "full-spectrum cannabis comparison",
    "RSO or FECO",
    "best cannabis extract",
    "RSO benefits vs FECO",
    "ethanol extraction comparison",
    "full spectrum oil differences",
    "cannabis oil comparison 2025",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/rso-vs-feco",
  },
  openGraph: {
    title: "RSO vs FECO: Complete 2025 Comparison Guide",
    description:
      "Detailed RSO vs FECO comparison covering production, potency, effects, taste, price, and which suits your needs best.",
    url: "https://naturalcannabisoil.shop/rso-vs-feco",
    type: "article",
    publishedTime: "2025-12-01",
    modifiedTime: "2025-12-12",
    images: ["/images/rso-20sativa.png"],
  },
  robots: { index: true, follow: true },
}

export default function RSOVsFECOPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "RSO vs FECO: Complete 2025 Comparison Guide",
    description:
      "Detailed RSO vs FECO comparison covering production, potency, effects, taste, price, and which suits your needs best.",
    image: ["/images/rso-20sativa.png", "/images/rso-20indica-20capsules.avif", "/images/rso-20hybrid-20capsules.jpeg"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-background">
          {/* Hero Section */}
          <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
            <div className="container mx-auto px-4">
              <nav className="mb-8 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">RSO vs FECO Comparison</span>
              </nav>
              <div className="max-w-4xl">
                <Badge className="mb-4">Complete Comparison Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                  RSO vs FECO: Complete 2025 Comparison Guide
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Cannabis concentrates have evolved far beyond traditional flower. RSO (Rick Simpson Oil) and FECO
                  (Full-Extract Cannabis Oil) are often confused, sometimes used interchangeably, and frequently
                  misunderstood. While they share similarities in appearance, potency, and purpose, they are not exactly
                  the same.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="/products/rso">Shop Lab-Tested RSO</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/products/feco">Shop FECO Products</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* TOP IMAGE - RSO Sativa */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/rso-20sativa.png"
                    alt="RSO Sativa cannabis oil product showing uplifting strain effects"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Introduction Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-6">Introduction</h2>
                <p className="text-muted-foreground mb-6">
                  Cannabis concentrates have evolved far beyond traditional flower. Among the most discussed
                  full-spectrum cannabis oils are RSO (Rick Simpson Oil) and FECO (Full-Extract Cannabis Oil). These two
                  products are often confused, sometimes used interchangeably, and frequently misunderstood by new and
                  experienced users alike.
                </p>
                <p className="text-muted-foreground mb-6">
                  While RSO and FECO share similarities in appearance, potency, and purpose, they are not exactly the
                  same. Understanding the differences is essential for consumers who want to choose the right product
                  for their needs—whether that's wellness support, pain relief, sleep improvement, or therapeutic use.
                </p>
                <p className="text-muted-foreground mb-6">
                  This guide provides a clear, in-depth, beginner-friendly comparison of RSO vs FECO, covering:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-8 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span> What each oil is
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span> How they are made
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span> Potency and cannabinoid profile
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span> Taste, texture, and appearance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span> Effects and use cases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span> Safety, dosing, and storage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span> Which one may be better for you
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span> Pricing and cost considerations
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  By the end of this article, you'll have a solid understanding of both oils and feel confident making
                  an informed choice.
                </p>
              </div>
            </div>
          </section>

          {/* What Is RSO Section */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">What Is RSO (Rick Simpson Oil)?</h2>
                <p className="text-muted-foreground mb-6">
                  RSO, short for Rick Simpson Oil, is a thick, dark cannabis oil named after Rick Simpson, a Canadian
                  cannabis activist who popularized its use in the early 2000s. He developed the oil while experimenting
                  with cannabis as a personal wellness aid.
                </p>
                <p className="text-muted-foreground mb-6">RSO is known for being:</p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">RSO Characteristics</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Extremely potent</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            Full-spectrum (contains many cannabinoids and plant compounds)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Thick and sticky in texture</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Dark brown or nearly black in color</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Purpose of RSO</h3>
                      <p className="text-muted-foreground mb-4">
                        RSO was originally popularized for high-dose THC protocols. Because of this, it is often
                        associated with users seeking strong, long-lasting effects rather than casual or recreational
                        use. Today, many consumers use RSO for:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Severe pain</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Sleep support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Appetite stimulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Stress and relaxation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Long-term wellness routines</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* What Is FECO Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">What Is FECO (Full-Extract Cannabis Oil)?</h2>
                <p className="text-muted-foreground mb-6">
                  FECO stands for Full-Extract Cannabis Oil. As the name suggests, it is designed to preserve as much of
                  the cannabis plant's natural profile as possible, including cannabinoids, terpenes, flavonoids, and
                  other compounds.
                </p>
                <p className="text-muted-foreground mb-6">FECO is often described as:</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">FECO Characteristics</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">A cleaner, more refined version of RSO</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Full-spectrum by design</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Slightly smoother in taste</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">More consistent in production</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Purpose of FECO</h3>
                      <p className="text-muted-foreground mb-4">
                        FECO is typically produced for controlled therapeutic use and modern dispensary markets. It is
                        favored by users who want the benefits of full-spectrum cannabis oil with a more standardized
                        process. Common reasons people choose FECO include:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Balanced effects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Consistent potency</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Easier dosing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Improved taste compared to traditional RSO</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Production Methods Section */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">How RSO and FECO Are Made</h2>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">How RSO Is Made</h3>
                  <p className="text-muted-foreground mb-6">
                    Traditional RSO is made by soaking cannabis plant material in a solvent (commonly ethanol or
                    isopropyl alcohol) to extract cannabinoids and other compounds. The solvent is then evaporated,
                    leaving behind a thick oil.
                  </p>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-4">Key Characteristics of RSO Production</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Uses the entire plant, including leaves and trim
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Extraction method is simple and old-school
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Final product may contain residual plant waxes
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Less emphasis on refinement
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <p className="text-muted-foreground mt-4">
                    Because of this process, RSO tends to be darker, stronger in taste, and heavier in texture.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">How FECO Is Made</h3>
                  <p className="text-muted-foreground mb-6">
                    FECO uses a similar solvent-based extraction method but is typically produced with greater control
                    and refinement. Most FECO is made using food-grade ethanol and modern lab equipment.
                  </p>
                  <Card className="border-primary">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-4">Key Characteristics of FECO Production</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Carefully selected plant material
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Food-grade solvents only
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> More controlled temperatures
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Improved solvent purging
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <p className="text-muted-foreground mt-4">
                    The result is a cleaner oil that still maintains full-spectrum benefits but with fewer impurities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">RSO vs FECO: Key Differences at a Glance</h2>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-semibold">Feature</TableHead>
                          <TableHead className="font-semibold text-center">RSO</TableHead>
                          <TableHead className="font-semibold text-center">FECO</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Full-spectrum</TableCell>
                          <TableCell className="text-center">Yes</TableCell>
                          <TableCell className="text-center">Yes</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">THC content</TableCell>
                          <TableCell className="text-center">Very high</TableCell>
                          <TableCell className="text-center">Very high</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Taste</TableCell>
                          <TableCell className="text-center">Strong, bitter</TableCell>
                          <TableCell className="text-center">Milder, smoother</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Texture</TableCell>
                          <TableCell className="text-center">Thick, sticky</TableCell>
                          <TableCell className="text-center">Slightly smoother</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Production</TableCell>
                          <TableCell className="text-center">Traditional</TableCell>
                          <TableCell className="text-center">Refined</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Consistency</TableCell>
                          <TableCell className="text-center">Can vary</TableCell>
                          <TableCell className="text-center">More consistent</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* MIDDLE IMAGE - RSO Indica Capsules */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/rso-20indica-20capsules.avif"
                    alt="RSO Indica Capsules - Dark colored capsules in a bottle for nighttime use"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Potency and Cannabinoid Profile Section */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Potency and Cannabinoid Profile</h2>
                <p className="text-muted-foreground mb-6">
                  Both RSO and FECO are extremely potent. THC levels often range between 60% and 90%, depending on
                  strain and extraction quality.
                </p>
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Cannabinoids Present</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> THC (dominant)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> CBD (varies by strain)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> CBG
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> CBN
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> Trace cannabinoids
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      Because both oils are full-spectrum, they benefit from the entourage effect, where cannabinoids
                      and terpenes work together to enhance overall effects.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Taste, Aroma, Appearance Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Taste, Aroma, and Appearance</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">RSO</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Dark brown to black
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Very thick and tar-like
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Strong herbal, bitter flavor
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Intense cannabis aroma
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">FECO</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Dark amber to deep brown
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Slightly smoother texture
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Less harsh flavor
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Cleaner aroma
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground mt-8">
                  For many users, taste is a deciding factor, especially for long-term use.
                </p>
              </div>
            </div>
          </section>

          {/* Effects Section */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Effects: What to Expect</h2>
                <p className="text-muted-foreground mb-8">Both oils produce strong, long-lasting effects.</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Common Effects of RSO</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Deep body relaxation
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Heavy sedation (especially at night)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Strong psychoactive effects
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Increased appetite
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Common Effects of FECO</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Balanced relaxation
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Mental calmness
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Less overwhelming onset
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Functional daytime use (at lower doses)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground mt-8">
                  Individual response varies based on tolerance, dose, and body chemistry.
                </p>
              </div>
            </div>
          </section>

          {/* Dosing Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Dosing Differences</h2>
                <p className="text-muted-foreground mb-8">
                  Because of their strength, both oils require very small doses.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">RSO Dosing</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Often starts with a rice-grain-sized amount
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Frequently used in gradual build-up protocols
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Easier to overconsume if inexperienced
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">FECO Dosing</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Also starts very small
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Often more predictable
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> Preferred by beginners for controlled dosing
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Methods of Use Section */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Methods of Use</h2>
                <p className="text-muted-foreground mb-6">Both RSO and FECO can be used in similar ways:</p>
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> Sublingual (under the tongue)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> Mixed with food
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> Filled into capsules
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <p className="text-muted-foreground">They are not recommended for smoking or vaping.</p>
              </div>
            </div>
          </section>

          {/* Safety Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Safety Considerations</h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> Do not drive after use
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> Avoid alcohol
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> Keep away from children and pets
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span> Start low and increase slowly
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      Those taking medications should consult a healthcare professional.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Which One Is Better Section */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Which One Is Better?</h2>
                <p className="text-muted-foreground mb-8">There is no universal answer.</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Choose RSO if:</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> You want a traditional, powerful oil
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> You don't mind strong taste
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> You are experienced with THC
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">Choose FECO if:</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> You want cleaner taste and consistency
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> You are new to full-spectrum oils
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span> You prefer predictable effects
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Pricing and Cost Considerations</h2>
                <p className="text-muted-foreground mb-6">
                  Pricing for RSO and FECO can vary significantly depending on the brand, strain, and production method.
                  Generally, FECO might be slightly more expensive due to its refined production process.
                </p>
                <p className="text-muted-foreground mb-6">
                  When considering cost, it's important to look at the overall value rather than just the price per
                  unit. Higher-quality oils often provide better effects and safety.
                </p>
              </div>
            </div>
          </section>

          {/* BOTTOM IMAGE - RSO Hybrid Capsules */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/rso-20hybrid-20capsules.jpeg"
                    alt="RSO Hybrid Capsules - Balanced cannabis oil capsules with hybrid strain effects"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Final Thoughts Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold mb-8">Final Thoughts</h2>
                <p className="text-muted-foreground mb-6">
                  RSO and FECO are two of the most potent and respected cannabis oils available. While they share many
                  similarities, the differences in refinement, taste, and consistency matter—especially for first-time
                  users.
                </p>
                <p className="text-muted-foreground mb-6">
                  Choosing between RSO and FECO ultimately depends on your experience level, sensitivity to THC, and
                  personal preferences. By understanding how each oil is made and how it affects the body, you can make
                  a safer and more informed decision.
                </p>
                <p className="text-sm text-muted-foreground italic">Educational content only. Not medical advice.</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
