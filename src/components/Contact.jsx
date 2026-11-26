import Section from './Section'
import { profile } from '../data/content'
import { sfx } from '../lib'

export default function Contact() {
  const links = [['GitHub', profile.github, 'github.com/reshika1219'], ['LinkedIn', profile.linkedin, 'linkedin.com/in/reshika-amarasinghe'], ['Email', `mailto:${profile.email}`, profile.email]]
  return (
    <Section id="contact" kicker="// READY CHECK" title="Queue Up">
      <div className="panel mx-auto max-w-3xl p-8 text-center sm:p-12">
        <p className="font-display text-xl text-gold-hi sm:text-2xl">Looking for an ML / data teammate? Let's find a match.</p>
        <p className="mx-auto mt-3 max-w-xl text-[#b9ad8c]">Open to internships, graduate roles and research collaborations in ML, data science and applied AI.</p>
        <a href={`mailto:${profile.email}`} onMouseEnter={sfx.hover} onClick={sfx.victory} className="btn-lol primary mt-8 inline-block text-lg">Find Match</a>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {links.map(([n, href, t]) => (
            <a key={n} href={href} target={n === 'Email' ? undefined : '_blank'} rel="noreferrer" onMouseEnter={sfx.hover} onClick={sfx.click}
              className="border border-gold-lo p-3 transition-colors hover:border-hex hover:bg-hex/10">
              <span className="block font-display text-sm font-bold text-gold">{n}</span>
              <span className="block truncate font-mono text-[11px] text-[#b9ad8c]">{t}</span>
            </a>
          ))}
        </div>
      </div>
      <p className="mt-16 text-center font-mono text-xs tracking-widest text-gold/40">
        © {new Date().getFullYear()} RESHIKA AMARASINGHE · FAN-MADE TRIBUTE, NOT AFFILIATED WITH RIOT GAMES · TRY THE KONAMI CODE
      </p>
    </Section>
  )
}
