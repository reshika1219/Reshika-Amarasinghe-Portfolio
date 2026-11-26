import { motion } from 'framer-motion'
import Section from './Section'

const nums = [
  ['141,000', 'fibre distribution points mapped for Sri Lanka Telecom', 'bg-lime', '-rotate-1'],
  ['~14,000', 'grid cells scored by my pipeline', 'bg-pink', 'rotate-1'],
  ['AUC > 0.99', 'churn model, deployed in Streamlit', 'bg-blue text-cream', '-rotate-1'],
  ['471', 'participants in my data-viz study', 'bg-tang', 'rotate-1'],
]

export default function Numbers() {
  return (
    <Section id="numbers" title="By the numbers" color="bg-pink">
      <div className="grid gap-6 sm:grid-cols-2">
        {nums.map(([n, l, c, r], i) => (
          <motion.div key={n} initial={{ opacity: 0, y: 40, rotate: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}
            className={`brut brut-hover p-7 ${c} ${r}`}>
            <p className="font-display text-6xl font-extrabold leading-none tracking-tight sm:text-7xl">{n}</p>
            <p className="mt-3 max-w-xs text-lg font-medium leading-snug">{l}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
