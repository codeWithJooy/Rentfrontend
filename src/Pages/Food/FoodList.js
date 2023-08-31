import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../Components/Carousel/Carousel";
import { useSelector } from "react-redux";
import { updateFood } from "../../actions/foodAction";
import { updateToast } from "../../actions/toastActions";
import { CodeAnalogy } from "../../Components/Toasty/Toasty";
const FoodList = () => {
  const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let today = new Date()
  const [days, setDays] = useState(today.getDay());
  console.log()
  return (
    <div className="foodListContainer">
      <div className="listDays">

        <div
          className={`listUnits ${daysArray[days] == "Sun" ? "listUnitActive" : ""
            }`}
        >
          {"Sun"}
        </div>
        <div
          className={`listUnits ${daysArray[days] == "Mon" ? "listUnitActive" : ""
            }`}
        >
          {"Mon"}
        </div>
        <div
          className={`listUnits ${daysArray[days] == "Tue" ? "listUnitActive" : ""
            }`}
        >
          {"Tue"}
        </div>
        <div
          className={`listUnits ${daysArray[days] == "Wed" ? "listUnitActive" : ""
            }`}
        >
          {"Wed"}
        </div>
        <div
          className={`listUnits ${daysArray[days] == "Thu" ? "listUnitActive" : ""
            }`}
        >
          {"Thu"}
        </div>
        <div
          className={`listUnits ${daysArray[days] == "Fri" ? "listUnitActive" : ""
            }`}
        >
          {"Fri"}
        </div>
        <div
          className={`listUnits ${daysArray[days] == "Sat" ? "listUnitActive" : ""
            }`}
        >
          {"Sat"}
        </div>

      </div>
      <Carousel day={days} setData={setDays}>
        <FoodListPage day={"Sunday"} />
        <FoodListPage day={"Monday"} />
        <FoodListPage day={"Tuesday"} />
        <FoodListPage day={"Wednesday"} />
        <FoodListPage day={"Thursday"} />
        <FoodListPage day={"Friday"} />
        <FoodListPage day={"Saturday"} />

      </Carousel>
    </div>
  );
};

const FoodListPage = ({ day }) => {
  const days = useSelector((state) => state.food.days);
  const dayIndex = days.findIndex((unit) => unit.title == day);
  const { userId, propertyId } = useSelector((state) => state.user);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    title: days[dayIndex].title,
    breakfast: days[dayIndex].breakfast,
    lunch: days[dayIndex].lunch,
    snacks: days[dayIndex].snacks,
    dinner: days[dayIndex].dinner,
  });
  const updateFoodHandle = () => {
    updateFood(userId, propertyId, data);
    setEdit(false);
  };
  const updateEdit = () => {
    setEdit(true);
    updateToast({
      code: CodeAnalogy.SUCCESS,
      title: "Edit Food Menu",
    });
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
        edit={edit}
      />
      <FoodListUnit
        day={day}
        meal={"Lunch"}
        data={data}
        setData={setData}
        edit={edit}
      />
      <FoodListUnit
        day={day}
        meal={"Snacks"}
        data={data}
        setData={setData}
        edit={edit}
      />
      <FoodListUnit
        day={day}
        meal={"Dinner"}
        data={data}
        setData={setData}
        edit={edit}
      />
      {edit && (
        <div className="foodEdit" onClick={updateFoodHandle}>
          <img src="Assets/Property/done.png" />
        </div>
      )}
      {!edit && (
        <div className="foodEdit" onClick={updateEdit}>
          <img src="Assets/Property/edit.png" />
        </div>
      )}
    </div>
  );
};
const FoodListUnit = ({ day, meal, data, setData, edit }) => {
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
          {/* <input
            type="text"
            value={data[meal.toLowerCase()]}
            onChange={handleFoodUpdate}
            style={{ overflowX: "hidden", overflowY: "scroll" }}
          /> */}
          <textarea
            rows={2}
            value={data[meal.toLowerCase()]}
            onChange={handleFoodUpdate}
            style={{ resize: "vertical", spellcheck: "false" }}
            readOnly={!edit}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default FoodList;
