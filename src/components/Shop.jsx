import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { skills, skillTiers } from '../data/content'
import { sfx } from '../lib'

const tierStyle = [
  { c: '#f0e6d2', ring: '#c8aa6e', glow: '0 0 18px rgba(200,170,110,.35)' },
  { c: '#0ac8b9', ring: '#0397ab', glow: 'none' },
  { c: '#a09b8c', ring: '#463714', glow: 'none' },
]

export default function Shop() {
  const [cat, setCat] = useState(skills[0].cat)
  const group = skills.find((s) => s.cat === cat)
  return (
    <Section id="shop" kicker="ITEM SHOP" title="Skills">
      <div className="panel p-5 sm:p-8">
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-gold-lo/50 pb-3">
          {skills.map((s) => (
            <button key={s.cat} onClick={() => { sfx.click(); setCat(s.cat) }} onMouseEnter={sfx.hover}
              className={`border-b-2 pb-2 font-display text-xs font-bold uppercase tracking-[.2em] transition-colors ${cat === s.cat ? 'border-gold text-gold-hi' : 'border-transparent text-gold/60 hover:text-gold-hi'}`}>{s.cat}</button>
          ))}
        </div>
        <motion.div key={cat} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {group.items.map(([name, tier], i) => {
            const t = tierStyle[tier]
            return (
              <motion.div key={name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .03 }} onMouseEnter={sfx.hover} data-hot
                className="flex items-center gap-3 rounded-sm border bg-void/60 p-3 transition-colors hover:bg-hex/10" style={{ borderColor: t.ring, boxShadow: t.glow }}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 bg-panel" style={{ borderColor: t.ring }}>
                  <span className="h-2 w-2 rotate-45" style={{ background: t.c }} />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-gold-hi">{name}</span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[.2em]" style={{ color: t.c }}>{skillTiers[tier]}</span>
                </span>
              </motion.div>
            )
          })}
        </motion.div>
        <div className="mt-8 flex flex-wrap gap-5 border-t border-gold-lo/50 pt-4 text-[11px] font-semibold uppercase tracking-widest text-gold/70">
          {skillTiers.map((t, i) => <span key={t} className="flex items-center gap-2"><i className="inline-block h-2.5 w-2.5 rotate-45 border" style={{ borderColor: tierStyle[i].ring, background: tierStyle[i].c }} />{t}</span>)}
        </div>
      </div>
    </Section>
  )
}
