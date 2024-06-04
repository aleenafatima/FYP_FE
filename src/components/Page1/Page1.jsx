import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { GiThunderball } from "react-icons/gi";
import { GiThreeBurningBalls } from "react-icons/gi";
import { GiCrackedBallDunk } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import Upload_video from '../Upload video/Upload_video';

const Page1 = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 my-12'>
        <div className='bg-white w-1/3 h-60 flex justify-center mt-20'> 
            <div className='m-auto text-6xl text-cyan-500 cursor-pointer justify-center'><FaPlayCircle /></div> 
        </div>
        <div className='flex justify-center mt-4 mb-5'>
            <NavLink to="/upload"> <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Upload</button></NavLink>
            <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Start</button>
            <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Show Track</button>
            <NavLink to="/matrices"><button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Show Metrices</button></NavLink>
        </div>

        
</div>

    
  )
}

export default Page1
