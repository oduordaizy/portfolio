import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='px-4 py-3 flex justify-between'>
      <div className='font-bold text-4xl '>
        <Link href='/' className='pacifico-regular text-[#005792]'>Daisy</Link>
      </div>
      <div className='space-x-6 text-[#3a4042]'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/services'>Services</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      </div>
    </nav>
  )
    
  
}

export default Navbar