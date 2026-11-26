import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { palettes, applyPalette, savedPalette } from '../palette'

const links = [['numbers', 'Numbers'], ['experience', 'Work'], ['projects', 'Projects'], ['skills', 'Skills'], ['offline', 'Off the clock']]

export default function Nav() {
  const [i, setI] = useState(savedPalette())
  const [toast, setToast] = useState(null)
  const cycle = () => { const n = (i + 1) % palettes.length; setI(n); setToast(applyPalette(n)); clearTimeout(cycle.t); cycle.t = setTimeout(() => setToast(null), 1400) }
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5">
      <nav aria-label="Main" className="brut-sm mx-auto flex max-w-3xl items-center justify-between rounded-full bg-cream px-3 py-2">
        <button onClick={cycle} aria-label="Change colour palette" title="Psst — click me to change the colours" className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-lime font-display text-lg font-extrabold transition-transform hover:rotate-[20deg] active:scale-90">R</button>
        <ul className="hidden gap-1 sm:flex">{links.map(([id, l]) => <li key={id}><a href={`#${id}`} className="rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-cream">{l}</a></li>)}</ul>
        <a href="#contact" className="rounded-full border-2 border-ink bg-pink px-5 py-1.5 text-sm font-bold transition-transform hover:-rotate-3">Say hi ↘</a>
      </nav>
      <AnimatePresence>
        {toast && <motion.p initial={{ opacity: 0, y: -10, rotate: -4 }} animate={{ opacity: 1, y: 0, rotate: -2 }} exit={{ opacity: 0 }} className="brut-sm mx-auto mt-3 w-max bg-lime px-4 py-1 text-sm font-bold">Palette: {toast}</motion.p>}
      </AnimatePresence>
    </header>
  )
}
