import React from 'react'
import { RiBriefcaseLine } from 'react-icons/ri'
import ExperiencieItem from './ExperiencieItem'

function Experiencie () {
  return (
    <section id='experiencia' className='py-24 px-5'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl flex items-center gap-2 mb-10'>
          <span className='text-cyan-800 dark:text-cyan-400 font-bold'>Experiencia</span>
          <RiBriefcaseLine className='text-cyan-800 dark:text-cyan-400 mt-1.5 size-7' />
        </h1>

        <div className='relative text-gray-700 text-sm font-semibold'>
          <div className='hidden sm:block w-1 bg-first absolute h-full left-1/2 transform -translate-x-1/2' />

          <ExperiencieItem
            direction='left'
            duration='08/23 - 11/23'
            position='Desarrollador Frontend Junior'
            entity='Municipalidad Ditrital'
            responsabilities={
              [
                'Realizar la parte de UX/UI del módulo de inventario de su intranet.',
                'Refactorizar el código de otros módulos para una mejor escalabilidad.',
                'Refactorizar el código de otros módulos para una mejor escalabilidad.'
              ]
            }
          />
          <ExperiencieItem
            direction='right'
            duration='08/23 - 11/23'
            position='Desarrollador Frontend Junior'
            entity='Municipalidad Ditrital'
            responsabilities={
              [
                'Realizar la parte de UX/UI del módulo de inventario de su intranet.',
                'Refactorizar el código de otros módulos para una mejor escalabilidad.',
                'Refactorizar el código de otros módulos para una mejor escalabilidad.'
              ]
            }
          />

        </div>
      </div>
    </section>
  )
}

export default Experiencie
