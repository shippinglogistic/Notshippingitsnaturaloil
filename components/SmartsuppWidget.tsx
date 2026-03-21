"use client"

import { useEffect } from "react"

export function SmartSuppWidget() {
  useEffect(() => {
    // SmartSupp Live Chat script
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.async = true
    script.charset = "utf-8"
    script.textContent = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = 'a9438b30f1a416acb20d37824921a765b7bed2fc';
      window.smartsupp||(function(d) {
        var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
        s=d.getElementsByTagName('script')[0];c=d.createElement('script');
        c.type='text/javascript';c.charset='utf-8';c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
      })(document);
    `

    // Add to body with a slight delay to ensure DOM is ready
    const timer = setTimeout(() => {
      document.body.appendChild(script)
    }, 1000)

    return () => {
      clearTimeout(timer)
      // Cleanup if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}