// Click the "R" in the nav to cycle palettes. Persisted in localStorage.
export const palettes = [
  { name: 'Volt', lime: '#c6f432', pink: '#ff5fa2', blue: '#2b50ff', tang: '#ff6a2b', cream: '#f4efe6' },
  { name: 'Sunset', lime: '#ffd23f', pink: '#ff7096', blue: '#6a4cff', tang: '#ff9f1c', cream: '#fff3e4' },
  { name: 'Mint', lime: '#8df0cc', pink: '#ff8fab', blue: '#1b6cff', tang: '#ffb84d', cream: '#eaf4ee' },
  { name: 'Grape', lime: '#e0ff6b', pink: '#ff7ad9', blue: '#7c3aed', tang: '#ff7a59', cream: '#f1ecf8' },
]

export function applyPalette(i) {
  const p = palettes[i % palettes.length], r = document.documentElement.style
  for (const k of ['lime', 'pink', 'blue', 'tang', 'cream']) r.setProperty(`--color-${k}`, p[k])
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', p.cream)
  localStorage.setItem('palette', String(i % palettes.length))
  return p.name
}

export const savedPalette = () => Number(localStorage.getItem('palette') || 0)
