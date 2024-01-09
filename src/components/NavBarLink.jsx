import React from 'react'

function NavBarLink ({ to, label, setMenu }) {
  return (
    <a onClick={() => setMenu(false)} className='block text-first  tracking-wide dark:text-cyan-400 font-semibold rounded-lg transition-colors' href={`#${to}`}>{label}</a>
  )
}

export default NavBarLink
