import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null), ring = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    document.body.classList.add('lol-cursor')
    let x = 0, y = 0, rx = 0, ry = 0, raf
    const move = (e) => {
      x = e.clientX; y = e.clientY
      dot.current.style.transform = `translate(${x}px,${y}px) rotate(45deg)`
      const hot = e.target.closest('a,button,[data-hot]')
      ring.current.dataset.hot = hot ? '1' : '0'
    }
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18
      const s = ring.current.dataset.hot === '1' ? 1.6 : 1
      ring.current.style.transform = `translate(${rx}px,${ry}px) rotate(45deg) scale(${s})`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); document.body.classList.remove('lol-cursor') }
  }, [])
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden [@media(pointer:fine)]:block">
      <div ref={ring} data-hot="0" className="absolute -left-4 -top-4 h-8 w-8 border border-hex/80 transition-[border-color] data-[hot='1']:border-gold" />
      <div ref={dot} className="absolute -left-1 -top-1 h-2 w-2 bg-gold shadow-[0_0_10px_#c8aa6e]" />
    </div>
  )
}
