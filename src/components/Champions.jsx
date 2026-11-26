import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section'
import { projects } from '../data/content'
import { sfx } from '../lib'

const keys = ['q', 'w', 'e', 'r']

export default function Champions() {
  const [open, setOpen] = useState(projects[0].id)
  return (
    <Section id="champions" kicker="Projects" title="Selected work">
      <div className="divide-y divide-gold-lo/25 border-y hair">
        {projects.map((p, i) => {
          const on = open === p.id
          return (
            <div key={p.id}>
              <button onClick={() => { sfx.select(); setOpen(on ? null : p.id) }} onMouseEnter={sfx.hover} aria-expanded={on}
                className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-6 text-left">
                <span className="text-xs text-gold/60">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className={`block font-display text-2xl transition-colors sm:text-3xl ${on ? 'text-gold' : 'text-gold-hi group-hover:text-gold'}`}>{p.title}</span>
                  <span className="mt-1 block text-xs text-gold-hi/40">{p.year}</span>
                </span>
                <span className="hidden text-xs text-gold-hi/40 sm:block">{p.status}</span>
              </button>
              <AnimatePresence initial={false}>
                {on && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .35 }} className="overflow-hidden">
                    <div className="pb-9 pl-0 sm:pl-14">
                      <p className="max-w-2xl text-gold-hi/75">{p.passive}</p>
                      <dl className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                        {keys.map((k) => (
                          <div key={k} className="flex gap-4">
                            <dt className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold-lo font-display text-xs uppercase text-gold">{k}</dt>
                            <dd><p className="font-display text-gold-hi">{p[k][0]}</p><p className="mt-1 text-sm leading-relaxed text-gold-hi/55">{p[k][1]}</p></dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-6 text-xs text-hex">{p.stack.join('  ·  ')}</p>
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
