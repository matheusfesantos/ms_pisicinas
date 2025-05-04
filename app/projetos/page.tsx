import styles from "./page.module.css"

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
            Conheça alguns dos nossos projetos realizados. Cada piscina é única e personalizada de acordo com as
            necessidades e desejos de nossos clientes.
          </p>
        </div>

        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src="/placeholder.svg?height=400&width=600" alt="Projeto Residencial" />
            </div>
            <div className={styles.projectInfo}>
              <h3>Piscina Residencial - Alphaville</h3>
              <p>
                Piscina de borda infinita com 50m² em residência de alto padrão. Revestimento em pastilhas de vidro azul
                e sistema de aquecimento solar.
              </p>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src="/placeholder.svg?height=400&width=600" alt="Projeto Condomínio" />
            </div>
            <div className={styles.projectInfo}>
              <h3>Piscina para Condomínio - São Paulo</h3>
              <p>
                Piscina semi-olímpica com 250m² para área de lazer de condomínio. Inclui sistema de tratamento
                automatizado e iluminação LED.
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
