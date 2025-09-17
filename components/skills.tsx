"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CodeIcon, PaletteIcon, LayoutIcon, DatabaseIcon, ServerIcon } from "lucide-react"

const skills = [
  {
    name: "HTML",
    level: 85,
    icon: <LayoutIcon className="h-6 w-6 text-orange-500" />,
    description: "Estruturação semântica de páginas web",
  },
  {
    name: "CSS",
    level: 80,
    icon: <PaletteIcon className="h-6 w-6 text-blue-500" />,
    description: "Estilização e layouts responsivos",
  },
  {
    name: "JavaScript",
    level: 75,
    icon: <CodeIcon className="h-6 w-6 text-yellow-500" />,
    description: "Programação front-end interativa",
  },
  {
    name: "React",
    level: 65,
    icon: <CodeIcon className="h-6 w-6 text-cyan-500" />,
    description: "Desenvolvimento de interfaces modernas",
  },
  {
    name: "Node.js",
    level: 60,
    icon: <ServerIcon className="h-6 w-6 text-green-500" />,
    description: "Desenvolvimento back-end com JavaScript",
  },
  {
    name: "Banco de Dados",
    level: 55,
    icon: <DatabaseIcon className="h-6 w-6 text-purple-500" />,
    description: "SQL e modelagem de dados",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Minhas Habilidades
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Tecnologias e ferramentas que utilizo para criar soluções digitais eficientes e modernas.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon}
                  <div>
                    <h3 className="font-medium text-lg">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Progress value={skill.level} className="h-2" />
                  <p className="text-sm text-right text-muted-foreground">{skill.level}%</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
