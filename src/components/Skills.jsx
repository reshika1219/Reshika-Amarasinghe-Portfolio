import Section from './Section'
import { skills } from '../data/content'

export default function Skills() {
  const obj = skills.map((g) => [g.cat.toLowerCase().replace(/[^a-z]+/g, '_'), g.items])
  return (
    <Section id="skills" cmd="cat skills.json">
      <pre className="whitespace-pre-wrap break-words rounded-lg border border-line bg-surface p-6 font-mono text-sm leading-7 sm:p-8">
        <code>
          <span className="text-dim">{'{'}</span>{'\n'}
          {obj.map(([k, items], gi) => (
            <span key={k}>
              {'  '}<span className="text-cyan">"{k}"</span><span className="text-dim">: [</span>
              {items.map(([n, t], i) => <span key={n}><span className={t === 0 ? 'text-accent' : t === 1 ? 'text-fg' : 'text-dim'}>"{n}"</span>{i < items.length - 1 && <span className="text-dim">, </span>}</span>)}
              <span className="text-dim">]{gi < obj.length - 1 ? ',' : ''}</span>{'\n'}
            </span>
          ))}
          <span className="text-dim">{'}'}</span>
        </code>
      </pre>
      <p className="mt-3 font-mono text-xs text-dim"><span className="text-accent">green</span> = daily · white = proficient · gray = familiar</p>
    </Section>
  )
}
