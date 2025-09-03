import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY, valueConverter } from '../../data'
import moment from 'moment'

const Feed = ({cat}) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const vidList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=SG&videoCategoryId=${cat}&key=${API_KEY}`
        
        try{
            const res = await fetch(vidList_url);
            const data = await res.json();
            setData(data.items)
        } catch (err){
            console.error('Error fetching data:', err)
        }
    }

    useEffect(()=>{
        fetchData();
    },[cat])

  return (
    <div className="feed">
        {data.map((item, index)=>{
            return(
                <Link to={`video/${item.snippet.categoryid}/${item.id}`} className='card'>
                    <img src={item.snippet.thumbnails.standard.url} alt="" /> 
                    <div className="textdiv">
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default Feed
