import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuUploadCloud } from "react-icons/lu";
import axios from 'axios';

const Upload_video = ({ setSelectedFile }) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setSelectedFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setError(null);

    try {
      const res = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Store the response data in state
      setData(res.data);
      // Store the response data in local storage
      localStorage.setItem('uploadData', JSON.stringify(res.data));
    } catch (err) {
      setError("Failed to upload file");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (data) {
      const link = document.createElement('a');
      link.href = `http://127.0.0.1:5000/download/${encodeURIComponent(data.filename)}`;
      link.download = data.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className='flex flex-col justify-start items-center py-10 rounded-md border-2 border-dotted border-gray-500 bg-white'>
      {loading ? (
        <div className="text-2xl mb-3">Loading...</div>
      ) : (
        <>
          <div className='text-6xl mb-3'><LuUploadCloud /></div>
          <h1 className='text-3xl mb-3'>Drag & Drop</h1>
          <p className='mb-3'>or select files from device</p>
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-3"
          />
          <button
            onClick={handleUpload}
            className='bg-blue-600 text-white py-1 px-3 rounded-md text-xl'
          >
            Upload
          </button>
          {error && <p className="text-red-500 mt-3">{error}</p>}
          <p>max. 50MB</p>
        </>
      )}

      {data && (
        <div className='mt-8 w-full flex flex-col items-center'>
          <button
            onClick={handleDownload}
            className='bg-blue-600 text-white py-1 px-3 rounded-md text-xl mt-4'
          >
            Download Processed Video
          </button>
          <button
            onClick={() => navigate('/matrices')}
            className='bg-blue-600 text-white py-1 px-3 rounded-md text-xl mt-4'
          >
            View Metrics
          </button>
        </div>
      )}
    </div>
  );
};

export default Upload_video;
