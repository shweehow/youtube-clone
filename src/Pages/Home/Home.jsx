import React from 'react'
import './Home.css'
import Feed from '../../Components/Feed/Feed'
import SmallSidebar from '../../Components/SmallSidebar/SmallSidebar'

const Home = ({sidebar}) => {
  return (
    <>
      <SmallSidebar sidebar={sidebar}/>
      <div className={`container ${sidebar?'':'large-container'}`}>
        <Feed />
      </div>
    </>
  )
}

export default Home
