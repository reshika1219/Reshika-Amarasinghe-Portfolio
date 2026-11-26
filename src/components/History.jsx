import Section from './Section'
import { experience } from '../data/content'

export default function History() {
  return (
    <Section id="history" kicker="Experience" title="Where I've worked">
      <div className="divide-y divide-gold-lo/25 border-y hair">
        {experience.map((x) => (
          <article key={x.org} className="grid gap-3 py-9 md:grid-cols-[170px_1fr]">
            <p className="text-xs text-gold-hi/45">{x.date}</p>
            <div>
              <h3 className="font-display text-2xl text-gold-hi">{x.role}</h3>
              <p className="mt-1 text-sm text-gold">{x.org}</p>
              <ul className="mt-4 space-y-3 leading-relaxed text-gold-hi/65">{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
