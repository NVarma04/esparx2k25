"use client"

import type React from "react"
import { useEffect, useState } from "react"

interface Droplet {
  id: number
  top: number
  left: number
  size: number
  delay: number
}

const WaterDroplets: React.FC = () => {
  const [droplets, setDroplets] = useState<Droplet[]>([])

  useEffect(() => {
    const numberOfDroplets = 15
    const newDroplets: Droplet[] = []

    for (let i = 0; i < numberOfDroplets; i++) {
      newDroplets.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })
    }

    setDroplets(newDroplets)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {droplets.map((droplet) => (
        <div
          key={droplet.id}
          className="absolute rounded-full bg-blue-400 opacity-50 animate-droplet"
          style={{
            top: `${droplet.top}%`,
            left: `${droplet.left}%`,
            width: `${droplet.size}px`,
            height: `${droplet.size * 1.2}px`,
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            transform: "rotate(15deg)",
            animationDelay: `${droplet.delay}s`,
            filter: "blur(1px)",
          }}
        ></div>
      ))}
    </div>
  )
}

export default WaterDroplets

