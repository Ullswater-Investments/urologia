"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SlideLayoutProps {
  children: ReactNode
  className?: string
  variant?: "default" | "title" | "section" | "dark"
  slideNumber?: number
  totalSlides?: number
  id?: string
}

export function SlideLayout({
  children,
  className,
  variant = "default",
  slideNumber,
  totalSlides,
  id,
}: SlideLayoutProps) {
  const bgStyles = {
    default: "bg-[hsl(210,20%,98%)]",
    title: "bg-[hsl(213,30%,95%)]",
    section: "bg-[hsl(210,25%,96%)]",
    dark: "bg-[hsl(213,25%,93%)]",
  }

  return (
    <section
      id={id}
      className={cn("slide relative flex flex-col", bgStyles[variant], className)}
    >
      {/* EU-style top stripe */}
      <div className="eu-stripe h-1 w-full shrink-0" />

      {/* Content area */}
      <div className="flex flex-1 flex-col px-6 py-8 md:px-16 md:py-12 lg:px-24 lg:py-16">
        {children}
      </div>

      {/* Footer */}
      <div className="flex shrink-0 items-center justify-between border-t border-[hsl(213,80%,45%,0.15)] px-6 py-3 md:px-16 lg:px-24">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-[hsl(45,85%,52%)]"
              />
            ))}
          </div>
          <span className="text-xs tracking-widest text-[hsl(220,15%,50%)] uppercase">
            Espacio de Datos Federado
          </span>
          <a
            href="https://www.biotecnologia.globaldatacare.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[hsl(213,80%,45%)] underline decoration-[hsl(213,80%,45%,0.4)] underline-offset-2 transition-colors hover:text-[hsl(213,80%,55%)]"
          >
            www.biotecnologia.globaldatacare.es
          </a>
        </div>
        {slideNumber && totalSlides && (
          <span className="text-xs font-medium text-[hsl(213,80%,45%)]">
            {slideNumber} / {totalSlides}
          </span>
        )}
      </div>
    </section>
  )
}
