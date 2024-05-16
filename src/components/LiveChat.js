import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, getRandomName } from './helper';

const LiveChat = () => {
  const [liveMessage,setLiveMessage]=useState("");
const dispatch=useDispatch();
const chatMessages=useSelector(store=>store.chat.messages)
  useEffect(()=>{
const i=setInterval(()=>{
//api polling 
dispatch(addMessage({
  name:getRandomName(),
  message:generateRandomMessage(20),
}))
},2000);
return ()=>clearInterval(i);
  },[])
  return (
    <>
    <div className='h-[400px] ml-2 p-2 border border-black bg-gray-100 rounded-lgx overflow-y-scroll flex flex-col-reverse'>
    <div>
      {chatMessages.map((chatMessage,index)=>{
       return <ChatMessage name={chatMessage.name} message={chatMessage.message} key={chatMessage.index}/>
      })}
      </div>
      </div>
      <form className='p-2 ml-2   border border-black ' 
      onSubmit={(e)=>{e.preventDefault();
        dispatch(addMessage({
          name:"Nidhi",
          message:liveMessage,
        }))
        setLiveMessage("");
      }}>
        <input type='text' className='w-[300px] px-3 border-b border-b-black' placeholder='Type a message' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/> <button className='px-2 mx-2 bg-black text-white rounded-lg'>Send</button>
      </form>
      </>
   
  )
}

export default LiveChat
