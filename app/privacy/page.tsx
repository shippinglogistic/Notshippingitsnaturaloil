import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Natural Cannabis Oil - Data Protection",
  description:
    "Privacy policy for NaturalCannabisOil.shop. Learn how we protect your data when buying RSO, FECO & cannabis products. GDPR & CCPA compliant. Secure ordering.",
  alternates: {
    canonical: "https://naturalcannabisoil.shop/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Natural Cannabis Oil",
    description: "Learn how we protect your personal information. GDPR and CCPA compliant data protection.",
    url: "https://naturalcannabisoil.shop/privacy",
    siteName: "Natural Cannabis Oil",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <BackButton href="/" label="Back to Home" className="mb-6" />

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-sm text-muted-foreground">Last Updated: December 5, 2024</p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
              <p>
                Natural Cannabis Oil ("we," "our," or "us") operates NaturalCannabisOil.shop. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website and
                purchase our products including{" "}
                <Link href="/products/rso" className="text-primary hover:underline">
                  RSO
                </Link>
                ,{" "}
                <Link href="/products/feco" className="text-primary hover:underline">
                  FECO
                </Link>
                ,{" "}
                <Link href="/products/tinctures" className="text-primary hover:underline">
                  tinctures
                </Link>
                , and{" "}
                <Link href="/edibles" className="text-primary hover:underline">
                  edibles
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create an account or place an order</li>
                <li>Subscribe to our newsletter</li>
                <li>
                  Contact us through our{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    contact form
                  </Link>
                </li>
                <li>Participate in promotions or surveys</li>
              </ul>
              <p className="mt-4">This information may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Age verification information</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our website and product offerings</li>
                <li>Comply with legal obligations including age verification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Information Sharing</h2>
              <p>We do not sell your personal information. We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment processors to complete transactions</li>
                <li>Shipping carriers to deliver your orders</li>
                <li>Service providers who assist our operations</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of
                transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Cookies</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and
                personalize content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Age Verification</h2>
              <p>
                Our products are intended for adults 21 years of age and older. We implement age verification measures
                and do not knowingly collect information from individuals under 21.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated
                "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please{" "}
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
