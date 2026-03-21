"use client"

import { useEffect, useState } from "react"

export default function TawkWidget() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    if (typeof window === "undefined") return

    // Check if Tawk is already loaded
    if ((window as any).Tawk_API) {
      return
    }

    // Your exact Tawk initialization script
    var Tawk_API = (window as any).Tawk_API || {}, Tawk_LoadStart = new Date()
    ;(window as any).Tawk_API = Tawk_API
    ;(window as any).Tawk_LoadStart = Tawk_LoadStart

    // IIFE to inject the script
    ;(function() {
      var s1 = document.createElement("script")
      s1.async = true
      s1.src = "https://embed.tawk.to/693f60bd7bdcd2197d981cc4/1jcfp3pac"
      s1.charset = "UTF-8"
      s1.setAttribute("crossorigin", "*")
      
      var s0 = document.getElementsByTagName("script")[0]
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0)
      } else {
        document.head.appendChild(s1)
      }
    })()
  }, [isClient])

  if (!isClient) return null

  return null
}
