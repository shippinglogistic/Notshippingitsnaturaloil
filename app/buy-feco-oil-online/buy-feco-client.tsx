"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Shield, Truck, Clock, CreditCard, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { fecoProducts } from "@/lib/feco-products-data"
import { sanitizeString } from "@/lib/sanitize-string"

const fecoProductsList = fecoProducts

const reviews = [
  {
    name: sanitizeString("Jennifer M."),
    rating: 5,
    text: sanitizeString(
      "The 1:1 ratio FECO is perfect for my needs. Great for daytime use without being too sedating. Lab results are transparent and accurate.",
    ),
    date: sanitizeString("December 2025"),
  },
  {
    name: sanitizeString("Robert H."),
    rating: 5,
    text: sanitizeString(
      "High quality FECO with excellent ratio options. The CBD dominant version really helps with my anxiety and inflammation. Highly recommend for sensitive users.",
    ),
    date: sanitizeString("December 2025"),
  },
  {
    name: sanitizeString("Lisa P."),
    rating: 5,
    text: sanitizeString(
      "Cleaner taste than RSO and just as effective. Highly recommend for sensitive users. The full-spectrum benefits are noticeable after just one week of use.",
    ),
    date: sanitizeString("November 2025"),
  },
  {
    name: sanitizeString("Mark T."),
    rating: 5,
    text: sanitizeString(
      "Fast shipping and great customer service. Product quality is top-notch. The terpene profiles match the lab reports perfectly.",
    ),
    date: sanitizeString("November 2025"),
  },
  {
    name: sanitizeString("Diana K."),
    rating: 5,
    text: sanitizeString(
      "Best FECO I've purchased. Pristine quality and the customer support team helped me find the right ratio for my condition. Will order again.",
    ),
    date: sanitizeString("October 2025"),
  },
  {
    name: sanitizeString("Steven M."),
    rating: 5,
    text: sanitizeString(
      "Lab-tested with transparent results. The different ratios allow me to match my therapeutic needs perfectly. Excellent value for premium quality.",
    ),
    date: sanitizeString("October 2025"),
  },
]

const faqs = [
  {
    question: sanitizeString("What is FECO (Full Extract Cannabis Oil)?"),
    answer: sanitizeString(
      "FECO stands for Full Extract Cannabis Oil. Unlike distillate or isolate, FECO retains the complete cannabinoid and terpene profile of the original plant — including THC, CBD, CBG, CBN, and dozens of minor cannabinoids for maximum entourage effect. This full-spectrum approach delivers comprehensive therapeutic benefits superior to single-compound extracts.",
    ),
  },
  {
    question: sanitizeString("How is FECO different from RSO?"),
    answer: sanitizeString(
      "FECO is made using food-grade ethanol and undergoes additional winterization for a cleaner product. It typically has a smoother taste and better terpene retention than traditional RSO, though both offer similar therapeutic benefits. Our FECO consistently tests 90-96% total cannabinoids—significantly higher than most RSO products.",
    ),
  },
  {
    question: sanitizeString("What FECO ratios do you offer?"),
    answer: sanitizeString(
      "We offer 7 different FECO ratios: 3:1 THC Dominant (hospice-proven for advanced cancer), High Test THC (700-800mg THC/g), 1:1 THC/CBD Balanced (endocannabinoid support), Standard THC (with full-spectrum plant material), High Test CBD (isolated CBD strength), CBD Standard (anti-inflammatory support), and 1:3 CBD Dominant (daytime use without psychoactive effects). Choose based on your therapeutic needs and tolerance.",
    ),
  },
  {
    question: sanitizeString("How do I use FECO?"),
    answer: sanitizeString(
      "Start with a rice-grain sized dose placed under the tongue or swallowed with fatty food. FECO can also be used in capsules, suppositories, or added to edibles. Wait 60-90 minutes before considering additional doses. Most users find benefits from consistent daily dosing.",
    ),
  },
  {
    question: sanitizeString("Is FECO lab tested?"),
    answer: sanitizeString(
      "Yes, every batch undergoes rigorous third-party testing. We test for potency, pesticides, heavy metals, and residual solvents. Lab results are available via QR code on each package. Our transparency sets us apart from unreliable online FECO vendors.",
    ),
  },
  {
    question: sanitizeString("What payment methods do you accept?"),
    answer: sanitizeString(
      "We accept Bitcoin (5% discount), Cash App, Zelle, PayPal, and major credit/debit cards. Cryptocurrency orders receive priority processing and discounted rates.",
    ),
  },
  {
    question: sanitizeString("How quickly will FECO affect me?"),
    answer: sanitizeString(
      "Sublingual absorption typically takes 15-30 minutes. Oral consumption with fatty food takes 60-90 minutes. Effects generally last 4-8 hours depending on dosage and individual metabolism. Consistent use over weeks often produces more noticeable therapeutic benefits.",
    ),
  },
  {
    question: sanitizeString("Can I use FECO for cooking?"),
    answer: sanitizeString(
      "Yes, FECO is already decarboxylated and perfect for infusing into foods. Mix with fatty ingredients like butter or coconut oil for best absorption. Avoid high heat which may degrade cannabinoids. Many users create personalized edibles with precise dosing.",
    ),
  },
  {
    question: sanitizeString("Is your FECO packaging discreet?"),
    answer: sanitizeString(
      "Yes, all orders ship in vacuum-sealed, smell-proof, unmarked packaging with no cannabis branding or indication of contents. Tracking information is provided for all orders.",
    ),
  },
  {
    question: sanitizeString("What's your money-back guarantee?"),
    answer: sanitizeString(
      "We offer a 100% satisfaction guarantee. If you're not completely satisfied with your FECO, contact us within 30 days for a full refund. We stand behind our premium quality.",
    ),
  },
  {
    question: sanitizeString("How should I store FECO oil?"),
    answer: sanitizeString(
      "Store in a cool, dark place away from direct sunlight. Refrigeration extends shelf life significantly. FECO remains potent for 12+ months when stored properly. Keep away from children and pets.",
    ),
  },
  {
    question: sanitizeString("Can I use FECO during pregnancy or while breastfeeding?"),
    answer: sanitizeString(
      "No, FECO is not recommended for use during pregnancy or while breastfeeding. Consult your healthcare provider about cannabis use during these periods.",
    ),
  },
]

