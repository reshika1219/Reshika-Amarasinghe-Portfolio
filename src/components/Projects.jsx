import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section'
import { projects } from '../data/content'

export default function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <Section id="projects" n="02" title="Projects">
      <div className="divide-y divide-rule border-y border-rule">
        {projects.map((p) => {
          const on = open === p.id
          return (
            <div key={p.id}>
              <button onClick={() => setOpen(on ? null : p.id)} aria-expanded={on} className="group grid w-full gap-2 py-7 text-left md:grid-cols-[1fr_220px_24px] md:items-center md:gap-6">
                <span>
                  <span className="block font-display text-2xl leading-snug transition-colors group-hover:text-accent sm:text-3xl">{p.title}</span>
                  <span className="mt-1 block text-sm text-mute">{p.year} · {p.status}</span>
                </span>
                <span className="font-mono text-xs text-accent">{p.metric}</span>
                <span className={`hidden text-xl text-mute transition-transform md:block ${on ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {on && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .3 }} className="overflow-hidden">
                    <div className="pb-8">
                      <p className="max-w-2xl text-lg leading-relaxed text-ink/80">{p.summary}</p>
                      <ul className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-2">
                        {[p.q, p.w, p.e, p.r].map(([h, d]) => <li key={h}><p className="font-medium">{h}</p><p className="mt-1 text-sm leading-relaxed text-ink/65">{d}</p></li>)}
                      </ul>
                      <p className="mt-6 flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded-full border border-rule px-3 py-1 font-mono text-[11px] text-ink/70">{t}</span>)}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
