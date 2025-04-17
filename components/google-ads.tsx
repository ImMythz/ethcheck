"use client"

import { useEffect, useRef } from "react"

interface GoogleAdProps {
  slot: string
  format?: "auto" | "rectangle" | "horizontal" | "vertical"
  responsive?: boolean
  className?: string
}

export function GoogleAd({ slot, format = "auto", responsive = true, className = "" }: GoogleAdProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      // Add the ad if the container exists and window.adsbygoogle is defined
      if (adRef.current && typeof window !== "undefined" && window.adsbygoogle) {
        // Push the ad to the adsense queue
        window.adsbygoogle.push({})
      }
    } catch (error) {
      console.error("Error loading Google ad:", error)
    }
  }, [])

  return (
    <div className={className}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9484338643096775"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  )
}

// Add this to make TypeScript happy
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}
