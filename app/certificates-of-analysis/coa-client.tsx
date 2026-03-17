"use client"

import { useState } from "react"
import { FileText, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const certificatesData = [
  {
    id: 1,
    productName: "RSO Syringe - Indica",
    strain: "Indica",
    thcPercent: 71.9,
    cbdPercent: 0.182,
    testDate: "01/13/25",
    batchDate: "01/07/2025",
    labName: "Modern Canna, LLC",
    url: "/pdfs/indica-RSO-Syringe.pdf",
  },
  {
    id: 2,
    productName: "RSO Syringe - Sativa",
    strain: "Sativa",
    thcPercent: 72.7,
    cbdPercent: 0.173,
    testDate: "01/14/25",
    batchDate: "01/10/2025",
    labName: "Modern Canna, LLC",
    url: "/pdfs/Sativa-RSO-Syringe.pdf",
  },
  {
    id: 3,
    productName: "RSO Syringe - Hybrid",
    strain: "Hybrid",
    thcPercent: 74.2,
    cbdPercent: 0.243,
    testDate: "01/14/25",
    batchDate: "01/10/2025",
    labName: "Modern Canna, LLC",
    url: "/pdfs/Hybrid-RSO-Syringe.pdf",
  },
  {
    id: 4,
    productName: "RSO Tincture - Mandarin Orange",
    strain: "Indica-leaning Hybrid",
    thcPercent: 2.11,
    cbdPercent: 0.00479,
    testDate: "01/16/25",
    batchDate: "01/10/2025",
    labName: "Modern Canna, LLC",
    url: "/pdfs/Mandarin-Orange-RSO-Tincture.pdf",
  },
  {
    id: 5,
    productName: "RSO Tincture - Mint",
    strain: "Hybrid",
    thcPercent: 2.16,
    cbdPercent: 0.00676,
    testDate: "02/26/25",
    batchDate: "02/20/2025",
    labName: "Modern Canna, LLC",
    url: "/pdfs/Mint-rso-tincture.pdf",
  },
  {
    id: 6,
    productName: "RSO Tincture - Pineapple",
    strain: "Sativa-leaning Hybrid",
    thcPercent: 2.25,
    cbdPercent: 0.00532,
    testDate: "02/03/25",
    batchDate: "01/28/2025",
    labName: "Modern Canna, LLC",
    url: "/pdfs/Pineapple-RSO-Tincture.pdf",
  },
]

export function COAClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificatesData)[0] | null>(null)

  const filteredCertificates = certificatesData.filter(
    (cert) =>
      cert.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.strain.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto px-4 w-[85%]">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certificates of Analysis</h1>
            <p className="text-lg text-muted-foreground">
              All our products are lab-tested by third-party laboratories. Download or view the certificates of analysis
              for quality assurance and transparency.
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <Input
              placeholder="Search by product name or strain..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 text-base"
            />
          </div>

          {/* Certificates List */}
          <div className="space-y-4">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{cert.productName}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <Badge variant="outline" className="font-medium">
                        {cert.strain}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">{cert.thcPercent}% THC</span>
                        <span className="mx-2">•</span>
                        <span className="font-semibold text-accent">{cert.cbdPercent}% CBD</span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>Test Date: {cert.testDate}</div>
                      <div>Batch Date: {cert.batchDate}</div>
                      <div>Lab: {cert.labName}</div>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:flex-col">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 bg-transparent"
                      onClick={() => setSelectedCertificate(cert)}
                    >
                      <Eye className="h-4 w-4" />
                      <span className="hidden sm:inline">View</span>
                    </Button>
                    <Button size="sm" className="gap-2" asChild>
                      <a href={cert.url} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4" />
                        <span className="hidden sm:inline">Download</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCertificates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No certificates found matching your search.</p>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900">
            <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Third-Party Testing</h3>
            <p className="text-sm text-blue-800 dark:text-blue-400">
              All certificates are issued by independent, accredited laboratories. We test for cannabinoid potency,
              terpene profiles, pesticides, heavy metals, microbial contaminants, and residual solvents to ensure
              product quality and safety.
            </p>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-white dark:bg-slate-900">
              <h2 className="text-xl font-bold text-foreground">{selectedCertificate.productName}</h2>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
              >
                ✕
              </button>
            </div>
            <iframe src={selectedCertificate.url} className="w-full h-[70vh]" title={selectedCertificate.productName} />
          </div>
        </div>
      )}
    </section>
  )
}
