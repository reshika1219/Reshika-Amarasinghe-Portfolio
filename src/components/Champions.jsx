import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section'
import { projects, splash, tile } from '../data/content'
import { sfx } from '../lib'

const keys = ['q', 'w', 'e', 'r']

export default function Champions() {
  const [sel, setSel] = useState(projects[0])
  const [ab, setAb] = useState('q')
  const pick = (p) => { sfx.select(); setSel(p); setAb('q') }
  const [name, desc] = sel[ab]

  return (
    <Section id="champions" kicker="Champion select" title="Projects">
      <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
        <div className="frame relative min-h-[620px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img key={sel.art} src={splash(sel.art)} alt="" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .6 }}
              className="absolute inset-0 h-full w-full object-cover object-[70%_30%]" />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/0" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
          <div className="relative flex h-full min-h-[620px] flex-col justify-end p-6 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[.35em] text-hex">{sel.status} · {sel.year}</p>
            <h3 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight text-gold-hi sm:text-4xl">{sel.title}</h3>
            <p className="mt-3 max-w-xl leading-relaxed text-gold-hi/80">{sel.passive}</p>
            <div className="mt-6 flex gap-3" role="tablist">
              {keys.map((k) => (
                <button key={k} role="tab" aria-selected={ab === k} onClick={() => { sfx.click(); setAb(k) }} onMouseEnter={sfx.hover}
                  className={`tile-frame grid h-12 w-12 place-items-center bg-void/80 font-display text-base font-bold uppercase text-gold ${ab === k ? 'on !text-gold-hi' : ''}`}>{k}</button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={sel.id + ab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .18 }} className="mt-4 min-h-[92px] max-w-xl">
                <h4 className="font-display text-lg font-bold text-gold">{name}</h4>
                <p className="mt-1 leading-relaxed text-gold-hi/75">{desc}</p>
              </motion.div>
            </AnimatePresence>
            <p className="mt-3 text-sm text-gold-hi/55">{sel.stack.join('  ·  ')}</p>
          </div>
        </div>

        <div className="frame p-4">
          <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[.3em] text-gold">Choose a project</p>
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-3">
            {projects.map((p) => (
              <button key={p.id} onClick={() => pick(p)} onMouseEnter={sfx.hover} aria-pressed={sel.id === p.id} title={p.title} className="group text-center">
                <span className={`tile-frame block aspect-square overflow-hidden ${sel.id === p.id ? 'on' : 'opacity-70 group-hover:opacity-100'}`}>
                  <img src={tile(p.art)} alt="" loading="lazy" className="h-full w-full scale-125 object-cover object-top" />
                </span>
                <span className={`mt-1 block text-[9px] font-semibold uppercase leading-tight tracking-wider ${sel.id === p.id ? 'text-gold-hi' : 'text-gold/60'}`}>{p.short}</span>
              </button>
            ))}
          </div>
          <div className="gold-rule my-4" />
          <p className="text-center text-xs leading-relaxed text-gold-hi/55">Art: {sel.champ}<br />Riot Games</p>
        </div>
      </div>
    </Section>
  )
}
