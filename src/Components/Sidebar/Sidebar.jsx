import React from 'react'
import './Sidebar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({sidebar, setSidebar}) => {
  return (
    <>
      <div className={`overlay ${sidebar? "active":""}`} onClick={()=>setSidebar(prev => !prev)}></div>
      <div className={`sidebar ${sidebar? "active":""}`}>
        <div className="logo-container flex-div">
          <button onClick={()=>setSidebar(prev => !prev)} >
            <img className='nav-icon' src={menu_icon} alt="" />
          </button>
          <img className='logo' src={logo} alt="" />
        </div>
        <div className="sidelinks">
          <div className="categories">
            <button><img src={home} alt="" /><p>Home</p></button>
            <button><img src={game_icon} alt="" /><p>Gaming</p></button>
            <button><img src={automobiles} alt="" /><p>Automobiles</p></button>
            <button><img src={sports} alt="" /><p>Sports</p></button>
            <button><img src={entertainment} alt="" /><p>Entertainment</p></button>
            <button><img src={tech} alt="" /><p>Technology</p></button>
            <button><img src={music} alt="" /><p>Music</p></button>
            <button><img src={blogs} alt="22" /><p>Blogs</p></button>
            <button><img src={news} alt="25" /><p>News</p></button>
          </div>
          <hr />
          <div className="subscribed">
            <h3>Subscriptions</h3>
            <button><img src={jack} alt="" /><p>Pewdiepie</p></button>
            <button><img src={simon} alt="" /><p>MrBeast</p></button>
            <button><img src={tom} alt="" /><p>Justin Bieber</p></button>
            <button><img src={megan} alt="" /><p>5-Minute Crafts</p></button>
            <button><img src={cameron} alt="" /><p>Nas Daily</p></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
