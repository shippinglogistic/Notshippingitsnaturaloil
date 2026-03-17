"use client"

import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "1",
    emoji: "🌾",
    title: "Start with rice-grain dose",
    description: "Begin low for tolerance"
  },
  {
    number: "2",
    emoji: "💉",
    title: "Dispense with syringe",
    description: "Precise RSO or FECO dosing"
  },
  {
    number: "3",
    emoji: "📈",
    title: "Increase gradually",
    description: "Adjust as needed over time"
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20 bg-amber-50/30">
      <div className="mx-auto px-4 w-[85%]">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">How to Use RSO & FECO</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Simple steps for safe and effective use of Rick Simpson Oil and Full Extract Cannabis Oil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((step) => (
            <Card key={step.number} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">{step.emoji}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold mb-3 text-sm">
                  Step {step.number}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
