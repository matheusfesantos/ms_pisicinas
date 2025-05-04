import styles from "./page.module.css"
import Image from "next/image"

export default function ServicosPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Nossos Serviços</h1>
      </section>

      <section className={styles.content}>
        <div className={styles.intro}>
          <h2>Soluções Completas para sua Piscina</h2>
          <p>
            A MS PISCINAS oferece serviços especializados em tratamento e manutenção de piscinas. Nosso compromisso é
            garantir a qualidade e segurança da água, através de tratamentos semanais, com até duas visitas por semana.
            Nossa equipe é altamente capacitada e utilizamos equipamentos de ponta para assegurar os melhores
            resultados.
          </p>
        </div>

        <div className={styles.servicesList}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceImage}>
              <Image src="/images/piscina1.png" alt="Tratamento de Piscinas" width={600} height={400} />
            </div>
            <div className={styles.serviceInfo}>
              <h3>Tratamento de Piscinas</h3>
              <p>Garantimos a qualidade e segurança da água da sua piscina através de tratamentos semanais:</p>
              <ul>
                <li>Tratamento químico da água</li>
                <li>Até duas visitas semanais</li>
                <li>Verificação e ajuste do pH e cloro</li>
                <li>Aplicação de algicidas e clarificantes</li>
                <li>Limpeza de bordas e revestimentos</li>
                <li>Aspiração e remoção de detritos</li>
              </ul>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceInfo}>
              <h3>Manutenção de Piscinas</h3>
              <p>
                Oferecemos serviços completos de manutenção para preservar a durabilidade e o bom estado da sua piscina:
              </p>
              <ul>
                <li>Manutenção de bombas e filtros</li>
                <li>Limpeza de filtros e pré-filtros</li>
                <li>Detecção e reparo de vazamentos</li>
                <li>Manutenção de sistemas de aquecimento</li>
                <li>Verificação de equipamentos elétricos</li>
                <li>Orientação sobre o uso correto da piscina</li>
              </ul>
            </div>
            <div className={styles.serviceImage}>
              <Image src="/images/piscina2.png" alt="Manutenção de Piscinas" width={600} height={400} />
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceImage}>
              <Image src="/images/banner-piscina.png" alt="Produtos e Equipamentos" width={600} height={400} />
            </div>
            <div className={styles.serviceInfo}>
              <h3>Produtos e Equipamentos</h3>
              <p>Utilizamos produtos e equipamentos de qualidade para garantir os melhores resultados:</p>
              <ul>
                <li>Produtos químicos de alta qualidade</li>
                <li>Parceria com Evoclor e H2O Gerador de Cloro</li>
                <li>Equipamentos de medição precisos</li>
                <li>Ferramentas especializadas para limpeza</li>
                <li>Acessórios para manutenção</li>
                <li>Consultoria na escolha de equipamentos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Pronto para transformar sua piscina?</h2>
          <p>Entre em contato conosco para um orçamento personalizado.</p>
          <a href="/contato" className={styles.ctaButton}>
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </main>
  )
}
