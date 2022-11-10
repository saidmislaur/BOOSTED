import React from 'react'
import Card from './card'

const Gallery = () => {
  return (
    <div className="gallery">
      <Card 
        img="./img/Rectangle.png"
        name="Shop Boosted Stealth"
        status="IN STOCK"
      />
      <Card 
        img="./img/Rectangle (1).png"
        name="Shop Boosted Plus"
        status="IN STOCK"
      />
      <Card 
        img="./img/Rectangle.png"
        name="Shop Boosted Mini"
        status="IN STOCK"
      />
    </div>
  )
}

export default Gallery