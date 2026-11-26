import { LK } from '../data/lk'

// Sri Lanka as an ASCII density map built from the island's dot grid.
// Density is illustrative (hot spots echo the SLT priority cells), not real data.
const COLS = 40
const GLYPH = [' ', '.', '·', ':', '+', '#', '@']

function rng(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647 }

export function buildArt() {
  const cw = LK.w / COLS, ch = cw * 2.05, rows = Math.ceil(LK.h / ch)
  const counts = Array.from({ length: rows }, () => new Array(COLS).fill(0))
  for (const [x, y] of LK.dots) counts[Math.min(rows - 1, Math.floor(y / ch))][Math.min(COLS - 1, Math.floor(x / cw))]++
  const max = Math.max(...counts.flat())
  const r = rng(7)
  const hot = [[120, 470, 1], [150, 560, .8], [205, 420, .9], [260, 300, .7], [230, 120, .6], [300, 520, .75], [190, 250, .5]]
  return counts.map((row, ry) => {
    const runs = []
    row.forEach((n, cx) => {
      const presence = Math.min(1, n / (max * .75))
      let level = 0, g = ' '
      if (presence > .08) {
        const x = (cx + .5) * cw, y = (ry + .5) * ch
        const field = Math.max(...hot.map(([hx, hy, w]) => w * Math.exp(-(((x - hx) ** 2 + (y - hy) ** 2) / (2 * 70 ** 2)))))
        const d = presence * (.22 + .78 * Math.min(1, field + r() * .22))
        level = Math.max(1, Math.min(6, Math.ceil(d * 6)))
        g = GLYPH[level]
      }
      const last = runs[runs.length - 1]
      if (last && last.l === level) last.t += g; else runs.push({ t: g, l: level })
    })
    return runs
  })
}
