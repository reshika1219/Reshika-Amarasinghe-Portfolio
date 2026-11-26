import Section from './Section'
import { skills } from '../data/content'

const cls = ['font-semibold text-gold-hi', 'text-gold-hi/75', 'text-gold-hi/45']

export default function Shop() {
  return (
    <Section id="shop" kicker="Toolkit" title="Skills">
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.cat} className="min-w-0">
            <h3 className="border-b border-gold-lo/50 pb-2 text-[11px] font-semibold uppercase tracking-[.3em] text-gold">{g.cat}</h3>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {g.items.map(([n, t]) => <li key={n} className={`whitespace-nowrap ${cls[t]}`}>{n}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-12 text-xs tracking-widest text-gold-hi/50"><span className="font-semibold text-gold-hi">DAILY</span> · <span className="text-gold-hi/75">COMFORTABLE</span> · <span className="text-gold-hi/45">FAMILIAR</span></p>
    </Section>
  )
}
