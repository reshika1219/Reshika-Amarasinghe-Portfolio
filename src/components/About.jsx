import Section from './Section'
import { profile, education } from '../data/content'

export default function About() {
  return (
    <Section id="about" kicker="SUMMONER PROFILE" title="Profile">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="panel p-6 sm:p-8 lg:col-span-2">
          <p className="text-lg leading-relaxed text-[#cdbe91]">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Geospatial Analytics', 'Predictive Modelling', 'Agentic AI', 'RAG', 'GNNs', 'Knowledge Graphs'].map((t) => (
              <span key={t} className="border border-hex/40 bg-hex/10 px-3 py-1 font-mono text-xs text-hex">{t}</span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.name} className="panel p-5">
              <p className="font-mono text-[11px] tracking-widest text-hex">EDUCATION</p>
              <h3 className="mt-1 font-display text-xl font-bold text-gold-hi">{e.name}</h3>
              <p className="mt-1 text-sm text-[#cdbe91]">{e.detail}</p>
              <p className="mt-2 text-xs text-gold/60">{e.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
