import React from 'react'
import './Home.css'
import Feed from '../../Components/Feed/Feed'
import SmallSidebar from '../../Components/Small-sidebar/SmallSidebar'

const Home = ({cat, setCat}) => {
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
