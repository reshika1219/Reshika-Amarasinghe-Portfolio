const links = [['highlights', 'Highlights'], ['experience', 'Experience'], ['projects', 'Projects'], ['skills', 'Skills']]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border border-line bg-white/80 p-1.5 shadow-[0_8px_30px_rgba(15,23,42,.08)] backdrop-blur-xl">
        <a href="#top" className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm font-bold text-white">R</a>
        {links.map(([id, l]) => <a key={id} href={`#${id}`} className="hidden rounded-full px-4 py-2 text-sm text-mute transition-colors hover:bg-black/5 hover:text-ink sm:block">{l}</a>)}
        <a href="#contact" className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700">Contact</a>
      </nav>
    </header>
  )
}
