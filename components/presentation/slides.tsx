"use client"

import { SlideLayout } from "./slide-layout"
import {
  Database,
  Shield,
  Server,
  Lock,
  BarChart3,
  Globe,
  Users,
  Building2,
  Zap,
  FileText,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Network,
  Eye,
  Target,
  BookOpen,
  Cpu,
  Fingerprint,
  Link2,
  Truck,
  HeartPulse,
  Activity,
  Clock,
  Wallet,
  Binary,
  ShieldCheck,
  CircleDollarSign,
  Factory,
  Megaphone,
  Leaf,
  Thermometer,
  Stethoscope,
  Syringe,
  Microscope,
  ClipboardList,
  FlaskConical,
  Dna,
  Bug,
  Wheat,
} from "lucide-react"

/* Pre-computed EU star positions (hardcoded) to avoid hydration mismatch */
const EU_STARS_42: [number, number][] = [
  [0, -42], [21, -36.373], [36.373, -21], [42, 0],
  [36.373, 21], [21, 36.373], [0, 42], [-21, 36.373],
  [-36.373, 21], [-42, 0], [-36.373, -21], [-21, -36.373],
]

const EU_STARS_34: [number, number][] = [
  [0, -34], [17, -29.445], [29.445, -17], [34, 0],
  [29.445, 17], [17, 29.445], [0, 34], [-17, 29.445],
  [-29.445, 17], [-34, 0], [-29.445, -17], [-17, -29.445],
]

const TOTAL = 39

