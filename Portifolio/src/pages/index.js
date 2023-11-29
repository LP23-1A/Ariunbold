import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Ab from "@/components/Ab";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Designed from "@/components/Designed";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const DarkMode = () => {
    setIsDark(!isDark);
  };
  return (
    <section className={`${isDark && 'black-theme'}`}>
      <section className="body">
        <section className="container">
          <Navbar DarkMode={DarkMode} isDark={isDark} />
          <Hero />
          <Ab />
          <Skills isDark={isDark} />
          <Experience />
          <Work />
          <Footer />
          <Designed />
        </section>
      </section>
    </section>
  )
}