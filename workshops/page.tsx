import WorkshopCard from "../components/WorkshopCard"
import Link from "next/link"

const workshops = [
  {
    id: "fpga",
    title: "FPGA (Using Cadence)",
    description: "Learn FPGA design using Cadence tools.",
    icon: "🖥️",
  },
  {
    id: "latex",
    title: "LATEX",
    description: "Master the art of document preparation with LaTeX.",
    icon: "📄",
  },
  {
    id: "iot-raspberry-pi",
    title: "IoT Using Raspberry Pi",
    description: "Explore the Internet of Things with Raspberry Pi.",
    icon: "🥧",
  },
  {
    id: "pcb-designing",
    title: "PCB Designing",
    description: "Design your own Printed Circuit Boards.",
    icon: "🔌",
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems",
    description: "Develop skills in embedded systems programming.",
    icon: "🤖",
  },
]

export default function Workshops() {
  return (
    <div className="container mx-auto px-4 py-12 tech-bg min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">Workshops</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workshops.map((workshop) => (
          <Link key={workshop.id} href={`/workshops/${workshop.id}`}>
            <WorkshopCard {...workshop} />
          </Link>
        ))}
      </div>
    </div>
  )
}

