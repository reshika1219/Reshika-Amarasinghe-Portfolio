const links = [['pipeline', 'pipeline'], ['experience', 'experience'], ['projects', 'projects'], ['skills', 'skills'], ['contact', 'contact']]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 font-mono text-xs">
        <a href="#top" className="text-accent">reshika@portfolio<span className="text-dim">:~$</span></a>
        <ul className="hidden gap-6 md:flex">{links.map(([id, l]) => <li key={id}><a href={`#${id}`} className="link-u text-dim">./{l}</a></li>)}</ul>
      </nav>
    </header>
  )
}
