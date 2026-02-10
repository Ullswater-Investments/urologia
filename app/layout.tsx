import React from "react"
import type { Metadata } from 'next'
import { Inter, Source_Sans_3 } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' })

export const metadata: Metadata = {
  title: 'BioIntelligence Spain - Espacio de Datos Federado para Biotecnologia',
  description: 'Estrategia de Federacion de Datos para el Ecosistema Biotecnologico Espanol bajo AseBio - biotecnologia.globaldatacare.es',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${sourceSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
