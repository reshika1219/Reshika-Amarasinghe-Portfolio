import { motion } from 'framer-motion'
import Section from './Section'

const cards = [
  { cls: 'sm:col-span-2 sm:row-span-2 bg-ink text-white', big: '141,000', sub: 'fibre distribution points across ~14,000 grid cells, modelled end to end to rank the top 100 priority areas for Sri Lanka Telecom.', tag: 'SLT · ML internship', bigCls: 'text-7xl sm:text-8xl' },
  { cls: 'bg-indigo-50', big: 'AUC > 0.99', sub: 'on credit-card churn with XGBoost, deployed in Streamlit.', bigCls: 'text-4xl text-brand' },
  { cls: 'bg-orange-50', big: '471', sub: 'participants in an A/B study on visual clarity and comprehension.', bigCls: 'text-5xl text-coral' },
  { cls: 'bg-emerald-50', big: '17 / 51', sub: 'features engineered from raw variables.', bigCls: 'text-4xl text-emerald-600' },
  { cls: 'bg-sky-50', big: '3.37', sub: 'CGPA / 4.0 · BSc (Hons) Data Science, SLIIT.', bigCls: 'text-5xl text-sky-600' },
]

export default function Highlights() {
  return (
    <Section id="highlights" label="Highlights" title="Numbers I'm proud of.">
      <div className="grid gap-4 sm:grid-cols-4 sm:auto-rows-[200px]">
        {cards.map((c, i) => (
          <motion.div key={c.big} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}
            className={`flex flex-col justify-between rounded-3xl p-7 ${c.cls}`}>
            {c.tag && <p className="text-sm text-white/60">{c.tag}</p>}
            <div className="mt-auto"><p className={`font-semibold tracking-tight ${c.bigCls}`}>{c.big}</p><p className={`mt-2 text-sm leading-snug ${c.tag ? 'text-white/70' : 'text-mute'}`}>{c.sub}</p></div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
