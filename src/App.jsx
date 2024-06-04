import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Upload_video from './components/Upload video/Upload_video'

import Loader from '../src/components/Loader/Loader'
import Video_Page from './Pages/Video_Page/Video_Page'
import Matrices from './Pages/Matrices/Matrices'


const App = () => {
  return (
    <div className='bg-slate-300'>

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/upload' element={<Upload_video/>}/>
      <Route path='/loader'  element={<Loader/>}/>
      <Route path='/video'  element={<Video_Page/>}/>
      <Route path='/matrices'  element={<Matrices/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Navbar/>

      <Footer/> */}
    </div>
  )
}

export default App
