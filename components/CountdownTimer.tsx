"use client"

import { useState, useEffect } from "react"

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    const eventDate = new Date("2025-03-15T00:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance < 0) {
        setIsLive(true)
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  if (isLive) {
    return (
      <div className="text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold mb-4 glow-text font-lora">ESPARX is LIVE NOW!</h2>
          <p className="text-2xl">Join us for an exciting technical symposium experience.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 glow-text font-lora">Countdown to ESPARX 2025</h2>
        <div className="flex justify-center space-x-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-4xl font-bold">{formatNumber(value)}</div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full spark-animation"></div>
              </div>
              <div className="text-sm uppercase mt-2">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer

