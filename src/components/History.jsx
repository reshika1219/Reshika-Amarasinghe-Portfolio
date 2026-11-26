import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data/content'

export default function History() {
  return (
    <Section id="history" kicker="Where I've worked" title="Experience">
      <div className="divide-y divide-gold-lo/40">
        {experience.map((x) => (
          <motion.article key={x.org} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
            className="grid gap-4 py-10 first:pt-0 md:grid-cols-[200px_1fr]">
            <p className="text-xs font-semibold uppercase tracking-[.25em] text-hex">{x.date}</p>
            <div>
              <h3 className="font-display text-2xl font-bold text-gold-hi">{x.role}</h3>
              <p className="mt-1 text-sm text-gold">{x.org}</p>
              <ul className="mt-5 space-y-3 leading-relaxed text-gold-hi/75">
                {x.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-[.7em] h-px w-4 shrink-0 bg-gold" />{p}</li>)}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
