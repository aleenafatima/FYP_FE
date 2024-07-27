import React, { useEffect, useState } from "react";
import {
  GiThunderball,
  GiThreeBurningBalls,
  GiCrackedBallDunk,
} from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Show_Mat = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("uploadData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const videoUrl = data
    ? `http://127.0.0.1:5000/download/${encodeURIComponent(data.filename)}`
    : "/test1.mp4";

  useEffect(() => {
    console.log("Video URL: ", videoUrl);
  }, [videoUrl]);

  return (
    <div className="flex flex-col items-center ">
      <div className="bg-black w-1/3 h-72 flex items-center justify-center ">
        <video
          className="w-full h-full"
          src={videoUrl}
          // src='/testing.mp4'
          controls
          preload="auto"
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
     
      <div className="bg-white w-1/3 h-30 flex flex-col mb-5 justify-center  rounded-md p-14 mt-10">
      <h1 className="font-bold text-3xl text-blue-800  mb-4">Ball Metrices</h1>
        <div className="m-auto flex justify-center  w-full gap-16">
          <div className="flex bg-slate-300 flex-col h-44 w-full justify-center align-middle items-center text-center rounded-md p-10">
            <div className="text-pink-500 text-3xl ">
              <GiThunderball />
            </div>
            <p className="font-bold">Speed</p>
            <p className="font-bold">{data?.speed_metrics || "N/A"}</p>
          </div>
          <div className="flex bg-slate-300 flex-col h-44 w-full justify-center align-middle items-center text-center rounded-md p-10">
            <div className="text-pink-500 text-3xl">
              <GiCrackedBallDunk />
            </div>
            <p className="font-bold"></p>
            <p className="font-bold">{data?.swing_metrics || "N/A"}</p>
          </div>
   
        </div>
      </div>
    </div>
  );
};

export default Show_Mat;