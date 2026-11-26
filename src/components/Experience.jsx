import Section from './Section'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience" cmd="git log --career">
      <div className="space-y-0 border-l border-line">
        {experience.map((x) => (
          <article key={x.org} className="relative pb-12 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="font-mono text-xs text-amber">{x.date}</p>
            <h3 className="mt-1 text-2xl font-semibold">{x.role}</h3>
            <p className="mt-1 font-mono text-sm text-cyan">{x.org}</p>
            <ul className="mt-4 space-y-2 leading-relaxed text-dim">{x.points.map((p) => <li key={p} className="flex gap-3"><span className="font-mono text-accent">+</span>{p}</li>)}</ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
