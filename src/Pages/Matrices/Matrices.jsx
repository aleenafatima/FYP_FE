import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Show_Mat from '../../components/Show_Mat/Show_Mat'
import Footer from '../../components/Footer/Footer'
import Page2 from '../../components/Page2/Page2'

const Matrices = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-auto">
        <Page2 />
        <Show_Mat />
      </div>
      <Footer />
    </div>
  )
}

export default Matrices
