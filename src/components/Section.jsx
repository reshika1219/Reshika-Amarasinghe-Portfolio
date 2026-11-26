import { motion } from 'framer-motion'

export default function Section({ id, title, color = 'bg-lime', children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <motion.h2 initial={{ opacity: 0, y: 30, rotate: -2 }} whileInView={{ opacity: 1, y: 0, rotate: -1 }} viewport={{ once: true, margin: '-60px' }}
        className={`brut inline-block ${color} px-5 py-2 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-6xl`}>{title}</motion.h2>
      <div className="mt-12">{children}</div>
    </section>
  )
}
