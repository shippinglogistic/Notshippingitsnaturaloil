import { ShieldCheck, CreditCard, Truck, Award, Users, Clock, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Secure SSL Encryption",
      description: "Your data is 100% protected",
    },
    {
      icon: CreditCard,
      title: "Safe Payments",
      description: "Multiple payment options accepted",
    },
    {
      icon: Truck,
      title: "Fast Free Delivery",
      description: "Same-day shipping on all orders",
    },
    {
      icon: Award,
      title: "Lab Tested Quality",
      description: "Third-party verified purity",
    },
    {
      icon: Users,
      title: "Expert Support 24/7",
      description: "Dedicated wellness specialists",
    },
    {
      icon: Clock,
      title: "30-Day Guarantee",
      description: "Money-back if not satisfied",
    },
  ]

  const whyChooseFeatures = [
    {
      title: "Full-spectrum extracts",
      description: "For enhanced benefits through natural synergy",
    },
    {
      title: "Lab-tested",
      description: "For potency, purity, and safety",
    },
    {
      title: "Multiple formats",
      description: "Syringes, capsules, topicals, and more",
    },
    {
      title: "Competitive pricing",
      description: "Affordable RSO price and FECO price options",
    },
    {
      title: "Discreet shipping",
      description: "Fast delivery to all 50 states, Canada, UK, and worldwide",
    },
  ]

  const usageMethods = [
    {
      title: "Oral/sublingual",
      description: "Long-lasting effects",
    },
    {
      title: "Topical",
      description: "Localized relief",
    },
    {
      title: "Added to edibles",
      description: "Convenient dosing in food",
    },
  ]

  return (
    <section className="py-10 md:py-14 border-y border-border bg-gradient-to-r from-background via-amber-50/3 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Premium Quality Guaranteed</h2>
          <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
            At Natural Cannabis Oil, we're committed to exceptional quality and customer satisfaction. Every product
            undergoes rigorous third-party testing and is backed by our satisfaction guarantee.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-12">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex gap-4 p-5 md:p-6 rounded-xl bg-card border border-border hover:border-amber-500/30 transition-colors"
            >
              <div className="shrink-0 p-3 rounded-lg bg-amber-600/15">
                <badge.icon className="h-5 w-5 text-amber-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">{badge.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto my-16 bg-amber-50/30 rounded-2xl p-6 md:p-10 border border-border">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Why Choose Our RSO and FECO Products?
          </h3>
          <div className="mb-8 relative w-full h-auto min-h-screen rounded-xl overflow-hidden">
            <Image
              src="/professional-extract-display.jpg"
              alt="Lab-tested cannabis extracts professional display"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 800px"
            />
          </div>
          <ul className="space-y-4">
            {whyChooseFeatures.map((feature) => (
              <li key={feature.title} className="flex gap-4">
                <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-2" />
                <div>
                  <span className="font-semibold text-foreground">{feature.title}</span>
                  <span className="text-foreground/70"> → {feature.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-4xl mx-auto my-12 bg-blue-50/30 rounded-2xl p-6 md:p-10 border border-border">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            How to Use RSO and FECO Safely
          </h3>
          <div className="mb-8 relative w-full h-auto min-h-screen rounded-xl overflow-hidden">
            <Image
              src="/dosage-preparation-syringes.jpg"
              alt="RSO and FECO preparation and dosage guide"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 800px"
            />
          </div>
          <div className="mb-8">
            <h4 className="font-semibold text-lg text-foreground mb-4">Always start low and go slow:</h4>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span className="text-foreground/80">Begin with a rice-grain-sized dose</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span className="text-foreground/80">Increase gradually over weeks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span className="text-foreground/80">
                  Consult a healthcare professional for personalized RSO dosage or FECO dosage
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-foreground mb-4">Common methods:</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {usageMethods.map((method) => (
                <div key={method.title} className="p-4 rounded-lg bg-card border border-border">
                  <p className="font-semibold text-foreground text-sm mb-1">{method.title}</p>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm md:text-base text-foreground font-medium mb-6">Secure Payment Methods</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {["Apple Pay", "PayPal", "Bitcoin", "Chime", "Zelle"].map((method) => (
              <div
                key={method}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-card rounded-full border border-border hover:border-amber-500/30 transition-colors"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
                <span className="text-sm font-medium text-foreground">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
