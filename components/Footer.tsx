import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>MS PISCINAS</h3>
            <p>Especialistas em construção e manutenção de piscinas de alta qualidade.</p>
          </div>

          <div className={styles.footerSection}>
            <h3>Links Rápidos</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre</Link>
              </li>
              <li>
                <Link href="/servicos">Serviços</Link>
              </li>
              <li>
                <Link href="/projetos">Projetos</Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Contato</h3>
            <address className={styles.contactInfo}>
              <p>São Paulo, SP</p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://api.whatsapp.com/send/?phone=5519982589177&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (19) 98258-9177
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a href="https://www.instagram.com/rosivalgomes_picineirosp/" target="_blank" rel="noopener noreferrer">
                  @rosivalgomes_picineirosp
                </a>
              </p>
            </address>
          </div>

          <div className={styles.footerSection}>
            <h3>Horário de Funcionamento</h3>
            <p>Segunda a Sexta: 8h às 18h</p>
            <p>Sábado: 8h às 12h</p>
            <p>Domingo: Fechado</p>
          </div>

          <div className={styles.footerSection}>
            <h3>Nossos Parceiros</h3>
            <div className={styles.partnerLogos}>
              <Image src="/images/evoclor-logo.png" alt="Evoclor" width={100} height={100} />
              <Image src="/images/h2o-logo.png" alt="H2O Geradores de Cloro" width={100} height={100} />
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} MS PISCINAS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
