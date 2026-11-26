import Section from './Section'
import { profile } from '../data/content'
import { sfx } from '../lib'

export default function Contact() {
  const links = [['GitHub', profile.github], ['LinkedIn', profile.linkedin]]
  return (
    <Section id="contact" kicker="Ready check" title="Contact">
      <div className="frame mx-auto max-w-3xl p-10 text-center sm:p-14">
        <p className="font-display text-2xl font-bold leading-snug text-gold-hi sm:text-4xl">Looking for an ML or data teammate?</p>
        <p className="mx-auto mt-4 max-w-lg text-gold-hi/70">Open to internships, graduate roles and research collaborations in ML, data science and applied AI.</p>
        <a href={`mailto:${profile.email}`} onMouseEnter={sfx.hover} onClick={sfx.victory} className="btn-lol primary mt-8 inline-block !px-14 !py-4 !text-sm">Find match</a>
        <div className="mt-8 flex justify-center gap-8">
          {links.map(([n, href]) => <a key={n} href={href} target="_blank" rel="noreferrer" onMouseEnter={sfx.hover} onClick={sfx.click} className="link-u font-display text-sm font-bold uppercase tracking-[.2em] text-gold">{n} ↗</a>)}
        </div>
      </div>
      <p className="mx-auto mt-20 max-w-3xl text-center text-[11px] leading-relaxed tracking-wide text-gold-hi/40">
        © {new Date().getFullYear()} Reshika Amarasinghe. A fan-made, non-commercial tribute, not endorsed by Riot Games. League of Legends and all champion art are trademarks or property of Riot Games, Inc.
      </p>
    </Section>
  )
}
