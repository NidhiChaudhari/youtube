import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center p-2'>
      <img src='https://cdn-icons-png.flaticon.com/256/1144/1144760.png' alt='user_icon' className='h-6'/>
      <span className='font-semibold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
