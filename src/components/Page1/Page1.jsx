import React, { useState, useEffect } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Upload_video from '../Upload video/Upload_video';

const Page1 = () => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (selectedFile) {
      setShowVideo(true);
      console.log("Video ready to display");
    }
  }, [selectedFile]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (selectedFile) {
      setShowVideo(true);
    }
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
  };

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <div className='bg-white w-1/3 h-72 flex items-center justify-center mt-20'>
        {showVideo && selectedFile ? (
          <video
            className="w-full h-full object-cover"
            src={URL.createObjectURL(selectedFile)}
            controls
            preload="auto"
            playsInline
          >
            <source src={URL.createObjectURL(selectedFile)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className='text-6xl text-cyan-500 cursor-pointer'><FaPlayCircle /></div>
        )}
      </div>
      <div className='flex justify-center mt-4 mb-5'>
        <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer' onClick={handleOpen}>
          Upload
        </button>
      
        <NavLink to="/matrices">
          <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Show Results</button>
        </NavLink>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="upload-video-modal"
        aria-describedby="upload-video-modal-description"
      >
        <Box sx={modalStyle}>
          <Upload_video setSelectedFile={setSelectedFile} />
        </Box>
      </Modal>
    </div>
  );
};

export default Page1;
