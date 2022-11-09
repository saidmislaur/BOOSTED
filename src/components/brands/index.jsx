import React from 'react'

import './brands.scss';

const Brand = () => {
  return (
    <div className="brands">
      <div className="brands__img">
        <img src="./img/electrek.png" alt="img" />
        <img src="./img/tech.png" alt="img" />
        <img src="./img/popular.png" alt="img" />
        <img src="./img/wired.png" alt="img" />
      </div>
    </div>
  )
}

export default Brand;