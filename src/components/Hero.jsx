import { motion } from 'framer-motion'
import { profile, stats, splash, heroArt } from '../data/content'
import { sfx } from '../lib'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden pt-16">
      <motion.img src={splash(heroArt)} alt="" initial={{ scale: 1.06, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full object-cover object-[60%_25%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/95 via-void/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/40" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }} className="text-[11px] font-semibold uppercase tracking-[.45em] text-hex">Data Science · Machine Learning</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6, duration: .9 }}
          className="gold-text mt-4 font-display text-5xl font-bold uppercase leading-[1.02] tracking-[.04em] sm:text-7xl lg:text-8xl">Reshika<br />Amarasinghe</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-5 max-w-xl text-lg leading-relaxed text-gold-hi/85">{profile.tagline}</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-8">
          <a href="#champions" className="btn-lol primary !px-12 !py-4 !text-sm" onMouseEnter={sfx.hover} onClick={sfx.select}>Play · View Projects</a>
        </motion.div>

        <motion.dl initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="frame mt-12 grid grid-cols-2 divide-x divide-gold-lo/40 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-5 py-4 text-center">
              <dt className="font-display text-2xl font-bold text-gold-hi sm:text-3xl">{s.prefix}{s.decimals ? s.value.toFixed(s.decimals) : s.value.toLocaleString()}</dt>
              <dd className="mt-1 text-[10px] font-semibold uppercase tracking-[.25em] text-gold/70">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
      <p className="relative pb-2 text-center text-[10px] tracking-widest text-gold-hi/35">Art: Viktor · Riot Games</p>
    </section>
  )
}
