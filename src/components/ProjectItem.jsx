import React from 'react'
import { RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri'

function ProjectItem ({ image, title, description, github, linkedin, children }) {
  return (
    <div className='max-w-sm mx-auto overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-700 duration-200 hover:scale-105 hover:shadow-md flex flex-col'>
      <div className='relative p-5'>
        <img src={image} className=' object-cover w-full rounded-xl' />
        {children}
      </div>
      <div className='p-5 flex flex-col flex-1'>
        <h2 className='text-first dark:text-cyan-400 font-bold'>{title}</h2>
        <p className='text-xs mb-5 flex-1 text-gray-700 dark:text-gray-200'>{description}</p>
        <div className='flex items-center gap-2'>
          <a href={github} target='_blank' className='flex flex-1 justify-center gap-1 items-center bg-neutral-800 text-white rounded-md px-4 py-1' rel='noreferrer'>
            Github
            <RiGithubLine />
          </a>
          <a href={linkedin} target='_blank' className='flex flex-1 justify-center gap-1 items-center bg-blue-600 text-white rounded-md px-4 py-1' rel='noreferrer'>
            Demo
            <RiLinkedinBoxLine />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
