'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <nav className="bg-brand-primary text-white px-4 sm:px-6 py-0.5 shadow-md sticky top-0 z-50">
      <div className='px-2 sm:px-4 py-3 flex justify-between items-center max-w-7xl mx-auto'>
        <div className='font-bold text-xl sm:text-2xl'>
          <Link href='/' className='pacifico-regular text-brand-accent hover:opacity-80 transition-opacity'>Daisy Oduor</Link>
        </div>


        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 sm:space-x-6 text-white">
          <Link href="/" className="hover:text-brand-accent transition-colors text-sm sm:text-base">Home</Link>
          <Link href="/about" className="hover:text-brand-accent transition-colors text-sm sm:text-base">About</Link>
          <Link href="/projects" className="hover:text-brand-accent transition-colors text-sm sm:text-base">Projects</Link>
          <Link href="/services" className="hover:text-brand-accent transition-colors text-sm sm:text-base">Services</Link>
          <Link href="/contact" className="hover:text-brand-accent transition-colors text-sm sm:text-base">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-xl sm:text-2xl cursor-pointer p-2 hover:text-brand-accent transition-colors focus:outline-none"
          onClick={toggleNav}
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>


        {/* Mobile Navigation Links */}
        {navOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-brand-primary shadow-lg mt-0.5 px-4 py-4 space-y-3 text-white border-t border-brand-secondary/20">
            <Link href="/" className="block hover:text-brand-accent transition-colors py-2 text-base" onClick={() => setNavOpen(false)}>Home</Link>
            <Link href="/about" className="block hover:text-brand-accent transition-colors py-2 text-base" onClick={() => setNavOpen(false)}>About</Link>
            <Link href="/projects" className="block hover:text-brand-accent transition-colors py-2 text-base" onClick={() => setNavOpen(false)}>Projects</Link>
            <Link href="/services" className="block hover:text-brand-accent transition-colors py-2 text-base" onClick={() => setNavOpen(false)}>Services</Link>
            <Link href="/contact" className="block hover:text-brand-accent transition-colors py-2 text-base" onClick={() => setNavOpen(false)}>Contact</Link>
          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar