import Link from "next/link"
import { HeartIcon } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Kaue Dev</h3>
            <p className="text-muted-foreground">
              Um currículo online interativo para mostrar minhas habilidades e projetos como estudante de Engenharia de
              Software na UVV.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <address className="not-italic text-muted-foreground">
              <p>Vila Velha, ES</p>
              <p>kaue.azevedopessoal@gmail.com</p>
              <p>(73) 999054891</p>
            </address>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">&copy; {currentYear} Kaue. Todos os direitos reservados.</p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Feito com <HeartIcon className="h-4 w-4 text-red-500 mx-1" /> e Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
