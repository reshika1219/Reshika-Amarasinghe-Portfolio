import { motion } from 'framer-motion'

export default function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .6 }}>
        <p className="font-mono text-xs tracking-[.4em] text-hex">{kicker}</p>
        <h2 className="section-title gold-text mt-2 text-4xl sm:text-5xl">{title}</h2>
        <div className="mt-4 flex items-center gap-3"><span className="h-px w-24 bg-gold" /><span className="diamond" /><span className="h-px flex-1 bg-gradient-to-r from-gold-lo to-transparent" /></div>
      </motion.div>
      <div className="mt-12">{children}</div>
    </section>
  )
}
