import React from 'react'
import { MdSportsVolleyball } from "react-icons/md";
import { ImNotification } from "react-icons/im";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=' px-5 py-2 flex items-center justify-between bg-blue-800 '>
       <Link to='/' style={{textDecoration: 'none'}}> <div className='flex flex-shrink-0 items-center'>
            <div className='text-pink-600 text-6xl cursor-pointer'><MdSportsVolleyball /></div>
            <div className='flex flex-col text-white'>
                <h2>NEUROBALL</h2>
                <h4>Cricket Ball Training & Analytics</h4>
            </div>
        </div></Link>
        <div className='text-3xl text-white'>
        <ImNotification />
        </div>
    </nav>
  )
}

export default Navbar
