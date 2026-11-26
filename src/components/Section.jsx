import { motion } from 'framer-motion'

export default function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .7 }} className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[.4em] text-hex">{kicker}</p>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-[.1em] text-gold-hi sm:text-5xl">{title}</h2>
        <div className="mx-auto mt-5 flex max-w-md items-center gap-3"><span className="gold-rule flex-1" /><span className="diamond" /><span className="gold-rule flex-1" /></div>
      </motion.div>
      <div className="mt-14">{children}</div>
    </section>
  )
}
