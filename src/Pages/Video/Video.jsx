import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {catId, vidId} = useParams();

  return (
    <div className='playCon'>
      <PlayVideo vidId={vidId}/>
      <div className="rec-section">
        <Recommended catId={catId}/>
      </div>
    </div>
  )
}

export default Video
