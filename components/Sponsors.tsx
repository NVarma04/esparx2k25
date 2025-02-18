"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const sponsors = [
  { name: "TechCorp", logo: "/techcorp-logo.png" },
  { name: "InnovateTech", logo: "/innovatetech-logo.png" },
  { name: "Futuristics", logo: "/futuristics-logo.png" },
  { name: "NextGen Solutions", logo: "/nextgen-logo.png" },
  { name: "AI Dynamics", logo: "/ai-dynamics-logo.png" },
]

const Sponsors = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const scrollWidth = container.scrollWidth
      const animationDuration = scrollWidth / 50 // Adjust speed as needed

      container.style.animation = `scroll ${animationDuration}s linear infinite`
    }
  }, [])

  return (
    <div id="sponsors" className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 glow-text font-lora">Our Sponsors</h2>
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex space-x-8 animate-scroll"
          style={{ width: `${sponsors.length * 200}px` }}
        >
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex-shrink-0 w-48">
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={200}
                height={100}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sponsors

