import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list=["All","Gaming","Movies","Music","News","Art","Education","Programming","Cooking","Sports"]
  return (
    <div className='flex'>
      {list.map((item)=>{
       return <Button name={item}/>
      })}

    </div>
  )
}

export default ButtonList
