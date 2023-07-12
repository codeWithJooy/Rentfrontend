import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../Components/Carousel/Carousel";
const FoodListTest = () => {
  const daysArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [days, setDays] = useState(0);
  return (
    <div className="foodListContainer">
      <div className="listDays">
        <div
          className={`listUnits ${
            daysArray[days] == "Mon" ? "listUnitActive" : ""
          }`}
        >
          {"Mon"}
        </div>
        <div
          className={`listUnits ${
            daysArray[days] == "Tue" ? "listUnitActive" : ""
          }`}
        >
          {"Tue"}
        </div>
        <div
          className={`listUnits ${
            daysArray[days] == "Wed" ? "listUnitActive" : ""
          }`}
        >
          {"Wed"}
        </div>
        <div
          className={`listUnits ${
            daysArray[days] == "Thu" ? "listUnitActive" : ""
          }`}
        >
          {"Thu"}
        </div>
        <div
          className={`listUnits ${
            daysArray[days] == "Fri" ? "listUnitActive" : ""
          }`}
        >
          {"Fri"}
        </div>
        <div
          className={`listUnits ${
            daysArray[days] == "Sat" ? "listUnitActive" : ""
          }`}
        >
          {"Sat"}
        </div>
        <div
          className={`listUnits ${
            daysArray[days] == "Sun" ? "listUnitActive" : ""
          }`}
        >
          {"Sun"}
        </div>
      </div>
      <Carousel setData={setDays}>
        <FoodListPage day={"Monday"} />
        <FoodListPage day={"Tuesday"} />
        <FoodListPage day={"Wednesday"} />
        <FoodListPage day={"Thursday"} />
        <FoodListPage day={"Friday"} />
        <FoodListPage day={"Saturday"} />
        <FoodListPage day={"Sunday"} />
      </Carousel>
    </div>
  );
};

const FoodListPage = ({ day }) => {
  return (
    <div className="foodList">
      <div className="foodListTitle">
        <p>{day}</p>
      </div>
      <FoodListUnit meal={"BreakFast"} />
      <FoodListUnit meal={"Lunch"} />
      <FoodListUnit meal={"Snacks"} />
      <FoodListUnit meal={"Dinner"} />
    </div>
  );
};
const FoodListUnit = ({ meal }) => {
  return (
    <div className="foodListUnit">
      <div className="listImg">
        <img src="Assets/Food/food.png" />
      </div>
      <div className="listDetails">
        <div className="listDetailsTop">
          <div className="mealType">{meal}</div>
          <div className="mealTime">{"8:00 AM to 10:00 AM"}</div>
        </div>
        <div className="listDetailsBottom">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};
export default FoodListTest;
