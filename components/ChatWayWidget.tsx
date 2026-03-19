"use client"

import { useEffect, useState } from "react"

export default function ChatWayWidget() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Check if script already loaded to prevent duplicates
    if (document.getElementById("chatway-widget")) {
      return
    }

    // Create and inject ChatWay script
    const script = document.createElement("script")
    script.id = "chatway-widget"
    script.async = true
    script.src = "https://cdn.chatway.app/widget.js?id=i3kTzjNeW8UX"
    script.type = "text/javascript"
    script.charset = "UTF-8"

    // Append to body when it's available
    if (document.body) {
      document.body.appendChild(script)
    }
  }, [isClient])

  if (!isClient) return null

  return null
}
