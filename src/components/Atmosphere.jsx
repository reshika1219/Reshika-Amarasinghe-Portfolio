import { useEffect, useRef } from 'react'

// Soft cinematic backdrop: deep gradient, slow fog, a light shaft and drifting motes. No geometric patterns.
export default function Atmosphere() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, g = c.getContext('2d')
    let w, h, raf
    const motes = Array.from({ length: 70 }, () => ({
      x: Math.random(), y: Math.random(), r: Math.random() * 1.4 + .3,
      vx: (Math.random() - .5) * .00006, vy: -(Math.random() * .00018 + .00004), p: Math.random() * 6.28,
      hue: Math.random() < .75 ? '240,205,140' : '10,200,185',
    }))
    const resize = () => { w = c.width = innerWidth; h = c.height = innerHeight }
    const draw = (t) => {
      g.clearRect(0, 0, w, h)
      for (const m of motes) {
        m.x += m.vx * 16; m.y += m.vy * 16
        if (m.y < -.02) { m.y = 1.02; m.x = Math.random() }
        const a = .15 + (Math.sin(t / 900 + m.p) + 1) * .2
        const grd = g.createRadialGradient(m.x * w, m.y * h, 0, m.x * w, m.y * h, m.r * 5)
        grd.addColorStop(0, `rgba(${m.hue},${a})`); grd.addColorStop(1, `rgba(${m.hue},0)`)
        g.fillStyle = grd; g.beginPath(); g.arc(m.x * w, m.y * h, m.r * 5, 0, 7); g.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    resize(); raf = requestAnimationFrame(draw)
    addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize) }
  }, [])
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(120% 80% at 50% -10%, #0b2236 0%, #060f1c 45%, #010a13 100%)' }} />
      <div className="fog absolute -inset-1/4 opacity-60" />
      <div className="absolute -top-1/4 right-[8%] h-[150%] w-[38%] rotate-[18deg] opacity-[.10] blur-2xl"
        style={{ background: 'linear-gradient(180deg, rgba(240,230,210,.9), transparent 70%)' }} />
      <canvas ref={ref} className="absolute inset-0" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(1,10,19,.85) 100%)' }} />
    </div>
  )
}
