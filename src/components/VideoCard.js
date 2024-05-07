import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const{snippet,statistics}=info;
    const {channelTitle,title,thumbnails,publishedAt}=snippet;
  return (
    <div className='p-2 m-2 w-80 hover:shadow-lg '>
        
    <img src={thumbnails.medium.url} alt='thumbnail' className=' rounded-lg cursor-pointer'/>
   
    <div className='cursor-pointer py-2'>
        <h3 className='font-semibold text-lg'>{title}</h3>
        <h3 className=' text-gray-600  text-md'>{channelTitle}</h3>
        <h3 className=' text-gray-600 text-sm'>{statistics.viewCount} views </h3>
    </div>
    </div>
  )
}

export default VideoCard
