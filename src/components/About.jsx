import Section from './Section'
import { profile, education } from '../data/content'

export default function About() {
  return (
    <Section id="about" kicker="Summoner profile" title="Profile">
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="frame p-8 sm:p-10"><p className="text-lg leading-[1.8] text-gold-hi/80">{profile.summary}</p></div>
        <div className="space-y-6">
          {education.map((e) => (
            <div key={e.name} className="frame p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-hex">Education</p>
              <h3 className="mt-2 font-display text-xl font-bold text-gold-hi">{e.name}</h3>
              <p className="mt-1 text-sm text-gold-hi/80">{e.detail}</p>
              <p className="mt-3 text-xs leading-relaxed text-gold/60">{e.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
