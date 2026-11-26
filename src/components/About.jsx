import Section from './Section'
import { profile, education, honors } from '../data/content'

export default function About() {
  return (
    <Section id="about" n="04" title="About">
      <p className="max-w-3xl font-display text-2xl leading-snug sm:text-3xl">{profile.summary}</p>
      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">Education</h3>
          <div className="mt-4 space-y-6">{education.map((e) => <div key={e.name}><p className="font-display text-xl">{e.name}</p><p className="text-sm text-ink/75">{e.detail}</p><p className="mt-1 text-xs text-mute">{e.meta}</p></div>)}</div>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">Certifications & honors</h3>
          <ul className="mt-4 space-y-3">{honors.map((h) => <li key={h.title} className="text-sm"><span className="font-medium">{h.title}</span> <span className="text-mute">· {h.note}</span></li>)}</ul>
        </div>
      </div>
    </Section>
  )
}
