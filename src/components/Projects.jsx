import React from 'react'
import { RiFoldersLine } from 'react-icons/ri'
import ProjectItem from './ProjectItem'
import ReactIcon from '../icons/ReactIcon'
import TailwindIcon from '../icons/TailwindIcon'

function Projects () {
  return (
    <section id='proyectos' className='py-24 px-5'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl flex items-center gap-2 mb-10'>
          <span className='text-cyan-800 dark:text-cyan-400 font-bold'>Proyectos</span>
          <RiFoldersLine className='text-cyan-800 dark:text-cyan-400 mt-1.5 size-7' />
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          <ProjectItem
            title='Tic Tac Toe'
            description='Juego del gato hecho en react, para aprender el manejo de los estados.'
            github='https://github.com/christopherra753/tik-tak-toe'
            linkedin='https://tik-tak-toe-nine.vercel.app/'
            image='/projects/tik-tak-toe.png'
          >
            <ul className='absolute bottom-7 left-7 w-full flex gap-2 flex-wrap'>
              <li className='flex items-center bg-black/50 text-white rounded-full gap-1 font-semibold text-xs backdrop-blur-lg px-4 py-0.5'>
                <ReactIcon className='size-4' />
                React
              </li>
              <li className='flex items-center bg-black/50 text-white rounded-full gap-1 font-semibold text-xs backdrop-blur-lg px-4 py-0.5'>
                <TailwindIcon className='size-4' />
                Tailwind
              </li>
            </ul>
          </ProjectItem>
          <ProjectItem
            title='Buscador de películas'
            description='Proyecto para fortaleces los estados y efectos de react, asi como tambien los renderizados y estilos condicionales, usando una libreria de enrutado.'
            github='https://github.com/christopherra753/movie-project'
            linkedin='https://movie-project-tan.vercel.app/'
            image='/projects/movies.png'
          >
            <ul className='absolute bottom-7 left-7 w-full flex gap-2 flex-wrap'>
              <li className='flex items-center bg-black/50 text-white rounded-full gap-1 font-semibold text-xs backdrop-blur-lg px-4 py-0.5'>
                <ReactIcon className='size-4' />
                React
              </li>
              <li className='flex items-center bg-black/50 text-white rounded-full gap-1 font-semibold text-xs backdrop-blur-lg px-4 py-0.5'>
                <TailwindIcon className='size-4' />
                Tailwind
              </li>
            </ul>
          </ProjectItem>
        </div>
      </div>
    </section>
  )
}

export default Projects
