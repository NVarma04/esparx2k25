"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"

const workshops = {
  fpga: {
    title: "FPGA (Using Cadence)",
    description: "Learn FPGA design using Cadence tools.",
    icon: "🖥️",
    image: "/fpga-workshop.jpg",
    about:
      "Dive into the world of Field-Programmable Gate Arrays (FPGAs) using industry-standard Cadence tools. This workshop will cover FPGA architecture, design flow, and practical implementation techniques.",
    rules: "Participants should have basic digital logic knowledge. Laptops with Cadence software will be provided.",
    fee: "$70",
    contact: "+1 234 567 8901",
  },
  latex: {
    title: "LATEX",
    description: "Master the art of document preparation with LaTeX.",
    icon: "📄",
    image: "/latex-workshop.jpg",
    about:
      "Learn to create professional-looking documents, presentations, and academic papers using LaTeX. This workshop covers basic syntax, document structure, and advanced formatting techniques.",
    rules: "No prior LaTeX experience required. Participants should bring their own laptops.",
    fee: "$50",
    contact: "+1 234 567 8902",
  },
  "iot-raspberry-pi": {
    title: "IoT Using Raspberry Pi",
    description: "Explore the Internet of Things with Raspberry Pi.",
    icon: "🥧",
    image: "/iot-raspberry-pi-workshop.jpg",
    about:
      "Get hands-on experience with IoT concepts using Raspberry Pi. Learn to connect sensors, process data, and create smart devices in this interactive workshop.",
    rules: "Basic programming knowledge recommended. Raspberry Pi kits will be provided.",
    fee: "$80",
    contact: "+1 234 567 8903",
  },
  "pcb-designing": {
    title: "PCB Designing",
    description: "Design your own Printed Circuit Boards.",
    icon: "🔌",
    image: "/pcb-design-workshop.jpg",
    about:
      "Learn the fundamentals of PCB design, from schematic capture to layout and manufacturing considerations. Use industry-standard software to create your own PCB designs.",
    rules: "Basic electronics knowledge required. Software will be provided on lab computers.",
    fee: "$60",
    contact: "+1 234 567 8904",
  },
  "embedded-systems": {
    title: "Embedded Systems",
    description: "Develop skills in embedded systems programming.",
    icon: "🤖",
    image: "/embedded-systems-workshop.jpg",
    about:
      "Explore the world of embedded systems, focusing on microcontroller programming, real-time operating systems, and interfacing with various peripherals.",
    rules: "C programming knowledge required. Development boards will be provided.",
    fee: "$75",
    contact: "+1 234 567 8905",
  },
}

export default function WorkshopDetails() {
  const params = useParams()
  const workshop = workshops[params.id]

  if (!workshop) {
    return <div>Workshop not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12 tech-bg min-h-screen">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img src={workshop.image || "/placeholder.svg"} alt={workshop.title} className="w-full h-auto rounded-lg" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold mb-4">{workshop.title}</h1>
            <h2 className="text-xl font-semibold">About</h2>
            <p>{workshop.about}</p>
            <h2 className="text-xl font-semibold">Rules</h2>
            <p>{workshop.rules}</p>
            <h2 className="text-xl font-semibold">Fee</h2>
            <p>{workshop.fee}</p>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p>{workshop.contact}</p>
            <Button className="mt-4 w-full">Register Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

