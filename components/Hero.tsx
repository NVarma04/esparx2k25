import WaterDroplets from "./WaterDroplets"

const Hero = () => {
  return (
    <div id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__the-style-is-candid-image-photography-with-natural__27512.jpg-ZojqpOsvDFEWWwDJvWLGZrMMWCe5uR.jpeg"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/135988-764371107_small-gqO1N61z0LYlY4pqtGbh5I1gAqQsz9.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <WaterDroplets />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h2 className="text-[30vw] font-black text-white opacity-10 select-none">2025</h2>
      </div>

      <div className="relative z-20 text-center">
        <h1 className="text-8xl font-extrabold text-white mb-4 glow-text font-chatterbox tracking-[0.2em]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">ESPARX</span>
        </h1>
        <p className="text-2xl text-white mb-8">A National Level Technical Symposium</p>
      </div>
    </div>
  )
}

export default Hero

