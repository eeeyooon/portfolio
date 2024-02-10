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
      className="lg:w-2/3 lg:h-full md:w-[200px] md:h-[500px] sm:w-36 sm:h-36 mb-10"
      {...settings}
    >
      {children}
    </Slider>
  );
};

export default ImageSlider;
