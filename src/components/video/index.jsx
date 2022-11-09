import React from 'react'

import './video.scss';

const Video = () => {
  return (
    <div className='video'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/78bXV1ZqQWI"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>  
      </iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/oAQxk9dOJ8k" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default Video