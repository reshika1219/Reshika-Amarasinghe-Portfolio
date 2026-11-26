import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data/content'

export default function History() {
  return (
    <Section id="history" kicker="Career history" title="Experience">
      <div className="space-y-6">
        {experience.map((x) => (
          <motion.article key={x.org} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} className="frame grid md:grid-cols-[220px_1fr]">
            <div className="border-b border-gold-lo/40 bg-hex/5 p-6 md:border-b-0 md:border-r">
              <p className="text-xs font-semibold uppercase tracking-[.25em] text-hex">{x.date}</p>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-gold-hi">{x.role}</h3>
              <p className="mt-1 text-sm text-gold">{x.org}</p>
              <ul className="mt-5 space-y-3 leading-relaxed text-gold-hi/75">
                {x.points.map((p) => <li key={p} className="flex gap-3"><span className="diamond mt-[.6em] shrink-0 !h-[6px] !w-[6px]" />{p}</li>)}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
