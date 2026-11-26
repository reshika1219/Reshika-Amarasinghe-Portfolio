import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { projects } from '../data/content'

const colors = ['bg-lime', 'bg-pink', 'bg-blue text-cream', 'bg-tang', 'bg-cream', 'bg-lime', 'bg-pink']

export default function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <Section id="projects" title="Projects" color="bg-blue text-cream">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => {
          const on = open === p.id
          return (
            <motion.article key={p.id} layout initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} className={`brut brut-hover flex flex-col p-6 sm:p-7 ${colors[i]}`}>
              <p className="text-sm font-bold uppercase tracking-wide opacity-70">{p.year} · {p.status}</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">{p.title}</h3>
              <p className="mt-3 inline-block self-start border-2 border-current px-3 py-1 text-sm font-bold">{p.metric}</p>
              <p className="mt-4 leading-relaxed">{p.summary}</p>
              {on && <ul className="mt-4 space-y-2">{[p.q, p.w, p.e, p.r].map(([h, d]) => <li key={h} className="text-sm leading-snug"><b>{h}.</b> {d}</li>)}</ul>}
              <p className="mt-4 flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded-full border-2 border-current px-2.5 py-0.5 text-xs font-bold">{t}</span>)}</p>
              <button onClick={() => setOpen(on ? null : p.id)} aria-expanded={on} className="mt-5 self-start border-2 border-current px-4 py-1.5 text-sm font-bold transition-colors hover:bg-ink hover:text-cream">{on ? 'Close −' : 'Details +'}</button>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
