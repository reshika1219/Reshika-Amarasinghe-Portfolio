import { motion } from 'framer-motion'
import Section from './Section'

const cards = [
  { emoji: '🥈', big: 'Runner-up', title: 'Free Fire', note: 'Renaissance Season 4 Gaming Tournament, SLIIT', c: 'bg-lime', r: '-rotate-2' },
  { emoji: '🎯', big: 'Semi-finalist', title: 'Call of Duty 4', note: 'Inter-University Esports Championship, 2023', c: 'bg-pink', r: 'rotate-2' },
  { emoji: '∑', big: '30,000+', title: 'Maths problems', note: 'Solved on IXL, earning up to 5 certificates of excellence', c: 'bg-tang', r: '-rotate-1' },
  { emoji: '★', big: '2016 · 2017', title: 'Early overachiever', note: 'School prize for Maths & Science, provincial Maths Olympiad and English Day', c: 'bg-blue text-cream', r: 'rotate-1' },
]

export default function Offline() {
  return (
    <Section id="offline" title="Off the clock" color="bg-lime">
      <p className="max-w-2xl font-display text-2xl font-semibold leading-snug sm:text-3xl">When I'm not training models, I'm usually competing. Same habit: study the system, then play to win.</p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 40, rotate: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}
            whileHover={{ y: -8, rotate: 0 }} className={`brut p-6 ${c.c} ${c.r}`}>
            <span aria-hidden className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-current bg-cream text-2xl text-ink">{c.emoji}</span>
            <p className="mt-6 font-display text-3xl font-extrabold leading-none tracking-tight">{c.big}</p>
            <p className="mt-2 font-display text-lg font-bold leading-tight">{c.title}</p>
            <p className="mt-2 text-sm leading-snug opacity-80">{c.note}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
