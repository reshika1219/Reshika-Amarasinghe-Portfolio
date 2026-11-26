import { motion } from 'framer-motion'

export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .6 }}>
        <p className="text-sm font-semibold text-brand">{label}</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">{title}</h2>
      </motion.div>
      <div className="mt-12">{children}</div>
    </section>
  )
}
