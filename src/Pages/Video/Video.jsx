import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'

const Video = () => {
  return (
    <div className='playCon'>
      <PlayVideo />
      <div className="rec-section">
        <Recommended />
      </div>
    </div>
  )
}

export default Video
