import type { Metadata } from "next"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Meu Portfólio | Desenvolvedor Web",
  description: "Portfólio pessoal e currículo online de um estudante de Engenharia de Software",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
