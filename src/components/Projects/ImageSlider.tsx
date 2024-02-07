"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ImageSliderProps = {
  children: React.ReactNode;
};

const ImageSlider = ({ children }: ImageSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Slider
      className="lg:w-[370px] lg:h-auto md:w-64 md:h-auto sm:w-36 sm:h-36 mb-10"
      {...settings}
    >
      {children}
    </Slider>
  );
};

export default ImageSlider;
