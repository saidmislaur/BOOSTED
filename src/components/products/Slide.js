import React, { Component } from "react";
import Slider from "react-slick";
import Cart from "./Cart";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 7,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Cart 
              image="./img/products/prod1.png"
              name="Rev Tube"
              price="$16.00"
            />
          </div>
          <div>
            <Cart 
              image="./img/products/prod2.png"
              name="Boosted Rev Stem Catch"
              price="$19.00"
            />
          </div>
          <div>
            <Cart 
            image="./img/products/prod3.png"
              name="Stomp Brake Fender"
              price="Sold Out"
            />
          </div>
          <div>
            <Cart
              image="./img/products/prod4.png" 
              name="Boosted Belt Kit"
              price="$25.00"
            />
          </div>
          <div>
            <Cart 
              image="./img/products/prod5.png"
              name="Bearing Service Kit"
              price="$50.00"
            />
          </div>
          <div>
            <Cart
              image="./img/products/prod6.png" 
              name="Boosted Pulley / Belt Upgrade Kit"
              price="$50.00"
            />
          </div>
          <div>
            <Cart 
              image="./img/products/prod7.png"
              name="Boosted Skid Plates"
              price="$20.00"
            />
          </div>
          <div>
            <Cart 
              image="./img/products/prod1.png"
              name="test"
              price="test"
            />
          </div>
          <div>
          <Cart 
              image="./img/products/prod2.png"
              name="test"
              price="test"
            />
          </div>
        </Slider>
      </div>
    );
  }
}