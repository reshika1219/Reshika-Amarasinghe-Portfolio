import { motion } from 'framer-motion'
import { profile, skills } from '../data/content'

const all = skills.flatMap((g) => g.items.filter(([, t]) => t < 2).map(([n]) => n))

export default function Hero() {
  const fade = (d) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: .7, ease: 'easeOut' } })
  return (
    <section id="top" className="relative overflow-hidden pt-36 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(closest-side, #c7d2fe, transparent), radial-gradient(closest-side at 80% 30%, #ffd9cc, transparent)' }} />
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.p {...fade(0)} className="mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm text-mute shadow-sm">
          <i className="h-2 w-2 rounded-full bg-emerald-500" /> Open to internships &amp; graduate roles
        </motion.p>
        <motion.p {...fade(.1)} className="mt-8 text-lg font-medium text-mute">Hi, I'm Reshika Amarasinghe.</motion.p>
        <motion.h1 {...fade(.2)} className="mx-auto mt-3 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl">
          I turn national-scale data into <span className="serif grad-text pr-1 text-[1.08em]">decisions</span>, and LLMs into things you can trust.
        </motion.h1>
        <motion.p {...fade(.35)} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mute">Data science undergraduate and ML engineer, building geospatial pipelines, predictive models and agentic AI systems.</motion.p>
        <motion.div {...fade(.5)} className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#projects" className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">See my work</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-line bg-white px-7 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-line bg-white px-7 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5">LinkedIn ↗</a>
        </motion.div>
      </div>
      <div className="mt-20 overflow-hidden border-y border-line bg-white py-5" aria-hidden>
        <div className="marquee flex w-max gap-10 whitespace-nowrap text-sm font-medium text-mute">
          {[...all, ...all].map((n, i) => <span key={i} className="flex items-center gap-10">{n}<i className="h-1 w-1 rounded-full bg-line" /></span>)}
        </div>
      </div>
    </section>
  )
}
