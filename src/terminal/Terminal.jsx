import { useCallback, useEffect, useRef, useState } from 'react'
import { commands, names } from './commands'
import { Dim } from './ui'

const themes = [['red', '#ff3b3b'], ['green', '#3fb950'], ['amber', '#e3b341'], ['blue', '#58a6ff'], ['magenta', '#f778ba']]
const chips = ['neofetch', 'about', 'research', 'work', 'experience', 'stack', 'education', 'honors', 'contact', 'cv', 'help', 'theme']
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
let uid = 0

function applyTheme(i) {
  document.documentElement.style.setProperty('--accent', themes[i % themes.length][1])
  localStorage.setItem('theme', String(i % themes.length))
  return themes[i % themes.length][0]
}

const Prompt = () => <span className="whitespace-nowrap"><span className="acc">reshika</span><span className="text-dim">@sliit</span><span className="text-dim">:</span><span className="text-key">~</span><span className="text-dim">$&nbsp;</span></span>

export default function Terminal() {
  const [blocks, setBlocks] = useState([])
  const [typing, setTyping] = useState(null)
  const [busy, setBusy] = useState(true)
  const [value, setValue] = useState('')
  const scroller = useRef(null), inputRef = useRef(null), skip = useRef(false), hist = useRef([]), hi = useRef(-1), theme = useRef(Number(localStorage.getItem('theme') || 0))

  useEffect(() => { applyTheme(theme.current) }, [])

  const push = useCallback((b) => setBlocks((bs) => [...bs, { id: ++uid, ...b }]), [])

  const exec = useCallback((text) => {
    const raw = text.trim()
    if (!raw) { push({ cmd: '' }); return }
    hist.current.push(raw); hi.current = hist.current.length
    let [name, ...args] = raw.split(/\s+/)
    name = name.toLowerCase()
    if (name === 'cat' && args[0]) { name = args[0].replace(/\.md$/, '').toLowerCase(); args = [] }
    if (name === 'projects') name = 'work'
    if (name === 'skills') name = 'stack'
    if (name === 'clear') { setBlocks([]); return }
    if (name === 'theme') { theme.current = (theme.current + 1) % themes.length; push({ cmd: raw, out: <Dim>theme: {applyTheme(theme.current)}</Dim> }); return }
    if (name === 'github' || name === 'linkedin') { const url = commands.contact && (name === 'github' ? 'https://github.com/reshika1219' : 'https://linkedin.com/in/reshika-amarasinghe'); window.open(url, '_blank', 'noopener'); push({ cmd: raw, out: <Dim>opening {url}…</Dim> }); return }
    const fn = commands[name]
    push({ cmd: raw, out: fn ? fn(args) : <div><span className="text-dim">zsh: command not found: </span>{name} <Dim>(type help)</Dim></div> })
  }, [push])

  const typeAndRun = useCallback(async (text, speed = 1) => {
    setBusy(true)
    for (let i = 1; i <= text.length; i++) { setTyping(text.slice(0, i)); await sleep(skip.current ? 0 : (26 + Math.random() * 40) * speed) }
    await sleep(skip.current ? 0 : 240)
    setTyping(null); exec(text); setBusy(false)
  }, [exec])

  // boot sequence
  const booted = useRef(false)
  useEffect(() => {
    if (booted.current) return; booted.current = true
    const stop = () => { skip.current = true }
    addEventListener('keydown', stop); addEventListener('pointerdown', stop)
    ;(async () => {
      await sleep(500)
      await typeAndRun('neofetch')
      await sleep(skip.current ? 0 : 900)
      push({ out: <Dim>Type <span className="acc">help</span> or tap a command below. Try <span className="acc">research</span>, <span className="acc">work</span> or <span className="acc">project 2</span>.</Dim> })
      skip.current = false
    })()
    return () => { removeEventListener('keydown', stop); removeEventListener('pointerdown', stop) }
  }, [typeAndRun, push])

  useEffect(() => { const el = scroller.current; if (el) el.scrollTop = el.scrollHeight }, [blocks, typing])

  const submit = (e) => {
    e.preventDefault(); const v = value; setValue(''); exec(v)
  }
  const onKey = (e) => {
    if (e.key === 'ArrowUp') { e.preventDefault(); if (hi.current > 0) { hi.current--; setValue(hist.current[hi.current] || '') } }
    else if (e.key === 'ArrowDown') { e.preventDefault(); if (hi.current < hist.current.length - 1) { hi.current++; setValue(hist.current[hi.current]) } else { hi.current = hist.current.length; setValue('') } }
    else if (e.key === 'Tab') { e.preventDefault(); const m = names.filter((n) => n.startsWith(value.toLowerCase())); if (m.length === 1) setValue(m[0] + ' ') }
    else if (e.key.toLowerCase() === 'l' && e.ctrlKey) { e.preventDefault(); setBlocks([]) }
  }
  const tap = (c) => { if (busy) return; skip.current = false; typeAndRun(c, .45) }

  return (
    <main className="mx-auto flex h-full max-w-6xl flex-col p-0 sm:p-6">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden border-line bg-win shadow-[0_0_80px_rgba(0,0,0,.6)] sm:rounded-xl sm:border" onClick={() => { if (!getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true }) }}>
        <div className="flex shrink-0 items-center gap-2 border-b border-line bg-bar px-4 py-3">
          <i className="h-3 w-3 rounded-full bg-[#ff5f56]" /><i className="h-3 w-3 rounded-full bg-[#ffbd2e]" /><i className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <h1 className="flex-1 pr-14 text-center text-xs font-normal text-dim">reshika@sliit: ~</h1>
        </div>

        <div ref={scroller} role="log" aria-live="polite" className="scroll min-h-0 flex-1 overflow-y-auto px-4 py-4 text-[13px] leading-[1.7] sm:px-6 sm:text-sm">
          {blocks.map((b) => (
            <div key={b.id} className="mb-3">
              {b.cmd !== undefined && <div><Prompt />{b.cmd}</div>}
              {b.out && <div className={b.cmd ? 'mt-3' : ''}>{b.out}</div>}
            </div>
          ))}
          <form onSubmit={submit} className="flex flex-wrap items-center">
            <Prompt />
            {busy ? <span>{typing}<span className="caret" /></span> : (
              <label className="relative flex min-w-[8ch] flex-1 items-center">
                <span className="sr-only">Type a command</span>
                <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={onKey} autoComplete="off" autoCapitalize="off" autoCorrect="off" spellCheck={false} enterKeyHint="go"
                  className="w-full bg-transparent text-fg caret-transparent outline-none" />
                <span aria-hidden className="pointer-events-none absolute left-0 top-0 whitespace-pre"><span className="invisible">{value}</span><span className="caret" /></span>
              </label>
            )}
          </form>
        </div>

        <div className="flex shrink-0 gap-2 overflow-x-auto border-t border-line bg-bar px-3 py-2.5 sm:px-4" aria-label="Quick commands">
          {chips.map((c) => (
            <button key={c} onClick={(e) => { e.stopPropagation(); tap(c) }} disabled={busy} className="shrink-0 rounded border border-line px-3 py-1.5 text-xs text-dim transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] disabled:opacity-40">{c}</button>
          ))}
        </div>
      </div>
    </main>
  )
}
