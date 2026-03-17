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
import { rsoProducts } from "@/lib/rso-products-data"

const reviews = [
  {
    name: "Michael R.",
    rating: 5,
    text: "This RSO has been a game-changer for my chronic pain. The quality is exceptional and the lab reports are transparent. Exactly what I needed.",
    date: "December 2025",
  },
  {
    name: "Sarah T.",
    rating: 5,
    text: "Outstanding quality RSO oil. Helped tremendously with sleep and appetite restoration. The different formats give me flexibility in how I take it.",
    date: "December 2025",
  },
  {
    name: "David K.",
    rating: 5,
    text: "Best RSO I've found online. Lab tested with 72-74% THC potency as advertised. Customer service was responsive and helpful throughout.",
    date: "November 2025",
  },
  {
    name: "Jennifer M.",
    rating: 5,
    text: "Fast shipping and discreet packaging exceeded my expectations. Product works exactly as described. Will definitely become a repeat customer.",
    date: "November 2025",
  },
  {
    name: "Thomas B.",
    rating: 5,
    text: "The RSO capsules are perfect for consistent dosing. No mess, no guesswork, pure therapeutic benefit. Highly recommend for serious patients.",
    date: "October 2025",
  },
  {
    name: "Rebecca H.",
    rating: 5,
    text: "Exceptional quality Rick Simpson Oil. The tincture flavors make taking it daily a pleasure rather than a chore. Lab results are always accurate.",
    date: "October 2025",
  },
]

const faqs = [
  {
    question: "What is Rick Simpson Oil (RSO)?",
    answer:
      "Rick Simpson Oil is a potent, full-spectrum cannabis extract originally developed by Rick Simpson, a Canadian medical marijuana activist. RSO is known for its exceptional high THC content (72-90%) and represents one of the most concentrated forms of cannabis available, created using solvent-based extraction that preserves the complete plant's cannabinoid and terpene profile for maximum therapeutic benefit.",
  },
  {
    question: "What's the difference between RSO and FECO?",
    answer:
      "Both are full-spectrum extracts, but differ in extraction methods and composition. RSO uses traditional solvents and includes more plant material, resulting in darker oils with stronger tastes (typically 60-90% THC). FECO uses food-grade ethanol with winterization for cleaner extraction, smoother flavor, and higher potency (90-96% cannabinoids). Both offer similar therapeutic benefits, but FECO provides superior terpene retention.",
  },
  {
    question: "How do I use Rick Simpson Oil (RSO)?",
    answer:
      "Start with a rice-grain sized dose (about 5-10mg) placed under the tongue, swallowed with fatty food, or applied topically. Wait 60-90 minutes before considering additional doses. The classic Rick Simpson protocol recommends gradually increasing over 12 weeks to reach 1 gram daily. Always begin with the smallest possible amount and work upward based on your individual tolerance and therapeutic response.",
  },
  {
    question: "What formats does RSO come in?",
    answer:
      "We offer RSO in four convenient formats: Syringes (1g for easy dispensing), Capsules (50mg pre-measured for convenience), Tinctures (500mg flavored drops), and Suppositories (100mg THC + 25mg CBD for rapid absorption). Each format serves different preferences—syringes for precision, capsules for discretion, tinctures for flavor-enhanced dosing, and suppositories for rapid or localized relief.",
  },
  {
    question: "How long does RSO shipping take?",
    answer:
      "Orders process same-day for submissions before 2 PM PST, then ship via USPS Priority Mail for 1-3 business day nationwide delivery. Free tracked shipping on orders over $100. Full tracking information provided with every order so you know exactly when your RSO will arrive.",
  },
  {
    question: "Is your RSO lab tested?",
    answer:
      "Yes, every batch of RSO undergoes independent third-party laboratory testing. Our Rick Simpson Oil consistently tests at 72-74% THC potency. Each purchase includes a QR code linking to complete lab reports showing cannabinoid profiles, terpene content, and safety verification for pesticides, heavy metals, and residual solvents.",
  },
  {
    question: "What payment methods do you accept for RSO purchases?",
    answer:
      "We accept Bitcoin (with 5% discount for crypto orders), Cash App, Zelle, PayPal, and major credit/debit cards. Multiple payment options provide flexibility and security for purchasing premium RSO oil online. Cryptocurrency transactions receive priority processing.",
  },
  {
    question: "How should I store my RSO oil?",
    answer:
      "Store RSO in a cool, dark place away from direct sunlight. Refrigeration extends shelf life significantly—properly stored RSO remains potent for 2+ years when kept cool. Keep in original packaging or sealed containers. Store away from heat, light, and moisture. Always keep out of reach of children and pets.",
  },
  {
    question: "Can I use RSO for cooking and making edibles?",
    answer:
      "Yes, RSO is decarboxylated and perfect for infusing into edibles and cooking. Mix with fatty ingredients like butter or coconut oil for optimal absorption. Avoid high heat which may degrade cannabinoids. Many users create personalized edibles with precise dosing control when making RSO-infused foods.",
  },
  {
    question: "What are the therapeutic benefits of Rick Simpson Oil?",
    answer:
      "Customers use RSO for chronic pain management, cancer support, sleep disorders, anxiety reduction, appetite stimulation, inflammation management, neuropathic pain relief, muscle tension, and various terminal illness symptom management. While individual results vary, many users report RSO's full-spectrum approach provides more comprehensive relief than isolated cannabinoids.",
  },
  {
    question: "Is RSO safe? What should I know?",
    answer:
      "RSO is high-potency and requires careful dosing. Always start with minimal amounts (rice-grain size). Do not drive or operate machinery after consumption. Consult healthcare providers if taking blood thinners or other medications. Never use during pregnancy or breastfeeding. Keep securely away from children and pets. Our lab-tested RSO meets highest safety standards.",
  },
]

