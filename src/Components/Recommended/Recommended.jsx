import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY, fetchData, valueConverter } from '../../data'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Recommended = ({catId}) => {

  const [apiData, setApiData] = useState([]);

  const recList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=SG&videoCategoryId=${catId}&key=${API_KEY}`

  useEffect(() => {
    const loadData = async () => {
      try{
        const recommends = await fetchData(recList_url);
        setApiData(recommends);
      } catch(err){
        console.error('Error loading data: ',err)
      }
    }

    loadData();
  },[catId])

  return (
    <div className='recommended'>
      <h1>Recommended</h1>
      {apiData.map((item, index) => {
        return(
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`}>
            <div className="rec-card">
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <div className="rec-card-r">
                  <h3>{item.snippet.title}</h3>
                  <span>{item.snippet.channelTitle}</span>
                  <span>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</span>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Recommended
