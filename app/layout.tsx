import React from "react"
import type { Metadata } from 'next'
import { Inter, Source_Sans_3 } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' })

export const metadata: Metadata = {
  title: 'UroSpace Spain - Arquitectura de Referencia y Estrategia de Despliegue para el Espacio de Datos Federado de la AEU',
  description: 'Espacio de Datos Federado de la Asociacion Espanola de Urologia - Arquitectura de Referencia IDS, OMOP CDM, Compute-to-Data bajo Gaia-X - urologia.globaldatacare.es',
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
