import { useState } from 'react'
import Section from './Section'
import { skills, skillTiers } from '../data/content'
import { sfx } from '../lib'

// mastery pips: core = 3, proficient = 2, comfortable = 1
const pips = [3, 2, 1]

export default function Shop() {
  const [cat, setCat] = useState(skills[0].cat)
  const group = skills.find((s) => s.cat === cat)
  return (
    <Section id="shop" kicker="Mastery" title="Skills">
      <div className="frame p-6 sm:p-10">
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 border-b border-gold-lo/40 pb-4">
          {skills.map((s) => (
            <button key={s.cat} onClick={() => { sfx.click(); setCat(s.cat) }} onMouseEnter={sfx.hover}
              className={`relative px-4 py-2 font-display text-xs font-bold uppercase tracking-[.2em] transition-colors ${cat === s.cat ? 'text-gold-hi' : 'text-gold/60 hover:text-gold-hi'}`}>
              {s.cat}{cat === s.cat && <span className="absolute inset-x-2 -bottom-[17px] h-[3px] bg-gold shadow-[0_0_10px_#c8aa6e]" />}
            </button>
          ))}
        </div>
        <ul className="mt-8 grid gap-x-10 gap-y-1 sm:grid-cols-2">
          {group.items.map(([name, t]) => (
            <li key={name} onMouseEnter={sfx.hover} className="flex items-center justify-between border-b border-gold-lo/25 py-3">
              <span className={t === 0 ? 'font-semibold text-gold-hi' : 'text-gold-hi/80'}>{name}</span>
              <span className="flex items-center gap-3">
                <span className="hidden text-[10px] font-semibold uppercase tracking-[.2em] text-gold/50 sm:block">{skillTiers[t]}</span>
                <span className="flex gap-1" aria-label={`${skillTiers[t]} mastery`}>
                  {[0, 1, 2].map((i) => <i key={i} className={`diamond !h-[7px] !w-[7px] ${i < pips[t] ? '' : '!bg-gold-lo/30'}`} />)}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
