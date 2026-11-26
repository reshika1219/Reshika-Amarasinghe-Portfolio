import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section'
import { projects } from '../data/content'
import { sfx } from '../lib'

const keys = [['Q', 'q'], ['W', 'w'], ['E', 'e'], ['R', 'r']]

export default function Champions() {
  const [sel, setSel] = useState(projects[0])
  const [ab, setAb] = useState('q')
  const pick = (p) => { sfx.select(); setSel(p); setAb('q') }
  const [name, desc] = sel[ab]

  return (
    <Section id="champions" kicker="// CHAMPION SELECT" title="Projects">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* Detail */}
        <AnimatePresence mode="wait">
          <motion.div key={sel.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}
            className="panel order-2 overflow-hidden lg:order-1" style={{ '--c': sel.color }}>
            <div className="relative p-6 sm:p-8" style={{ background: `radial-gradient(circle at 85% 0%, ${sel.color}33, transparent 60%)` }}>
              <span className="pointer-events-none absolute -right-2 -top-6 select-none text-[9rem] leading-none opacity-15" style={{ color: sel.color }} aria-hidden>{sel.glyph}</span>
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
                <span style={{ color: sel.color }}>{sel.class}</span><span className="text-gold/40">·</span>
                <span className="text-gold/80">{sel.role}</span><span className="text-gold/40">·</span>
                <span className="text-gold/80">{sel.status}</span>
              </div>
              <h3 className="section-title mt-3 text-3xl text-gold-hi sm:text-4xl">{sel.name}</h3>
              <p className="mt-1 font-display text-lg tracking-wide" style={{ color: sel.color }}>{sel.title}</p>
              <p className="mt-1 text-xs text-gold/60">{sel.year}</p>
              <p className="mt-5 text-[#cdbe91]"><span className="mr-2 font-mono text-xs text-gold">PASSIVE</span>{sel.passive}</p>

              <div className="mt-6 flex gap-3" role="tablist">
                {keys.map(([label, k]) => (
                  <button key={k} role="tab" aria-selected={ab === k} onClick={() => { sfx.click(); setAb(k) }} onMouseEnter={sfx.hover}
                    className="grid h-14 w-14 place-items-center border-2 font-display text-xl font-black transition-all"
                    style={ab === k ? { borderColor: sel.color, color: '#fff', boxShadow: `0 0 18px ${sel.color}88`, background: `${sel.color}30` } : { borderColor: '#785a28', color: '#c8aa6e' }}>
                    {label}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={sel.id + ab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .18 }} className="mt-5 min-h-[88px]">
                  <h4 className="font-display text-lg font-bold text-gold-hi">{ab === 'r' && <span className="mr-2 text-arcane">ULTIMATE</span>}{name}</h4>
                  <p className="mt-1 leading-relaxed text-[#b9ad8c]">{desc}</p>
                </motion.div>
              </AnimatePresence>
              <div className="mt-6 flex flex-wrap gap-2">
                {sel.stack.map((t) => <span key={t} className="border px-2.5 py-1 font-mono text-[11px]" style={{ borderColor: `${sel.color}66`, color: sel.color, background: `${sel.color}12` }}>{t}</span>)}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Grid */}
        <div className="order-1 grid grid-cols-3 content-start gap-3 sm:grid-cols-4 lg:order-2 lg:grid-cols-3">
          {projects.map((p) => {
            const on = sel.id === p.id
            return (
              <button key={p.id} onClick={() => pick(p)} onMouseEnter={sfx.hover} aria-pressed={on} title={p.title}
                className="group relative aspect-[3/4] overflow-hidden border-2 text-left transition-all hover:-translate-y-1"
                style={{ borderColor: on ? p.color : '#785a28', boxShadow: on ? `0 0 24px ${p.color}77` : 'none', background: `linear-gradient(170deg, ${p.color}33, #010a13 70%)` }}>
                <span className="absolute inset-0 grid place-items-center text-6xl opacity-70 transition-transform group-hover:scale-110" style={{ color: p.color }}>{p.glyph}</span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-2 pt-6">
                  <span className="block font-display text-[11px] font-bold uppercase leading-tight tracking-wider text-gold-hi">{p.name}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
