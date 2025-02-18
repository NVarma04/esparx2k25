export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 tech-bg min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Student Coordinators</h2>
          <ul className="space-y-2">
            <li>John Doe: +1 234 567 8910</li>
            <li>Jane Smith: +1 234 567 8911</li>
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Event Email</h2>
          <p>esparx2025@example.com</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Address</h2>
          <p>
            ESPARX 2025 Organizing Committee
            <br />
            Department of Computer Science
            <br />
            XYZ University
            <br />
            123 Tech Street, Innovation City
            <br />
            State, Country - 12345
          </p>
        </div>
      </div>
    </div>
  )
}

