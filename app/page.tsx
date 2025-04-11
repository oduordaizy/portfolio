import React from "react";
import Navbar from "./components/Navbar";
export default function main() {
  return (
    <div className=''>
      <Navbar/>
      <div className="flex justify-between p-4">
        <div className="text-6xl font-bold leading-relaxed" >
          Hello 👋,<br></br>       
          I'm Daisy, <br></br>
          <p className="text-3xl">A Software Developer and digital marketing expert <br></br>dedicated to helping businesses <br></br> stand out online and attract more customers</p>
        </div>

        <div>
          <img src="daisyimg.png" width={600} height={300}/>
        </div>
      </div>

    <footer/>
    </div>
  );
}
