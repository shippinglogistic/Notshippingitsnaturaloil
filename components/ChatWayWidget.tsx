"use client"

import { useEffect } from "react"

export default function ChatWayWidget() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Check if ChatWay script already loaded
    if (document.getElementById("chatway")) return

    // Create and inject ChatWay script
    const script = document.createElement("script")
    script.id = "chatway"
    script.async = true
    script.src = "https://cdn.chatway.app/widget.js?id=i3kTzjNeW8UX"

    // Handle script load/error
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
      const existingScript = document.getElementById("chatway")
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null
}
