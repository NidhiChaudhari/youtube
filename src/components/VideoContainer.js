import React, { useEffect, useState } from 'react'
import { YT_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const[videos,setVideos]=useState([]);
  const getVideos=async ()=>{
    const data=await fetch(YT_VIDEOS_API);
    const json=await data.json();
    // console.log(json);
    setVideos(json.items);
    
  }
  useEffect(()=>{
getVideos();
  },[]);

 

  return (
    
    <div className='flex flex-wrap'>
  {videos.map(video=> <Link to={"/watch?v="+video.id}><VideoCard info={video} key={video.id}/></Link>)}
    </div>
   
  )
}

export default VideoContainer
