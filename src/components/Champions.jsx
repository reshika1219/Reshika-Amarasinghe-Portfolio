import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section'
import { projects } from '../data/content'
import { sfx } from '../lib'

const keys = ['q', 'w', 'e', 'r']
const initial = (p) => p.name.replace('The ', '')[0]

export default function Champions() {
  const [sel, setSel] = useState(projects[0])
  const [ab, setAb] = useState('q')
  const pick = (p) => { sfx.select(); setSel(p); setAb('q') }
  const [name, desc] = sel[ab]

  return (
    <Section id="champions" kicker="CHAMPION SELECT" title="Projects">
      <div className="panel overflow-hidden">
        {/* Splash */}
        <AnimatePresence mode="wait">
          <motion.div key={sel.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3 }}
            className="relative min-h-[420px] overflow-hidden p-6 sm:p-10"
            style={{ background: `radial-gradient(70% 90% at 82% 30%, ${sel.color}55, transparent 65%), radial-gradient(50% 60% at 10% 100%, ${sel.color}22, transparent 70%), linear-gradient(180deg, #0a1a2e, #010a13)` }}>
            <span aria-hidden className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[22rem] font-bold leading-none opacity-[.09]" style={{ color: sel.color }}>{initial(sel)}</span>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent" />

            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[.3em]" style={{ color: sel.color }}>{sel.class} · {sel.role} · {sel.status}</p>
              <h3 className="section-title mt-3 text-5xl text-gold-hi sm:text-6xl">{sel.name}</h3>
              <p className="mt-2 font-display text-lg tracking-wide text-gold">{sel.title}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-gold/50">{sel.year}</p>
              <p className="mt-5 max-w-2xl leading-relaxed text-[#cdbe91]">{sel.passive}</p>

              <div className="mt-7 flex items-center gap-3" role="tablist">
                {keys.map((k) => (
                  <button key={k} role="tab" aria-selected={ab === k} onClick={() => { sfx.click(); setAb(k) }} onMouseEnter={sfx.hover}
                    className="relative grid h-14 w-14 place-items-center rounded-full border-2 bg-void/80 font-display text-lg font-bold uppercase transition-all"
                    style={ab === k ? { borderColor: '#f0e6d2', color: '#fff', boxShadow: `0 0 22px ${sel.color}aa, inset 0 0 14px ${sel.color}66` } : { borderColor: '#785a28', color: '#c8aa6e' }}>
                    {k}
                    {k === 'r' && <span className="absolute -bottom-1 h-2 w-2 rotate-45 bg-arcane" />}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={sel.id + ab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .18 }} className="mt-5 min-h-[84px] max-w-2xl">
                  <h4 className="font-display text-xl font-bold text-gold-hi">{name}{ab === 'r' && <span className="ml-3 text-[11px] font-semibold tracking-[.25em] text-arcane">ULTIMATE</span>}</h4>
                  <p className="mt-1 leading-relaxed text-[#b9ad8c]">{desc}</p>
                </motion.div>
              </AnimatePresence>
              <div className="mt-5 flex flex-wrap gap-2">
                {sel.stack.map((t) => <span key={t} className="rounded-sm border border-gold-lo/70 bg-void/60 px-2.5 py-1 text-[11px] font-medium text-gold-hi/90">{t}</span>)}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Roster */}
        <div className="border-t border-gold-lo/60 bg-void/70 p-4 sm:p-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {projects.map((p) => {
              const on = sel.id === p.id
              return (
                <button key={p.id} onClick={() => pick(p)} onMouseEnter={sfx.hover} aria-pressed={on} title={p.title} className="group flex w-20 flex-col items-center gap-2">
                  <span className="relative grid h-16 w-16 place-items-center rounded-full border-2 font-display text-2xl font-bold transition-all group-hover:scale-105"
                    style={{ borderColor: on ? '#f0e6d2' : '#785a28', color: p.color, background: `radial-gradient(circle at 30% 25%, ${p.color}55, #010a13 75%)`, boxShadow: on ? `0 0 24px ${p.color}99` : 'none', filter: on ? 'none' : 'grayscale(.45) brightness(.8)' }}>
                    {initial(p)}
                  </span>
                  <span className={`text-center text-[10px] font-semibold uppercase leading-tight tracking-wider ${on ? 'text-gold-hi' : 'text-gold/60'}`}>{p.name.replace('The ', '')}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
