import { useEffect, useState } from 'react'
import { isSoundOn, setSound, sfx } from '../lib'

const links = [['about', 'Profile'], ['history', 'Experience'], ['champions', 'Projects'], ['shop', 'Skills'], ['honors', 'Honors'], ['contact', 'Contact']]

export default function Nav() {
  const [on, setOn] = useState(isSoundOn())
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const f = () => setSolid(scrollY > 40)
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? 'border-b border-gold-lo/40 bg-void/85 backdrop-blur-md' : 'bg-gradient-to-b from-void/70 to-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-sm font-bold tracking-[.3em] text-gold-hi" onMouseEnter={sfx.hover}>RESHIKA</a>
        <ul className="hidden gap-8 md:flex">
          {links.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onMouseEnter={sfx.hover} onClick={sfx.click} className="link-u text-[11px] font-semibold uppercase tracking-[.25em] text-gold-hi/70">{label}</a></li>
          ))}
        </ul>
        <button aria-pressed={on} aria-label="Toggle sound effects" onClick={() => { const n = !on; setSound(n); setOn(n); n && sfx.select() }}
          className="text-[11px] font-semibold tracking-[.25em] text-gold-hi/60 hover:text-gold-hi">SOUND {on ? 'ON' : 'OFF'}</button>
      </nav>
    </header>
  )
}
