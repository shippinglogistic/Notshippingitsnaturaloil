import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { Beaker, Shield, Leaf, Heart, Droplets, Pill } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Natural Cannabis Oil - Premium RSO & FECO Since 2020",
  description:
    "Learn about Natural Cannabis Oil - your trusted source for premium, lab-tested RSO and FECO cannabis extracts since 2020. Quality commitment & expert support.",
  keywords: [
    "about Natural Cannabis Oil",
    "cannabis oil company",
    "RSO manufacturer",
    "FECO producer",
    "lab-tested cannabis",
    "premium cannabis extracts",
    "trusted cannabis supplier",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/about",
  },
  openGraph: {
    title: "About Natural Cannabis Oil | Premium RSO & FECO",
    description: "Your trusted source for lab-tested RSO, FECO, and cannabis extracts. Quality commitment since 2020.",
    url: "https://naturalcannabisoil.shop/about",
    siteName: "Natural Cannabis Oil",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto px-4 py-16 w-[85%]">
          <BackButton href="/" label="Back to Home" className="mb-6" />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">About Natural Cannabis Oil</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At NaturalCannabisOil.shop, we are dedicated to providing premium, lab-tested cannabis products that
              support your wellness journey. We specialize in{" "}
              <Link href="/products/rso" className="text-primary hover:underline">
                RSO (Rick Simpson Oil)
              </Link>{" "}
              and{" "}
              <Link href="/products/feco" className="text-primary hover:underline">
                FECO (Full Extract Cannabis Oil)
              </Link>
              , offering the highest quality full-spectrum extracts for natural relief.
            </p>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
              Our Commitment to Quality
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Beaker className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Lab Tested</h3>
                <p className="text-muted-foreground text-sm">
                  Every product undergoes rigorous third-party testing for purity, potency, and safety. View our{" "}
                  <Link href="/blog" className="text-primary hover:underline">
                    blog
                  </Link>{" "}
                  for more information.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Quality Assured</h3>
                <p className="text-muted-foreground text-sm">
                  We source only from licensed, reputable cultivators who share our commitment to excellence.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Natural Ingredients</h3>
                <p className="text-muted-foreground text-sm">
                  Our products are made with natural, high-quality ingredients without harmful additives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
            Understanding RSO vs. FECO
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">RSO (Rick Simpson Oil)</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  RSO is a potent full-spectrum cannabis extract named after its creator, Rick Simpson. Known for its
                  high THC content and therapeutic potential.{" "}
                  <Link href="/products/rso" className="text-primary hover:underline">
                    Shop RSO products
                  </Link>
                  .
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">RSO Syringes:</strong> Pure, concentrated oil for precise
                      dosing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">RSO Tinctures:</strong> Easy sublingual administration.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">RSO Capsules:</strong> Convenient, pre-measured doses.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">RSO Gummies:</strong> Tasty, discreet consumption.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">RSO Suppositories:</strong> Alternative delivery method.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Pill className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">FECO (Full Extract Cannabis Oil)</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  FECO is made with food-grade ethanol, preserving the full spectrum of cannabinoids and terpenes.
                  Available in various ratios.{" "}
                  <Link href="/products/feco" className="text-primary hover:underline">
                    Browse FECO products
                  </Link>
                  .
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">FECO Syringes:</strong> Concentrated full-spectrum extract.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">FECO Tinctures:</strong> Versatile, easy dosing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">FECO Capsules:</strong> Consistent, measured doses.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">FECO Edibles:</strong> Delicious infused treats.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">FECO Suppositories:</strong> Alternative absorption method.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">Supportive Care, Not a Cure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our products are designed to support your wellness and provide relief from various symptoms. While many
                customers find significant benefit from cannabis products, they are not intended as a cure for any
                medical condition. Read our{" "}
                <Link href="/patient-guide" className="text-primary hover:underline">
                  patient guide
                </Link>{" "}
                for more information.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We always recommend consulting with a healthcare professional before incorporating cannabis products
                into your wellness routine, especially if you are taking other medications or have underlying health
                conditions.{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact us
                </Link>{" "}
                with any questions.
              </p>
              <p className="text-sm text-muted-foreground mt-8 italic">
                Effects vary by individual. Start with a low dose and increase gradually to find what works best for
                you.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
