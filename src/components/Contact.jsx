import Section from './Section'
import { profile, education, honors } from '../data/content'

export default function Contact() {
  return (
    <Section id="contact" title="About & hello" color="bg-pink">
      <div className="grid gap-6 md:grid-cols-2">
        <p className="brut bg-cream p-7 text-xl font-medium leading-snug md:col-span-2">{profile.summary}</p>
        <div className="brut bg-lime p-7"><h3 className="font-display text-xl font-extrabold uppercase">Education</h3><div className="mt-4 space-y-4">{education.map((e) => <div key={e.name}><p className="font-bold">{e.name}</p><p className="text-sm">{e.detail}</p><p className="text-xs opacity-70">{e.meta}</p></div>)}</div></div>
        <div className="brut bg-tang p-7"><h3 className="font-display text-xl font-extrabold uppercase">Certs & honors</h3><ul className="mt-4 space-y-1.5 text-sm">{honors.map((h) => <li key={h.title}><b>{h.title}</b> · {h.note}</li>)}</ul></div>
      </div>
      <a href={`mailto:${profile.email}`} className="mt-16 block font-display text-[clamp(2.6rem,12vw,9rem)] font-extrabold uppercase leading-[.9] tracking-tighter transition-colors hover:text-blue">Say hi →</a>
      <div className="mt-6 flex flex-wrap gap-4 font-bold">
        <a href={profile.github} target="_blank" rel="noreferrer" className="brut-sm bg-cream px-5 py-2 hover:bg-lime">GitHub ↗</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="brut-sm bg-cream px-5 py-2 hover:bg-lime">LinkedIn ↗</a>
      </div>
      <p className="mt-16 text-sm font-semibold">© {new Date().getFullYear()} Reshika Amarasinghe</p>
    </Section>
  )
}
