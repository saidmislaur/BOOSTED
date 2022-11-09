import React from 'react'
import Button from '../button'

import './perfomance.scss'

const Perfomance = () => {
  return (
    <div className="perfomance">
      <div className="perfomance__text">
        <span>High-performance</span>
        <h2>Electric Skateboards</h2>
        <p>Cruising campus, going to work or getting through that long list of
           errands has never been easier or more fun.</p>
      </div>
      <div className="perfomance__btn">
        <Button text='Shop Now' />
      </div>
    </div>
  )
}

export default Perfomance