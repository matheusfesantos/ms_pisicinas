"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Send, MessageCircle, ChevronRight, RotateCcw } from "lucide-react"

interface Message {
  type: "bot" | "user"
  content: string
}

interface FormData {
  nome: string
  servico: string
  cidade: string
  tamanho: string
  estilo: string
  horario: string
}

const QUESTIONS = [
  {
    id: "nome",
    question: "Ola! Sou o AquaBot, assistente virtual da MS Piscinas. Qual seu nome?",
    options: [],
    isTextInput: true,
  },
  {
    id: "servico",
    question: "Prazer! Qual servico voce precisa?",
    options: [
      "Tratamento de agua da piscina",
      "Instalacao de gerador de cloro",
      "Recuperacao de agua da piscina",
      "Manutencao de equipamentos",
      "Construcao de piscina",
      "Outro servico",
    ],
  },
  {
    id: "cidade",
    question: "Em qual cidade voce mora?",
    options: [
      "Limeira",
      "Piracicaba",
      "Campinas",
      "Santa Barbara",
      "Outra cidade",
    ],
  },
  {
    id: "tamanho",
    question: "Qual o tamanho aproximado da sua piscina?",
    options: [
      "Pequena (ate 20 mil litros)",
      "Media (20 a 50 mil litros)",
      "Grande (50 a 100 mil litros)",
      "Extra grande (acima de 100 mil litros)",
      "Nao sei informar",
    ],
  },
  {
    id: "estilo",
    question: "Qual o tipo da sua piscina?",
    options: [
      "Fibra de vidro",
      "Alvenaria (concreto)",
      "Vinil",
      "Ainda nao tenho piscina",
      "Nao sei informar",
    ],
  },
  {
    id: "horario",
    question: "Qual o melhor horario para atendimento?",
    options: [
      "Manha (8h - 12h)",
      "Tarde (12h - 18h)",
      "Qualquer horario",
      "Somente finais de semana",
    ],
  },
]

export default function AquaBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", content: QUESTIONS[0].question },
  ])
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    servico: "",
    cidade: "",
    tamanho: "",
    estilo: "",
    horario: "",
  })
  const [textInput, setTextInput] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  const handleOptionClick = (option: string) => {
    const currentQuestion = QUESTIONS[currentStep]
    
    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: option }])

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }))

    setTextInput("")

    // Move to next step or complete
    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", content: QUESTIONS[currentStep + 1].question },
        ])
        setCurrentStep((prev) => prev + 1)
      }, 500)
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: "Perfeito! Preparei um resumo do seu atendimento. Clique no botao abaixo para enviar pelo WhatsApp.",
          },
        ])
        setIsComplete(true)
      }, 500)
    }
  }

  const handleTextSubmit = () => {
    if (!textInput.trim()) return

    const currentQuestion = QUESTIONS[currentStep]
    
    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: textInput }])

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [currentQuestion.id]: textInput,
    }))

    setTextInput("")

    // Move to next step or complete
    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", content: QUESTIONS[currentStep + 1].question },
        ])
        setCurrentStep((prev) => prev + 1)
      }, 500)
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: "Perfeito! Preparei um resumo do seu atendimento. Clique no botao abaixo para enviar pelo WhatsApp.",
          },
        ])
        setIsComplete(true)
      }, 500)
    }
  }

  const generateWhatsAppMessage = () => {
    const message = `Ola! Meu nome eh ${formData.nome}. Vim pelo site da MS Piscinas.

*Resumo do atendimento:*
- Servico: ${formData.servico}
- Cidade: ${formData.cidade}
- Tamanho da piscina: ${formData.tamanho}
- Tipo da piscina: ${formData.estilo}
- Horario preferido: ${formData.horario}

Aguardo retorno!`

    const encodedMessage = encodeURIComponent(message)
    return `https://api.whatsapp.com/send/?phone=5519982589177&text=${encodedMessage}&type=phone_number&app_absent=0`
  }

  const resetChat = () => {
    setCurrentStep(0)
    setMessages([{ type: "bot", content: QUESTIONS[0].question }])
    setFormData({
      nome: "",
      servico: "",
      cidade: "",
      tamanho: "",
      estilo: "",
      horario: "",
    })
    setTextInput("")
    setIsComplete(false)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground p-4 rounded-full shadow-lg transition-all hover:scale-110 ${
          isOpen ? "hidden" : "flex"
        } items-center gap-2`}
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline font-medium">AquaBot</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[600px]">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
              <Image
                src="/images/aquatech-logo.png"
                alt="AquaBot"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-primary-foreground font-semibold">AquaBot</h3>
              <p className="text-primary-foreground/70 text-xs">
                Assistente virtual MS Piscinas
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] bg-secondary/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-card border border-border text-foreground rounded-bl-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}

            {/* Options */}
            {!isComplete && (
              <div className="space-y-2">
                {QUESTIONS[currentStep].isTextInput ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleTextSubmit()
                        }
                      }}
                      placeholder="Digite seu nome..."
                      className="flex-1 px-3 py-2 bg-card border border-border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      autoFocus
                    />
                    <button
                      onClick={handleTextSubmit}
                      disabled={!textInput.trim()}
                      className="px-3 py-2 bg-accent text-accent-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  QUESTIONS[currentStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="w-full text-left p-3 bg-card border border-border rounded-xl text-sm text-foreground hover:border-accent hover:bg-accent/5 transition-all flex items-center justify-between group"
                    >
                      <span>{option}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </button>
                  ))
                )}
              </div>
            )}

            {/* Summary and WhatsApp Button */}
            {isComplete && (
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-3 text-sm">
                    Resumo do atendimento:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <span className="text-foreground">Nome:</span>{" "}
                      {formData.nome}
                    </li>
                    <li>
                      <span className="text-foreground">Servico:</span>{" "}
                      {formData.servico}
                    </li>
                    <li>
                      <span className="text-foreground">Cidade:</span>{" "}
                      {formData.cidade}
                    </li>
                    <li>
                      <span className="text-foreground">Tamanho:</span>{" "}
                      {formData.tamanho}
                    </li>
                    <li>
                      <span className="text-foreground">Tipo:</span>{" "}
                      {formData.estilo}
                    </li>
                    <li>
                      <span className="text-foreground">Horario:</span>{" "}
                      {formData.horario}
                    </li>
                  </ul>
                </div>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white p-3 rounded-xl font-medium hover:bg-[#20BD5A] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Enviar pelo WhatsApp
                </a>

                <button
                  onClick={resetChat}
                  className="flex items-center justify-center gap-2 w-full bg-secondary text-foreground p-3 rounded-xl font-medium hover:bg-secondary/80 transition-colors text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  Iniciar novo atendimento
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-border bg-card">
            <p className="text-center text-xs text-muted-foreground">
              Desenvolvido por{" "}
              <a
                href="https://www.aquatechsoftware.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                AquaTech Software
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
