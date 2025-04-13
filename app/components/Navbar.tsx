'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen]  = useState(false);

  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <nav className="bg-[#00204a] text-white px-6 py-0.5 shadow-md">
      <div className='px-4 py-3 flex justify-between'>
      <div className='font-bold text-2xl '>
        <Link href='/' className='pacifico-regular text-[#fd5f00] '>Daisy Oduor</Link>
      </div>

      
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/" className="hover:text-[#fd5f00]">Home</Link>
          <Link href="/about" className="hover:text-[#fd5f00]">About</Link>
          <Link href="/projects" className="hover:text-[#fd5f00]">Projects</Link>
          <Link href="/services" className="hover:text-[#fd5f00]">Services</Link>
          <Link href="/contact" className="hover:text-[#fd5f00]">Contact</Link>
          <Link href="/skills" className="hover:text-[#fd5f00]">Skills</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-xl cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      

      {/* Mobile Navigation Links */}
      {navOpen && (
        <div className="md:hidden mt-4 px-4 space-y-3 text-white">
          <Link href="/" className="block hover:text-[#fd5f00]">Home</Link>
          <Link href="/about" className="block hover:text-[#fd5f00]">About</Link>
          <Link href="/projects" className="block hover:text-[#fd5f00]">Projects</Link>
          <Link href="/services" className="block hover:text-[#fd5f00]">Services</Link>
          <Link href="/contact" className="block hover:text-[#fd5f00]">Contact</Link>
          <Link href="/skills" className="block hover:text-[#fd5f00]">Skills</Link>
      </div>
      )}

      </div>
      
    </nav>
  )
    
  
}

export default Navbar