/* ------------------------------------------------------------------ */
/* SLIDE 1 - PORTADA                                                   */
/* ------------------------------------------------------------------ */
export function SlideCover() {
  return (
    <SlideLayout variant="title" slideNumber={1} totalSlides={TOTAL} id="slide-1">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        {/* EU Stars circle */}
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[hsl(45,85%,52%,0.4)]" />
          {EU_STARS_42.map((pos, i) => (
            <div
              key={i}
              className="absolute h-2.5 w-2.5 rounded-full bg-[hsl(45,85%,52%)]"
              style={{ transform: `translate(${pos[0]}px, ${pos[1]}px)` }}
            />
          ))}
          <Dna className="h-10 w-10 text-[hsl(213,80%,45%)]" />
        </div>

        <p className="mb-4 text-base font-medium tracking-[0.3em] text-[hsl(213,80%,45%)] uppercase">
          www.biotecnologia.GlobalDataCare.es
        </p>

        <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-[hsl(220,25%,12%)] md:text-5xl lg:text-7xl text-balance">
          BioIntelligence Spain: Espacio de Datos Federado para Biotecnolog{"í"}a
        </h1>

        <div className="eu-stripe mb-8 h-1 w-32 rounded-full" />

        <h2 className="max-w-3xl text-lg leading-relaxed text-[hsl(220,15%,35%)] md:text-xl">
          Estrategia de Federaci{"ó"}n de Datos para el Ecosistema Biotecnol{"ó"}gico Espa{"ñ"}ol bajo AseBio
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {["Gaia-X", "Pontus-X", "GDPR", "Compute-to-Data", "AseBio", "EHDS"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[hsl(213,80%,45%,0.25)] bg-[hsl(213,80%,45%,0.06)] px-4 py-1.5 text-sm font-medium text-[hsl(213,80%,45%)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 2 - CONTEXTO Y OPORTUNIDAD                                    */
/* ------------------------------------------------------------------ */
export function SlideContexto() {
  return (
    <SlideLayout slideNumber={2} totalSlides={TOTAL} id="slide-2">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 1
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          De la Patente Aislada a la Inteligencia Compartida
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-6 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La industria biotecnol{"ó"}gica espa{"ñ"}ola, representada por AseBio, opera en un entorno de alt{"í"}sima complejidad cient{"í"}fica y riesgo financiero. A diferencia del sector de dispositivos m{"é"}dicos (donde el activo es un hardware), en la biotecnolog{"í"}a el activo fundamental es el conocimiento biol{"ó"}gico: estructuras moleculares, secuencias gen{"ó"}micas y cepas microbianas.
        </p>

        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Hist{"ó"}ricamente, la protecci{"ó"}n de este conocimiento mediante patentes ha fomentado un modelo de {'"'}silos herm{"é"}ticos{'"'}. Sin embargo, la convergencia de la Inteligencia Artificial y la Biolog{"í"}a Computacional est{"á"} haciendo insostenible este aislamiento. Los algoritmos de IA generativa para el dise{"ñ"}o de f{"á"}rmacos o la predicci{"ó"}n de estructuras prote{"í"}cas (tipo AlphaFold) requieren vol{"ú"}menes de datos que ninguna biotech posee individualmente.
        </p>

        <div className="rounded-xl border border-[hsl(45,85%,52%,0.3)] bg-[hsl(45,85%,52%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(45,85%,42%)]" />
            <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
              La creaci{"ó"}n de un Espacio de Datos Federado permite romper la paradoja IP vs. colaboraci{"ó"}n: entrenar modelos de IA colaborativos sin revelar las estructuras moleculares propietarias ni los secretos industriales. Permite transitar de {'"'}IP bloqueada{'"'} a {'"'}Inteligencia Compartida Segura{'"'}.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Dna,
              title: "AseBio como Orquestador",
              desc: "La Asociaci\u00F3n Espa\u00F1ola de Bioempresas agrupa m\u00E1s de 300 socios \u2014desde gigantes como Almirall o PharmaMar hasta startups como Oryzon y centros como el CNIO.",
            },
            {
              icon: Shield,
              title: "Protecci\u00F3n de la IP",
              desc: "En biotecnolog\u00EDa, la sensibilidad no reside en el precio comercial, sino en la Propiedad Industrial en fases tempranas: mol\u00E9culas, dianas terap\u00E9uticas y secretos de proceso.",
            },
            {
              icon: Layers,
              title: "Duplicidad de Fracasos",
              desc: "M\u00FAltiples empresas invierten millones en investigar dianas terap\u00E9uticas que otras ya descartaron por toxicidad, sin que ese \"conocimiento negativo\" se comparta.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[hsl(213,80%,45%,0.15)] bg-[hsl(0,0%,100%)] p-5 shadow-sm"
            >
              <item.icon className="mb-3 h-6 w-6 text-[hsl(213,80%,45%)]" />
              <h3 className="mb-2 text-base font-semibold text-[hsl(220,25%,12%)]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La fragmentaci{"ó"}n actual genera ineficiencias cr{"í"}ticas: los datos de grupos de control (placebo) de ensayos cl{"í"}nicos finalizados quedan archivados cuando podr{"í"}an reutilizarse para crear {'"'}Grupos de Control Sint{"é"}ticos{'"'} que aceleren futuros estudios. La federaci{"ó"}n de datos no es una opci{"ó"}n, sino una necesidad de supervivencia competitiva.
        </p>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 3 - IMPERATIVO REGULATORIO                                     */
/* ------------------------------------------------------------------ */
export function SlideImperativo() {
  return (
    <SlideLayout variant="section" slideNumber={3} totalSlides={TOTAL} id="slide-3">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 1.1
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          El Imperativo: IA Generativa, Valle de la Muerte y Biolog{"í"}a Computacional
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La era de la Biolog{"í"}a Computacional y la IA Generativa cambia las reglas del juego. Los algoritmos de dise{"ñ"}o de f{"á"}rmacos de novo y predicci{"ó"}n de plegamiento prote{"í"}co necesitan vol{"ú"}menes de datos de entrenamiento que ninguna biotech posee por s{"í"} sola. La creaci{"ó"}n de un espacio federado permite entrenar modelos colaborativos sin revelar secretos industriales.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: FlaskConical,
              title: "El Valle de la Muerte en I+D",
              desc: "El ciclo de descubrimiento de f\u00E1rmacos es largo y costoso. M\u00FAltiples empresas invierten millones en dianas terap\u00E9uticas que otras ya descartaron internamente por toxicidad, sin que ese \u201Cconocimiento negativo\u201D se comparta.",
            },
            {
              icon: Target,
              title: "Subutilizaci\u00F3n de Datos Cl\u00EDnicos",
              desc: "Los datos de los grupos de control (placebo) de ensayos cl\u00EDnicos finalizados quedan archivados, cuando podr\u00EDan reutilizarse para crear Grupos de Control Sint\u00E9ticos que aceleren futuros estudios y reduzcan costes.",
            },
            {
              icon: Microscope,
              title: "IA Generativa para Drug Design",
              desc: "Algoritmos tipo AlphaFold requieren datos masivos de entrenamiento. La federaci\u00F3n permite acceder a datos moleculares y gen\u00F3micos diversos sin centralizar la IP en un \u00FAnico servidor vulnerable.",
            },
            {
              icon: TrendingUp,
              title: "Supervivencia Competitiva",
              desc: "La fragmentaci\u00F3n actual genera ineficiencias cr\u00EDticas. La federaci\u00F3n permite transitar de un modelo de \u201CIP bloqueada\u201D a uno de \u201CInteligencia Compartida Segura\u201D para todo el ecosistema AseBio.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(213,80%,45%,0.1)]">
                  <item.icon className="h-5 w-5 text-[hsl(213,80%,45%)]" />
                </div>
                <h3 className="text-base font-semibold text-[hsl(220,25%,12%)]">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 4 - MARCO REGULATORIO INTRO                                    */
/* ------------------------------------------------------------------ */
export function SlideMarcoRegulatorio() {
  return (
    <SlideLayout slideNumber={4} totalSlides={TOTAL} id="slide-4">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 2
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Marco Regulatorio y Competencia: Navegando la Zona Segura
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Al igual que en otros sectores, la viabilidad de este espacio depende del cumplimiento estricto del derecho de la competencia. Sin embargo, en biotecnolog{"í"}a, la sensibilidad no reside tanto en el precio comercial, sino en la Propiedad Industrial (IP) en fases tempranas de descubrimiento.
        </p>

        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          El dise{"ñ"}o del espacio de datos debe blindar la IP. La arquitectura de gobernanza debe implementar controles t{"é"}cnicos y legales (Compliance by Design) que hagan t{"é"}cnicamente imposible la revelaci{"ó"}n de secretos industriales, especialmente las estructuras qu{"í"}micas en fase de patentamiento.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border-2 border-[hsl(0,75%,55%,0.3)] bg-[hsl(0,75%,55%,0.04)] p-5">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-[hsl(0,65%,50%)]" />
              <h3 className="text-lg font-semibold text-[hsl(0,65%,50%)]">Zona Roja</h3>
            </div>
            <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">
              Variables de riesgo cr{"í"}tico para la IP que el sistema debe bloquear t{"é"}cnicamente. La revelaci{"ó"}n destruir{"í"}a la novedad de una patente o dar{"í"}a pistas estrat{"é"}gicas a competidores.
            </p>
          </div>
          <div className="rounded-xl border-2 border-[hsl(145,55%,42%,0.3)] bg-[hsl(145,55%,42%,0.04)] p-5">
            <div className="mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[hsl(145,55%,42%)]" />
              <h3 className="text-lg font-semibold text-[hsl(145,55%,42%)]">Zona Verde / Safe Harbor</h3>
            </div>
            <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">
              Vasto territorio de datos {'"'}pre-competitivos{'"'} que, al federarse, multiplican el valor para todos sin comprometer la exclusividad comercial de ninguna bioempresa.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 5 - ZONA ROJA                                                  */
/* ------------------------------------------------------------------ */
export function SlideZonaRoja() {
  return (
    <SlideLayout variant="section" slideNumber={5} totalSlides={TOTAL} id="slide-5">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 2.1
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          La Zona Roja: Variables de Riesgo Competitivo Estricto
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          En biotecnolog{"í"}a, el riesgo de competencia es cr{"í"}tico en la fase de descubrimiento (early-stage). Estas variables deben estar t{"é"}cnicamente bloqueadas para evitar la revelaci{"ó"}n de secretos industriales.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: FlaskConical,
              title: "Estructuras Qu\u00EDmicas (Markush)",
              desc: "La f\u00F3rmula exacta de una mol\u00E9cula en desarrollo antes de su patentamiento es el activo m\u00E1s valioso. Su revelaci\u00F3n destruir\u00EDa la novedad y anular\u00EDa a\u00F1os de investigaci\u00F3n y millones de inversi\u00F3n.",
              color: "hsl(0,75%,55%)",
            },
            {
              icon: Eye,
              title: "Dianas Terap\u00E9uticas No Publicadas",
              desc: "Revelar qu\u00E9 prote\u00EDna o gen est\u00E1 investigando una empresa antes de la patente dar\u00EDa pistas estrat\u00E9gicas inmediatas a los competidores sobre su pipeline de I+D.",
              color: "hsl(0,75%,55%)",
            },
            {
              icon: CircleDollarSign,
              title: "Precios de Licencia y Royalties",
              desc: "Los detalles financieros de los acuerdos de transferencia de tecnolog\u00EDa o royalties negociados entre bioempresas. Estrategias de precios de licencia y condiciones comerciales sensibles.",
              color: "hsl(0,75%,55%)",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[hsl(0,75%,55%,0.2)] bg-[hsl(0,75%,55%,0.03)] p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(0,75%,55%,0.1)]">
                  <item.icon className="h-5 w-5 text-[hsl(0,65%,50%)]" />
                </div>
                <h3 className="text-base font-semibold text-[hsl(220,25%,12%)]">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[hsl(0,75%,55%,0.3)] bg-[hsl(0,75%,55%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(0,65%,50%)]" />
            <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
              Revelar sobre qu{"é"} prote{"í"}na est{"á"} trabajando una bioempresa antes de la patente dar{"í"}a pistas estrat{"é"}gicas inmediatas. La arquitectura Compute-to-Data garantiza que las estructuras moleculares y dianas terap{"é"}uticas nunca salgan del per{"í"}metro de la empresa.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 6 - ZONA VERDE / SAFE HARBOR                                  */
/* ------------------------------------------------------------------ */
export function SlideZonaVerde() {
  return (
    <SlideLayout slideNumber={6} totalSlides={TOTAL} id="slide-6">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 2.2
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          La Zona Verde y el Puerto Seguro ({'"'}Safe Harbor{'"'})
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Existe un vasto territorio de datos {'"'}pre-competitivos{'"'} que, al federarse, multiplican el valor para todos sin comprometer la exclusividad comercial. Estos datos ahorran a otros cometer los mismos errores: {'"'}Fail fast, fail cheap{'"'}.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: ShieldCheck,
              title: "Datos de Toxicidad Precl\u00EDnica",
              desc: "Compartir datos anonimizados sobre estructuras qu\u00EDmicas (ofuscadas) que fallaron por toxicidad hep\u00E1tica o card\u00EDaca. Esto evita que otros socios repitan el mismo error sin revelar la mol\u00E9cula completa.",
            },
            {
              icon: BarChart3,
              title: "Grupos de Control Hist\u00F3ricos",
              desc: "Datos de pacientes que recibieron placebo o est\u00E1ndar de cuidado en ensayos pasados. No revelan nada sobre el f\u00E1rmaco experimental, pero son oro puro para dise\u00F1ar nuevos ensayos y crear Brazos de Control Sint\u00E9ticos.",
            },
            {
              icon: Dna,
              title: "Datos \u00D3micos Poblacionales",
              desc: "Variantes gen\u00E9ticas de fondo en la poblaci\u00F3n espa\u00F1ola (frecuencias al\u00E9licas), cruciales para la medicina de precisi\u00F3n y vitales para empresas de diagn\u00F3stico como Genomcore o Dreamgenics.",
            },
            {
              icon: Leaf,
              title: "Huella de Carbono de Bioprocesos",
              desc: "Datos de sostenibilidad agregados para cumplimiento ESG. Consumo de agua y energ\u00EDa en bioprocesos fermentativos. \u00C1rea pre-competitiva por excelencia esperada por la sociedad e inversores.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[hsl(145,55%,42%,0.2)] bg-[hsl(145,55%,42%,0.03)] p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(145,55%,42%,0.1)]">
                  <item.icon className="h-5 w-5 text-[hsl(145,55%,42%)]" />
                </div>
                <h3 className="text-base font-semibold text-[hsl(220,25%,12%)]">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[hsl(45,85%,52%,0.3)] bg-[hsl(45,85%,52%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(45,85%,42%)]" />
            <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
              Las variables situadas en la zona verde (alto valor, bajo riesgo) constituyen el {'"'}sweet spot{'"'} del espacio de datos federado. Es aqu{"í"} donde AseBio debe concentrar sus esfuerzos: toxicidad precl{"í"}nica, grupos de control hist{"ó"}ricos y datos {"ó"}micos poblacionales.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 7 - DIAGRAMA VALOR VS RIESGO                                  */
/* ------------------------------------------------------------------ */
export function SlideDiagramaValor() {
  return (
    <SlideLayout variant="section" slideNumber={7} totalSlides={TOTAL} id="slide-7">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Figura Conceptual
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Mapa Estrat{"é"}gico: Valor vs. Riesgo Competitivo
        </h2>
      </div>

      <div className="flex flex-1 flex-col items-center gap-6 pb-4">
        <p className="max-w-3xl text-center text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Las variables del espacio de datos se clasifican seg{"ú"}n su valor para la I+D y su sensibilidad de Propiedad Industrial. AseBio debe concentrar sus esfuerzos en el cuadrante de alto valor y bajo riesgo.
        </p>

        {/* Conceptual quadrant */}
        <div className="grid w-full max-w-3xl grid-cols-2 gap-4">
          <div className="rounded-xl border-2 border-[hsl(0,75%,55%,0.3)] bg-[hsl(0,75%,55%,0.05)] p-6 text-center">
            <AlertTriangle className="mx-auto mb-2 h-8 w-8 text-[hsl(0,65%,50%)]" />
            <h3 className="mb-1 text-lg font-bold text-[hsl(0,65%,50%)]">Alto Riesgo / Alto Valor</h3>
            <p className="text-sm text-[hsl(220,10%,45%)]">Estructuras Markush, dianas terap{"é"}uticas no publicadas, royalties</p>
            <span className="mt-2 inline-block rounded-full bg-[hsl(0,75%,55%,0.1)] px-3 py-1 text-xs font-bold text-[hsl(0,65%,50%)]">PROHIBIDO</span>
          </div>
          <div className="rounded-xl border-2 border-[hsl(145,55%,42%,0.3)] bg-[hsl(145,55%,42%,0.05)] p-6 text-center">
            <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-[hsl(145,55%,42%)]" />
            <h3 className="mb-1 text-lg font-bold text-[hsl(145,55%,42%)]">Bajo Riesgo / Alto Valor</h3>
            <p className="text-sm text-[hsl(220,10%,45%)]">Toxicidad precl{"í"}nica, grupos de control hist{"ó"}ricos, datos {"ó"}micos, huella de carbono</p>
            <span className="mt-2 inline-block rounded-full bg-[hsl(145,55%,42%,0.1)] px-3 py-1 text-xs font-bold text-[hsl(145,55%,42%)]">SWEET SPOT</span>
          </div>
          <div className="rounded-xl border border-[hsl(220,10%,75%,0.4)] bg-[hsl(220,10%,96%)] p-6 text-center">
            <h3 className="mb-1 text-lg font-bold text-[hsl(220,10%,50%)]">Alto Riesgo / Bajo Valor</h3>
            <p className="text-sm text-[hsl(220,10%,45%)]">Vol{"ú"}menes de producci{"ó"}n exactos, capacidades de biorreactores</p>
            <span className="mt-2 inline-block rounded-full bg-[hsl(220,10%,90%)] px-3 py-1 text-xs font-bold text-[hsl(220,10%,50%)]">EVITAR</span>
          </div>
          <div className="rounded-xl border border-[hsl(213,80%,45%,0.3)] bg-[hsl(213,80%,45%,0.05)] p-6 text-center">
            <h3 className="mb-1 text-lg font-bold text-[hsl(213,80%,45%)]">Bajo Riesgo / Bajo Valor</h3>
            <p className="text-sm text-[hsl(220,10%,45%)]">Datos p{"ú"}blicos, normativas, est{"á"}ndares GA4GH abiertos</p>
            <span className="mt-2 inline-block rounded-full bg-[hsl(213,80%,45%,0.1)] px-3 py-1 text-xs font-bold text-[hsl(213,80%,45%)]">BASE</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 8 - ARQUITECTURA TECNICA INTRO                                 */
/* ------------------------------------------------------------------ */
export function SlideArquitectura() {
  return (
    <SlideLayout slideNumber={8} totalSlides={TOTAL} id="slide-8">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 3
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Arquitectura T{"é"}cnica: Soberan{"í"}a y Federaci{"ó"}n bajo GlobalDataCare
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Para convencer a una biotech de que conecte sus datos, la seguridad debe ser absoluta. El modelo centralizado ({'"'}subir datos a la nube{'"'}) es inaceptable: si un servidor central es hackeado, las bioempresas perder{"í"}an sus secuencias gen{"ó"}micas y estructuras moleculares propietarias. La soluci{"ó"}n es la arquitectura federada Pontus-X / Gaia-X con el paradigma Compute-to-Data.
        </p>

        <div className="rounded-xl border border-[hsl(45,85%,52%,0.3)] bg-[hsl(45,85%,52%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(45,85%,42%)]" />
            <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
              En un modelo federado, el dato no se mueve. Permanece almacenado en los servidores de su propietario original. Lo que viaja a trav{"é"}s de la red no es el dato en bruto, sino el algoritmo de an{"á"}lisis y los resultados computados. Esta arquitectura, conocida como {'"'}Compute-to-Data{'"'}, es la base t{"é"}cnica de globaldatacare.es.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border-2 border-[hsl(0,75%,55%,0.2)] bg-[hsl(0,75%,55%,0.03)] p-5">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-[hsl(0,65%,50%)]">
              <AlertTriangle className="h-5 w-5" /> Data Lake Centralizado
            </h3>
            <ul className="space-y-2">
              {["Empresas env\u00EDan datos a repositorio com\u00FAn", "P\u00E9rdida de control sobre los activos", "Riesgo de brechas de confidencialidad", "Desconfianza del participante"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,15%,35%)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(0,65%,50%)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border-2 border-[hsl(145,55%,42%,0.2)] bg-[hsl(145,55%,42%,0.03)] p-5">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-[hsl(145,55%,42%)]">
              <CheckCircle2 className="h-5 w-5" /> Federaci{"ó"}n Gaia-X / Pontus-X
            </h3>
            <ul className="space-y-2">
              {["Dato permanece en origen (soberan\u00EDa)", "Algoritmo viaja al dato (Compute-to-Data)", "Resultados agregados y an\u00F3nimos", "Cumplimiento GDPR + competencia"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,15%,35%)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(145,55%,42%)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 9 - CONECTORES IDS                                             */
/* ------------------------------------------------------------------ */
export function SlideConectoresIDS() {
  return (
    <SlideLayout variant="section" slideNumber={9} totalSlides={TOTAL} id="slide-9">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 3.1
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Conectores IDS: La Puerta de Enlace Segura
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          El Conector EDC (Eclipse Dataspace Components) act{"ú"}a como un {'"'}guardi{"á"}n{'"'} que nunca deja salir los datos brutos. Cada socio de AseBio (ej. Zendal, Almirall) instala un conector en su propio servidor, manteniendo el control f{"í"}sico absoluto de sus activos moleculares y gen{"ó"}micos.
        </p>

        {/* Visual diagram */}
        <div className="flex flex-col items-center gap-3 rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(213,80%,45%,0.03)] p-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(213,80%,45%,0.1)]">
                <Building2 className="h-6 w-6 text-[hsl(213,80%,45%)]" />
              </div>
              <span className="text-xs text-[hsl(220,15%,40%)]">Bioempresa</span>
              <span className="text-xs text-[hsl(220,10%,50%)]">Conector EDC</span>
            </div>
            <ArrowRight className="h-4 w-4 text-[hsl(213,80%,45%,0.4)]" />
            <div className="flex flex-col items-center gap-1 rounded-xl border-2 border-dashed border-[hsl(45,85%,52%,0.5)] px-6 py-3">
              <Server className="h-8 w-8 text-[hsl(45,85%,42%)]" />
              <span className="text-sm font-semibold text-[hsl(45,70%,35%)]">GlobalDataCare.es</span>
              <span className="text-xs text-[hsl(220,15%,45%)]">(Federaci{"ó"}n de Datos)</span>
            </div>
            <ArrowRight className="h-4 w-4 text-[hsl(213,80%,45%,0.4)]" />
            <div className="flex flex-col items-center gap-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(160,50%,38%,0.1)]">
                <Stethoscope className="h-6 w-6 text-[hsl(160,50%,38%)]" />
              </div>
              <span className="text-xs text-[hsl(220,15%,40%)]">Hospital / CNIO</span>
              <span className="text-xs text-[hsl(220,10%,50%)]">Conector EDC</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-[hsl(220,25%,12%)]">Modelo Connector-as-a-Service para Startups Biotech</h3>
          <div className="flex flex-col gap-4">
            {[
              "Una entidad tecnol\u00F3gica proveedora opera un conector multi-inquilino (multi-tenant) en la nube para startups y PYMES biotecnol\u00F3gicas.",
              "Las peque\u00F1as bioempresas interaccionan a trav\u00E9s de interfaces simplificadas (APIs ligeras o portales web).",
              "AseBio act\u00FAa como orquestador neutral, asegurando soberan\u00EDa de datos equivalente para startups y grandes pharmas.",
              "Democratizaci\u00F3n del acceso a la inteligencia de datos del sector biotecnol\u00F3gico.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(160,50%,38%)]" />
                <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 10 - IDENTIDAD SOBERANA (SSI)                                  */
/* ------------------------------------------------------------------ */
export function SlideSSI() {
  return (
    <SlideLayout slideNumber={10} totalSlides={TOTAL} id="slide-10">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 3.2
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Identidad Soberana (SSI) y Permisos Granulares
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La Identidad Soberana (SSI) permite que cada actor {"\u2014"}empresa, dispositivo m{"é"}dico, investigador{"\u2014"} tenga una identidad digital verificable y {"ú"}nica. Esto elimina la necesidad de usuarios y contrase{"ñ"}as centralizados, permitiendo una gesti{"ó"}n de permisos granular y descentralizada.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
            <Wallet className="mb-3 h-8 w-8 text-[hsl(213,80%,45%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">Wallets Web3 Corporativas</h3>
            <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
              Custodia de claves privadas a nivel organizativo. Protocolos internos para determinar qui{"é"}n tiene acceso a la wallet corporativa de la empresa sanitaria.
            </p>
          </div>
          <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
            <ShieldCheck className="mb-3 h-8 w-8 text-[hsl(145,55%,42%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">Credenciales Verificables (VCs)</h3>
            <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
              Vinculan criptogr{"á"}ficamente la direcci{"ó"}n blockchain con la identidad legal real. Ejemplo: autorizar a un grupo de investigaci{"ó"}n a acceder a datos de huella de carbono, revocando el permiso al concluir el proyecto.
            </p>
          </div>
          <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
            <Fingerprint className="mb-3 h-8 w-8 text-[hsl(36,80%,45%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">KYB (Know Your Business)</h3>
            <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
              Onboarding riguroso bajo el Gaia-X Trust Framework. No se interact{"ú"}a con direcciones an{"ó"}nimas, sino con entidades verificadas del ecosistema sanitario.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 11 - SMART CONTRACTS / ODRL                                    */
/* ------------------------------------------------------------------ */
export function SlideSmartContracts() {
  return (
    <SlideLayout variant="section" slideNumber={11} totalSlides={TOTAL} id="slide-11">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 3.3
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Contratos Inteligentes y Pol{"í"}ticas ODRL
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Los Contratos Inteligentes (Smart Contracts) y las pol{"í"}ticas de uso estandarizadas (ODRL) automatizan las reglas de negocio y gobernanza. Las reglas de competencia se cumplen no por buena voluntad, sino por imposici{"ó"}n criptogr{"á"}fica del c{"ó"}digo.
        </p>

        <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-[hsl(220,25%,12%)]">Ejemplo de Pol{"í"}tica Automatizada</h3>
          <div className="rounded-lg bg-[hsl(220,25%,12%)] p-4">
            <code className="text-sm leading-relaxed text-[hsl(145,55%,75%)]">
              {'"'}Los datos de consumo energ{"é"}tico del equipo X pueden ser utilizados para el c{"á"}lculo de medias sectoriales de eficiencia, pero NO pueden ser visualizados individualmente ni utilizados para fines comerciales directos.{'"'}
            </code>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Lock,
              title: "Compliance by Design",
              desc: "Las pol\u00EDticas de competencia definidas en la secci\u00F3n regulatoria se implementan como c\u00F3digo ejecutable, no como documentos legales interpretables.",
            },
            {
              icon: Link2,
              title: "ODRL Estandarizado",
              desc: "Open Digital Rights Language permite definir permisos, prohibiciones y obligaciones de forma interoperable entre todos los participantes del ecosistema.",
            },
            {
              icon: Cpu,
              title: "Ejecuci\u00F3n Automatizada",
              desc: "Smart Contracts gestionan autom\u00E1ticamente las transacciones de datos: acceso, pago, revocaci\u00F3n y auditor\u00EDa sin intervenci\u00F3n humana.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
              <item.icon className="mb-3 h-6 w-6 text-[hsl(213,80%,45%)]" />
              <h3 className="mb-2 text-base font-semibold text-[hsl(220,25%,12%)]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 12 - COMPUTE-TO-DATA                                           */
/* ------------------------------------------------------------------ */
export function SlideC2D() {
  return (
    <SlideLayout slideNumber={12} totalSlides={TOTAL} id="slide-12">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 3.4
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Compute-to-Data: El Algoritmo Viaja, No el Dato
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Supongamos que un investigador quiere entrenar un modelo de IA para predecir la toxicidad de nuevas mol{"é"}culas, utilizando datos de cinco bioempresas de AseBio. En el modelo Compute-to-Data, el algoritmo viaja al dato, nunca al rev{"é"}s.
        </p>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            { step: "1", title: "Env\u00EDo del Algoritmo", desc: "El investigador env\u00EDa un modelo de IA (ej. predicci\u00F3n de toxicidad) a los conectores de las cinco bioempresas.", color: "hsl(213,80%,45%)" },
            { step: "2", title: "Ejecuci\u00F3n Local", desc: "El modelo entra en el entorno seguro de cada empresa y se entrena con los datos moleculares privados dentro de su firewall.", color: "hsl(145,55%,42%)" },
            { step: "3", title: "Solo Salen los Pesos", desc: "Solo salen los \u201Cpesos\u201D del modelo (el aprendizaje matem\u00E1tico). La secuencia gen\u00F3mica o mol\u00E9cula nunca sali\u00F3 de la empresa due\u00F1a.", color: "hsl(36,80%,45%)" },
            { step: "4", title: "IP Intacta", desc: "El modelo se hace m\u00E1s inteligente, pero las estructuras moleculares, cepas y secuencias gen\u00F3micas nunca abandonan la custodia de la bioempresa.", color: "hsl(280,60%,50%)" },
          ].map((item) => (
            <div key={item.step} className="rounded-2xl bg-[hsl(0,0%,100%)] p-5 shadow-sm">
              <span className="mb-2 inline-block text-3xl font-black" style={{ color: item.color }}>{item.step}</span>
              <h4 className="mb-1 text-lg font-bold text-[hsl(220,25%,12%)]">{item.title}</h4>
              <p className="text-sm leading-relaxed text-[hsl(220,15%,35%)]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-[hsl(145,55%,42%,0.06)] px-6 py-4">
          <p className="text-center text-base text-[hsl(220,15%,35%)]">
            <strong className="text-[hsl(145,55%,35%)]">IP qu{"í"}mica intacta, IA m{"á"}s inteligente:</strong> Esta arquitectura se alinea con GlobalDataCare.es como conector hacia datos hospitalarios (RWE), cerrando el ciclo entre investigaci{"ó"}n (AseBio) y pr{"á"}ctica cl{"í"}nica.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 13 - CLUSTER A: DESCUBRIMIENTO Y PRECLINICA (BIO-ROJA)        */
/* ------------------------------------------------------------------ */
export function SlideClusterA1() {
  return (
    <SlideLayout variant="section" slideNumber={13} totalSlides={TOTAL} id="slide-13">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 4 {"\u2014"} Cl{"ú"}ster A: Bio-Salud (Biotecnolog{"í"}a Roja)
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Descubrimiento y Precl{"í"}nica: Reducir la Tasa de Atrici{"ó"}n
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Actores clave: Almirall, PharmaMar, Oryzon Genomics, Zendal, 3P Biopharmaceuticals, Reig Jofre. El reto principal es el {'"'}Valle de la Muerte{'"'} en el descubrimiento de f{"á"}rmacos y la falta de diversidad gen{"é"}tica en los ensayos cl{"í"}nicos.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: Syringe,
              title: "\"Control Groups as a Service\" (Grupos de Control Sint\u00E9ticos)",
              desc: "Federar datos hist\u00F3ricos de grupos de control (placebo) de todos los socios. Una startup podr\u00EDa comparar su nueva mol\u00E9cula contra un \u201Cpaciente virtual\u201D generado a partir de miles de datos hist\u00F3ricos de Almirall o Rovi, sin acceder a los datos de los f\u00E1rmacos experimentales.",
            },
            {
              icon: Bug,
              title: "Vigilancia Gen\u00F3mica Federada",
              desc: "Compartir variantes gen\u00E9ticas anonimizadas de pat\u00F3genos (virus/bacterias) detectadas por empresas de diagn\u00F3stico (ej. Certest Biotec, Genomcore) para predecir brotes o resistencias a antibi\u00F3ticos en tiempo real.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(213,80%,45%,0.1)]">
                  <item.icon className="h-5 w-5 text-[hsl(213,80%,45%)]" />
                </div>
                <h3 className="text-base font-semibold text-[hsl(220,25%,12%)]">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[hsl(45,85%,52%,0.3)] bg-[hsl(45,85%,52%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(45,85%,42%)]" />
            <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
              Las Bibliotecas de Compuestos Fallidos (estructuras ofuscadas vinculadas a resultados de toxicidad) y los Biomarcadores de Respuesta (datos gen{"ó"}micos agregados que correlacionan mutaciones con falta de eficacia) son variables de alt{"í"}simo valor pre-competitivo.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 14 - CLUSTER B: DESARROLLO CLINICO                             */
/* ------------------------------------------------------------------ */
export function SlideClusterB() {
  return (
    <SlideLayout slideNumber={14} totalSlides={TOTAL} id="slide-14">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 4 {"\u2014"} Cl{"ú"}ster B: Desarrollo Cl{"í"}nico y Medicina de Precisi{"ó"}n
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Acelerar Ensayos Cl{"í"}nicos y Reducir Costes de Reclutamiento
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          El acceso a Grupos de Control Sint{"é"}ticos puede ahorrar entre un 20% y un 30% del coste de un ensayo cl{"í"}nico de Fase II, al reducir la necesidad de reclutar pacientes f{"í"}sicos para el grupo placebo. Esto acelera el time-to-market en meses o a{"ñ"}os.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: HeartPulse,
              title: "Brazos de Control Sint\u00E9ticos para Enfermedades Raras",
              desc: "Variables demogr\u00E1ficas, cl\u00EDnicas y \u00F3micas de pacientes en brazos de control hist\u00F3ricos. Permite construir grupos de control sint\u00E9ticos para enfermedades raras, donde reclutar pacientes es dif\u00EDcil y \u00E9ticamente complejo.",
              color: "hsl(45,85%,42%)",
            },
            {
              icon: Dna,
              title: "Incidencia de Variantes Gen\u00E9ticas en Poblaci\u00F3n Espa\u00F1ola",
              desc: "Frecuencia de alelos raros en la poblaci\u00F3n espa\u00F1ola, vital para empresas de diagn\u00F3stico como Genomcore o Dreamgenics. Datos \u00F3micos poblacionales cruciales para la medicina de precisi\u00F3n y el dise\u00F1o de terapias personalizadas.",
              color: "hsl(45,85%,42%)",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[hsl(45,85%,52%,0.2)] bg-[hsl(45,85%,52%,0.03)] p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(45,85%,52%,0.15)]">
                  <item.icon className="h-5 w-5 text-[hsl(45,85%,42%)]" />
                </div>
                <h3 className="text-base font-semibold text-[hsl(220,25%,12%)]">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 15 - CLUSTER C: BIO-INDUSTRIAL Y ALIMENTARIA                   */
/* ------------------------------------------------------------------ */
export function SlideClusterC() {
  return (
    <SlideLayout variant="section" slideNumber={15} totalSlides={TOTAL} id="slide-15">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 4 {"\u2014"} Cl{"ú"}ster C: Bio-Industrial y Alimentaria (Blanca/Verde)
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Optimizaci{"ó"}n de Bioprocesos y Escalado Industrial
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Actores clave: Repsol, Biobide, 3P Biopharmaceuticals (CDMOs), MOA Foodtech, Tebrio, Biovegen. El reto principal: pasar del matraz al biorreactor de 10.000 litros suele fallar por falta de datos predictivos de escalado.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: Thermometer,
              title: "Gemelo Digital de Fermentaci\u00F3n",
              desc: "Las CDMOs y empresas industriales federan datos de sensores de bioprocesos (pH, ox\u00EDgeno disuelto, temperatura) de lotes fallidos y exitosos. Un modelo de IA federado aprende las condiciones \u00F3ptimas de escalado para diferentes cepas bacterianas sin revelar qu\u00E9 producto exacto se fabrica.",
              color: "hsl(160,50%,38%)",
            },
            {
              icon: Wheat,
              title: "Bio-Ensayo Clim\u00E1tico Distribuido",
              desc: "Cruzar datos fenot\u00EDpicos de cultivos experimentales situados en distintas latitudes con datos meteorol\u00F3gicos federados. Acelera la identificaci\u00F3n de semillas resistentes a la sequ\u00EDa sin revelar la modificaci\u00F3n gen\u00E9tica espec\u00EDfica de la semilla.",
              color: "hsl(160,50%,38%)",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[hsl(160,50%,38%,0.2)] bg-[hsl(160,50%,38%,0.03)] p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(160,50%,38%,0.1)]">
                  <item.icon className="h-5 w-5 text-[hsl(160,50%,38%)]" />
                </div>
                <h3 className="text-base font-semibold text-[hsl(220,25%,12%)]">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 16 - CLUSTER D: CADENA DE SUMINISTRO Y SOSTENIBILIDAD          */
/* ------------------------------------------------------------------ */
export function SlideClusterD() {
  return (
    <SlideLayout slideNumber={16} totalSlides={TOTAL} id="slide-16">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 4 {"\u2014"} Cl{"ú"}ster D: Cadena de Suministro, Calidad y ESG
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Resiliencia Log{"í"}stica y Sostenibilidad en Bioprocesos
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La resiliencia ante roturas de stock de reactivos cr{"í"}ticos y la sostenibilidad son {"á"}reas pre-competitivas por excelencia donde la colaboraci{"ó"}n es esperada por la sociedad, los inversores y los reguladores ESG.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: Truck,
              title: "Disponibilidad de Insumos Cr\u00EDticos",
              desc: "Sem\u00E1foros de stock de medios de cultivo, filtros o viales, permitiendo pr\u00E9stamos de emergencia entre socios (coopetencia log\u00EDstica) sin revelar vol\u00FAmenes de producci\u00F3n exactos. Sistema de alerta temprana para el sector.",
              color: "hsl(340,65%,48%)",
            },
            {
              icon: Leaf,
              title: "Huella Ambiental de Bioprocesos y Novel Foods",
              desc: "Datos de An\u00E1lisis de Ciclo de Vida (LCA) promedio para prote\u00EDnas alternativas (Tebrio, MOA Foodtech). Huella de carbono y consumo de agua/energ\u00EDa en fermentaci\u00F3n, facilitando cumplimiento de normativa Novel Foods y ESG.",
              color: "hsl(340,65%,48%)",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[hsl(340,65%,48%,0.2)] bg-[hsl(340,65%,48%,0.03)] p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(340,65%,48%,0.1)]">
                  <item.icon className="h-5 w-5 text-[hsl(340,65%,48%)]" />
                </div>
                <h3 className="text-base font-semibold text-[hsl(220,25%,12%)]">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[hsl(45,85%,52%,0.3)] bg-[hsl(45,85%,52%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(45,85%,42%)]" />
            <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
              El Benchmarking de Sostenibilidad Industrial (consumo de agua/energ{"í"}a en bioprocesos) es el caso de uso de {'"'}bajo riesgo{'"'} ideal para el piloto inicial, ya que establece la media del sector sin revelar informaci{"ó"}n competitivamente sensible.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 17 - ECONOMIA INDIVIDUAL                                       */
/* ------------------------------------------------------------------ */
export function SlideEconomiaIndividual() {
  return (
    <SlideLayout variant="section" slideNumber={17} totalSlides={TOTAL} id="slide-17">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 5
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Econom{"í"}a del Dato: Beneficios Individuales
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Para una PYME biotecnol{"ó"}gica, el ROI de participar en este espacio es directo y medible en ahorro de costes de I+D. El acceso a Grupos de Control Sint{"é"}ticos puede ahorrar entre un 20% y un 30% del coste de un ensayo cl{"í"}nico de Fase II.
        </p>

        <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
          <TrendingUp className="mb-3 h-6 w-6 text-[hsl(213,80%,45%)]" />
          <h3 className="mb-3 text-lg font-semibold text-[hsl(220,25%,12%)]">Eficiencia en I+D: {'"'}Fail Fast, Fail Cheap{'"'}</h3>
          <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
            El acceso a datos federados de toxicidad precl{"í"}nica permite evitar repetir errores costosos. Compartir que {'"'}la mol{"é"}cula con subestructura X caus{"ó"} toxicidad hep{"á"}tica{'"'} ahorra a otros cometer el mismo error, reduciendo dr{"á"}sticamente el tiempo y coste del ciclo de descubrimiento.
          </p>
        </div>

        <div className="rounded-xl border border-[hsl(145,55%,42%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
          <Target className="mb-3 h-6 w-6 text-[hsl(145,55%,42%)]" />
          <h3 className="mb-3 text-lg font-semibold text-[hsl(220,25%,12%)]">Monetizaci{"ó"}n de Activos Latentes</h3>
          <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
            Las empresas pueden monetizar datos que hoy son un {'"'}coste hundido{'"'}. Una empresa con miles de datos hist{"ó"}ricos de toxicidad puede licenciar el acceso a estos datos (v{"í"}a tokens en Pontus-X) para que terceros entrenen modelos de IA, generando una nueva l{"í"}nea de ingresos sin vender su IP central.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 18 - ECONOMIA COLECTIVA                                        */
/* ------------------------------------------------------------------ */
export function SlideEconomiaColectiva() {
  return (
    <SlideLayout slideNumber={18} totalSlides={TOTAL} id="slide-18">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 5.2
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Econom{"í"}a Colectiva: Lobby Basado en Evidencia
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          A nivel sectorial, los datos agregados transforman a AseBio de una asociaci{"ó"}n gremial a un hub tecnol{"ó"}gico de inteligencia distribuida, posicionando a la biotecnolog{"í"}a espa{"ñ"}ola a la vanguardia de la econom{"í"}a del dato en Europa.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Megaphone,
              title: "Posicionamiento Europeo",
              desc: "AseBio se convierte en referente de la econom\u00EDa del dato biol\u00F3gico en Europa. Los datos agregados del sector permiten lobby basado en evidencia ante la administraci\u00F3n p\u00FAblica y la Comisi\u00F3n Europea.",
            },
            {
              icon: Cpu,
              title: "Marketplace de Algoritmos de IA",
              desc: "Startups de IA desarrollan modelos predictivos (toxicidad, plegamiento prote\u00EDco) y los \u201Calquilan\u201D v\u00EDa Compute-to-Data sobre datos federados. Modelo Pay-per-Compute que genera ingresos compartidos.",
            },
            {
              icon: Users,
              title: "Conexi\u00F3n I+D \u2014 Pr\u00E1ctica Cl\u00EDnica",
              desc: "La interconexi\u00F3n con GlobalDataCare.es permite a los socios de AseBio lanzar consultas sobre datos hospitalarios reales (RWE) para validar sus dianas terap\u00E9uticas, acelerando el acceso al mercado.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
              <item.icon className="mb-3 h-6 w-6 text-[hsl(213,80%,45%)]" />
              <h4 className="mb-2 text-base font-semibold text-[hsl(220,25%,12%)]">{item.title}</h4>
              <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 19 - AGENTES DEL ECOSISTEMA                                    */
/* ------------------------------------------------------------------ */
export function SlideAgentesEcosistema() {
  return (
    <SlideLayout variant="section" slideNumber={19} totalSlides={TOTAL} id="slide-19">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 6
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Integraci{"ó"}n del Ecosistema: Roles de los Agentes
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          El {"é"}xito de BioIntelligence Spain no depende solo de la tecnolog{"í"}a, sino de la adhesi{"ó"}n de los tres tipos de agentes del ecosistema biotecnol{"ó"}gico.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
            <FlaskConical className="mb-3 h-8 w-8 text-[hsl(213,80%,45%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">Grandes Pharmas y CDMOs</h3>
            <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
              Almirall, PharmaMar, Zendal, 3P Biopharmaceuticals. Poseen enormes vol{"ú"}menes de datos hist{"ó"}ricos de ensayos y toxicidad. Incentivo: monetizar datos latentes y acelerar sus propios pipelines de I+D.
            </p>
          </div>
          <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
            <Zap className="mb-3 h-8 w-8 text-[hsl(145,55%,42%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">Startups Biotech e IA</h3>
            <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
              Oryzon, Genomcore, Dreamgenics y startups de IA. El espacio federado reduce dr{"á"}sticamente sus barreras de entrada, permitiendo entrenar modelos de IA sobre datos moleculares y gen{"ó"}micos diversos sin negociar acuerdos bilaterales.
            </p>
          </div>
          <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
            <Building2 className="mb-3 h-8 w-8 text-[hsl(36,80%,45%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">Centros de Investigaci{"ó"}n y Hospitales</h3>
            <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
              CNIO, centros tecnol{"ó"}gicos y hospitales universitarios. Se benefician de acceso a algoritmos de IA entrenados federadamente y de la conexi{"ó"}n con GlobalDataCare.es para cerrar el ciclo I+D-Paciente con datos de mundo real (RWE).
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 20 - HOJA DE RUTA                                              */
/* ------------------------------------------------------------------ */
export function SlideHojaDeRuta() {
  return (
    <SlideLayout slideNumber={20} totalSlides={TOTAL} id="slide-20">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 6.2
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Hoja de Ruta de Implementaci{"ó"}n
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <div className="relative flex flex-col gap-4 pl-6">
          {/* Timeline line */}
          <div className="absolute bottom-4 left-[11px] top-4 w-0.5 bg-[hsl(213,80%,45%,0.2)]" />

          {[
            {
              phase: "Fase 1: Consorcio BioData Spain (Meses 1-3)",
              title: "Constituci\u00F3n y Solicitud del Kit",
              desc: "AseBio act\u00FAa como orquestador neutral. Selecci\u00F3n de 3-5 empresas tractoras (Pharma grande, CDMO, Centro Tecnol\u00F3gico) para definir el Rulebook. Campa\u00F1a informativa: \u201CNo pierdas tus 30.000\u20AC\u201D.",
              color: "hsl(213,80%,45%)",
            },
            {
              phase: "Fase 2: Despliegue de Nodos Piloto (Meses 4-8)",
              title: "Conectores Pontus-X y Caso de Uso Piloto",
              desc: "Implementaci\u00F3n de conectores en socios tractores. Ejecuci\u00F3n del primer caso de uso de bajo riesgo: Benchmarking de Sostenibilidad Industrial \u2014 compartir datos de consumo de agua/energ\u00EDa en bioprocesos.",
              color: "hsl(145,55%,42%)",
            },
            {
              phase: "Fase 3: Conexi\u00F3n con Salud (Meses 9-12)",
              title: "Interconexi\u00F3n con GlobalDataCare.es",
              desc: "Permite a los socios de AseBio lanzar consultas sobre datos hospitalarios reales para validar dianas terap\u00E9uticas. Monetizaci\u00F3n del valor de sus algoritmos. Apertura del Marketplace de algoritmos de IA.",
              color: "hsl(36,80%,45%)",
            },
          ].map((item) => (
            <div key={item.phase} className="relative flex gap-4">
              <div
                className="z-10 mt-1 h-5 w-5 shrink-0 rounded-full border-2"
                style={{ borderColor: item.color, backgroundColor: `${item.color}20` }}
              />
              <div className="flex-1 rounded-xl border border-[hsl(213,80%,45%,0.1)] bg-[hsl(0,0%,100%)] p-4 shadow-sm">
                <span className="text-sm font-bold" style={{ color: item.color }}>
                  {item.phase}
                </span>
                <h4 className="mb-1 text-base font-semibold text-[hsl(220,25%,12%)]">{item.title}</h4>
                <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 21 - CONCLUSION                                                */
/* ------------------------------------------------------------------ */
export function SlideConclusion() {
  return (
    <SlideLayout variant="dark" slideNumber={21} totalSlides={TOTAL} id="slide-21">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        {/* EU Stars circle */}
        <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[hsl(45,85%,52%,0.4)]" />
          {EU_STARS_42.map((pos, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-[hsl(45,85%,52%)]"
              style={{ transform: `translate(${pos[0]}px, ${pos[1]}px)` }}
            />
          ))}
          <CheckCircle2 className="h-8 w-8 text-[hsl(213,80%,45%)]" />
        </div>

        <span className="mb-4 text-sm font-semibold tracking-[0.3em] text-[hsl(213,80%,45%)] uppercase">
          Conclusi{"ó"}n
        </span>

        <h2 className="mb-8 max-w-3xl text-3xl font-bold leading-tight text-[hsl(220,25%,12%)] md:text-5xl text-balance">
          BioIntelligence Spain: Inteligencia Distribuida para la Biotecnolog{"í"}a
        </h2>

        <p className="mb-8 max-w-3xl text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La creaci{"ó"}n del espacio de datos BioIntelligence Spain bajo el liderazgo de AseBio no es una opci{"ó"}n futurista, sino una necesidad urgente financiable hoy. Permite a las bioempresas espa{"ñ"}olas superar la fragmentaci{"ó"}n, proteger su IP mediante Compute-to-Data y acelerar la innovaci{"ó"}n mediante inteligencia colectiva, posicionando al sector como referente europeo en la econom{"í"}a del dato biol{"ó"}gico.
        </p>

        <div className="eu-stripe mb-8 h-1 w-32 rounded-full" />

        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            "Soberan\u00EDa del Dato",
            "Compute-to-Data",
            "IP Intacta",
            "Inteligencia Compartida",
            "EHDS Ready",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[hsl(213,80%,45%,0.2)] bg-[hsl(213,80%,45%,0.06)] px-4 py-1.5 text-sm font-medium text-[hsl(213,80%,45%)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/*  BLOQUE II - KIT ESPACIO DE DATOS / AYUDAS                         */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/* SLIDE 22 - CONDICIONES TRANSPARENTES                                 */
/* ------------------------------------------------------------------ */
export function SlideCondicionesTransparentes() {
  return (
    <SlideLayout variant="default" slideNumber={22} totalSlides={TOTAL} id="slide-22">
      <div className="flex flex-1 flex-col items-center">
        {/* Orange banner */}
        <div className="mb-8 w-full overflow-hidden rounded-full" style={{ background: "hsl(36,90%,55%)" }}>
          <div className="flex flex-wrap items-center justify-center gap-4 px-6 py-3 text-center">
            <span className="flex items-center gap-2 text-sm font-semibold text-[hsl(0,0%,100%)] md:text-base">
              Plazo de Inscripci{"ó"}n y solicitud de ayudas KIT ESPACIO de DATOS hasta el 20 de Marzo del 2026
            </span>
          </div>
        </div>

        {/* Badge */}
        <div className="mb-6 rounded-full border border-[hsl(220,10%,75%)] bg-[hsl(0,0%,100%)] px-6 py-2">
          <span className="flex items-center gap-2 text-sm font-medium text-[hsl(220,25%,12%)]">
            Programa Kit Espacio de Datos
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-center text-4xl font-black text-[hsl(220,25%,12%)] md:text-5xl lg:text-6xl">
          Condiciones Transparentes
        </h2>

        {/* Subtitle */}
        <p className="mb-10 text-center text-lg text-[hsl(220,10%,45%)] md:text-xl">
          Todo lo que necesitas saber antes de inscribirte. Sin letra peque{"ñ"}a.
        </p>

        {/* Image */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <img src="/images/condiciones-transparentes.png" alt="Condiciones Transparentes - Kit Espacios de Datos, Gobierno de Espana, red.es" className="max-h-[400px] w-full max-w-3xl rounded-xl object-contain" />
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 23 - AYUDAS KIT ESPACIO DE DATOS                               */
/* ------------------------------------------------------------------ */
export function SlideAyudasKit() {
  return (
    <SlideLayout variant="section" slideNumber={23} totalSlides={TOTAL} id="slide-23">
      <div className="flex flex-1 flex-col items-center">
        {/* Header row */}
        <div className="mb-6 flex w-full flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(145,60%,92%)]">
              <span className="text-2xl font-bold text-[hsl(145,60%,35%)]">{"€"}</span>
            </div>
            <h2 className="text-3xl font-black text-[hsl(220,25%,12%)] md:text-4xl">
              AYUDAS KIT ESPACIO DE DATOS
            </h2>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="rounded-full px-5 py-2 text-sm font-bold text-[hsl(0,0%,100%)]" style={{ background: "hsl(36,90%,55%)" }}>
              Inscripci{"ó"}n hasta 20 de Marzo del 2026
            </div>
            <div className="rounded-full bg-[hsl(0,75%,55%)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[hsl(0,0%,100%)]">
              PLAZAS LIMITADAS
            </div>
          </div>
        </div>

        {/* Main text */}
        <p className="mb-6 text-lg text-[hsl(220,15%,35%)] md:text-xl">
          Digitaliza tu empresa de tecnolog{"í"}a sanitaria con <span className="text-2xl font-bold text-[hsl(220,25%,12%)]">hasta 30.000 {"€"}</span> de Subvenci{"ó"}n a fondo perdido de RED.ES
        </p>

        {/* Green checkmarks */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
          {["Tramitaci\u00F3n incluida en la cuota mensual", "Subvenci\u00F3n garantizada al 90%", "Sin letra peque\u00F1a"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[hsl(145,60%,35%)]" />
              <span className="text-base font-medium text-[hsl(220,15%,35%)]">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA Main Button */}
        <div className="mb-5 flex w-full max-w-2xl items-center justify-center gap-3 rounded-full px-10 py-4" style={{ background: "linear-gradient(135deg, hsl(170,70%,45%), hsl(170,60%,50%))" }}>
          <span className="text-lg font-bold text-[hsl(0,0%,100%)]">{"€"}</span>
          <span className="text-lg font-bold uppercase tracking-wide text-[hsl(0,0%,100%)]">SOLICITA LAS AYUDAS KIT ESPACIO DE DATOS</span>
          <ArrowRight className="h-5 w-5 text-[hsl(0,0%,100%)]" />
        </div>

        {/* Info badges grid */}
        <div className="mb-6 grid w-full max-w-4xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3 rounded-full bg-[hsl(36,90%,55%,0.1)] px-5 py-3">
            <AlertTriangle className="h-5 w-5 shrink-0 text-[hsl(36,80%,45%)]" />
            <span className="text-sm font-semibold text-[hsl(220,25%,12%)]">Subvenciones por orden de llegada</span>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-[hsl(145,55%,42%,0.1)] px-5 py-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-[hsl(145,55%,42%)]" />
            <span className="text-sm font-semibold text-[hsl(220,25%,12%)]">Garantizado al 90%</span>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-[hsl(213,80%,45%,0.1)] px-5 py-3">
            <Shield className="h-5 w-5 shrink-0 text-[hsl(213,80%,45%)]" />
            <span className="text-sm font-semibold text-[hsl(220,25%,12%)]">Solo 25 Espacios de Datos Homologados</span>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-[hsl(0,75%,55%,0.08)] px-5 py-3">
            <Building2 className="h-5 w-5 shrink-0 text-[hsl(0,65%,50%)]" />
            <span className="text-sm font-semibold text-[hsl(220,25%,12%)]">Solo empresas adheridas a espacios homologados</span>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-[hsl(36,90%,55%,0.1)] px-5 py-3">
            <Lock className="h-5 w-5 shrink-0 text-[hsl(36,80%,45%)]" />
            <span className="text-sm font-semibold text-[hsl(220,25%,12%)]">Permanencia 1 a{"ñ"}o</span>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-[hsl(145,55%,42%,0.1)] px-5 py-3">
            <ArrowRight className="h-5 w-5 shrink-0 text-[hsl(145,55%,42%)]" />
            <span className="text-sm font-semibold text-[hsl(220,25%,12%)]">Renovaci{"ó"}n 1 a{"ñ"}o al recibir la subvenci{"ó"}n</span>
          </div>
        </div>

        {/* Image */}
        <img src="/images/ayudas-kit.png" alt="Ayudas Kit Espacio de Datos - logos institucionales" className="max-h-[120px] w-full max-w-2xl rounded-lg object-contain" />
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 24 - SOLICITUD DE AYUDA Y SUBSCRIPCION                         */
/* ------------------------------------------------------------------ */
export function SlideProcesoPago() {
  return (
    <SlideLayout variant="dark" slideNumber={24} totalSlides={TOTAL} id="slide-24">
      <div className="flex flex-1 flex-col items-center justify-center gap-8">
        {/* Title */}
        <h2 className="text-balance text-center text-3xl font-black text-[hsl(220,25%,12%)] md:text-4xl lg:text-5xl">
          Solicitud de Ayuda y Subscripci{"ó"}n al Espacio de Datos Global Data Care
        </h2>

        {/* Pago anticipado pricing */}
        <div className="flex flex-col items-center gap-1 rounded-2xl bg-[hsl(220,10%,92%)] px-10 py-6">
          <span className="text-lg font-semibold text-[hsl(220,15%,35%)]">Pago anticipado</span>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black text-[hsl(36,80%,42%)] md:text-6xl">1.140{"€"}</span>
            <span className="text-2xl font-medium text-[hsl(220,10%,45%)]">+ IVA</span>
          </div>
          <span className="text-base italic text-[hsl(220,10%,45%)]">(190{"€"}/mes {"×"} 6 meses)</span>
        </div>

        {/* Description box */}
        <div className="w-full max-w-3xl rounded-2xl border border-[hsl(213,80%,45%,0.2)] bg-[hsl(213,80%,45%,0.05)] px-8 py-6 text-center">
          <p className="text-base leading-relaxed text-[hsl(220,15%,30%)] md:text-lg">
            Incluye <strong>Adhesi{"ó"}n al Espacio de Datos Global Data Care</strong> y
            soporte en la solicitud de las ayudas{" "}
            <strong>Kit Espacio de Datos</strong> en red.es
          </p>
        </div>

        {/* Logos */}
        <div className="flex w-full max-w-3xl items-center justify-center gap-8 pt-4">
          <img
            src="/images/kit-espacio-datos.png"
            alt="Kit Espacios de Datos"
            className="h-14 w-auto object-contain md:h-18"
            crossOrigin="anonymous"
          />
          <img
            src="/images/redes-logo.jpg"
            alt="Gobierno de Espa\u00F1a - Ministerio para la Transformaci\u00F3n Digital - red.es"
            className="h-10 w-auto object-contain md:h-14"
            crossOrigin="anonymous"
          />
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 25 - KIT ARQUITECTURA DE LA AYUDA                              */
/* ------------------------------------------------------------------ */
export function SlideResumenEconomico() {
  return (
    <SlideLayout variant="section" slideNumber={25} totalSlides={TOTAL} id="slide-25">
      <h2 className="mb-3 text-3xl font-black text-[hsl(220,25%,12%)] md:text-4xl">
        Kit Espacios de Datos: Arquitectura de la Ayuda
      </h2>
      <p className="mb-8 text-lg text-[hsl(220,10%,45%)]">Convocatoria 2025-2026 - Presupuesto total: 500 millones EUR (NextGenerationEU)</p>

      <div className="mb-8 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-2xl border-2 border-[hsl(213,80%,45%,0.3)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <Building2 className="h-6 w-6 text-[hsl(213,80%,45%)]" />
            <h3 className="text-xl font-bold text-[hsl(220,25%,12%)]">Administraciones P{"ú"}blicas</h3>
          </div>
          <p className="mb-3 text-4xl font-black text-[hsl(213,80%,45%)]">Hasta 50.000{"€"}</p>
          <p className="text-base text-[hsl(220,15%,35%)]">Hospitales p{"ú"}blicos, centros de investigaci{"ó"}n, agencias de salud p{"ú"}blica, redes de atenci{"ó"}n primaria.</p>
        </div>
        <div className="rounded-2xl border-2 border-[hsl(145,55%,42%,0.3)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <Users className="h-6 w-6 text-[hsl(145,55%,42%)]" />
            <h3 className="text-xl font-bold text-[hsl(220,25%,12%)]">Entidades Privadas (PYMES y Grandes)</h3>
          </div>
          <p className="mb-3 text-4xl font-black text-[hsl(145,55%,35%)]">Hasta 30.000{"€"}</p>
          <p className="text-base text-[hsl(220,15%,35%)]">Bioempresas (pharma, biotech, CDMOs), startups de IA en salud, empresas de diagn{"ó"}stico gen{"ó"}mico, laboratorios de biotecnolog{"í"}a industrial.</p>
        </div>
      </div>

      <div className="flex w-full max-w-5xl flex-col gap-4 md:flex-row">
        <div className="flex-1 rounded-xl bg-[hsl(36,90%,55%,0.08)] p-5">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-[hsl(36,80%,45%)]" />
            <h4 className="font-bold text-[hsl(220,25%,12%)]">Concurrencia NO competitiva</h4>
          </div>
          <p className="mt-2 text-base text-[hsl(220,15%,35%)]">Solicitudes resueltas por estricto orden de presentaci{"ó"}n. Urgencia administrativa: quien demora, queda fuera del reparto presupuestario.</p>
        </div>
        <div className="flex-1 rounded-xl bg-[hsl(0,75%,55%,0.06)] p-5">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[hsl(0,65%,50%)]" />
            <h4 className="font-bold text-[hsl(220,25%,12%)]">Plazo l{"í"}mite</h4>
          </div>
          <p className="mt-2 text-base text-[hsl(220,15%,35%)]">Abierta hasta el 31 de marzo de 2026 o hasta agotamiento de fondos. Objetivo: subsidiar la barrera de entrada a ecosistemas complejos.</p>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 26 - ESTRUCTURA DE FASES                                       */
/* ------------------------------------------------------------------ */
export function SlideEstructuraFases() {
  return (
    <SlideLayout variant="section" slideNumber={26} totalSlides={TOTAL} id="slide-26">
      <div className="flex flex-1 flex-col items-center">
        <h2 className="mb-10 text-center text-4xl font-black text-[hsl(220,25%,12%)] md:text-5xl">
          Estructura de Fases
        </h2>

        <div className="flex w-full max-w-5xl flex-col items-center gap-6 lg:flex-row lg:items-stretch">
          <div className="flex-1 rounded-2xl border-2 border-[hsl(36,90%,55%)] bg-[hsl(45,90%,97%)] p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-[hsl(36,90%,55%)] px-4 py-1 text-sm font-bold text-[hsl(0,0%,100%)]">FASE 1</span>
              <Lock className="h-5 w-5 text-[hsl(36,80%,45%)]" />
            </div>
            <h3 className="mb-4 text-2xl font-black text-[hsl(220,25%,12%)]">6 Meses Irrevocable</h3>
            <div className="mb-5 rounded-xl bg-[hsl(0,0%,100%)] p-4">
              <div className="flex items-center gap-2 text-lg">
                <span className="text-xl text-[hsl(36,80%,45%)]">{"€"}</span>
                <span className="font-bold text-[hsl(220,25%,12%)]">190{"€"}/mes {"×"} 6 = 1.140{"€"} + IVA</span>
              </div>
              <span className="text-sm italic text-[hsl(220,10%,50%)]">Financiaci{"ó"}n fraccionada con Hokodo</span>
            </div>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-base text-[hsl(220,15%,35%)]">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(36,80%,45%)]" />
                Sin posibilidad de cancelaci{"ó"}n anticipada
              </li>
              <li className="flex items-start gap-2 text-base text-[hsl(220,15%,35%)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(145,60%,35%)]" />
                Acceso inmediato a la plataforma
              </li>
              <li className="flex items-start gap-2 text-base text-[hsl(220,15%,35%)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(145,60%,35%)]" />
                Consultor{"í"}a de tramitaci{"ó"}n incluida
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center lg:flex-col">
            <ArrowRight className="h-8 w-8 text-[hsl(145,55%,42%)] lg:rotate-0" />
          </div>

          <div className="flex-1 rounded-2xl border-2 border-[hsl(145,55%,42%)] bg-[hsl(145,60%,97%)] p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-[hsl(145,55%,42%)] px-4 py-1 text-sm font-bold text-[hsl(0,0%,100%)]">FASE 2 (Condicional)</span>
              <CheckCircle2 className="h-5 w-5 text-[hsl(145,55%,42%)]" />
            </div>
            <h3 className="mb-2 text-2xl font-black text-[hsl(220,25%,12%)]">Renovaci{"ó"}n autom{"á"}tica 3 a{"ñ"}os</h3>
            <span className="mb-5 inline-block rounded-md bg-[hsl(48,95%,88%)] px-4 py-1.5 text-sm font-semibold italic text-[hsl(36,70%,35%)]">Solo si se consigue la subvenci{"ó"}n</span>
            <div className="mb-5 rounded-xl bg-[hsl(0,0%,100%)] p-4">
              <div className="flex items-center gap-2 text-lg">
                <span className="font-bold text-[hsl(220,25%,12%)]">= Importe de la Subvenci{"ó"}n</span>
              </div>
              <span className="text-sm text-[hsl(220,10%,50%)]">Entre 15.000{"€"} y 30.000{"€"}</span>
            </div>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-base text-[hsl(220,15%,35%)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(145,60%,35%)]" />
                Solo si se aprueba la subvenci{"ó"}n
              </li>
              <li className="flex items-start gap-2 text-base text-[hsl(220,15%,35%)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(145,60%,35%)]" />
                Pr{"ó"}rroga autom{"á"}tica del contrato
              </li>
              <li className="flex items-start gap-2 text-base text-[hsl(220,15%,35%)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(145,60%,35%)]" />
                Continuidad del ecosistema Global Data Care
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 27 - QUE INCLUYE TU CUOTA                                      */
/* ------------------------------------------------------------------ */
export function SlideQueIncluye() {
  return (
    <SlideLayout variant="default" slideNumber={27} totalSlides={TOTAL} id="slide-27">
      <div className="flex flex-1 flex-col items-center">
        <h2 className="mb-3 text-center text-4xl font-black italic text-[hsl(220,25%,12%)] md:text-5xl">
          Qu{"é"} Incluye Tu Cuota
        </h2>
        <p className="mb-10 text-center text-lg text-[hsl(220,10%,45%)]">
          Servicios completos de consultor{"í"}a y acceso a la plataforma
        </p>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { icon: <Globe className="h-6 w-6 text-[hsl(145,55%,42%)]" />, text: "Acceso al Espacio de Datos Federado de Biotecnolog\u00EDa Sanitaria" },
            { icon: <Users className="h-6 w-6 text-[hsl(145,55%,42%)]" />, text: "Consultor\u00EDa t\u00E9cnica y administrativa completa" },
            { icon: <FileText className="h-6 w-6 text-[hsl(145,55%,42%)]" />, text: "Tramitaci\u00F3n de la ayuda \"Kit Espacio de Datos\"" },
            { icon: <BookOpen className="h-6 w-6 text-[hsl(145,55%,42%)]" />, text: "Apoyo en la Redacci\u00F3n de memoria t\u00E9cnica para RED.ES" },
            { icon: <Building2 className="h-6 w-6 text-[hsl(145,55%,42%)]" />, text: "Presentaci\u00F3n de solicitud ante el organismo competente" },
            { icon: <CheckCircle2 className="h-6 w-6 text-[hsl(145,55%,42%)]" />, text: "Apoyo en la justificaci\u00F3n del proyecto" },
            { icon: <Shield className="h-6 w-6 text-[hsl(145,55%,42%)]" />, text: "Soporte durante todo el proceso de concesi\u00F3n" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-4 rounded-xl bg-[hsl(0,0%,100%)] p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[hsl(145,60%,95%)]">
                {item.icon}
              </div>
              <span className="text-base font-medium text-[hsl(220,25%,12%)]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 28 - PLAN COMPLETO                                             */
/* ------------------------------------------------------------------ */
export function SlidePlanCompleto() {
  return (
    <SlideLayout variant="default" slideNumber={29} totalSlides={TOTAL} id="slide-29">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="w-full max-w-3xl rounded-2xl border border-[hsl(145,55%,42%,0.25)] bg-[hsl(0,0%,100%)] p-10 shadow-sm">
          <ul className="mb-8 space-y-4">
            {[
              "Ecosistema Global Data Care",
              "Wallet corporativa completa",
              "Tokenizaci\u00F3n de activos de datos biol\u00F3gicos",
              "Investigaci\u00F3n federada Compute-to-Data",
              "Dashboard KPIs avanzado",
              "Soporte tramitaci\u00F3n administrativa",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg text-[hsl(220,15%,35%)]">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[hsl(145,55%,42%)]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mb-6 border-t border-[hsl(220,10%,88%)] pt-6 text-center">
            <p className="mb-1 text-base text-[hsl(220,10%,50%)]">Pago anticipado</p>
            <p className="text-4xl font-black text-[hsl(145,55%,35%)]">
              1.140{"€"} <span className="text-xl font-normal text-[hsl(220,15%,35%)]">+ IVA</span>
            </p>
            <p className="mt-1 text-sm italic text-[hsl(220,10%,50%)]">(190{"€"}/mes {"×"} 6 meses)</p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <img src="/images/kit-espacio-datos.png" alt="Kit Espacios de Datos" className="h-12 w-auto object-contain md:h-14" crossOrigin="anonymous" />
            <img src="/images/redes-logo.jpg" alt="Gobierno de Espana - Ministerio para la Transformacion Digital - red.es" className="h-8 w-auto object-contain md:h-10" crossOrigin="anonymous" />
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 30 - RETORNO DE INVERSION                                      */
/* ------------------------------------------------------------------ */
export function SlideRetornoInversion() {
  return (
    <SlideLayout variant="section" slideNumber={30} totalSlides={TOTAL} id="slide-30">
      <div className="flex flex-1 flex-col items-center justify-center">
        <h2 className="mb-10 text-center text-4xl font-black italic text-[hsl(220,25%,12%)] md:text-5xl">
          Retorno de tu Inversi{"ó"}n
        </h2>

        <div className="mb-8 w-full max-w-4xl rounded-2xl border border-[hsl(145,55%,42%,0.2)] bg-[hsl(145,60%,97%)] p-10">
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
            <div className="text-center">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[hsl(220,10%,50%)]">TU INVERSI{"Ó"}N</p>
              <p className="text-5xl font-black text-[hsl(220,25%,12%)]">1.140{"€"}</p>
              <p className="text-base text-[hsl(220,10%,50%)]">+ IVA</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <ArrowRight className="h-8 w-8 text-[hsl(145,55%,42%)]" />
              <span className="text-sm font-bold text-[hsl(145,55%,42%)]">ROI 10x</span>
            </div>

            <div className="text-center">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[hsl(220,10%,50%)]">SUBVENCI{"Ó"}N</p>
              <p className="text-5xl font-black text-[hsl(145,55%,35%)]">Hasta 30.000{"€"}</p>
              <p className="text-base text-[hsl(220,10%,50%)]">A fondo perdido</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl rounded-xl bg-[hsl(145,60%,95%)] px-8 py-4 text-center">
          <p className="text-lg text-[hsl(220,15%,35%)]">
            <strong className="text-[hsl(145,55%,35%)]">Financiaci{"ó"}n cubierta al 85-90%</strong> por fondos europeos Next Generation EU
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/*  BLOQUE III - CONVERGENCIA PONTUS-X / ARQUITECTURA AVANZADA        */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/* SLIDE 31 - TRIADA ESTRATEGICA                                        */
/* ------------------------------------------------------------------ */
export function SlideTriadaEstrategica() {
  return (
    <SlideLayout variant="default" slideNumber={31} totalSlides={TOTAL} id="slide-31">
      <div className="mb-2 inline-block rounded-full bg-[hsl(213,80%,45%,0.1)] px-4 py-1">
        <span className="text-sm font-semibold text-[hsl(213,80%,45%)]">Bloque III - Convergencia de Ecosistemas Federados</span>
      </div>
      <h2 className="mb-4 text-4xl font-black text-[hsl(220,25%,12%)] md:text-5xl">
        La Tr{"í"}ada Estrat{"é"}gica
      </h2>
      <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[hsl(220,15%,35%)]">
        La econom{"í"}a digital europea transita hacia una arquitectura descentralizada y federada que prioriza la soberan{"í"}a del dato. Impulsado por la Data Governance Act, la Data Act y financiado por el PRTR.
      </p>

      <div className="mb-8 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-[hsl(213,80%,45%,0.2)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(213,80%,45%,0.1)]">
            <CircleDollarSign className="h-6 w-6 text-[hsl(213,80%,45%)]" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-[hsl(220,25%,12%)]">Kit Espacios de Datos</h3>
          <p className="text-base text-[hsl(220,15%,35%)]">Instrumento financiero gestionado por Red.es. Presupuesto de 500M EUR de fondos NextGenerationEU para subsidiar la federaci{"ó"}n de datos.</p>
        </div>
        <div className="rounded-2xl border border-[hsl(145,55%,42%,0.2)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(145,55%,42%,0.1)]">
            <Network className="h-6 w-6 text-[hsl(145,55%,42%)]" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-[hsl(220,25%,12%)]">Pontus-X</h3>
          <p className="text-base text-[hsl(220,15%,35%)]">Infraestructura de interoperabilidad basada en Ocean Protocol y principios Gaia-X. Ecosistema descentralizado con DLT y Compute-to-Data.</p>
        </div>
        <div className="rounded-2xl border border-[hsl(36,90%,55%,0.2)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(36,90%,55%,0.1)]">
            <Factory className="h-6 w-6 text-[hsl(36,80%,45%)]" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-[hsl(220,25%,12%)]">EHDS (European Health Data Space)</h3>
          <p className="text-base text-[hsl(220,15%,35%)]">Espacio europeo de datos sanitarios. Interconexi{"ó"}n oficial con la infraestructura paneuropea de datos cl{"í"}nicos para investigaci{"ó"}n e innovaci{"ó"}n.</p>
        </div>
      </div>

      <div className="w-full max-w-5xl rounded-xl bg-[hsl(213,30%,95%)] px-6 py-4">
        <p className="text-center text-base text-[hsl(220,15%,35%)]">
          <strong>Sector objetivo:</strong> Ecosistema Biotecnol{"ó"}gico (AseBio) {"\u2014"} bioempresas farmac{"é"}uticas, startups de IA, CDMOs, diagn{"ó"}stico gen{"ó"}mico, biotecnolog{"í"}a industrial y alimentaria. Rico en datos moleculares y gen{"ó"}micos, pobre en su explotaci{"ó"}n federada.
        </p>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 32 - REQUISITOS ELEGIBILIDAD                                   */
/* ------------------------------------------------------------------ */
export function SlideRequisitosElegibilidad() {
  return (
    <SlideLayout variant="default" slideNumber={33} totalSlides={TOTAL} id="slide-33">
      <h2 className="mb-3 text-3xl font-black text-[hsl(220,25%,12%)] md:text-4xl">
        Requisitos Administrativos y Elegibilidad
      </h2>
      <p className="mb-8 text-lg text-[hsl(220,10%,45%)]">Tres pilares de cumplimiento para acceder a los fondos del KED</p>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
        <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(213,80%,45%,0.1)]">
            <Fingerprint className="h-7 w-7 text-[hsl(213,80%,45%)]" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">1. Identidad Digital Cualificada</h3>
          <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
            Tramitaci{"ó"}n exclusivamente telem{"á"}tica v{"í"}a sede electr{"ó"}nica de Red.es. Certificado digital cualificado v{"á"}lido con poderes vigentes.
          </p>
        </div>

        <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(145,55%,42%,0.1)]">
            <ShieldCheck className="h-7 w-7 text-[hsl(145,55%,42%)]" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">2. Solvencia y Estatus Empresarial</h3>
          <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
            No tener consideraci{"ó"}n de {'"'}empresa en crisis{'"'} (Reglamento UE 651/2014). Estar al corriente de obligaciones tributarias y Seguridad Social.
          </p>
        </div>

        <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(36,90%,55%,0.1)]">
            <Globe className="h-7 w-7 text-[hsl(36,80%,45%)]" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">3. Domicilio Fiscal y Territorialidad</h3>
          <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
            Entidades de cualquier Estado miembro de la UE. Las actividades subvencionables deben realizarse en territorio espa{"ñ"}ol.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 34 - TAXONOMIA DE SOLUCIONES                                   */
/* ------------------------------------------------------------------ */
export function SlideTaxonomia() {
  return (
    <SlideLayout variant="section" slideNumber={34} totalSlides={TOTAL} id="slide-34">
      <h2 className="mb-3 text-3xl font-black text-[hsl(220,25%,12%)] md:text-4xl">
        Taxonom{"í"}a de Soluciones Subvencionables
      </h2>
      <p className="mb-8 text-lg text-[hsl(220,10%,45%)]">4 categor{"í"}as de gastos elegibles orientados a la econom{"í"}a del dato biotecnol{"ó"}gico</p>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        {[
          { num: "01", title: "Adhesi\u00F3n y Gobernanza", desc: "Incorporaci\u00F3n formal al espacio de datos biotecnol\u00F3gico. Cuotas de entrada, certificaci\u00F3n de identidad, auditor\u00EDas de cumplimiento normativo iniciales (GDPR, IP).", icon: <Shield className="h-6 w-6 text-[hsl(213,80%,45%)]" />, color: "hsl(213,80%,45%)" },
          { num: "02", title: "Ingenier\u00EDa del Dato", desc: "Consultor\u00EDa para limpieza, anonimizaci\u00F3n y estructuraci\u00F3n de datos moleculares y gen\u00F3micos. Transformar datos brutos (secuencias, resultados precl\u00EDnicos) en activos interoperables.", icon: <Database className="h-6 w-6 text-[hsl(145,55%,42%)]" />, color: "hsl(145,55%,42%)" },
          { num: "03", title: "Despliegue de Conectores Pontus-X/Gaia-X", desc: "Implementaci\u00F3n de conectores certificados (Eclipse Dataspace Connector, nodos Ocean Protocol). Pasarela t\u00E9cnica para intercambio soberano de datos biol\u00F3gicos.", icon: <Link2 className="h-6 w-6 text-[hsl(36,80%,45%)]" />, color: "hsl(36,80%,45%)" },
          { num: "04", title: "Publicaci\u00F3n de Servicios de Datos", desc: "Creaci\u00F3n y publicaci\u00F3n de oferta en el cat\u00E1logo del espacio de datos biotecnol\u00F3gico. Definir pol\u00EDticas Compute-to-Data y precios de acceso v\u00EDa Datatokens.", icon: <Megaphone className="h-6 w-6 text-[hsl(280,60%,50%)]" />, color: "hsl(280,60%,50%)" },
        ].map((item) => (
          <div key={item.num} className="flex gap-4 rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
            <div>
              <span className="text-3xl font-black" style={{ color: item.color }}>{item.num}</span>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                {item.icon}
                <h3 className="text-lg font-bold text-[hsl(220,25%,12%)]">{item.title}</h3>
              </div>
              <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 35 - AGENTES DIGITALIZADORES                                   */
/* ------------------------------------------------------------------ */
export function SlideAgentes() {
  return (
    <SlideLayout variant="default" slideNumber={35} totalSlides={TOTAL} id="slide-35">
      <h2 className="mb-3 text-3xl font-black text-[hsl(220,25%,12%)] md:text-4xl">
        Ecosistema de Agentes Digitalizadores
      </h2>
      <p className="mb-8 text-lg text-[hsl(220,10%,45%)]">Modelo de ejecuci{"ó"}n delegada y justificaci{"ó"}n rigurosa</p>

      <div className="mb-8 flex w-full max-w-4xl flex-col gap-5 md:flex-row">
        <div className="flex-1 rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <Users className="mb-3 h-8 w-8 text-[hsl(213,80%,45%)]" />
          <h3 className="mb-2 text-xl font-bold text-[hsl(220,25%,12%)]">Lista de Confianza</h3>
          <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
            Registro oficial de proveedores y espacios verificados.             Se selecciona un Agente que ya dispone de la infraestructura (instancia Pontus-X o plataforma IDS) para el sector biotecnol{"ó"}gico.
          </p>
        </div>
        <div className="flex-1 rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <CircleDollarSign className="mb-3 h-8 w-8 text-[hsl(145,55%,42%)]" />
          <h3 className="mb-2 text-xl font-bold text-[hsl(220,25%,12%)]">Cesi{"ó"}n de Cobro</h3>
          <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
            La entidad beneficiaria paga el servicio cediendo el derecho de cobro del bono digital al Agente Digitalizador. Sin desembolso inicial directo por la parte subvencionada.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl rounded-2xl border-2 border-[hsl(0,75%,55%,0.2)] bg-[hsl(0,75%,55%,0.04)] p-6">
        <div className="mb-3 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-[hsl(0,65%,50%)]" />
          <h4 className="text-lg font-bold text-[hsl(220,25%,12%)]">Justificaci{"ó"}n T{"é"}cnica Rigurosa</h4>
        </div>
        <p className="mb-3 text-base text-[hsl(220,15%,35%)]">No basta con presentar facturas. Evidencias t{"é"}cnicas obligatorias:</p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {["Logs de conexi\u00F3n al espacio de datos", "Capturas del cat\u00E1logo federado con activo publicado", "Transacciones de prueba exitosas documentadas"].map((e) => (
            <div key={e} className="flex items-start gap-2 rounded-lg bg-[hsl(0,0%,100%)] p-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(0,65%,50%)]" />
              <span className="text-sm text-[hsl(220,15%,35%)]">{e}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm font-semibold text-[hsl(0,65%,50%)]">El incumplimiento en justificaci{"ó"}n t{"é"}cnica conlleva el reintegro total de la ayuda.</p>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 36 - PONTUS-X ARQUITECTURA                                     */
/* ------------------------------------------------------------------ */
export function SlidePontusX() {
  return (
    <SlideLayout variant="section" slideNumber={36} totalSlides={TOTAL} id="slide-36">
      <h2 className="mb-3 text-3xl font-black text-[hsl(220,25%,12%)] md:text-4xl">
        Pontus-X: Arquitectura Descentralizada
      </h2>
      <p className="mb-8 text-lg text-[hsl(220,10%,45%)]">Ocean Protocol + DLT + Principios Gaia-X</p>

      <div className="mb-6 w-full max-w-5xl rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
        <h3 className="mb-3 text-xl font-bold text-[hsl(220,25%,12%)]">Capa Base (Layer 1): Blockchain EVM</h3>
        <p className="mb-4 text-base leading-relaxed text-[hsl(220,15%,35%)]">
          Redes compatibles con Ethereum Virtual Machine (Oasis Network, GEN-X). Cada publicaci{"ó"}n, actualizaci{"ó"}n de metadatos o compra de acceso queda registrada en la cadena de bloques. Trazabilidad absoluta sin intermediarios centrales.
        </p>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-2xl border-2 border-[hsl(213,80%,45%,0.2)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <Binary className="h-6 w-6 text-[hsl(213,80%,45%)]" />
            <h3 className="text-xl font-bold text-[hsl(220,25%,12%)]">NFT de Datos (ERC721)</h3>
          </div>
          <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
            Representa la <strong>propiedad intelectual</strong> del activo de datos biotecnol{"ó"}gicos. Quien posee el NFT tiene el derecho exclusivo de conceder licencias de acceso a sus datos moleculares o gen{"ó"}micos.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-[hsl(145,55%,42%,0.2)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <Syringe className="h-6 w-6 text-[hsl(145,55%,42%)]" />
            <h3 className="text-xl font-bold text-[hsl(220,25%,12%)]">Datatokens (ERC20)</h3>
          </div>
          <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
            <strong>Licencias de acceso consumibles.</strong> El consumidor adquiere y {'"'}quema{'"'} tokens para acceder al servicio. Derechos programables e interoperables.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 37 - CASO DE USO A: PSUR AUTOMATIZADO                         */
/* ------------------------------------------------------------------ */
export function SlideCasoUsoA() {
  return (
    <SlideLayout variant="default" slideNumber={37} totalSlides={TOTAL} id="slide-37">
      <div className="mb-2 inline-block rounded-full bg-[hsl(213,80%,45%,0.1)] px-4 py-1">
        <span className="text-sm font-semibold text-[hsl(213,80%,45%)]">Caso de Uso A</span>
      </div>
      <h2 className="mb-3 text-3xl font-black text-[hsl(220,25%,12%)] md:text-4xl">
        Predicci{"ó"}n de Toxicidad Federada con IA
      </h2>
      <p className="mb-8 text-lg text-[hsl(220,10%,45%)]">Entrenar modelos de IA sobre datos de toxicidad de m{"ú"}ltiples bioempresas sin revelar estructuras moleculares</p>

      <div className="mb-6 flex w-full max-w-5xl flex-col gap-5 md:flex-row">
        <div className="flex-1 rounded-2xl border border-[hsl(0,75%,55%,0.2)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-[hsl(0,65%,50%)]">
            <AlertTriangle className="h-5 w-5" /> Problem{"á"}tica Actual
          </h3>
          <ul className="space-y-2">
            {[
              "M\u00FAltiples empresas investigan dianas ya descartadas por toxicidad",
              "Datos de toxicidad precl\u00EDnica quedan aislados en silos internos",
              "Modelos de IA generativa para drug design carecen de datos diversos",
              "El \"conocimiento negativo\" no se comparte por miedo a revelar IP",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-base text-[hsl(220,15%,35%)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(0,65%,50%)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 rounded-2xl border border-[hsl(145,55%,42%,0.2)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-[hsl(145,55%,42%)]">
            <CheckCircle2 className="h-5 w-5" /> Soluci{"ó"}n Federada
          </h3>
          <ul className="space-y-2">
            {[
              "Modelo de IA viaja a cada bioempresa v\u00EDa Compute-to-Data",
              "Se entrena con datos moleculares privados sin extraerlos",
              "Solo salen los \"pesos\" del modelo, nunca las mol\u00E9culas",
              "Resultado: modelo de predicci\u00F3n de toxicidad 10x m\u00E1s preciso",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-base text-[hsl(220,15%,35%)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(145,55%,42%)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex w-full max-w-5xl flex-wrap gap-3">
        {["Compute-to-Data", "IA Generativa", "Fail Fast, Fail Cheap", "IP Intacta"].map((b) => (
          <span key={b} className="rounded-full bg-[hsl(145,55%,42%,0.08)] px-4 py-1.5 text-sm font-medium text-[hsl(145,55%,42%)]">{b}</span>
        ))}
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 38 - CASO DE USO B: VALUE-BASED PROCUREMENT                    */
/* ------------------------------------------------------------------ */
export function SlideCasoUsoB() {
  return (
    <SlideLayout variant="section" slideNumber={38} totalSlides={TOTAL} id="slide-38">
      <div className="mb-2 inline-block rounded-full bg-[hsl(145,55%,42%,0.1)] px-4 py-1">
        <span className="text-sm font-semibold text-[hsl(145,55%,42%)]">Caso de Uso B</span>
      </div>
      <h2 className="mb-3 text-3xl font-black text-[hsl(220,25%,12%)] md:text-4xl">
        Brazos de Control Sint{"é"}ticos para Enfermedades Raras
      </h2>
      <p className="mb-8 text-lg text-[hsl(220,10%,45%)]">Reducir costes de ensayos cl{"í"}nicos un 20-30% reutilizando datos hist{"ó"}ricos federados</p>

      <div className="mb-6 w-full max-w-5xl rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
        <h3 className="mb-3 text-lg font-bold text-[hsl(220,25%,12%)]">Flujo del Caso de Uso</h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-[hsl(213,80%,45%,0.05)] p-4">
            <p className="mb-1 text-sm font-bold text-[hsl(213,80%,45%)]">Paso 1</p>
            <p className="text-sm text-[hsl(220,15%,35%)]">Bioempresas publican datos de grupos de control (placebo) de ensayos finalizados, con variables demogr{"á"}ficas y cl{"í"}nicas</p>
          </div>
          <div className="rounded-xl bg-[hsl(145,55%,42%,0.05)] p-4">
            <p className="mb-1 text-sm font-bold text-[hsl(145,55%,42%)]">Paso 2</p>
            <p className="text-sm text-[hsl(220,15%,35%)]">Algoritmo C2D genera un {'"'}paciente virtual{'"'} estad{"í"}stico a partir de miles de registros de control hist{"ó"}ricos de m{"ú"}ltiples socios</p>
          </div>
          <div className="rounded-xl bg-[hsl(36,80%,45%,0.05)] p-4">
            <p className="mb-1 text-sm font-bold text-[hsl(36,80%,45%)]">Resultado</p>
            <p className="text-sm text-[hsl(220,15%,35%)]">Una startup puede comparar su nueva mol{"é"}cula contra un brazo de control sint{"é"}tico, ahorrando millones en reclutamiento de pacientes</p>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-5xl flex-wrap gap-3">
        {["Control Groups as a Service", "Enfermedades raras", "Ahorro 20-30% Fase II", "Reutilizaci\u00F3n de datos"].map((b) => (
          <span key={b} className="rounded-full bg-[hsl(145,55%,42%,0.08)] px-4 py-1.5 text-sm font-medium text-[hsl(145,55%,42%)]">{b}</span>
        ))}
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 39 - CASO DE USO C: TABLERO DE RESILIENCIA                     */
/* ------------------------------------------------------------------ */
export function SlideCasoUsoC() {
  return (
    <SlideLayout variant="default" slideNumber={39} totalSlides={TOTAL} id="slide-39">
      <div className="mb-2 inline-block rounded-full bg-[hsl(36,90%,55%,0.1)] px-4 py-1">
        <span className="text-sm font-semibold text-[hsl(36,80%,45%)]">Caso de Uso C</span>
      </div>
      <h2 className="mb-3 text-3xl font-black text-[hsl(220,25%,12%)] md:text-4xl">
        Vigilancia Gen{"ó"}mica Federada en Tiempo Real
      </h2>
      <p className="mb-8 text-lg text-[hsl(220,10%,45%)]">Detecci{"ó"}n temprana de resistencias antimicrobianas y nuevas variantes de pat{"ó"}genos</p>

      <div className="mb-6 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(145,55%,42%,0.15)]">
            <Dna className="h-5 w-5 text-[hsl(145,55%,42%)]" />
          </div>
          <h4 className="mb-2 font-bold text-[hsl(220,25%,12%)]">Secuenciaci{"ó"}n Distribuida</h4>
          <p className="text-sm text-[hsl(220,15%,35%)]">Empresas de diagn{"ó"}stico (Certest Biotec, Genomcore) comparten variantes gen{"é"}ticas anonimizadas de pat{"ó"}genos detectados en sus laboratorios.</p>
        </div>
        <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(36,90%,55%,0.15)]">
            <Activity className="h-5 w-5 text-[hsl(36,80%,45%)]" />
          </div>
          <h4 className="mb-2 font-bold text-[hsl(220,25%,12%)]">An{"á"}lisis Federado de Resistencias</h4>
          <p className="text-sm text-[hsl(220,15%,35%)]">Un modelo de IA se ejecuta sobre los datos de cada laboratorio v{"í"}a Compute-to-Data, detectando patrones de resistencia antimicrobiana emergentes.</p>
        </div>
        <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(0,75%,55%,0.15)]">
            <AlertTriangle className="h-5 w-5 text-[hsl(0,65%,50%)]" />
          </div>
          <h4 className="mb-2 font-bold text-[hsl(220,25%,12%)]">Alerta Temprana Sectorial</h4>
          <p className="text-sm text-[hsl(220,15%,35%)]">AseBio activa protocolo de comunicaci{"ó"}n con AEMPS y el Sistema Nacional de Salud ante la detecci{"ó"}n de nuevas variantes o resistencias cr{"í"}ticas.</p>
        </div>
      </div>

      <div className="w-full max-w-5xl rounded-xl bg-[hsl(213,30%,95%)] px-6 py-4">
        <p className="text-center text-base text-[hsl(220,15%,35%)]">
          <strong>IP protegida:</strong> Solo se federan variantes gen{"é"}ticas de pat{"ó"}genos (datos de salud p{"ú"}blica), nunca las secuencias propietarias de f{"á"}rmacos biol{"ó"}gicos en desarrollo.
        </p>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 40 - HOJA DE RUTA PRACTICA 12 MESES                            */
/* ------------------------------------------------------------------ */
export function SlideHojaDeRutaPractica() {
  return (
    <SlideLayout variant="section" slideNumber={40} totalSlides={TOTAL} id="slide-40">
      <h2 className="mb-3 text-3xl font-black text-[hsl(220,25%,12%)] md:text-4xl">
        Hoja de Ruta Pr{"á"}ctica: 6 Meses
      </h2>
      <p className="mb-8 text-lg text-[hsl(220,10%,45%)]">Sincronizaci{"ó"}n de tiempos administrativos con hitos de despliegue tecnol{"ó"}gico</p>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border-l-4 border-[hsl(213,80%,45%)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <h3 className="text-lg font-bold text-[hsl(220,25%,12%)]">Diagn{"ó"}stico y Solicitud</h3>
          </div>
          <ul className="space-y-1.5">
            {["Auditor\u00EDa de datos interna: inventario de activos biol\u00F3gicos y gen\u00F3micos", "Verificar certificado digital de representante", "Alta en Wallet Web3 corporativa", "Solicitar Kit Espacios de Datos (orden de llegada)"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,15%,35%)]">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(213,80%,45%)]" />{item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border-l-4 border-[hsl(145,55%,42%)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <h3 className="text-lg font-bold text-[hsl(220,25%,12%)]">Agente + Infraestructura</h3>
          </div>
          <ul className="space-y-1.5">
            {["Seleccionar Agente Digitalizador (Lista de Confianza)", "Onboarding KYB: Credenciales Verificables biotecnol\u00F3gicas", "Despliegue nodo Compute-to-Data (Operator Engine)", "Configurar reglas de acceso IP y firewalls de protecci\u00F3n molecular"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,15%,35%)]">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(145,55%,42%)]" />{item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border-l-4 border-[hsl(36,80%,45%)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <h3 className="text-lg font-bold text-[hsl(220,25%,12%)]">Tokenizaci{"ó"}n y Publicaci{"ó"}n</h3>
          </div>
          <ul className="space-y-1.5">
            {["Crear NFTs de datos biotecnol\u00F3gicos y Datatokens con pol\u00EDticas", "Publicar servicios en marketplace federado de AseBio", "Metadatos ricos conformes con ontolog\u00EDas GA4GH y FAIR", "Justificaci\u00F3n administrativa: evidencias t\u00E9cnicas ante Red.es"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,15%,35%)]">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(36,80%,45%)]" />{item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border-l-4 border-[hsl(280,60%,50%)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <h3 className="text-lg font-bold text-[hsl(220,25%,12%)]">Monetizaci{"ó"}n y Escalado</h3>
          </div>
          <ul className="space-y-1.5">
            {["Explotaci\u00F3n comercial activa de datos/servicios biotecnol\u00F3gicos", "Conexi\u00F3n con EHDS y GlobalDataCare.es (datos hospitalarios)", "Participar en gobernanza del espacio (DAO biotecnol\u00F3gica)", "Marketplace de algoritmos de IA para drug discovery"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,15%,35%)]">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(280,60%,50%)]" />{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ------------------------------------------------------------------ */
/* SLIDE 41 - VENTANA DE OPORTUNIDAD                                    */
/* ------------------------------------------------------------------ */
export function SlideVentanaOportunidad() {
  return (
    <SlideLayout variant="dark" slideNumber={41} totalSlides={TOTAL} id="slide-41">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="mb-6 inline-block rounded-full bg-[hsl(213,80%,45%,0.1)] px-4 py-1">
          <span className="text-sm font-semibold text-[hsl(213,80%,45%)]">Conclusiones</span>
        </div>
        <h2 className="mb-6 text-4xl font-black text-[hsl(220,25%,12%)] md:text-5xl">
          La Ventana de Oportunidad
        </h2>

        <div className="mb-8 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
            <Network className="mx-auto mb-3 h-10 w-10 text-[hsl(213,80%,45%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">Madurez Tecnol{"ó"}gica</h3>
            <p className="text-sm leading-relaxed text-[hsl(220,15%,35%)]">
              Compute-to-Data resuelve la paradoja IP vs. colaboraci{"ó"}n. Las bioempresas pueden entrenar modelos de IA colaborativos sin revelar sus estructuras moleculares propietarias.
            </p>
          </div>
          <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
            <Dna className="mx-auto mb-3 h-10 w-10 text-[hsl(145,55%,42%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">Imperativo de IA + Bio</h3>
            <p className="text-sm leading-relaxed text-[hsl(220,15%,35%)]">
              La convergencia de IA generativa y biolog{"í"}a computacional exige vol{"ú"}menes de datos que ninguna biotech posee individualmente. La federaci{"ó"}n es la {"ú"}nica v{"í"}a.
            </p>
          </div>
          <div className="rounded-2xl bg-[hsl(0,0%,100%)] p-6 shadow-sm">
            <Clock className="mx-auto mb-3 h-10 w-10 text-[hsl(36,80%,45%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">Urgencia Administrativa</h3>
            <p className="text-sm leading-relaxed text-[hsl(220,15%,35%)]">
              Concurrencia no competitiva: quien no act{"ú"}e con celeridad queda excluido. Los fondos NextGenerationEU tienen fecha de caducidad. {'"'}No pierdas tus 30.000EUR{'"'}.
            </p>
          </div>
        </div>

        <div className="w-full max-w-4xl rounded-2xl bg-[hsl(213,80%,45%,0.08)] px-8 py-6">
          <p className="text-xl font-bold leading-relaxed text-[hsl(220,25%,12%)]">
            BioIntelligence Spain tiene el potencial de convertirse en la infraestructura cr{"í"}tica que transforme datos biol{"ó"}gicos aislados en inteligencia compartida para todo el ecosistema biotecnol{"ó"}gico espa{"ñ"}ol.
          </p>
          <p className="mt-4 text-lg font-semibold text-[hsl(213,80%,45%)]">
            El futuro de la biotecnolog{"í"}a no es solo digital: es federado, soberano y colaborativo. La IP qu{"í"}mica intacta, la IA m{"á"}s inteligente.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
