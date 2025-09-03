import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from'../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  return (
    <nav>
      <div className="nav-l flex-div">
        <button onClick={()=>setSidebar(prev => !prev)} >
          <img className='nav-icon' src={menu_icon} alt="" />
        </button>
        <Link to='/'><img className='logo' src={logo} alt="" /></Link>
      </div>

      <div className="nav-mid flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="nav-r flex-div">
        <button><img className='nav-icon' src={upload_icon} alt="" /></button>
        <button><img className='nav-icon' src={more_icon} alt="" /></button>
        <button><img className='nav-icon' src={notification_icon} alt="" /></button>
        <img src={profile_icon} className='user-icon' alt="" />
      </div>
    </nav>
  )
}

export default Navbar
