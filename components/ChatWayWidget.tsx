"use client"

import { useEffect } from "react"

export default function ChatWayWidget() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Check if script already exists
    const existingScript = document.getElementById("chatway")
    if (existingScript) return

    // Create and inject the ChatWay script
    const script = document.createElement("script")
    script.id = "chatway"
    script.async = true
    script.src = "https://cdn.chatway.app/widget.js?id=i3kTzjNeW8UX"
    script.type = "text/javascript"
    script.charset = "utf-8"

    script.onload = () => {
      console.log("[v0] ChatWay widget loaded successfully")
    }

    script.onerror = () => {
      console.error("[v0] Failed to load ChatWay widget")
    }

    // Append to body
    document.body.appendChild(script)

    // Cleanup function
    return () => {
      const script = document.getElementById("chatway")
      if (script) {
        script.remove()
      }
    }
  }, [])

  // Component renders nothing - script handles UI
  return null
}
