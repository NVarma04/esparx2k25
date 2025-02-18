import ContestCard from "./ContestCard"

const contests = [
  {
    name: "Hackathon",
    details: "24-hour coding challenge to solve real-world problems.",
    icon: "💻",
  },
  {
    name: "Paper Presentation",
    details: "Present your research papers on emerging technologies.",
    icon: "📄",
  },
  {
    name: "Tech Quiz",
    details: "Test your knowledge on various technical domains.",
    icon: "🧠",
  },
  {
    name: "Project Expo",
    details: "Showcase your innovative projects to industry experts.",
    icon: "🏆",
  },
]

const Contests = () => {
  return (
    <div id="contests" className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 glow-text">Contests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contests.map((contest, index) => (
          <ContestCard key={index} {...contest} />
        ))}
      </div>
    </div>
  )
}

export default Contests

