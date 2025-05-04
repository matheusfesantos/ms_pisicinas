import styles from "./page.module.css"

export default function SobrePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Sobre a MS PISCINAS</h1>
      </section>

      <section className={styles.content}>
        <div className={styles.aboutSection}>
          <div className={styles.aboutText}>
            <h2>Nossa História</h2>
            <p>
              A MS PISCINAS foi fundada por Rosival Gomes dos Santos e conta com mais de 8 anos de experiência no setor,
              oferecendo serviços especializados em tratamento e manutenção de piscinas. Começamos com o compromisso de
              garantir a qualidade e segurança da água das piscinas de nossos clientes.
            </p>
            <p>
              Nossa jornada tem sido marcada pelo compromisso com a excelência e a satisfação dos clientes. Realizamos
              tratamentos semanais, com até duas visitas por semana, garantindo que a água da sua piscina esteja sempre
              em perfeitas condições.
            </p>
          </div>
        </div>

        <div className={styles.missionSection}>
          <h2>Nossa Missão, Visão e Valores</h2>
          <div className={styles.missionCards}>
            <div className={styles.missionCard}>
              <h3>Missão</h3>
              <p>
                Proporcionar momentos de lazer e bem-estar através do tratamento e manutenção de piscinas com
                excelência, qualidade e responsabilidade.
              </p>
            </div>
            <div className={styles.missionCard}>
              <h3>Visão</h3>
              <p>
                Ser reconhecida como a empresa líder no segmento de tratamento de piscinas, referência em qualidade e
                atendimento personalizado.
              </p>
            </div>
            <div className={styles.missionCard}>
              <h3>Valores</h3>
              <ul>
                <li>Compromisso com a qualidade</li>
                <li>Ética e transparência</li>
                <li>Responsabilidade ambiental</li>
                <li>Capacitação contínua da equipe</li>
                <li>Foco na satisfação do cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
