import React from 'react'
import './SmallSidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'

const SmallSidebar = ({cat, setCat}) => {
  return (
    <div className="smallSidebar">
      <button className={`${cat === 0? 'active':''}`} onClick={()=>setCat(0)}><img src={home} alt="" /><p>Home</p></button>
      <button className={`${cat === 20? 'active':''}`} onClick={()=>setCat(20)}><img src={game_icon} alt="" /><p>Gaming</p></button>
      <button className={`${cat === 2? 'active':''}`} onClick={()=>setCat(2)}><img src={automobiles} alt="" /><p>Automobiles</p></button>
      <button className={`${cat === 17? 'active':''}`} onClick={()=>setCat(17)}><img src={sports} alt="" /><p>Sports</p></button>
      <button className={`${cat === 24? 'active':''}`} onClick={()=>setCat(24)}><img src={entertainment} alt="" /><p>Comedy</p></button>
      <button className={`${cat === 28? 'active':''}`} onClick={()=>setCat(28)}><img src={tech} alt="" /><p>Technology</p></button>
      <button className={`${cat === 10? 'active':''}`} onClick={()=>setCat(10)}><img src={music} alt="" /><p>Music</p></button>
    </div>
  )
}

export default SmallSidebar
