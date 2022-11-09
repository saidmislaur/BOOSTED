import React, { Component } from "react";
import Slider from "react-slick";
import Cart from "./Cart";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SwipeToSlide = ({items}) => {

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
  }
    return (
      <div>
        <Slider {...settings}>
          {
            items.map(item => (
              <div>
                <Cart 
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
            </div>
            ))
          } 
        </Slider>
      </div>
    );
  }

export default SwipeToSlide;