import React from 'react'

function NavBarLink ({ to, label, setMenu }) {
  return (
    <a onClick={() => setMenu(false)} className='block w-full text-center text-first  tracking-wide dark:text-cyan-400 hover:bg-gray-200 dark:hover:bg-neutral-950 font-semibold rounded-lg transition-colors md:hover:bg-gray-100 md:dark:hover:bg-neutral-900/40 py-1 px-4' href={`#${to}`}>{label}</a>
  )
}

export default NavBarLink
