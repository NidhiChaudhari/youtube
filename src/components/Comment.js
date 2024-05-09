import React from 'react'

const Comment = ({data}) => {
    const {name,text,replies}=data;

  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img  className='w-7 h-7'alt='user_icon' src='https://cdn-icons-png.flaticon.com/256/1144/1144760.png'/>
      <div className='px-3'>
        <p className='font-semibold'>{name}</p>
        <p className='font-normal'>{text}</p>
      </div>
    </div>
  )
}

export default Comment
