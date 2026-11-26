import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data/content'

export default function History() {
  return (
    <Section id="history" kicker="MATCH HISTORY" title="Experience">
      <div className="space-y-5">
        {experience.map((x, i) => (
          <motion.article key={x.org} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}
            className="panel grid gap-5 overflow-hidden p-0 sm:grid-cols-[auto_1fr_auto]">
            <div className="flex items-center justify-center bg-hex/10 px-6 py-4 sm:border-r sm:border-gold-lo/50">
              <div className="text-center">
                <p className="font-display text-2xl font-black text-hex">{x.result}</p>
                <p className="font-mono text-[11px] tracking-widest text-gold/70">{x.date}</p>
              </div>
            </div>
            <div className="p-5 sm:py-6 sm:pr-2">
              <h3 className="font-display text-xl font-bold text-gold-hi">{x.role}</h3>
              <p className="text-sm text-hex">{x.org}</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#b9ad8c]">
                {x.points.map((p) => <li key={p} className="flex gap-2"><span className="text-gold">◆</span>{p}</li>)}
              </ul>
            </div>
            <div className="flex gap-4 p-5 sm:flex-col sm:justify-center sm:border-l sm:border-gold-lo/50">
              {x.kda.map(([k, v]) => (
                <div key={k} className="text-center"><div className="font-display text-lg font-bold text-gold-hi">{v}</div><div className="font-mono text-[10px] uppercase tracking-widest text-gold/60">{k}</div></div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
