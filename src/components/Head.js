import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API, YT_VIDEOS_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const Head = () => {
  const dispatch=useDispatch();
  const [videos, setVideos] = useState([]);
   const [searchQuery,setSearchQuery]=useState("");
   const[searchSuggestions,setSearchSuggestions]=useState([]);
   const [showSuggestions,setShowSuggestions]=useState(false);
   const searchCache=useSelector(store=>store.search);
   
   const getSearchSuggestions=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
    console.log(json[1]);
    
    setSearchSuggestions(json[1]);
    dispatch(cacheResults({[searchQuery]:json[1]}))
    
   
   }
  //  console.log(searchQuery);
   useEffect(()=>{
//make an api call but if the difference between two api calls is less than 200ms ,decline the api call
const timer=setTimeout(()=>
{if(searchCache[searchQuery]){
  setSearchSuggestions(searchCache[searchQuery]);
}else{
  getSearchSuggestions();
}}
  ,200);
return()=>{
  clearTimeout(timer);
}

   },[searchQuery])
   
   const handleMenuToggle=()=>{
    dispatch(toggleMenu());
   }

   
   
  return (
    <div className='grid grid-flow-col m-2 p-2'>
    <div className='flex col-span-1'>
   <img alt="icon"   onClick={()=>handleMenuToggle()} src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' className='h-8 cursor-pointer  rounded-3xl mx-2' />
   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png' alt='logo' className='h-8'/>
    </div>
    {/* search bar */}
    <div className=' col-span-10'>
   
      <div className='relative flex justify-center'>
        <input type='text' className='border border-gray-600 rounded-l-full p-1 px-3 w-1/2 mx-0' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}/>
        <button className='border border-gray-600 rounded-r-full  px-3  bg-gray-100'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/VisualEditor_-_Icon_-_Search.svg/2048px-VisualEditor_-_Icon_-_Search.svg.png' alt='search' className='w-8'/></button>
        </div>
        </div> 
       

        {showSuggestions && <div className=' absolute border border-gray-600 rounded-xl shadow-lg bg-white w-[37%] ml-[400px] mt-8 '>
        <ul className='cursor-pointer'>
            { searchSuggestions.map((s)=>(
               <li key={s} className='py-1 px-3 hover:bg-gray-100 flex items-center'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/VisualEditor_-_Icon_-_Search.svg/2048px-VisualEditor_-_Icon_-_Search.svg.png' alt='search' className='w-7' />{s}</li>
            ))} 
            
        
          </ul>
        </div>}
       
       
       
       
        
       
       
    
    {/* user */}
    <div className='col-span-1'>
        <img src='https://cdn-icons-png.flaticon.com/256/1144/1144760.png' alt='user_icon' className='h-8'/>
    </div>
    </div>
  )
}

export default Head
