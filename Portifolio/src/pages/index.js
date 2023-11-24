import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Ab from "@/components/Ab";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Designed from "@/components/Designed";

export default function Home() {

  return (
    <section className="body">
      <section className="container">
        <Navbar />
        <Hero />
        <Ab />
        <Skills />
        <Experience />
        <Work/>
        <Footer/>
        <Designed/>
      </section>
    </section>
  )
}