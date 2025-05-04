"use client"

import type React from "react"

import { useState } from "react"
import styles from "./page.module.css"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio de formulário
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Mensagem enviada com sucesso! Entraremos em contato em breve.")
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      })

      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        setSubmitMessage("")
      }, 5000)
    }, 1500)
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Entre em Contato</h1>
      </section>

      <section className={styles.content}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h2>Informações de Contato</h2>
            <p>
              Estamos prontos para atender você e responder a todas as suas dúvidas. Entre em contato conosco pelos
              canais abaixo ou preencha o formulário.
            </p>

            <div className={styles.infoItem}>
              <h3>Endereço</h3>
              <p>Rua das Piscinas, 123 - São Paulo, SP</p>
            </div>

            <div className={styles.infoItem}>
              <h3>Telefone/WhatsApp</h3>
              <p>
                <a
                  href="https://api.whatsapp.com/send/?phone=5519982589177&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (19) 98258-9177
                </a>
              </p>
            </div>

            <div className={styles.infoItem}>
              <h3>Redes Sociais</h3>
              <p>
                Instagram:{" "}
                <a href="https://www.instagram.com/rosivalgomes_picineirosp/" target="_blank" rel="noopener noreferrer">
                  @rosivalgomes_picineirosp
                </a>
              </p>
            </div>

            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>contato@mspiscinas.com</p>
            </div>

            <div className={styles.infoItem}>
              <h3>Horário de Atendimento</h3>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>

            <div className={styles.infoItem}>
              <h3>Nossos Parceiros</h3>
              <p>Evoclor</p>
              <p>H2O Gerador de Cloro</p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2>Envie uma Mensagem</h2>

            {submitMessage && <div className={styles.successMessage}>{submitMessage}</div>}

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="assunto">Assunto</label>
                <select id="assunto" name="assunto" value={formData.assunto} onChange={handleChange} required>
                  <option value="">Selecione um assunto</option>
                  <option value="Tratamento Semanal">Tratamento Semanal</option>
                  <option value="Manutenção">Manutenção</option>
                  <option value="Limpeza">Limpeza</option>
                  <option value="Produtos">Produtos</option>
                  <option value="Dúvidas">Dúvidas</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>

        <div className={styles.mapSection}>
          <h2>Nossa Localização</h2>
          <div className={styles.map}>
            {/* Aqui seria inserido um mapa real, usando Google Maps ou similar */}
            <img src="/placeholder.svg?height=400&width=1200" alt="Mapa de Localização" className={styles.mapImage} />
          </div>
        </div>
      </section>
    </main>
  )
}
