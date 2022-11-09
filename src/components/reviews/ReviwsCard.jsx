import React from 'react'

const ReviwsCard = ({image, title, text}) => {
  return (
    <div className="reviews__card">
        <>
          <img src={image} alt="" />
          <h2>{title}</h2>
          <span>{text}</span>
        </>
    </div>
  )
}

export default ReviwsCard