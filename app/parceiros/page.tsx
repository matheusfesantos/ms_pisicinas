import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Award, DollarSign, HeadphonesIcon, Lightbulb } from "lucide-react"

export default function ParceirosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--accent))_0%,_transparent_50%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium tracking-widest uppercase mb-4">
            Nossos parceiros
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary-foreground text-balance">
            Parcerias de qualidade
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Trabalhamos apenas com os melhores fornecedores e marcas do mercado.
          </p>
        </div>
      </section>

      {/* Partners List */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase mb-4">
              Marcas parceiras
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Nossas parcerias estrategicas
            </h2>
          </div>

          <div className="space-y-16">
            {/* Evoclor */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-secondary rounded-2xl p-12 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <Image
                    src="/images/evoclor-logo.png"
                    alt="Evoclor"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">
                  Evoclor
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Evoclor e uma empresa especializada em produtos quimicos para tratamento de piscinas. Com uma linha completa de produtos de alta qualidade, a Evoclor nos ajuda a garantir agua cristalina e segura para nossos clientes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos os produtos Evoclor em nossos tratamentos semanais, garantindo eficiencia no controle de algas, bacterias e outros microrganismos, alem de manter o pH da agua sempre equilibrado.
                </p>
              </div>
            </div>

            {/* H2O */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">
                  H2O Geradores de Cloro
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A H2O e especializada em sistemas de geracao de cloro para piscinas. Seus equipamentos inovadores permitem a producao de cloro a partir do sal comum, oferecendo uma alternativa mais economica e ecologica para o tratamento de piscinas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Recomendamos e instalamos os geradores de cloro H2O para clientes que buscam reduzir custos com produtos quimicos e desejam uma solucao mais sustentavel para o tratamento da agua de suas piscinas.
                </p>
              </div>
              <div className="bg-secondary rounded-2xl p-12 flex items-center justify-center order-1 lg:order-2">
                <div className="relative w-64 h-64">
                  <Image
                    src="/images/h2o-logo.png"
                    alt="H2O Geradores de Cloro"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* AquaTech Software */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-secondary rounded-2xl p-12 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <Image
                    src="/images/aquatech-logo.png"
                    alt="AquaTech Software"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">
                  AquaTech Software
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A AquaTech Software e nossa parceira de tecnologia, responsavel pelo desenvolvimento de solucoes digitais que otimizam nossos processos e melhoram a experiencia dos nossos clientes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Com a AquaTech, conseguimos oferecer um servico mais eficiente e moderno, alinhado com as melhores praticas do mercado de tecnologia.
                </p>
                <a
                  href="https://www.aquatechsoftware.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                >
                  Visitar site
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase mb-4">
              Beneficios
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Vantagens das nossas parcerias
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Produtos de Qualidade",
                description: "Acesso aos melhores produtos do mercado, garantindo resultados superiores.",
              },
              {
                icon: DollarSign,
                title: "Precos Competitivos",
                description: "Oferecemos produtos e servicos com excelente custo-beneficio.",
              },
              {
                icon: HeadphonesIcon,
                title: "Suporte Tecnico",
                description: "Contamos com suporte especializado para solucionar qualquer problema.",
              },
              {
                icon: Lightbulb,
                title: "Inovacao Constante",
                description: "Acesso as mais recentes inovacoes e tecnologias do mercado.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">
            Quer saber mais sobre nossos produtos?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato conosco para uma consulta personalizada.
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
