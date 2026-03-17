import type { Metadata } from "next"
import { ContactPageClient } from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Us | Natural Cannabis Oil - Get Expert Help",
  description:
    "Contact Natural Cannabis Oil for expert help with RSO, FECO & cannabis products. Available Mon-Fri 9AM-6PM PST. Email: info@naturalcannabisoil.shop. 24hr response.",
  keywords: [
    "contact natural cannabis oil",
    "cannabis oil support",
    "RSO questions",
    "FECO help",
    "cannabis oil customer service",
    "buy cannabis oil help",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/contact",
  },
  openGraph: {
    title: "Contact Us | Natural Cannabis Oil",
    description: "Get expert help with RSO, FECO, and cannabis products. Our team responds within 24 hours.",
    url: "https://naturalcannabisoil.shop/contact",
    siteName: "Natural Cannabis Oil",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
