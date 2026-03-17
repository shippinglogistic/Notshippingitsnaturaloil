import Link from "next/link"
import { Droplets, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-[#1a3a2a] text-white">
      <div className="mx-auto px-4 py-12 w-[85%]">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Droplets className="h-6 w-6 text-emerald-400" />
              <span className="font-serif text-lg font-semibold text-white">Natural Cannabis Oil</span>
            </div>
            <p className="text-sm text-emerald-100/70 leading-relaxed">
              Premium RSO and FECO products for natural wellness. Lab-tested Rick Simpson Oil and Full Extract Cannabis
              Oil you can trust.
            </p>
            <div className="pt-2">
              <p className="text-xs font-medium text-emerald-100 mb-2">We Accept:</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-white/10 rounded text-emerald-100">PayPal</span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded text-emerald-100">Bitcoin</span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded text-emerald-100">Chime</span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded text-emerald-100">Zelle</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Shop Products</h3>
            <ul className="space-y-2 text-sm text-emerald-100/70">
              <li>
                <Link href="/buy-rso-online" className="hover:text-white transition-colors">
                  Buy RSO Oil Online
                </Link>
              </li>
              <li>
                <Link href="/buy-feco-oil-online" className="hover:text-white transition-colors">
                  Buy FECO Oil Online
                </Link>
              </li>
              <li>
                <Link href="/products/rso" className="hover:text-white transition-colors">
                  All RSO Products
                </Link>
              </li>
              <li>
                <Link href="/products/feco" className="hover:text-white transition-colors">
                  All FECO Products
                </Link>
              </li>
              <li>
                <Link href="/rick-simpson-oil" className="hover:text-white transition-colors">
                  What is RSO?
                </Link>
              </li>
              <li>
                <Link href="/full-extract-cannabis-oil" className="hover:text-white transition-colors">
                  What is FECO?
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Learning Center</h3>
            <ul className="space-y-2 text-sm text-emerald-100/70">
              <li>
                <Link href="/rso-dosage-guide" className="hover:text-white transition-colors">
                  RSO Dosage Guide
                </Link>
              </li>
              <li>
                <Link href="/feco-dosage-guide" className="hover:text-white transition-colors">
                  FECO Dosage Guide
                </Link>
              </li>
              <li>
                <Link href="/rso-vs-feco" className="hover:text-white transition-colors">
                  RSO vs FECO Comparison
                </Link>
              </li>
              <li>
                <Link href="/patient-guide" className="hover:text-white transition-colors">
                  Patient Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Cannabis Oil Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-emerald-100/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a href="mailto:info@naturalcannabisoil.shop" className="hover:text-white transition-colors">
                  info@naturalcannabisoil.shop
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <a href="tel:+12135623850" className="hover:text-white transition-colors">
                  +1 (213) 562-3850
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>Los Angeles, CA</span>
              </li>
            </ul>
            <div className="pt-4">
              <h4 className="text-sm font-medium text-white mb-2">Newsletter</h4>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-emerald-100/50"
                />
                <Button type="submit" size="sm" className="bg-emerald-600 hover:bg-emerald-500 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-emerald-100/60 text-center leading-relaxed max-w-4xl mx-auto mb-4">
            Buy RSO oil online, FECO oil for sale, Rick Simpson Oil, full extract cannabis oil, premium cannabis
            extracts, lab-tested cannabis oils. These products are not intended to diagnose, treat, cure, or prevent any
            disease. Effects vary by individual. Consult a healthcare professional before use. Must be 21+ to purchase.
            All products ship discreetly.
          </p>
          <p className="text-xs text-emerald-100/60 text-center">
            © {new Date().getFullYear()} Natural Cannabis Oil | naturalcannabisoil.shop | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
