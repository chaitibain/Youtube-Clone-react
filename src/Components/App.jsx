import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes } from 'react-router-dom'
import Home from './assets/Pages/Home/Home'
import Video from './assets/Pages/Video/Video'

const App = () => {
  const [sidebar,setSidebar] = useState(true);
  return (
    <div>
      <Navbr  setSidebar={setSidebar}/>
      <Routes>
        <Routes path='/' element={<Home  sidebar={sidebar} />} />
        <Routes path='/video/:categoryId/:videoid' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App
