"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is RSO (Rick Simpson Oil)?",
    answer:
      "RSO is a full-spectrum cannabis extract known for its high potency. It's made using a solvent extraction method that preserves all the beneficial cannabinoids and terpenes from the plant. RSO is typically used for serious health conditions and is taken orally or applied topically.",
  },
  {
    question: "What is FECO (Full Extract Cannabis Oil)?",
    answer:
      "FECO is similar to RSO but is often made with food-grade ethanol for a cleaner extraction. It contains the full spectrum of cannabinoids, terpenes, and other beneficial compounds. FECO is highly concentrated and is typically taken in small doses.",
  },
  {
    question: "What's the difference between RSO and FECO?",
    answer:
      "Both are full-spectrum extracts with high potency. RSO typically uses naphtha or petroleum solvents, while FECO uses food-grade ethanol, making FECO often considered cleaner. Potency levels are similar (60-95% THC), but the extraction method differs, potentially affecting the terpene profile.",
  },
  {
    question: "How much RSO should I take?",
    answer:
      "Start low and go slow: Begin with a rice-grain-sized dose (1/20th gram), 2-3 times daily. Increase gradually over weeks if tolerated. Most users find therapeutic doses between 1-3 grams daily after titration. Always work with a healthcare professional for personalized dosing.",
  },
  {
    question: "How long does RSO last?",
    answer:
      "Oral effects begin in 1-2 hours and last 6-12 hours. Topical application works in 15-45 minutes with 3-4 hours of localized relief. Proper storage in a cool, dark place keeps RSO potent for 1-2 years.",
  },
  {
    question: "How do I use RSO or FECO?",
    answer:
      "Common methods include: Oral/sublingual (place under tongue or swallow), Topical (apply directly to skin), or Added to food or capsules. Most users start with a rice-grain-sized dose. Oral use typically takes 1–2 hours to onset with effects lasting 6–12 hours, while topical provides localized relief faster.",
  },
  {
    question: "Is RSO legal in my area?",
    answer:
      "Cannabis laws vary by location. RSO is legal where cannabis is legal for medical or recreational use. We ship to 50 states, Canada, UK, and select international locations where permitted. Always verify local laws before ordering.",
  },
  {
    question: "Are your products lab tested?",
    answer:
      "Yes, all products undergo rigorous third-party testing for potency, purity, and safety. We test for cannabinoid content, terpene profiles, pesticides, heavy metals, residual solvents, and microbials. Certificates of Analysis (COA) available upon request.",
  },
  {
    question: "How is my order shipped?",
    answer:
      "All orders ship in plain, unmarked packaging to all 50 states, Canada, UK, and worldwide. We offer free shipping on orders over $100. Tracking information provided upon shipment. Most orders process within 1-2 business days with delivery in 3-7 days.",
  },
  {
    question: "Do you offer a satisfaction guarantee?",
    answer:
      "Yes! We stand behind our products with a 30-day money-back guarantee. If you're not satisfied for any reason, contact our support team for a full refund or replacement.",
  },
]

export function FAQSection() {
  return (
    <section className="py-10 md:py-12">
      <div className="mx-auto px-4 w-[85%]">
        <div className="text-center mb-9">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, dosing, and legality.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
