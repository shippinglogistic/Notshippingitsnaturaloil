import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import {
  Stethoscope,
  FlaskConical,
  Scale,
  Clock,
  BookOpen,
  AlertTriangle,
  Heart,
  TrendingUp,
  CheckCircle2,
  Pill,
  Droplets,
  Cookie,
  Moon,
  Utensils,
  Activity,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Patient Guide | Natural Cannabis Oil - Safe Cannabis Usage Guide 2025",
  description:
    "Complete patient guide for safe cannabis use. Step-by-step RSO & FECO dosing, safety tips, what to expect. Expert guidance for medical cannabis users. Updated 2025.",
  keywords: [
    "cannabis patient guide",
    "RSO dosing guide",
    "FECO usage instructions",
    "cannabis for patients",
    "medical cannabis guide",
    "how to use RSO",
    "safe cannabis dosing",
    "cannabis beginner guide",
    "medical marijuana guide",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/patient-guide",
  },
  openGraph: {
    title: "Patient Guide | Natural Cannabis Oil",
    description: "Complete guide for safe cannabis oil usage. Dosing, safety tips, and what to expect. Updated 2025.",
    url: "https://naturalcannabisoil.shop/patient-guide",
    siteName: "Natural Cannabis Oil",
  },
}

const steps = [
  {
    number: 1,
    title: "Consult Your Healthcare Team",
    icon: Stethoscope,
    description:
      "Before starting any cannabis regimen, speak with your oncologist or palliative care team. They can advise on potential interactions with your current treatments.",
    tips: [
      "Bring a list of all current medications",
      "Ask about timing relative to chemotherapy sessions",
      "Discuss your specific symptoms and goals",
      "Request written recommendations if available in your jurisdiction",
    ],
  },
  {
    number: 2,
    title: "Choose Your Product Type",
    icon: FlaskConical,
    description:
      "Different products work better for different symptoms. Understanding the options helps you make an informed choice.",
    tips: [
      "Oils/Tinctures: Fast-acting (15-45 min), good for acute nausea or breakthrough pain",
      "Capsules: Precise dosing, longer-lasting (4-8 hours), ideal for sustained relief",
      "Edibles: Slower onset (1-2 hours), longest duration, good for appetite and sleep",
      "RSO/FECO: Full-spectrum, potent options for severe symptoms",
    ],
  },
  {
    number: 3,
    title: "Start Low, Go Slow",
    icon: Scale,
    description:
      "This is the golden rule of cannabis medicine. Begin with the lowest effective dose and gradually increase over days or weeks.",
    tips: [
      "Start with 2.5-5mg THC for beginners",
      "Wait at least 2 hours after edibles before considering more",
      "Increase by 2.5mg increments every 2-3 days",
      "Keep a symptom journal to track what works",
    ],
  },
  {
    number: 4,
    title: "Time Your Doses",
    icon: Clock,
    description: "Strategic timing maximizes benefits and minimizes unwanted effects during important activities.",
    tips: [
      "For nausea: Take 30-60 minutes before meals or chemotherapy",
      "For sleep: Take 1-2 hours before bedtime",
      "For pain: Maintain consistent dosing schedule",
      "For appetite: Time with meal schedules",
    ],
  },
  {
    number: 5,
    title: "Track Your Response",
    icon: BookOpen,
    description: "Keeping detailed notes helps you and your healthcare team optimize your regimen over time.",
    tips: [
      "Record product, dose, time, and effects",
      "Note symptom relief on a 1-10 scale",
      "Track any side effects experienced",
      "Identify patterns over 2-4 weeks",
    ],
  },
  {
    number: 6,
    title: "Adjust and Optimize",
    icon: TrendingUp,
    description: "Based on your tracking, work with your care team to fine-tune your approach for best results.",
    tips: [
      "Share your journal with your healthcare provider",
      "Consider ratio adjustments (THC:CBD)",
      "Try different consumption methods if needed",
      "Be patient - finding optimal dose takes time",
    ],
  },
]

const symptomGuides = [
  {
    symptom: "Pain Management",
    icon: Activity,
    color: "text-red-600",
    bgColor: "bg-red-50",
    recommendations: [
      "RSO or FECO for severe pain",
      "Balanced THC:CBD ratios work well",
      "Consider tinctures for breakthrough pain",
      "Capsules for sustained, all-day relief",
    ],
    startingDose: "5mg THC + 5mg CBD",
  },
  {
    symptom: "Nausea & Vomiting",
    icon: Pill,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    recommendations: [
      "Tinctures for fast-acting relief",
      "Gummies between chemotherapy sessions",
      "Lower THC doses often sufficient",
      "Take preventatively before treatments",
    ],
    startingDose: "2.5-5mg THC",
  },
  {
    symptom: "Appetite Stimulation",
    icon: Utensils,
    color: "text-green-600",
    bgColor: "bg-green-50",
    recommendations: [
      "Edibles often most effective",
      "Baked goods stimulate appetite well",
      "Time 30-60 minutes before meals",
      "THC-dominant products work best",
    ],
    startingDose: "2.5-5mg THC",
  },
  {
    symptom: "Sleep Support",
    icon: Moon,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    recommendations: [
      "Capsules or edibles for duration",
      "Indica-leaning products preferred",
      "Take 1-2 hours before bed",
      "Consistent nightly dosing helps",
    ],
    startingDose: "5-10mg THC",
  },
  {
    symptom: "Anxiety Relief",
    icon: Heart,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    recommendations: [
      "Start with CBD-dominant products",
      "Low THC doses (high can increase anxiety)",
      "Tinctures for quick relief",
      "Gummies for sustained calm",
    ],
    startingDose: "10mg CBD + 2.5mg THC",
  },
]

