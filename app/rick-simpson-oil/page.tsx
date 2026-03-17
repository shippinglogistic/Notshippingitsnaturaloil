import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, FlaskConical, ArrowRight, AlertCircle, BookOpen, Info } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Rick Simpson Oil: Complete 2025 Guide to RSO Dosing & Uses",
  description:
    "Complete guide to Rick Simpson Oil: history, composition, 90-day dosage protocol, forms, storage, safety, drug interactions, and where to buy lab-tested RSO.",
  keywords: [
    "rick simpson oil",
    "RSO guide",
    "RSO dosage",
    "RSO protocol",
    "RSO for cancer",
    "how to use RSO",
    "RSO vs FECO",
    "buy RSO online",
    "RSO side effects",
    "Rick Simpson story",
    "full spectrum cannabis oil",
    "entourage effect",
    "RSO benefits",
    "RSO treatment",
    "90 day RSO protocol",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/rick-simpson-oil",
  },
  openGraph: {
    title: "Rick Simpson Oil: Complete 2025 Guide to RSO Dosing & Uses",
    description: "Complete guide covering history, composition, dosing, protocol, and safety.",
    url: "https://naturalcannabisoil.shop/rick-simpson-oil",
    type: "article",
    images: ["/dark-amber-cannabis-oil-dropper-bottle.jpg"],
  },
}

export default function RickSimpsonOilComprehensiveGuidePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Ultimate Complete Guide to Rick Simpson Oil (RSO): Everything You Need to Know in 2025",
    description:
      "Comprehensive 4000+ word guide to RSO covering history, composition, uses, dosing, 90-day protocol, and safety.",
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
          {/* Hero Section */}
          <article className="prose prose-lg max-w-none">
            <section className="relative py-16 md:py-24 bg-gradient-to-b from-amber-900/10 to-background">
              <div className="container mx-auto px-4 max-w-4xl">
                <Badge className="mb-4 bg-amber-600/10 text-amber-600 border-amber-600/20">Updated December 2025</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                  The Ultimate Complete Guide to Rick Simpson Oil (RSO): Everything You Need to Know in 2025
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Rick Simpson Oil (RSO) is a highly concentrated, full-spectrum cannabis extract that has captured
                  widespread attention for its potency and potential therapeutic applications. This comprehensive guide
                  covers everything from its origins to the complete 90-day treatment protocol, dosing, storage,
                  pricing, and FAQs.
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                    <Link href="/products/rso">
                      Shop RSO Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#dosing">Skip to Dosing</Link>
                  </Button>
                </div>

                <Image
                  src="/dark-amber-cannabis-oil-dropper-bottle.jpg"
                  alt="Rick Simpson Oil - Comprehensive guide to RSO in 2025"
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
                  <strong>Rick Simpson Oil (RSO)</strong> is a highly concentrated, full-spectrum cannabis extract that
                  has captured widespread attention for its potency and potential therapeutic applications. Named after
                  its creator, Canadian activist Rick Simpson, RSO is often described as a thick, tar-like substance
                  rich in cannabinoids, primarily THC, along with CBD, terpenes, flavonoids, and other plant compounds.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Unlike milder cannabis products such as tinctures or standard edibles, RSO delivers a powerful,
                  full-extract experience that retains the plant's natural profile for what many describe as an
                  "entourage effect," where compounds work synergistically to enhance benefits. What makes this extract
                  special is the way it is produced—it allows the bulk of the cannabis plant's cannabinoids and terpenes
                  to be preserved. Studies have shown that the more parts of the plant being used together, the better
                  medicinal relief is experienced by patients.
                </p>

                <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800 mt-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Important Disclaimer</h3>
                        <p>
                          While anecdotal reports and emerging research highlight potential benefits, RSO is not
                          FDA-approved, and scientific evidence for many claims remains limited. Always consult a
                          healthcare professional, especially if you have health issues or take medications, as THC can
                          cause interactions. Any claim on this page has not been reviewed by the FDA. Product is not
                          intended to diagnose, cure, or prevent any disease or illness.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* History */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-amber-600" />
                  History and Background of Rick Simpson Oil
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="text-3xl font-bold text-accent mb-2">1997</div>
                    <p className="font-semibold mb-2">Work Injury</p>
                    <p className="text-sm text-muted-foreground">
                      Simpson suffers a workplace accident in an asbestos-filled hospital boiler room leading to chronic
                      headaches, tinnitus, and uncontrolled pain
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="text-3xl font-bold text-accent mb-2">2003</div>
                    <p className="font-semibold mb-2">Cancer Discovery</p>
                    <p className="text-sm text-muted-foreground">
                      Diagnosed with basal cell carcinoma; develops RSO extraction method after finding cannabis study
                      from Journal of National Cancer Institute
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="text-3xl font-bold text-accent mb-2">2009</div>
                    <p className="font-semibold mb-2">Goes Global</p>
                    <p className="text-sm text-muted-foreground">
                      Flees legal challenges in Canada to Europe; continues advocating for RSO worldwide through
                      phoenixtears.ca
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p>
                    The story of RSO begins with <strong>Rick Simpson</strong>, a former engineer from Nova Scotia,
                    Canada who suffered a work-related injury. Simpson was working in a poorly ventilated
                    asbestos-filled hospital boiler room where he collapsed and was rendered unconscious. He received
                    immediate care; however, his long-term symptoms from his injury were not dissipating. After years of
                    dizziness, tinnitus, and uncontrolled pain, Simpson began researching alternative treatment, and
                    that is how he found cannabis.
                  </p>
                  <p>
                    He had such stunning results with cannabis that he eventually began growing his own cannabis and was
                    able to successfully manage his symptoms with a plant he could grow in his own backyard. His initial
                    success motivated him to dig deeper into cannabis research for other applications.
                  </p>
                  <p>
                    In 2003, Simpson was diagnosed with <strong>basal cell carcinoma</strong>, a form of skin cancer. He
                    began researching intensively and ran across a study from{" "}
                    <em>The Journal of the National Cancer Institute</em> in which Tetrahydrocannabinol or THC (the main
                    psychoactive cannabinoid in marijuana) was found to kill cancer cells in mice. This motivated
                    Simpson to formulate a method to extract his plants, leaving him with what we all know now as RSO.
                  </p>
                  <p>
                    His extraction efforts proved successful. The skin cancer growing on his arm was gone in less than a
                    week. His victory inspired him to share his findings with the world. Simpson chose not to patent his
                    methods so everyone is easily able to access the benefits of this incredible plant. He documented
                    his formula through his website (phoenixtears.ca) and his book,{" "}
                    <em>Phoenix Tears: The Rick Simpson Story</em>.
                  </p>
                  <p>
                    Facing legal challenges in Canada for distributing cannabis oil, Simpson fled to Europe in 2009,
                    where he continues advocating for RSO's use in treating serious illnesses like cancer, chronic pain,
                    and more. While his personal anecdotes have inspired thousands—leading to widespread home production
                    and use—medical experts caution that these claims lack robust clinical trials.
                  </p>
                </div>
              </section>

              {/* What is RSO */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <FlaskConical className="h-8 w-8 text-amber-600" />
                  What Is RSO? Composition and Key Differences
                </h2>
                <p className="text-lg leading-relaxed">
                  At its core, RSO is a <strong>full-spectrum extract</strong> made from indica-dominant cannabis
                  strains, chosen for their sedative properties. It's dark, viscous, and sticky, with THC levels often
                  ranging from 50-90%, alongside varying amounts of CBD (typically lower) and other minor cannabinoids
                  like CBG or CBN.
                </p>

                <Card className="bg-card">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-4">What Sets RSO Apart from Other Cannabis Products?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">RSO vs. CBD Oil</h4>
                        <p className="text-muted-foreground">
                          CBD oils are non-intoxicating, with &lt;0.3% THC, focusing on wellness like anxiety relief and
                          relaxation. RSO is psychoactive and THC-dominant (50-90% THC), aimed at more intense
                          therapeutic needs. RSO is significantly more potent and requires careful dosing.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">RSO vs. Distillate</h4>
                        <p className="text-muted-foreground">
                          Distillates are ultra-refined for nearly pure THC (up to 99%), stripping away terpenes and
                          other plant compounds. RSO is unrefined, preserving the plant's full entourage of
                          cannabinoids, terpenes, and flavonoids for broader therapeutic effects and the entourage
                          effect.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">RSO vs. FECO (Full Extract Cannabis Oil)</h4>
                        <p className="text-muted-foreground">
                          FECO is similar to RSO but often made with food-grade ethanol instead of harsher solvents like
                          naphtha. FECO may retain more terpenes and natural flavors, and is sometimes considered a
                          "cleaner" alternative. Both are full-spectrum extracts with similar cannabinoid profiles, but
                          FECO is increasingly recommended by medical professionals in 2025 for its superior production
                          methods.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Forms of RSO */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  Forms of RSO: Syringe, Capsules, Edibles, Suppositories, and Tinctures
                </h2>
                <p className="text-lg leading-relaxed">
                  RSO comes in various forms for convenience, accessibility, and targeted therapeutic use. Different
                  formats suit different needs and preferences, allowing you to find what works best for your situation.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-muted">
                      <Image
                        src="/images/phoenix-rso-tincture-guide.jpeg"
                        alt="Dark amber RSO tincture bottle with dropper on textured background"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Syringe & Tincture</h3>
                    <p className="text-muted-foreground mb-4">
                      The most common form, available in syringes with precise measurement markings (typically in ml).
                      Ideal for oral or topical use; syringes are airtight for optimal storage. RSO can also be diluted
                      in alcohol or carrier oil to create tinctures with a sublingual dropper form for easier dosing and
                      faster absorption.
                    </p>
                  </div>

                  <div>
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-muted">
                      <Image
                        src="/images/cannabis-tincture-phoenix.jpeg"
                        alt="Person using RSO tincture with dropper, demonstrating sublingual administration"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Oral Administration & Sublingual</h3>
                    <p className="text-muted-foreground mb-4">
                      RSO can be taken sublingually (under the tongue for 60-90 seconds) for faster onset of 15-30
                      minutes and 4-6 hour duration, or swallowed directly for longer-lasting effects over 4-8+ hours.
                      Many users take RSO with fatty foods like peanut butter or coconut oil to enhance absorption.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Capsules</h3>
                    <p className="text-muted-foreground mb-4">
                      RSO filled into gel capsules for discreet, tasteless ingestion. Great for consistent dosing
                      without the bitter taste. Capsules have similar onset and duration as oral ingestion (1-2 hours,
                      lasting 6-8+ hours). Ideal for those who want precise dosing and privacy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Edibles & Food Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Mix RSO into foods like butter, chocolate, gummies, or baked goods. Heat gently to avoid degrading
                      THC. Edible effects are long-lasting (6-8+ hours) but have delayed onset (1-2 hours). This method
                      is excellent for sustained relief throughout the day.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Suppositories</h3>
                    <p className="text-muted-foreground mb-4">
                      RSO infused into glycerin suppositories for rectal or vaginal use. Provides localized
                      administration with direct contact near target areas. Commonly used in medical protocols,
                      especially for prostate cancer. Systemic effects are felt with suppository use, and the close
                      proximity allows for more direct absorption. Onset: 15-45 minutes; Duration: 4-6 hours.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Topical Application</h3>
                    <p className="text-muted-foreground mb-4">
                      Apply RSO directly to skin for localized effects with no psychoactive high. Works well for pain,
                      inflammation, skin conditions, wounds, and abscesses. RSO is rich in antibacterial, antimicrobial,
                      and antifungal properties. Apply and cover with a bandage for optimal results. Onset: 30-60
                      minutes.
                    </p>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-primary mb-3">Making Your Own RSO Tincture (DIY)</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    RSO in tincture form is often easier to dose and consume. The process is simple and requires just a
                    few items: a glass measuring cup, MCT or olive oil, and a one-ounce amber bottle with a dropper.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground mb-4">
                    <li>Pour your chosen carrier oil in a measuring cup and warm in the microwave for 30-60 seconds</li>
                    <li>Place your RSO syringe in a cup of hot water to make it easier to dispense</li>
                    <li>Once oil is warm and viscous, pour it into your amber bottle, filling halfway</li>
                    <li>Squeeze the entirety of the RSO syringe into the bottle and allow to sit for one minute</li>
                    <li>Fill the rest of your bottle with oil, leaving room for the dropper top</li>
                    <li>
                      Allow to sit for 15-30 seconds, then cap with the dropper and shake vigorously for 45 seconds
                    </li>
                    <li>Hold up to light to ensure the RSO is completely diluted</li>
                  </ol>
                  <p className="text-sm text-muted-foreground">
                    <strong>Result:</strong> One full dropper will amount to 20-25mg THC. This is a heavy dose,
                    especially for beginners. For new patients, half a dropper is recommended.
                  </p>
                </div>
              </section>

              {/* Legal Status */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <Shield className="h-8 w-8 text-amber-600" />
                  Legal Status of RSO in 2025
                </h2>
                <p className="text-lg leading-relaxed">
                  Federally in the U.S., RSO remains illegal under Schedule I due to high THC, but state laws vary
                  significantly. As of December 2025, recreational cannabis is legal in 24 states (e.g., California,
                  Colorado, New York), and medical use in 38, allowing RSO purchases at dispensaries with a card or for
                  adult use.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">United States</h3>
                      <p className="text-muted-foreground">
                        Legal in 24 recreational states and 38 medical states. Always verify local regulations before
                        purchasing.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">Canada</h3>
                      <p className="text-muted-foreground">
                        RSO permitted with prescriptions through licensed producers. More accessible than U.S. in many
                        cases.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">Europe</h3>
                      <p className="text-muted-foreground">
                        Growing acceptance in Germany, Netherlands, Switzerland, Spain, and other countries for medical
                        use. Laws continue to evolve.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-3">Other Regions</h3>
                      <p className="text-muted-foreground">
                        Israel, Australia, and parts of South America have varying levels of access. Always research
                        local laws before travel.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-2">Safe Purchasing Guidelines</p>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Always opt for lab-tested products with Certificate of Analysis (COA)</li>
                          <li>• Use licensed dispensaries only; avoid street purchases</li>
                          <li>• Check for pesticides, heavy metals, and mold testing on all products</li>
                          <li>• Possession or production in non-legal areas can result in serious penalties</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Safety Notes */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                  Safety Notes Before You Begin
                </h2>
                <p className="text-lg leading-relaxed">Safety is non-negotiable with RSO's strength:</p>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-2">Potency and Variability</h3>
                      <p className="text-muted-foreground">
                        Effects depend on strain, your tolerance, metabolism, and method—start low to avoid overwhelm.
                        Always begin with minimal doses.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-2">Medical Guidance</h3>
                      <p className="text-muted-foreground">
                        Consult a clinician, especially if pregnant, on medications (e.g., blood thinners,
                        antidepressants), or with conditions like heart disease or psychiatric issues. THC can amplify
                        sedatives or interact with chemo drugs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-2">Quality and Legality</h3>
                      <p className="text-muted-foreground">
                        Use lab-tested sources; avoid DIY extraction if inexperienced. No driving or operating machinery
                        while impaired.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-2">General Warnings</h3>
                      <p className="text-muted-foreground">
                        Not for pets (toxic); keep away from children. If overconsumed, symptoms like anxiety pass but
                        seek help if severe. Never vape or smoke RSO.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* How to Use RSO */}
              <section className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  How to Use RSO: Methods & Administration
                </h2>
                <p className="text-lg leading-relaxed">
                  RSO is versatile and can be used in multiple ways depending on your therapeutic goals, condition, and
                  personal preference. The method you choose affects both the onset time and duration of effects.
                </p>

                <div className="grid gap-6 mb-8">
                  {[
                    {
                      title: "Oral Ingestion / Swallowing",
                      onset: "1-2 hours",
                      duration: "4-8+ hours",
                      description:
                        "Swallow RSO directly or mix into edibles and capsules. Pair with fatty foods for better absorption and to reduce stomach discomfort.",
                    },
                    {
                      title: "Sublingual (Under Tongue)",
                      onset: "15-30 minutes",
                      duration: "4-6 hours",
                      description:
                        "Hold RSO or tincture under your tongue for 60-90 seconds to allow absorption through the sublingual varices. Good for quick relief without waiting.",
                    },
                    {
                      title: "Topical Application",
                      onset: "30-60 minutes",
                      duration: "4-6 hours (localized)",
                      description:
                        "Apply directly to skin for localized effects with no psychoactive high. Excellent for pain, inflammation, wounds, and skin conditions.",
                    },
                    {
                      title: "Suppositories",
                      onset: "15-45 minutes",
                      duration: "4-6 hours",
                      description:
                        "Insert for systemic effects with direct absorption near the target area. Non-smoking method for serious medical applications.",
                    },
                  ].map((method) => (
                    <div key={method.title} className="bg-card border border-border rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-primary mb-3">{method.title}</h3>
                      <div className="grid sm:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-1">ONSET</p>
                          <p className="font-semibold">{method.onset}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-1">DURATION</p>
                          <p className="font-semibold">{method.duration}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{method.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-3">Practical Administration Tips</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <strong>Use syringes for accuracy:</strong> Measure carefully with marked syringes; a rice grain
                      is about 0.05-0.1ml
                    </li>
                    <li>
                      <strong>Start at night:</strong> Initial doses should be taken in the evening to assess tolerance
                      safely
                    </li>
                    <li>
                      <strong>Pair with fatty foods:</strong> Cannabinoids are fat-soluble; pair with peanut butter,
                      coconut oil, or avocado for better absorption
                    </li>
                    <li>
                      <strong>Stay hydrated:</strong> Drink water before and after dosing; dehydration can cause
                      headaches and dry mouth
                    </li>
                    <li>
                      <strong>Never vape or smoke:</strong> RSO is too thick for vaporization and contains solvents
                      unsafe for inhalation
                    </li>
                    <li>
                      <strong>Avoid empty stomach:</strong> Taking RSO with food reduces stomach upset and improves
                      absorption
                    </li>
                    <li>
                      <strong>No machinery operation:</strong> Do not drive or operate heavy equipment while figuring
                      out dosing and effects
                    </li>
                  </ul>
                </div>
              </section>

              {/* Dosing Section */}
              <section id="dosing" className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Beginner Dosing Strategy and Building Tolerance
                </h2>

                <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
                  <p>
                    <strong>Start low, go slow.</strong> This is the golden rule for RSO. Because RSO is a highly
                    concentrated form of cannabis, a little bit goes a long way. Too much too fast can result in
                    overwhelming psychoactive effects that are uncomfortable. Starting small allows your body to adjust
                    gradually.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-8 mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-6">Beginner Dosing Schedule</h3>

                  <div className="space-y-4">
                    {[
                      {
                        phase: "Day 1-3",
                        dosage: "Half rice grain (2-5mg THC)",
                        goal: "Initial tolerance test with minimal psychoactive effects",
                      },
                      {
                        phase: "Day 4-7",
                        dosage: "Full rice grain (5-10mg THC)",
                        goal: "Assess comfort level before increasing further",
                      },
                      {
                        phase: "Week 2+",
                        dosage: "Gradually increase based on tolerance",
                        goal: "Most people settle at 100-300mg per day after several weeks of gradual increases",
                      },
                    ].map((step) => (
                      <div key={step.phase} className="border-l-4 border-accent pl-4">
                        <p className="font-semibold text-primary">{step.phase}</p>
                        <p className="text-accent font-semibold mb-1">{step.dosage}</p>
                        <p className="text-sm text-muted-foreground">{step.goal}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-foreground mb-4">Factors Affecting Your Dosage</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Body weight and metabolism:</strong> Heavier individuals may
                      need slightly more
                    </li>
                    <li>
                      <strong className="text-foreground">Previous cannabis tolerance:</strong> Experienced users may
                      progress faster
                    </li>
                    <li>
                      <strong className="text-foreground">Severity of condition:</strong> More serious conditions may
                      require higher maintenance doses
                    </li>
                    <li>
                      <strong className="text-foreground">Method of consumption:</strong> Oral vs sublingual vs
                      suppository have different absorption rates
                    </li>
                    <li>
                      <strong className="text-foreground">Food intake:</strong> Taking RSO with fats improves absorption
                      and consistency
                    </li>
                    <li>
                      <strong className="text-foreground">Individual response:</strong> Every person's endocannabinoid
                      system is unique
                    </li>
                  </ul>
                </div>

                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                  <h3 className="font-semibold text-destructive mb-2">Managing Side Effects</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    If effects become too strong, they can be offset with a heavy dose of CBD. We suggest a 1000mg CBD
                    tincture, with a full dropper (20-25mg CBD) being a good place to start.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Common side effects include strong psychoactive effects, drowsiness, dry mouth, dizziness, and
                    increased appetite. These are manageable and typically diminish over 2-4 weeks.
                  </p>
                </div>
              </section>

              {/* 90-Day Protocol Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Full 90-Day RSO Treatment Protocol</h2>

                <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
                  <p>
                    The 90-day protocol, inspired by Rick Simpson's original regimen for serious conditions, provides a
                    structured approach using 60 grams of RSO over 90 days. This protocol is designed for patients with
                    serious medical diagnoses who are working with healthcare professionals. <strong>Important:</strong>{" "}
                    This protocol is not medically proven and should always be combined with conventional medical care.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      phase: "Phase 1: Days 1-14",
                      dosage: "Half rice grain nightly",
                      goal: "Tolerance Building",
                      description:
                        "Begin with minimal dosing to assess your body's reaction. This tolerance test helps establish baseline response with minimal psychoactive effects. Most users feel minimal effects at this stage.",
                    },
                    {
                      phase: "Phase 2: Days 15-30",
                      dosage: "Full grain nightly; optional half grain morning",
                      goal: "Gradual Increase",
                      description:
                        "Slowly increase dosage while monitoring effects. You may begin to feel more pronounced therapeutic benefits. Keep a journal to track effects and any symptoms.",
                    },
                    {
                      phase: "Phase 3: Days 31-60",
                      dosage: "Half grain morning, full grain evening",
                      goal: "Therapeutic Dose",
                      description:
                        "Maintain consistent blood levels with split doses. Monitor consistency and adjust if side effects become uncomfortable. Most therapeutic benefits should be noticeable by end of phase 3.",
                    },
                    {
                      phase: "Phase 4: Days 61-90",
                      dosage: "1-2 grains daily, split doses",
                      goal: "Maintenance & Reassessment",
                      description:
                        "Maintain therapeutic dose while working with your healthcare provider. Determine if protocol should continue, adjust, or stop based on your condition's progress.",
                    },
                  ].map((phase) => (
                    <div key={phase.phase} className="bg-card border border-border rounded-lg p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-semibold text-primary mb-1">{phase.phase}</h3>
                          <p className="text-sm font-semibold text-accent">Dosage: {phase.dosage}</p>
                        </div>
                        <div className="bg-primary/10 px-3 py-1 rounded text-sm font-semibold text-primary whitespace-nowrap">
                          {phase.goal}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{phase.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-4">Important Protocol Notes</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Adjust for side effects:</strong> If experiencing discomfort,
                      maintain current dose longer before increasing
                    </li>
                    <li>
                      <strong className="text-foreground">Journal everything:</strong> Track dosage, time, effects, side
                      effects, and symptoms daily
                    </li>
                    <li>
                      <strong className="text-foreground">Not medically proven:</strong> Combine RSO with conventional
                      medical care; do not replace proven treatments
                    </li>
                    <li>
                      <strong className="text-foreground">Healthcare consultation required:</strong> Always work with a
                      physician before starting
                    </li>
                    <li>
                      <strong className="text-foreground">Individual variation:</strong> Some patients never reach full
                      1g/day and find relief at lower amounts
                    </li>
                    <li>
                      <strong className="text-foreground">Bulk pricing available:</strong> The 60g for 90 days protocol
                      qualifies for significant bulk discounts
                    </li>
                  </ul>
                </div>
              </section>

              {/* Overdose & Safety Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">What If You Take Too Much RSO?</h2>

                <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
                  <p>
                    If you overconsume RSO, it's important to stay calm—a THC overdose is not fatal. Symptoms may
                    include intense anxiety, paranoia, rapid heartbeat, nausea, or extreme drowsiness.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-primary mb-4">Steps to Take if You've Consumed Too Much</h3>
                  <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                    <li>Find a safe, comfortable place to rest immediately</li>
                    <li>Drink plenty of water to stay hydrated</li>
                    <li>Eat light snacks, preferably with some carbohydrates</li>
                    <li>Try CBD if available—it can counteract THC effects (start with 20-25mg)</li>
                    <li>Rest; symptoms typically resolve within 4-8 hours</li>
                    <li>Seek medical help if symptoms are severe or persistent</li>
                  </ol>
                </div>

                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                  <h3 className="font-semibold text-destructive mb-3">Most Common Side Effects</h3>
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                    {[
                      "Strong psychoactive high",
                      "Paranoia or anxiety",
                      "Drowsiness and fatigue",
                      "Dizziness or lightheadedness",
                      "Dry mouth and increased thirst",
                      "Increased appetite ('munchies')",
                      "Rapid heartbeat",
                      "Short-term memory effects",
                    ].map((effect) => (
                      <div key={effect} className="flex items-start gap-2">
                        <span className="text-destructive font-bold mt-0.5">•</span>
                        <span>{effect}</span>
                      </div>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Effects and Benefits Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Effects, Benefits & Conditions RSO May Help
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">Positive Effects Reported</h3>
                    <ul className="space-y-2">
                      {[
                        "Deep relaxation and stress relief",
                        "Pain relief and anti-inflammation",
                        "Appetite boost and nausea reduction",
                        "Improved sleep quality",
                        "Muscle relaxation",
                        "Mood elevation",
                        "Neurological protection (theoretically)",
                      ].map((effect) => (
                        <li key={effect} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-accent font-bold mt-0.5">✓</span>
                          <span>{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-destructive mb-4">Potential Side Effects</h3>
                    <ul className="space-y-2">
                      {[
                        "Psychoactive high (strong)",
                        "Paranoia or anxiety at high doses",
                        "Dizziness and disorientation",
                        "Dry mouth and red eyes",
                        "Increased heart rate",
                        "Drowsiness and fatigue",
                        "Short-term memory effects",
                      ].map((effect) => (
                        <li key={effect} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-destructive font-bold mt-0.5">✗</span>
                          <span>{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-lg font-semibold text-primary mb-6">
                    Conditions People Use RSO For (Anecdotally)
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Cancer symptoms & chemo nausea",
                      "Chronic pain",
                      "Epilepsy",
                      "Multiple sclerosis",
                      "Arthritis & joint pain",
                      "Asthma",
                      "Depression & mood disorders",
                      "High blood pressure",
                      "Insomnia & sleep disorders",
                      "Addiction recovery",
                      "Crohn's disease & IBS",
                      "Fibromyalgia",
                      "Parkinson's disease",
                      "PTSD",
                      "Migraine headaches",
                    ].map((condition) => (
                      <div key={condition} className="bg-primary/10 rounded px-3 py-2 text-sm font-medium text-primary">
                        {condition}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Important:</strong> Lab studies suggest anti-tumor properties, but human evidence is
                      inconclusive — RSO is not a proven cure. As of 2025, it's valued primarily for palliative care and
                      symptom management alongside conventional treatments. Always consult with your healthcare provider
                      about any condition you're treating.
                    </p>
                  </div>
                </div>
              </section>

              {/* Quality and Storage Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Storage, Quality, and Safety Standards
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">Proper Storage Guidelines</h3>
                    <ul className="space-y-3">
                      {[
                        { title: "Container", detail: "Store in airtight syringes or capsules" },
                        { title: "Environment", detail: "Keep in cool, dark places away from light" },
                        { title: "Temperature", detail: "Refrigerator okay; warm before use for easier dispensing" },
                        { title: "Labeling", detail: "Mark with potency percentage and purchase date" },
                        { title: "Shelf Life", detail: "Lasts 1-2 years when stored properly" },
                      ].map((item) => (
                        <div key={item.title} className="border-l-4 border-accent pl-4">
                          <p className="font-semibold text-primary text-sm">{item.title}</p>
                          <p className="text-muted-foreground text-sm">{item.detail}</p>
                        </div>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">Quality Indicators & Red Flags</h3>
                    <div className="mb-4">
                      <p className="font-semibold text-accent text-sm mb-2">Good Quality Signs</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {[
                          "Dark brown to black color (natural)",
                          "Lab testing with Certificate of Analysis",
                          "Thick, tar-like consistency",
                          "Fresh cannabis smell",
                          "Clear labeling with potency",
                        ].map((sign) => (
                          <li key={sign} className="flex items-start gap-2">
                            <span className="text-accent font-bold">✓</span>
                            <span>{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-destructive text-sm mb-2">Bad Quality Signs</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {[
                          "Visible mold or discoloration",
                          "Off-smells or chemical odors",
                          "Unusual separation or crystallization",
                          "No lab testing available",
                          "From unlicensed sources",
                        ].map((sign) => (
                          <li key={sign} className="flex items-start gap-2">
                            <span className="text-destructive font-bold">✗</span>
                            <span>{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                  <h3 className="font-semibold text-destructive mb-3">Products to Avoid</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Untested products:</strong> Never buy RSO without Certificate
                      of Analysis showing cannabinoid and contaminant testing
                    </li>
                    <li>
                      <strong className="text-foreground">From unlicensed sources:</strong> Avoid street products;
                      quality and safety are unverified
                    </li>
                    <li>
                      <strong className="text-foreground">Moldy or separated:</strong> Discard immediately if mold,
                      off-smells, or unusual liquid separation appears
                    </li>
                    <li>
                      <strong className="text-foreground">Expired or old:</strong> Check dates; RSO degrades over time,
                      particularly if exposed to light
                    </li>
                  </ul>
                </div>
              </section>

              {/* Pricing Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">RSO Pricing and Where to Buy</h2>

                <div className="bg-card border border-border rounded-lg p-8 mb-8">
                  <h3 className="font-semibold text-primary mb-4">Typical RSO Pricing (2025)</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border-r border-border pr-6">
                      <p className="font-semibold text-primary mb-2">Per Gram</p>
                      <p className="text-2xl font-bold text-accent">$30-60</p>
                      <p className="text-xs text-muted-foreground mt-2">Medical or recreational dispensaries</p>
                    </div>
                    <div className="border-r border-border pr-6">
                      <p className="font-semibold text-primary mb-2">60g (90-Day Protocol)</p>
                      <p className="text-2xl font-bold text-accent">$1,200-2,400</p>
                      <p className="text-xs text-muted-foreground mt-2">20-40% bulk discount typical</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">1g Syringe (Most Common)</p>
                      <p className="text-2xl font-bold text-accent">$40-80</p>
                      <p className="text-xs text-muted-foreground mt-2">Standard retail format</p>
                    </div>
                  </div>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Where to Purchase RSO</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Licensed dispensaries:</strong> Only legal source; verify lab testing (COA) before
                          purchase
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Online delivery:</strong> Many states allow licensed dispensaries to deliver; always
                          verify legality in your area
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>AVOID:</strong> Street purchases, untested products, and unlicensed sources
                        </span>
                      </li>
                    </ul>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link href="/products/rso">
                        Shop Lab-Tested RSO Products <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </section>

              {/* FAQ Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Frequently Asked Questions About RSO
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      question: "What is the recommended starting dose for RSO beginners?",
                      answer:
                        "Start with about half the size of a rice grain (2-5mg THC) once daily at night. This helps assess tolerance without overwhelming effects. After 3-4 days, if comfortable, increase to a full rice grain. Always start low and go slow, increasing gradually over weeks.",
                    },
                    {
                      question: "Can I take RSO on an empty stomach?",
                      answer:
                        "While you technically can, it's better to take RSO with food—especially fatty foods like peanut butter, coconut oil, or avocado. Cannabinoids are fat-soluble, so eating fats improves absorption and consistency. It also reduces stomach discomfort.",
                    },
                    {
                      question: "Will RSO make me feel 'high'?",
                      answer:
                        "Yes, RSO is highly psychoactive due to its high THC content (50-90%). Even small doses can produce noticeable effects. The intensity depends on your dose, tolerance, and method of consumption. Using suppositories can minimize psychoactive effects while providing therapeutic benefits.",
                    },
                    {
                      question: "Can RSO interact with my medications?",
                      answer:
                        "Yes, RSO can interact with many medications. THC can amplify effects of sedatives, blood thinners, antidepressants, and some chemotherapy drugs. It may affect medications metabolized by the liver's CYP450 enzyme system. Always consult your doctor before using RSO.",
                    },
                    {
                      question: "How long does RSO take to work?",
                      answer:
                        "Effects timing depends on method: Oral takes 1-2 hours with 6-8+ hour duration. Sublingual takes 15-30 minutes with 4-6 hour duration. Topical works locally within 30-60 minutes. Suppositories take 15-45 minutes with 4-6 hour duration.",
                    },
                    {
                      question: "Is it safe to travel with RSO?",
                      answer:
                        "Traveling with RSO is risky and often illegal. Within legal states, you can typically transport it in your vehicle following state regulations. Never fly with RSO or cross state lines—federal law prohibits cannabis transport. International travel with RSO is illegal.",
                    },
                    {
                      question: "Does RSO cure cancer?",
                      answer:
                        "No scientific evidence supports RSO as a cancer cure. While Rick Simpson's anecdotal reports and some preclinical studies show cannabinoids may have anti-tumor properties, there are no conclusive human clinical trials proving RSO cures cancer. RSO should never replace conventional cancer treatment but may help manage symptoms.",
                    },
                    {
                      question: "What's the difference between RSO and FECO?",
                      answer:
                        "RSO and FECO are very similar full-spectrum extracts, but FECO is often considered 'cleaner' because it uses food-grade ethanol instead of harsher solvents. FECO may retain more terpenes and flavonoids, potentially offering better entourage effect. Many medical professionals now recommend FECO over traditional RSO in 2025.",
                    },
                    {
                      question: "Can I make RSO at home?",
                      answer:
                        "In legal states, adults can typically make RSO at home for personal use, but laws vary. However, home production involves dangerous solvents (like naphtha or isopropyl alcohol) that are highly flammable and require proper ventilation. Many states require manufacturing licenses. For safety and legal compliance, purchasing from licensed dispensaries is recommended.",
                    },
                    {
                      question: "Is RSO safe for pets?",
                      answer:
                        "No, absolutely not. THC is toxic to pets, especially dogs and cats. RSO's high THC concentration can cause serious adverse reactions including vomiting, loss of coordination, seizures, and in severe cases, coma. If your pet consumes RSO accidentally, contact a veterinarian immediately.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-primary mb-3">{item.question}</h3>
                      <p className="text-muted-foreground text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Putting It All Together: Final Thoughts
                </h2>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p>
                    Rick Simpson Oil represents a powerful approach to cannabis medicine, offering high concentrations
                    of cannabinoids for those seeking relief from serious conditions. While Rick Simpson's story has
                    inspired thousands globally, it's crucial to approach RSO with realistic expectations, medical
                    guidance, and respect for its potency.
                  </p>
                  <p>
                    Whether you're exploring RSO for chronic pain, cancer symptom management, neurological conditions,
                    or other serious health concerns, always start low, go slow, and work with healthcare professionals.
                    The 90-day protocol provides a structured approach for serious conditions, but individual needs vary
                    greatly based on body weight, metabolism, condition severity, and personal response.
                  </p>
                  <p>
                    The Entourage Effect—the synergistic action of multiple cannabis compounds—is one of the most
                    compelling reasons to choose full-spectrum extracts like RSO over isolated cannabinoids. This
                    whole-plant approach preserves the complex chemistry that makes cannabis medicine potentially more
                    effective than individual components.
                  </p>
                  <p>
                    As cannabis legalization expands and research continues, we're learning more about RSO's potential
                    and limitations. In 2025, many medical professionals now recommend FECO as a cleaner, more refined
                    alternative, but RSO remains a popular choice for those seeking the original formula that inspired
                    the movement.
                  </p>
                  <p>
                    Remember: RSO is not a magic cure. It's a tool—one that many people find helpful for managing
                    difficult symptoms and improving quality of life when used responsibly alongside conventional
                    medical care.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/products/rso">Shop Lab-Tested RSO Products</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/">Return to Home</Link>
                  </Button>
                </div>
              </section>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
