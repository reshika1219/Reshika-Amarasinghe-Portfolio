import { motion } from 'framer-motion'

export default function Section({ id, n, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .6 }}
        className="grid gap-4 border-t border-ink pt-5 md:grid-cols-[180px_1fr]">
        <p className="font-mono text-xs text-mute">{n} / {title}</p>
        <div>{children}</div>
      </motion.div>
    </section>
  )
}
