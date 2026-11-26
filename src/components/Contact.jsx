import Section from './Section'
import { profile, education, honors } from '../data/content'

export default function Contact() {
  return (
    <Section id="contact" label="About & contact" title="A bit more about me.">
      <div className="grid gap-5 md:grid-cols-2">
        <p className="rounded-3xl border border-line bg-white p-8 text-lg leading-relaxed text-ink/80 md:col-span-2">{profile.summary}</p>
        <div className="rounded-3xl border border-line bg-white p-8"><h3 className="text-sm font-semibold text-brand">Education</h3><div className="mt-4 space-y-5">{education.map((e) => <div key={e.name}><p className="font-semibold">{e.name}</p><p className="text-sm text-mute">{e.detail}</p><p className="mt-1 text-xs text-mute/80">{e.meta}</p></div>)}</div></div>
        <div className="rounded-3xl border border-line bg-white p-8"><h3 className="text-sm font-semibold text-brand">Certifications &amp; honors</h3><ul className="mt-4 space-y-2 text-sm">{honors.map((h) => <li key={h.title}>{h.title} <span className="text-mute">· {h.note}</span></li>)}</ul></div>
      </div>
      <div className="mt-16 rounded-[2rem] bg-ink p-10 text-center text-white sm:p-16" style={{ backgroundImage: 'radial-gradient(60% 80% at 20% 0%, rgba(79,70,229,.55), transparent), radial-gradient(50% 70% at 90% 100%, rgba(255,122,89,.4), transparent)' }}>
        <h3 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Let's build something <span className="serif">useful</span> together.</h3>
        <p className="mx-auto mt-4 max-w-md text-white/70">Open to internships, graduate roles and research collaborations.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">Email me</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5">LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5">GitHub ↗</a>
        </div>
      </div>
      <p className="mt-12 text-center text-xs text-mute">© {new Date().getFullYear()} Reshika Amarasinghe</p>
    </Section>
  )
}
