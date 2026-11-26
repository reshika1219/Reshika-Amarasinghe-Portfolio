import { useState } from 'react'
import Section from './Section'
import { projects } from '../data/content'

export default function Projects() {
  const [i, setI] = useState(0)
  const p = projects[i]
  return (
    <Section id="projects" cmd="ls ./projects">
      <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
        <ul className="rounded-lg border border-line bg-surface p-2 font-mono text-sm">
          {projects.map((x, k) => (
            <li key={x.id}><button onClick={() => setI(k)} aria-pressed={k === i} className={`flex w-full gap-2 rounded px-3 py-2.5 text-left transition-colors ${k === i ? 'bg-accent/10 text-accent' : 'text-dim hover:text-fg'}`}><span>{k === i ? '▸' : ' '}</span><span>{x.short.toLowerCase().replace(/ /g, '-')}</span></button></li>
          ))}
        </ul>
        <article key={p.id} className="rounded-lg border border-line bg-surface p-6 sm:p-8">
          <p className="font-mono text-xs text-amber">{p.year} · {p.status}</p>
          <h3 className="mt-2 text-2xl font-semibold leading-snug sm:text-3xl">{p.title}</h3>
          <p className="mt-3 leading-relaxed text-dim">{p.summary}</p>
          <ul className="mt-6 space-y-4">
            {[p.q, p.w, p.e, p.r].map(([h, d]) => <li key={h} className="flex gap-3"><span className="font-mono text-accent">+</span><span><span className="font-medium">{h}</span><span className="block text-sm leading-relaxed text-dim">{d}</span></span></li>)}
          </ul>
          <p className="mt-6 flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded border border-line px-2.5 py-1 font-mono text-[11px] text-cyan">{t}</span>)}</p>
        </article>
      </div>
    </Section>
  )
}
