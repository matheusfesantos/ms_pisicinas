"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span>MS PISCINAS</span>
          </Link>
        </div>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/sobre" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/servicos" onClick={() => setIsMenuOpen(false)}>
                Serviços
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/projetos" onClick={() => setIsMenuOpen(false)}>
                Projetos
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/parceiros" onClick={() => setIsMenuOpen(false)}>
                Parceiros
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contato" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Link>
            </li>
            <li className={styles.navItem}>
              <a
                href="https://www.instagram.com/rosivalgomes_picineirosp/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Instagram
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="https://api.whatsapp.com/send/?phone=5519982589177&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
