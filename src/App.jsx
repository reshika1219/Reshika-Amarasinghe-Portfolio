import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main><Hero /><Work /><Projects /><Skills /><About /><Contact /></main>
    </>
  )
}
