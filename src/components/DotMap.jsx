import { useEffect, useRef } from 'react'
import { LK } from '../data/lk'

// Illustrative dot-matrix of Sri Lanka: a seeded subset of 100 dots pulses to echo the "top 100 priority cells".
// Move the pointer over it and nearby dots swell like a magnifying lens.
function rng(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647 }

export default function DotMap() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, g = c.getContext('2d'), dpr = Math.min(devicePixelRatio || 1, 2)
    c.width = LK.w * dpr; c.height = LK.h * dpr
    g.scale(dpr, dpr)
    const css = getComputedStyle(document.documentElement)
    const col = (n, d) => css.getPropertyValue(n).trim() || d
    const r = rng(42)
    const centers = [[120, 470], [150, 560], [205, 420], [260, 300], [230, 120], [300, 520]]
    const cand = []
    LK.dots.forEach(([x, y], i) => {
      const d = Math.min(...centers.map(([cx, cy]) => Math.hypot(x - cx, y - cy)))
      if (r() < Math.max(0, 1 - d / 120)) cand.push(i)
    })
    for (let i = cand.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [cand[i], cand[j]] = [cand[j], cand[i]] }
    const hot = new Map(cand.slice(0, 100).map((i) => [i, r() * 6.28]))
    let mx = -999, my = -999, raf
    const move = (e) => { const b = c.getBoundingClientRect(); mx = (e.clientX - b.left) * LK.w / b.width; my = (e.clientY - b.top) * LK.h / b.height }
    const leave = () => { mx = my = -999 }
    c.addEventListener('pointermove', move); c.addEventListener('pointerleave', leave)
    const draw = (t) => {
      const lime = col('--color-lime', '#c6f432'), cream = col('--color-cream', '#f4efe6'), pink = col('--color-pink', '#ff5fa2')
      g.clearRect(0, 0, LK.w, LK.h)
      LK.dots.forEach(([x, y], i) => {
        const near = Math.max(0, 1 - Math.hypot(x - mx, y - my) / 60)
        const isHot = hot.has(i)
        const k = isHot ? (Math.sin(t / 650 + hot.get(i)) + 1) / 2 : 0
        const rad = isHot ? 2.6 + k * 2.4 + near * 3 : 1.5 + near * 4
        g.fillStyle = near > .05 ? pink : isHot ? lime : cream
        g.globalAlpha = isHot ? 1 : .28 + near * .7
        g.beginPath(); g.arc(x, y, rad, 0, 7); g.fill()
      })
      g.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); c.removeEventListener('pointermove', move); c.removeEventListener('pointerleave', leave) }
  }, [])
  return <canvas ref={ref} role="img" aria-label="Dot map of Sri Lanka with 100 highlighted priority areas" style={{ aspectRatio: `${LK.w}/${LK.h}` }} className="mx-auto h-auto w-full max-w-[380px] touch-pan-y" />
}
