import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglePalette } from './store/uiSlice'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Services from './components/Services'
import Training from './components/Training'
import Contact from './components/Contact'
import Palette from './components/Palette'

const App = () => {
  const dispatch = useDispatch()
  const theme = useSelector(s => s.ui.theme)

  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])

  useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); dispatch(togglePalette()) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dispatch])

  return (
    <>
      <div className="orbs" aria-hidden="true"><i /><i /><i /></div>
      <Nav />
      <main id="top">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Services />
        <Training />
        <Contact />
      </main>
      <footer className="foot">Built with React, Redux Toolkit and Redux Saga by Ganesh B.</footer>
      <Palette />
    </>
  )
}

export default App;