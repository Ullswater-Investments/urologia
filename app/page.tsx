"use client"

import { useRef } from "react"
import { SlideNavigation } from "@/components/presentation/slide-navigation"
import {
  SlideCover,
  SlideContexto,
  SlideImperativo,
  SlideMarcoRegulatorio,
  SlideZonaRoja,
  SlideZonaVerde,
  SlideDiagramaValor,
  SlideArquitectura,
  SlideConectoresIDS,
  SlideSSI,
  SlideSmartContracts,
  SlideC2D,
  SlideClusterA1,
  SlideClusterB,
  SlideClusterC,
  SlideClusterD,
  SlideEconomiaIndividual,
  SlideEconomiaColectiva,
  SlideAgentesEcosistema,
  SlideHojaDeRuta,
  SlideConclusion,
  SlideCondicionesTransparentes,
  SlideAyudasKit,
  SlideProcesoPago,
  SlideResumenEconomico,
  SlideEstructuraFases,
  SlideQueIncluye,
  SlidePlanCompleto,
  SlideRetornoInversion,
  SlideTriadaEstrategica,
  SlideRequisitosElegibilidad,
  SlideTaxonomia,
  SlideAgentes,
  SlidePontusX,
  SlideCasoUsoA,
  SlideCasoUsoB,
  SlideCasoUsoC,
  SlideHojaDeRutaPractica,
  SlideVentanaOportunidad,
} from "@/components/presentation/slides"

const TOTAL_SLIDES = 39

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <main className="relative min-h-screen w-full bg-background">
      <div ref={containerRef} className="presentation-container">
        <SlideCover />
        <SlideContexto />
        <SlideImperativo />
        <SlideMarcoRegulatorio />
        <SlideZonaRoja />
        <SlideZonaVerde />
        <SlideDiagramaValor />
        <SlideArquitectura />
        <SlideConectoresIDS />
        <SlideSSI />
        <SlideSmartContracts />
        <SlideC2D />
        <SlideClusterA1 />
        <SlideClusterB />
        <SlideClusterC />
        <SlideClusterD />
        <SlideEconomiaIndividual />
        <SlideEconomiaColectiva />
        <SlideAgentesEcosistema />
        <SlideHojaDeRuta />
        <SlideConclusion />
        <SlideCondicionesTransparentes />
        <SlideAyudasKit />
        <SlideProcesoPago />
        <SlideResumenEconomico />
        <SlideEstructuraFases />
        <SlideQueIncluye />
        <SlidePlanCompleto />
        <SlideRetornoInversion />
        <SlideTriadaEstrategica />
        <SlideRequisitosElegibilidad />
        <SlideTaxonomia />
        <SlideAgentes />
        <SlidePontusX />
        <SlideCasoUsoA />
        <SlideCasoUsoB />
        <SlideCasoUsoC />
        <SlideHojaDeRutaPractica />
        <SlideVentanaOportunidad />
      </div>
      <SlideNavigation totalSlides={TOTAL_SLIDES} containerRef={containerRef} />
    </main>
  )
}
