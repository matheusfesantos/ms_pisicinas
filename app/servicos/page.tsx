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
              <Image src="/images/serviços/agua-tratada.png" alt="Tratamento de Piscinas" width={600} height={400} />
            </div>
            <div className={styles.serviceInfo}>
              <h3>Tratamento de Piscinas</h3>
              <p>Garantimos a qualidade e segurança da água da sua piscina através de tratamentos semanais: 
                Tratamento químico da água, até duas visitas semanais, verificação e ajuste do pH e cloro, 
                aplicação de algicidas e clarificantes, limpeza de bordas e revestimentos, aspiração e remoção de detritos.</p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceInfo}>
              <h3>Manutenção de Piscinas</h3>
              <p>Oferecemos serviços completos de manutenção para preservar a durabilidade e o bom estado da sua piscina: 
                manutenção de bombas e filtros, limpeza de filtros e pré-filtros, detecção e reparo de vazamentos, manutenção de sistemas de aquecimento, 
                verificação de equipamentos elétricos, orientação sobre o uso correto da piscina.</p>
            </div>
            <div className={styles.serviceImage}>
              <Image src="/images/serviços/manutenção-de-pisicina.png" alt="Manutenção de Piscinas" width={600} height={400} />
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceImage}>
              <img src="images/serviços/equipamentos-de-pisicna.jpg" alt="Produtos e Equipamentos" />
            </div>
            <div className={styles.serviceInfo}>
              <h3>Produtos e Equipamentos</h3>
              <p>Utilizamos produtos e equipamentos de qualidade para garantir os melhores resultados: produtos químicos de alta qualidade, 
                parceria com Evoclor e H2O Gerador de Cloro, equipamentos de medição precisos, ferramentas especializadas para limpeza, 
                acessórios para manutenção, consultoria na escolha de equipamentos.</p>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Pronto para transformar sua piscina?</h2>
          <p>Entre em contato conosco para um orçamento personalizado.</p>
          <a href="https://api.whatsapp.com/send/?phone=5519982589177&text&type=phone_number&app_absent=0" 
          target="blank" className={styles.ctaButton}>
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </main>
  )
}
