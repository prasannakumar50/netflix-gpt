import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-3/12'>{overview}</p>

      <div className=''>
        <button className='text-white  bg-gray-400 bg-opacity-90 w-28 text-center  font-bold p-2 m-2 rounded-md'>  Play</button>
        <button className='text-white bg-gray-400 bg-opacity-90 w-28 text-center font-bold p-2 m-2 rounded-md'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
