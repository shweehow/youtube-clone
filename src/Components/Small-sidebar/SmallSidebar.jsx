import React from 'react'
import './SmallSidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'

const SmallSidebar = () => {
  return (
    <div className="smallSidebar">
      <button><img src={home} alt="" /><p>Home</p></button>
      <button><img src={game_icon} alt="" /><p>Gaming</p></button>
      <button><img src={automobiles} alt="" /><p>Automobiles</p></button>
      <button><img src={sports} alt="" /><p>Sports</p></button>
      <button><img src={entertainment} alt="" /><p>Comedy</p></button>
      <button><img src={tech} alt="" /><p>Technology</p></button>
      <button><img src={music} alt="" /><p>Music</p></button>
    </div>
  )
}

export default SmallSidebar
