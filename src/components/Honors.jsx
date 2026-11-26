import Section from './Section'
import { honors } from '../data/content'

const groups = [['Certification', 'Certifications'], ['Esports', 'Esports'], ['Academic', 'Academic']]

export default function Honors() {
  return (
    <Section id="honors" kicker="Honors & achievements" title="Honors">
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map(([g, label]) => (
          <div key={g} className="frame p-6">
            <h3 className="text-center font-display text-sm font-bold uppercase tracking-[.3em] text-gold">{label}</h3>
            <div className="gold-rule my-4" />
            <ul className="space-y-5">
              {honors.filter((h) => h.type === g).map((h) => (
                <li key={h.title} className="flex gap-3"><span className="diamond mt-[.55em] shrink-0 !h-[6px] !w-[6px]" />
                  <div><p className="font-display font-bold leading-snug text-gold-hi">{h.title}</p><p className="mt-1 text-sm text-gold-hi/60">{h.note}</p></div></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
