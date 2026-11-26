import { useEffect, useRef } from 'react'

// Hextech hex grid with a glow that follows the pointer + drifting embers.
export default function HexCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, g = c.getContext('2d')
    let w, h, raf, mx = -999, my = -999
    const R = 38
    const embers = Array.from({ length: 50 }, () => ({ x: Math.random(), y: Math.random(), s: Math.random() * 0.0004 + 0.0001, r: Math.random() * 1.6 + .4, p: Math.random() * 6 }))
    const resize = () => { w = c.width = innerWidth; h = c.height = innerHeight }
    const move = (e) => { mx = e.clientX; my = e.clientY }
    const hex = (x, y) => { g.beginPath(); for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i + Math.PI / 6; g.lineTo(x + R * Math.cos(a), y + R * Math.sin(a)) } g.closePath() }
    const draw = (t) => {
      g.clearRect(0, 0, w, h)
      const dx = R * Math.sqrt(3), dy = R * 1.5
      for (let row = -1; row * dy < h + R; row++) {
        for (let col = -1; col * dx < w + R; col++) {
          const x = col * dx + (row % 2 ? dx / 2 : 0), y = row * dy
          const d = Math.hypot(x - mx, y - my)
          const near = Math.max(0, 1 - d / 260)
          const pulse = (Math.sin(t / 1800 + col * .5 + row * .7) + 1) / 2 * .05
          g.strokeStyle = `rgba(10,200,185,${0.05 + pulse + near * .55})`
          g.lineWidth = 1 + near
          hex(x, y); g.stroke()
          if (near > .6) { g.fillStyle = `rgba(200,170,110,${(near - .6) * .18})`; g.fill() }
        }
      }
      for (const e of embers) {
        e.y -= e.s * 16; if (e.y < 0) { e.y = 1; e.x = Math.random() }
        g.fillStyle = `rgba(240,200,120,${.3 + Math.sin(t / 600 + e.p) * .25})`
        g.beginPath(); g.arc(e.x * w, e.y * h, e.r, 0, 7); g.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    resize(); raf = requestAnimationFrame(draw)
    addEventListener('resize', resize); addEventListener('mousemove', move)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); removeEventListener('mousemove', move) }
  }, [])
  return <canvas ref={ref} className="pointer-events-none fixed inset-0 -z-10 opacity-80" />
}
