import React from 'react';
import {
  Shield,
  Swords,
  Coins,
  Server,
  Flame,
  Trophy,
  Users,
  Target,
  GitBranch,
  Scale,
} from 'lucide-react';

/**
 * Roadmap — Defenders of the Tomb (TOD)
 * Pegá este archivo en bolt.new (React + Tailwind + lucide-react).
 *
 * Hero: `tod-hero-gameplay.png` en `public/` (Vite: `import.meta.env.BASE_URL` + nombre).
 */
const HERO_GAMEPLAY_SRC = `${(import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/'}tod-hero-gameplay.png`;

type RoadmapTone = 'amber' | 'violet' | 'cyan' | 'emerald';

type RoadmapCard = { bold: string; text: string };

type RoadmapMetric = { kicker: string; value: string; detail: string };

type RoadmapSection = {
  title: string;
  lead?: string;
  items?: RoadmapCard[];
  metrics?: RoadmapMetric[];
};

type RoadmapChapter = {
  id: number;
  /** Etiqueta corta sobre el icono (ej. ITO-1A) */
  badge: string;
  title: string;
  subtitle: string;
  status: string;
  progress: number;
  accent: string;
  tone: RoadmapTone;
  sections: RoadmapSection[];
  icon: React.ReactNode;
};

const Roadmap = () => {
  const chapters: RoadmapChapter[] = [
    {
      id: 1,
      badge: 'ITO-1A',
      title: 'Economía de partida y protocolo PvP',
      subtitle: 'Pruebas de estrés · Alpha/Beta cerrada antes de apertura pública',
      status: 'EN CURSO',
      progress: 28,
      accent: 'from-orange-500/28 via-amber-500/12 to-transparent',
      tone: 'amber',
      icon: <Swords className="h-7 w-7 text-orange-300" />,
      sections: [
        {
          title: 'Entorno de validación',
          items: [
            {
              bold: 'Despliegue inicial cerrado',
              text: 'Alpha/Beta en entorno cerrado para auditar estabilidad de servidores y balance económico antes de abrir al público general.',
            },
          ],
        },
        {
          title: 'Liquidez del duelo (RON)',
          lead: 'El pozo es el corazón del loop competitivo. Pre–Temporada 1: el reparto on-chain es 0% al ganador en RON y 100% del escrow a tesorería (desarrollo); post–Temporada 1 vuelve el esquema 90/10 macro descrito abajo.',
          items: [
            {
              bold: 'Protocolo de apuestas',
              text: 'Pre–Temporada 1: ambos aportan RON al escrow del duelo; el ganador no recibe nativo del pozo (0% on-chain) y el 100% del pozo se libera a la wallet de protocolo (desarrollo / feeRecipient), en línea con el contrato MatchRONPrize. La contraprestación operativa es el acceso al TGE según reglas del evento. Post–Temporada 1 (ecosistema maduro): el ganador se lleva el 90% del pozo; el 10% restante sigue siendo sumidero económico del diseño macro.',
            },
            {
              bold: 'Distribución del fee (10% del pozo)',
              text: 'Pre–Temporada 1: el 100% de esa tarifa va a desarrollo e infraestructura, repartida 50% en token TOD y 50% en token RON. Post–Temporada 1 (ecosistema maduro): sobre la parte en TOD, 5% a la pool de holders de NFT y 5% quema permanente; sobre la parte en RON, 8% a la pool de liquidez en RON y 2% a operaciones de desarrollo.',
            },
          ],
        },
        {
          title: 'Meritocracia y primer tramo de TOD',
          items: [
            {
              bold: 'Airdrop y acceso preferente',
              text: 'Para el evento de generación de tokens (TGE), una tabla clasificatoria basada exclusivamente en el rendimiento de victorias de los referidos: las recompensas fluyen hacia quienes fortalecen la red competitiva, con 100 puntos por cada victoria que consigan tus referidos. A ese ranking se asignan 50.000 TOD. Otros 50.000 TOD con opción de compra como antes: precio al promedio de la subasta de salida del token (no al mínimo). El 10% del millón inicial por meritocracia (puntos semanales acumulados) se mantiene igual: 100.000 TOD.',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      badge: 'ITO-1B',
      title: 'Integridad competitiva (ELO / MMR)',
      subtitle: 'Mitigación de smurf, farmeo y colusión bajo reglas explícitas',
      status: 'EN CURSO',
      progress: 0,
      accent: 'from-violet-500/22 via-purple-600/10 to-transparent',
      tone: 'violet',
      icon: <Scale className="h-7 w-7 text-violet-200" />,
      sections: [
        {
          title: 'Nuevas cuentas y riesgo de extracción',
          items: [
            {
              bold: 'MMR de incertidumbre',
              text: 'Cuentas nuevas con alta volatilidad de puntos hasta estabilizar el rango real. Retiros bloqueados hasta cumplir criterios de balance del MMR; plazo orientativo entre una semana y un mes, sin sacrificar estabilidad del juego.',
            },
          ],
        },
        {
          title: 'Señales de habilidad y emparejamiento',
          items: [
            {
              bold: 'Probabilidad de victoria (ELO)',
              text: 'Puntaje ponderado: ganar a un rival de mayor ELO suma más; perder contra un ELO inferior penaliza más fuerte.',
            },
            {
              bold: 'K-Factor dinámico (anti-farmeo)',
              text: 'Algoritmo propietario que detecta rachas anómalas y acelera emparejamientos contra élite para neutralizar el farmeo en cuentas bajas.',
            },
            {
              bold: 'Restricción de colusión',
              text: 'Máximo 5 partidas diarias contra el mismo rival; objetivo algorítmico de ~1 enfrentamiento diario según densidad del servidor.',
            },
          ],
        },
        {
          title: 'Reglas de temporada',
          items: [
            {
              bold: 'Integridad de metajuego',
              text: 'Sin cambios de balance a mitad de temporada salvo exploits críticos. Ajustes estructurales entre temporadas.',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      badge: 'ITO-2',
      title: 'Capitalización y política monetaria',
      subtitle: 'NFTs, liquidez y suministro fijo de TOD · Ventana Q1–Q2 2027',
      status: 'SIGUIENTE',
      progress: 0,
      accent: 'from-sky-400/18 via-cyan-500/8 to-transparent',
      tone: 'cyan',
      icon: <Coins className="h-7 w-7 text-cyan-200" />,
      sections: [
        {
          title: 'Principio rector',
          items: [
            {
              bold: 'Financiación = profundidad, no extracción',
              text: 'El éxito a largo plazo exige mercado profundo. Los fondos consolidan producto e infraestructura, no alimentan salidas oportunistas.',
            },
          ],
        },
        {
          title: 'Uso del capital (venta de NFTs)',
          metrics: [
            { kicker: 'Liquidez', value: '70%', detail: 'Pool de liquidez en RON: mercado secundario y menor volatilidad.' },
            { kicker: 'Infra', value: '25%', detail: 'Servidores, escalabilidad y experiencia de usuario.' },
            { kicker: 'Tesorería', value: '5%', detail: 'Tesorería del creador.' },
          ],
        },
        {
          title: 'Suministro de TOD',
          items: [
            {
              bold: 'Tope duro e inmutable',
              text: 'Suministro máximo de 10 millones de TOD. Sin función de emisión adicional: escasez programada en el contrato y en la política operativa.',
            },
          ],
        },
        {
          title: 'Primera distribución (1.000.000 TOD)',
          lead: 'Los remanentes de cada mecanismo se re-subastan. El tramo TGE por referidos y la opción de compra suman 100.000 TOD (5 % + 5 %); la meritocracia por puntos semanales sigue en el 10 %.',
          metrics: [
            { kicker: 'Subasta', value: '80%', detail: '800.000 TOD · mejor postor en RON.' },
            {
              kicker: 'Clasificación (referidos · TGE)',
              value: '5%',
              detail:
                '50.000 TOD · tabla por victorias de referidos; 100 puntos por victoria de referido.',
            },
            {
              kicker: 'Opción de compra',
              value: '5%',
              detail:
                '50.000 TOD · ejercicio al precio medio (promedio) de la subasta de salida del token, no al mínimo.',
            },
            { kicker: 'Meritocracia', value: '10%', detail: '100.000 TOD · puntos semanales acumulados (sin cambios).' },
          ],
        },
        {
          title: 'Vesting anti-dump',
          items: [
            {
              bold: 'Liberación lineal',
              text: 'Todo el token de esta fase: vesting del 2,5% mensual después de Temporada 1, alineando a participantes tempranos con el ciclo real del juego.',
            },
          ],
        },
        {
          title: 'Los 9 millones de TOD restantes',
          metrics: [
            {
              kicker: 'Reserva estratégica',
              value: '30%',
              detail: '2.700.000 · torneos y eventos; fuera del circulante operativo cotidiano.',
            },
            {
              kicker: 'Liquidez DEX',
              value: '15–30%',
              detail: '2.520.000 · Katana / Uniswap en par con RON.',
            },
            {
              kicker: 'Pool NFT + PvP',
              value: '25%',
              detail: '2.250.000 · recompensas por tier y dividendos de partidas.',
            },
            {
              kicker: 'Desarrollo',
              value: '25%',
              detail: '2.250.000 · ejecución del roadmap técnico.',
            },
            {
              kicker: 'Equipo (vesting)',
              value: '5%',
              detail:
                '450.000, vesting del 2,5% mensual post–Temporada 1.',
            },
          ],
        },
        {
          title: 'Nota operativa',
          items: [
            {
              bold: 'Liquidez no desplegada',
              text: 'Tokens LP sin usar se reubican en la reserva estratégica para preservar disciplina de tesorería.',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      badge: 'OPS',
      title: 'Temporadas y protocolo de contingencia',
      subtitle: 'Ritmo de competencia, off-season técnico y pausa ante crisis',
      status: 'PLANEADO',
      progress: 0,
      accent: 'from-emerald-400/18 via-teal-600/8 to-transparent',
      tone: 'emerald',
      icon: <Trophy className="h-7 w-7 text-emerald-200" />,
      sections: [
        {
          title: 'Calendario competitivo',
          items: [
            {
              bold: 'Temporada 1 · Beta competitiva',
              text: '1–2 meses extendidos: recolección de datos y ajustes estructurales de economía y balance.',
            },
            {
              bold: 'Temporada 2 en adelante',
              text: '2 semanas de competencia activa + 1 semana de descanso para parches, mods, creeps y torres sin romper la integridad intra-temporada.',
            },
          ],
        },
        {
          title: 'Transparencia y pausa',
          items: [
            {
              bold: 'Protocolo de pausa',
              text: 'Si Temporada 1 revela fallas críticas en economía o balance, se congela lo competitivo. La tesorería financia especialistas; no se opera un sistema roto. Principio: un paso a la vez, siempre hacia adelante.',
            },
          ],
        },
      ],
    },
  ];

  const phaseShell = (tone: RoadmapTone, active: boolean) => {
    const base =
      'relative isolate rounded-[1.35rem] border border-zinc-500/50 bg-gradient-to-br from-zinc-900/92 to-zinc-950/95 p-6 pt-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_12px_40px_-20px_rgba(0,0,0,0.65)] backdrop-blur-sm transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-[1px] hover:border-zinc-400/55 md:p-9 md:pt-10';
    if (!active) {
      const glow = {
        cyan: 'hover:shadow-[0_0_36px_-12px_rgba(34,211,238,0.2)]',
        violet: 'hover:shadow-[0_0_36px_-12px_rgba(167,139,250,0.22)]',
        emerald: 'hover:shadow-[0_0_36px_-12px_rgba(52,211,153,0.2)]',
        amber: 'hover:shadow-[0_0_36px_-12px_rgba(249,115,22,0.18)]',
      }[tone];
      return `${base} ${glow}`;
    }
    return `${base} shadow-[0_24px_70px_-18px_rgba(234,88,12,0.45),inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-orange-500/30`;
  };

  const phaseLeftAccent = (tone: RoadmapTone) =>
    ({
      amber: 'from-orange-500 via-amber-400 to-orange-700',
      cyan: 'from-sky-400 via-cyan-400 to-sky-700',
      violet: 'from-violet-400 via-purple-500 to-violet-900',
      emerald: 'from-emerald-400 via-teal-500 to-emerald-800',
    })[tone];

  const docPill =
    'inline-flex items-center rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]';

  const wpCard =
    'rounded-2xl border border-zinc-600/40 bg-zinc-900/65 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)]';

  const wpSectionTitle =
    'flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-zinc-600/35 pb-3';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0d14] via-[#0f111a] to-[#1a1224] text-slate-100 antialiased selection:bg-orange-400/35">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Cielo / tumba */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_0%,rgba(88,28,135,0.14),transparent_50%)]" />
        {/* Brasas / lava (como el puente del juego) */}
        <div className="absolute -top-32 left-1/2 h-[480px] w-[560px] -translate-x-1/2 rounded-full bg-orange-500/14 blur-[100px]" />
        <div className="absolute bottom-[-15%] left-[-5%] h-[420px] w-[min(90vw,520px)] rounded-full bg-gradient-to-tr from-red-600/25 via-orange-600/20 to-amber-500/10 blur-[90px]" />
        <div className="absolute bottom-[10%] right-[-15%] h-[360px] w-[420px] rounded-full bg-fuchsia-600/12 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1224]/95" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/35 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
        <header className="mb-14 md:mb-20">
          {/* Grid: misma altura en lg; pills abajo en la columna izquierda para no “flotar” en medio */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-10">
            <div className="flex min-h-0 flex-col justify-between gap-8 lg:col-span-5 lg:h-full lg:pr-2">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <div className={docPill}>Documento · TOD</div>
                  <a
                    href="#documento-tod-nft"
                    className={`${docPill} cursor-pointer text-inherit no-underline transition-[border-color,background-color] hover:border-orange-400/40 hover:bg-orange-500/[0.14]`}
                  >
                    Documento · TOD - NFT
                  </a>
                </div>

                <div className="space-y-4">
                  <h1 className="font-black tracking-tight text-white">
                    <span className="block text-3xl leading-[1.05] text-white/95 md:text-4xl">
                      Defenders of the
                    </span>
                    <span className="mt-1 block bg-gradient-to-r from-amber-100 via-orange-400 to-orange-600 bg-clip-text text-5xl leading-[0.95] text-transparent drop-shadow-[0_0_32px_rgba(249,115,22,0.28)] md:text-6xl lg:text-7xl">
                      Tomb
                    </span>
                    <span className="mt-3 block text-lg font-semibold tracking-tight text-slate-300 md:text-xl">
                      Arquitectura económica y roadmap de desarrollo
                    </span>
                  </h1>
                  <p className="max-w-xl text-[15px] leading-relaxed text-slate-300 md:text-base">
                    Objetivo: un Tower Defense{' '}
                    <span className="text-orange-100">3D, divertido y estable</span>, con economía
                    de <span className="text-orange-100">suma positiva</span> donde manda el skill,
                    reconocimiento a quienes invierten y calidad visual seria — lejos del clic para
                    ganar típico de <span className="text-orange-100">juegos web3</span>. Abajo,
                    cuatro bloques: <span className="text-slate-200">economía PvP</span>,{' '}
                    <span className="text-slate-200">integridad competitiva</span>,{' '}
                    <span className="text-slate-200">capital y tokenomics</span>,{' '}
                    <span className="text-slate-200">temporadas y contingencia</span>.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-sm lg:pt-2">
                <span className="inline-flex items-center gap-2 rounded-xl border border-orange-500/25 bg-zinc-900/70 px-3 py-2 text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <Target className="h-4 w-4 text-orange-400" />
                  Skill-first y suma positiva
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-sky-500/25 bg-zinc-900/70 px-3 py-2 text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <Users className="h-4 w-4 text-sky-300" />
                  Anti-abuso (ELO / MMR)
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-orange-600/30 bg-zinc-900/70 px-3 py-2 text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <Flame className="h-4 w-4 text-orange-500" />
                  10 millones TOD inmutables
                </span>
              </div>
            </div>

            <div className="flex min-h-0 flex-col gap-4 lg:col-span-7 lg:h-full">
              <figure className="relative isolate h-56 w-full overflow-hidden rounded-2xl border border-orange-500/35 bg-zinc-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_60px_-20px_rgba(59,130,246,0.28),0_18px_40px_-24px_rgba(249,115,22,0.22)] ring-1 ring-orange-500/20 sm:h-64 lg:h-auto lg:min-h-0 lg:flex-1">
                <img
                  src={HERO_GAMEPLAY_SRC}
                  alt="Defenders of the Tomb: escena 3D del juego con río de lava, puentes de piedra y atmósfera oscura."
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0d14]/80 via-transparent to-transparent" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end px-3 pb-3 pt-12">
                  <span className="rounded-lg border border-orange-500/35 bg-zinc-950/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-100 backdrop-blur-sm md:text-[11px]">
                    Gameplay Alpha
                  </span>
                </figcaption>
              </figure>

              <div className="shrink-0 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/15 via-zinc-900/80 to-zinc-950 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_20px_50px_-24px_rgba(234,88,12,0.35)] backdrop-blur-md md:p-6">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-orange-200/90">
                  Estado Actual
                </p>
                <p className="flex items-center gap-2 text-lg font-semibold text-white">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
                  </span>
                  Alpha Cerrada
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  Auditoría de servidores, protocolo PvP con apuestas en RON y calibración del
                  motor de emparejamiento y anti-abuso antes de apertura pública.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />
        </header>

        <div className="mb-10 rounded-2xl border border-zinc-600/40 bg-zinc-900/55 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:p-6">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-orange-200/90">
            Cómo leer estos documentos
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            <span className="font-semibold text-slate-200">Página maestra (arriba):</span> roadmap
            macro por fases ITO (economía PvP en RON, integridad competitiva, capital y tokenomics,
            temporadas).{' '}
            <span className="font-semibold text-slate-200">Anexo · Whitepaper NFT (abajo):</span>{' '}
            diseño de activos, balance, breeding, emisión y flujos hacia tenedores. Podés leerlos
            en orden o ir directo al anexo si tu foco son los NFT.
          </p>
        </div>

        <div className="relative space-y-7 md:space-y-9">
          {/* Línea de tiempo: gradiente por fase (ya no solo “dorado”) */}
          <div
            className="pointer-events-none absolute bottom-16 left-[26px] top-6 hidden w-[3px] rounded-full opacity-75 md:block"
            style={{
              background:
                'linear-gradient(180deg, rgba(251,146,60,0.88) 0%, rgba(167,139,250,0.55) 28%, rgba(56,189,248,0.55) 62%, rgba(52,211,153,0.8) 100%)',
              boxShadow: '0 0 18px rgba(251,146,60,0.25)',
            }}
          />

          {chapters.map((ch) => (
            <article key={ch.id} className={phaseShell(ch.tone, ch.progress > 0)}>
              {/* Clip solo al fondo: el borde del article no se recorta (evita “borde superior incompleto”) */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.35rem]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ch.accent}`}
                  aria-hidden
                />
              </div>
              <div
                className={`pointer-events-none absolute left-3 top-10 bottom-10 z-[1] w-1 rounded-full bg-gradient-to-b opacity-90 md:left-4 ${phaseLeftAccent(ch.tone)}`}
                aria-hidden
              />

              <div className="relative z-[2] flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4 md:gap-5">
                  <div
                    className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl border ${
                      ch.progress > 0
                        ? 'border-orange-400/40 bg-zinc-950/80 shadow-[0_0_32px_-4px_rgba(249,115,22,0.55)]'
                        : 'border-zinc-600/50 bg-zinc-900/60'
                    }`}
                  >
                    <span className="absolute -right-1 -top-1 max-w-[4.5rem] truncate rounded-full bg-zinc-950/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-orange-100 ring-1 ring-orange-500/30">
                      {ch.badge}
                    </span>
                    {ch.icon}
                  </div>

                  <div className="min-w-0 space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                      {ch.title}
                    </h2>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {ch.subtitle}
                    </p>

                    {ch.progress > 0 && (
                      <div className="pt-2">
                        <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                          <span>Progreso de Fase</span>
                          <span className="font-mono text-orange-200">{ch.progress}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-zinc-950 ring-1 ring-zinc-600/60">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-amber-200 shadow-[0_0_12px_rgba(249,115,22,0.6)]"
                            style={{ width: `${ch.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="shrink-0 md:pt-1">
                  <span
                    className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest ${
                      ch.progress > 0
                        ? 'bg-gradient-to-r from-orange-500 to-amber-400 text-zinc-950 shadow-[0_0_28px_rgba(249,115,22,0.45)]'
                        : ch.status === 'EN CURSO'
                          ? 'bg-orange-500/12 text-orange-100 ring-1 ring-orange-400/35'
                          : ch.status === 'SIGUIENTE'
                            ? 'bg-sky-500/15 text-sky-100 ring-1 ring-sky-400/35'
                            : 'bg-zinc-800/80 text-slate-200 ring-1 ring-zinc-600/50'
                    }`}
                  >
                    {ch.status}
                  </span>
                </div>
              </div>

              {ch.progress > 0 && (
                <div
                  className="relative z-[2] mt-6 h-px w-full bg-gradient-to-r from-transparent via-orange-400/55 to-transparent md:mt-8"
                  aria-hidden
                />
              )}

              <div className="relative z-[2] mt-8 space-y-10">
                {ch.sections.map((sec, sIdx) => (
                  <div key={`${ch.id}-${sIdx}`} className="space-y-4">
                    <div className="flex flex-col gap-1 border-b border-zinc-600/35 pb-3 md:flex-row md:items-end md:justify-between">
                      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                        {sec.title}
                      </h3>
                      {sec.lead ? (
                        <p className="max-w-2xl text-[13px] leading-snug text-slate-500 md:text-right">
                          {sec.lead}
                        </p>
                      ) : null}
                    </div>

                    {sec.metrics && sec.metrics.length > 0 ? (
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {sec.metrics.map((m) => (
                          <div
                            key={m.kicker + m.value}
                            className="rounded-2xl border border-zinc-600/45 bg-zinc-950/55 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                          >
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                              {m.kicker}
                            </p>
                            <p className="mt-2 font-mono text-2xl font-bold tracking-tight text-white">
                              {m.value}
                            </p>
                            <p className="mt-2 text-[13px] leading-relaxed text-slate-300">{m.detail}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {sec.items && sec.items.length > 0 ? (
                      <div className="grid gap-3.5 sm:gap-4 md:grid-cols-2">
                        {sec.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="group rounded-2xl border border-zinc-600/40 bg-zinc-900/65 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] transition-[border-color,background-color,box-shadow] duration-200 hover:border-zinc-500/55 hover:bg-zinc-800/70 hover:shadow-[0_0_24px_-12px_rgba(249,115,22,0.12)]"
                          >
                            <div className="flex gap-3">
                              <div
                                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                                  ch.progress > 0
                                    ? 'bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.85)]'
                                    : 'bg-zinc-500 shadow-none group-hover:bg-orange-400 group-hover:shadow-[0_0_10px_rgba(249,115,22,0.45)]'
                                }`}
                              />
                              <div className="min-w-0">
                                <p className="text-sm font-extrabold tracking-tight text-white">
                                  {item.bold}
                                </p>
                                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-200 md:text-sm">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <section className="relative mt-12 overflow-hidden rounded-[1.35rem] border border-zinc-600/40 bg-gradient-to-br from-zinc-900/95 via-[#15101f] to-[#1f1428] p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_60px_-20px_rgba(249,115,22,0.15)] md:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/14 blur-[95px]" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-emerald-500/10 blur-[80px]" />
          <h3 className="relative mb-4 flex items-center gap-2 text-xl font-extrabold text-white md:text-2xl">
            <GitBranch className="h-6 w-6 text-orange-400" />
            Lectura del documento
          </h3>
          <p className="relative mb-6 max-w-3xl text-sm leading-relaxed text-slate-300">
            Los bloques <span className="text-slate-200">ITO-1A / ITO-1B</span> conviven en el
            mismo tramo de producto: economía de partida e integridad competitiva.{' '}
            <span className="text-slate-200">ITO-2</span> concentra recaudación NFT y reglas de
            suministro. <span className="text-slate-200">OPS</span> define cómo se juega en el
            tiempo (temporadas, parches y pausa ante crisis). Los porcentajes son diseño
            macroeconómico; la implementación puede ajustar detalles técnicos sin romper los
            pilares del protocolo.
          </p>
          <p className="relative mb-8 max-w-3xl text-sm leading-relaxed text-slate-300">
            Las apuestas en <span className="text-slate-200">RON</span> y los{' '}
            <span className="text-slate-200">retiros condicionados al MMR</span> existen para
            proteger el ecosistema frente a abusos y extracción; su operación concreta depende del
            marco legal y técnico aplicable en cada jurisdicción y de la implementación final del
            producto.
          </p>

          <div className="relative flex flex-col items-start gap-3 rounded-2xl border border-zinc-600/45 bg-zinc-900/70 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <Server className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
              <div>
                <p className="text-sm font-bold text-white">Aviso de Transparencia Económica</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                  Los porcentajes y asignaciones reflejan el diseño macroeconómico; la puesta en
                  marcha on-chain u off-chain puede requerir ajustes técnicos menores, sin abandonar
                  los pilares:{' '}
                  <span className="text-slate-200">competitividad basada en skill</span>,{' '}
                  <span className="text-slate-200">tesorería transparente</span>,{' '}
                  <span className="text-slate-200">suministro máximo fijo (10 millones TOD)</span> y{' '}
                  <span className="text-slate-200">mecanismos deflacionarios acordes al modelo
                  maduro post–Temporada 1</span>. Las mecánicas de apuestas en RON y retiros ligados al
                  MMR se comunican con transparencia y se implementan respetando normativa aplicable.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <Shield className="h-4 w-4 text-orange-400" />
              TOD Protocol
            </div>
          </div>
        </section>

        <section
          id="documento-tod-nft"
          className="relative mt-12 scroll-mt-24 overflow-hidden rounded-[1.35rem] border border-orange-500/30 bg-gradient-to-br from-zinc-900/95 via-[#15101f] to-[#1f1428] p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_60px_-20px_rgba(249,115,22,0.18)] md:p-10"
        >
          <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-orange-500/12 blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-amber-600/8 blur-[90px]" />

          <div className="relative max-w-3xl space-y-5">
            <div className={docPill}>Documento · TOD - NFT</div>
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
              TOD: Arquitectura Económica y Whitepaper Estratégico
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-slate-300 md:text-base">
              <p>
                Este documento detalla la estructura finita de activos, las mecánicas de juego
                balanceadas, los flujos de valor y el motor algorítmico que fortalece la
                sostenibilidad de TOD frente a la volatilidad sistémica del entorno de la web 3.
              </p>
              <p>
                El enfoque prioriza la{' '}
                <span className="text-orange-100">escasez real</span>, la{' '}
                <span className="text-orange-100">meritocracia competitiva</span> y el{' '}
                <span className="text-orange-100">rendimiento de los activos</span> para dueños de
                token TOD, NFT, skins y posiciones en tablas clasificatorias (skill).
              </p>
              <p className="text-[13px] text-slate-400">
                Los parámetros y fórmulas numéricas de este anexo se entienden{' '}
                <span className="text-slate-300">en potencia</span>: línea base de diseño, calibrable
                con datos reales de adopción y mercado.
              </p>
            </div>
          </div>

          <div className="relative mt-12 space-y-14">
            {/* 1 */}
            <div className="space-y-5">
              <div className={wpSectionTitle}>
                <span className="font-mono text-sm font-bold text-orange-400">1</span>
                <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  Suministro Génesis y distribución de activos
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                La escasez es el pilar innegociable de nuestra economía. El suministro total está
                estrictamente limitado por tiers (niveles) para garantizar la exclusividad a largo
                plazo.
              </p>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
                {[
                  ['T1', '1.002'],
                  ['T2', '502'],
                  ['T3', '252'],
                  ['T4', '127'],
                  ['T5', '62'],
                  ['T6', '32'],
                  ['T7', '12'],
                ].map(([t, n]) => (
                  <div
                    key={t}
                    className="rounded-xl border border-zinc-600/45 bg-zinc-950/55 px-3 py-3 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      {t}
                    </p>
                    <p className="mt-1 font-mono text-lg font-bold text-white">{n}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3.5 md:grid-cols-2">
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Reserva institucional</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Se retiene el <span className="text-orange-200">10%</span> exclusivamente de los
                    tiers 1 al 4 para financiar tesorería de torneos y recompensas del ecosistema.
                    Los tiers 5, 6 y 7 quedan exentos de esta retención, maximizando su rareza.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Cuenta de control (dev)</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    La administración dispone de exactamente <span className="text-orange-200">2</span>{' '}
                    unidades por tier para auditoría técnica y pruebas en entorno real, garantizando
                    liquidez genética mínima (una pareja) para habilitar breeding en el futuro.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Fase de liquidez</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Se libera el <span className="text-orange-200">50%</span> de los activos en la
                    etapa Génesis para financiación inicial y despliegue operativo.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Emisión programada</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    El <span className="text-orange-200">25%</span> restante se distribuye mediante
                    subastas semestrales (inicio mediados de 2027, continuidad en 2028) para evitar
                    shocks de oferta.
                  </p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="space-y-5">
              <div className={wpSectionTitle}>
                <span className="font-mono text-sm font-bold text-orange-400">2</span>
                <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  Balance competitivo (el fin del pay-to-win)
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                Rechazamos modelos donde el capital garantiza la victoria. El NFT es ventaja
                competitiva y estratégica; el motor del éxito sigue siendo la habilidad (skill).
              </p>
              <div className="grid gap-3.5 md:grid-cols-2">
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Progresión secuencial</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Para desplegar una torre T7 hay que poseer y evolucionar la cadena completa de
                    activos (T1 → T7), generando demanda orgánica constante sobre los tiers base.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Meritocracia estricta</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Free-to-play opera con torres estándar que suben de nivel orgánicamente. Los NFT
                    amplían variabilidad estratégica; un jugador gratuito muy hábil puede derrotar a
                    un poseedor de T7.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Contrapeso táctico</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Las torres NFT tienen exclusividad del daño mágico. Los rivales pueden desplegar
                    creeps con resistencia mágica, obligando al holder a gestionar recursos con
                    criterio.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Composición elemental</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Cada NFT tiene 5 partes que definen el multiplicador elemental (fuego, agua,
                    roca): cada parte es 20% del ADN de daño. Un NFT puro (5× fuego) ejerce 100% daño
                    de fuego y recibe un bono adicional del <span className="text-orange-200">5%</span>{' '}
                    (único aumento extra de daño en NFT). Las configuraciones híbridas permiten
                    cientos de estrategias.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="space-y-5">
              <div className={wpSectionTitle}>
                <span className="font-mono text-sm font-bold text-orange-400">3</span>
                <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  Protocolo de breeding y mercado de subastas (mid-2027)
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                A mediados de 2027 se activa la expansión demográfica de activos. Juntar dos torres
                del mismo tier genera una nueva torre; los padres no se pierden pero tienen un
                límite de <span className="text-orange-200">3 crías</span>. Atributos heredados con
                factor de entropía del <span className="text-orange-200">5%</span> adicional por
                parte para dificultar la clonación de meta-estrategias.
              </p>
              <div className={wpCard}>
                <p className="text-sm font-extrabold text-white">Subastas cíclicas</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                  El breeding no tiene costo fijo inflacionario: opera como mercado libre en{' '}
                  <span className="text-orange-200">temporadas pares</span> (T2, T4, T6). Los
                  usuarios depositan el token en un contrato inteligente; al cerrar la temporada, las
                  pujas más altas obtienen el derecho de emisión. Las pujas perdedoras se reembolsan
                  en total salvo fees de red.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="space-y-5">
              <div className={wpSectionTitle}>
                <span className="font-mono text-sm font-bold text-orange-400">4</span>
                <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  Motor algorítmico de emisión (v1.0)
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                La emisión por breeding está gobernada por un sistema matemático orientado a la
                supervivencia a largo plazo: amortigua picos de adopción (hype) y recorta con fuerza
                ante caídas de interés. El índice de jugadores activos se amortiza sobre una ventana
                móvil de <span className="text-orange-200">3 temporadas</span> (~7,5 meses). Si la
                adopción crece de forma exponencial (ej. 100 → 1.000 usuarios), la emisión sube de
                forma gradual; si la actividad cae, el sistema recorta la emisión de inmediato y de
                forma abrupta.
              </p>
              <pre className="overflow-x-auto rounded-2xl border border-zinc-600/50 bg-zinc-950/90 p-4 font-mono text-[11px] leading-relaxed text-slate-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] md:text-xs">
{`SISTEMA DE EMISIÓN NFT AUTORREGULADO (v1.0)

Parámetros en potencia: beta, k, r_max, F y demás son línea base de diseño, calibrables con datos reales.

Prioridad: Defensa de valor y resistencia a exploits
=========================================================

1. MÓDULO DE EMISIÓN POTENCIAL (Ep)
Mide la presión de demanda real del ecosistema.
---------------------------------------------------------
Ratio = ( (w1 * P avg) + (w2 * P s) ) / P ref

Ep = (UA * Actividad) * ((min(1.25, Ratio)^beta) - 1)

2. MÓDULO DE CONTROL DE INFLACIÓN (Ci)
Actúa como techo físico para proteger la escasez.
---------------------------------------------------------
EMA mint = (0.5 * Mint_t1) + (0.3 * Mint_t2) + (0.2 * Mint_t3)
Ci = min( EMA mint * F, Supply * r max )

3. MÓDULO DE AJUSTE POR MERCADO (Am)
Freno de emergencia ante caídas de precio.
---------------------------------------------------------
Am = max( 0, min( 1, Ratio )^k )

4. FÓRMULA FINAL UNIFICADA (Mint)
---------------------------------------------------------
Mint = max( 0, min( Ep, Ci ) ) * Am

=========================================================
PARÁMETROS RECOMENDADOS Y FUNCIONAMIENTO
=========================================================
beta  = 0.5 (suavizado de volatilidad)
k     = 2.0 (penalización cuadrática en caídas)
r_max = 0.05 (inflación máxima del 5% por temporada)
F     = 2.0 (límite de aceleración de emisión)
UA    = usuarios únicos con transacciones verificadas

1) Ratio (termómetro): precio actual vs temporada anterior. >1 = mercado en expansión; <1 = freno.
2) Ep (deseo): cuántos NFT nuevos exige la demanda; tope 1.25 como seguro contra burbujas.
3) Ci (techo): límite macro basado en historial y r_max.
4) Am (freno): caídas leves recortan en cuadrado; caídas severas pueden llevar el mint a cero.`}
              </pre>
              <div className={wpCard}>
                <p className="text-sm font-extrabold text-white">Compromiso de transparencia real</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                  Ningún modelo predice la irracionalidad humana a perpetuidad. Esta fórmula reacciona
                  al presente integrando mercado, adopción y subastas en tiempo real; como todo
                  sistema vivo, requerirá calibración. El compromiso no es dogmatizar una ecuación
                  estática, sino mantener una economía sana: ajustes futuros solo tras análisis
                  técnico profundo y con transparencia total. No buscamos la utopía de una fórmula
                  perfecta, sino un blindaje pragmático que proteja el valor de los activos en
                  escenarios impredecibles.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="space-y-5">
              <div className={wpSectionTitle}>
                <span className="font-mono text-sm font-bold text-orange-400">5</span>
                <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  Distribución de valor y dividendos del ecosistema
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                <span className="font-semibold text-slate-200">Post–Temporada 1</span>, con NFT en
                circulación y economía madura, adquirir un NFT en TOD es ser socio estructural: los
                flujos siguientes distribuyen valor hacia tenedores según las reglas publicadas.
              </p>
              <div className="grid gap-3.5 md:grid-cols-2">
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Mercado secundario (5% fee)</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Cada venta secundaria destina <span className="text-orange-200">2,5%</span> a
                    quema del token y <span className="text-orange-200">2,5%</span> a la pool de
                    recompensas, repartida entre los <span className="text-orange-200">7 tiers</span>{' '}
                    según <span className="text-orange-200">pesos relativos</span> del modelo (sin
                    cifras fijas por holder en este texto: solo la tabla de pesos). Todos los NFT del
                    juego, una vez <span className="text-orange-200">acuñados y con titular</span>,
                    participan en la misma lógica; mientras un activo de cualquier tier{' '}
                    <span className="text-orange-200">no esté minteado</span>, su proporcional
                    acumulado en contabilidad se <span className="text-orange-200">quema</span> hasta
                    que exista el NFT y un dueño real — misma regla para todos, sin trato privilegiado
                    por “génesis” frente al resto.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Apuestas competitivas (10% fee)</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Sobre el tramo que aplica post–Temporada 1: el ganador cede un{' '}
                    <span className="text-orange-200">10%</span> del esquema acordado; de ese capital,{' '}
                    <span className="text-orange-200">5%</span> quema,{' '}
                    <span className="text-orange-200">2,5%</span> a desarrollo técnico y{' '}
                    <span className="text-orange-200">2,5%</span> a la pool de recompensas NFT
                    (alineado al desglose macro del roadmap).
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Cosméticos y utilidades (7% fee)</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Post–Temporada 1, ventas in-game: <span className="text-orange-200">2,5%</span> pool
                    NFT,{' '}
                    <span className="text-orange-200">2,5%</span> quema y{' '}
                    <span className="text-orange-200">2%</span> tesorería de desarrollo.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Expansión comercial global</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Post–Temporada 1, nuevas fuentes (publicidad, alianzas con Binance, Ronin, Pixels,
                    etc.) derivan de forma irrevocable un <span className="text-orange-200">2,5%</span>{' '}
                    hacia tenedores de NFT.
                  </p>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div className="space-y-5">
              <div className={wpSectionTitle}>
                <span className="font-mono text-sm font-bold text-orange-400">6</span>
                <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  Rendimiento extendido de tokens
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                Además del flujo de la pool, los tenedores tienen multiplicador de recompensa en
                tokens al cerrar partidas (tope <span className="text-orange-200">10 partidas
                diarias</span>).
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-orange-500/25 bg-orange-500/10 p-4 md:col-span-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-orange-200/90">
                    Tesorería asignada
                  </p>
                  <p className="mt-2 font-mono text-2xl font-bold text-white">225.000</p>
                  <p className="mt-2 text-[13px] text-slate-200">
                    Tokens reservados solo para esta función; proyección de autonomía ~2 años de
                    operaciones. Agotada la reserva, cesa la emisión directa de este tramo.
                  </p>
                </div>
                <div className={`${wpCard} md:col-span-2`}>
                  <p className="text-sm font-extrabold text-white">Multiplicador por tier (fin de partida)</p>
                  <p className="mt-2 font-mono text-[13px] leading-relaxed text-slate-200">
                    T1 +1% · T2 +2% · T3 +3% · T4 +10% · T5 +15% · T6 +20% · T7 +30%
                  </p>
                </div>
              </div>
              <div className={wpCard}>
                <p className="text-sm font-extrabold text-white">Expansión monetaria futura (no garantizada)</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                  Si el sistema requiere expansión monetaria real —no por especulación— podría
                  evaluarse migración o integración de un nuevo token de utilidad preservando derechos
                  y jerarquías de la etapa inicial. Lo <span className="text-orange-200">sí garantizado</span>{' '}
                  es la participación de estos NFT en el <span className="text-orange-200">2,5%</span>{' '}
                  de flujos descritos.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-500/50 bg-zinc-950/70 p-4">
                <p className="text-sm font-extrabold text-white">NFT secundario tipo ticket de partida</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                  Existirá un NFT funcional de partida: no accede a los beneficios anteriores; sirve
                  para crearse y quemarse al generar partidas, permitiendo fijar por contrato el costo
                  de emisión y mantener ingresos mixtos (ej. <span className="text-orange-200">50% RON
                  / 50% TOD</span>) o ajustes futuros en costos de partida y nuevos sistemas de
                  apuesta.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Roadmap;
