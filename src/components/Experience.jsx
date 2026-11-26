import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data/content'

const colors = ['bg-lime', 'bg-pink', 'bg-blue text-cream']

export default function Experience() {
  return (
    <Section id="experience" title="Where I've worked" color="bg-tang">
      <div className="space-y-8">
        {experience.map((x, i) => (
          <motion.article key={x.org} initial={{ opacity: 0, x: i % 2 ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }}
            className={`brut grid gap-5 p-7 sm:p-9 md:grid-cols-[260px_1fr] ${colors[i % 3]}`}>
            <div><p className="inline-block border-2 border-current px-2 py-0.5 text-sm font-bold">{x.date}</p><h3 className="mt-4 font-display text-2xl font-extrabold leading-tight">{x.role}</h3><p className="mt-1 font-medium opacity-80">{x.org}</p></div>
            <ul className="space-y-3 text-lg leading-snug">{x.points.map((p) => <li key={p} className="flex gap-3"><span className="font-extrabold">→</span>{p}</li>)}</ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
