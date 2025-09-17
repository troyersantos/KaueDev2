"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Experiência", href: "#experience" },
  { name: "Sobre", href: "#about" },
  { name: "Contato", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determinar qual seção está visível
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100 // offset para melhor detecção

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 font-bold text-xl">
            <Link href="#hero" onClick={() => scrollToSection("#hero")}>
              <span className="text-primary">Kaue</span>Dev
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={`relative px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full mx-auto"
                      style={{ width: "50%" }}
                    ></span>
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Alternar tema"
              className="relative overflow-hidden"
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Alternar tema</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu principal"
            >
              <MenuIcon
                className={`h-6 w-6 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <XIcon
                className={`absolute inset-0 h-6 w-6 m-auto transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-sm shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`block py-2 px-3 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-medium bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}
