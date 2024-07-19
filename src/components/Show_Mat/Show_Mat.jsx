import React, { useEffect, useState } from 'react';
import { GiThunderball, GiThreeBurningBalls, GiCrackedBallDunk } from "react-icons/gi";

const Show_Mat = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('uploadData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const videoUrl = data ? `http://127.0.0.1:5000/download/${encodeURIComponent(data.filename)}` : '';

  return (
    <div className='flex flex-col items-center justify-center py-20 my-20'>
      <div className='bg-white w-1/3 h-72 flex justify-center mb-5'> 
        <div className='m-auto flex justify-center w-full gap-5'>
          <div className='flex bg-slate-300 flex-col h-44 w-1/4 justify-center align-middle items-center rounded-md'> 
            <div className='text-pink-500 text-5xl'><GiThunderball /></div>
            <p className='font-bold'>Speed</p>
            <p className='font-bold'>{data?.speed_metrics || 'N/A'}</p>
          </div>
          <div className='flex bg-slate-300 flex-col h-44 w-1/4 justify-center align-middle items-center rounded-md'> 
            <div className='text-pink-500 text-5xl'><GiCrackedBallDunk /></div>
            <p className='font-bold'>Swing</p>
            <p className='font-bold'>{data?.swing_metrics || 'N/A'}</p>
          </div>
          <div className='flex bg-slate-300 flex-col h-44 w-1/4 justify-center align-middle items-center rounded-md'> 
            <div className='text-pink-500 text-5xl'><GiThreeBurningBalls /></div>
            <p className='font-bold'>Spin</p>
            <p className='font-bold'>{data?.spin_metrics || 'N/A'}</p>
          </div>
        </div> 
      </div> 
      {data && (
        <div className='bg-white w-1/3 h-auto flex justify-center mb-5'>
          <video controls width="100%">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>  
      )}
    </div>
  );
};

export default Show_Mat;
