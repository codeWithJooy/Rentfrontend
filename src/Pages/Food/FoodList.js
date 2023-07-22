import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../Components/Carousel/Carousel";
import { useSelector } from "react-redux";
import { updateFood } from "../../actions/foodAction";
const FoodList = () => {
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
  const days = useSelector((state) => state.food.days);
  const dayIndex = days.findIndex((unit) => unit.title == day);
  const { userId, propertyId } = useSelector((state) => state.user);
  const [data, setData] = useState({
    title: days[dayIndex].title,
    breakfast: days[dayIndex].breakfast,
    lunch: days[dayIndex].lunch,
    snacks: days[dayIndex].snacks,
    dinner: days[dayIndex].dinner,
  });
  const updateFoodHandle = () => {
    updateFood(userId, propertyId, data);
  };
  return (
    <div className="foodList">
      <div className="foodListTitle">
        <p>{day}</p>
      </div>
      <FoodListUnit
        day={day}
        meal={"Breakfast"}
        data={data}
        setData={setData}
      />
      <FoodListUnit day={day} meal={"Lunch"} data={data} setData={setData} />
      <FoodListUnit day={day} meal={"Snacks"} data={data} setData={setData} />
      <FoodListUnit day={day} meal={"Dinner"} data={data} setData={setData} />
      <div className="foodEdit" onClick={updateFoodHandle}>
        <img src="Assets/Food/food.png" />
      </div>
    </div>
  );
};
const FoodListUnit = ({ day, meal, data, setData }) => {
  const food = useSelector((state) => state.food);
  const time = food.time.find((unit) => unit.title == meal);
  const foodValue = food.days.find((unit) => unit.title == day);
  let mealLowerCase = meal.toLowerCase();
  const handleFoodUpdate = (e) => {
    setData({ ...data, [mealLowerCase]: e.target.value });
  };
  return (
    <div className="foodListUnit">
      <div className="listImg">
        <img src={`Assets/Food/${mealLowerCase}.png`} />
      </div>
      <div className="listDetails">
        <div className="listDetailsTop">
          <div className="mealType">{meal}</div>
          <div className="mealTime">{`${time.start} to ${time.end}`}</div>
        </div>
        <div className="listDetailsBottom">
          <input
            type="text"
            value={data[meal.toLowerCase()]}
            onChange={handleFoodUpdate}
          />
        </div>
      </div>
    </div>
  );
};
export default FoodList;
