import React, { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = (props) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(3);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
      props.setData((prevState) => prevState + 1);
    }
  };
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
      props.setData((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      next();
    }
    if (diff < -5) {
      prev();
    }
    setTouchPosition(null);
  };

  const handleMouseStart = (e) => {
    const touchDown = e.clientX;
    setTouchPosition(touchDown);
  };
  const handleMouseMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.clientX;
    const diff = touchDown - currentTouch;
    if (diff > 2) {
      next();
    }
    if (diff < -2) {
      prev();
    }
    setTouchPosition(null);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* You can alwas change the content of the button to other things */}
        {/* {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )} */}
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseStart}
          onMouseMove={handleMouseMove}
        >
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        {/* You can alwas change the content of the button to other things */}
        {/* {currentIndex < length - 1 && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Carousel;
