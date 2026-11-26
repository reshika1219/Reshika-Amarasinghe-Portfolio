import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const tips = [
  'Tip: Always verify the LLM before trusting its explanation.',
  'Tip: 17 features from 51 raw variables beats 51 raw variables.',
  'Tip: Hexagons are the bestagons. ~14,000 of them, mapped.',
  'Tip: A Decision Gate keeps agents from talking over each other.',
  'Loading summoner data...',
]

export default function Loading({ onDone }) {
  const [p, setP] = useState(0)
  const [tip, setTip] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setP((v) => {
      const n = Math.min(100, v + Math.random() * 7 + 2)
      if (n >= 100) clearInterval(id)
      return n
    }), 120)
    const t = setInterval(() => setTip((v) => (v + 1) % tips.length), 1100)
    return () => { clearInterval(id); clearInterval(t) }
  }, [])
  useEffect(() => { if (p >= 100) { const t = setTimeout(onDone, 500); return () => clearTimeout(t) } }, [p, onDone])

  return (
    <motion.div exit={{ opacity: 0, scale: 1.04 }} transition={{ duration: .6 }}
      className="fixed inset-0 z-[9000] flex flex-col items-center justify-center bg-void px-6">
      <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(3,151,171,.28), transparent 60%)' }} />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative w-full max-w-md text-center">
        <div className="relative mx-auto mb-8 grid h-40 w-40 place-items-center rounded-full border-2 border-gold p-2 shadow-[0_0_50px_rgba(10,200,185,.25)]">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-gold-lo bg-gradient-to-b from-panel to-void">
            <span className="font-display text-6xl font-bold gold-text">R</span>
          </div>
          <span className="absolute -bottom-3 rounded-full border border-gold bg-void px-3 py-0.5 text-[11px] font-semibold tracking-[.2em] text-gold-hi">LV 4</span>
        </div>
        <p className="font-mono text-xs tracking-[.4em] text-hex">SUMMONER</p>
        <h1 className="section-title gold-text mt-2 text-3xl sm:text-4xl">Reshika Amarasinghe</h1>
        <p className="mt-2 font-display text-sm tracking-widest text-gold/80">THE DATA WEAVER</p>
        <div className="mt-10 h-3 w-full border border-gold-lo bg-black/60 p-[2px] rounded-sm">
          <div className="bar-fill h-full transition-[width] duration-150" style={{ width: `${p}%` }} />
        </div>
        <div className="mt-2 flex justify-between font-mono text-xs text-gold/70">
          <span className="truncate pr-4">{tips[tip]}</span><span>{Math.floor(p)}%</span>
        </div>
      </motion.div>
      <button onClick={onDone} className="absolute bottom-6 right-6 font-mono text-xs tracking-widest text-gold/50 hover:text-gold">SKIP ▸</button>
    </motion.div>
  )
}
