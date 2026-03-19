"use client"

import { useEffect, useRef } from "react"

export default function ChatWayWidget() {
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Prevent duplicate script injection
    if (scriptLoadedRef.current) {
      console.log("[v0] ChatWay widget already initialized")
      return
    }

    // Check if script tag already exists
    const existingScript = document.getElementById("chatway-widget")
    if (existingScript) {
      console.log("[v0] ChatWay script tag already exists, skipping injection")
      scriptLoadedRef.current = true
      return
    }

    // Ensure document.body is available (safety check)
    if (!document.body) {
      console.warn("[v0] document.body not available, retrying in 100ms")
      setTimeout(() => {
        const script = document.createElement("script")
        injectScript(script)
      }, 100)
      return
    }

    const script = document.createElement("script")
    injectScript(script)

    function injectScript(scriptElement: HTMLScriptElement) {
      scriptElement.id = "chatway-widget"
      scriptElement.src = "https://cdn.chatway.app/widget.js?id=i3kTzjNeW8UX"
      scriptElement.async = true
      scriptElement.type = "text/javascript"
      scriptElement.charset = "UTF-8"
      scriptElement.setAttribute("data-cf-beacon", '{"rayId":""}')

      scriptElement.onload = () => {
        scriptLoadedRef.current = true
        console.log("[v0] ChatWay widget script loaded successfully")

        // Force initialize if global exists
        if (typeof window !== "undefined" && (window as any).Chatway) {
          console.log("[v0] ChatWay global object detected, widget should be active")
        }
      }

      scriptElement.onerror = (error) => {
        console.error("[v0] Failed to load ChatWay widget script:", error)
        scriptLoadedRef.current = false
      }

      // Wait for DOM to be ready
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
          document.body.appendChild(scriptElement)
          console.log("[v0] ChatWay script appended after DOMContentLoaded")
        })
      } else {
        document.body.appendChild(scriptElement)
        console.log("[v0] ChatWay script appended to document.body")
      }
    }

    // Cleanup: Don't remove script on unmount to prevent chat loss
    // ChatWay widget should persist across page navigation in SPA
    return () => {
      // Optional: log unmount
      console.log("[v0] ChatWayWidget component unmounted (script persists)")
    }
  }, [])

  // Return null - the widget renders directly into DOM
  return null
}
