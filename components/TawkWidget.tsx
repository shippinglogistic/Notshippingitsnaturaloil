'use client'

import { useEffect } from 'react'

export default function TawkWidget() {
  useEffect(() => {
    // Ensure Tawk API is initialized
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    // Create and inject the script
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/693f60bd7bdcd2197d981cc4/1jcfp3pac'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    // Append to document body to ensure it persists
    document.body.appendChild(script)

    // Cleanup function to prevent duplicate scripts
    return () => {
      // Don't remove the script on unmount - it should stay persistent
      // This prevents the widget from disappearing on navigation
    }
  }, [])

  return null
}

