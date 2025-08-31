import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'

const Recommended = () => {
  return (
    <div className='recommended'>
      <h1>Recommended</h1>
      <div className="rec-card">
        <img src={thumbnail1} alt="" />
        <div className="rec-card-r">
            <h3>Best channel that help you become a web developer</h3>
            <span>GreatStack</span>
            <span>20k views &bull; 3 days ago</span>
        </div>
      </div>
      <div className="rec-card">
        <img src={thumbnail2} alt="" />
        <div className="rec-card-r">
            <h3>Best channel that help you become a web developer</h3>
            <span>GreatStack</span>
            <span>20k views &bull; 3 days ago</span>
        </div>
      </div>
      <div className="rec-card">
        <img src={thumbnail3} alt="" />
        <div className="rec-card-r">
            <h3>Best channel that help you become a web developer</h3>
            <span>GreatStack</span>
            <span>20k views &bull; 3 days ago</span>
        </div>
      </div>
      <div className="rec-card">
        <img src={thumbnail4} alt="" />
        <div className="rec-card-r">
            <h3>Best channel that help you become a web developer</h3>
            <span>GreatStack</span>
            <span>20k views &bull; 3 days ago</span>
        </div>
      </div>
      <div className="rec-card">
        <img src={thumbnail5} alt="" />
        <div className="rec-card-r">
            <h3>Best channel that help you become a web developer</h3>
            <span>GreatStack</span>
            <span>20k views &bull; 3 days ago</span>
        </div>
      </div>
      <div className="rec-card">
        <img src={thumbnail6} alt="" />
        <div className="rec-card-r">
            <h3>Best channel that help you become a web developer</h3>
            <span>GreatStack</span>
            <span>20k views &bull; 3 days ago</span>
        </div>
      </div>
      <div className="rec-card">
        <img src={thumbnail7} alt="" />
        <div className="rec-card-r">
            <h3>Best channel that help you become a web developer</h3>
            <span>GreatStack</span>
            <span>20k views &bull; 3 days ago</span>
        </div>
      </div>
      <div className="rec-card">
        <img src={thumbnail8} alt="" />
        <div className="rec-card-r">
            <h3>Best channel that help you become a web developer</h3>
            <span>GreatStack</span>
            <span>20k views &bull; 3 days ago</span>
        </div>
      </div>
    </div>
  )
}

export default Recommended
