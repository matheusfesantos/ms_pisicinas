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
            Conheça alguns dos nossos projetos realizados. Cada piscina recebe
            tratamento personalizado de acordo com as necessidades específicas
            de nossos clientes.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {/* Projeto 1 - Piscina em Chácara */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src="/images/piscinas/piscina-chacara.jpeg"
                alt="Piscina ampla em chácara com área de lazer"
                width={600}
                height={400}
              />
            </div>
            <div className={styles.projectInfo}>
              <h3>Piscina em Chácara</h3>
              <p>
                Serviço completo de manutenção e limpeza para piscina ampla,
                garantindo qualidade da água, controle de pH e remoção de
                impurezas para um lazer sempre seguro e saudável.
              </p>
            </div>
          </div>

          {/* Projeto 2 - Piscina Residencial com Cascata */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src="/images/piscinas/piscina-condominio.jpeg"
                alt="Piscina residencial com cascata em parede decorada"
                width={600}
                height={400}
              />
            </div>
            <div className={styles.projectInfo}>
              <h3>Piscina Residencial com Cascata</h3>
              <p>
                Manutenção especializada para piscinas compactas, com
                monitoramento constante do equilíbrio químico e limpeza de
                cascata para preservar a beleza e a saúde da água.
              </p>
            </div>
          </div>

          {/* Projeto 3 - Piscina Compacta com Pastilhas Azuis */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src="/images/piscinas/piscina-edicula.jpeg"
                alt="Piscina compacta com pastilhas escuras e acabamento refinado"
                width={600}
                height={400}
              />
            </div>
            <div className={styles.projectInfo}>
              <h3>Piscina Compacta com Design Moderno</h3>
              <p>
                Tratamento especializado para piscinas com pastilhas, focando na
                conservação das superfícies e na qualidade da água, com uso
                controlado de produtos e técnicas de limpeza avançadas.
              </p>
            </div>
          </div>

          {/* Projeto 4 - Piscina Personalizada com Degraus Internos */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src="/images/piscinas/piscina-quatroni.jpeg"
                alt="Piscina com degraus internos em ambiente residencial sofisticado"
                width={600}
                height={400}
              />
            </div>
            <div className={styles.projectInfo}>
              <h3>Piscina Personalizada com Degraus</h3>
              <p>
                Serviços avançados de manutenção e tratamento de água para
                piscinas de alto padrão, incluindo limpeza detalhada de degraus
                e controle rigoroso dos níveis químicos.
              </p>
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
  );
}
