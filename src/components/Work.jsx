import Section from './Section'
import { experience } from '../data/content'

const funnel = [['141,000', 'fibre distribution points mapped'], ['~14,000', 'hexagonal grid cells'], ['17', 'engineered features, from 51 raw variables'], ['100', 'priority cells predicted for expansion']]

export default function Work() {
  return (
    <Section id="work" n="01" title="Selected work">
      <h2 className="font-display text-4xl leading-tight sm:text-5xl">A national geospatial pipeline for Sri Lanka Telecom.</h2>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">During my ML engineering internship at SLT's R&D lab, I built the pipeline that covers every Sri Lankan household and ranks where service expansion should go next.</p>
      <ol className="mt-10 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-4">
        {funnel.map(([n, l], i) => (
          <li key={l} className="bg-paper p-6">
            <p className="font-mono text-xs text-mute">0{i + 1}</p>
            <p className="mt-6 font-display text-5xl text-accent">{n}</p>
            <p className="mt-3 text-sm leading-snug text-ink/70">{l}</p>
          </li>
        ))}
      </ol>

      <h3 className="mt-20 font-mono text-xs uppercase tracking-widest text-mute">Experience</h3>
      <div className="mt-6 divide-y divide-rule border-y border-rule">
        {experience.map((x) => (
          <article key={x.org} className="grid gap-3 py-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs text-mute">{x.date}</p>
            <div>
              <h4 className="font-display text-2xl">{x.role}</h4>
              <p className="mt-1 text-sm text-accent">{x.org}</p>
              <ul className="mt-4 space-y-2 leading-relaxed text-ink/75">{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
