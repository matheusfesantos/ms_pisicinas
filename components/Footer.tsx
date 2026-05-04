import Link from "next/link"
import { Phone, Instagram, MapPin, Clock, ArrowUpRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-serif font-bold text-background">
                MS Piscinas
              </span>
            </Link>
            <p className="mt-4 text-background/70 leading-relaxed">
              Especialistas em tratamento e manutencao de piscinas com mais de 8 anos de experiencia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">
              Navegacao
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/sobre", label: "Sobre" },
                { href: "/servicos", label: "Servicos" },
                { href: "/projetos", label: "Projetos" },
                { href: "/parceiros", label: "Parceiros" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-background/70">Limeira, SP</span>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=5519982589177&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>(19) 98258-9177</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rosivalgomes_picineirosp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Instagram className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>@rosivalgomes_picineirosp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-4">
              Horario
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-background/70">
                  <p>Segunda a Sexta: 8h - 18h</p>
                  <p>Sabado: 8h - 12h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-sm text-background/50 mb-4">Parceiro de tecnologia:</p>
          <a
            href="https://www.aquatechsoftware.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-background/70 hover:text-accent transition-colors"
          >
            <span className="font-medium">AquaTech Software</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              &copy; {currentYear} MS Piscinas. Todos os direitos reservados.
            </p>
            <p className="text-sm text-background/50">
              Desenvolvido por{" "}
              <a
                href="https://www.aquatechsoftware.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                AquaTech Software
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
