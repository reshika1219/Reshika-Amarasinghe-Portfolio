import { useEffect, useState } from 'react'
import { isSoundOn, setSound, sfx } from '../lib'

const links = [['about', 'Profile'], ['history', 'Match History'], ['champions', 'Champions'], ['shop', 'Item Shop'], ['honors', 'Honors'], ['contact', 'Queue Up']]

export default function Nav() {
  const [on, setOn] = useState(isSoundOn())
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold-lo/70 bg-void/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2" onMouseEnter={sfx.hover}>
          <span className="hex-clip grid h-8 w-8 place-items-center bg-gold font-display text-sm font-black text-void">R</span>
          <span className="hidden font-display text-sm font-bold tracking-widest text-gold-hi sm:block">RESHIKA</span>
        </a>
        <ul className="hidden gap-6 md:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onMouseEnter={sfx.hover} onClick={sfx.click}
                className={`font-display text-xs font-bold uppercase tracking-[.2em] transition-colors hover:text-hex ${active === id ? 'text-hex' : 'text-gold/80'}`}>{label}</a>
            </li>
          ))}
        </ul>
        <button aria-pressed={on} aria-label="Toggle sound effects"
          onClick={() => { const n = !on; setSound(n); setOn(n); n && sfx.select() }}
          className="border border-gold-lo px-3 py-1 font-mono text-[11px] tracking-widest text-gold hover:border-gold">
          SFX {on ? 'ON' : 'OFF'}
        </button>
      </nav>
    </header>
  )
}
