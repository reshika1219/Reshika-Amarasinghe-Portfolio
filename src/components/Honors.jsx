import Section from './Section'
import { honors } from '../data/content'

const groups = ['Certification', 'Esports', 'Academic']

export default function Honors() {
  return (
    <Section id="honors" kicker="Recognition" title="Honors">
      <div className="grid gap-12 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g}>
            <h3 className="border-b border-gold-lo/50 pb-2 text-[11px] font-semibold uppercase tracking-[.3em] text-gold">{g === 'Certification' ? 'Certifications' : g}</h3>
            <ul className="mt-5 space-y-5">
              {honors.filter((h) => h.type === g).map((h) => (
                <li key={h.title}><p className="font-display font-bold text-gold-hi">{h.title}</p><p className="mt-1 text-sm text-gold-hi/60">{h.note}</p></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
