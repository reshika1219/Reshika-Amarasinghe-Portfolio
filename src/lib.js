// Tiny WebAudio synth so there are no audio assets. Muted by default.
let ctx = null
let enabled = false
export const isSoundOn = () => enabled
export function setSound(on) {
  enabled = on
  if (on && !ctx) ctx = new (window.AudioContext || window.webkitAudioContext)()
  if (on && ctx?.state === 'suspended') ctx.resume()
}
function tone(freq, dur = 0.08, type = 'sine', vol = 0.05, slideTo) {
  if (!enabled || !ctx) return
  const o = ctx.createOscillator(), g = ctx.createGain()
  o.type = type
  o.frequency.setValueAtTime(freq, ctx.currentTime)
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, ctx.currentTime + dur)
  g.gain.setValueAtTime(vol, ctx.currentTime)
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur)
  o.connect(g).connect(ctx.destination)
  o.start(); o.stop(ctx.currentTime + dur)
}
export const sfx = {
  hover: () => tone(880, 0.05, 'triangle', 0.025),
  click: () => { tone(520, 0.09, 'square', 0.03, 780); },
  select: () => { tone(392, 0.12, 'triangle', 0.05); setTimeout(() => tone(587, 0.16, 'triangle', 0.05), 70) },
  victory: () => [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => tone(f, 0.25, 'triangle', 0.06), i * 110)),
}
