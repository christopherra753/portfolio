import React, { useEffect, useState } from 'react'
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine } from 'react-icons/ri'
import NavBarLink from './NavBarLink'

function NavBar () {
  const [menu, setMenu] = useState(false)
  const [theme, setTheme] = useState('light')

  const handleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  return (
    <nav className='h-20 p-5 fixed w-full top-0 z-10 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md'>
      <div className='max-w-5xl h-full mx-auto flex  items-center justify-between'>
        <img className='size-10 rounded-full' src='/hero.jpg' alt='' />
        <ul className={`z-10 fixed top-0 right-0 bg-gray-100 w-1/2 h-screen flex flex-col items-center justify-center gap-5 transition-all ${menu ? 'translate-x-0' : 'translate-x-full'} md:static md:h-auto md:w-auto md:bg-transparent md:flex-row md:translate-x-0`}>
          <NavBarLink setMenu={setMenu} to='inicio' label='Inicio' />
          <NavBarLink setMenu={setMenu} to='experiencia' label='Experiencia' />
          <NavBarLink setMenu={setMenu} to='proyectos' label='Proyectos' />
          <NavBarLink setMenu={setMenu} to='contacto' label='Contacto' />
        </ul>
        <div className='flex items-center gap-2'>
          <a
            href='/curriculum.pdf'
            download='curriculum'
            className='bg-orange-500 text-sm sm:text-base text-white px-4 py-1 rounded'
          >Descargar CV
          </a>
          <button onClick={handleTheme} className='group relative rounded-lg p-1'>
            <RiMoonLine className='block dark:hidden text-3xl' />
            <RiSunLine className='hidden dark:block text-3xl text-white' />
            <p className='absolute hidden group-hover:block -bottom-4 left-1/2 -translate-x-1/2 text-xs min-w-max pointer-events-none font-semibold'>
              <span className='block dark:hidden text-black'>Dark Mode</span>
              <span className='hidden dark:block text-white'>Light Mode</span>
            </p>
          </button>
          <button onClick={() => setMenu(!menu)} className='block md:hidden z-10'>
            <RiMenuLine className={`${menu ? 'hidden' : 'block'} text-3xl dark:text-white`} />
            <RiCloseLine className={`${menu ? 'block' : 'hidden'} text-3xl`} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
