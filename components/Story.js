import React from 'react'

const Story = ({img, username}) => {
  return (
    <div className='flex'>
      <img src={img} alt="user-image" className="h-10 rounded-full " />
      <p>{username}</p>
    </div>
  )
}

export default Story
