import React from 'react'
import Navbar from '../components/Navbar'

const about = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='text-3xl font-semibold text-center '>About Me</h1>
      <p className='mt-4 leading-relaxed text-gray-600 p-4'>I’m a full-stack web developer and cloud enthusiast based in Nairobi, Kenya. I enjoy turning complex ideas into
  user-friendly interfaces. When I’m not coding, I’m exploring new tech, learning about AI, or helping others get
  started in the cloud.</p>
      </div>
  )
}

export default about