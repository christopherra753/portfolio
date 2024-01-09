import React from 'react'

import { RiCodeSSlashLine, RiLinkedinBoxLine, RiGithubLine, RiMailLine } from 'react-icons/ri'
import SocialLink from './SocialLink'

function Home () {
  return (
    <section id='inicio' className='py-24 px-5'>
      <div className='max-w-5xl mx-auto flex gap-5'>
        <div className='flex-1 flex flex-col gap-5'>
          <div>
            <span className='text-sm text-gray-400 dark:text-gray-100'>Hola 👋, Soy</span>

            <h1 className='text-first dark:text-cyan-400 font-bold text-5xl sm:text-6xl'>
              Christopher Romero
            </h1>

            <p className='flex items-center font-semibold gap-2 -mt-1'>
              <RiCodeSSlashLine className='text-xl sm:text-2xl dark:text-white' />
              <span className='text-lg sm:text-xl dark:text-white'>Desarrollador frontend</span>
              <RiCodeSSlashLine className='text-xl sm:text-2xl dark:text-white' />
            </p>
          </div>

          <div className='flex flex-col gap-3 max-w-lg'>
            <p className='text-gray-500 dark:text-gray-200 font-medium text-sm sm:text-lg leading-7'>
              Estudiante apasionado por la tecnología, amante del diseño de interfaces y
              experiencia de usuario en la web.
            </p>
            <p className='text-gray-500 dark:text-gray-200 font-medium text-sm sm:text-lg leading-7'>
              Busco crecer personal y profesionalmente mejorando mis habilidades y
              colaborar en proyectos desafiantes. ✨
            </p>
          </div>

          <div className='flex items-center flex-wrap gap-2 sm:gap-5'>
            <SocialLink to='https://www.linkedin.com/in/christopher-romero-avenda%C3%B1o-9003552a6/'>
              <RiLinkedinBoxLine className='text-xl sm:text-3xl' />
              <span className='block mt-1'>Linkedin</span>
            </SocialLink>

            <SocialLink to='https://github.com/christopherra753'>
              <RiGithubLine className='text-xl sm:text-3xl' />
              <span className='block mt-1'>Github</span>
            </SocialLink>

            <SocialLink to='mailto:christopher.romero.753@gmail.com?Subject=Interesado%20en%20tu%20perfil'>
              <RiMailLine className='text-xl sm:text-3xl' />
              <span className='block mt-1'>Email</span>
            </SocialLink>

          </div>
        </div>
        <div className='self-center hidden md:block'>
          <img src='/hero.jpg' className='size-80  rounded-full mx-auto' alt='Christopher Zeroberto Romero Avendaño, desarrollador de software frontend' />
        </div>
      </div>
    </section>
  )
}

export default Home
