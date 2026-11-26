import { motion } from 'framer-motion'
import { profile, stats, splash, heroArt } from '../data/content'
import { sfx } from '../lib'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <motion.img src={splash(heroArt)} alt="" initial={{ opacity: 0 }} animate={{ opacity: .55 }} transition={{ duration: 2.5 }}
        className="absolute right-0 top-0 h-full w-full object-cover object-[75%_20%] md:w-[65%]"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, #000 45%), linear-gradient(to top, transparent, #000 35%)', WebkitMaskComposite: 'source-in', maskComposite: 'intersect', maskImage: 'linear-gradient(to right, transparent, #000 45%), linear-gradient(to top, transparent, #000 35%)' }} />
      <div className="relative mx-auto w-full max-w-5xl px-6 pt-24">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }} className="text-xs font-medium uppercase tracking-[.4em] text-hex">Data Science · Machine Learning</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6, duration: .9 }} className="mt-6 font-display text-6xl font-medium leading-[1.02] text-gold-hi sm:text-8xl">
          Reshika<br /><span className="text-gold">Amarasinghe</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8 max-w-md text-lg leading-relaxed text-gold-hi/70">{profile.tagline}</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-10 flex gap-8 text-sm">
          <a href="#champions" onMouseEnter={sfx.hover} onClick={sfx.select} className="link-u border-b border-gold pb-1 text-gold-hi">View projects →</a>
          <a href="#contact" onMouseEnter={sfx.hover} onClick={sfx.click} className="link-u pb-1 text-gold-hi/60">Get in touch</a>
        </motion.div>
        <motion.dl initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-20 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}><dt className="font-display text-2xl text-gold-hi">{s.prefix}{s.decimals ? s.value.toFixed(s.decimals) : s.value.toLocaleString()}</dt><dd className="mt-1 text-[11px] text-gold-hi/45">{s.label}</dd></div>
          ))}
        </motion.dl>
      </div>
      <p className="absolute bottom-3 right-4 text-[10px] text-gold-hi/30">Art: Viktor · Riot Games</p>
    </section>
  )
}
