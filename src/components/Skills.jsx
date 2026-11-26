import Section from './Section'
import { skills } from '../data/content'

const cls = ['text-ink font-medium', 'text-ink/70', 'text-ink/40']

export default function Skills() {
  return (
    <Section id="skills" n="03" title="Skills">
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.cat}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{g.cat}</h3>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">{g.items.map(([n, t]) => <li key={n} className={`whitespace-nowrap ${cls[t]}`}>{n}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="mt-10 font-mono text-[11px] text-mute">Darker = used most · lighter = familiar</p>
    </Section>
  )
}
