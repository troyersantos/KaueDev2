"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon } from "lucide-react"

const experiences = [
  {
    title: "Estágio Cartório",
    company: "Tabelionato de Notas",
    location: "Presencial",
    period: "2024 - 2025",
    description:
      "Desenvolvi habilidades essenciais para a área de TI, como trabalho em equipe, organização, atenção aos detalhes e comunicação eficaz. Tive contato com sistemas internos e aprendi a lidar com prazos, responsabilidades e atendimento ao público, fortalecendo competências valiosas para o ambiente tecnológico.",
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    company: "Senac",
    location: "Remoto",
    period: "2024 - Presente",
    description:
      "Atualmente estou me especializando tanto na teoria quanto na prática do desenvolvimento de sistemas. O curso técnico tem me proporcionado conhecimento direto em lógica de programação, banco de dados, desenvolvimento web e boas práticas de codificação, complementando minha graduação em Engenharia de Software..",
  },
  {
    title: "Faculdade Engenharia de Software",
    company: "Universidade Vila Velha",
    location: "Presencial",
    period: "2025 - Presente",
    description:
      "Atualmente estou iniciando minha graduação em Engenharia de Software, onde estou construindo uma base sólida em lógica de programação, estrutura de dados, resolução de problemas e fundamentos do desenvolvimento de sistemas. A faculdade tem ampliado minha visão sobre o ciclo de vida do software e boas práticas de engenharia.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Experiência
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Minha jornada acadêmica e projetos que contribuíram para meu desenvolvimento profissional.
        </motion.p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  {exp.location}
                </div>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
