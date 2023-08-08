import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComp = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <Slider {...settings}>
        <div className="px-4">
          <img src={props.image1} alt={props.service1} className="w-full h-64 object-cover" />
        </div>
        <div className="px-4">
          <img src={props.image2} alt={props.service2} className="w-full h-64 object-cover" />
        </div>
        <div className="px-4">
          <img src={props.image3} alt={props.service3} className="w-full h-64 object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComp;