import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Droplets, Settings, Beaker } from "lucide-react"

export default function ServicosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--accent))_0%,_transparent_50%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium tracking-widest uppercase mb-4">
            Nossos servicos
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary-foreground text-balance">
            Solucoes completas para sua piscina
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Oferecemos servicos especializados em tratamento e manutencao de piscinas com qualidade e dedicacao.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/serviços/agua-tratada.png"
                alt="Tratamento de Piscinas"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Tratamento de Piscinas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Garantimos a qualidade e seguranca da agua da sua piscina atraves de tratamentos semanais especializados.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Tratamento quimico da agua",
                  "Ate duas visitas semanais",
                  "Verificacao e ajuste do pH e cloro",
                  "Aplicacao de algicidas e clarificantes",
                  "Limpeza de bordas e revestimentos",
                  "Aspiracao e remocao de detritos",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Manutencao de Piscinas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Oferecemos servicos completos de manutencao para preservar a durabilidade e o bom estado da sua piscina.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Manutencao de bombas e filtros",
                  "Limpeza de filtros e pre-filtros",
                  "Deteccao e reparo de vazamentos",
                  "Manutencao de sistemas de aquecimento",
                  "Verificacao de equipamentos eletricos",
                  "Orientacao sobre o uso correto",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/serviços/manutenção-de-pisicina.png"
                alt="Manutencao de Piscinas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/serviços/equipamentos-de-pisicna.jpg"
                alt="Produtos e Equipamentos"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Beaker className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Produtos e Equipamentos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Utilizamos produtos e equipamentos de qualidade para garantir os melhores resultados.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Produtos quimicos de alta qualidade",
                  "Parceria com Evoclor e H2O",
                  "Equipamentos de medicao precisos",
                  "Ferramentas especializadas",
                  "Acessorios para manutencao",
                  "Consultoria na escolha de equipamentos",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">
            Pronto para transformar sua piscina?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato conosco para um orcamento personalizado.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5519982589177&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-base font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            Solicitar Orcamento
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  )
}
