import type React from "react"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "MS Piscinas | Especialistas em Tratamento e Manutenção de Piscinas",
  description:
    "Mais de 8 anos de experiência em tratamento e manutenção de piscinas. Garantimos a qualidade e segurança da água da sua piscina em Limeira e região.",
  keywords: ["piscinas", "manutenção de piscinas", "tratamento de água", "limpeza de piscinas", "Limeira", "SP"],
  icons: {
    icon: "/images/logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0c4a6e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
