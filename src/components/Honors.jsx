import { motion } from 'framer-motion'
import Section from './Section'
import { honors } from '../data/content'

const col = { Certification: '#0ac8b9', Esports: '#ff3e8a', Academic: '#c8aa6e' }

export default function Honors() {
  return (
    <Section id="honors" kicker="// HONORS & ACHIEVEMENTS" title="Honors">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {honors.map((h, i) => (
          <motion.div key={h.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * .08 }}
            className="panel flex gap-4 p-4 transition-transform hover:-translate-y-1" data-hot>
            <div className="hex-clip grid h-14 w-14 shrink-0 place-items-center text-2xl" style={{ background: col[h.type] }}>
              <span className="hex-clip grid h-[52px] w-[52px] place-items-center bg-void" style={{ color: col[h.type] }}>{h.icon}</span>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: col[h.type] }}>{h.type}</p>
              <h3 className="font-display text-sm font-bold leading-snug text-gold-hi">{h.title}</h3>
              <p className="mt-1 text-xs text-[#b9ad8c]">{h.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
