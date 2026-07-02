/**
 * BentoGrid.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * A premium "Spatial Bento Grid" portfolio showcase component built with:
 *
 *  ┌─────────────────── DESIGN SYSTEM ───────────────────────────────────────┐
 *  │                                                                          │
 *  │  1. CLAYMORPHISM                                                         │
 *  │     Multiple layered box-shadows create a soft 3-D "clay" depth.        │
 *  │     Each card has four shadow rings:                                     │
 *  │       – outer ambient (large, very blurred, low opacity)                 │
 *  │       – top inner highlight (white, short, top-left)                    │
 *  │       – bottom inner shadow (dark, short, bottom-right)                 │
 *  │       – colored glow tint (unique per card on hover)                    │
 *  │                                                                          │
 *  │  2. GLASSMORPHISM                                                        │
 *  │     Cards are rendered as a semi-transparent frosted glass pane using:  │
 *  │       – backdrop-filter: blur(24px)  → frosted-glass blur               │
 *  │       – background: rgba(255,255,255,0.06) → tinted transparency        │
 *  │       – border: 1px rgba(255,255,255,0.15) → subtle edge highlight      │
 *  │                                                                          │
 *  │  3. SPATIAL / PARALLAX UI                                                │
 *  │     Framer Motion tracks mouse position relative to the card center     │
 *  │     and applies a perspective rotateX / rotateY transform, giving the   │
 *  │     impression the card is a physical object tilting toward you.         │
 *  │     On hover: scale(1.04), translateZ(30px), tilt ±12°.                 │
 *  │                                                                          │
 *  └──────────────────────────────────────────────────────────────────────────┘
 */

