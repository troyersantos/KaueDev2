"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Tablet, Monitor, Menu, X, Star, Users, Award, Mail, Phone, MapPin } from "lucide-react"

export default function ResponsiveWebApp() {
  const [viewMode, setViewMode] = useState<"mobile" | "tablet" | "desktop">("desktop")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getContainerClass = () => {
    switch (viewMode) {
      case "mobile":
        return "max-w-sm mx-auto"
      case "tablet":
        return "max-w-2xl mx-auto"
      default:
        return "max-w-6xl mx-auto"
    }
  }

  const services = [
    { title: "Web Development", description: "Criação de sites modernos e responsivos", icon: "🌐" },
    { title: "UI/UX Design", description: "Design de interfaces intuitivas e atrativas", icon: "🎨" },
    { title: "Mobile Apps", description: "Desenvolvimento de aplicativos móveis", icon: "📱" },
    { title: "E-commerce", description: "Lojas virtuais completas e seguras", icon: "🛒" },
  ]

  const testimonials = [
    { name: "Maria Silva", role: "CEO, TechCorp", text: "Excelente trabalho, superou nossas expectativas!" },
    { name: "João Santos", role: "Gerente, StartupXYZ", text: "Profissional dedicado e muito competente." },
    { name: "Ana Costa", role: "Diretora, InovaTech", text: "Entrega rápida e qualidade excepcional." },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 min-h-screen">
      <div className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b p-4">
        <div className="flex justify-center gap-2">
          <Button
            variant={viewMode === "mobile" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("mobile")}
          >
            <Smartphone className="mr-2 h-4 w-4" />
            Mobile
          </Button>
          <Button
            variant={viewMode === "tablet" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("tablet")}
          >
            <Tablet className="mr-2 h-4 w-4" />
            Tablet
          </Button>
          <Button
            variant={viewMode === "desktop" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("desktop")}
          >
            <Monitor className="mr-2 h-4 w-4" />
            Desktop
          </Button>
        </div>
      </div>

      <div className={`transition-all duration-500 ${getContainerClass()}`}>
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 shadow-sm">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className={`font-bold text-blue-600 ${viewMode === "mobile" ? "text-xl" : "text-2xl"}`}>
                DevPortfolio
              </h1>

              {viewMode === "mobile" ? (
                <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              ) : (
                <nav className="flex gap-6">
                  {["Início", "Serviços", "Sobre", "Contato"].map((item) => (
                    <Button key={item} variant="ghost" size="sm">
                      {item}
                    </Button>
                  ))}
                </nav>
              )}
            </div>

            {viewMode === "mobile" && mobileMenuOpen && (
              <nav className="mt-4 flex flex-col gap-2">
                {["Início", "Serviços", "Sobre", "Contato"].map((item) => (
                  <Button key={item} variant="ghost" size="sm" className="justify-start">
                    {item}
                  </Button>
                ))}
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-6">
          <div className="text-center">
            <h2 className={`font-bold mb-4 ${viewMode === "mobile" ? "text-2xl" : "text-4xl"}`}>
              Desenvolvedor Full Stack
            </h2>
            <p className={`mb-8 opacity-90 ${viewMode === "mobile" ? "text-sm" : "text-lg"}`}>
              Criando experiências digitais incríveis e responsivas
            </p>
            <div className={`flex gap-4 ${viewMode === "mobile" ? "flex-col items-center" : "justify-center"}`}>
              <Button variant="secondary" size={viewMode === "mobile" ? "sm" : "default"}>
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                size={viewMode === "mobile" ? "sm" : "default"}
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6 bg-white dark:bg-gray-900">
          <div className="text-center mb-12">
            <h3 className={`font-bold mb-4 ${viewMode === "mobile" ? "text-xl" : "text-3xl"}`}>Nossos Serviços</h3>
            <p className="text-muted-foreground">Soluções completas para suas necessidades digitais</p>
          </div>

          <div
            className={`grid gap-6 ${
              viewMode === "mobile" ? "grid-cols-1" : viewMode === "tablet" ? "grid-cols-2" : "grid-cols-4"
            }`}
          >
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle className={viewMode === "mobile" ? "text-lg" : "text-xl"}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
          <div
            className={`grid gap-8 text-center ${
              viewMode === "mobile" ? "grid-cols-1" : viewMode === "tablet" ? "grid-cols-2" : "grid-cols-4"
            }`}
          >
            {[
              { icon: <Award className="h-8 w-8" />, number: "50+", label: "Projetos Concluídos" },
              { icon: <Users className="h-8 w-8" />, number: "30+", label: "Clientes Satisfeitos" },
              { icon: <Star className="h-8 w-8" />, number: "5.0", label: "Avaliação Média" },
              { icon: <Monitor className="h-8 w-8" />, number: "3+", label: "Anos de Experiência" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-blue-600 mb-2">{stat.icon}</div>
                <div className={`font-bold text-blue-600 ${viewMode === "mobile" ? "text-2xl" : "text-3xl"}`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 bg-white dark:bg-gray-900">
          <div className="text-center mb-12">
            <h3 className={`font-bold mb-4 ${viewMode === "mobile" ? "text-xl" : "text-3xl"}`}>
              O que dizem nossos clientes
            </h3>
          </div>

          <div
            className={`grid gap-6 ${
              viewMode === "mobile" ? "grid-cols-1" : viewMode === "tablet" ? "grid-cols-2" : "grid-cols-3"
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="text-center mb-12">
            <h3 className={`font-bold mb-4 ${viewMode === "mobile" ? "text-xl" : "text-3xl"}`}>Entre em Contato</h3>
            <p className="text-muted-foreground">Vamos conversar sobre seu próximo projeto</p>
          </div>

          <div className={`grid gap-8 ${viewMode === "mobile" ? "grid-cols-1" : "grid-cols-3"}`}>
            {[
              { icon: <Mail className="h-6 w-6" />, title: "Email", info: "contato@devportfolio.com" },
              { icon: <Phone className="h-6 w-6" />, title: "Telefone", info: "(11) 99999-9999" },
              { icon: <MapPin className="h-6 w-6" />, title: "Localização", info: "São Paulo, SP" },
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-2 flex justify-center">{contact.icon}</div>
                <div className="font-semibold mb-1">{contact.title}</div>
                <div className="text-sm text-muted-foreground">{contact.info}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 px-6">
          <div className={`${viewMode === "mobile" ? "text-center" : "flex justify-between items-center"}`}>
            <div className="mb-4 md:mb-0">
              <h4 className="font-bold text-lg">DevPortfolio</h4>
              <p className="text-sm text-gray-400">Criando o futuro digital</p>
            </div>
            <div className={`flex gap-4 ${viewMode === "mobile" ? "justify-center" : ""}`}>
              {["HTML", "CSS", "JavaScript", "React", "Node.js"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
            © 2024 DevPortfolio. Todos os direitos reservados.
          </div>
        </footer>
      </div>
    </div>
  )
}
