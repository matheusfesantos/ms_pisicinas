import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"

export default function ParceirosPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Nossos Parceiros</h1>
      </section>

      <section className={styles.content}>
        <div className={styles.intro}>
          <h2>Parcerias de Qualidade</h2>
          <p>
            Na MS PISCINAS, trabalhamos apenas com os melhores fornecedores e marcas do mercado. Nossas parcerias
            estratégicas nos permitem oferecer produtos e serviços de alta qualidade para garantir a satisfação dos
            nossos clientes.
          </p>
        </div>

        <div className={styles.partnersList}>
          <div className={styles.partnerItem}>
            <div className={styles.partnerLogo}>
              <Image src="/images/evoclor-logo.png" alt="Evoclor" width={300} height={300} />
            </div>
            <div className={styles.partnerInfo}>
              <h3>Evoclor</h3>
              <p>
                A Evoclor é uma empresa especializada em produtos químicos para tratamento de piscinas. Com uma linha
                completa de produtos de alta qualidade, a Evoclor nos ajuda a garantir água cristalina e segura para
                nossos clientes.
              </p>
              <p>
                Utilizamos os produtos Evoclor em nossos tratamentos semanais, garantindo eficiência no controle de
                algas, bactérias e outros microrganismos, além de manter o pH da água sempre equilibrado.
              </p>
            </div>
          </div>

          <div className={styles.partnerItem}>
            <div className={styles.partnerLogo}>
              <Image src="/images/h2o-logo.png" alt="H2O Geradores de Cloro" width={300} height={300} />
            </div>
            <div className={styles.partnerInfo}>
              <h3>H2O Geradores de Cloro</h3>
              <p>
                A H2O é especializada em sistemas de geração de cloro para piscinas. Seus equipamentos inovadores
                permitem a produção de cloro a partir do sal comum, oferecendo uma alternativa mais econômica e
                ecológica para o tratamento de piscinas.
              </p>
              <p>
                Recomendamos e instalamos os geradores de cloro H2O para clientes que buscam reduzir custos com produtos
                químicos e desejam uma solução mais sustentável para o tratamento da água de suas piscinas.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2>Benefícios das Nossas Parcerias</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <h3>Produtos de Qualidade</h3>
              <p>
                Acesso aos melhores produtos do mercado, garantindo resultados superiores no tratamento e manutenção de
                piscinas.
              </p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Preços Competitivos</h3>
              <p>
                Nossas parcerias nos permitem oferecer produtos e serviços com excelente custo-benefício para nossos
                clientes.
              </p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Suporte Técnico</h3>
              <p>
                Contamos com o suporte técnico especializado de nossos parceiros para solucionar qualquer problema ou
                desafio.
              </p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Inovação Constante</h3>
              <p>Acesso às mais recentes inovações e tecnologias para o tratamento e manutenção de piscinas.</p>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Quer saber mais sobre nossos produtos e serviços?</h2>
          <p>Entre em contato conosco para uma consulta personalizada.</p>
          <Link href="/contato" className={styles.ctaButton}>
            Fale Conosco
          </Link>
        </div>
      </section>
    </main>
  )
}
