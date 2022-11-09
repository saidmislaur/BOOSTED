import React from 'react'

import './products.scss'

const Cart = ({name, price, image}) => {
  return (
    <div className="products__cart">
      <img src={image} alt="" />
      <span className="products__name">{name}</span>
      <span className="products__price">{price}</span>
    </div>
  )
}

export default Cart