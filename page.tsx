import Hero from "./components/Hero"
import CountdownTimer from "./components/CountdownTimer"
import Link from "next/link"
import Sponsors from "./components/Sponsors"
import ScrollAnimation from "./components/ScrollAnimation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="tech-bg">
        <ScrollAnimation>
          <CountdownTimer />
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/about" className="block-link">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-white/20 transition-all duration-300 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold">About</h3>
              </div>
            </Link>
            <Link href="/workshops" className="block-link">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-white/20 transition-all duration-300 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold">Workshops</h3>
              </div>
            </Link>
            <Link href="/contests" className="block-link">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-white/20 transition-all duration-300 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold">Contests</h3>
              </div>
            </Link>
            <Link href="/contact" className="block-link">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-white/20 transition-all duration-300 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold">Contact</h3>
              </div>
            </Link>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <Sponsors />
        </ScrollAnimation>
      </div>
    </div>
  )
}

