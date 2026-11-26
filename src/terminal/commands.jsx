import { profile, experience, projects, education, honors } from '../data/content'
import { buildArt } from './ascii'
import { Out, Row, Head, Dim, A } from './ui'

const art = buildArt()
const CV = 'Reshika-Amarasinghe-CV.pdf'

// Work list: labels and one-liners mirror the GitHub profile README.
export const work = [
  { key: 'kg', label: 'Pedagogy-Typed KGs', line: 'GNN + LLM, verified claim by claim' },
  { key: 'slt', label: 'SLT Geospatial', line: '141,000 points · 14,000 hexagons · 51→17' },
  { key: 'agentic', label: 'Agentic AI', line: 'multi-agent RAG · FAISS + BM25' },
  { key: 'campus', label: 'Smart Campus Hub', line: 'Spring Boot · React · OAuth 2.0 · QR' },
  { key: 'stats', label: 'Viz & Comprehension', line: '471-participant A/B · >10x accuracy' },
  { key: 'churn', label: 'Churn Prediction', line: 'XGBoost · AUC > 0.99' },
  { key: 'bi', label: 'Airline BI', line: 'star schema · SSAS · Power BI' },
  { key: 'yaka', label: 'Yakadabadu', line: 'MERN · Google Maps API · route scoring' },
]

function Neofetch() {
  return (
    <div className="grid gap-x-8 gap-y-4 lg:grid-cols-[auto_1fr]">
      <pre aria-hidden className="line select-none self-center text-[7px] leading-[1.02] sm:text-[10.5px] sm:leading-[1.05]">
        {art.map((runs, i) => <div key={i}>{runs.map((r, j) => <span key={j} className={`shade${r.l}`}>{r.t}</span>)}{' '}</div>)}
      </pre>
      <div className="min-w-0 self-center text-[13px] leading-[1.7] sm:text-sm">
        <Out>
          <div className="flex items-center gap-2"><span className="acc">reshika@sliit</span><span aria-hidden className="flex-1 border-t border-line" /></div>
          <div className="pl-2 text-white">Reshika Amarasinghe</div>
          <Row k="Role">Data Science undergraduate, Year 4</Row>
          <Row k="University">SLIIT, Sri Lanka</Row>
          <Row k="Focus">Geospatial · Adaptive learning · Verified AI</Row>
          <Row k="Now">ML Engineer intern, SLT R&amp;D</Row>
          <Row k="Building">Pedagogy-typed knowledge graphs</Row>
          <div className="h-2" />
          <div className="flex items-center gap-2 text-xs"><span className="text-key">Density</span>{[1, 2, 3, 4, 5, 6].map((l) => <span key={l} className={`shade${l}`}>███</span>)}<Dim>low → high</Dim></div>
        </Out>
      </div>
    </div>
  )
}

const help = [
  ['neofetch', 'who I am, at a glance'], ['about', 'the short story'], ['research', 'what I am building now'], ['work', 'projects, numbered'],
  ['project <n>', 'details, e.g. project 2'], ['experience', 'internships and jobs'], ['stack', 'languages and tools'], ['education', 'where I study'],
  ['honors', 'certificates and trophies'], ['contact', 'say hello'], ['cv', 'download my CV'], ['theme', 'change accent colour'], ['clear', 'clear the screen'],
]

function projectDetail(n) {
  const item = work[n - 1]
  if (!item) return <Dim>project: no such project “{n}”. Try work.</Dim>
  if (item.key === 'slt') {
    const x = experience[0]
    return (
      <Out>
        <div className="font-bold text-white">SLT Geospatial Pipeline</div>
        <Dim>{x.org} · {x.date}</Dim>
        <div className="h-1" />
        {x.points.map((p) => <div key={p}><span className="acc">+</span> {p}</div>)}
        <div className="mt-1 text-key">141,000 FDPs → ~14,000 hex cells → 51 → 17 features → top 100 cells</div>
      </Out>
    )
  }
  const p = projects.find((q) => q.id === item.key)
  return (
    <Out>
      <div className="font-bold text-white">{p.title}</div>
      <Dim>{p.year} · {p.status}</Dim>
      <div className="mt-1">{p.summary}</div>
      {[p.q, p.w, p.e, p.r].map(([h, d]) => <div key={h}><span className="acc">+</span> <span className="text-white">{h}.</span> <span className="text-dim">{d}</span></div>)}
      <div className="mt-1"><span className="text-key">stack</span> {p.stack.join(' · ')}</div>
    </Out>
  )
}

