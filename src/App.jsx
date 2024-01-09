import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Experiencie from './components/Experiencie'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App () {
  return (
    <div className='bg-white dark:bg-neutral-800 overflow-hidden'>
      <NavBar />
      <main className='mt-20'>
        <Home />
        <Experiencie />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
