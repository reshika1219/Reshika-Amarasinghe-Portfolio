import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, stats } from '../data/content'

const lines = [
  ['whoami', 'reshika-amarasinghe  # data science undergrad, ML engineer'],
  ['cat focus.txt', 'geospatial analytics · predictive modelling · agentic AI'],
  ['cat research.txt', 'GNNs + knowledge graphs + LLMs for adaptive learning'],
]

export default function Hero() {
  const [n, setN] = useState(0)
  useEffect(() => { if (n < lines.length) { const t = setTimeout(() => setN(n + 1), 650); return () => clearTimeout(t) } }, [n])
  return (
    <section id="top" className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pb-16 pt-28">
      <div className="rounded-lg border border-line bg-surface shadow-[0_0_60px_rgba(61,220,151,.06)]">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3"><i className="h-3 w-3 rounded-full bg-[#ff5f57]" /><i className="h-3 w-3 rounded-full bg-[#febc2e]" /><i className="h-3 w-3 rounded-full bg-[#28c840]" /><span className="ml-3 font-mono text-xs text-dim">~/reshika — zsh</span></div>
        <div className="p-6 font-mono text-sm leading-7 sm:p-8">
          {lines.slice(0, n + 1).map(([c, o], i) => (
            <div key={c}>
              <p><span className="text-accent">❯</span> <span className={i === n && n < lines.length ? 'caret' : ''}>{c}</span></p>
              {i < n && <p className="text-dim">{o}</p>}
            </div>
          ))}
          {n >= lines.length && <p><span className="text-accent">❯</span> <span className="caret" /></p>}
        </div>
      </div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: .7 }} className="mt-12 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
        Reshika <span className="text-accent">Amarasinghe</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-5 max-w-2xl text-xl leading-relaxed text-dim">{profile.tagline}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
        <a href="#projects" className="rounded border border-accent bg-accent/10 px-5 py-2.5 text-accent transition-colors hover:bg-accent hover:text-bg">./view-projects</a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="rounded border border-line px-5 py-2.5 text-dim transition-colors hover:border-fg hover:text-fg">github ↗</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded border border-line px-5 py-2.5 text-dim transition-colors hover:border-fg hover:text-fg">linkedin ↗</a>
      </motion.div>
      <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 font-mono sm:grid-cols-4">
        {stats.map((s) => <div key={s.label}><dt className="text-2xl text-fg">{s.prefix}{s.decimals ? s.value.toFixed(s.decimals) : s.value.toLocaleString()}</dt><dd className="mt-1 text-[11px] text-dim">{s.label}</dd></div>)}
      </dl>
    </section>
  )
}
