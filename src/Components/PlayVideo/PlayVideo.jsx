import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='playVideo'>
      <video src={video1} controls autoPlay muted></video>
      <h1>Best YouTube Channel to learn Web Development</h1>
      <div className="buttonsdiv">
        <div className="publisher">
          <img className='profile-pic' src={jack} alt="" />
          <div className='subcount'>
            <h2>GreatStack</h2>
            <span>1M subscribers</span>
          </div>
          <button className='subbtn'><h3>Subscribe</h3></button>
        </div>
        <div className="buttons-r">
          <div className="likediv">
            <button className='likebtn'><img src={like} alt="" /><h3>125</h3><hr className='vertical'/></button>
            <button className='dislikebtn'><img src={dislike} alt="" /></button>
          </div>
          <button><img src={share} alt="" /><h3>Share</h3></button>
          <button><img src={save} alt="" /></button>
        </div>
      </div>
      <div className="vid-desc">
        <h3>1,525 views 2 days ago</h3>
        <p>
          Channel that makes learning easy<br />
          <br />
          Subscribe to GreatStack to Watch More Tutorials on Web Development.
        </p>
      </div>
      <div className="comments-section">
        <h1>130 Comments</h1>
        <div className="comment">
          <img className='profile-pic' src={user_profile} alt="" />
          <div className="comment-r">
            <div className="commentor">
              <h4>Jack Nicholson</h4>
              <span>1 day ago</span>
            </div>
            <p>Great Video! Keep up the good work.</p>
            <div className="comment-likes">
              <button><img src={like} alt="" /><span>68</span></button>
              <button><img src={dislike} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="comment">
          <img className='profile-pic' src={user_profile} alt="" />
          <div className="comment-r">
            <div className="commentor">
              <h4>Jack Nicholson</h4>
              <span>1 day ago</span>
            </div>
            <p>Great Video! Keep up the good work.</p>
            <div className="comment-likes">
              <button><img src={like} alt="" /><span>68</span></button>
              <button><img src={dislike} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="comment">
          <img className='profile-pic' src={user_profile} alt="" />
          <div className="comment-r">
            <div className="commentor">
              <h4>Jack Nicholson</h4>
              <span>1 day ago</span>
            </div>
            <p>Great Video! Keep up the good work.</p>
            <div className="comment-likes">
              <button><img src={like} alt="" /><span>68</span></button>
              <button><img src={dislike} alt="" /></button>
            </div>
          </div>
        </div>
        <div className="comment">
          <img className='profile-pic' src={user_profile} alt="" />
          <div className="comment-r">
            <div className="commentor">
              <h4>Jack Nicholson</h4>
              <span>1 day ago</span>
            </div>
            <p>Great Video! Keep up the good work.</p>
            <div className="comment-likes">
              <button><img src={like} alt="" /><span>68</span></button>
              <button><img src={dislike} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
