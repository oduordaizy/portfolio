import React from 'react'
import Navbar from '../components/Navbar'
import { FaCode } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";


const page = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='font-bold text-4xl text-center '>What I can do for you</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 text-center'>
        <div className='bg-white rounded-md p-3 '>
            <div className='flex justify-center mb-3 text-2xl font-bold text-[#00204a]'><FaCode /></div>
            <h1 className='font-bold'>Website Development</h1>
            <p>Lorem Ipsum</p>
        </div>
        <div className='bg-white rounded-md p-3 '>
            <div className='flex justify-center mb-3 text-2xl font-bold text-[#00204a]'><SiGooglemarketingplatform /></div>
            <h1 className='font-bold'>Digital Marketing</h1>
            <p>Lorem Ipsum</p>
        </div>
        <div className='bg-white rounded-md p-3 '>
          <h1 className='font-bold'>Search Engine Optimization</h1>
          <p>Lorem Ipsum</p>
        </div>
        <div className='bg-white rounded-md p-3 '>
          <h1 className='font-bold'>Website Maintenance</h1>
          <p>Lorem Ipsum</p>
        </div>
        <div className='bg-white rounded-md p-3 '>
          <div className='flex justify-center mb-3 text-2xl font-bold text-[#00204a]'><GrDeploy /></div>
          <h1 className='font-bold'>Cloud Deployments</h1>
          <p>Lorem Ipsum</p>
        </div>
        <div className='bg-white rounded-md p-3 '>
          <div className='flex justify-center mb-3 text-2xl font-bold text-[#00204a]'><BsGraphUpArrow /></div>
          <h1 className='font-bold'>Building ML Models</h1>
          <p>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default page