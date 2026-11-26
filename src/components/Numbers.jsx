import { motion } from 'framer-motion'
import Section from './Section'
import DotMap from './DotMap'

const nums = [
  ['141,000', 'fibre distribution points mapped for Sri Lanka Telecom', 'bg-lime', '-rotate-1'],
  ['AUC > 0.99', 'churn model, deployed in Streamlit', 'bg-blue text-cream', 'rotate-1'],
  ['471', 'participants in my data-viz study', 'bg-tang', 'rotate-1'],
  ['3.37', 'CGPA out of 4.0 · BSc (Hons) Data Science', 'bg-cream', '-rotate-1'],
]

const funnel = [['141,000', 'fibre points'], ['~14,000', 'grid cells'], ['51 → 17', 'features'], ['100', 'priority cells']]

export default function Numbers() {
  return (
    <Section id="numbers" title="By the numbers" color="bg-pink">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.15fr]">
        <motion.figure initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="brut min-w-0 bg-ink p-5 text-cream sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div><p className="font-display text-2xl font-extrabold leading-tight">Sri Lanka, scored.</p><p className="mt-1 text-sm text-cream/70">My SLT pipeline ranked ~14,000 grid cells and predicted the top 100 for service expansion.</p></div>
            <span className="brut-sm -rotate-3 shrink-0 bg-lime px-3 py-1 text-xs font-bold text-ink">hover me</span>
          </div>
          <div className="mt-4"><DotMap /></div>
          <figcaption className="mt-3 text-xs text-cream/50">Illustration: a dot grid of Sri Lanka. Highlighted dots echo the top-100 cells, not their real locations.</figcaption>
        </motion.figure>

        <div className="grid min-w-0 grid-cols-1 content-start gap-6 sm:grid-cols-2">
          {nums.map(([n, l, c, r], i) => (
            <motion.div key={n} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className={`brut brut-hover p-6 ${c} ${r}`}>
              <p className="font-display text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">{n}</p>
              <p className="mt-3 text-base font-medium leading-snug">{l}</p>
            </motion.div>
          ))}
          <div className="brut bg-pink p-6 sm:col-span-2">
            <p className="font-display text-lg font-extrabold uppercase">The SLT funnel</p>
            <ol className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:items-center">
              {funnel.map(([n, l], i) => (
                <li key={l} className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                  <div className="brut-sm flex-1 bg-cream p-2 text-center" style={{ transform: `scale(${1 - i * .06})` }}>
                    <p className="font-display text-base font-extrabold leading-tight sm:text-xl">{n}</p><p className="text-[10px] font-semibold uppercase leading-tight sm:text-xs">{l}</p>
                  </div>
                  {i < funnel.length - 1 && <span aria-hidden className="hidden font-extrabold sm:inline">→</span>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  )
}
