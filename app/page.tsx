"use client"

import { useRef } from "react"
import { SlideNavigation } from "@/components/presentation/slide-navigation"
import {
  UroSlideCover,
  UroSlideVision,
  UroSlideEcosistema,
  UroSlidePIEM,
  UroSlideClusterA,
  UroSlideClusterA2,
  UroSlideClusterB,
  UroSlideClusterC,
  UroSlideClusterD,
  UroSlideArquitectura,
  UroSlideConectorEDC,
  UroSlideC2D,
  UroSlideOMOP,
  UroSlideMarcoLegal,
  UroSlideProteccionDatos,
  UroSlideFinanciacion,
  UroSlideGastosElegibles,
  UroSlideHojaDeRuta1,
  UroSlideHojaDeRuta2,
  UroSlideConclusion,
  UroSlideObrasCitadas1,
  UroSlideObrasCitadas2,
  UroSlideObrasCitadas3,
  UroSlideCierre,
} from "@/components/presentation/urospace-slides"

const TOTAL_SLIDES = 24

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <main className="relative min-h-screen w-full bg-background">
      <div ref={containerRef} className="presentation-container">
        <UroSlideCover />
        <UroSlideVision />
        <UroSlideEcosistema />
        <UroSlidePIEM />
        <UroSlideClusterA />
        <UroSlideClusterA2 />
        <UroSlideClusterB />
        <UroSlideClusterC />
        <UroSlideClusterD />
        <UroSlideArquitectura />
        <UroSlideConectorEDC />
        <UroSlideC2D />
        <UroSlideOMOP />
        <UroSlideMarcoLegal />
        <UroSlideProteccionDatos />
        <UroSlideFinanciacion />
        <UroSlideGastosElegibles />
        <UroSlideHojaDeRuta1 />
        <UroSlideHojaDeRuta2 />
        <UroSlideConclusion />
        <UroSlideObrasCitadas1 />
        <UroSlideObrasCitadas2 />
        <UroSlideObrasCitadas3 />
        <UroSlideCierre />
      </div>
      <SlideNavigation totalSlides={TOTAL_SLIDES} containerRef={containerRef} />
    </main>
  )
}
