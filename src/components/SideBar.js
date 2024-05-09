import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const isMenuOpen= useSelector(store=>store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='bg-white fixed w-48 p-5 z-50 shadow-md h-auto'>
       <Link to="/"> <h1 className='flex items-center font-semibold'><img src='https://icons.veryicon.com/png/o/miscellaneous/practical-life-icon/home-206.png' alt='home_icon' className='h-6 mr-2'/>Home</h1></Link>
        <h1 className='flex items-center font-semibold'><img src='https://i.pinimg.com/originals/02/cc/2d/02cc2df2074675a18e9edf1d1e3dbb43.png' alt='shorts_icon' className='h-6 mr-2' />Shorts</h1>
        <h1 className='flex items-center font-semibold pt-5'><img src='https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png' alt='subs' className='h-6 mr-2'/>Subscriptions</h1>
     <ul className='font-normal'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>

    </ul>
    </div>
  )
}

export default SideBar
