import Section from './Section'
import { profile } from '../data/content'
import { sfx } from '../lib'

export default function Contact() {
  const links = [['Email', `mailto:${profile.email}`], ['GitHub', profile.github], ['LinkedIn', profile.linkedin]]
  return (
    <Section id="contact" kicker="Contact" title="Let's talk">
      <p className="max-w-xl text-xl leading-relaxed text-gold-hi/70">Open to internships, graduate roles and research collaborations in ML, data science and applied AI.</p>
      <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
        {links.map(([n, href]) => <a key={n} href={href} target={n === 'Email' ? undefined : '_blank'} rel="noreferrer" onMouseEnter={sfx.hover} onClick={n === 'Email' ? sfx.victory : sfx.click} className="link-u font-display text-2xl text-gold">{n} ↗</a>)}
      </div>
      <p className="mt-28 max-w-2xl text-[11px] leading-relaxed text-gold-hi/35">© {new Date().getFullYear()} Reshika Amarasinghe. A fan-made, non-commercial tribute, not endorsed by Riot Games. League of Legends and champion art are property of Riot Games, Inc.</p>
    </Section>
  )
}
