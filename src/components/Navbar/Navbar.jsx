import React from 'react'
import { MdSportsVolleyball } from "react-icons/md";
import { ImNotification } from "react-icons/im";

const Navbar = () => {
  return (
    <nav className=' p-5 flex items-center justify-between bg-blue-800 '>
        <div className='flex flex-shrink-0 items-center'>
            <div className='text-pink-600 text-6xl cursor-pointer'><MdSportsVolleyball /></div>
            <div className='flex flex-col text-white'>
                <h2>NEUROBALL</h2>
                <h4>Cricket Ball Training & Analytics</h4>
            </div>
        </div>
        <div className='text-3xl text-white'>
        <ImNotification />
        </div>
    </nav>
  )
}

export default Navbar
