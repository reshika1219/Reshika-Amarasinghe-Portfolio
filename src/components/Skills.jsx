import Section from './Section'
import { skills } from '../data/content'

const colors = ['bg-lime', 'bg-pink', 'bg-tang', 'bg-blue text-cream', 'bg-lime', 'bg-pink']
const rot = ['-rotate-1', 'rotate-1', 'rotate-0', '-rotate-1', 'rotate-1', '-rotate-1']

export default function Skills() {
  return (
    <Section id="skills" title="Skills" color="bg-lime">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((g, i) => (
          <div key={g.cat} className={`brut p-6 ${colors[i]} ${rot[i]}`}>
            <h3 className="font-display text-xl font-extrabold uppercase">{g.cat}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">{g.items.map(([n, t]) => <li key={n} className={`rounded-full border-2 border-current px-3 py-1 text-sm ${t === 0 ? 'bg-ink font-bold text-cream' : t === 1 ? 'font-semibold' : 'font-medium opacity-70'}`}>{n}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm font-semibold">Black = my daily drivers · plain = comfortable · faded = familiar</p>
    </Section>
  )
}
