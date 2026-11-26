import { useEffect, useState } from 'react'
import { isSoundOn, setSound, sfx } from '../lib'

const links = [['about', 'Profile'], ['history', 'Experience'], ['champions', 'Projects'], ['shop', 'Skills'], ['honors', 'Honors'], ['contact', 'Contact']]

export default function Nav() {
  const [on, setOn] = useState(isSoundOn())
  const [solid, setSolid] = useState(false)
  useEffect(() => { const f = () => setSolid(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? 'bg-void/80 backdrop-blur-md' : ''}`}>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-display text-lg text-gold-hi" onMouseEnter={sfx.hover}>R<span className="text-gold">.</span></a>
        <ul className="hidden gap-8 md:flex">
          {links.map(([id, l]) => <li key={id}><a href={`#${id}`} onMouseEnter={sfx.hover} onClick={sfx.click} className="link-u text-xs text-gold-hi/60">{l}</a></li>)}
        </ul>
        <button aria-pressed={on} aria-label="Toggle sound" onClick={() => { const n = !on; setSound(n); setOn(n); n && sfx.select() }} className="text-xs text-gold-hi/50 hover:text-gold-hi">Sound {on ? 'on' : 'off'}</button>
      </nav>
    </header>
  )
}
