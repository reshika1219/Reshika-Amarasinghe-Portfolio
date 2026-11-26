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
      <div className="relative overflow-hidden border border-gold-lo/60 bg-void">
        <AnimatePresence mode="wait">
          <motion.img key={sel.art} src={splash(sel.art)} alt="" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .6 }}
            className="absolute inset-0 h-full w-full object-cover object-[70%_30%]" />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />

        <div className="relative flex min-h-[600px] flex-col justify-between p-6 sm:p-10">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[.35em] text-hex">{sel.status} · {sel.year}</p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-gold-hi sm:text-5xl">{sel.title}</h3>
            <p className="mt-4 leading-relaxed text-gold-hi/80">{sel.passive}</p>

            <div className="mt-8 flex gap-3" role="tablist">
              {keys.map((k) => (
                <button key={k} role="tab" aria-selected={ab === k} onClick={() => { sfx.click(); setAb(k) }} onMouseEnter={sfx.hover}
                  className={`grid h-12 w-12 place-items-center rounded-full border font-display text-base font-bold uppercase transition-all ${ab === k ? 'border-gold-hi bg-gold/20 text-gold-hi shadow-[0_0_20px_rgba(200,170,110,.45)]' : 'border-gold-lo bg-void/60 text-gold hover:border-gold'}`}>{k}</button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={sel.id + ab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .18 }} className="mt-5 min-h-[92px]">
                <h4 className="font-display text-lg font-bold text-gold">{name}</h4>
                <p className="mt-1 leading-relaxed text-gold-hi/75">{desc}</p>
              </motion.div>
            </AnimatePresence>
            <p className="mt-5 text-sm text-gold-hi/60">{sel.stack.join('  ·  ')}</p>
          </div>

          <div className="mt-10 flex flex-wrap items-end gap-3">
            {projects.map((p) => {
              const on = sel.id === p.id
              return (
                <button key={p.id} onClick={() => pick(p)} onMouseEnter={sfx.hover} aria-pressed={on} title={p.title} className="group w-16 text-center sm:w-20">
                  <span className={`block aspect-square overflow-hidden rounded-full border-2 transition-all ${on ? 'border-gold-hi shadow-[0_0_22px_rgba(240,230,210,.5)]' : 'border-gold-lo opacity-60 group-hover:opacity-100'}`}>
                    <img src={tile(p.art)} alt="" loading="lazy" className="h-full w-full scale-150 object-cover object-top" />
                  </span>
                  <span className={`mt-2 block text-[9px] font-semibold uppercase leading-tight tracking-wider ${on ? 'text-gold-hi' : 'text-gold/60'}`}>{p.short}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
      <p className="mt-3 text-right text-[10px] tracking-widest text-gold-hi/40">Art: {sel.champ} · Riot Games</p>
    </Section>
  )
}
