import React, { useState, useEffect, useRef } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Sidebar from './Components/Sidebar/Sidebar'


const App = () => {

  const [sidebar, setSidebar] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper){return;}

      if (sidebar) {
        const scrollY = window.scrollY;
        document.body.style.overflow = "scroll";
        wrapper.style.position = "fixed";
        wrapper.style.top = `-${scrollY}px`;
      } else {
        const scrollY = parseInt(wrapper.style.top || "0") * -1;
        document.body.style.overflow = "";
        wrapper.style.position = "";
        wrapper.style.top = "";
        window.scrollTo(0, scrollY);
      }
    }, [sidebar]);

  return (
    <div>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
      <Navbar setSidebar={setSidebar}/>
      <div ref={wrapperRef}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:categoryId/:videoId' element={<Video/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
