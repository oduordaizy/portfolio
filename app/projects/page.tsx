import React from 'react'
import Navbar from '../components/Navbar'
import { IoStarSharp } from "react-icons/io5";
import Image from 'next/image';
import Footer from '../components/footer';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <IoStarSharp className="text-yellow-400" />
            <span>Featured Projects</span>
            <IoStarSharp className="text-yellow-400" />
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development and design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image 
                src='/recruit.png' 
                layout="fill"
                objectFit="cover"
                alt='Recruitment Website'
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Recruit</h2>
              <p className="text-gray-600 mb-4">Built a scalable online store using Next.js, Tailwind CSS, and Stripe integration.</p>
              <div className="flex space-x-3">
                <a 
                  href='https://daisyrec-daisys-projects-7ca04aa0.vercel.app/' 
                  className="bg-[#005792] hover:bg-[#004274] text-white px-4 py-2 rounded-md transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
                <a 
                  href='#' 
                  className="text-[#005792] border border-[#005792] hover:bg-blue-50 px-4 py-2 rounded-md transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

           {/* Project 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image 
                src='/medicare.png' 
                layout="fill"
                objectFit="cover"
                alt='DigitalHub Blog'
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">MediCare</h2>
              <p className="text-gray-600 mb-4"> A comprehensive telemedicine platform designed to connect patients with healthcare providers. It is built using Next Js on the Front-end and Node js on the backend</p>
              <div className="flex space-x-3">
                <a 
                  href='https://telemed-xi.vercel.app/' 
                  className="bg-[#005792] hover:bg-[#004274] text-white px-4 py-2 rounded-md transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
                <a 
                  href='#' 
                  className="text-[#005792] border border-[#005792] hover:bg-blue-50 px-4 py-2 rounded-md transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image 
                src='/digitalhub.png' 
                layout="fill"
                objectFit="cover"
                alt='DigitalHub Blog'
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">DigitalHub</h2>
              <p className="text-gray-600 mb-4">A modern blog website with clean design and responsive layout.</p>
              <div className="flex space-x-3">
                <a 
                  href='https://digital-shop-scribe.vercel.app/' 
                  className="bg-[#005792] hover:bg-[#004274] text-white px-4 py-2 rounded-md transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
                <a 
                  href='#' 
                  className="text-[#005792] border border-[#005792] hover:bg-blue-50 px-4 py-2 rounded-md transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image 
                src='/demeters.png' 
                layout="fill"
                objectFit="cover"
                alt='Demeters Gardens Website'
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Demeters Gardens</h2>
              <p className="text-gray-600 mb-4">A responsive and SEO optimized website for brand visibility.</p>
              <div className="flex space-x-3">
                <a 
                  href='https://demeters-gardens.vercel.app/' 
                  className="bg-[#005792] hover:bg-[#004274] text-white px-4 py-2 rounded-md transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
                <a 
                  href='https://github.com/oduordaizy/demeters_gardens.git' 
                  className="text-[#005792] border border-[#005792] hover:bg-blue-50 px-4 py-2 rounded-md transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Projects