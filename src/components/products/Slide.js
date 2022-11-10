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
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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