import ContestCard from "../components/ContestCard"
import Link from "next/link"

const contests = [
  {
    id: "circuitx-hardware",
    name: "CircuitX (Hardware)",
    details: "Design and build innovative hardware circuits.",
    icon: "🔌",
  },
  {
    id: "technical-quiz",
    name: "Technical Quiz",
    details: "Test your knowledge across various technical domains.",
    icon: "🧠",
  },
  {
    id: "paper-presentation",
    name: "Paper Presentation",
    details: "Present your research on cutting-edge technologies.",
    icon: "📄",
  },
  {
    id: "project-expo",
    name: "Project Expo",
    details: "Showcase your innovative projects to industry experts.",
    icon: "🏆",
  },
  {
    id: "circuitx-software",
    name: "CircuitX (Software using Multisim)",
    details: "Design and simulate circuits using Multisim software.",
    icon: "💻",
  },
]

export default function Contests() {
  return (
    <div className="container mx-auto px-4 py-12 tech-bg min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">Contests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contests.map((contest) => (
          <Link key={contest.id} href={`/contests/${contest.id}`}>
            <ContestCard {...contest} />
          </Link>
        ))}
      </div>
    </div>
  )
}

