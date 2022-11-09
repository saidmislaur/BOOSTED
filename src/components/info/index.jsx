import React from 'react'

import './info.scss'

const Info = () => {
  return (
    <div className="info">
      <div className="info__text">
        <h2>Looking for Boosted Boards, or Boosted Revs?</h2>
        <p>Boosted USA acquired all of the remaining inventory directly from Boosted.  This means we have the electric skateboards and scooter you all love and have been looking for.  
          Get your hands on these highly sought after products while supplies last.
        </p>
      </div>
      <div className="info__images">
        <img src="./img/info-img.png" alt="" />
        <img src="./img/info-img1.png" alt="" />
      </div>
    </div>
  )
}

export default Info