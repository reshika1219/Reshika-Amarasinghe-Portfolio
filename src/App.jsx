import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Loading from './components/Loading'
import Atmosphere from './components/Atmosphere'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import History from './components/History'
import Champions from './components/Champions'
import Shop from './components/Shop'
import Honors from './components/Honors'
import Contact from './components/Contact'
import { sfx } from './lib'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export default function App() {
  const [loading, setLoading] = useState(() => !(new URLSearchParams(location.search).has('noload') || sessionStorage.getItem('seen')))
  const [penta, setPenta] = useState(false)

  useEffect(() => {
    let i = 0
    const h = (e) => {
      i = e.key === KONAMI[i] ? i + 1 : e.key === KONAMI[0] ? 1 : 0
      if (i === KONAMI.length) { i = 0; setPenta(true); sfx.victory(); setTimeout(() => setPenta(false), 3500) }
    }
    addEventListener('keydown', h)
    return () => removeEventListener('keydown', h)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loading onDone={() => { sessionStorage.setItem('seen', '1'); setLoading(false) }} />}</AnimatePresence>
      <AnimatePresence>
        {penta && (
          <motion.div initial={{ opacity: 0, scale: .6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-[9500] grid place-items-center bg-void/80">
            <h2 className="section-title gold-text text-6xl sm:text-9xl">PENTAKILL</h2>
          </motion.div>
        )}
      </AnimatePresence>
      <Atmosphere />
      <Nav />
      <main>
        <Hero /><About /><History /><Champions /><Shop /><Honors /><Contact />
      </main>
    </>
  )
}
