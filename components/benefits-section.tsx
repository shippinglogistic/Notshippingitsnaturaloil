import { Activity, Brain, Moon, Heart, Shield, Leaf } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Activity,
      title: "Natural Pain Relief",
      description: "Manage chronic pain naturally with high-potency full-spectrum extracts.",
    },
    {
      icon: Heart,
      title: "Nausea & Appetite Support",
      description: "Relief from nausea and natural appetite stimulation.",
    },
    {
      icon: Moon,
      title: "Better Sleep Quality",
      description: "Achieve restful, rejuvenating sleep naturally.",
    },
    {
      icon: Brain,
      title: "Stress & Anxiety Relief",
      description: "Calm your mind with full-spectrum wellness products.",
    },
    {
      icon: Leaf,
      title: "Organic & Natural",
      description: "100% organic whole-plant extracts with no additives.",
    },
    {
      icon: Shield,
      title: "Lab-Tested Purity",
      description: "Third-party verified for safety and potency.",
    },
  ]

  return (
    <section className="py-12 md:py-18">
      <div className="mx-auto px-4 w-[85%]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Transform Your Wellness Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the profound benefits of premium Rick Simpson Oil and Full Extract Cannabis Oil.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-amber-50/30 to-transparent border border-border hover:border-amber-500/30 transition-all"
            >
              <div className="shrink-0 p-3 rounded-lg bg-amber-600/20 h-fit">
                <benefit.icon className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Multiple Convenient Forms
            </h3>
            <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
              Choose from premium syringes, capsules, tinctures, and edibles. Every product is lab-tested with discreet
              shipping to all 50 states, Canada, UK, and worldwide. Find the perfect delivery method for your wellness
              routine.
            </p>
            <ul className="space-y-4">
              {[
                "Syringes for precise dosing",
                "Easy-to-swallow capsules",
                "Fast-acting tinctures",
                "Delicious gummies",
              ].map((item) => (
                <li key={item} className="text-base font-medium text-foreground flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
