import { useEffect } from 'react'
import Nav from './components/Nav'
import Progress from './components/Progress'
import { applyPalette, savedPalette } from './palette'
import Hero from './components/Hero'
import Numbers from './components/Numbers'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Offline from './components/Offline'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => { applyPalette(savedPalette()) }, [])
  return (<><Progress /><Nav /><main><Hero /><Numbers /><Experience /><Projects /><Skills /><Offline /><Contact /></main></>)
}
