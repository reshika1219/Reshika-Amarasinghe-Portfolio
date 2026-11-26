import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile, stats } from '../data/content'
import { sfx } from '../lib'

function Count({ s }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const t0 = performance.now()
    let raf
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / 1600)
      setV(s.value * (1 - Math.pow(1 - k, 3)))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, s.value])
  const num = s.decimals ? v.toFixed(s.decimals) : Math.round(v).toLocaleString()
  return <span ref={ref}>{s.prefix}{num}<span className="text-base text-gold/60">{s.suffix}</span></span>
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6">
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(255,62,138,.10), transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(3,151,171,.18), transparent 55%)' }} />
      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .1 }} className="font-mono text-xs tracking-[.5em] text-hex">// WELCOME, SUMMONER</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .8 }}
          className="section-title gold-text mt-4 text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">
          Reshika<br />Amarasinghe
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }} className="mt-5 font-display text-lg tracking-[.2em] text-gold-hi sm:text-2xl">
          {profile.title}
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} className="mt-5 max-w-2xl text-lg text-[#cdbe91]">{profile.tagline}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9 }} className="mt-10 flex flex-wrap gap-4">
          <a href="#champions" className="btn-lol primary" onMouseEnter={sfx.hover} onClick={sfx.select}>Champion Select</a>
          <a href="#contact" className="btn-lol" onMouseEnter={sfx.hover} onClick={sfx.click}>Queue Up</a>
        </motion.div>
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="panel p-4 sm:p-5">
              <div className="font-display text-2xl font-black text-hex sm:text-3xl"><Count s={s} /></div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-gold/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
