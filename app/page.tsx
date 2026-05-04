import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Droplets, Shield, Wrench, CheckCircle2 } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/serviços/agua-tratada.png"
            alt="Piscina com agua cristalina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <p className="text-accent font-medium tracking-widest uppercase mb-6 animate-fade-in">
            Mais de 8 anos de experiencia
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight text-balance animate-fade-in delay-100">
            Excelencia em tratamento
            <br />
            de piscinas
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in delay-200">
            Garantimos a qualidade e seguranca da agua da sua piscina atraves de tratamentos semanais especializados.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
            <a
              href="https://api.whatsapp.com/send/?phone=5519982589177&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-base font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              Solicite um orcamento
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 text-white border border-white/30 px-8 py-4 rounded-full text-base font-medium transition-all hover:bg-white/10"
            >
              Nossos servicos
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase mb-4">
              Por que nos escolher
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Compromisso com qualidade
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: "Agua Cristalina",
                description: "Tratamentos quimicos especializados para manter sua piscina sempre limpa e segura.",
              },
              {
                icon: Shield,
                title: "Seguranca Garantida",
                description: "Monitoramento constante de pH e cloro para a saude de toda sua familia.",
              },
              {
                icon: Wrench,
                title: "Manutencao Completa",
                description: "Servicos de manutencao de equipamentos, bombas, filtros e sistemas de aquecimento.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase mb-4">
              Nossos servicos
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Solucoes completas para sua piscina
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/serviços/agua-tratada.png",
                title: "Tratamento de Piscinas",
                description: "Tratamentos semanais com ate duas visitas por semana para garantir a qualidade e seguranca da agua.",
              },
              {
                image: "/images/serviços/manutenção-de-pisicina.png",
                title: "Manutencao",
                description: "Servicos completos de manutencao para preservar a durabilidade e o bom estado da sua piscina.",
              },
              {
                image: "/images/serviços/equipamentos-de-pisicna.jpg",
                title: "Equipamentos de Qualidade",
                description: "Utilizamos equipamentos de ponta e produtos de parceiros confiaveis como Evoclor e H2O.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
            >
              Ver todos os servicos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/serviços/piscineiro.jpg"
                  alt="Profissional MS Piscinas"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold">8+</p>
                <p className="text-sm opacity-80">Anos de experiencia</p>
              </div>
            </div>

            <div>
              <p className="text-accent font-medium tracking-widest uppercase mb-4">
                Sobre nos
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
                MS Piscinas: Tradicao e qualidade
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fundada por Rosival Gomes dos Santos, a MS Piscinas conta com mais de 8 anos de experiencia no setor, oferecendo servicos especializados em tratamento e manutencao de piscinas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nosso compromisso e garantir a qualidade e seguranca da agua, atraves de tratamentos semanais, com ate duas visitas por semana. Nossa equipe e altamente capacitada e utilizamos equipamentos de ponta.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Equipe altamente capacitada",
                  "Equipamentos de ponta",
                  "Produtos de qualidade",
                  "Atendimento personalizado",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-primary/90"
              >
                Conheca nossa historia
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase mb-4">
              Nossos parceiros
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Trabalhamos com as melhores marcas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/evoclor-logo.png",
                name: "Evoclor",
                description: "Produtos quimicos de alta qualidade para tratamento de piscinas.",
              },
              {
                image: "/images/h2o-logo.png",
                name: "H2O Geradores de Cloro",
                description: "Sistemas inovadores de geracao de cloro a partir do sal.",
              },
              {
                image: "/images/aquatech-logo.png",
                name: "AquaTech Software",
                description: "Parceiro tecnologico para solucoes digitais.",
                link: "https://www.aquatechsoftware.com.br/",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all text-center"
              >
                {partner.image ? (
                  <div className="relative h-24 mb-6">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="h-24 mb-6 flex items-center justify-center">
                    <span className="text-2xl font-serif font-bold text-primary">
                      {partner.name}
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {partner.description}
                </p>
                {partner.link && (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent text-sm mt-4 hover:underline"
                  >
                    Visitar site
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/parceiros"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
            >
              Ver todos os parceiros
              <ArrowRight className="w-4 h-4" />
            </Link>
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
            Entre em contato conosco para um orcamento gratuito e personalizado. Estamos prontos para atender voce.
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