export default function PatientGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <BackButton href="/" label="Back to Home" className="mb-6" />
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
                Patient Guide to Cannabis for Supportive Care
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A step-by-step approach to safely incorporating cannabis products into your wellness routine during
                cancer treatment. This guide is about helping you feel better - managing symptoms and improving quality
                of life.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-4 max-w-xl mx-auto">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
                <span>
                  This guide is for educational purposes. Always consult your healthcare provider before starting any
                  new treatment.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* What Cannabis Can Help With */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-4">
              How Cannabis Can Help Cancer Patients
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Cannabis is not a cure, but research and patient experiences show it can significantly help manage
              treatment side effects and improve daily comfort.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Activity,
                  label: "Pain Relief",
                  desc: "Reduces chronic and acute pain from cancer and treatments",
                },
                { icon: Pill, label: "Nausea Control", desc: "Eases chemotherapy-induced nausea and vomiting" },
                {
                  icon: Utensils,
                  label: "Appetite Boost",
                  desc: "Stimulates appetite to maintain nutrition and weight",
                },
                { icon: Moon, label: "Better Sleep", desc: "Improves sleep quality and helps with insomnia" },
                { icon: Heart, label: "Anxiety Relief", desc: "Calms anxiety and promotes emotional wellbeing" },
                {
                  icon: CheckCircle2,
                  label: "Quality of Life",
                  desc: "Overall improvement in daily comfort and function",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step by Step Guide */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-4">
              Your 6-Step Getting Started Guide
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Follow these steps to safely and effectively incorporate cannabis into your supportive care routine.
            </p>
            <div className="max-w-4xl mx-auto space-y-6">
              {steps.map((step) => (
                <Card key={step.number} className="overflow-hidden">
                  <CardHeader className="bg-primary/5 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2 text-xl">
                          <step.icon className="h-5 w-5 text-primary" />
                          {step.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Symptom-Specific Recommendations */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-4">
            Symptom-Specific Recommendations
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Different symptoms respond best to different products and approaches. Here are targeted recommendations for
            common concerns.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {symptomGuides.map((guide) => (
              <Card key={guide.symptom} className="overflow-hidden">
                <CardHeader className={`${guide.bgColor} pb-4`}>
                  <CardTitle className="flex items-center gap-2">
                    <guide.icon className={`h-5 w-5 ${guide.color}`} />
                    <span className="text-foreground">{guide.symptom}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <ul className="space-y-2">
                    {guide.recommendations.map((rec, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className={`h-4 w-4 ${guide.color} shrink-0 mt-0.5`} />
                        <span className="text-muted-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">
                      <strong>Suggested starting dose:</strong> {guide.startingDose}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Product Comparison */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
              Quick Product Comparison
            </h2>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Product Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Onset Time</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-primary" />
                      Tinctures
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">15-45 minutes</td>
                    <td className="py-3 px-4 text-muted-foreground">4-6 hours</td>
                    <td className="py-3 px-4 text-muted-foreground">Acute nausea, breakthrough pain</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <Pill className="h-4 w-4 text-primary" />
                      Capsules
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">30-90 minutes</td>
                    <td className="py-3 px-4 text-muted-foreground">6-8 hours</td>
                    <td className="py-3 px-4 text-muted-foreground">Sustained pain relief, daily management</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <Cookie className="h-4 w-4 text-primary" />
                      Edibles
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">1-2 hours</td>
                    <td className="py-3 px-4 text-muted-foreground">6-10 hours</td>
                    <td className="py-3 px-4 text-muted-foreground">Sleep, appetite, long-lasting relief</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <FlaskConical className="h-4 w-4 text-primary" />
                      RSO/FECO
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">1-2 hours</td>
                    <td className="py-3 px-4 text-muted-foreground">8-12 hours</td>
                    <td className="py-3 px-4 text-muted-foreground">Severe symptoms, high tolerance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">Important Safety Tips</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Drug Interactions",
                  desc: "Cannabis can interact with certain medications, including some chemotherapy drugs. Always inform your medical team.",
                },
                {
                  title: "Avoid Driving",
                  desc: "Do not drive or operate heavy machinery while using THC products. Plan accordingly.",
                },
                {
                  title: "Store Safely",
                  desc: "Keep all cannabis products in child-resistant containers, away from children and pets.",
                },
                {
                  title: "Stay Hydrated",
                  desc: "Cannabis can cause dry mouth. Drink plenty of water, especially during treatment.",
                },
                {
                  title: "Start on Rest Days",
                  desc: "Begin your cannabis journey on days without important appointments or treatments.",
                },
                {
                  title: "Have Support",
                  desc: "Have a trusted person nearby when trying new products or doses, especially at first.",
                },
              ].map((tip) => (
                <div key={tip.title} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">Ready to Get Started?</h2>
              <p className="text-muted-foreground">
                Browse our carefully curated selection of lab-tested cannabis oils and edibles, chosen specifically for
                their therapeutic potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/oils">
                    <Droplets className="mr-2 h-5 w-5" />
                    Shop Oils
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/edibles">
                    <Cookie className="mr-2 h-5 w-5" />
                    Shop Edibles
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Questions?{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact us
                </Link>{" "}
                or speak with your healthcare provider.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
