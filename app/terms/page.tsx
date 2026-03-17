import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Natural Cannabis Oil - Purchase Agreement",
  description:
    "Terms of Service for buying RSO, FECO & cannabis products at NaturalCannabisOil.shop. Purchase terms, shipping policy, refunds & legal compliance. Age 21+ required.",
  alternates: {
    canonical: "https://naturalcannabisoil.shop/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | Natural Cannabis Oil",
    description: "Purchase terms and conditions for cannabis oil products. Age 21+ required.",
    url: "https://naturalcannabisoil.shop/terms",
    siteName: "Natural Cannabis Oil",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <BackButton href="/" label="Back to Home" className="mb-6" />

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-sm text-muted-foreground">Last Updated: December 5, 2024</p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using NaturalCannabisOil.shop, you agree to be bound by these Terms of Service. If you
                do not agree to these terms, please do not use our website or purchase our products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Age Requirement</h2>
              <p>
                You must be at least 21 years of age to use this website and purchase products. By using our website,
                you represent and warrant that you are at least 21 years old. We reserve the right to verify your age
                and may refuse service if age cannot be verified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Products and Services</h2>
              <p>
                Natural Cannabis Oil offers cannabis products including{" "}
                <Link href="/products/rso" className="text-primary hover:underline">
                  RSO (Rick Simpson Oil)
                </Link>
                ,{" "}
                <Link href="/products/feco" className="text-primary hover:underline">
                  FECO (Full Extract Cannabis Oil)
                </Link>
                ,{" "}
                <Link href="/products/tinctures" className="text-primary hover:underline">
                  tinctures
                </Link>
                ,{" "}
                <Link href="/products/distillates" className="text-primary hover:underline">
                  distillates
                </Link>
                ,{" "}
                <Link href="/products/capsules" className="text-primary hover:underline">
                  capsules
                </Link>
                , and{" "}
                <Link href="/edibles" className="text-primary hover:underline">
                  edibles
                </Link>
                .
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Product Disclaimer</h3>
              <p>
                Our products are not intended to diagnose, treat, cure, or prevent any disease. These statements have
                not been evaluated by the FDA. Consult with a healthcare professional before using any cannabis product,
                especially if you have underlying health conditions or are taking medications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Legal Compliance</h2>
              <p>
                You are responsible for ensuring that the purchase and use of cannabis products complies with all
                applicable federal, state, and local laws in your jurisdiction. We ship only to locations where such
                products are legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Orders and Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All orders are subject to acceptance and availability</li>
                <li>Prices are subject to change without notice</li>
                <li>We accept PayPal, Bitcoin, Chime, and Zelle</li>
                <li>Payment must be received before order processing</li>
                <li>We reserve the right to refuse or cancel any order</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Shipping and Delivery</h2>
              <p>
                We provide discreet packaging and shipping. Delivery times vary based on location and shipping method
                selected. We are not responsible for delays caused by shipping carriers or customs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Returns and Refunds</h2>
              <p>
                Due to the nature of our products, we have a limited return policy. Please{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact us
                </Link>{" "}
                within 48 hours of receiving your order if there are any issues. Unopened products may be eligible for
                return or exchange.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Intellectual Property</h2>
              <p>
                All content on this website, including text, images, logos, and graphics, is owned by Natural Cannabis
                Oil and protected by copyright laws. You may not reproduce, distribute, or use any content without our
                written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Limitation of Liability</h2>
              <p>
                Natural Cannabis Oil shall not be liable for any indirect, incidental, special, or consequential damages
                arising from your use of our website or products. Our total liability shall not exceed the amount paid
                for the specific product in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Natural Cannabis Oil, its officers, directors, employees, and
                agents from any claims, damages, or expenses arising from your use of our website or violation of these
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Privacy</h2>
              <p>
                Your use of our website is also governed by our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms of Service by reference.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
                upon posting. Your continued use of the website constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">13. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact us
                </Link>
                :
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>Email: info@naturalcannabisoil.shop</li>
                <li>Phone: (555) 123-4567</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
