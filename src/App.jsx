import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Sidebar from './Components/Sidebar/Sidebar'


const App = () => {

  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
      <Navbar setSidebar={setSidebar}/>
      <div id="wrapper">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:categoryId/:videoId' element={<Video/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
