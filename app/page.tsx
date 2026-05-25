import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Articles from "@/components/Articles"
import Events from "@/components/Events"
import Gallery from "@/components/Gallery"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Articles />
        <Events />
        <Gallery />
      </main>

    </>
  )
}