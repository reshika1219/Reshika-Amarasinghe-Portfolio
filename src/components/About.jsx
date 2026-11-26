import Section from './Section'
import { profile, education } from '../data/content'

export default function About() {
  return (
    <Section id="about" kicker="Who I am" title="Profile">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <p className="text-xl leading-[1.75] text-gold-hi/80">{profile.summary}</p>
        <div className="space-y-8">
          {education.map((e) => (
            <div key={e.name} className="border-l-2 border-gold pl-5">
              <h3 className="font-display text-lg font-bold text-gold-hi">{e.name}</h3>
              <p className="mt-1 text-sm text-gold-hi/80">{e.detail}</p>
              <p className="mt-2 text-xs leading-relaxed text-gold/60">{e.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