export function BuyFECOClient() {
  const { addItem } = useCart()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleAddToCart = (product: (typeof fecoProductsList)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.volumes[0].price,
      image: product.image,
      quantity: 1,
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="mx-auto px-4 w-[85%]">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-4 bg-primary/20 text-primary">
                Lab-Tested • 90-96% Cannabinoids • Free Shipping $100+
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Buy FECO Oil Online – Premium Full Extract Cannabis Oil (2025)
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Looking for the cleanest, most potent full-spectrum cannabis extract online? Our FECO (Full Extract
                Cannabis Oil) is ethanol-extracted using food-grade solvents, lab-tested, and consistently tests 90-96%
                total cannabinoids. Choose from 7 therapeutic ratios including THC-dominant, balanced 1:1, and
                CBD-dominant formulas for personalized wellness support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="#products">Shop FECO Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/rso-vs-feco">FECO vs RSO Comparison</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto px-4 w-[85%]">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="flex items-center justify-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Lab Tested</p>
                  <p className="text-sm text-muted-foreground">90-96% verified potency</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Truck className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">Orders $100+</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Same-Day Dispatch</p>
                  <p className="text-sm text-muted-foreground">Orders before 2 PM PST</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CreditCard className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Secure Payment</p>
                  <p className="text-sm text-muted-foreground">Bitcoin, PayPal, Cards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section - ALL 7 FECO PRODUCTS */}
        <section id="products" className="bg-card py-16">
          <div className="mx-auto px-4 w-[85%]">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
              Complete FECO Oil Selection (7 Ratios In Stock)
            </h2>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {fecoProductsList.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-square bg-muted">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`Buy ${product.name} online - premium lab-tested FECO cannabis oil`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col flex-1">
                    <h3 className="mb-2 font-semibold text-foreground text-sm">{product.name}</h3>
                    <p className="mb-3 text-xs text-muted-foreground flex-1 line-clamp-2">{product.description}</p>
                    <div className="mb-3">
                      <span className="text-xs text-muted-foreground font-medium">{product.potency}</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-xl font-bold text-primary">From ${product.volumes[0].price}</span>
                      <span className="ml-2 text-xs text-muted-foreground">per gram</span>
                    </div>
                    <Button className="w-full" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Long-form SEO Content */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto px-4 w-[85%]">
            <div className="mx-auto max-w-3xl prose prose-sm dark:prose-invert">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Buy FECO Oil Online: Complete Guide to Premium Full Extract Cannabis Oil (2025)
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                When searching to <strong>buy FECO oil online</strong>, you want premium quality, transparent lab
                testing, and multiple cannabinoid ratio options. Our FECO oil for sale represents the highest standard
                of full-spectrum cannabis extraction: 90-96% total cannabinoids, ethanol-extracted using food-grade
                solvents, and rigorously tested for safety and potency. Whether you're seeking relief from chronic pain,
                cancer support, or endocannabinoid system optimization, <strong>premium FECO products online</strong>{" "}
                deliver comprehensive therapeutic benefits that isolated compounds cannot match.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4 text-foreground">
                What is FECO (Full Extract Cannabis Oil)?
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                FECO stands for Full Extract Cannabis Oil, representing the complete spectrum of plant compounds
                extracted from premium cannabis flowers. Unlike distillates that contain only THC or CBD, and unlike
                isolates that strip away beneficial compounds, authentic FECO oil for sale preserves over 400 different
                phytochemicals including cannabinoids, terpenes, flavonoids, and plant lipids. When you{" "}
                <strong>buy FECO oil online</strong>, you're accessing a whole-plant medicine approach backed by decades
                of research demonstrating the <strong>entourage effect</strong>—the synergistic power of all compounds
                working together.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Our premium FECO products online utilize food-grade ethanol extraction followed by winterization to
                remove unwanted lipids and chlorophyll while preserving beneficial cannabinoids and precious terpene
                profiles. This meticulous process is why our <strong>FECO oil for sale</strong> consistently tests at
                90-96% total cannabinoid content—among the highest potencies available on any online shop. Each bottle
                comes with QR codes linking to independent lab reports showing exact cannabinoid ratios, terpene
                compositions, and comprehensive safety testing data.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Why Choose Premium FECO Oil Online Over Other Extracts?
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                When you're shopping to <strong>buy FECO oil online</strong>, distinguishing between quality levels is
                critical. Our premium FECO oil for sale surpasses typical cannabis extracts through superior extraction
                methodology and rigorous quality assurance. FECO products online from our shop offer seven distinct
                cannabinoid ratios—High THC, High Test THC, 1:1 Balanced, Standard THC, High Test CBD, CBD Standard, and
                1:3 CBD Dominant—allowing you to match your therapeutic needs precisely.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Traditional RSO oil often employs harsher solvents and includes more plant material, resulting in darker
                oils with stronger tastes. When you purchase FECO oil online from us, you receive a cleaner extract with
                superior terpene preservation and smoother flavor profiles. This is why patients and wellness
                enthusiasts increasingly prefer buying FECO oil online over RSO—the superior extraction, transparent
                testing, and ratio options make <strong>premium FECO oil for sale</strong> the intelligent choice for
                serious therapeutic use.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                The Seven FECO Ratios Available When You Buy FECO Online
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Our comprehensive FECO products online include seven distinct cannabinoid ratios, each formulated for
                specific therapeutic applications:
              </p>

              <ul className="text-lg leading-relaxed mb-6 text-muted-foreground space-y-3">
                <li>
                  <strong>3:1 THC Dominant (Hospice-Proven):</strong> Originally developed for advanced cancer and
                  end-stage pain management, this potent ratio combines THC with strategic CBD for comprehensive relief.
                </li>
                <li>
                  <strong>High Test THC (700-800mg THC/g):</strong> Ultra-pure THC extraction using sub-zero ethanol and
                  liquid nitrogen, designed for experienced users and extreme pain management.
                </li>
                <li>
                  <strong>1:1 Balanced (Endocannabinoid Support):</strong> Equal parts THC and CBD for gentle system
                  stimulation and broad-spectrum symptom relief without overwhelming psychoactive effects.
                </li>
                <li>
                  <strong>Standard THC (600-650mg THC/g):</strong> Full-spectrum THC with complete plant material
                  retention for maximum entourage effect and healing properties.
                </li>
                <li>
                  <strong>High Test CBD (Isolated CBD):</strong> Ultra-high CBD concentration with minimal THC for
                  daytime use and inflammation management without psychoactive effects.
                </li>
                <li>
                  <strong>CBD Standard (Anti-Inflammatory):</strong> CBD-dominant extraction from ACDC and other
                  CBD-focused strains for autoimmune support and chronic inflammation.
                </li>
                <li>
                  <strong>1:3 CBD Dominant (Daytime Relief):</strong> CBD-rich formula ideal for autoimmune illness and
                  inflammatory disease without strong psychoactive effects, perfect for daytime productivity.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                How to Use FECO Oil: Complete Dosing Guide
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                When you purchase FECO oil online, proper dosing ensures safe and effective results. Start with a
                rice-grain-sized amount (approximately 25-50mg) placed under the tongue or swallowed with fatty foods.
                Our FECO oil for sale reaches peak effects within 60-90 minutes of oral consumption. Most users increase
                by 10-20mg every 3-7 days until reaching their therapeutic threshold. The high potency of premium FECO
                products online means even small doses deliver profound effects—this is why starting low is essential.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                FECO oil for sale can be consumed multiple ways: sublingually for faster absorption (15-30 minutes
                onset), orally with meals for steadier effects, infused into capsules for convenience, or incorporated
                into suppositories for rapid localized relief. Many users find that the superior terpene profile in
                premium FECO oils online produces smoother, more balanced effects compared to harsher cannabis extracts.
                Medical professionals increasingly recommend FECO products when <strong>buying FECO oil online</strong>{" "}
                for therapeutic protocols.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                FECO Oil for Sale: Lab Testing and Transparency Standards
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Quality assurance separates premium FECO oil for sale from unreliable products. Every batch we produce
                undergoes independent third-party laboratory analysis measuring cannabinoid profiles, terpene
                compositions, pesticide residues, heavy metal content, and microbial contamination. When you{" "}
                <strong>buy FECO oil online</strong> from our shop, complete lab reports accompany each purchase via QR
                code. This transparency is what defines authentic premium FECO products online—no guessing, no hidden
                testing results, complete disclosure.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Therapeutic Applications: Why Patients Buy FECO Oil Online
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Medical professionals and patients increasingly choose to <strong>buy FECO oil online</strong> for
                conditions where isolated cannabinoids fall short. The complete-spectrum approach in FECO products
                addresses diverse therapeutic needs:
              </p>

              <ul className="text-lg leading-relaxed mb-6 text-muted-foreground space-y-3">
                <li>Advanced cancer support with pain, nausea, and appetite management</li>
                <li>Chronic pain relief without pharmaceutical addiction risks</li>
                <li>Autoimmune disorder management and inflammation reduction</li>
                <li>Sleep disorder resolution with gentle, natural effectiveness</li>
                <li>Anxiety and PTSD symptom reduction through endocannabinoid system support</li>
                <li>Neuropathic pain relief where conventional treatments fail</li>
                <li>Neurological disorder support including Parkinson's and seizure management</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                The Complete FECO Oil Product Line Available Online
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Beyond traditional syringes, our FECO oil for sale includes multiple delivery formats. FECO capsules
                provide pre-measured 50mg doses for ultimate convenience and discretion. FECO suppositories deliver
                rapid absorption for gastrointestinal or pelvic-specific relief. Our comprehensive FECO products online
                also include specialty formulations in varying cannabinoid ratios and strain-specific options. Premium
                FECO oil for sale should offer diverse delivery methods—that's how you know you've found an authentic,
                customer-focused online shop committed to meeting individual wellness needs.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Discreet Shipping When You Buy FECO Oil Online
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                All FECO oil for sale ships in vacuum-sealed, smell-proof packaging with zero cannabis branding or
                indication of contents. Tracking information provided for every order. Same-day processing for orders
                placed before 2 PM PST, with 1-3 business day nationwide delivery. When you purchase FECO oil online
                from our shop, complete privacy and security are guaranteed.
              </p>

              <p className="text-lg leading-relaxed mt-8 font-semibold text-muted-foreground">
                Experience authentic, lab-tested FECO oil for sale that delivers real therapeutic results. Our premium
                selection, transparent testing, multiple cannabinoid ratios, and proven customer satisfaction make us
                your trusted source for buying high-potency FECO oil online that genuinely works.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-background py-16">
          <div className="mx-auto px-4 w-[85%]">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Customer Reviews & Testimonials</h2>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              {reviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-4 text-muted-foreground">&quot;{review.text}&quot;</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{review.name}</span>
                      <span className="text-muted-foreground">{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto px-4 w-[85%]">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
                Frequently Asked Questions About FECO Oil
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <button
                      className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span className="font-medium text-foreground">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="border-t border-border px-4 pb-4 pt-2">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
