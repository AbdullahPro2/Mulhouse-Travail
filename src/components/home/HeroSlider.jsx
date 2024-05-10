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
    appendDots: (dots) => (
      <div style={{}}>
        <ul
          style={{
            margin: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            gap: '10px',
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: '10px',
          height: '10px',
          color: 'blue',
          borderRadius: '100%',
          border: '2px #004D40 solid',
          backgroundColor: '#004D405c',
        }}
      ></div>
    ),
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
