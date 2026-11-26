import Section from './Section'
import { skills } from '../data/content'

const chip = ['bg-ink text-white', 'border border-line bg-white text-ink', 'bg-black/5 text-mute']

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="My toolkit.">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.cat} className="rounded-3xl border border-line bg-white p-7">
            <h3 className="text-sm font-semibold text-brand">{g.cat}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">{g.items.map(([n, t]) => <li key={n} className={`rounded-full px-3.5 py-1.5 text-sm ${chip[t]}`}>{n}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-mute">Filled = what I use most · outlined = comfortable · grey = familiar</p>
    </Section>
  )
}
