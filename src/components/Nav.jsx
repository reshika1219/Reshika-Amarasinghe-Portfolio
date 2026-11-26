import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { palettes, applyPalette, savedPalette } from '../palette'

const links = [['numbers', 'Numbers'], ['experience', 'Work'], ['projects', 'Projects'], ['skills', 'Skills'], ['offline', 'Off the clock']]

export default function Nav() {
  const [i, setI] = useState(savedPalette())
  const [toast, setToast] = useState(null)
  const [menu, setMenu] = useState(false)
  const cycle = () => { const n = (i + 1) % palettes.length; setI(n); setToast(applyPalette(n)); clearTimeout(cycle.t); cycle.t = setTimeout(() => setToast(null), 1400) }
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5">
      <nav aria-label="Main" className="brut-sm mx-auto flex max-w-3xl items-center justify-between rounded-full bg-cream px-3 py-2">
        <button onClick={cycle} aria-label="Change colour palette" title="Psst — click me to change the colours" className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-lime font-display text-lg font-extrabold transition-transform hover:rotate-[20deg] active:scale-90">R</button>
        <ul className="hidden gap-1 sm:flex">{links.map(([id, l]) => <li key={id}><a href={`#${id}`} className="block rounded-full px-3.5 py-2.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-cream">{l}</a></li>)}</ul>
        <div className="flex items-center gap-2">
          <button onClick={() => setMenu((m) => !m)} aria-expanded={menu} aria-controls="mobile-menu" className="rounded-full border-2 border-ink bg-lime px-4 py-1.5 text-sm font-bold sm:hidden">{menu ? 'Close ✕' : 'Menu ☰'}</button>
          <a href="#contact" onClick={() => setMenu(false)} className="rounded-full border-2 border-ink bg-pink px-5 py-1.5 text-sm font-bold transition-transform hover:-rotate-3">Say hi ↘</a>
        </div>
      </nav>
      <AnimatePresence>
        {menu && (
          <motion.ul id="mobile-menu" initial={{ opacity: 0, y: -12, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: -8 }}
            className="brut mx-auto mt-3 grid max-w-3xl gap-2 bg-cream p-4 sm:hidden">
            {links.map(([id, l], i) => (
              <li key={id}><a href={`#${id}`} onClick={() => setMenu(false)} className={`block border-2 border-ink px-4 py-3 font-display text-xl font-extrabold uppercase ${['bg-lime', 'bg-pink', 'bg-tang', 'bg-blue text-cream', 'bg-lime'][i % 5]}`}>{l}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toast && <motion.p initial={{ opacity: 0, y: -10, rotate: -4 }} animate={{ opacity: 1, y: 0, rotate: -2 }} exit={{ opacity: 0 }} className="brut-sm mx-auto mt-3 w-max bg-lime px-4 py-1 text-sm font-bold">Palette: {toast}</motion.p>}
      </AnimatePresence>
    </header>
  )
}
