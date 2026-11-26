import { motion } from 'framer-motion'
import { profile } from '../data/content'
import DotMap from './DotMap'

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-16 pt-28 lg:grid-cols-[1.25fr_1fr]">
      <div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-xs uppercase tracking-widest text-accent">Data science · ML engineering</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .8 }} className="mt-5 font-display text-6xl leading-[.98] tracking-tight sm:text-8xl">
          Reshika<br />Amarasinghe
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }} className="mt-8 max-w-xl font-display text-2xl leading-snug text-ink/80 sm:text-3xl">{profile.tagline}</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a href="#work" className="rounded-full bg-ink px-6 py-3 text-paper transition-colors hover:bg-accent">See selected work</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="link-u">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-u">LinkedIn ↗</a>
        </motion.div>
      </div>
      <motion.figure initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3, duration: 1.2 }} className="flex flex-col items-center">
        <DotMap />
        <figcaption className="mt-3 max-w-xs text-center font-mono text-[11px] leading-relaxed text-mute">Illustration: Sri Lanka as a dot grid. Highlighted dots echo the top-100 priority cells ranked in my SLT pipeline.</figcaption>
      </motion.figure>
    </section>
  )
}
