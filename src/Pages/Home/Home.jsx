import React, { useState } from 'react'
import './Home.css'
import Feed from '../../Components/Feed/Feed'
import SmallSidebar from '../../Components/Small-sidebar/SmallSidebar'

const Home = () => {

  const [cat, setCat] = useState(0);

  return (
    <>
      <SmallSidebar cat={cat} setCat={setCat}/>
      <div className='feedCon'>
        <Feed cat={cat}/>
      </div>
    </>
  )
}

export default Home
