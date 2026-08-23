'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <nav className="bg-brand-primary text-white px-6 py-0.5 shadow-md">
      <div className='px-4 py-3 flex justify-between'>
        <div className='font-bold text-2xl '>
          <Link href='/' className='pacifico-regular text-brand-accent '>Daisy Oduor</Link>
        </div>


        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/" className="hover:text-brand-accent">Home</Link>
          <Link href="/about" className="hover:text-brand-accent">About</Link>
          <Link href="/projects" className="hover:text-brand-accent">Projects</Link>
          <Link href="/services" className="hover:text-brand-accent">Services</Link>
          <Link href="/contact" className="hover:text-brand-accent">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-xl cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>


        {/* Mobile Navigation Links */}
        {navOpen && (
          <div className="md:hidden mt-4 px-4 space-y-3 text-white">
            <Link href="/" className="block hover:text-brand-accent">Home</Link>
            <Link href="/about" className="block hover:text-brand-accent">About</Link>
            <Link href="/projects" className="block hover:text-brand-accent">Projects</Link>
            <Link href="/services" className="block hover:text-brand-accent">Services</Link>
            <Link href="/contact" className="block hover:text-brand-accent">Contact</Link>
          </div>
        )}

      </div>

    </nav>
  )


}

export default Navbar