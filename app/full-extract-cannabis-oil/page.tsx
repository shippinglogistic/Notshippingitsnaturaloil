import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Shield,
  FlaskConical,
  ArrowRight,
  Info,
  Droplets,
  Pill,
  Syringe,
  Candy,
  Heart,
  AlertCircle,
  Clock,
  ThermometerSun,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Full Extract Cannabis Oil: Complete 2025 FECO Guide & Dosing",
  description:
    "Comprehensive FECO guide: what it is, dosing, 90-day protocol, forms, production methods, medical uses, storage, top brands, and why doctors prefer FECO over RSO.",
  keywords: [
    "FECO",
    "Full Extract Cannabis Oil",
    "FECO vs RSO",
    "FECO dosage",
    "cannabis oil",
    "medical cannabis",
    "FECO for cancer",
    "FECO protocol",
    "buy FECO online",
    "full spectrum extract",
    "ethanol extraction",
    "FECO benefits",
    "FECO suppositories",
    "FECO capsules",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/full-extract-cannabis-oil",
  },
  openGraph: {
    title: "Full Extract Cannabis Oil: Complete 2025 FECO Guide & Dosing",
    description: "Comprehensive guide to FECO - the cleaner, safer medical-grade alternative to RSO.",
    url: "https://naturalcannabisoil.shop/full-extract-cannabis-oil",
    type: "article",
    images: ["/glass-tincture-bottle-with-dropper-cannabis-oil.jpg"],
  },
}