import React, { useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'motion/react';
import {
  Code2,
  Globe,
  Cpu,
  Layers,
  Radio,
  Zap,
  GitBranch,
  Palette,
  ArrowUpRight,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface BentoCard {
  id: string;
  /** Column span in the 3-col grid (1 | 2 | 3) */
  colSpan: 1 | 2;
  /** Row span in the grid (1 | 2) */
  rowSpan: 1 | 2;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  /** HSL color used for the tinted glow shadow */
  glowColor: string;
  /** Gradient for the card's decorative background accent */
  gradient: string;
  tag: string;
  link?: string;
}

// ─── Card Data ─────────────────────────────────────────────────────────────────

const bentoCards: BentoCard[] = [
  {
    id: 'frontend',
    colSpan: 2,
    rowSpan: 1,
    title: 'Frontend Engineering',
    subtitle: 'React · TypeScript · Next.js',
    description:
      'Crafting performant, accessible, and visually stunning interfaces. Every pixel is intentional — every interaction is deliberate.',
    icon: <Code2 size={28} />,
    glowColor: '59, 130, 246',   // blue
    gradient: 'from-blue-500/20 to-purple-500/10',
    tag: 'Core Skill',
  },
  {
    id: 'ai-tools',
    colSpan: 1,
    rowSpan: 1,
    title: 'AI-Powered Tools',
    subtitle: 'Gemini API · LangChain',
    description:
      'Building next-gen products that blend ML with intuitive UX.',
    icon: <Cpu size={28} />,
    glowColor: '139, 92, 246',   // purple
    gradient: 'from-purple-500/20 to-pink-500/10',
    tag: 'Speciality',
  },
  {
    id: 'extensions',
    colSpan: 1,
    rowSpan: 2,
    title: 'Browser Extensions',
    subtitle: 'Chrome MV3 · Web APIs',
    description:
      'Architected DOM.fm — a split sandbox extension streaming AI-generated music synced to any website\'s visual DNA. Overcome MV3 CSP and AudioContext autoplay blocks with a creative split-frame architecture.',
    icon: <Radio size={28} />,
    glowColor: '244, 63, 94',    // rose
    gradient: 'from-rose-500/20 to-orange-500/10',
    tag: 'NodeRadio',
    link: 'https://github.com/Philioraptor/NodeRadio',
  },
  {
    id: 'design',
    colSpan: 1,
    rowSpan: 1,
    title: 'UI / UX Design',
    subtitle: 'Glassmorphism · Motion',
    description:
      'From wireframes to polished Figma flows — design that delights and converts.',
    icon: <Palette size={28} />,
    glowColor: '251, 146, 60',   // orange
    gradient: 'from-orange-500/20 to-yellow-500/10',
    tag: 'Design',
  },
  {
    id: 'fullstack',
    colSpan: 1,
    rowSpan: 1,
    title: 'Full-Stack Platforms',
    subtitle: 'Node.js · AWS S3 · REST',
    description:
      'End-to-end delivery from API design to cloud deployments on scalable infrastructure.',
    icon: <Layers size={28} />,
    glowColor: '34, 197, 94',    // green
    gradient: 'from-emerald-500/20 to-teal-500/10',
    tag: 'Backend',
  },
  {
    id: 'open-source',
    colSpan: 2,
    rowSpan: 1,
    title: 'Open Source & Mini Tools',
    subtitle: '10+ public repos · Vercel · GitHub',
    description:
      'Color palette generators, prompt writers, text diff tools, landing page builders — shipping fast, shipping often.',
    icon: <GitBranch size={28} />,
    glowColor: '20, 184, 166',   // teal
    gradient: 'from-teal-500/20 to-cyan-500/10',
    tag: 'Community',
    link: 'https://github.com/Philioraptor',
  },
  {
    id: 'performance',
    colSpan: 1,
    rowSpan: 1,
    title: 'Performance Focus',
    subtitle: 'Vite · Code-Splitting · PWA',
    description:
      'Obsessed with Core Web Vitals. Every bundle is lean, every interaction is fast.',
    icon: <Zap size={28} />,
    glowColor: '234, 179, 8',    // yellow
    gradient: 'from-yellow-500/20 to-amber-500/10',
    tag: 'Optimization',
  },
  {
    id: 'web3',
    colSpan: 1,
    rowSpan: 1,
    title: 'Global Deployment',
    subtitle: 'Vercel · Render · Netlify',
    description:
      'From localhost to live — seamless CI/CD pipelines for every project.',
    icon: <Globe size={28} />,
    glowColor: '99, 102, 241',   // indigo
    gradient: 'from-indigo-500/20 to-violet-500/10',
    tag: 'DevOps',
  },
];

// ─── Claymorphism shadow helper ───────────────────────────────────────────────
/**
 * Returns a multi-layer box-shadow string that creates the claymorphism look.
 *
 * Layers (from outermost → innermost):
 *  1. Large ambient shadow  — wide, very blurred, low opacity black
 *     → Lifts the card off the page
 *  2. Medium shadow         — tighter, less blurred, medium opacity
 *     → Adds depth definition
 *  3. Top-left highlight   — short, white, inset-like look
 *     → Simulates ambient light hitting the top edge
 *  4. Hover glow tint      — colored, very blurred, pulsing (toggled via isHovered)
 *     → Brand-colored aura on mouse-over
 */
function clayShadow(glowColor: string, isHovered: boolean): string {
  const glow = isHovered
    ? `, 0 0 60px 4px rgba(${glowColor}, 0.35)`
    : '';

  return [
    // 1. Ambient depth shadow — gives the "lifted off canvas" feel
    '0 25px 60px -12px rgba(0, 0, 0, 0.55)',
    // 2. Medium definition shadow — sharpens the clay volume
    '0 10px 30px -8px rgba(0, 0, 0, 0.40)',
    // 3. Top-left highlight (simulated inner-top light catch)
    'inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
    // 4. Bottom-right inner darkening (adds depth to clay bottom edge)
    'inset 0 -1px 0 0 rgba(0, 0, 0, 0.25)',
  ].join(', ') + glow;
}

// ─── Individual Bento Card ────────────────────────────────────────────────────

interface BentoCardProps {
  card: BentoCard;
  index: number;
}

function BentoCardItem({ card, index }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  /**
   * SPATIAL TILT EFFECT
   * We track the raw mouse position via Framer Motion's useMotionValue,
   * then pipe it through useSpring for smooth interpolation and useTransform
   * to map the [0, cardWidth] range to a [-12deg, +12deg] rotation angle.
   */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring config: stiffness = snappiness, damping = how quickly it settles
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Map mouse offsets to rotation angles (max ±12 degrees)
  const rotateX = useTransform(springY, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-12deg', '12deg']);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    // Normalise pointer position to [-0.5, 0.5] range relative to card center
    const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
    const yNorm = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(xNorm);
    mouseY.set(yNorm);
  }

  function handleMouseLeave() {
    // Reset the tilt to flat (0, 0) on leave
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  const colSpanClass = card.colSpan === 2 ? 'col-span-2' : 'col-span-1';
  const rowSpanClass = card.rowSpan === 2 ? 'row-span-2' : 'row-span-1';

  return (
    <motion.div
      ref={cardRef}
      className={`${colSpanClass} ${rowSpanClass} relative group cursor-pointer`}
      /**
       * perspective is required on the PARENT for 3-D child transforms to work.
       * 800px is a comfortable value — lower = more dramatic, higher = subtler tilt.
       */
      style={{ perspective: '800px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      /** Stagger each card's fade-in for a cinematic reveal */
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* ── CARD SURFACE ─────────────────────────────────────────────────────
          This is the actual glass + clay card.
          Motion values are applied here so the tilt doesn't affect the wrapper's
          perspective context.
      ─────────────────────────────────────────────────────────────────────── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          /**
           * GLASSMORPHISM settings:
           *   background: very low white opacity → see-through glass tint
           *   backdropFilter: blur → frosted glass effect
           *   border: subtle white edge → glass rim highlight
           */
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)', // Safari support
          border: '1px solid rgba(255, 255, 255, 0.12)',
          /**
           * CLAYMORPHISM shadow — the multi-layer trick that creates depth.
           * Computed dynamically so the colored glow activates on hover.
           */
          boxShadow: clayShadow(card.glowColor, isHovered),
          /**
           * transformStyle: preserve-3d lets child elements also participate
           * in the 3-D transform so the icon/text appear to float above the card.
           */
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered ? 1.04 : 1,
          // Slight Z-axis push creates the "lifting off the screen" illusion
          z: isHovered ? 30 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative h-full w-full rounded-3xl overflow-hidden p-6 flex flex-col justify-between min-h-[200px]"
      >
        {/* ── Decorative Gradient Orb ────────────────────────────────────────
            A soft radial gradient in the top-right corner provides a
            unique color identity per card while staying subtle.
        ─────────────────────────────────────────────────────────────────── */}
        <div
          className={`absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br ${card.gradient} blur-3xl opacity-60 pointer-events-none`}
        />

        {/* ── Animated shimmer on hover (light sweep) ────────────────────── */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="shimmer"
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0, x: '-100%', skewX: -15 }}
              animate={{ opacity: 1, x: '200%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
              }}
            />
          )}
        </AnimatePresence>

        {/* ── Card Content ────────────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col gap-3 h-full">

          {/* Icon + Tag Row */}
          <div className="flex items-start justify-between">
            {/* Icon bubble — uses translateZ to float above card surface */}
            <motion.div
              transition={{ duration: 0.3 }}
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                // Float icon above card surface on hover (3-D z-axis lift)
                translateZ: isHovered ? 20 : 0,
                background: `rgba(${card.glowColor}, 0.15)`,
                border: `1px solid rgba(${card.glowColor}, 0.3)`,
                color: `rgb(${card.glowColor})`,
              }}
            >
              {card.icon}
            </motion.div>

            {/* Pill tag */}
            <span
              className="text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest"
              style={{
                background: `rgba(${card.glowColor}, 0.12)`,
                color: `rgb(${card.glowColor})`,
                border: `1px solid rgba(${card.glowColor}, 0.2)`,
              }}
            >
              {card.tag}
            </span>
          </div>

          {/* Title block */}
          <div className="mt-auto">
            <h3 className="text-white font-bold text-lg leading-tight mb-1">
              {card.title}
            </h3>
            <p className="text-white/40 text-xs font-medium tracking-wide mb-3">
              {card.subtitle}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* External link arrow (only if link is provided) */}
          {card.link && (
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-1 text-xs font-semibold w-fit transition-all duration-200"
              style={{ color: `rgb(${card.glowColor})` }}
              onClick={(e) => e.stopPropagation()}
            >
              View Project
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>

        {/* ── Bottom edge reflection line ────────────────────────────────────
            Simulates a glossy bottom rim catch light — a classic claymorphism
            finishing touch.
        ────────────────────────────────────────────────────────────────── */}
        <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function BentoGrid() {
  return (
    <section
      id="bento"
      className="relative py-28 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* Section background ambient glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[140px]" />
      </div>

      {/* ── Section Header ─────────────────────────────────────────────────── */}
      <motion.div
        className="text-center mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.span
          className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary/80 mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Skills & Focus Areas
        </motion.span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          What I{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400">
            Build & Love
          </span>
        </h2>
        <p className="text-white/50 text-base md:text-lg leading-relaxed">
          A curated grid of my engineering strengths, active interests, and the
          tools I reach for every day.
        </p>
      </motion.div>

      {/* ── Bento Grid Container ───────────────────────────────────────────────
          Using CSS Grid with 3 columns.
          Cards declare their own col-span and row-span via classNames.
          gap-5 provides the breathing room between clay cards.
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-5">
        {bentoCards.map((card, index) => (
          <BentoCardItem key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
