"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ShoppingCart,
  Menu,
  Search,
  X,
  ChevronRight,
  Home,
  Beaker,
  BookOpen,
  Users,
  Phone,
  FileText,
  FlaskConical,
  Droplet,
  MessageCircle,
} from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"

export function Header() {
  const { totalItems } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products/rso", label: "RSO Products", icon: Beaker },
    { href: "/products/feco", label: "FECO Products", icon: FlaskConical },
    { href: "/rick-simpson-oil", label: "What is RSO?", icon: Droplet },
    { href: "/full-extract-cannabis-oil", label: "What is FECO?", icon: Droplet },
    { href: "/rso-dosage-guide", label: "RSO Guide", icon: FileText },
    { href: "/feco-dosage-guide", label: "FECO Guide", icon: FileText },
    { href: "/about", label: "About", icon: Users },
    { href: "/contact", label: "Contact", icon: Phone },
  ]

  return (
    <>
      <div className="bg-amber-500 text-black text-center py-2 px-4 text-sm font-medium">
        <ShoppingCart className="inline-block h-4 w-4 mr-2 -mt-0.5" />
        Get 15% discount when you pay with Bitcoin | Minimum Order: $200 | Free Shipping on Orders Over $500
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-[#1a3a2a]">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Rick Simpson Oil for Cancer Logo"
              width={240}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-emerald-100/80 transition-colors hover:text-amber-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/search" className="hidden md:flex">
              <Button variant="ghost" size="icon" className="text-emerald-100 hover:text-amber-400 hover:bg-white/10">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </Link>

            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-emerald-100 hover:text-amber-400 hover:bg-white/10">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs text-black font-bold">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-emerald-100 hover:text-amber-400 hover:bg-white/10"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#0f2a1e] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-4 border-b border-emerald-800">
              <Image src="/logo.svg" alt="Rick Simpson Oil for Cancer" width={160} height={40} className="h-8 w-auto" />
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-6 py-4 text-gray-200 hover:bg-emerald-900/50 hover:text-amber-400 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-emerald-900/50 group-hover:bg-amber-500/20">
                        <Icon className="h-5 w-5 text-emerald-400 group-hover:text-amber-400" />
                      </div>
                      <span className="text-lg font-medium">{link.label}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-amber-400" />
                  </Link>
                )
              })}
            </nav>

            <div className="p-4 border-t border-emerald-800 space-y-3">
              <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                <Link href="/products/rso" onClick={() => setMobileMenuOpen(false)}>
                  Shop RSO Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
