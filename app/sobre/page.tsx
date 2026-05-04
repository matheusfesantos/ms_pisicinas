import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Heart, CheckCircle2 } from "lucide-react"

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--accent))_0%,_transparent_50%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium tracking-widest uppercase mb-4">
            Sobre nos
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary-foreground text-balance">
            Conheca a MS Piscinas
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Mais de 8 anos de experiencia em tratamento e manutencao de piscinas.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/serviços/piscineiro.jpg"
                  alt="Rosival Gomes dos Santos - Fundador MS Piscinas"
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
                Nossa historia
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
                Uma jornada de dedicacao e qualidade
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A MS Piscinas foi fundada por Rosival Gomes dos Santos e conta com mais de 8 anos de experiencia no setor, oferecendo servicos especializados em tratamento e manutencao de piscinas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Comecamos com o compromisso de garantir a qualidade e seguranca da agua das piscinas de nossos clientes. Nossa jornada tem sido marcada pelo compromisso com a excelencia e a satisfacao dos clientes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Realizamos tratamentos semanais, com ate duas visitas por semana, garantindo que a agua da sua piscina esteja sempre em perfeitas condicoes.
              </p>
              <ul className="space-y-3">
                {[
                  "Equipe altamente capacitada",
                  "Equipamentos de ponta",
                  "Atendimento personalizado",
                  "Compromisso com resultados",
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

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase mb-4">
              Nossos pilares
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Missao, Visao e Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Missao
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar momentos de lazer e bem-estar atraves do tratamento e manutencao de piscinas com excelencia, qualidade e responsabilidade.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Visao
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como a empresa lider no segmento de tratamento de piscinas, referencia em qualidade e atendimento personalizado.
              </p>
            </div>

            {/* Values */}
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Valores
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Compromisso com a qualidade</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Etica e transparencia</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Responsabilidade ambiental</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Capacitacao continua</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Foco na satisfacao do cliente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">
            Quer saber mais sobre nosso trabalho?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato conosco e conheca nossos servicos de perto.
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
