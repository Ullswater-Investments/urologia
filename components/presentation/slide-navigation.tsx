"use client"

import React from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

interface SlideNavigationProps {
  totalSlides: number
  containerRef: React.RefObject<HTMLDivElement | null>
}

export function SlideNavigation({ totalSlides, containerRef }: SlideNavigationProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showNav, setShowNav] = useState(false)

  const updateCurrentSlide = useCallback(() => {
    if (!containerRef.current) return
    const sections = containerRef.current.querySelectorAll("section")
    const scrollTop = window.scrollY + window.innerHeight / 3
    let index = 0
    sections.forEach((section, i) => {
      if (section.offsetTop <= scrollTop) {
        index = i
      }
    })
    setCurrentSlide(index)
    setShowNav(window.scrollY > 200)
  }, [containerRef])

  useEffect(() => {
    window.addEventListener("scroll", updateCurrentSlide)
    return () => window.removeEventListener("scroll", updateCurrentSlide)
  }, [updateCurrentSlide])

  const goToSlide = (index: number) => {
    if (!containerRef.current) return
    const sections = containerRef.current.querySelectorAll("section")
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" })
    }
  }

  const goNext = () => {
    if (currentSlide < totalSlides - 1) goToSlide(currentSlide + 1)
  }

  const goPrev = () => {
    if (currentSlide > 0) goToSlide(currentSlide - 1)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault()
        goNext()
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  })

  return (
    <div
      className={`fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-2 transition-opacity duration-300 ${showNav ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={goPrev}
        disabled={currentSlide === 0}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-[hsl(213,80%,45%,0.3)] bg-[hsl(0,0%,100%,0.9)] text-[hsl(220,25%,18%)] shadow-sm backdrop-blur-md transition-colors hover:bg-[hsl(213,80%,45%,0.1)] disabled:opacity-30"
        aria-label="Seccion anterior"
      >
        <ChevronUp className="h-4 w-4" />
      </button>

      <div className="flex max-h-[60vh] flex-col items-center gap-1 overflow-y-auto rounded-full border border-[hsl(213,80%,45%,0.2)] bg-[hsl(0,0%,100%,0.9)] px-1.5 py-2 shadow-sm backdrop-blur-md scrollbar-none">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`shrink-0 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "h-4 w-2 bg-[hsl(213,80%,45%)]"
                : "h-1.5 w-1.5 bg-[hsl(220,15%,65%,0.4)] hover:bg-[hsl(220,15%,50%,0.7)]"
            }`}
            aria-label={`Ir a seccion ${i + 1}`}
          />
        ))}
      </div>

      <button
        onClick={goNext}
        disabled={currentSlide === totalSlides - 1}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-[hsl(213,80%,45%,0.3)] bg-[hsl(0,0%,100%,0.9)] text-[hsl(220,25%,18%)] shadow-sm backdrop-blur-md transition-colors hover:bg-[hsl(213,80%,45%,0.1)] disabled:opacity-30"
        aria-label="Siguiente seccion"
      >
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Slide counter */}
      <div className="mt-1 rounded-full border border-[hsl(213,80%,45%,0.2)] bg-[hsl(0,0%,100%,0.9)] px-2 py-1 shadow-sm backdrop-blur-md">
        <span className="text-[10px] font-medium text-[hsl(213,80%,45%)]">
          {currentSlide + 1}/{totalSlides}
        </span>
      </div>
    </div>
  )
}
