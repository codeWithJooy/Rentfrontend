import React from "react";
import "./Highlights.css";
import HighlightsUnit from "./HIghlightsUnit";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Highlights = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="highlights">
      <div className="highlightTitle">
        <span>June 2023</span>
      </div>
      <Slider {...settings}>
        <HighlightsUnit />
        <HighlightsUnit />
        <HighlightsUnit />
        <HighlightsUnit />
        <HighlightsUnit />
      </Slider>
    </div>
  );
};

export default Highlights;
