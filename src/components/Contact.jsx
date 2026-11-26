import Section from './Section'
import { profile } from '../data/content'
import { sfx } from '../lib'

export default function Contact() {
  const links = [['GitHub', profile.github], ['LinkedIn', profile.linkedin], ['Email', `mailto:${profile.email}`]]
  return (
    <Section id="contact" kicker="Say hello" title="Contact">
      <p className="max-w-3xl font-display text-3xl font-bold leading-snug text-gold-hi sm:text-5xl">Looking for an ML or data teammate? Let's talk.</p>
      <p className="mt-6 max-w-xl text-gold-hi/70">Open to internships, graduate roles and research collaborations in ML, data science and applied AI.</p>
      <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
        {links.map(([n, href]) => (
          <a key={n} href={href} target={n === 'Email' ? undefined : '_blank'} rel="noreferrer" onMouseEnter={sfx.hover} onClick={n === 'Email' ? sfx.victory : sfx.click}
            className="link-u font-display text-xl font-bold uppercase tracking-[.15em] text-gold">{n} ↗</a>
        ))}
      </div>
      <p className="mt-24 max-w-3xl text-[11px] leading-relaxed tracking-wide text-gold-hi/40">
        © {new Date().getFullYear()} Reshika Amarasinghe. This is a fan-made, non-commercial tribute and is not endorsed by Riot Games. League of Legends and all champion art are trademarks or property of Riot Games, Inc.
      </p>
    </Section>
  )
}
