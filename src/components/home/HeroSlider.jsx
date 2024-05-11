import React from 'react';
import HeroItem1 from './HeroItem1';
import HeroItem2 from './HeroItem2';
import HeroItem3 from './HeroItem3';
import Slider from 'react-slick';
function HeroSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="">
      <HeroItem1 />
      <HeroItem2 />
      <HeroItem3 />
    </Slider>
  );
}

export default HeroSlider;
// #004D40
