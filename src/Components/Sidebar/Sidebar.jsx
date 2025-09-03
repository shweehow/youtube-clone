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
import { Link } from 'react-router-dom'

const Sidebar = ({cat, setCat, sidebar, setSidebar}) => {
  return (
    <>
      <div className={`overlay ${sidebar? "active":""}`} onClick={()=>setSidebar(prev => !prev)}></div>
      <div className={`sidebar ${sidebar? "active":""}`}>
        <div className="logo-container flex-div">
          <button onClick={()=>setSidebar(prev => !prev)} >
            <img className='nav-icon' src={menu_icon} alt="" />
          </button>
          <Link to='/'><img className='logo' src={logo} alt="" /></Link>
        </div>
        <div className="sidelinks">
          <div className="categories">
            <Link to='/'><button className={`${cat === 0? 'active':''}`} onClick={()=>{setCat(0); setSidebar(false);}}><img src={home} alt="" /><p>Home</p></button></Link>
            <Link to='/'><button className={`${cat === 20? 'active':''}`} onClick={()=>{setCat(20); setSidebar(false);}}><img src={game_icon} alt="" /><p>Gaming</p></button></Link>
            <Link to='/'><button className={`${cat === 2? 'active':''}`} onClick={()=>{setCat(2); setSidebar(false);}}><img src={automobiles} alt="" /><p>Automobiles</p></button></Link>
            <Link to='/'><button className={`${cat === 17? 'active':''}`} onClick={()=>{setCat(17); setSidebar(false);}}><img src={sports} alt="" /><p>Sports</p></button></Link>
            <Link to='/'><button className={`${cat === 24? 'active':''}`} onClick={()=>{setCat(24); setSidebar(false);}}><img src={entertainment} alt="" /><p>Entertainment</p></button></Link>
            <Link to='/'><button className={`${cat === 28? 'active':''}`} onClick={()=>{setCat(28); setSidebar(false);}}><img src={tech} alt="" /><p>Technology</p></button></Link>
            <Link to='/'><button className={`${cat === 10? 'active':''}`} onClick={()=>{setCat(10); setSidebar(false);}}><img src={music} alt="" /><p>Music</p></button></Link>
            <Link to='/'><button className={`${cat === 22? 'active':''}`} onClick={()=>{setCat(22); setSidebar(false);}}><img src={blogs} alt="" /><p>Blogs</p></button></Link>
            <Link to='/'><button className={`${cat === 25? 'active':''}`} onClick={()=>{setCat(25); setSidebar(false);}}><img src={news} alt="" /><p>News</p></button></Link>
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
