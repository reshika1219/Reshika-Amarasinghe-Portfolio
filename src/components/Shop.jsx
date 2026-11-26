import Section from './Section'
import { skills } from '../data/content'

const cls = ['text-gold-hi', 'text-gold-hi/70', 'text-gold-hi/40']

export default function Shop() {
  return (
    <Section id="shop" kicker="Skills" title="Toolkit">
      <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.cat} className="min-w-0">
            <h3 className="border-b hair pb-2 text-[11px] font-medium uppercase tracking-[.3em] text-gold">{g.cat}</h3>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">{g.items.map(([n, t]) => <li key={n} className={`whitespace-nowrap ${cls[t]}`}>{n}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="mt-12 text-xs text-gold-hi/40">Brightest = daily use · dimmer = familiar</p>
    </Section>
  )
}