export default function FullExtractCannabisOilPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Full Extract Cannabis Oil: Complete 2025 FECO Guide & Dosing",
    description: "Comprehensive guide covering everything about FECO - composition, uses, dosing, and protocols.",
    image: "https://naturalcannabisoil.shop/glass-tincture-bottle-with-dropper-cannabis-oil.jpg",
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
          {/* Hero Section */}
          <article className="prose prose-lg max-w-none">
            <section className="relative py-16 md:py-24 bg-gradient-to-b from-emerald-900/10 to-background">
              <div className="container mx-auto px-4 max-w-4xl">
                <Badge className="mb-4 bg-emerald-600/10 text-emerald-600 border-emerald-600/20">
                  Updated December 2025
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                  🌿 Full Extract Cannabis Oil: Complete 2025 FECO Guide & Dosing
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Everything you need to know about FECO for medical and therapeutic use.
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href="/products/feco">
                      Shop FECO Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/feco">Quick FECO Guide</Link>
                  </Button>
                </div>

                <Image
                  src="/glass-tincture-bottle-with-dropper-cannabis-oil.jpg"
                  alt="Full Extract Cannabis Oil (FECO) - Medical-grade cannabis extract 2025"
                  width={800}
                  height={500}
                  className="rounded-xl shadow-2xl mb-12"
                  priority
                />
              </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 max-w-4xl py-12 space-y-12">
              {/* Introduction */}
              <section>
                <p className="text-lg leading-relaxed">
                  Full Extract Cannabis Oil (FECO) has rapidly become the gold-standard whole-plant cannabis medicine in
                  clinics, dispensaries, and medical programs worldwide. While Rick Simpson Oil (RSO) introduced the
                  world to high-dose, full-spectrum cannabis therapy in the early 2000s, FECO has largely replaced it in
                  professional settings because it uses food-grade or pharmaceutical-grade ethanol instead of harsher
                  solvents. The result is a cleaner, smoother, more consistent extract that retains the complete
                  spectrum of cannabinoids, terpenes, flavonoids, chlorophyll, and plant waxes — delivering the true
                  "entourage effect" many patients and researchers believe maximizes therapeutic potential.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  This 2025 handbook combines the most up-to-date clinical insights, patient-reported outcomes, lab
                  data, and real-world protocols into one continuous, in-depth resource. Whether you're exploring FECO
                  for chronic pain, cancer symptom management, epilepsy, autoimmune conditions, or simply want the most
                  complete understanding possible, this guide covers everything from A to Z.
                </p>
              </section>

              {/* What is FECO */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <FlaskConical className="h-8 w-8 text-emerald-600" />
                  What Exactly Is FECO in 2025?
                </h2>
                <p className="text-lg leading-relaxed">
                  FECO is defined as a whole-plant cannabis extract produced using ethanol as the primary solvent,
                  followed by low-temperature evaporation and purging. Modern licensed producers use closed-loop,
                  pharmaceutical-grade systems that operate at –40°C to preserve delicate terpenes and minor
                  cannabinoids that are often lost in hotter processes.
                </p>

                <Card className="bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-4">Typical Lab Results (2025 Averages):</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Total cannabinoids:</strong> 650–920 mg/g (65–92%)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>THC-dominant:</strong> 600–900 mg/g THC + 10–50 mg/g CBD
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>1:1 Balanced:</strong> 350–450 mg/g THC + 350–450 mg/g CBD
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>CBD-dominant:</strong> &lt;30 mg/g THC + 700–900 mg/g CBD
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Terpenes:</strong> 30–100 mg/g (3–10%) — 5–20× higher than distillate
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Appearance:</strong> Dark forest-green to near-black, syringeable syrup
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed">
                  Unlike distillate (which is 99% pure THC/CBD and flavorless) or isolates, FECO is intentionally
                  unrefined. It contains CBG, CBN, CBC, THCV, plant sterols, chlorophyll, and over 200 aromatic terpenes
                  — compounds that preclinical research suggests enhance anti-inflammatory, neuroprotective, and
                  anti-cancer properties through synergy.
                </p>
              </section>

              {/* FECO vs RSO */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  FECO vs RSO – The Definitive 2025 Comparison
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-emerald-100 dark:bg-emerald-900">
                        <th className="border p-4 text-left font-semibold">Aspect</th>
                        <th className="border p-4 text-left font-semibold">FECO (2025 Standard)</th>
                        <th className="border p-4 text-left font-semibold">Traditional RSO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-4 font-medium">Primary Solvent</td>
                        <td className="border p-4">Food-grade/pharma ethanol</td>
                        <td className="border p-4">Isopropyl, naphtha, or ethanol</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border p-4 font-medium">Residual Solvents</td>
                        <td className="border p-4 text-emerald-600 font-semibold">&lt;50 ppm (often undetectable)</td>
                        <td className="border p-4 text-orange-600">Can be 500–5,000 ppm if poorly purged</td>
                      </tr>
                      <tr>
                        <td className="border p-4 font-medium">Taste & Smell</td>
                        <td className="border p-4">Herbal, piney, slightly sweet</td>
                        <td className="border p-4">Harsh, chemical, burnt rubber</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border p-4 font-medium">Terpene Retention</td>
                        <td className="border p-4 text-emerald-600 font-semibold">Excellent (cold extraction)</td>
                        <td className="border p-4 text-orange-600">Often degraded by heat</td>
                      </tr>
                      <tr>
                        <td className="border p-4 font-medium">Medical Preference</td>
                        <td className="border p-4 text-emerald-600 font-semibold">
                          Strongly preferred by oncologists & clinicians
                        </td>
                        <td className="border p-4">Still used, but declining</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border p-4 font-medium">Price per gram (US)</td>
                        <td className="border p-4">$35–70 (medical discounts common)</td>
                        <td className="border p-4">$30–60</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <p className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">
                    💡 In 2025, most reputable clinics and licensed producers have completely phased out the term "RSO"
                    in favor of "FECO" or "Full-Spectrum Ethanol Extract."
                  </p>
                </div>
              </section>

              {/* Legal Status */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <Shield className="h-8 w-8 text-emerald-600" />
                  Global Legal Status – December 2025
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">🇺🇸 United States</h3>
                      <p>Available in all 38 medical + 24 adult-use states</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">🇨🇦 Canada</h3>
                      <p>Sold as "Full Spectrum Oil" through licensed producers</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">🇪🇺 Europe</h3>
                      <p>
                        Prescription-only in Germany, UK, Netherlands, Italy, Spain, Switzerland, Poland, Greece, Malta
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">🌏 Australia/NZ</h3>
                      <p>SAS-B and registered products (Tilray, Little Green Pharma)</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">🇮🇱 Israel</h3>
                      <p>Leading exporter of medical-grade FECO</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">🌍 Other Markets</h3>
                      <p>Thailand, Uruguay, South Africa: Over-the-counter in many pharmacies</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                          Important: Always Demand Third-Party Testing
                        </h3>
                        <p>Certificates of Analysis (COAs) showing:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Cannabinoid potency</li>
                          <li>Terpene profile</li>
                          <li>Residual solvents &lt;500 ppm (ideally &lt;50 ppm)</li>
                          <li>Negative for pesticides, heavy metals, mycotoxins, microbes</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Available Forms */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">All Available Forms of FECO in 2025</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Syringe className="h-12 w-12 text-emerald-600 mb-4" />
                      <h3 className="font-bold text-lg mb-2">1. Precision Syringes</h3>
                      <p className="text-muted-foreground">
                        1 g – 30 g. The classic form — oral, sublingual, topical, or for filling your own capsules.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Pill className="h-12 w-12 text-emerald-600 mb-4" />
                      <h3 className="font-bold text-lg mb-2">2. Pre-filled Capsules</h3>
                      <p className="text-muted-foreground">
                        10 mg, 25 mg, 50 mg, 100 mg total cannabinoids per capsule. Vegan and gelatin options.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Heart className="h-12 w-12 text-emerald-600 mb-4" />
                      <h3 className="font-bold text-lg mb-2">3. Suppositories</h3>
                      <p className="text-muted-foreground">
                        50–500 mg per suppository. Up to 90% bioavailability with minimal psychoactivity.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Candy className="h-12 w-12 text-emerald-600 mb-4" />
                      <h3 className="font-bold text-lg mb-2">4. FECO-Infused Edibles</h3>
                      <p className="text-muted-foreground">
                        Gummies, chocolates, honey sticks, olive oil bottles, beverages.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Droplets className="h-12 w-12 text-emerald-600 mb-4" />
                      <h3 className="font-bold text-lg mb-2">5. Sublingual Tinctures</h3>
                      <p className="text-muted-foreground">
                        FECO diluted in MCT, hemp seed, or olive oil (1:1, 4:1, 20:1 ratios).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <ThermometerSun className="h-12 w-12 text-emerald-600 mb-4" />
                      <h3 className="font-bold text-lg mb-2">6. Transdermal Patches & Topicals</h3>
                      <p className="text-muted-foreground">
                        Combined with penetration enhancers for localized or systemic delivery.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Manufacturing Process */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  Professional Manufacturing Process (2025 Closed-Loop Ethanol Extraction)
                </h2>

                <Card className="bg-muted">
                  <CardContent className="pt-6">
                    <ol className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                          1
                        </span>
                        <span>Fresh-frozen or cured flower → cryogenic milling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                          2
                        </span>
                        <span>–40°C ethanol wash (preserves terpenes)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                          3
                        </span>
                        <span>Winterization & multi-stage filtration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                          4
                        </span>
                        <span>Rotary evaporation + vacuum oven purging at &lt;40°C</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                          5
                        </span>
                        <span>Final short-path polishing (optional)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                          6
                        </span>
                        <span>Nitrogen-purged packaging</span>
                      </li>
                    </ol>
                    <p className="mt-6 text-muted-foreground italic">
                      This process yields an extract that is pharmaceutically clean while remaining truly whole-plant.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* How to Use FECO */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  How to Use FECO – Every Method Explained in Detail
                </h2>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Sublingual</h3>
                      <p>Place rice-grain dose under tongue → 15–45 min onset, 4–8 hr duration</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Oral/Capsules</h3>
                      <p>Swallow with fatty food → 60–120 min onset, 8–12+ hr duration</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Suppositories</h3>
                      <p>Insert at bedtime → 15–60 min onset, minimal high, 10–12 hr relief</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Topical</h3>
                      <p>Rub into painful joints or skin lesions → localized relief within 30 min</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Edibles</h3>
                      <p>Infuse into warm (not hot) butter or oil</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="font-semibold text-blue-800 dark:text-blue-200">
                        Pro tip: Always take with a small amount of dietary fat for maximum absorption.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Real-World Effects & Conditions */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  Real-World Effects & Conditions Patients Use FECO For in 2025
                </h2>

                <p className="text-lg leading-relaxed">
                  Clinicians and patient registries report excellent outcomes for:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Cancer-related nausea, pain, cachexia, insomnia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Neuropathic pain (diabetic, chemotherapy-induced, MS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Inflammatory bowel disease (Crohn&apos;s, ulcerative colitis)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Epilepsy & Dravet/LGS syndromes (especially 1:1 or CBD-dominant)</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Arthritis, fibromyalgia, migraines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>PTSD, severe anxiety, treatment-resistant depression</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Endometriosis & chronic pelvic pain (suppositories)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Palliative & hospice care</span>
                    </li>
                  </ul>
                </div>

                <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
                  <CardContent className="pt-6">
                    <p className="font-semibold text-yellow-800 dark:text-yellow-200">
                      Side effects remain the same as any high-potency cannabis product: dry mouth, red eyes,
                      drowsiness, temporary anxiety if overdosed.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Dosing Protocol */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <Clock className="h-8 w-8 text-emerald-600" />
                  Beginner Dosing & Titration – The 2025 Medical Protocol
                </h2>

                <div className="space-y-4">
                  <Card className="border-l-4 border-l-emerald-600">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Week 1–2</h3>
                      <p>5–10 mg total cannabinoids at bedtime only (≈ half a rice grain)</p>
                      <p className="text-muted-foreground text-sm mt-1">Hold 3–4 days before increasing</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-emerald-600">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Week 3–4</h3>
                      <p>15–30 mg at night + optional 5–10 mg morning</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-emerald-600">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Week 5–8</h3>
                      <p>25–50 mg twice daily OR 100–200 mg suppository once daily</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-emerald-600">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Week 9–12 (therapeutic range for most)</h3>
                      <p>50–300 mg total cannabinoids per day, split or via suppository</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Some oncology patients under supervision reach 500–1,000 mg/day
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="font-semibold text-blue-800 dark:text-blue-200">
                        Keep a daily journal: dose | time | relief (0–10) | side effects | sleep quality
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* 90-Day Protocol */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  Full 90-Day FECO Protocol – Modern Clinical Version
                </h2>

                <div className="space-y-4">
                  <Card className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-xl mb-2">Phase 1 (Days 1–14) – Tolerance Building</h3>
                      <p className="mb-2">5–15 mg nightly only</p>
                      <p className="text-muted-foreground">
                        <strong>Goal:</strong> Zero daytime impairment
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-xl mb-2">Phase 2 (Days 15–35) – Early Therapeutic</h3>
                      <p className="mb-2">25–75 mg split morning + night (or single suppository)</p>
                      <p className="text-muted-foreground">
                        <strong>Goal:</strong> Steady blood levels
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-xl mb-2">Phase 3 (Days 36–70) – Optimization</h3>
                      <p className="mb-2">50–200 mg total daily, adjusted to condition</p>
                      <p className="text-muted-foreground">
                        <strong>Goal:</strong> Maximum symptom control with minimal side effects
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-xl mb-2">Phase 4 (Days 71–90) – Maintenance</h3>
                      <p className="mb-2">Lowest effective dose (often 100–300 mg/day)</p>
                      <p className="text-muted-foreground">
                        <strong>Goal:</strong> Schedule 1-week tolerance break every 3 months
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Drug Interactions */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">Drug Interactions & Contraindications</h2>

                <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">Strong interactions with:</h3>
                        <ul className="space-y-1">
                          <li>• Clobazam, valproate → increased levels</li>
                          <li>• Warfarin, heparin → increased bleeding risk</li>
                          <li>• Opioids, benzodiazepines, alcohol → additive sedation</li>
                          <li>• CYP3A4 inhibitors/inducers (many chemotherapy drugs)</li>
                        </ul>
                        <p className="mt-4 font-semibold">Always inform your oncologist, neurologist, or pharmacist.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Storage */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">Storage & Shelf Life</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">Proper Storage:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Store syringes upright in the refrigerator (not freezer)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Warm in hand or warm water before use</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Shelf life: 2–3 years refrigerated, 1 year at room temp</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">Signs of Degradation:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span>Separation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span>Rancid smell</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span>Mold</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Where to Buy */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">Where to Buy Lab-Tested FECO in 2025</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">🇺🇸 Top U.S. Brands:</h3>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Papa & Barkley</li>
                        <li>• Care By Design</li>
                        <li>• Mary&apos;s Medicinals</li>
                        <li>• Wana Optimals</li>
                        <li>• AbsoluteXtracts</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">🇨🇦 Canada:</h3>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Tilray Full Spectrum</li>
                        <li>• Aurora Drift</li>
                        <li>• Broken Coast</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">🌍 Europe/Australia:</h3>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Bedrocan</li>
                        <li>• Tilray EU</li>
                        <li>• Little Green Pharma</li>
                        <li>• Beacon Medical</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800">
                  <CardContent className="pt-6">
                    <p className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">
                      💰 Average price: $35–70 USD per gram (bulk medical discounts often drop it to $20–30/g)
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Quick FAQ */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">Quick FAQ – FECO in 2025</h2>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Can I vape FECO?</h3>
                      <p className="text-red-600 dark:text-red-400 font-semibold">
                        → Never — contains lipids that can cause lipid pneumonia.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Will FECO get me high?</h3>
                      <p>→ THC versions: yes. CBD-dominant or suppositories: minimal/no.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Is FECO the same as RSO?</h3>
                      <p>→ No — cleaner, safer, smoother, medically preferred.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Can I travel with FECO?</h3>
                      <p>→ Only domestically in legal jurisdictions, in original packaging with COA.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">How long do effects last?</h3>
                      <p>→ 6–12+ hours depending on method.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">Best form for cancer patients?</h3>
                      <p>→ Suppositories or 1:1 capsules</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Final Thoughts */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  Final Thoughts – Why FECO Is the Future
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed">
                    In 2025, Full Extract Cannabis Oil has definitively surpassed traditional RSO as the preferred
                    whole-plant medicine for both patients and healthcare providers. Its cleaner production, superior
                    terpene retention, smoother taste, and wider range of administration methods (especially
                    suppositories and capsules) make it dramatically more versatile and patient-friendly.
                  </p>

                  <p className="text-lg leading-relaxed">
                    When used with the structured 90-day protocol above — starting low, titrating slowly, and tracking
                    everything — FECO offers one of the most powerful, natural tools available for managing serious
                    health conditions while preserving quality of life.
                  </p>
                </div>

                <Card className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                  <CardContent className="pt-8 pb-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Experience FECO?</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Browse our lab-tested, medical-grade Full Extract Cannabis Oil products
                    </p>
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="bg-white text-emerald-700 hover:bg-gray-100"
                    >
                      <Link href="/products/feco">
                        Shop FECO Products <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </section>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
