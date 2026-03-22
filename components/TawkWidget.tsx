"use client"

import { useEffect, useRef } from "react"

export default function TawkWidget() {
  const scriptInjected = useRef(false);

  useEffect(() => {
    // Prevent duplicate script injection across re-renders and Strict Mode double-mounting
    if (scriptInjected.current) return;
    
    // Check if script is already in the DOM
    const existingScript = document.querySelector('script[src*="embed.tawk.to"]');
    if (existingScript) {
      scriptInjected.current = true;
      return;
    }

    scriptInjected.current = true;

    // Initialize Tawk_API
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    // Inject the script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/693f60bd7bdcd2197d981cc4/1jcfp3pac";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    
    document.body.appendChild(script);

    // No cleanup - we want the widget to persist
  }, []);

  return null;
}
