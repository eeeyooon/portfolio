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
  };

  return (
    <Slider className="lg:w-80 lg:h-80 sm:w-36 sm:h-48" {...settings}>
      {children}
    </Slider>
  );
};

export default ImageSlider;
