import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjetosPage() {
  const projects = [
    {
      image: "/images/piscinas/piscina-chacara.jpeg",
      title: "Piscina em Chacara",
      description: "Servico completo de manutencao e limpeza para piscina ampla, garantindo qualidade da agua, controle de pH e remocao de impurezas para um lazer sempre seguro e saudavel.",
    },
    {
      image: "/images/piscinas/piscina-condominio.jpeg",
      title: "Piscina Residencial com Cascata",
      description: "Manutencao especializada para piscinas compactas, com monitoramento constante do equilibrio quimico e limpeza de cascata para preservar a beleza e a saude da agua.",
    },
    {
      image: "/images/piscinas/piscina-edicula.jpeg",
      title: "Piscina Compacta com Design Moderno",
      description: "Tratamento especializado para piscinas com pastilhas, focando na conservacao das superficies e na qualidade da agua, com uso controlado de produtos e tecnicas avancadas.",
    },
    {
      image: "/images/piscinas/piscina-quatroni.jpeg",
      title: "Piscina Personalizada com Degraus",
      description: "Servicos avancados de manutencao e tratamento de agua para piscinas de alto padrao, incluindo limpeza detalhada de degraus e controle rigoroso dos niveis quimicos.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--accent))_0%,_transparent_50%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium tracking-widest uppercase mb-4">
            Nossos projetos
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary-foreground text-balance">
            Galeria de projetos
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Conheca alguns dos nossos trabalhos realizados com excelencia e dedicacao.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Trabalhos realizados
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Cada piscina recebe tratamento personalizado de acordo com as necessidades especificas de nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">
            Quer ver seu projeto aqui?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato conosco e transforme seu sonho em realidade.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5519982589177&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-base font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            Fale Conosco
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  )
}
