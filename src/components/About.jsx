import Section from './Section'
import { profile, education } from '../data/content'

export default function About() {
  return (
    <Section id="about" kicker="Profile" title="About">
      <div className="grid gap-14 md:grid-cols-[1.7fr_1fr]">
        <p className="text-xl leading-[1.8] text-gold-hi/75">{profile.summary}</p>
        <div className="space-y-8">
          {education.map((e) => (
            <div key={e.name}><h3 className="font-display text-xl text-gold-hi">{e.name}</h3><p className="mt-1 text-sm text-gold-hi/70">{e.detail}</p><p className="mt-2 text-xs leading-relaxed text-gold-hi/40">{e.meta}</p></div>
          ))}
        </div>
      </div>
    </Section>
  )
}
