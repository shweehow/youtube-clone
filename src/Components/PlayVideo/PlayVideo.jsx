import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, fetchData, valueConverter } from '../../data'
import moment from 'moment'

const PlayVideo = ({vidId}) => {
   
  const [apiData, setApiData] = useState(null);
  const [chaData, setChaData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const vid_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vidId}&key=${API_KEY}`
  const cha_url = (chaId) => {
    return `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${chaId}&key=${API_KEY}`
  }
  const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&maxResults=50&videoId=${vidId}&key=${API_KEY}`

  useEffect(()=>{
    const loadData = async () => {
      try{
        const video = await fetchData(vid_url);
        setApiData(video[0]);

        if(video){
          const channel = await fetchData(cha_url(video[0].snippet.channelId));
          setChaData(channel[0]);
        }

        const comments = await fetchData(comment_url);
        setCommentData(comments);
      } catch(err){
        console.error('Error loading data: ',err)
      }
    }

    loadData();
  },[vidId])

  return (
    <div className='playVideo'>
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${vidId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h1>{apiData?apiData.snippet.title:'Title'}</h1>
      <div className="buttonsdiv">
        <div className="publisher">
          <img className='profile-pic' src={chaData?chaData.snippet.thumbnails.default.url:jack} alt="" />
          <div className='subcount'>
            <h2>{chaData?chaData.snippet.title:'Channel Title'}</h2>
            <span>{chaData?valueConverter(chaData.statistics.subscriberCount):'0'} subscribers</span>
          </div>
          <button className='subbtn'><h3>Subscribe</h3></button>
        </div>
        <div className="buttons-r">
          <div className="likediv">
            <button className='likebtn'><img src={like} alt="" /><h3>{apiData?valueConverter(apiData.statistics.likeCount):'Title'}</h3><hr className='vertical'/></button>
            <button className='dislikebtn'><img src={dislike} alt="" /></button>
          </div>
          <button><img src={share} alt="" /><h3>Share</h3></button>
          <button><img src={save} alt="" /></button>
        </div>
      </div>
      <div className="vid-desc">
        <h3>{apiData?valueConverter(apiData.statistics.viewCount):'0'} views &nbsp;{apiData?moment(apiData.snippet.publishedAt).fromNow():'Just now'}</h3>
        <p>{apiData?apiData.snippet.description.slice(0,250)+'...':'Description'}</p>
      </div>
      <div className="comments-section">
        <h1>{apiData?valueConverter(apiData.statistics.commentCount):'0'} Comments</h1>
        {commentData.map((item, index) => {
          return (
            <div className="comment">
              <img className='profile-pic' src={item.snippet.topLevelComment.snippet?.authorProfileImageUrl} alt="" />
              <div className="comment-r">
                <div className="commentor">
                  <h4>{item.snippet.topLevelComment.snippet.authorDisplayName}</h4>
                  <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                </div>
                <p dangerouslySetInnerHTML={{ __html: item.snippet.topLevelComment.snippet.textDisplay }} />
                <div className="comment-likes">
                  <button><img src={like} alt="" /><span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span></button>
                  <button><img src={dislike} alt="" /></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlayVideo
