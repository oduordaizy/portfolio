import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

const skills = () => {
  return (
    <div>
        <Navbar/>
        <h1 className='font-semibold text-center text-3xl'>Languages and Frameworks</h1>
        <div className=''>
            <span className='bg-[#005792] text-white p-3 rounded-md'>Next js</span>
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>Node js</span>
        </div>

        <h1>Cloud Platforms</h1>
        <div>

        </div>

        <Footer/>
    </div>
  )
}

export default skills