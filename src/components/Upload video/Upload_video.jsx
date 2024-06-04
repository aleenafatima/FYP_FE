import React from 'react'
import { LuUploadCloud } from "react-icons/lu";

const Upload_video = () => {
  return (
    <div className='bg-white flex justify-center items-center h-screen top-0 '>
        <div className='w-1/4 bg-slate-300 m-auto flex flex-col justify-start items-center py-10 rounded-md border-2 border-dotted border-gray-500'>
            <div className='text-6xl mb-3'><LuUploadCloud /></div>
            <h1 className='text-3xl mb-3'>Drag & Drop</h1>
            <p className='mb-3'>or select files from device</p>
            <button className='bg-blue-600 text-white py-1 px-3 rounded-md text-xl'>Browse</button>
            <p>max. 50MB</p>
        </div>
      
    </div>
  )
}

export default Upload_video
