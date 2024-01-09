import React from 'react'

function SocialLink ({ to, children }) {
  return (
    <a
      className='flex items-center gap-1 text-sm sm:text-base font-semibold duration-300 border border-first dark:border-cyan-400 bg-first/10 dark:bg-cyan-400/10 text-first rounded-lg dark:text-cyan-400 px-2 py-1 hover:bg-first dark:hover:bg-cyan-400 dark:hover:text-black hover:text-white transition-colors'
      href={to}
      target='_blank' rel='noreferrer'
    >
      {children}
    </a>
  )
}

export default SocialLink
