import React from 'react'
import ReviwsCard from './ReviwsCard'

import './reviews.scss'

const Reviews = () => {
  const reviews = [
    {
      image: "./img/gofast.png",
      title: 'Go Fast',
      text: 'Boosted is known for its premium performance boards offering a next-level experience.'
    },
    {
      image: "./img/gofar.png",
      title: 'Go Far',
      text: 'With optional extended battery life, you can get wherever you need to go reliably.'
    },
    {
      image: "./img/gosafe.png",
      title: 'Go Safe',
      text: 'Safety is a #1 priority for Boosted, always wear a helmet when riding.'
    },
    {
      image: "./img/builttolast.png",
      title: 'Built to Last!',
      text: 'Boosted products are engineered to last for years and are extremely reliable.'
    }
  ]
  return (
    <div className="reviews">
      <div className="reviews__cards">
      {reviews.map((items, i) => (
        <ReviwsCard 
          key={i}
          image={items.image} 
          title={items.title}
          text={items.text}  
        />
      ))}
      </div>
    </div>
  )
}

export default Reviews