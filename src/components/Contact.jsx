import Section from './Section'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <Section id="contact" n="05" title="Contact">
      <h2 className="font-display text-5xl leading-tight sm:text-7xl">Let's build something that works in production.</h2>
      <p className="mt-6 max-w-xl text-lg text-ink/70">Open to internships, graduate roles and research collaborations in ML, data science and applied AI.</p>
      <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 font-display text-2xl">
        <a href={`mailto:${profile.email}`} className="link-u">Email</a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="link-u">GitHub ↗</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-u">LinkedIn ↗</a>
      </div>
      <p className="mt-24 font-mono text-[11px] text-mute">© {new Date().getFullYear()} Reshika Amarasinghe · Sri Lanka outline: Natural Earth</p>
    </Section>
  )
}
