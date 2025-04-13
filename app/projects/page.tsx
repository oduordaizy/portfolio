import React from 'react'
import Navbar from '../components/Navbar'
import { IoStarSharp } from "react-icons/io5";
import Image from 'next/image';
import Footer from '../components/footer';

const projects = () => {
  return (
    <div>
      <Navbar/>
      <span className='text-3xl font-semibold flex justify-center'><div className='text-yellow-400'><IoStarSharp /></div><h1 className='text'>Featured Projects</h1><div className='text-yellow-400' ><IoStarSharp /></div></span>

      <div className='grid md:grid-cols-3 gap-6 p-6'>
        <div>
          <Image src='/recruit.png'  height={200} width={400} alt='Image of Website 1'/>
          <h1 className='font-semibold'>Recruit</h1>
          <p className="text-sm text-blue mt-2 mb-3.5">Built a scalable online store using Next.js, Tailwind CSS, and Stripe integration.</p>
          <div className='flex space-x-3'>
            <a href='https://daisyrec-daisys-projects-7ca04aa0.vercel.app/' className='bg-[#005792] text-white px-4 py-2 rounded-md my-2'>View Live</a>
            <a href='' className='text-[#005792] border-solid border-1 px-4 py-2 rounded-md my-2'>Github</a>
          </div>
        </div>

        <div>
          <Image src='/recruit.png'  height={200} width={400} alt='Image of Website 1'/>
          <h1 className='font-semibold'>Recruit</h1>
          <p className="text-sm text-blue mt-2 mb-3.5">Built a scalable online store using Next.js, Tailwind CSS, and Stripe integration.</p>
          <div className='flex space-x-3'>
            <a href='https://daisyrec-daisys-projects-7ca04aa0.vercel.app/' className='bg-[#005792] text-white px-4 py-2 rounded-md my-2'>View Live</a>
            <a href='' className='text-[#005792] border-solid border-1 px-4 py-2 rounded-md my-2'>Github</a>
          </div>
        </div>

        <div>
          <Image src='/recruit.png'  height={200} width={400} alt='Image of Website 1'/>
          <h1 className='font-semibold'>Recruit</h1>
          <p className="text-sm text-blue mt-2 mb-3.5">Built a scalable online store using Next.js, Tailwind CSS, and Stripe integration.</p>
          <div className='flex space-x-3'>
            <a href='https://daisyrec-daisys-projects-7ca04aa0.vercel.app/' className='bg-[#005792] text-white px-4 py-2 rounded-md my-2'>View Live</a>
            <a href='' className='text-[#005792] border-solid border-1 px-4 py-2 rounded-md my-2'>Github</a>
          </div>
        </div>

      </div>

      <Footer/>

    </div>
  )
}

export default projects