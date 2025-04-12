import React from "react";
import Navbar from "./components/Navbar";
import Image from 'next/image';

export default function Main() {
  return (
    <div className=''>
      <div className="home max-h-full">
      <Navbar/>
      <div className="flex justify-between p-4 text-[#00204a]">
        <div className="leading-relaxed pt-8 px-7" >
          <h1 className="text-5xl font-bold ">Hello 👋,</h1><br></br>       
          <h1 className="text-5xl font-bold" ><h1>I&apos;m Daisy,</h1>
          </h1> <br></br>
          <p className="text-2xl pb-3.5" >A Software Developer and Cloud Professional <br></br>dedicated to helping businesses <br></br> stand out online and attract more customers</p>
          <div className="flex space-x-3">
            <button className="bg-[#005792] text-white px-4 py-2 rounded-md my-2">Contact Me</button>
            <button className="bg-[#005792] text-white px-4 py-2 rounded-md my-2">View my works</button>
          </div>
        </div>

        <div>
          <Image src="/daisyimg.png" width={600} height={50} alt="Daisy"/>
        </div>
      </div>
    <footer/>
    </div>
    </div>
  );
}
