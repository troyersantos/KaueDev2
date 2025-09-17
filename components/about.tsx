"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpenIcon, CodeIcon, GraduationCapIcon, HeartIcon } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Sobre Mim
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Conheça um pouco mais sobre minha jornada e paixões.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <GraduationCapIcon className="mr-2 h-6 w-6 text-primary" />
              Formação Acadêmica
            </h3>
            <p className="text-muted-foreground mb-4">
              Atualmente estou cursando o primeiro período de Engenharia de Software na Universidade Vila Velha (UVV),
              onde estou aprendendo os fundamentos da programação, estruturas de dados, algoritmos e metodologias de
              desenvolvimento.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <CodeIcon className="mr-2 h-6 w-6 text-primary" />
              Interesses Técnicos
            </h3>
            <p className="text-muted-foreground mb-4">
              Tenho grande interesse em desenvolvimento web, especialmente em tecnologias front-end como HTML, CSS e
              JavaScript. Também estou explorando frameworks modernos como React e Next.js.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <HeartIcon className="mr-2 h-6 w-6 text-primary" />
              Paixões e Hobbies
            </h3>
            <p className="text-muted-foreground">
              Além da programação, gosto de aprender sobre novas tecnologias, resolver problemas lógicos e participar de
              comunidades de desenvolvedores. Nos momentos livres, gosto de ler livros técnicos e assistir tutoriais
              para expandir meus conhecimentos.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="aspect-square rounded-lg overflow-hidden mb-6">
                <img
                  src="objetivos.jpg"
                  alt="Foto pessoal"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-4">Objetivos Profissionais</h3>
              <p className="text-muted-foreground mb-6">
                Busco me tornar um desenvolvedor full-stack competente, com habilidades sólidas tanto no front-end
                quanto no back-end. Meu objetivo é criar aplicações web que sejam não apenas funcionais, mas também
                acessíveis e com excelente experiência do usuário.
              </p>

              <div className="flex items-center">
                <BookOpenIcon className="h-5 w-5 text-primary mr-2" />
                <p className="text-sm">
                  <span className="font-medium">Aprendendo atualmente:</span> React, TypeScript, Node.js, MySql,
                  Postgree
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
