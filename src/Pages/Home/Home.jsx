import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Page1 from '../../components/Page1/Page1'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar/>
      <div className="flex-1 overflow-auto">
        <Page1/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
