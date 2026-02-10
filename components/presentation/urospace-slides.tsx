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
  HeartPulse,
  Activity,
  Clock,
  Wallet,
  Binary,
  ShieldCheck,
  CircleDollarSign,
  Stethoscope,
  Syringe,
  Microscope,
  ClipboardList,
  FlaskConical,
  Dna,
  Brain,
  Thermometer,
  Waypoints,
  Timer,
  Scan,
  Scale,
  Landmark,
  CalendarClock,
  FileCheck,
  Euro,
  GraduationCap,
  Handshake,
  Sparkles,
} from "lucide-react"

/* Pre-computed EU star positions */
const EU_STARS_42: [number, number][] = [
  [0, -42], [21, -36.373], [36.373, -21], [42, 0],
  [36.373, 21], [21, 36.373], [0, 42], [-21, 36.373],
  [-36.373, 21], [-42, 0], [-36.373, -21], [-21, -36.373],
]

const TOTAL = 24

/* ================================================================== */
/* SLIDE 1 - PORTADA                                                    */
/* ================================================================== */
export function UroSlideCover() {
  return (
    <SlideLayout variant="title" slideNumber={1} totalSlides={TOTAL} id="slide-1">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[hsl(45,85%,52%,0.4)]" />
          {EU_STARS_42.map((pos, i) => (
            <div
              key={i}
              className="absolute h-2.5 w-2.5 rounded-full bg-[hsl(45,85%,52%)]"
              style={{ transform: `translate(${pos[0]}px, ${pos[1]}px)` }}
            />
          ))}
          <Stethoscope className="h-10 w-10 text-[hsl(213,80%,45%)]" />
        </div>

        <p className="mb-4 text-base font-medium tracking-[0.3em] text-[hsl(213,80%,45%)] uppercase">
          www.urologia.GlobalDataCare.es
        </p>

        <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-[hsl(220,25%,12%)] md:text-5xl lg:text-7xl text-balance">
          UroSpace Spain: Arquitectura de Referencia y Estrategia de Despliegue
        </h1>

        <div className="eu-stripe mb-8 h-1 w-32 rounded-full" />

        <h2 className="max-w-3xl text-lg leading-relaxed text-[hsl(220,15%,35%)] md:text-xl">
          Espacio de Datos Federado de la Asociaci{"ó"}n Espa{"ñ"}ola de Urolog{"í"}a
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {["Gaia-X", "IDS", "OMOP CDM", "Compute-to-Data", "AEU / FIU", "EHDS"].map((tag) => (
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

/* ================================================================== */
/* SLIDE 2 - VISION ESTRATEGICA                                         */
/* ================================================================== */
export function UroSlideVision() {
  return (
    <SlideLayout slideNumber={2} totalSlides={TOTAL} id="slide-2">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 1
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Visi{"ó"}n Estrat{"é"}gica: La Urolog{"í"}a en la Era de la Inteligencia Distribuida
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-6 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La medicina contempor{"á"}nea se encuentra en un punto de inflexi{"ó"}n hist{"ó"}rico, transitando desde un modelo basado en la experiencia cl{"í"}nica individual y la evidencia fragmentada hacia un paradigma de Inteligencia Colectiva Computacional. Para la Asociaci{"ó"}n Espa{"ñ"}ola de Urolog{"í"}a (AEU) y su Fundaci{"ó"}n para la Investigaci{"ó"}n en Urolog{"í"}a (FIU), esta transici{"ó"}n no es meramente una actualizaci{"ó"}n tecnol{"ó"}gica, sino un imperativo existencial para mantener su relevancia cient{"í"}fica y liderazgo institucional en el siglo XXI.
        </p>

        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Hist{"ó"}ricamente, la generaci{"ó"}n de conocimiento en urolog{"í"}a ha dependido de registros centralizados, como los gestionados a trav{"é"}s de la Plataforma de Investigaci{"ó"}n de Estudios Multic{"é"}ntricos (PIEM). Estos registros, aunque valiosos, operan bajo una arquitectura de {'"'}silos de datos{'"'}: la informaci{"ó"}n se extrae de los hospitales, se anonimiza de forma a menudo irreversible (perdiendo granularidad y capacidad de re-contactaci{"ó"}n) y se deposita en una base de datos central est{"á"}tica. Este modelo presenta fricciones insalvables en la econom{"í"}a del dato actual: resistencia de los Delegados de Protecci{"ó"}n de Datos (DPO) hospitalarios a permitir la salida de datos, obsolescencia casi inmediata de la informaci{"ó"}n tras su extracci{"ó"}n, y una incapacidad fundamental para entrenar algoritmos de Inteligencia Artificial (IA) que requieren vol{"ú"}menes masivos de datos brutos (im{"á"}genes DICOM, gen{"ó"}mica completa) que son imposibles de mover eficientemente.
        </p>

        <div className="rounded-xl border border-[hsl(45,85%,52%,0.3)] bg-[hsl(45,85%,52%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(45,85%,42%)]" />
            <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
              La propuesta de UroSpace Spain representa un cambio copernicano. No buscamos construir un {'"'}super-registro{'"'} central m{"á"}s grande, sino tejer una red federada donde el dato permanece soberano en su origen (el hospital o centro de salud) y es la inteligencia (el algoritmo) la que viaja.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Network,
              title: "Federaci\u00F3n Soberana",
              desc: "El dato permanece en el hospital. Los algoritmos viajan al dato. Alineado con Gaia-X y el Espacio Europeo de Datos de Salud (EHDS).",
            },
            {
              icon: Brain,
              title: "Inteligencia Colectiva",
              desc: "Activar el valor latente de millones de historias cl\u00EDnicas, im\u00E1genes radiol\u00F3gicas y datos quir\u00FArgicos que hoy duermen inaccesibles en los servidores hospitalarios.",
            },
            {
              icon: Landmark,
              title: "Infraestructura Cr\u00EDtica",
              desc: "La AEU se posiciona como operador de infraestructura cr\u00EDtica de investigaci\u00F3n, habilitando RWE automatizada y benchmarking de plataformas rob\u00F3ticas.",
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
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDE 3 - ECOSISTEMA INSTITUCIONAL                                    */
/* ================================================================== */
export function UroSlideEcosistema() {
  return (
    <SlideLayout variant="section" slideNumber={3} totalSlides={TOTAL} id="slide-3">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 2
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          An{"á"}lisis del Ecosistema Institucional y Activos de Datos
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La viabilidad de UroSpace depende de una comprensi{"ó"}n profunda de la estructura actual de la AEU y de c{"ó"}mo sus activos de conocimiento pueden transformarse en activos digitales interoperables. La auditor{"í"}a de la situaci{"ó"}n actual revela una organizaci{"ó"}n madura y estructurada, pero fragmentada en su gesti{"ó"}n de la informaci{"ó"}n.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(213,80%,45%,0.1)]">
                <Users className="h-5 w-5 text-[hsl(213,80%,45%)]" />
              </div>
              <h3 className="text-base font-semibold text-[hsl(220,25%,12%)]">Grupos de Trabajo como Nodos Tem{"á"}ticos</h3>
            </div>
            <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">
              Los grupos de Urolog{"í"}a Oncol{"ó"}gica, Litiasis, Androlog{"í"}a y Urolog{"í"}a Funcional no son meros comit{"é"}s organizativos; son los custodios de la sem{"á"}ntica cl{"í"}nica. En un espacio de datos, estos grupos definen los modelos de datos (qu{"é"} variables recoger y c{"ó"}mo definirlas).
            </p>
          </div>
          <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(45,85%,52%,0.15)]">
                <Landmark className="h-5 w-5 text-[hsl(45,85%,42%)]" />
              </div>
              <h3 className="text-base font-semibold text-[hsl(220,25%,12%)]">La FIU como Orquestador Legal</h3>
            </div>
            <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">
              Como entidad con personalidad jur{"í"}dica propia y capacidad para gestionar fondos de investigaci{"ó"}n, la FIU es el veh{"í"}culo legal ideal para actuar como Orquestador del Espacio de Datos. Su elegibilidad bajo el CNAE 9412 le permite liderar la solicitud del Kit Espacios de Datos.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[hsl(45,85%,52%,0.3)] bg-[hsl(45,85%,52%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(45,85%,42%)]" />
            <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
              Cada grupo de trabajo act{"ú"}a naturalmente como un {'"'}dominio de datos{'"'} vertical con necesidades y vocabularios espec{"í"}ficos. El Grupo de Litiasis define los par{"á"}metros metab{"ó"}licos cr{"í"}ticos en la orina de 24 horas, mientras que el de Rob{"ó"}tica define las m{"é"}tricas de eficiencia quir{"ú"}rgica.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDE 4 - PIEM: DEUDA TECNICA                                        */
/* ================================================================== */
export function UroSlidePIEM() {
  return (
    <SlideLayout slideNumber={4} totalSlides={TOTAL} id="slide-4">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 2.2
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          La Plataforma PIEM: Estado del Arte y Deuda T{"é"}cnica
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La PIEM ha sido un {"é"}xito rotundo en la era del {'"'}Small Data{'"'}, permitiendo estudios multic{"é"}ntricos vitales. Sin embargo, su an{"á"}lisis bajo la {"ó"}ptica de los Espacios de Datos revela limitaciones cr{"í"}ticas:
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: ClipboardList,
              title: "Tecnolog\u00EDa de Captura Manual",
              desc: "La dependencia de Cuadernos de Recogida de Datos (CRD) electr\u00F3nicos basados en web es insostenible. Introduce errores humanos, consume tiempo asistencial y limita el volumen de datos. UroSpace debe transicionar hacia la ingesta autom\u00E1tica (ETL) desde la Historia Cl\u00EDnica Electr\u00F3nica (HCE).",
              color: "hsl(0,75%,55%)",
            },
            {
              icon: Fingerprint,
              title: "Fragmentaci\u00F3n de la Identidad",
              desc: "Un mismo paciente puede existir en el Registro de C\u00E1ncer de Pr\u00F3stata y en el de Litiasis con identificadores diferentes, impidiendo el an\u00E1lisis de comorbilidades cruzadas. Se requiere Privacy-Preserving Record Linkage.",
              color: "hsl(0,75%,55%)",
            },
            {
              icon: Activity,
              title: "Datos Est\u00E1ticos vs. Din\u00E1micos",
              desc: "Los registros actuales son \u201Cinstant\u00E1neas\u201D tomadas en el momento de inclusi\u00F3n. Carecen de granularidad temporal para la IA. En vigilancia activa, no basta saber que el PSA subi\u00F3; necesitamos la curva completa de cin\u00E9tica del PSA.",
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
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDE 5 - CLUSTER A: ONCOLOGIA                                       */
/* ================================================================== */
export function UroSlideClusterA() {
  return (
    <SlideLayout variant="section" slideNumber={5} totalSlides={TOTAL} id="slide-5">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 3.1
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Cluster A: Urolog{"í"}a Oncol{"ó"}gica y Medicina de Precisi{"ó"}n
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Este es el dominio de mayor valor estrat{"é"}gico debido a la presi{"ó"}n por resultados en salud y el coste de los nuevos f{"á"}rmacos. La federaci{"ó"}n debe permitir la construcci{"ó"}n de cohortes din{"á"}micas para estudios de RWE.
        </p>

        <h3 className="text-xl font-bold text-[hsl(220,25%,12%)]">
          C{"á"}ncer de Pr{"ó"}stata: M{"á"}s all{"á"} del Gleason
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: BarChart3,
              title: "Variables Cl\u00EDnicas Est\u00E1ndar",
              desc: "PSA (ng/mL), Grado ISUP (1-5), Estadio TNM cl\u00EDnico y patol\u00F3gico. Deben mapearse al est\u00E1ndar OMOP CDM para ser interoperables con la red PIONEER.",
            },
            {
              icon: Activity,
              title: "Cin\u00E9tica del PSA",
              desc: "No solo el valor absoluto, sino el PSA Doubling Time y la PSA Velocity. Deben calcularse autom\u00E1ticamente federando datos hist\u00F3ricos del LIS hospitalario.",
            },
            {
              icon: Dna,
              title: "Gen\u00F3mica y Biomarcadores",
              desc: "Resultados de paneles de reparaci\u00F3n del ADN (BRCA1, BRCA2, ATM) y tests gen\u00F3micos comerciales (Decipher, Oncotype). Datos de alta sensibilidad que no deben salir del centro.",
            },
            {
              icon: Scan,
              title: "Imagen Multiparam\u00E9trica (mpMRI)",
              desc: "Puntuaci\u00F3n PI-RADS v2.1. El espacio debe federar archivos DICOM para entrenar algoritmos de radi\u00F3mica que detecten lesiones invisibles al ojo humano.",
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

/* ================================================================== */
/* SLIDE 6 - CLUSTER A: UROTELIAL Y RENAL                               */
/* ================================================================== */
export function UroSlideClusterA2() {
  return (
    <SlideLayout slideNumber={6} totalSlides={TOTAL} id="slide-6">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 3.1.2
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Carcinoma Urotelial y Renal
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Los registros de C{"á"}ncer Renal T1 y Tumor Vesical se benefician de variables de seguimiento a largo plazo. La federaci{"ó"}n permite detectar se{"ñ"}ales de toxicidad raras que un solo hospital tardar{"í"}a a{"ñ"}os en identificar.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
            <Syringe className="mb-3 h-6 w-6 text-[hsl(213,80%,45%)]" />
            <h3 className="mb-2 text-base font-semibold text-[hsl(220,25%,12%)]">Variables de Tratamiento Sist{"é"}mico</h3>
            <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">
              Dosis acumuladas de inmunoterapia (Pembrolizumab, Avelumab) y sus efectos adversos inmunomediados. Federar estos datos permite detectar se{"ñ"}ales de toxicidad raras que un solo hospital tardar{"í"}a a{"ñ"}os en identificar.
            </p>
          </div>
          <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
            <Target className="mb-3 h-6 w-6 text-[hsl(213,80%,45%)]" />
            <h3 className="mb-2 text-base font-semibold text-[hsl(220,25%,12%)]">Variables Quir{"ú"}rgicas de Precisi{"ó"}n</h3>
            <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">
              En nefrectom{"í"}a parcial, la integraci{"ó"}n de modelos 3D preoperatorios con los resultados de m{"á"}rgenes quir{"ú"}rgicos y funci{"ó"}n renal postoperatoria (eGFR a 1, 5, 10 a{"ñ"}os).
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDE 7 - CLUSTER B: LITIASIS                                        */
/* ================================================================== */
export function UroSlideClusterB() {
  return (
    <SlideLayout variant="section" slideNumber={7} totalSlides={TOTAL} id="slide-7">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 3.2
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Cluster B: Ecosistema de Litiasis y Metabolismo
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La litiasis renal es una patolog{"í"}a cr{"ó"}nica donde la prevenci{"ó"}n depende de datos metab{"ó"}licos y ambientales. El registro de Cistinuria y el proyecto Valit son la base.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: FlaskConical,
              title: "Perfil Metab\u00F3lico Urinario (Orina 24h)",
              desc: "Calciuria, Oxaluria, Citraturia, volumen total. Variables num\u00E9ricas ideales para algoritmos de clustering que identifiquen fenotipos liti\u00E1sicos complejos.",
            },
            {
              icon: Microscope,
              title: "Cristalograf\u00EDa y Espectrofotometr\u00EDa",
              desc: "Composici\u00F3n exacta del c\u00E1lculo. Federar estos datos permite crear un \u201CMapa Nacional de Litiasis\u201D correlacionado con la calidad del agua y dieta por regiones.",
            },
            {
              icon: Thermometer,
              title: "Datos Ambientales (Exposoma)",
              desc: "UroSpace puede conectarse con espacios de datos meteorol\u00F3gicos (AEMET, Copernicus) para correlacionar picos de temperatura con ingresos por c\u00F3lico nefr\u00EDtico, permitiendo alertas predictivas.",
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
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDE 8 - CLUSTER C: ROBOTICA                                        */
/* ================================================================== */
export function UroSlideClusterC() {
  return (
    <SlideLayout slideNumber={8} totalSlides={TOTAL} id="slide-8">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 3.3
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Cluster C: Rob{"ó"}tica Quir{"ú"}rgica y Telemetr{"í"}a (IoMT)
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La urolog{"í"}a lidera la adopci{"ó"}n rob{"ó"}tica. La coexistencia de sistemas Da Vinci (Intuitive) y Hugo RAS (Medtronic) genera una necesidad cr{"í"}tica de benchmarking neutral.
        </p>

        <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-[hsl(220,25%,12%)]">Variables de Telemetr{"í"}a: La {'"'}Caja Negra{'"'} del Quir{"ó"}fano</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Timer, title: "Tiempos de Consola", desc: "Tiempo real de disecci\u00F3n vs. tiempo de sutura." },
              { icon: Waypoints, title: "Cinem\u00E1tica", desc: "Distancia recorrida por los instrumentos, temblor filtrado, n\u00FAmero de colisiones entre brazos." },
              { icon: Zap, title: "Uso de Energ\u00EDa", desc: "Julios aplicados en coagulaci\u00F3n monopolar/bipolar." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-[hsl(213,80%,45%)]" />
                  <h4 className="text-sm font-semibold text-[hsl(220,25%,12%)]">{item.title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[hsl(45,85%,52%,0.3)] bg-[hsl(45,85%,52%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(45,85%,42%)]" />
            <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
              Interoperabilidad de Datos Rob{"ó"}ticos: Actualmente, estos datos son propietarios. UroSpace debe negociar {'"'}conectores de datos{'"'} con los fabricantes para que los hospitales recuperen sus datos de telemetr{"í"}a y puedan compararlos de forma anonimizada (ej. {'"'}{"¿"}Es mi tiempo de sutura uretral con Hugo comparable al promedio nacional con Da Vinci?{'"'}).
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDE 9 - CLUSTER D: FUNCIONAL Y PROMs                               */
/* ================================================================== */
export function UroSlideClusterD() {
  return (
    <SlideLayout variant="section" slideNumber={9} totalSlides={TOTAL} id="slide-9">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 3.4
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Cluster D: Funcional, Reconstructiva y Experiencia del Paciente (PROMs/PREMs)
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La urolog{"í"}a funcional (incontinencia, suelo p{"é"}lvico) y la androlog{"í"}a dependen subjetivamente de la calidad de vida.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: ClipboardList,
              title: "Digitalizaci\u00F3n de Cuestionarios",
              desc: "Transformar los cuestionarios en papel (IPSS, EPIC-26, IIEF-5) en formularios digitales (ePROMs) que el paciente rellena en su m\u00F3vil y se inyectan en el espacio de datos.",
            },
            {
              icon: HeartPulse,
              title: "Variables de Resultados",
              desc: "Incontinencia: N\u00FAmero de pa\u00F1ales/d\u00EDa, resultado de Pad Test 1h/24h. Estrechez Uretral: Flujometr\u00EDa (Qmax) pre y post-uretroplastia.",
            },
            {
              icon: CircleDollarSign,
              title: "Valor para el Pagador",
              desc: "Estos datos son la base para negociar pagos por valor. Demostrar que una t\u00E9cnica quir\u00FArgica reduce la incapacidad laboral o mejora el EPIC-26 es oro para las aseguradoras.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm"
            >
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

/* ================================================================== */
/* SLIDE 10 - ARQUITECTURA TECNICA                                       */
/* ================================================================== */
export function UroSlideArquitectura() {
  return (
    <SlideLayout slideNumber={10} totalSlides={TOTAL} id="slide-10">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 4
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Arquitectura T{"é"}cnica: Implementando la Soberan{"í"}a del Dato
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Para materializar este intercambio seguro, UroSpace debe desplegar una infraestructura que cumpla con los principios de Soberan{"í"}a (el due{"ñ"}o del dato decide qui{"é"}n accede), Federaci{"ó"}n (no hay base de datos central) e Interoperabilidad (todos hablan el mismo idioma).
        </p>

        <div className="rounded-xl border border-[hsl(45,85%,52%,0.3)] bg-[hsl(45,85%,52%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(45,85%,42%)]" />
            <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
              La arquitectura propuesta se basa en el modelo de referencia de Gaia-X, utilizando el Eclipse Dataspace Connector (EDC) como pieza fundamental de software.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border-2 border-[hsl(0,75%,55%,0.2)] bg-[hsl(0,75%,55%,0.03)] p-5">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-[hsl(0,65%,50%)]">
              <AlertTriangle className="h-5 w-5" /> Modelo PIEM Centralizado
            </h3>
            <ul className="space-y-2">
              {["Datos se anonimizan y env\u00EDan fuera del hospital", "P\u00E9rdida de granularidad y capacidad de re-contactaci\u00F3n", "Resistencia de los DPO hospitalarios", "Obsolescencia inmediata tras extracci\u00F3n"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,15%,35%)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(0,65%,50%)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border-2 border-[hsl(145,55%,42%,0.2)] bg-[hsl(145,55%,42%,0.03)] p-5">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-[hsl(145,55%,42%)]">
              <CheckCircle2 className="h-5 w-5" /> UroSpace Federado (Gaia-X)
            </h3>
            <ul className="space-y-2">
              {["Dato permanece soberano en su origen", "Algoritmo viaja al dato (Compute-to-Data)", "Resultados agregados y an\u00F3nimos", "Cumplimiento RGPD + interoperabilidad EHDS"].map((item) => (
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

/* ================================================================== */
/* SLIDE 11 - CONECTOR EDC                                               */
/* ================================================================== */
export function UroSlideConectorEDC() {
  return (
    <SlideLayout variant="section" slideNumber={11} totalSlides={TOTAL} id="slide-11">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 4.1
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          El Ecosistema Gaia-X y los Conectores EDC
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Cada hospital participante (o la nube regional de salud) instala un nodo EDC. Este software act{"ú"}a como un {'"'}agente de aduanas{'"'} digital.
        </p>

        {/* Visual diagram */}
        <div className="flex flex-col items-center gap-3 rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(213,80%,45%,0.03)] p-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(213,80%,45%,0.1)]">
                <Building2 className="h-6 w-6 text-[hsl(213,80%,45%)]" />
              </div>
              <span className="text-xs text-[hsl(220,15%,40%)]">Hospital A</span>
              <span className="text-xs text-[hsl(220,10%,50%)]">Conector EDC</span>
            </div>
            <ArrowRight className="h-4 w-4 text-[hsl(213,80%,45%,0.4)]" />
            <div className="flex flex-col items-center gap-1 rounded-xl border-2 border-dashed border-[hsl(45,85%,52%,0.5)] px-6 py-3">
              <Server className="h-8 w-8 text-[hsl(45,85%,42%)]" />
              <span className="text-sm font-semibold text-[hsl(45,70%,35%)]">UroSpace / FIU</span>
              <span className="text-xs text-[hsl(220,15%,45%)]">(Cat{"á"}logo Federado)</span>
            </div>
            <ArrowRight className="h-4 w-4 text-[hsl(213,80%,45%,0.4)]" />
            <div className="flex flex-col items-center gap-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(160,50%,38%,0.1)]">
                <Stethoscope className="h-6 w-6 text-[hsl(160,50%,38%)]" />
              </div>
              <span className="text-xs text-[hsl(220,15%,40%)]">Hospital B</span>
              <span className="text-xs text-[hsl(220,10%,50%)]">Conector EDC</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "Control de Acceso",
              desc: "Verifica la identidad del investigador solicitante v\u00EDa credenciales verificables SSI.",
            },
            {
              icon: Lock,
              title: "Control de Uso",
              desc: "Aplica las pol\u00EDticas definidas por el hospital (ej. \u201CSolo fines acad\u00E9micos, no comerciales, durante el a\u00F1o 2026\u201D).",
            },
            {
              icon: FileText,
              title: "Auditor\u00EDa",
              desc: "Registra cada transacci\u00F3n de datos en un log inmutable, garantizando la trazabilidad exigida por el RGPD.",
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

/* ================================================================== */
/* SLIDE 12 - COMPUTE-TO-DATA                                            */
/* ================================================================== */
export function UroSlideC2D() {
  return (
    <SlideLayout slideNumber={12} totalSlides={TOTAL} id="slide-12">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 4.2
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Compute-to-Data: La Revoluci{"ó"}n de la Privacidad
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          En el modelo tradicional de la PIEM, los datos se anonimizaban y enviaban fuera. En UroSpace, implementamos Compute-to-Data.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "1",
              title: "El Algoritmo Viaja",
              desc: "Un investigador de la FIU desarrolla un script en Python (ej. para analizar supervivencia en c\u00E1ncer de vejiga) y lo empaqueta en un contenedor Docker.",
              icon: Cpu,
            },
            {
              step: "2",
              title: "Ejecuci\u00F3n Local",
              desc: "Este contenedor se env\u00EDa a los conectores de los hospitales participantes (ej. Hospital La Fe, Hospital Cl\u00EDnico San Carlos).",
              icon: Server,
            },
            {
              step: "3",
              title: "Caja de Arena (Sandbox)",
              desc: "El conector del hospital ejecuta el algoritmo en un entorno aislado sobre los datos locales. El algoritmo \u201Cve\u201D los datos, aprende, pero no puede copiarlos.",
              icon: Shield,
            },
            {
              step: "4",
              title: "Resultado Agregado",
              desc: "Solo el resultado estad\u00EDstico (ej. \u201CHazard Ratio: 0.85\u201D) o los pesos de la red neuronal salen del hospital. Privacidad matem\u00E1ticamente garantizada.",
              icon: BarChart3,
            },
          ].map((item) => (
            <div key={item.step} className="rounded-xl border border-[hsl(213,80%,45%,0.15)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(213,80%,45%)] text-xs font-bold text-[hsl(0,0%,100%)]">{item.step}</span>
                <item.icon className="h-5 w-5 text-[hsl(213,80%,45%)]" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-[hsl(220,25%,12%)]">{item.title}</h3>
              <p className="text-xs leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDE 13 - OMOP CDM Y DICOMWEB                                       */
/* ================================================================== */
export function UroSlideOMOP() {
  return (
    <SlideLayout variant="section" slideNumber={13} totalSlides={TOTAL} id="slide-13">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 4.3
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Estandarizaci{"ó"}n Sem{"á"}ntica: OMOP CDM y DICOMweb
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Para que el algoritmo funcione en m{"ú"}ltiples hospitales, los datos deben tener la misma estructura.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
            <Database className="mb-3 h-8 w-8 text-[hsl(213,80%,45%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">OMOP CDM (Common Data Model)</h3>
            <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
              Es imperativo que la AEU adopte OMOP como su est{"á"}ndar interno. Esto implica procesos de ETL que conviertan, por ejemplo, el c{"ó"}digo local {'"'}C{"Á"}NCER PR{"Ó"}STATA{'"'} de un hospital al concepto est{"á"}ndar OMOP Condition_Concept_ID: 317009. Esto alinea a la AEU con redes globales como OHDSI y EHDEN.
            </p>
          </div>
          <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
            <Scan className="mb-3 h-8 w-8 text-[hsl(213,80%,45%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">DICOMweb</h3>
            <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
              Para las im{"á"}genes, se utilizar{"á"} el est{"á"}ndar DICOMweb que permite consultar y recuperar metadatos o p{"í"}xeles espec{"í"}ficos v{"í"}a protocolos web (RESTful APIs), facilitando la integraci{"ó"}n con herramientas de visualizaci{"ó"}n y an{"á"}lisis en la nube sin necesidad de mover gigabytes de archivos pesados.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-[hsl(220,25%,12%)]">Ejemplo de Transformaci{"ó"}n ETL</h3>
          <div className="rounded-lg bg-[hsl(220,25%,12%)] p-4">
            <code className="text-sm leading-relaxed text-[hsl(145,55%,75%)]">
              Hospital Local: {'"'}C{"Á"}NCER PR{"Ó"}STATA{'"'} {"→"} OMOP CDM: Condition_Concept_ID: 317009 {"→"} Red global OHDSI / EHDEN interoperable
            </code>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDE 14 - MARCO LEGAL: ANTITRUST                                     */
/* ================================================================== */
export function UroSlideMarcoLegal() {
  return (
    <SlideLayout slideNumber={14} totalSlides={TOTAL} id="slide-14">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 5
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Marco Legal y de Competencia: Navegando la Zona Segura
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La creaci{"ó"}n de un espacio de datos sectorial conlleva riesgos regulatorios que deben ser mitigados desde el dise{"ñ"}o ({'"'}Compliance by Design{'"'}).
        </p>

        <div className="rounded-xl border border-[hsl(45,85%,52%,0.3)] bg-[hsl(45,85%,52%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <Scale className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(45,85%,42%)]" />
            <div>
              <h3 className="mb-1 text-base font-semibold text-[hsl(220,25%,12%)]">5.1. Cumplimiento Antitrust (Defensa de la Competencia)</h3>
              <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
                Al igual que en otros sectores sanitarios, la AEU debe vigilar que UroSpace no facilite pr{"á"}cticas colusorias, especialmente si participan entidades privadas.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border-2 border-[hsl(0,75%,55%,0.3)] bg-[hsl(0,75%,55%,0.04)] p-5">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-[hsl(0,65%,50%)]" />
              <h3 className="text-lg font-semibold text-[hsl(0,65%,50%)]">Zona Roja (Datos Prohibidos)</h3>
            </div>
            <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">
              Informaci{"ó"}n sobre precios de compra de tecnolog{"í"}a, salarios m{"é"}dicos, m{"á"}rgenes comerciales de cl{"í"}nicas privadas o planes estrat{"é"}gicos de expansi{"ó"}n. El acceso a estos datos debe estar bloqueado por contrato inteligente.
            </p>
          </div>
          <div className="rounded-xl border-2 border-[hsl(145,55%,42%,0.3)] bg-[hsl(145,55%,42%,0.04)] p-5">
            <div className="mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[hsl(145,55%,42%)]" />
              <h3 className="text-lg font-semibold text-[hsl(145,55%,42%)]">Zona Verde (Datos Permitidos)</h3>
            </div>
            <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">
              Datos cl{"í"}nicos agregados, benchmarking de calidad asistencial (anonimizado), datos de seguridad del paciente, y resultados cient{"í"}ficos. La informaci{"ó"}n compartida debe beneficiar al paciente o a la ciencia, no reducir la incertidumbre comercial.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDE 15 - PROTECCION DE DATOS Y ETICA                                */
/* ================================================================== */
export function UroSlideProteccionDatos() {
  return (
    <SlideLayout variant="section" slideNumber={15} totalSlides={TOTAL} id="slide-15">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 5.2
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Protecci{"ó"}n de Datos y {"É"}tica
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          El uso secundario de datos de salud est{"á"} amparado por el RGPD y la legislaci{"ó"}n espa{"ñ"}ola (LOPD-GDD, Disposici{"ó"}n Adicional 17{"ª"}), siempre que existan garant{"í"}as adecuadas.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
            <Lock className="mb-3 h-8 w-8 text-[hsl(213,80%,45%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">Pseudonimizaci{"ó"}n Robusta</h3>
            <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
              Antes de que cualquier dato sea accesible por el conector EDC, debe pasar por un proceso de pseudonimizaci{"ó"}n que separe los identificadores directos (nombre, DNI) de los datos cl{"í"}nicos.
            </p>
          </div>
          <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
            <Scale className="mb-3 h-8 w-8 text-[hsl(145,55%,42%)]" />
            <h3 className="mb-2 text-lg font-bold text-[hsl(220,25%,12%)]">Comit{"é"}s de {"É"}tica (CEIm)</h3>
            <p className="text-base leading-relaxed text-[hsl(220,15%,35%)]">
              UroSpace debe contar con un {'"'}Comit{"é"} de Acceso al Dato{'"'} delegado que valide cient{"í"}ficamente las peticiones de los investigadores, agilizando la aprobaci{"ó"}n {"é"}tica para estudios multic{"é"}ntricos que, bajo el modelo actual, requieren aprobaciones redundantes en cada centro.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDE 16 - FINANCIACION: KIT ESPACIOS DE DATOS                       */
/* ================================================================== */
export function UroSlideFinanciacion() {
  return (
    <SlideLayout slideNumber={16} totalSlides={TOTAL} id="slide-16">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 6
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Estrategia de Financiaci{"ó"}n: El Programa {'"'}Kit Espacios de Datos{'"'}
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La oportunidad para financiar esta transformaci{"ó"}n es inmediata. La convocatoria Kit Espacios de Datos de Red.es (Orden TDF/758/2025) est{"á"} dise{"ñ"}ada espec{"í"}ficamente para casos como el de la AEU.
        </p>

        <div className="rounded-xl border border-[hsl(45,85%,52%,0.3)] bg-[hsl(45,85%,52%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <Euro className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(45,85%,42%)]" />
            <div>
              <h3 className="mb-2 text-base font-semibold text-[hsl(220,25%,12%)]">6.1. Elegibilidad y Cuant{"í"}as</h3>
              <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
                <strong>Entidades Beneficiarias:</strong> Tanto la AEU/FIU (como organismo de investigaci{"ó"}n/profesional sin {"á"}nimo de lucro, CNAE 9412) como los hospitales p{"ú"}blicos y privados son elegibles, siempre que ejerzan actividad econ{"ó"}mica y tengan madurez digital.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
            <h3 className="mb-2 text-base font-semibold text-[hsl(220,25%,12%)]">Como Participante</h3>
            <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">
              Hasta 15.000{"€"} (privados) o 25.000{"€"} (p{"ú"}blicos) para conectarse al espacio.
            </p>
          </div>
          <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
            <h3 className="mb-2 text-base font-semibold text-[hsl(220,25%,12%)]">Como Proveedor</h3>
            <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">
              Hasta 30.000{"€"} (privados) o 50.000{"€"} (p{"ú"}blicos) para preparar y ofrecer datos.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm">
          <h3 className="mb-3 text-base font-semibold text-[hsl(220,25%,12%)]">Estrategia de Solicitud en Cascada</h3>
          <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">
            La AEU/FIU debe solicitar la ayuda para montar la infraestructura central (Cat{"á"}logo Federado, reglas de gobernanza). Simult{"á"}neamente, debe coordinar y facilitar que 5-10 hospitales de referencia ({'"'}Nodos Faro{'"'}) soliciten sus propias ayudas para instalar los conectores y realizar el mapeo a OMOP. Esto crea un efecto multiplicador de la financiaci{"ó"}n.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDE 17 - GASTOS ELEGIBLES                                           */
/* ================================================================== */
export function UroSlideGastosElegibles() {
  return (
    <SlideLayout variant="section" slideNumber={17} totalSlides={TOTAL} id="slide-17">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 6.2
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Gastos Elegibles
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          La subvenci{"ó"}n cubre costes cr{"í"}ticos para el despliegue (Programa Kit Espacios de Datos | Espa{"ñ"}a Digital 2026):
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Consultor\u00EDa T\u00E9cnica y Legal",
              desc: "Para definir el modelo de gobernanza y la arquitectura.",
            },
            {
              icon: Cpu,
              title: "Desarrollo Software",
              desc: "Implementaci\u00F3n y configuraci\u00F3n de los conectores EDC y APIs.",
            },
            {
              icon: Database,
              title: "Preparaci\u00F3n de Datos (Data Curation)",
              desc: "Costes de personal o servicios externos para limpiar datos y mapearlos al est\u00E1ndar OMOP CDM. Este es a menudo el coste m\u00E1s elevado y la barrera principal.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[hsl(213,80%,45%,0.12)] bg-[hsl(0,0%,100%)] p-5 shadow-sm"
            >
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

/* ================================================================== */
/* SLIDE 18 - HOJA DE RUTA FASE 1-2                                      */
/* ================================================================== */
export function UroSlideHojaDeRuta1() {
  return (
    <SlideLayout slideNumber={18} totalSlides={TOTAL} id="slide-18">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 7
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Hoja de Ruta de Implementaci{"ó"}n (2025-2027)
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          Plan de acci{"ó"}n escalonado de 18 meses, alineado con los plazos de la convocatoria de Red.es.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border-2 border-[hsl(213,80%,45%,0.25)] bg-[hsl(213,80%,45%,0.03)] p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(213,80%,45%)] text-sm font-bold text-[hsl(0,0%,100%)]">1</span>
              <h3 className="text-lg font-semibold text-[hsl(220,25%,12%)]">Cimientos y Financiaci{"ó"}n</h3>
            </div>
            <p className="mb-2 text-xs font-medium text-[hsl(213,80%,45%)]">Meses 1-4</p>
            <p className="mb-3 text-sm font-semibold text-[hsl(220,25%,12%)]">Hito: Presentaci{"ó"}n de solicitudes al Kit Espacios de Datos (Plazo hasta 31/03/2026)</p>
            <ul className="space-y-1.5">
              {[
                "Constituci\u00F3n del \u201CComit\u00E9 de Datos UroSpace\u201D en la AEU",
                "Selecci\u00F3n de socios tecnol\u00F3gicos y hospitales piloto",
                "Definici\u00F3n del \u201CRulebook\u201D (reglamento) inicial",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,15%,35%)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(213,80%,45%)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border-2 border-[hsl(45,85%,52%,0.25)] bg-[hsl(45,85%,52%,0.03)] p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(45,85%,52%)] text-sm font-bold text-[hsl(220,25%,12%)]">2</span>
              <h3 className="text-lg font-semibold text-[hsl(220,25%,12%)]">Despliegue de Infraestructura Piloto</h3>
            </div>
            <p className="mb-2 text-xs font-medium text-[hsl(45,85%,42%)]">Meses 5-10</p>
            <p className="mb-3 text-sm font-semibold text-[hsl(220,25%,12%)]">Hito: Primera conexi{"ó"}n {'"'}Ping{'"'} entre la FIU y un Hospital</p>
            <ul className="space-y-1.5">
              {[
                "Instalaci\u00F3n de conectores EDC en la nube de la AEU",
                "Conectores en servidores de hospitales piloto",
                "Inicio del mapeo a OMOP del Registro de C\u00E1ncer de Pr\u00F3stata",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,15%,35%)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(45,85%,42%)]" />
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

/* ================================================================== */
/* SLIDE 19 - HOJA DE RUTA FASE 3-4                                      */
/* ================================================================== */
export function UroSlideHojaDeRuta2() {
  return (
    <SlideLayout variant="section" slideNumber={19} totalSlides={TOTAL} id="slide-19">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Secci{"ó"}n 7 (cont.)
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Hoja de Ruta: Fases 3 y 4
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border-2 border-[hsl(145,55%,42%,0.25)] bg-[hsl(145,55%,42%,0.03)] p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(145,55%,42%)] text-sm font-bold text-[hsl(0,0%,100%)]">3</span>
              <h3 className="text-lg font-semibold text-[hsl(220,25%,12%)]">Validaci{"ó"}n Cl{"í"}nica y {'"'}Primera Query{'"'}</h3>
            </div>
            <p className="mb-2 text-xs font-medium text-[hsl(145,55%,42%)]">Meses 11-14</p>
            <p className="mb-3 text-sm font-semibold text-[hsl(220,25%,12%)]">Hito: Ejecuci{"ó"}n del primer algoritmo federado</p>
            <ul className="space-y-1.5">
              {[
                "Lanzar consulta simple (ej. \u201CEdad media y PSA al diagn\u00F3stico por CCAA\u201D)",
                "Ejecutar a trav\u00E9s de la red federada sin mover datos",
                "Validar resultados frente a los registros tradicionales de la PIEM",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,15%,35%)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(145,55%,42%)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border-2 border-[hsl(213,80%,55%,0.25)] bg-[hsl(213,80%,55%,0.03)] p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(213,80%,55%)] text-sm font-bold text-[hsl(0,0%,100%)]">4</span>
              <h3 className="text-lg font-semibold text-[hsl(220,25%,12%)]">Escalado y Conexi{"ó"}n Europea</h3>
            </div>
            <p className="mb-2 text-xs font-medium text-[hsl(213,80%,55%)]">Meses 15-18</p>
            <p className="mb-3 text-sm font-semibold text-[hsl(220,25%,12%)]">Hito: Interoperabilidad con PIONEER/EHDEN</p>
            <ul className="space-y-1.5">
              {[
                "Abrir la red a m\u00E1s centros hospitalarios",
                "Publicar cat\u00E1logo de datos en el portal europeo",
                "Iniciar proyectos de IA complejos (imagen, gen\u00F3mica)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[hsl(220,15%,35%)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(213,80%,55%)]" />
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

/* ================================================================== */
/* SLIDE 20 - CONCLUSION                                                 */
/* ================================================================== */
export function UroSlideConclusion() {
  return (
    <SlideLayout slideNumber={20} totalSlides={TOTAL} id="slide-20">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Conclusi{"ó"}n
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          El Liderazgo Digital de la Urolog{"í"}a Espa{"ñ"}ola
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 pb-4">
        <p className="text-base leading-relaxed text-[hsl(220,15%,35%)] md:text-lg">
          UroSpace Spain no es un proyecto de TI; es la nueva columna vertebral de la investigaci{"ó"}n urol{"ó"}gica. Al transicionar de la PIEM centralizada a un ecosistema federado soberano, la AEU resuelve la paradoja de la era del Big Data: c{"ó"}mo colaborar masivamente sin perder el control individual.
        </p>

        <div className="rounded-xl border border-[hsl(45,85%,52%,0.3)] bg-[hsl(45,85%,52%,0.06)] p-5">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(45,85%,42%)]" />
            <p className="text-base leading-relaxed text-[hsl(220,15%,30%)]">
              La convergencia de la tecnolog{"í"}a (IDS, OMOP), la necesidad cl{"í"}nica (RWE, Medicina de Precisi{"ó"}n) y la oportunidad financiera (Kit Espacios de Datos) crea un momento {"ú"}nico. Si la AEU lidera este movimiento, no solo optimizar{"á"} su propia producci{"ó"}n cient{"í"}fica, sino que se convertir{"á"} en un modelo de referencia para todas las sociedades m{"é"}dico-cient{"í"}ficas de Europa.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Database,
              title: "Tecnolog\u00EDa",
              desc: "IDS, OMOP CDM, DICOMweb, Eclipse Dataspace Connector, Compute-to-Data",
            },
            {
              icon: Stethoscope,
              title: "Necesidad Cl\u00EDnica",
              desc: "Real World Evidence, Medicina de Precisi\u00F3n, Benchmarking Rob\u00F3tico, ePROMs",
            },
            {
              icon: Euro,
              title: "Oportunidad Financiera",
              desc: "Kit Espacios de Datos de Red.es, financiaci\u00F3n en cascada AEU + hospitales",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[hsl(213,80%,45%,0.15)] bg-[hsl(0,0%,100%)] p-5 shadow-sm text-center"
            >
              <item.icon className="mx-auto mb-3 h-8 w-8 text-[hsl(213,80%,45%)]" />
              <h3 className="mb-2 text-base font-semibold text-[hsl(220,25%,12%)]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[hsl(220,10%,45%)]">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-base font-semibold leading-relaxed text-[hsl(213,80%,45%)] md:text-lg">
          Asegurando que la urolog{"í"}a espa{"ñ"}ola sea quien defina las preguntas y obtenga las respuestas en la medicina del futuro.
        </p>
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDES 21-24 - OBRAS CITADAS                                          */
/* ================================================================== */
export function UroSlideObrasCitadas1() {
  return (
    <SlideLayout variant="section" slideNumber={21} totalSlides={TOTAL} id="slide-21">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Referencias
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Obras Citadas (I)
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-3 pb-4">
        {[
          { num: "1", text: "Junta Directiva - Asociaci\u00F3n Espa\u00F1ola de Urolog\u00EDa, fecha de acceso: febrero 10, 2026", url: "https://aeu.es/jdirectiva.aspx" },
          { num: "2", text: "ACTA JUNTA PATRONATO DE LA FIU - AEU, fecha de acceso: febrero 10, 2026", url: "https://aeu.es/UserFiles/EstatutosFIU.pdf" },
          { num: "3", text: "Proyectos - Asociaci\u00F3n Espa\u00F1ola de Urolog\u00EDa. Plataforma Investigaci\u00F3n de Estudios Multic\u00E9ntricos de la AEU., fecha de acceso: febrero 10, 2026", url: "https://piem.aeu.es/Proyectos.aspx" },
          { num: "4", text: "Gaia-X Domain Health - bundeswirtschaftsministerium.de, fecha de acceso: febrero 10, 2026", url: "https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Publikationen/Digitale-Welt/211116-pp-health.pdf?__blob=publicationFile&v=1" },
          { num: "5", text: "Getting ready for the European Health Data Space (EHDS): IDERHA\u2019s plan to align with the latest EHDS requirements for the secondary use of health data. - Open Research Europe, fecha de acceso: febrero 10, 2026", url: "https://open-research-europe.ec.europa.eu/articles/4-160" },
          { num: "6", text: "Estrategia de Espacios de Datos para AseBio (Estructura FENIN).pdf", url: "" },
          { num: "7", text: "Medtronic\u2019s Hugo\u2122 robotic surgery system for robot-assisted radical prostatectomy: a systematic review of current worldwide experiences - PMC, fecha de acceso: febrero 10, 2026", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11438614/" },
          { num: "8", text: "CONVOCATORIA DE AYUDAS PARA LA TRANSFORMACI\u00D3N DIGITAL DE LOS SECTORES PRODUCTIVOS ESTRAT\u00C9GICOS MEDIANTE EL FOMENTO DE LA ADAPTACI\u00D3N E INCORPORACI\u00D3N DE PARTICIPANTES A LOS ESPACIOS DE DATOS (KIT ESPACIOS DE DATOS) - sede electr\u00F3nica de Red.es, fecha de acceso: febrero 10, 2026", url: "https://sede.red.gob.es/es/procedimientos/convocatoria-de-ayudas-para-la-transformacion-digital-de-los-sectores-productivos" },
          { num: "9", text: "Organizaci\u00F3n de los Grupos de Trabajo - Asociaci\u00F3n Espa\u00F1ola de Urolog\u00EDa, fecha de acceso: febrero 10, 2026", url: "https://aeu.es/GruposTrabajo.aspx" },
        ].map((ref) => (
          <div key={ref.num} className="flex items-start gap-3 rounded-lg border border-[hsl(213,80%,45%,0.08)] bg-[hsl(0,0%,100%)] px-4 py-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[hsl(213,80%,45%,0.1)] text-xs font-bold text-[hsl(213,80%,45%)]">{ref.num}</span>
            <div className="min-w-0">
              <p className="text-sm leading-relaxed text-[hsl(220,15%,30%)]">{ref.text}</p>
              {ref.url ? (
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[hsl(213,80%,45%)] underline decoration-[hsl(213,80%,45%,0.4)] underline-offset-2 break-all">
                  {ref.url}
                </a>
              ) : (
                <span className="text-xs italic text-[hsl(220,10%,55%)]">Documento interno</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}

export function UroSlideObrasCitadas2() {
  return (
    <SlideLayout slideNumber={22} totalSlides={TOTAL} id="slide-22">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Referencias
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Obras Citadas (II)
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-3 pb-4">
        {[
          { num: "10", text: "C\u00F3digo CNAE 9412. Actividades de organizaciones profesionales. - SuperContable.com, fecha de acceso: febrero 10, 2026", url: "https://www.supercontable.com/informacion/IAE/Codigo_CNAE_9412.Actividades_de_organizaciones_.html" },
          { num: "11", text: "PLATAFORMA DE INVESTIGACI\u00D3N DE ESTUDIOS MULTIC\u00C9NTRICOS DE LA AEU (PIEM-AEU) INTRODUCCI\u00D3N La informaci\u00F3n cient\u00EDfica disponib, fecha de acceso: febrero 10, 2026", url: "https://piem.aeu.es/formularios/marconormativo.pdf" },
          { num: "12", text: "ARTICLE IN PRESS - Asociaci\u00F3n Espa\u00F1ola de Urolog\u00EDa. Plataforma Investigaci\u00F3n de Estudios Multic\u00E9ntricos de la AEU., fecha de acceso: febrero 10, 2026", url: "https://piem.aeu.es/proyectos/VACP/documentacion/PIEM-AEU-VA_ActasUrolEsp2015.pdf" },
          { num: "13", text: "A major milestone for data-driven urology: Three new PIONEER+ papers published using real-world data - Uroweb, fecha de acceso: febrero 10, 2026", url: "https://uroweb.org/news/a-major-milestone-for-data-driven-urology-three-new-pioneer-papers-published-using-real-world-data" },
          { num: "14", text: "Federated Learning with Research Prototypes: Application to Multi-Center MRI-based Detection of Prostate Cancer with Diverse Histopathology - PMC, fecha de acceso: febrero 10, 2026", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10869141/" },
          { num: "15", text: "Current management of stage T1 renal cell carcinoma in Spain: Results of a multicentre national registry - PubMed, fecha de acceso: febrero 10, 2026", url: "https://pubmed.ncbi.nlm.nih.gov/41587603/" },
          { num: "16", text: "El registro nacional de pacientes de cistinuria una base de datos por llenar | IM M\u00E9dico, fecha de acceso: febrero 10, 2026", url: "https://www.immedicohospitalario.es/noticia/21281/el-registro-nacional-de-pacientes-de-cistinuria-una-base-de-datos-po.html" },
          { num: "17", text: "Cirug\u00EDa Rob\u00F3tica con Da Vinci - Fundaci\u00F3 Puigvert, fecha de acceso: febrero 10, 2026", url: "https://www.fundacio-puigvert.es/cirugia-robotica/" },
          { num: "18", text: "Psychometric validation of the Spanish version of the Expanded Prostate Cancer Index Composite-26 - PubMed, fecha de acceso: febrero 10, 2026", url: "https://pubmed.ncbi.nlm.nih.gov/37947846/" },
        ].map((ref) => (
          <div key={ref.num} className="flex items-start gap-3 rounded-lg border border-[hsl(213,80%,45%,0.08)] bg-[hsl(0,0%,100%)] px-4 py-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[hsl(213,80%,45%,0.1)] text-xs font-bold text-[hsl(213,80%,45%)]">{ref.num}</span>
            <div className="min-w-0">
              <p className="text-sm leading-relaxed text-[hsl(220,15%,30%)]">{ref.text}</p>
              <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[hsl(213,80%,45%)] underline decoration-[hsl(213,80%,45%,0.4)] underline-offset-2 break-all">
                {ref.url}
              </a>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}

export function UroSlideObrasCitadas3() {
  return (
    <SlideLayout variant="section" slideNumber={23} totalSlides={TOTAL} id="slide-23">
      <div className="mb-6">
        <span className="mb-2 inline-block text-sm font-semibold tracking-[0.2em] text-[hsl(213,80%,45%)] uppercase">
          Referencias
        </span>
        <h2 className="text-3xl font-bold text-[hsl(220,25%,12%)] md:text-4xl">
          Obras Citadas (III)
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-3 pb-4">
        {[
          { num: "19", text: "Asociaci\u00F3n Espa\u00F1ola de Urolog\u00EDa. Plataforma Investigaci\u00F3n de Estudios Multic\u00E9ntricos de la AEU., fecha de acceso: febrero 10, 2026", url: "https://piem.aeu.es/proyectos/upCRU/" },
          { num: "20", text: "IDSA Data Space Connector Report, fecha de acceso: febrero 10, 2026", url: "https://internationaldataspaces.org/idsa-data-space-connector-report/" },
          { num: "21", text: "GAIA-X gets new support with European Eclipse Data Connector | Microsoft Azure Blog, fecha de acceso: febrero 10, 2026", url: "https://azure.microsoft.com/en-us/blog/gaiax-gets-new-support-with-european-eclipse-data-connector/" },
          { num: "22", text: "Gaia-X-Med: Experiences with Building Dataspaces for Medical Applications - MDPI, fecha de acceso: febrero 10, 2026", url: "https://www.mdpi.com/1999-5903/16/12/463" },
          { num: "23", text: "Breaking data silos: incorporating the DICOM imaging standard into the OMOP CDM to enable multimodal research - PMC, fecha de acceso: febrero 10, 2026", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12451937/" },
          { num: "24", text: "Observational Medical Outcomes Partnership \u00BB OMOP \u00BB Integrated Data Repository Research Services \u00BB Clinical and Translational Science Institute \u00BB University of Florida - UF IDR, fecha de acceso: febrero 10, 2026", url: "https://idr.ufhealth.org/research-services/omop/" },
          { num: "25", text: "DICOMweb\u2122, fecha de acceso: febrero 10, 2026", url: "https://www.dicomstandard.org/using/dicomweb" },
          { num: "26", text: "Kit Espacios de Datos | Red.es, fecha de acceso: febrero 10, 2026", url: "https://www.red.es/es/iniciativas/proyectos/kit-espacios-de-datos" },
          { num: "27", text: "Programa Kit Espacios de Datos | Espa\u00F1a Digital 2026, fecha de acceso: febrero 10, 2026", url: "http://espanadigital.gob.es/lineas-de-actuacion/programa-kit-espacios-de-datos" },
        ].map((ref) => (
          <div key={ref.num} className="flex items-start gap-3 rounded-lg border border-[hsl(213,80%,45%,0.08)] bg-[hsl(0,0%,100%)] px-4 py-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[hsl(213,80%,45%,0.1)] text-xs font-bold text-[hsl(213,80%,45%)]">{ref.num}</span>
            <div className="min-w-0">
              <p className="text-sm leading-relaxed text-[hsl(220,15%,30%)]">{ref.text}</p>
              <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[hsl(213,80%,45%)] underline decoration-[hsl(213,80%,45%,0.4)] underline-offset-2 break-all">
                {ref.url}
              </a>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}

/* ================================================================== */
/* SLIDE 24 - CIERRE                                                     */
/* ================================================================== */
export function UroSlideCierre() {
  return (
    <SlideLayout variant="title" slideNumber={24} totalSlides={TOTAL} id="slide-24">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[hsl(45,85%,52%,0.4)]" />
          {EU_STARS_42.map((pos, i) => (
            <div
              key={i}
              className="absolute h-2.5 w-2.5 rounded-full bg-[hsl(45,85%,52%)]"
              style={{ transform: `translate(${pos[0]}px, ${pos[1]}px)` }}
            />
          ))}
          <Stethoscope className="h-10 w-10 text-[hsl(213,80%,45%)]" />
        </div>

        <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-[hsl(220,25%,12%)] md:text-5xl lg:text-6xl text-balance">
          UroSpace Spain
        </h1>

        <div className="eu-stripe mb-8 h-1 w-32 rounded-full" />

        <h2 className="mb-8 max-w-3xl text-lg leading-relaxed text-[hsl(220,15%,35%)] md:text-xl">
          Espacio de Datos Federado de la Asociaci{"ó"}n Espa{"ñ"}ola de Urolog{"í"}a
        </h2>

        <p className="max-w-2xl text-base leading-relaxed text-[hsl(220,10%,50%)]">
          La urolog{"í"}a espa{"ñ"}ola define las preguntas y obtiene las respuestas en la medicina del futuro.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {["AEU", "FIU", "Gaia-X", "EHDS", "OMOP", "Red.es"].map((tag) => (
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
