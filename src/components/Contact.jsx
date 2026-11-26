import Section from './Section'
import { profile, education, honors } from '../data/content'

export default function Contact() {
  return (
    <Section id="contact" cmd="cat about.md contact.md">
      <p className="max-w-3xl text-lg leading-relaxed text-fg/85">{profile.summary}</p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-surface p-6">
          <h3 className="font-mono text-xs text-amber">education</h3>
          <div className="mt-4 space-y-5">{education.map((e) => <div key={e.name}><p className="font-medium">{e.name}</p><p className="text-sm text-dim">{e.detail}</p><p className="mt-1 font-mono text-xs text-dim/70">{e.meta}</p></div>)}</div>
        </div>
        <div className="rounded-lg border border-line bg-surface p-6">
          <h3 className="font-mono text-xs text-amber">certifications & honors</h3>
          <ul className="mt-4 space-y-2 text-sm">{honors.map((h) => <li key={h.title}>{h.title} <span className="text-dim">· {h.note}</span></li>)}</ul>
        </div>
      </div>
      <div className="mt-16 rounded-lg border border-accent/40 bg-accent/5 p-8">
        <p className="font-mono text-sm text-dim"><span className="text-accent">❯</span> ./contact --open-to "internships, graduate roles, research"</p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-lg">
          <a href={`mailto:${profile.email}`} className="link-u text-accent">email</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="link-u">github ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-u">linkedin ↗</a>
        </div>
      </div>
      <p className="mt-16 font-mono text-[11px] text-dim">© {new Date().getFullYear()} Reshika Amarasinghe</p>
    </Section>
  )
}
