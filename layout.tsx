import { Inter, Lora } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" })
const chatterbox = localFont({
  src: "../public/fonts/ChatterboxBoldItalic.woff2",
  variable: "--font-chatterbox",
})

export const metadata = {
  title: "ESPARX 2025 - A National Level Technical Symposium",
  description: "Join us for ESPARX 2025, a futuristic technical symposium featuring workshops, contests, and more.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} ${lora.variable} ${chatterbox.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'