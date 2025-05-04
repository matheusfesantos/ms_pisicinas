import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>MS PISCINAS</h1>
          <p>Mais de 8 anos de experiência em tratamento e manutenção de piscinas</p>
          <Link href="/contato" className={styles.ctaButton}>
            Solicite um orçamento
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2>Nossos Serviços</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Tratamento de Piscinas"
              className={styles.serviceImage}
            />
            <h3>Tratamento de Piscinas</h3>
            <p>Tratamentos semanais com até duas visitas por semana para garantir a qualidade e segurança da água.</p>
          </div>
          <div className={styles.serviceCard}>
            <img src="/placeholder.svg?height=200&width=300" alt="Manutenção" className={styles.serviceImage} />
            <h3>Manutenção</h3>
            <p>Serviços completos de manutenção para preservar a durabilidade e o bom estado da sua piscina.</p>
          </div>
          <div className={styles.serviceCard}>
            <img src="/placeholder.svg?height=200&width=300" alt="Equipamentos" className={styles.serviceImage} />
            <h3>Equipamentos de Qualidade</h3>
            <p>
              Utilizamos equipamentos de ponta e produtos de parceiros confiáveis como Evoclor e H2O Gerador de Cloro.
            </p>
          </div>
        </div>
        <div className={styles.viewMoreContainer}>
          <Link href="/servicos" className={styles.viewMoreButton}>
            Ver todos os serviços
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h2>Sobre a MS PISCINAS</h2>
          <p>
            Fundada por Rosival Gomes dos Santos, a MS PISCINAS conta com mais de 8 anos de experiência no setor,
            oferecendo serviços especializados em tratamento e manutenção de piscinas. Nosso compromisso é garantir a
            qualidade e segurança da água, através de tratamentos semanais, com até duas visitas por semana.
          </p>
          <p>
            Nossa equipe é altamente capacitada, com formação em diversas áreas relacionadas ao tratamento de piscinas,
            e utilizamos equipamentos de ponta para assegurar os melhores resultados.
          </p>
          <Link href="/sobre" className={styles.learnMoreButton}>
            Conheça nossa história
          </Link>
        </div>
        <div className={styles.aboutImage}>
          <img src="/placeholder.svg?height=400&width=500" alt="Equipe MS PISCINAS" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>O que nossos clientes dizem</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p>"Serviço de excelente qualidade. Minha piscina ficou exatamente como eu imaginava!"</p>
            <h4>Carlos Silva</h4>
          </div>
          <div className={styles.testimonialCard}>
            <p>"Profissionais pontuais e atenciosos. Recomendo fortemente os serviços da MS PISCINAS."</p>
            <h4>Ana Oliveira</h4>
          </div>
          <div className={styles.testimonialCard}>
            <p>"A manutenção mensal tem mantido minha piscina impecável. Ótimo custo-benefício!"</p>
            <h4>Roberto Santos</h4>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.contactCta}>
        <h2>Pronto para transformar seu espaço?</h2>
        <p>Entre em contato conosco para um orçamento gratuito</p>
        <Link href="/contato" className={styles.ctaButton}>
          Fale Conosco
        </Link>
      </section>
    </main>
  )
}
