import React from 'react'
import Navbar from '../components/Navbar'
import { FaLaptop, FaLaptopCode } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import { SiOpensearch } from "react-icons/si";
import Footer from '../components/footer';


const page = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='font-bold text-4xl text-center '>What I can do for you</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 text-center'>
        <div className='bg-white rounded-md p-3 '>
            <div className='flex justify-center mb-3 text-2xl font-bold text-[#00204a]'><FaLaptopCode /></div>
            <h1 className='font-bold'>Website Development</h1>
            <p>I design and develop modern, responsive websites that help brands grow and stand out online.</p>
        </div>
        <div className='bg-white rounded-md p-3 '>
            <div className='flex justify-center mb-3 text-2xl font-bold text-[#00204a]'><SiGooglemarketingplatform /></div>
            <h1 className='font-bold'>Digital Marketing</h1>
            <p>I create marketing strategies that increase your reach, drive traffic, and convert visitors into loyal customers.</p>

        </div>
        <div className='bg-white rounded-md p-3 '>
          <div className='flex justify-center mb-3 text-2xl font-bold text-[#00204a]'><SiOpensearch /></div>
          <h1 className='font-bold'>Search Engine Optimization</h1>
          <p>Improve your visibility on search engines with tailored SEO practices that help people find your business faster.</p>
        </div>
        <div className='bg-white rounded-md p-3 '>
          <div className='flex justify-center mb-3 text-2xl font-bold text-[#00204a]'><FaLaptop /></div>
          <h1 className='font-bold'>Website Maintenance</h1>
          <p>Keep your site secure and up-to-date with regular maintenance, performance checks, and quick bug fixes.</p>
        </div>
        <div className='bg-white rounded-md p-3 '>
          <div className='flex justify-center mb-3 text-2xl font-bold text-[#00204a]'><GrDeploy /></div>
          <h1 className='font-bold'>Cloud Deployments</h1>
          <p>I help you deploy scalable web applications using AWS and other cloud platforms, ensuring reliability and speed.</p>
        </div>
        <div className='bg-white rounded-md p-3 '>
          <div className='flex justify-center mb-3 text-2xl font-bold text-[#00204a]'><BsGraphUpArrow /></div>
          <h1 className='font-bold'>Building ML Models</h1>
          <p>I build and fine-tune machine learning models that analyze data, automate decisions, and create intelligent features.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page