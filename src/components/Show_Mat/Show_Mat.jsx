import React from 'react'
import { GiThunderball } from "react-icons/gi";
import { GiThreeBurningBalls } from "react-icons/gi";
import { GiCrackedBallDunk } from "react-icons/gi";


const Show_Mat = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 my-20' >
      <div className='bg-white w-1/3 h-72 flex justify-center mb-5'> 
            <div className=' m-auto flex justify-center w-full gap-5'>
                <div className='flex bg-slate-300 flex-col h-44 w-1/4 justify-center align-middle items-center rounded-md'> 
                    <div className='text-pink-500 text-5xl'><GiThunderball /></div>
                    <p className='font-bold'>Speed</p>
                    <p className='font-bold'>145</p>
                </div>
                <div className='flex bg-slate-300 flex-col h-44 w-1/4 justify-center align-middle items-center rounded-md'> 
                    <div className='text-pink-500 text-5xl'><GiCrackedBallDunk /></div>
                    <p className='font-bold'>SWING</p>
                    <p className='font-bold'>142</p>
                </div>
                <div className='flex bg-slate-300 flex-col h-44 w-1/4 justify-center align-middle items-center rounded-md'> 
                <div className='text-pink-500 text-5xl'><GiThreeBurningBalls /></div>
                    <p className='font-bold'>SPIN</p>
                    <p className='font-bold'>142</p>
                </div>
            </div> 
        </div> 
    
    </div>
  )
}

export default Show_Mat
