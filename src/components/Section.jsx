import { motion } from 'framer-motion'

export default function Section({ id, cmd, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .5 }}>
        <h2 className="font-mono text-sm text-dim"><span className="text-accent">❯</span> {cmd}</h2>
        <div className="mt-8">{children}</div>
      </motion.div>
    </section>
  )
}
