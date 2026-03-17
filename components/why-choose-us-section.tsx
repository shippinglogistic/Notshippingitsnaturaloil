import { Shield, Beaker, Award, Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Beaker,
    title: "Full Spectrum Extracts",
    description: "RSO and FECO preserve natural cannabinoids.",
  },
  {
    icon: Shield,
    title: "Precise Syringe Dosing",
    description: "RSO syringes allow accurate dispensing.",
  },
  {
    icon: Award,
    title: "Premium Cannabis Oil",
    description: "Carefully prepared cannabis extracts.",
  },
  {
    icon: Package,
    title: "Trusted Online Store",
    description: "Reliable source for RSO and FECO oil.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-12 md:py-14 bg-muted/30">
      <div className="mx-auto px-4 w-[85%]">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our RSO and FECO Products?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our store provides premium Rick Simpson Oil (RSO) and Full Extract Cannabis Oil (FECO) products designed for quality, consistency, and convenient dosing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="p-2 rounded-lg bg-primary/10 mb-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
