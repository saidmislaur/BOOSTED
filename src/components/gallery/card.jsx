import React from 'react'

import './gallery.scss'

const Card = ({img, name, status}) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card__text">
        <h5>{name}</h5>
        <span>{status}</span>
      </div>
    </div>
  )
}

export default Card