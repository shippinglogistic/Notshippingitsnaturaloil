"use client"

import { useEffect } from "react"

export default function ChatWayWidget() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Check if script already loaded
    if (document.getElementById("chatway-widget")) {
      return
    }

    // Add script with direct inline injection for maximum compatibility
    const script = document.createElement("script")
    script.id = "chatway-widget"
    script.async = true
    script.src = "https://cdn.chatway.app/widget.js?id=i3kTzjNeW8UX"
    script.type = "text/javascript"
    script.charset = "UTF-8"

    // Append immediately to body - no delays, no DOMContentLoaded wait
    document.body.appendChild(script)
  }, [])

  return null
}
