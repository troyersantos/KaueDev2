"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, GithubIcon, LinkedinIcon } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Olá, eu sou <span className="text-primary">Kaue</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground mb-6">
            Desenvolvedor Web & Estudante de Engenharia de Software
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Apaixonado por criar experiências digitais incríveis e resolver problemas complexos através da programação.
            Atualmente no primeiro período de Engenharia de Software na UVV.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={scrollToContact} size="lg">
              Entre em contato
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToProjects} className="group">
              Ver projetos
              <ArrowDownIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/troyersantos" target="_blank"> <Button variant="ghost" size="icon" aria-label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </Button></a>
            <a href="https://www.linkedin.com/in/kauesantos2006/" target="_blank"><Button variant="ghost" size="icon" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </Button></a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
            <div className="relative bg-muted rounded-full overflow-hidden border border-border">
              <img
                src="/atualizado.jpeg"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
