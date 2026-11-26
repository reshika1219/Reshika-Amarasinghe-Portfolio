import { useEffect, useRef } from 'react'
import { LK } from '../data/lk'

// Illustrative dot-matrix of Sri Lanka. A seeded subset pulses to echo "top priority cells" from the SLT pipeline.
function rng(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647 }

export default function DotMap() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, g = c.getContext('2d'), dpr = Math.min(devicePixelRatio || 1, 2)
    c.width = LK.w * dpr; c.height = LK.h * dpr
    g.scale(dpr, dpr)
    const r = rng(42)
    const centers = [[120, 470], [150, 560], [205, 420], [260, 300], [230, 120], [300, 520]]
    const cand = []
    LK.dots.forEach(([x, y], i) => {
      const d = Math.min(...centers.map(([cx, cy]) => Math.hypot(x - cx, y - cy)))
      if (r() < Math.max(0, 1 - d / 120)) cand.push(i)
    })
    for (let i = cand.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [cand[i], cand[j]] = [cand[j], cand[i]] }
    const hot = new Map(cand.slice(0, 100).map((i) => [i, r() * 6.28]))
    let raf
    const draw = (t) => {
      g.clearRect(0, 0, LK.w, LK.h)
      LK.dots.forEach(([x, y], i) => {
        if (hot.has(i)) return
        g.fillStyle = 'rgba(20,24,28,.22)'; g.beginPath(); g.arc(x, y, 1.5, 0, 7); g.fill()
      })
      hot.forEach((ph, i) => {
        const [x, y] = LK.dots[i], k = (Math.sin(t / 700 + ph) + 1) / 2
        g.fillStyle = `rgba(15,107,99,${.25 + k * .2})`; g.beginPath(); g.arc(x, y, 3.2 + k * 2.4, 0, 7); g.fill()
        g.fillStyle = '#0f6b63'; g.beginPath(); g.arc(x, y, 2.2, 0, 7); g.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [])
  return <canvas ref={ref} role="img" aria-label="Dot map of Sri Lanka with highlighted priority areas" style={{ aspectRatio: `${LK.w}/${LK.h}` }} className="h-full max-h-[78vh] w-auto" />
}
