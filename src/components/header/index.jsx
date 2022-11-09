import React from 'react'
import Button from '../button';

import './header.scss';

const Header = () => {
  return (
    <>
    <div className="header">
      <div className="header__logo">
        <img src="./img/header-logo.png" alt="..." />
      </div>
      <div className="header__navigation">
        <ul>
          <li>Electric Skateboards</li>
          <li>Electric Scooters</li>
          <li>Accessories</li>
          <li>Gift Card</li>
          <li>More Info</li>
        </ul>
      </div>
      <div className="header__icons">
        <img src="./img/header-avatar.svg" alt=".." />
        <img src="./img/header-cart.svg" alt="" />
      </div>
    </div>
    <div className="header__main">
      <h1>Welcome to Boosted USA</h1>
      <span>The Holy Grail of Electric Skateboards and One REVolutionary Scooter</span>
      <div className="header__btns">
        <Button text='BOOSTED REVS'/>
        <Button text='BOOSTED BOARDS'/>
      </div>
    </div>
    </>
  )
}

export default Header;