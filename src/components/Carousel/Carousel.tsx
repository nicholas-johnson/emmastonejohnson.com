import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="slide">
          <img src="/images/carousel/into_the_pool.jpg" />
        </div>
        <div className="slide">
          <img src="/images/professional/smashed-plate-compressed.jpg" />
        </div>
        <div className="slide">
          <img src="/images/carousel/shop.jpg" />
        </div>
        <div className="slide">
          <img src="/images/professional/blue-scratch-compressed.jpg" />
        </div>
        <div className="slide">
          <img src="/images/paintings/tangleweed.jpg" />
        </div>
        <div className="slide">
          <img src="/images/carousel/neon.jpg" />
        </div>
        <div className="slide">
          <img src="/images/carousel/neon_two.jpg" />
        </div>
      </Slider>
    </div>
  );
};
