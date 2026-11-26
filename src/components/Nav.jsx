import { useEffect, useState } from 'react'
import { isSoundOn, setSound, sfx } from '../lib'

const links = [['about', 'Profile'], ['history', 'Experience'], ['champions', 'Projects'], ['shop', 'Skills'], ['honors', 'Honors']]

export default function Nav() {
  const [on, setOn] = useState(isSoundOn())
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    ;[...links.map(([i]) => i), 'top'].forEach((id) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold-lo bg-gradient-to-b from-[#0a1220] to-[#010a13]/95 backdrop-blur">
      <div className="gold-rule absolute inset-x-0 bottom-0" />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" onMouseEnter={sfx.hover}>
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-gold bg-void font-display text-sm font-bold text-gold">R</span>
          <span className="hidden font-display text-sm font-bold tracking-[.3em] text-gold-hi sm:block">RESHIKA</span>
        </a>
        <ul className="hidden h-full md:flex">
          {links.map(([id, label]) => (
            <li key={id} className="h-full">
              <a href={`#${id}`} onMouseEnter={sfx.hover} onClick={sfx.click}
                className={`relative flex h-full items-center px-5 font-display text-xs font-bold uppercase tracking-[.25em] transition-colors ${active === id ? 'text-gold-hi' : 'text-gold/70 hover:text-gold-hi'}`}>
                {label}
                {active === id && <span className="absolute inset-x-3 bottom-0 h-[3px] bg-gold shadow-[0_0_12px_#c8aa6e]" />}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button aria-pressed={on} aria-label="Toggle sound" onClick={() => { const n = !on; setSound(n); setOn(n); n && sfx.select() }}
            className="text-[10px] font-semibold tracking-[.25em] text-gold/60 hover:text-gold-hi">SFX {on ? 'ON' : 'OFF'}</button>
          <a href="#contact" onMouseEnter={sfx.hover} onClick={sfx.select} className="btn-lol primary !px-6 !py-2 !text-[11px]">Contact</a>
        </div>
      </nav>
    </header>
  )
}
