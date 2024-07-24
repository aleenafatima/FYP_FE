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
    <div className="flex flex-col items-center">
      <div className="bg-white w-1/3 h-70 flex justify-center">
        <video
          className="w-full h-full"
          src={videoUrl}
          controls
          preload="auto"
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
     
      <div className="bg-white w-1/3 h-30 flex mb-5 rounded-md">
        <div className="m-auto flex justify-center  w-full gap-6">
          <div className="flex bg-slate-300 flex-col h-32 w-1/4 justify-center align-middle items-center rounded-md">
            <div className="text-pink-500 text-3xl ">
              <GiThunderball />
            </div>
            <p className="font-bold">Speed</p>
            <p className="font-bold">{data?.speed_metrics || "N/A"}</p>
          </div>
          <div className="flex bg-slate-300 flex-col h-32 w-1/4 justify-center align-middle items-center rounded-md">
            <div className="text-pink-500 text-3xl">
              <GiCrackedBallDunk />
            </div>
            <p className="font-bold">Swing</p>
            <p className="font-bold">{data?.swing_metrics || "N/A"}</p>
          </div>
   
        </div>
      </div>
    </div>
  );
};

export default Show_Mat;
