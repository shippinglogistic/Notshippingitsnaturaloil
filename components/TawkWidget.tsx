"use client"

import { useEffect } from "react"

/**
 * Tawk.to Live Chat Widget Component
 * Loads the Tawk.to chat widget on client-side only
 * Safe for Next.js 13+ App Router, Bun, and Vercel
 */
export default function TawkWidget() {
  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return

    // Check if Tawk is already loaded
    if ((window as any).Tawk_API) {
      return
    }

    // Create and inject Tawk script
    const script = document.createElement("script")
    script.src = "https://embed.tawk.to/693f60bd7bdcd2197d981cc4/1jcfp3pac"
    script.async = true
    script.charset = "UTF-8"
    script.setAttribute("crossorigin", "*")

    script.onload = () => {
      console.log("[Tawk] Widget loaded successfully")
    }

    script.onerror = () => {
      console.error("[Tawk] Failed to load widget")
    }

    // Append to body
    document.body.appendChild(script)

    // Cleanup function
    return () => {
      // Remove script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}
