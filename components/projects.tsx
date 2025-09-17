"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PlayIcon } from "lucide-react"
import ResponsiveWebApp from "./projects/responsive-web-app"
import InteractiveCalculator from "./projects/interactive-calculator"
import TodoList from "./projects/todo-list"

const projects = [
  {
    title: "Aplicação Web Responsiva",
    description:
      "Um site responsivo desenvolvido com HTML, CSS e JavaScript que se adapta a diferentes tamanhos de tela.",
    image: "/siteweb.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    component: ResponsiveWebApp,
  },
  {
    title: "Calculadora Interativa",
    description: "Uma calculadora web com funcionalidades avançadas e interface amigável.",
    image: "/calculadora.png",
    tags: ["JavaScript", "CSS", "Web Design", "React"],
    component: InteractiveCalculator,
  },
  {
    title: "Lista de Tarefas",
    description: "Aplicativo de lista de tarefas com recursos de adição, remoção e marcação de tarefas concluídas.",
    image: "/lista.png",
    tags: ["React", "CSS", "LocalStorage", "TypeScript"],
    component: TodoList,
  },
]

export default function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Meus Projetos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Uma seleção dos meus trabalhos acadêmicos e projetos pessoais que demonstram minhas habilidades e interesses.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Dialog open={openProject === index} onOpenChange={(open) => setOpenProject(open ? index : null)}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <PlayIcon className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                    </DialogHeader>
                    <div className="overflow-auto max-h-[80vh]">{React.createElement(project.component)}</div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
