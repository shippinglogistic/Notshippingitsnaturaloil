import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { COAClient } from "./coa-client"

export const metadata: Metadata = {
  title: "Certificates of Analysis (COA) | Lab-Tested RSO & FECO Products",
  description:
    "View lab-tested certificates of analysis for all our premium RSO, FECO, tinctures, and cannabis products. Third-party tested for potency, purity, and safety.",
  keywords: [
    "certificate of analysis",
    "COA",
    "lab tested",
    "third party testing",
    "RSO lab results",
    "cannabis testing",
    "potency testing",
    "quality assurance",
    "product testing",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/certificates-of-analysis",
  },
  openGraph: {
    title: "Certificates of Analysis (COA) | Lab-Tested Products",
    description: "View all certificates of analysis for our premium cannabis products",
    url: "https://naturalcannabisoil.shop/certificates-of-analysis",
    type: "website",
  },
}

export default function CertificatesOfAnalysisPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <COAClient />
      </main>
      <Footer />
    </div>
  )
}
