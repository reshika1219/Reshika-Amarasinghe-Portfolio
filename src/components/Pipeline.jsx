import Section from './Section'

const stages = [
  ['INPUT', 'Households + 141,000 FDPs', 'All of Sri Lanka', 'text-cyan'],
  ['GRID', '~14,000 hex cells', 'Spatial aggregation', 'text-cyan'],
  ['FEATURES', '51 raw → 17 engineered', 'ML-ready datasets', 'text-amber'],
  ['MODEL', 'Predict & validate', 'Purchase prediction', 'text-amber'],
  ['OUTPUT', 'Top 100 priority cells', 'Maps + interactive reports', 'text-accent'],
]

export default function Pipeline() {
  return (
    <Section id="pipeline" cmd="cat slt-pipeline.md">
      <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">National-scale geospatial pipeline</h3>
      <p className="mt-3 text-dim">Sri Lanka Telecom · The Embryo (R&D) · ML Engineer Intern · Dec 2025 – Jun 2026</p>
      <ol className="mt-10 grid gap-3 md:grid-cols-5">
        {stages.map(([k, t, d, c], i) => (
          <li key={k} className="relative rounded-lg border border-line bg-surface p-4">
            <p className={`font-mono text-[11px] ${c}`}>{String(i + 1).padStart(2, '0')} · {k}</p>
            <p className="mt-3 text-sm font-medium leading-snug">{t}</p>
            <p className="mt-2 text-xs text-dim">{d}</p>
            {i < stages.length - 1 && <span aria-hidden className="absolute -right-[13px] top-1/2 z-10 hidden -translate-y-1/2 font-mono text-dim md:block">→</span>}
          </li>
        ))}
      </ol>
    </Section>
  )
}
