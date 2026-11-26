import { useRef } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'

const words = ['GEOSPATIAL', 'AGENTIC AI', 'RAG', 'GNNs', 'KNOWLEDGE GRAPHS', 'PREDICTIVE MODELS', 'PYTHON', 'SQL', 'R']

// Draggable stickers (desktop). Positions are % of the hero box.
const stickers = [
  { t: 'AUC > 0.99', c: 'bg-blue text-cream', pos: 'right-[6%] top-[22%]', r: 6 },
  { t: '141,000 FDPs', c: 'bg-lime', pos: 'right-[24%] top-[14%]', r: -5 },
  { t: 'Python', c: 'bg-pink', pos: 'right-[10%] top-[40%]', r: -8 },
  { t: 'SQL', c: 'bg-tang', pos: 'right-[28%] top-[34%]', r: 9 },
  { t: 'RAG', c: 'bg-cream', pos: 'right-[3%] top-[56%]', r: -4 },
  { t: 'top 100 cells', c: 'bg-lime', pos: 'right-[24%] top-[66%]', r: 4 },
]

const letters = (s) => s.split('')

export default function Hero() {
  const box = useRef(null)
  return (
    <section id="top" ref={box} className="relative overflow-hidden px-5 pb-10 pt-32 sm:pt-40">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-3">
          <span className="brut-sm wobble rounded-full bg-lime px-4 py-1.5 text-sm font-bold">Data Science Undergrad</span>
          <span className="brut-sm rotate-2 rounded-full bg-pink px-4 py-1.5 text-sm font-bold">ML Engineer</span>
          <span className="brut-sm -rotate-2 rounded-full bg-blue px-4 py-1.5 text-sm font-bold text-cream">Open to work</span>
        </motion.div>

        <h1 aria-label="Reshika Amarasinghe" className="mt-8 font-display text-[clamp(2.4rem,11.2vw,11rem)] font-extrabold uppercase leading-[.86] tracking-tighter">
          {['Reshika', 'Amarasinghe'].map((w, row) => (
            <span key={w} className="block" aria-hidden>
              {letters(w).map((ch, i) => (
                <motion.span key={i} initial={{ y: '90%', opacity: 0, rotate: row ? 6 : -6 }} animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ delay: .1 + (row * 7 + i) * .035, type: 'spring', stiffness: 260, damping: 16 }}
                  className={`inline-block ${row && i < 5 ? 'text-blue' : ''}`}>{ch}</motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }} className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug sm:text-3xl">{profile.tagline}</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="brut brut-hover bg-ink px-7 py-3.5 font-bold text-cream">See the work →</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="brut brut-hover bg-cream px-7 py-3.5 font-bold">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="brut brut-hover bg-cream px-7 py-3.5 font-bold">LinkedIn ↗</a>
          <a href="Reshika-Amarasinghe-CV.pdf" download className="brut brut-hover bg-lime px-7 py-3.5 font-bold">Download CV ↓</a>
        </motion.div>
      </div>

      {/* draggable stickers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {stickers.map((s, i) => (
          <motion.div key={s.t} drag dragConstraints={box} dragElastic={.25} dragTransition={{ bounceStiffness: 300, bounceDamping: 18 }}
            initial={{ opacity: 0, scale: 0, rotate: s.r }} animate={{ opacity: 1, scale: 1, rotate: s.r }} transition={{ delay: 1.2 + i * .1, type: 'spring' }}
            whileHover={{ scale: 1.08 }} whileDrag={{ scale: 1.15, rotate: 0, zIndex: 30 }}
            className={`brut-sm pointer-events-auto absolute cursor-grab touch-none select-none rounded-full px-5 py-2.5 font-display text-lg font-extrabold active:cursor-grabbing ${s.c} ${s.pos}`}>{s.t}</motion.div>
        ))}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="absolute right-[9%] top-[78%] -rotate-3 font-display text-sm font-bold">↖ drag the stickers around</motion.p>
      </div>

      <div className="relative -mx-5 mt-16 -rotate-2 overflow-hidden border-y-[3px] border-ink bg-tang py-3" aria-hidden>
        <div className="ribbon flex w-max whitespace-nowrap font-display text-xl font-extrabold">
          {[...words, ...words, ...words, ...words].map((w, i) => <span key={i} className="mx-5">{w} ✺</span>)}
        </div>
      </div>
    </section>
  )
}
