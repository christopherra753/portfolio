import React from 'react'
import { RiComputerLine } from 'react-icons/ri'

function ExperiencieItem ({ duration, direction, position, entity, responsabilities }) {
  const orientation = direction === 'left'

  return (
    <div className='mt-12 sm:mt-0 sm:mb-12'>
      <div className='flex flex-col sm:flex-row items-center'>
        <div className={`flex ${orientation ? 'justify-start' : 'justify-end'} w-full mx-auto items-center`}>
          <div className={`w-full sm:w-1/2 ${orientation ? 'sm:pr-8' : 'sm:pl-8'}`}>
            <div className='p-4 bg-white dark:bg-neutral-700 rounded shadow'>
              <div className='flex flex-col lg:flex-row justify-between items-center gap-2'>
                <span className='bg-gray-100 dark:bg-neutral-500 dark:text-white rounded-full text-xs px-4 py-1'>{duration}</span>
                <h2 className='text-first dark:text-cyan-400 font-semibold text-sm sm:text-base text-end'>{position}</h2>
              </div>
              <p className='text-center text-sm lg:text-end text-cyan-600 dark:text-cyan-500 mb-5'>{entity}</p>
              <ul className='list-disc ml-4'>
                {
                  responsabilities.map((responsability, index) => (
                    <li key={index} className='text-gray-500 dark:text-gray-200 text-sm'>
                      {responsability}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>

        <div className='rounded-full bg-cyan-600 border-white dark:border-gray-400 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center'>
          <RiComputerLine className='text-white text-lg' />
        </div>
      </div>
    </div>
  )
}

export default ExperiencieItem
