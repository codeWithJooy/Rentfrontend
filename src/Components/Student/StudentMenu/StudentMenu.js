import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StudentMenu = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="stuMainUnit">
      <div className="stuMainHeader">
        <p>Today's Menu</p>
      </div>
      <div className="stuMenuSection">
        <Slider {...settings}>
          <MenuCard
            type={"Breakfast"}
            time={"08:00-10:00"}
            fg={"#ffa839"}
            bg={"#fff4ee"}
            icon={"Assets/Food/breakfast.png"}
          />
          <MenuCard
            type={"Lunch"}
            time={"12:00-14:00"}
            fg={"#FFAA44"}
            bg={"#FFFCEC"}
            icon={"Assets/Food/lunch.png"}
          />
          <MenuCard
            type={"Snacks"}
            time={"17:00-18:00"}
            fg={"#ffa839"}
            bg={"#E8DDFF"}
            icon={"Assets/Food/snacks.png"}
          />
          <MenuCard
            type={"Dinner"}
            time={"20:00-22:00"}
            fg={"#ffa839"}
            bg={"#fff4ee"}
            icon={"Assets/Food/dinner.png"}
          />
        </Slider>
      </div>
    </div>
  );
};

export default StudentMenu;

const MenuCard = ({ type, time, bg, fg, icon }) => {
  return (
    <div className="stuMenuCard" style={{ background: bg }}>
      <div className="stuMenuType">
        <div className="stuMenuTypeName">
          <p>{type}</p>
        </div>
        <div className="setMenuTypeTime">
          <p>{time}</p>
        </div>
      </div>
      <div className="stuMenuDetails">
        <div className="stuMenuText">
          <p style={{ color: fg }}>Puri,Sabji,and Tea/Coffee</p>
        </div>
        <div className="stuMenuImage">
          <img src={icon} />
        </div>
      </div>
    </div>
  );
};
