import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Mouse-only 3D tilt toward the pointer.
export default function Tilt({ children, className = '', max = 6 }) {
  const x = useMotionValue(0), y = useMotionValue(0)
  const cfg = { stiffness: 220, damping: 18 }
  const rotateX = useSpring(useTransform(y, [-.5, .5], [max, -max]), cfg)
  const rotateY = useSpring(useTransform(x, [-.5, .5], [-max, max]), cfg)
  const move = (e) => {
    if (e.pointerType !== 'mouse') return
    const b = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - b.left) / b.width - .5); y.set((e.clientY - b.top) / b.height - .5)
  }
  const reset = () => { x.set(0); y.set(0) }
  return <motion.div onPointerMove={move} onPointerLeave={reset} style={{ rotateX, rotateY, transformPerspective: 900 }} className={className}>{children}</motion.div>
}
