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
          <li>
            <a href="/">
              Electric Skateboards
            </a>
          </li>
          <li>
            <a href="/">Electric Scooters</a>
          </li>
          <li>
            <a href="/">Accessories</a>
          </li>
          <li>
            <a href="/">Gift Card</a>
          </li>
          <li>
            <a href="/">More Info</a>
          </li>
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