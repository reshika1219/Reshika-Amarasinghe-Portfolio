import { motion } from 'framer-motion'

export default function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .7 }}
        className="flex items-end justify-between gap-6 border-b border-gold-lo/50 pb-5">
        <h2 className="font-display text-4xl font-bold uppercase tracking-[.06em] text-gold-hi sm:text-5xl">{title}</h2>
        <p className="pb-1 text-[11px] font-semibold uppercase tracking-[.35em] text-gold">{kicker}</p>
      </motion.div>
      <div className="mt-12">{children}</div>
    </section>
  )
}
