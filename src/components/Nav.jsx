const links = [['numbers', 'Numbers'], ['experience', 'Work'], ['projects', 'Projects'], ['skills', 'Skills']]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="brut-sm mx-auto flex max-w-3xl items-center justify-between rounded-full bg-cream px-3 py-2">
        <a href="#top" className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-lime font-display text-lg font-extrabold">R</a>
        <ul className="hidden gap-1 sm:flex">{links.map(([id, l]) => <li key={id}><a href={`#${id}`} className="rounded-full px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-cream">{l}</a></li>)}</ul>
        <a href="#contact" className="rounded-full border-2 border-ink bg-pink px-5 py-1.5 text-sm font-bold transition-transform hover:-rotate-3">Say hi ↘</a>
      </nav>
    </header>
  )
}
