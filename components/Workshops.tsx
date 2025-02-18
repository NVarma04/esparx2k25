import WorkshopCard from "./WorkshopCard"

const workshops = [
  {
    title: "AI and Machine Learning",
    description: "Explore the cutting-edge world of AI and ML technologies.",
    icon: "🤖",
  },
  {
    title: "Blockchain Development",
    description: "Learn to build decentralized applications using blockchain.",
    icon: "🔗",
  },
  {
    title: "IoT and Smart Devices",
    description: "Discover the potential of Internet of Things and smart devices.",
    icon: "📱",
  },
  {
    title: "Cybersecurity Essentials",
    description: "Master the fundamentals of cybersecurity and ethical hacking.",
    icon: "🔒",
  },
]

const Workshops = () => {
  return (
    <div id="workshops" className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 glow-text">Workshops</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {workshops.map((workshop, index) => (
          <WorkshopCard key={index} {...workshop} />
        ))}
      </div>
    </div>
  )
}

export default Workshops

