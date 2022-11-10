import React from 'react'
import Button from '../button'

import './example.scss'

const Example = () => {
  return (
    <div className="example">
      
        <img src="./img/6hwVrToK.webp" alt="" />
        <img src="./img/exampleTwo.png" alt="" />
     
      <div className="example__text">
        <h2>Boosted Rev</h2>
        <p>There's never been an electric scooter quite like this. Speed past traffic at 24 mph. Go up to 22 miles on 
          a single charge. You'll get there in no time at all. 
          Stop and go with the roll of your thumb. Its intuitive design means there’s almost no learning curve.</p>
        <Button text='Shop Now'/>
      </div>
    </div>
  )
}

export default Example