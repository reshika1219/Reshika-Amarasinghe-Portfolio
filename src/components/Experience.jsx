import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've put data to work.">
      <div className="space-y-4">
        {experience.map((x) => (
          <motion.article key={x.org} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
            className="grid gap-6 rounded-3xl border border-line bg-white p-7 sm:p-9 md:grid-cols-[240px_1fr]">
            <div><p className="text-sm font-medium text-brand">{x.date}</p><h3 className="mt-2 text-xl font-semibold leading-snug">{x.role}</h3><p className="mt-1 text-sm text-mute">{x.org}</p></div>
            <ul className="space-y-3 leading-relaxed text-ink/80">{x.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />{p}</li>)}</ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
