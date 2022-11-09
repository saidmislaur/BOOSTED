import React from 'react'

import './footer.scss'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__image">
          <img src="./img/footer-logo.png" alt="" />
        </div>
        <div className="footer__explore">
          <h3>Explore</h3>
          <ul>
            <li>Electric Skateboards</li>
            <li>Electric Scooters</li>
            <li>Accessories</li>
            <li>FAQs</li>
            <li>Warranty</li>
            <li>Quick Start Guide</li>
            <li>Contact</li>
            <li>Gift Card</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>
        <div className="footer__about">
          <h3>About Boosted USA</h3>
          <p>Boosted empowers people everywhere to commute across their cities, 
            campuses, and communities in ways that were never before possible. 
            Boosted is solving one of the biggest problems people face each day: transportation.</p>
          <div className="footer__address">
            <span>CaliRides LLC - DBA Boosted USA</span>
            <span>1281 Andersen Drive Ste. K</span>
            <span>San Rafael, CA 94901</span>
          </div>
        </div>
      </div>
      <div className="short-info">
        <div className="short-info__address">
          <span>© 2021</span>
          <span className='short-info__orange'>Boosted USA,</span>
          <span>.All Rights Reserved.</span>
          <span className='short-info__orange'>Terms of Service</span>
          <span>. Built by</span>
          <span className='short-info__orange'>BH</span>
        </div>
        <div className="short-info__pays">
          <img src="./img/amex.png" alt="." />
          <img src="./img/Frame (1).png" alt="" />
          <img src="./img/google-pay.png" alt="." />
          <img src="./img/klarna.png" alt="" />
          <img src="./img/Frame (4).png" alt="" />
          <img src="./img/o-pay.png" alt="" />
          <img src="./img/v.png" alt="" />
          <img src="./img/visa.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Footer