import { motion } from 'framer-motion'

export default function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .7 }}>
        <p className="text-[11px] font-medium uppercase tracking-[.4em] text-gold">{kicker}</p>
        <h2 className="mt-3 font-display text-4xl font-medium text-gold-hi sm:text-6xl">{title}</h2>
      </motion.div>
      <div className="mt-14">{children}</div>
    </section>
  )
}
