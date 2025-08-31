import React from 'react'
import './Home.css'
import Feed from '../../Components/Feed/Feed'
import SmallSidebar from '../../Components/Small-sidebar/SmallSidebar'

const Home = () => {
  return (
    <>
      <SmallSidebar />
      <div className='feedCon'>
        <Feed />
      </div>
    </>
  )
}

export default Home
