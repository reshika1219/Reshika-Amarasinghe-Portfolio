import { Children } from 'react'

// Staggered line-by-line reveal for command output.
export function Out({ children, step = 32 }) {
  return Children.toArray(children).map((c, i) => <div key={i} className="line" style={{ animationDelay: `${i * step}ms` }}>{c}</div>)
}

// "Key ........ value" row with dotted leader, like the neofetch block.
export function Row({ k, children }) {
  return (
    <div className="flex flex-col gap-x-2 sm:flex-row sm:flex-wrap sm:items-baseline">
      <span className="text-key">{k}</span>
      <span aria-hidden className="hidden min-w-4 flex-1 -translate-y-[3px] border-b border-dotted border-line sm:block" />
      <span className="max-w-full pl-3 text-fg sm:pl-0 sm:text-right">{children}</span>
    </div>
  )
}

export function Head({ children }) {
  return (
    <div className="mt-3 flex items-center gap-2">
      <span className="acc whitespace-nowrap">— {children}</span>
      <span aria-hidden className="flex-1 border-t border-line" />
    </div>
  )
}

export const Dim = ({ children }) => <span className="text-dim">{children}</span>
export const A = ({ href, children, ...p }) => <a href={href} className="tlink" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" {...p}>{children}</a>
