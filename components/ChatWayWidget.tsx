"use client"

import { useEffect, useState } from "react"

export default function ChatWayWidget() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Check if script already loaded
    if (document.getElementById("chatway-widget")) {
      console.log("[v0] ChatWay widget script already exists")
      return
    }

    // Add script with direct injection
    const script = document.createElement("script")
    script.id = "chatway-widget"
    script.async = true
    script.src = "https://cdn.chatway.app/widget.js?id=i3kTzjNeW8UX"
    script.type = "text/javascript"
    script.charset = "UTF-8"

    script.onload = () => {
      console.log("[v0] ChatWay widget loaded successfully")
    }

    script.onerror = () => {
      console.error("[v0] Failed to load ChatWay widget")
    }

    // Append to body
    if (document.body) {
      document.body.appendChild(script)
      console.log("[v0] ChatWay widget script appended to body")
    }

    // Don't clean up on unmount - ChatWay widget should persist
    return () => {
      console.log("[v0] ChatWayWidget component unmounting")
    }
  }, [isClient])

  if (!isClient) return null

  return null
}
