import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section'
import Tilt from './Tilt'
import { projects } from '../data/content'

const colors = ['bg-lime', 'bg-pink', 'bg-blue text-cream', 'bg-tang', 'bg-cream', 'bg-lime', 'bg-pink']

export default function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <Section id="projects" title="Projects" color="bg-blue text-cream">
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        {projects.map((p, i) => {
          const on = open === p.id
          return (
            <Tilt key={p.id}>
              <motion.article layout initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
                className={`brut relative flex flex-col p-6 sm:p-7 ${colors[i]}`}>
                <span aria-hidden className="brut-sm absolute -right-2 -top-4 rotate-6 bg-cream px-3 py-1 font-display text-sm font-extrabold text-ink">#{String(i + 1).padStart(2, '0')}</span>
                <p className="text-sm font-bold uppercase tracking-wide opacity-70">{p.year} · {p.status}</p>
                <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">{p.title}</h3>
                <p className="mt-3 inline-block self-start border-2 border-current px-3 py-1 text-sm font-bold">{p.metric}</p>
                <p className="mt-4 leading-relaxed">{p.summary}</p>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .3 }} className="overflow-hidden">
                      {[p.q, p.w, p.e, p.r].map(([h, d]) => <li key={h} className="mt-3 border-l-4 border-current pl-3 text-sm leading-snug"><b>{h}.</b> {d}</li>)}
                    </motion.ul>
                  )}
                </AnimatePresence>
                <p className="mt-4 flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded-full border-2 border-current px-2.5 py-0.5 text-xs font-bold">{t}</span>)}</p>
                <button onClick={() => setOpen(on ? null : p.id)} aria-expanded={on} className="mt-5 self-start border-2 border-current px-4 py-1.5 text-sm font-bold transition-colors hover:bg-ink hover:text-cream">{on ? 'Close −' : 'Details +'}</button>
              </motion.article>
            </Tilt>
          )
        })}
      </div>
    </Section>
  )
}
