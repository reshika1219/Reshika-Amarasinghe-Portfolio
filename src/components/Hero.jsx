import { motion } from 'framer-motion'
import { profile } from '../data/content'

const words = ['GEOSPATIAL', 'AGENTIC AI', 'RAG', 'GNNs', 'KNOWLEDGE GRAPHS', 'PREDICTIVE MODELS', 'PYTHON', 'SQL', 'R']

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-10 pt-32 sm:pt-40">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-3">
          <span className="brut-sm wobble rounded-full bg-lime px-4 py-1.5 text-sm font-bold">Data Science Undergrad</span>
          <span className="brut-sm rotate-2 rounded-full bg-pink px-4 py-1.5 text-sm font-bold">ML Engineer</span>
          <span className="brut-sm -rotate-2 rounded-full bg-blue px-4 py-1.5 text-sm font-bold text-cream">Open to work</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .8, type: 'spring', bounce: .3 }}
          className="mt-8 font-display text-[clamp(3.5rem,13.5vw,11rem)] font-extrabold uppercase leading-[.86] tracking-tighter">
          Reshika<br /><span className="text-blue">Amara</span>singhe
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }} className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug sm:text-3xl">{profile.tagline}</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="brut brut-hover bg-ink px-7 py-3.5 font-bold text-cream">See the work →</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="brut brut-hover bg-cream px-7 py-3.5 font-bold">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="brut brut-hover bg-cream px-7 py-3.5 font-bold">LinkedIn ↗</a>
        </motion.div>
      </div>
      <div className="relative -mx-5 mt-16 -rotate-2 overflow-hidden border-y-[3px] border-ink bg-tang py-3" aria-hidden>
        <div className="ribbon flex w-max whitespace-nowrap font-display text-xl font-extrabold">
          {[...words, ...words, ...words, ...words].map((w, i) => <span key={i} className="mx-5">{w} ✺</span>)}
        </div>
      </div>
    </section>
  )
}
