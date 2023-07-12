import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FoodList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="foodListContainer">
      <div className="listDays">
        <div className="listUnits listUnitActive">{"Mon"}</div>
        <div className="listUnits">{"Tue"}</div>
        <div className="listUnits">{"Wed"}</div>
        <div className="listUnits">{"Thu"}</div>
        <div className="listUnits">{"Fri"}</div>
        <div className="listUnits">{"Sat"}</div>
        <div className="listUnits">{"Sun"}</div>
      </div>
      <Slider {...settings}>
        <FoodListPage day={"Monday"} />
        <FoodListPage day={"Tuesday"} />
        <FoodListPage day={"Wednesday"} />
        <FoodListPage day={"Thursday"} />
      </Slider>
    </div>
  );
};

const FoodListPage = ({ day }) => {
  return (
    <div className="foodList">
      <div className="foodListTitle">
        <p>{day}</p>
      </div>
      <FoodListUnit />
      <FoodListUnit />
      <FoodListUnit />
      <FoodListUnit />
    </div>
  );
};
const FoodListUnit = () => {
  return (
    <div className="foodListUnit">
      <div className="listImg">
        <img src="Assets/Food/food.png" />
      </div>
      <div className="listDetails">
        <div className="listDetailsTop">
          <div className="mealType">{"Breakfast"}</div>
          <div className="mealTime">{"8:00 AM to 10:00 AM"}</div>
        </div>
        <div className="listDetailsBottom">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};
export default FoodList;
