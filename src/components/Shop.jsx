import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { skills, skillTiers } from '../data/content'
import { sfx } from '../lib'

const tierStyle = [
  { c: '#f0e6d2', ring: '#c8aa6e', glow: '0 0 14px rgba(200,170,110,.6)' },
  { c: '#0ac8b9', ring: '#0397ab', glow: '0 0 10px rgba(10,200,185,.35)' },
  { c: '#9aa4af', ring: '#5b5a56', glow: 'none' },
]

export default function Shop() {
  const [cat, setCat] = useState(skills[0].cat)
  const group = skills.find((s) => s.cat === cat)
  return (
    <Section id="shop" kicker="// ITEM SHOP" title="Skills">
      <div className="panel p-5 sm:p-8">
        <div className="flex flex-wrap gap-2 border-b border-gold-lo/50 pb-4">
          {skills.map((s) => (
            <button key={s.cat} onClick={() => { sfx.click(); setCat(s.cat) }} onMouseEnter={sfx.hover}
              className={`px-4 py-2 font-display text-xs font-bold uppercase tracking-widest transition-colors ${cat === s.cat ? 'border-b-2 border-hex text-hex' : 'text-gold/70 hover:text-gold-hi'}`}>{s.cat}</button>
          ))}
        </div>
        <motion.div key={cat} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {group.items.map(([name, tier], i) => {
            const t = tierStyle[tier]
            return (
              <motion.div key={name} initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * .03 }}
                onMouseEnter={sfx.hover} data-hot className="group text-center">
                <div className="mx-auto grid aspect-square w-full max-w-[84px] place-items-center border-2 bg-gradient-to-b from-panel to-void transition-transform group-hover:-translate-y-1"
                  style={{ borderColor: t.ring, boxShadow: t.glow }}>
                  <span className="font-display text-2xl font-black" style={{ color: t.c }}>{name.replace(/[^A-Za-z+#]/g, '').slice(0, 2)}</span>
                </div>
                <p className="mt-2 text-xs font-semibold text-gold-hi">{name}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: t.c }}>{skillTiers[tier]}</p>
              </motion.div>
            )
          })}
        </motion.div>
        <div className="mt-8 flex flex-wrap gap-5 border-t border-gold-lo/50 pt-4 font-mono text-[11px] uppercase tracking-widest text-gold/70">
          {skillTiers.map((t, i) => <span key={t} className="flex items-center gap-2"><i className="inline-block h-3 w-3 border-2" style={{ borderColor: tierStyle[i].ring }} />{t}</span>)}
        </div>
      </div>
    </Section>
  )
}
