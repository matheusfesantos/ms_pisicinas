import type React from "react"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/react" // ✅ IMPORTADO AQUI
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MS PISCINAS - Especialistas em Construção e Manutenção de Piscinas",
  description:
    "MS PISCINAS oferece serviços de construção, manutenção e reforma de piscinas com qualidade e excelência.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
