const links = [['work', 'Work'], ['projects', 'Projects'], ['skills', 'Skills'], ['about', 'About'], ['contact', 'Contact']]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg">Reshika Amarasinghe</a>
        <ul className="hidden gap-7 text-sm md:flex">{links.map(([id, l]) => <li key={id}><a href={`#${id}`} className="link-u">{l}</a></li>)}</ul>
        <a href="#contact" className="rounded-full bg-ink px-4 py-1.5 text-sm text-paper transition-colors hover:bg-accent">Hire me</a>
      </nav>
    </header>
  )
}
