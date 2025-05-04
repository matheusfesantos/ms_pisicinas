import styles from "./page.module.css"
import Image from "next/image"

export default function ProjetosPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Nossos Projetos</h1>
      </section>

      <section className={styles.content}>
        <div className={styles.intro}>
          <h2>Galeria de Projetos</h2>
          <p>
            Conheça alguns dos nossos projetos realizados. Cada piscina recebe tratamento personalizado de acordo com as
            necessidades específicas de nossos clientes.
          </p>
        </div>

        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image src="/images/piscina1.png" alt="Piscina Residencial com Deck" width={600} height={400} />
            </div>
            <div className={styles.projectInfo}>
              <h3>Piscina Residencial com Deck</h3>
              <p>
                Tratamento e manutenção de piscina residencial com revestimento em azulejos azuis e deck em madeira.
                Serviço completo de limpeza e tratamento químico da água.
              </p>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image src="/images/piscina2.png" alt="Limpeza de Piscina Interna" width={600} height={400} />
            </div>
            <div className={styles.projectInfo}>
              <h3>Manutenção de Piscina Interna</h3>
              <p>
                Serviço de limpeza e aspiração de piscina em área interna. Tratamento completo da água e manutenção
                preventiva dos equipamentos.
              </p>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src="/placeholder.svg?height=400&width=600" alt="Projeto Reforma" />
            </div>
            <div className={styles.projectInfo}>
              <h3>Reforma de Piscina - Guarujá</h3>
              <p>
                Reforma completa de piscina em casa de praia. Troca de revestimento, instalação de nova borda e
                modernização do sistema de filtragem.
              </p>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src="/placeholder.svg?height=400&width=600" alt="Projeto Hotel" />
            </div>
            <div className={styles.projectInfo}>
              <h3>Piscina para Hotel - Campos do Jordão</h3>
              <p>
                Piscina aquecida coberta com 120m² para hotel de luxo. Sistema de aquecimento a gás e tratamento
                automatizado.
              </p>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src="/placeholder.svg?height=400&width=600" alt="Projeto Infantil" />
            </div>
            <div className={styles.projectInfo}>
              <h3>Piscina Infantil - Clube Recreativo</h3>
              <p>
                Piscina infantil com 80m² e profundidade variável. Revestimento antiderrapante e sistema de filtragem de
                alta performance.
              </p>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src="/placeholder.svg?height=400&width=600" alt="Projeto Spa" />
            </div>
            <div className={styles.projectInfo}>
              <h3>Spa Integrado - Residência em Jundiaí</h3>
              <p>Piscina com spa integrado e cascata. Sistema de hidromassagem e iluminação LED com controle remoto.</p>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Quer ver seu projeto aqui?</h2>
          <p>Entre em contato conosco e transforme seu sonho em realidade.</p>
          <a href="/contato" className={styles.ctaButton}>
            Fale Conosco
          </a>
        </div>
      </section>
    </main>
  )
}