export function BuyRSOClient() {
  const { addItem } = useCart()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleAddToCart = (product: (typeof rsoProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.basePrice,
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
                Original Formula • Lab-Tested • 72-74% THC • 4 Product Formats • Free Shipping $100+
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Buy RSO Online – Premium Rick Simpson Oil for Sale (2025)
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Get authentic Rick Simpson Oil following the original high-THC, full-spectrum recipe. Available in
                syringes, capsules, tinctures, and suppositories. Lab-tested for 72-74% THC potency. Discreet, secure
                nationwide shipping with same-day processing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="#products">Shop RSO Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/rso-dosage-guide">Complete Dosage Guide</Link>
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
                  <p className="text-sm text-muted-foreground">72-74% THC verified</p>
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
                  <p className="text-sm text-muted-foreground">Before 2 PM PST</p>
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

        {/* Products Section - ALL 4 RSO FORMATS */}
        <section id="products" className="bg-card py-16">
          <div className="mx-auto px-4 w-[85%]">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
              RSO Products in Multiple Formats (In Stock)
            </h2>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {rsoProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-square bg-muted">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`Buy ${product.name} online - premium lab-tested Rick Simpson Oil`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col flex-1">
                    <h3 className="mb-2 font-semibold text-foreground text-sm">{product.name}</h3>
                    <p className="mb-3 text-xs text-muted-foreground flex-1">{product.unitContent}</p>
                    <div className="mb-3 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-1 text-xs text-muted-foreground">(4.9)</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-xl font-bold text-primary">From ${product.basePrice}</span>
                    </div>
                    <Button size="sm" className="w-full" onClick={() => handleAddToCart(product)}>
                      View Details
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
                Buy RSO Online: Complete Guide to Premium Rick Simpson Oil (2025)
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Looking to <strong>buy RSO oil online</strong>? You've found the right destination. Our premium{" "}
                <strong>rso online shop</strong> offers authentic <strong>Rick Simpson Oil for sale</strong> with
                transparent lab testing, discreet nationwide shipping, and multiple delivery formats. Whether you need
                RSO for chronic pain management, cancer support, or serious therapeutic protocols, our premium{" "}
                <strong>RSO products for sale</strong> deliver exceptional potency and comprehensive healing benefits
                that have earned recognition from patients and practitioners worldwide.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4 text-foreground">What is Rick Simpson Oil (RSO)?</h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Rick Simpson Oil represents one of the most potent and therapeutically rich cannabis extracts available
                when you <strong>buy RSO oil online</strong>. Developed by Rick Simpson, a Canadian medical marijuana
                pioneer, RSO is a full-spectrum extract known for its exceptional high THC content (72-90%) and complete
                cannabinoid profile. When you <strong>buy RSO products</strong> from our{" "}
                <strong>rso online shop</strong>, you're accessing whole-plant medicine that preserves the complete
                spectrum of plant compounds—not just isolated cannabinoids but the synergistic combination that creates
                the <strong>entourage effect</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Our premium <strong>Rick Simpson Oil for sale</strong> is created using solvent-based extraction from
                premium cannabis flowers, producing a concentrated oil that ranges from amber to dark brown depending on
                plant material inclusion. Each <strong>RSO product online</strong> undergoes rigorous independent
                laboratory testing, confirming potency, safety, and consistency. When you purchase{" "}
                <strong>RSO oil for sale</strong> from our certified <strong>rso online shop</strong>, you receive
                complete transparency including cannabinoid analysis, terpene profiles, and comprehensive safety
                documentation via QR code on every order.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Why Purchase RSO from Our Online Shop Instead of Competitors?
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                When you <strong>buy RSO online</strong>, quality variance between vendors is substantial. Our{" "}
                <strong>rso online shop</strong> stands apart through unwavering commitment to premium standards. Every
                batch of <strong>Rick Simpson Oil for sale</strong> undergoes third-party laboratory analysis confirming
                72-74% THC potency—consistently among the highest available. Our <strong>RSO products online</strong>{" "}
                are created from organically grown, indoor-cultivated cannabis using traditional extraction methods that
                preserve complete therapeutic profiles.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Beyond potency, our <strong>rso for sale</strong> selection offers unmatched diversity through four
                distinct delivery formats: syringes for traditional precision dosing, capsules for convenient
                pre-measured consumption, flavored tinctures for pleasant daily use, and suppositories for rapid
                absorption and reduced psychoactive intensity. This comprehensive product range when you{" "}
                <strong>buy RSO products online</strong> means every patient finds the perfect format matching their
                lifestyle, preferences, and therapeutic needs.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                The Complete Rick Simpson Oil Product Selection Available Online
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Our <strong>rso online shop</strong> specializes in multiple <strong>RSO products</strong> to serve
                diverse patient needs:
              </p>

              <ul className="text-lg leading-relaxed mb-6 text-muted-foreground space-y-3">
                <li>
                  <strong>RSO Syringes (1g):</strong> Traditional 1000mg syringes for precise dispensing, allowing
                  rice-grain-sized micro-dosing or topical application. Available in Indica (72% THC), Hybrid (74% THC),
                  or Sativa (73% THC) variants.
                </li>
                <li>
                  <strong>RSO Capsules (50mg):</strong> Pre-measured softgels for ultimate convenience and discretion.
                  Each 30-pack provides 1500mg total cannabinoids. Choose Indica, Hybrid, or Sativa strain-specific
                  effects.
                </li>
                <li>
                  <strong>RSO Tinctures (500mg):</strong> Flavored liquid drops in 7 varieties (Wild Cherry, Mixed
                  Berry, Lemon, Mandarin, Mint, Pineapple, Tropical Punch) for pleasant daily consumption with
                  strain-specific effects.
                </li>
                <li>
                  <strong>RSO Suppositories:</strong> 100mg THC + 25mg CBD per suppository for rapid absorption (15-30
                  minutes) and reduced psychoactive intensity ideal for pain management or patients unable to swallow
                  oral medication.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                How to Use Rick Simpson Oil: Complete Dosing Protocol
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                When you <strong>buy RSO oil online</strong>, understanding proper dosing is essential for safety and
                effectiveness. The original Rick Simpson protocol recommends starting with minimal doses and gradually
                increasing over 12 weeks. Week 1-2: Start with rice-grain-sized doses (5-10mg) three times daily to
                assess tolerance. Week 3-4: Increase to half-rice-grain to full rice-grain doses three times daily,
                doubling approximately every 4 days. Week 5-8: Continue increasing gradually, working toward 1 gram
                daily total. Full Protocol: Reach 1 gram (1000mg) daily divided into three 333mg doses over a 60-90 day
                treatment cycle.
              </p>

              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Multiple consumption methods work with <strong>RSO products for sale</strong>: Place syringes directly
                under tongue for 60-90 second sublingual absorption, swallow with fatty foods for systemic distribution,
                apply topically for localized pain relief, or infuse into food and beverages. Our premium{" "}
                <strong>Rick Simpson Oil for sale</strong> delivers onset within 60-90 minutes for oral consumption,
                with effects lasting 6-8 hours. Many users find the full-spectrum approach provides more comprehensive,
                longer-lasting relief than isolated cannabinoid products.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">RSO vs FECO: What's the Difference?</h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Both RSO and FECO are full-spectrum extracts, but critical distinctions exist. When you{" "}
                <strong>buy RSO oil online</strong>, you're purchasing an extract created with traditional harsh
                solvents that includes more plant material, resulting in darker oils with stronger tastes and THC
                potency typically 60-90%. When you <strong>buy FECO oil online</strong>, you receive a cleaner extract
                using food-grade ethanol with winterization, resulting in lighter color, smoother flavor, and higher
                potency (90-96% cannabinoids). Both offer excellent therapeutic benefits—RSO provides a fuller plant
                spectrum while FECO offers superior terpene retention and potency. Choice depends on your preference for
                flavor, potency level, and extraction method philosophy.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Therapeutic Applications: Why Patients Buy RSO Online
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Customers who <strong>buy RSO products online</strong> report transformative results across numerous
                medical conditions. The complete-spectrum approach in authentic{" "}
                <strong>Rick Simpson Oil for sale</strong> addresses therapeutic needs that isolated cannabinoids cannot
                match:
              </p>

              <ul className="text-lg leading-relaxed mb-6 text-muted-foreground space-y-3">
                <li>Advanced cancer support with pain, nausea, appetite, and immune system enhancement</li>
                <li>Chronic pain relief from arthritis, fibromyalgia, neuropathy without pharmaceutical addiction</li>
                <li>Sleep disorder resolution for insomnia and disrupted sleep patterns</li>
                <li>Anxiety and PTSD symptom reduction through nervous system rebalancing</li>
                <li>Seizure management for epilepsy and neurological disorders</li>
                <li>Appetite stimulation for cancer, HIV/AIDS, and wasting syndrome patients</li>
                <li>Inflammation reduction for autoimmune conditions and chronic disease</li>
                <li>Gastrointestinal support for IBS, Crohn's disease, and digestive disorders</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Lab Testing and Quality Assurance When You Buy RSO Online
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Quality assurance is non-negotiable when shopping to <strong>buy RSO products online</strong>. Every
                batch of <strong>Rick Simpson Oil for sale</strong> from our <strong>rso online shop</strong> undergoes
                comprehensive third-party laboratory testing covering cannabinoid profiles, terpene analysis, pesticide
                screening, heavy metal verification, and microbial safety. Our commitment to transparency means complete
                lab documentation accompanies every purchase via QR code. When you <strong>buy RSO oil for sale</strong>{" "}
                from our certified online shop, you know exactly what you're receiving with zero guesswork.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Strain-Specific Effects: Choose Your Perfect RSO Variant
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                Our <strong>rso online shop</strong> offers strain-specific <strong>RSO products</strong> allowing you
                to select effects matching your desired therapeutic outcome when you <strong>buy RSO oil online</strong>
                . Indica varieties (72% THC) produce relaxation, deep body relief, and sleep support ideal for nighttime
                use. Hybrid selections (74% THC) deliver balanced effects combining focus and relaxation suitable for
                anytime use. Sativa options (73% THC) provide uplifting, energizing effects perfect for daytime symptom
                management while maintaining clarity and productivity. Choose the strain variant matching your
                therapeutic needs and lifestyle when purchasing <strong>RSO for sale</strong> from our specialized
                online shop.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                Discreet Packaging and Secure Shipping When You Buy RSO Online
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                All <strong>RSO products online</strong> ship in discreet, vacuum-sealed, smell-proof packaging with
                zero cannabis branding or indication of contents. When you <strong>buy RSO oil online</strong>, your
                privacy is completely protected. Same-day processing for orders placed before 2 PM PST, with 1-3
                business day nationwide delivery via USPS Priority Mail. Free tracked shipping on orders over $100.
                Complete tracking information ensures you know exactly when your{" "}
                <strong>Rick Simpson Oil for sale</strong> arrives at your door.
              </p>

              <p className="text-lg leading-relaxed mt-8 font-semibold text-muted-foreground">
                Experience authentic, lab-tested Rick Simpson Oil for sale that delivers real therapeutic
                transformation. Our premium selection, transparent testing, multiple delivery formats, and proven
                customer satisfaction make us your trusted source for buying high-potency RSO oil online that genuinely
                works.
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
                Frequently Asked Questions About RSO
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
