"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"

const contests = {
  "circuitx-hardware": {
    name: "CircuitX (Hardware)",
    details: "Design and build innovative hardware circuits.",
    icon: "🔌",
    image: "/circuitx-hardware.jpg",
    about: "Showcase your hardware design skills by creating innovative circuits to solve real-world problems.",
    rules: "Teams of 2-3 members. Components will be provided. Bring your own tools.",
    fee: "$60 per team",
    contact: "+1 234 567 8905",
  },
  "technical-quiz": {
    name: "Technical Quiz",
    details: "Test your knowledge across various technical domains.",
    icon: "🧠",
    image: "/technical-quiz.jpg",
    about: "Challenge yourself with questions spanning electronics, computer science, and emerging technologies.",
    rules: "Individual participation. Multiple rounds with increasing difficulty.",
    fee: "$20 per participant",
    contact: "+1 234 567 8906",
  },
  "paper-presentation": {
    name: "Paper Presentation",
    details: "Present your research on cutting-edge technologies.",
    icon: "📄",
    image: "/paper-presentation.jpg",
    about: "Share your innovative ideas and research findings with peers and industry experts.",
    rules: "Individual or team participation. 15-minute presentation followed by Q&A.",
    fee: "$30 per paper",
    contact: "+1 234 567 8907",
  },
  "project-expo": {
    name: "Project Expo",
    details: "Showcase your innovative projects to industry experts.",
    icon: "🏆",
    image: "/project-expo.jpg",
    about: "Display your semester projects or personal innovations and get valuable feedback from judges.",
    rules: "Individual or team projects. Physical or virtual demonstrations allowed.",
    fee: "$50 per project",
    contact: "+1 234 567 8908",
  },
  "circuitx-software": {
    name: "CircuitX (Software using Multisim)",
    details: "Design and simulate circuits using Multisim software.",
    icon: "💻",
    image: "/circuitx-software.jpg",
    about: "Test your circuit design skills using industry-standard Multisim software to solve complex problems.",
    rules: "Individual participation. Multisim software will be provided.",
    fee: "$40 per participant",
    contact: "+1 234 567 8909",
  },
}

export default function ContestDetails() {
  const params = useParams()
  const contest = contests[params.id]

  if (!contest) {
    return <div>Contest not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12 tech-bg min-h-screen">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img src={contest.image || "/placeholder.svg"} alt={contest.name} className="w-full h-auto rounded-lg" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold mb-4">{contest.name}</h1>
            <h2 className="text-xl font-semibold">About</h2>
            <p>{contest.about}</p>
            <h2 className="text-xl font-semibold">Rules</h2>
            <p>{contest.rules}</p>
            <h2 className="text-xl font-semibold">Fee</h2>
            <p>{contest.fee}</p>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p>{contest.contact}</p>
            <Button className="mt-4 w-full">Register Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

