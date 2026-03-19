"use client"

import { useEffect } from "react"

export default function SmartSuppWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Initialize Smartsupp
    const _smartsupp = (window as any)._smartsupp || {}
    _smartsupp.key = "a9438b30f1a416acb20d37824921a765b7bed2fc"
    ;(window as any)._smartsupp = _smartsupp

    // Load Smartsupp script
    if (!(window as any).smartsupp) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.charset = "utf-8"
      script.async = true
      script.src = "https://www.smartsuppchat.com/loader.js?"
      
      script.onload = () => {
        console.log("[v0] Smartsupp loaded successfully")
      }
      
      script.onerror = () => {
        console.error("[v0] Failed to load Smartsupp widget")
      }

      document.body.appendChild(script)

      return () => {
        try {
          if (document.body.contains(script)) {
            document.body.removeChild(script)
          }
        } catch (err) {
          console.warn("[v0] Error removing Smartsupp script:", err)
        }
      }
    }
  }, [])

  return null
}
