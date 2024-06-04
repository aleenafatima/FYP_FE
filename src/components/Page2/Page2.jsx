import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Page2 = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center h-screen'>
        <div className='bg-white w-1/2 h-90 flex justify-center mt-20'> 
            <video className='w-full h-full' src="/sample.mp4" controls></video>
        </div>

            <div className='flex justify-center mt-4 mb-5'>
                <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Start</button>
                <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Stop</button>
                <NavLink to="/upload"> <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Upload</button></NavLink>
                <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Play</button>
                <NavLink to="/loader"><button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Show Track</button></NavLink>
            </div>

    
        </div>
    </div>
  )
}

export default Page2
