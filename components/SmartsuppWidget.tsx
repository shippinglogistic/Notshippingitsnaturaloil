"use client"

import { useEffect } from "react"

export function SmartSuppWidget() {
  useEffect(() => {
    // Initialize SmartSupp configuration
    window._smartsupp = window._smartsupp || {}
    window._smartsupp.key = 'a9438b30f1a416acb20d37824921a765b7bed2fc'

    // Load SmartSupp chat loader
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.async = true
    script.charset = "utf-8"
    script.src = "https://www.smartsuppchat.com/loader.js?"

    document.body.appendChild(script)

    return () => {
      // Cleanup if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}
