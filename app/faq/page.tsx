import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ: Cannabis Oil Questions Answered - RSO & FECO Guide 2025 | Dosing, Safety & Shipping Help",
  description:
    "Comprehensive FAQ covering RSO, FECO, dosing protocols, lab testing, legal status, shipping, storage, side effects, and safety. Expert answers for beginners and experienced users.",
  keywords: [
    "cannabis oil FAQ",
    "RSO questions answered",
    "FECO FAQ",
    "how to use RSO",
    "FECO dosing guide",
    "buy cannabis oil online",
    "cannabis oil shipping information",
    "RSO safety guide",
    "cannabis drug testing",
    "cannabis storage tips",
    "RSO vs FECO comparison",
    "beginner cannabis guide",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions - Cannabis Oil & RSO/FECO 2025",
    description: "Complete FAQ for RSO and FECO: dosing, usage, shipping, legal status, safety, lab testing, and more.",
    url: "https://naturalcannabisoil.shop/faq",
    type: "website",
    publishedTime: "2025-12-01",
    modifiedTime: "2025-12-12",
  },
  robots: { index: true, follow: true },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between RSO and FECO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RSO (Rick Simpson Oil) and FECO (Full Extract Cannabis Oil) are both full-spectrum cannabis extracts. RSO typically refers to oil made following Rick Simpson's original method using isopropyl alcohol, while FECO is usually made with food-grade ethanol. Both contain the full range of cannabinoids and terpenes.",
      },
    },
    {
      "@type": "Question",
      name: "Are your products lab tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our products undergo rigorous third-party laboratory testing for potency, purity, and safety. We test for cannabinoid content, terpene profiles, pesticides, heavy metals, and residual solvents. Certificates of Analysis (COA) are available upon request.",
      },
    },
    {
      "@type": "Question",
      name: "How much RSO should I take as a beginner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend starting low and going slow. For RSO/FECO, begin with a rice-grain sized dose. Wait 1.5-2 hours before taking more. Keep a journal to track effects and adjust accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "How long do RSO effects last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RSO/FECO effects typically have a 1-2 hour onset and can last 8-12 hours. Individual responses may vary based on tolerance and metabolism.",
      },
    },
    {
      "@type": "Question",
      name: "Is shipping discreet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all orders are shipped in plain, unmarked packaging with no indication of contents. Return address shows a generic business name for your privacy.",
      },
    },
  ],
}

const faqs = [
  {
    category: "Products",
    questions: [
      {
        q: "What is the difference between RSO and FECO?",
        a: "RSO (Rick Simpson Oil) and FECO (Full Extract Cannabis Oil) are both full-spectrum cannabis extracts. RSO typically refers to oil made following Rick Simpson's original method using isopropyl alcohol, while FECO is usually made with food-grade ethanol. Both contain the full range of cannabinoids and terpenes. Visit our RSO page and FECO page for detailed information.",
      },
      {
        q: "What RSO products do you offer?",
        a: "We offer RSO in multiple forms: RSO Syringes (pure concentrated oil), RSO Tinctures (sublingual drops), RSO Gummies (edible form), RSO Capsules (pre-measured doses), and RSO Suppositories (alternative delivery). Each form has its own benefits depending on your needs.",
      },
      {
        q: "What FECO products do you offer?",
        a: "Our FECO line includes: FECO Syringes, FECO Tinctures, FECO Capsules, FECO Edibles, and FECO Suppositories. FECO is available in various cannabinoid ratios including THC-dominant, CBD-dominant, and balanced options.",
      },
      {
        q: "Are your products lab tested?",
        a: "Yes, all our products undergo rigorous third-party laboratory testing for potency, purity, and safety. We test for cannabinoid content, terpene profiles, pesticides, heavy metals, and residual solvents. Certificates of Analysis (COA) are available upon request.",
      },
    ],
  },
  {
    category: "Dosing & Usage",
    questions: [
      {
        q: "How much RSO should I take as a beginner?",
        a: "We recommend starting with a rice-grain sized dose (approximately 10-25mg). Wait 1.5-2 hours before taking more. Keep a journal to track effects and adjust accordingly. See our RSO Dosage Guide for detailed protocols.",
      },
      {
        q: "How long do RSO/FECO effects last?",
        a: "RSO and FECO typically have a 1-2 hour onset time and effects can last 8-12 hours. Individual responses may vary based on tolerance, metabolism, and the specific product form.",
      },
      {
        q: "Can I take RSO/FECO with other medications?",
        a: "Cannabis can interact with certain medications. Always consult your healthcare provider before using cannabis products, especially if you take blood thinners, sedatives, or medications metabolized by the liver.",
      },
      {
        q: "How should I store my RSO/FECO products?",
        a: "Store cannabis products in a cool, dark place away from direct sunlight. Keep in original containers with child-resistant caps. Most products remain stable at room temperature for 6-12 months. Refrigeration may extend shelf life.",
      },
    ],
  },
  {
    category: "Ordering & Shipping",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept PayPal, Bitcoin, Chime, and Zelle. All payments are processed securely. Payment must be received before orders are processed.",
      },
      {
        q: "Is shipping discreet?",
        a: "Yes, all orders are shipped in plain, unmarked packaging with no indication of contents. Return address shows a generic business name for your privacy.",
      },
      {
        q: "How long does shipping take?",
        a: "Standard shipping typically takes 3-7 business days within the US. Express shipping options are available at checkout. Tracking information is provided once your order ships.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently, we ship within the United States only. International shipping is not available due to varying cannabis regulations in different countries.",
      },
    ],
  },
  {
    category: "Legal & Safety",
    questions: [
      {
        q: "Is it legal to buy RSO/FECO online?",
        a: "Cannabis laws vary by state and jurisdiction. It's your responsibility to ensure that purchasing and possessing cannabis products is legal in your area. We ship only to locations where such products are permitted.",
      },
      {
        q: "Do I need to be 21 to purchase?",
        a: "Yes, you must be at least 21 years of age to purchase products from NaturalCannabisOil.shop. Age verification is required.",
      },
      {
        q: "Will RSO/FECO show up on a drug test?",
        a: "Yes, THC-containing products like RSO and FECO will result in a positive drug test. If drug testing is a concern, consult with your employer or testing facility.",
      },
      {
        q: "Is it safe to drive after using RSO/FECO?",
        a: "No. Do not drive or operate heavy machinery after using THC products. Effects can impair reaction time, coordination, and judgment. Wait until effects have completely worn off before driving.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <BackButton href="/" label="Back to Home" className="mb-6" />

          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our{" "}
              <Link href="/products/rso" className="text-primary hover:underline">
                RSO
              </Link>{" "}
              and{" "}
              <Link href="/products/feco" className="text-primary hover:underline">
                FECO
              </Link>{" "}
              products.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${section.category}-${index}`}
                      className="border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
            <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Contact Us →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
