"use client"

import { useEffect, useState } from "react"

export default function TawkWidget() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Check if Tawk widget already loaded
    if (document.getElementById("tawk-widget")) {
      return
    }

    // Initialize Tawk API globals before loading script
    ;(window as any).Tawk_API = (window as any).Tawk_API || {}
    ;(window as any).Tawk_LoadStart = new Date()

    const script = document.createElement("script")
    script.id = "tawk-widget"
    script.async = true
    script.src = "https://embed.tawk.to/693f60bd7bdcd2197d981cc4/1jcfp3pac"
    script.type = "text/javascript"
    script.charset = "UTF-8"
    script.setAttribute("crossorigin", "*")

    script.onload = () => {
      // Tawk widget loaded successfully
    }

    script.onerror = () => {
      // Failed to load Tawk widget
    }

    if (document.body) {
      document.body.appendChild(script)
    }
  }, [isClient])

  if (!isClient) return null

  return null
}
