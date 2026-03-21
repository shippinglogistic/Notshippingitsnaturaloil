"use client"

import { useEffect } from "react"

/**
 * SmartsuppWidget Component
 * 
 * This client-side component handles the initialization and loading of the Smartsupp live chat widget.
 * Benefits of this approach:
 * - Isolates chat widget logic from the main layout (better code organization)
 * - Ensures script only runs on client-side (prevents SSR issues)
 * - Easy to disable/enable by commenting out the component import
 * - Cleaner debugging with separate component file
 * 
 * Smartsupp Key: a9438b30f1a416acb20d37824921a765b7bed2fc
 * Widget loads from: https://www.smartsuppchat.com/loader.js
 * 
 * Note: Requires CSP header to allow script-src from https://www.smartsuppchat.com
 * Ad blockers may prevent widget from displaying on some browsers
 */
export default function SmartsuppWidget() {
  useEffect(() => {
    // Initialize Smartsupp chat widget
    const initSmartsupp = () => {
      try {
        // Initialize global Smartsupp API object if it doesn't exist
        if (typeof window !== "undefined") {
          ;(window as any)._smartsupp = (window as any)._smartsupp || {}
          ;(window as any)._smartsupp.key = "a9438b30f1a416acb20d37824921a765b7bed2fc"

          // Force widget to be visible (override any hide settings)
          ;(window as any)._smartsupp.hideWidget = false
          ;(window as any)._smartsupp.hideMobileWidget = false

          // Debug logging
          console.log("[v0] Smartsupp widget initialized with key: a9438b30f1a416acb20d37824921a765b7bed2fc")

          // Load Smartsupp script dynamically
          if (!(window as any).smartsupp) {
            const script = document.createElement("script")
            script.type = "text/javascript"
            script.charset = "utf-8"
            script.async = true
            script.src = "https://www.smartsuppchat.com/loader.js?"

            script.onload = () => {
              console.log("[v0] Smartsupp loader script loaded successfully")
            }

            script.onerror = () => {
              console.error("[v0] Failed to load Smartsupp loader script - check CSP headers and ad blocker settings")
            }

            const firstScript = document.getElementsByTagName("script")[0]
            if (firstScript && firstScript.parentNode) {
              firstScript.parentNode.insertBefore(script, firstScript)
            } else {
              document.body.appendChild(script)
            }
          } else {
            console.log("[v0] Smartsupp already initialized")
          }
        }
      } catch (error) {
        console.error("[v0] Error initializing Smartsupp widget:", error)
      }
    }

    // Initialize immediately on component mount
    initSmartsupp()

    // Cleanup function (optional)
    return () => {
      // Smartsupp doesn't need cleanup, but this is here for completeness
    }
  }, [])

  // This component renders nothing - it only handles side effects
  return null
}
