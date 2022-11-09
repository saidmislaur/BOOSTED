import React from 'react'
import SwipeToSlide from './Slide'



const Products = () => {
  const lists = [
    {
      image: "./img/products/prod1.png",
      name: "Rev Tube",
      price: "$16.00",
    },
    {
      image: "./img/products/prod2.png",
      name: "Boosted Rev Stem Catch",
      price: "$19.00",
    },
    {
      image: "./img/products/prod3.png",
      name: "Stomp Brake Fender",
      price: "Sold Out",
    },
    {
      image: "./img/products/prod4.png",
      name: "Boosted Belt Kit",
      price: "$25.00",
    },
    {
      image: "./img/products/prod5.png",
      name: "Bearing Service Kit",
      price: "$50.00",
    },
    {
      image: "./img/products/prod6.png",
      name: "Boosted Pulley / Belt Upgrade Kit",
      price: "$75.00",
    },
    {
      image: "./img/products/prod7.png",
      name: "Boosted Skid Plates",
      price: "$20.00",
    },
    {
      image: "./img/products/prod1.png",
      name: "Rev Tube",
      price: "$16.00",
    },
    {
      image: "./img/products/prod1.png",
      name: "Rev Tube",
      price: "$16.00",
    },
  ]
  return (
    <div className='products'>
      <SwipeToSlide items={lists}/>
    </div>
  )
}

export default Products