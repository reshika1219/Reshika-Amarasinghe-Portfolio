import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { projects } from '../data/content'

const tints = ['bg-indigo-50', 'bg-orange-50', 'bg-emerald-50', 'bg-sky-50', 'bg-rose-50', 'bg-amber-50', 'bg-violet-50']

export default function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <Section id="projects" label="Projects" title="Things I've built.">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => {
          const on = open === p.id
          return (
            <motion.article key={p.id} layout initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-[0_20px_50px_rgba(15,23,42,.08)]">
              <div className={`${tints[i % tints.length]} px-7 py-6`}><p className="text-sm font-medium text-mute">{p.year} · {p.status}</p><p className="mt-6 text-2xl font-semibold tracking-tight">{p.metric}</p></div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-mute">{p.summary}</p>
                {on && <ul className="mt-5 space-y-3">{[p.q, p.w, p.e, p.r].map(([h, d]) => <li key={h} className="text-sm"><span className="font-medium">{h}.</span> <span className="text-mute">{d}</span></li>)}</ul>}
                <p className="mt-5 flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-ink/70">{t}</span>)}</p>
                <button onClick={() => setOpen(on ? null : p.id)} aria-expanded={on} className="mt-6 self-start text-sm font-medium text-brand hover:underline">{on ? 'Show less' : 'Read more'} {on ? '↑' : '↓'}</button>
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