export const commands = {
  help: () => (
    <Out>
      <Dim>Available commands. Tap one below or type it.</Dim>
      {help.map(([c, d]) => <Row key={c} k={c}>{d}</Row>)}
      <Dim>Tip: ↑ ↓ for history, Tab to complete, Ctrl+L to clear.</Dim>
    </Out>
  ),
  neofetch: () => <Neofetch />,
  whoami: () => <Out><div>reshika-amarasinghe</div><Dim>Data Science undergraduate · ML engineer</Dim></Out>,
  about: () => <Out><div className="max-w-3xl leading-relaxed">{profile.summary}</div></Out>,
  research: () => (
    <Out>
      <Head>Research</Head>
      <Row k="Pipeline">Knowledge Graph → GNN → LLM → Symbolic Critic</Row>
      <Row k="Verified by">factual entailment + Bloom-level fit</Row>
      <div className="mt-2 max-w-3xl text-dim">Final-year project: an adaptive learning framework that models learner knowledge with GNNs and pedagogy-typed knowledge graphs, then checks every LLM explanation claim by claim before it reaches the learner. Try <span className="acc">project 1</span>.</div>
    </Out>
  ),
  work: () => (
    <Out>
      <Head>Work</Head>
      {work.map((w, i) => <Row key={w.key} k={`${i + 1}. ${w.label}`}>{w.line}</Row>)}
      <Dim>Type project &lt;n&gt; for details.</Dim>
    </Out>
  ),
  project: (args) => projectDetail(Number(args[0]) || work.findIndex((w) => w.label.toLowerCase().includes((args.join(' ') || '~').toLowerCase())) + 1),
  experience: () => (
    <Out>
      <Head>Experience</Head>
      {experience.flatMap((x) => [
        <div key={x.org} className="mt-1"><span className="text-white">{x.role}</span> <Dim>@</Dim> <span className="acc">{x.org}</span></div>,
        <Dim key={x.org + 'd'}>{x.date}</Dim>,
        ...x.points.map((p) => <div key={p} className="max-w-3xl"><span className="acc">+</span> {p}</div>),
      ])}
    </Out>
  ),
  stack: () => (
    <Out>
      <Head>Stack</Head>
      <Row k="Languages">Python, Java, R, JavaScript, SQL, PL/SQL, C, C++</Row>
      <Row k="Intelligence">Pandas, NumPy, Scikit-learn, TensorFlow, XGBoost, GeoPandas, Matplotlib, Seaborn</Row>
      <Row k="Interfaces">React, Vite, Tailwind, Spring Boot, Node.js, Express, Streamlit</Row>
      <Row k="Data">MySQL, PostgreSQL, MongoDB, SQL Server, Spark, Hive, Hadoop, Power BI</Row>
      <Row k="Cloud">AWS, Azure, Git, GitHub, VS Code, Colab, Android Studio</Row>
    </Out>
  ),
  education: () => (
    <Out>
      <Head>Education</Head>
      {education.flatMap((e) => [<div key={e.name} className="mt-1"><span className="text-white">{e.name}</span> <Dim>· {e.detail}</Dim></div>, <Dim key={e.name + 'm'}>{e.meta}</Dim>])}
    </Out>
  ),
  honors: () => (
    <Out>
      {['Certification', 'Esports', 'Academic'].flatMap((g) => [
        <Head key={g}>{g === 'Certification' ? 'Certifications' : g}</Head>,
        ...honors.filter((h) => h.type === g).map((h) => <Row key={h.title} k={h.title}>{h.note}</Row>),
      ])}
    </Out>
  ),
  contact: () => (
    <Out>
      <Head>Contact</Head>
      <Row k="Email"><A href={`mailto:${profile.email}`}>{profile.email}</A></Row>
      <Row k="GitHub"><A href={profile.github}>github.com/reshika1219</A></Row>
      <Row k="LinkedIn"><A href={profile.linkedin}>linkedin.com/in/reshika-amarasinghe</A></Row>
      <Dim>Open to internships, graduate roles and research collaborations.</Dim>
    </Out>
  ),
  cv: () => <Out><div><span className="acc">↓</span> <A href={CV} download>{CV}</A></div><Dim>Click to download.</Dim></Out>,
  ls: () => <Out><div className="flex flex-wrap gap-x-5 gap-y-1">{['about.md', 'research.md', 'work/', 'experience.md', 'stack.md', 'education.md', 'honors.md', 'contact.md', CV].map((f) => <span key={f} className={f.endsWith('/') ? 'acc' : ''}>{f}</span>)}</div></Out>,
  sudo: (args) => /hire/.test(args.join(' '))
    ? <Out><Dim>[sudo] password for recruiter: ********</Dim><div className="acc">Access granted. Reshika has been added to your shortlist.</div><div>Next step: <A href={`mailto:${profile.email}`}>say hello</A></div></Out>
    : <Out><div>recruiter is not in the sudoers file. This incident will be reported.</div></Out>,
  exit: () => <Out><Dim>logout: there is no escape. Try </Dim><span className="acc">contact</span></Out>,
}
export const names = Object.keys(commands).concat(['clear', 'theme'])
