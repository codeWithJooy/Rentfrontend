import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { timeActivated } from "../../actions/foodAction";
const FoodAdd = () => {
  const time = useSelector((state) => state.food.time);
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(timeActivated());
  };
  useEffect(() => {
    if (timeActivated) {
    }
  }, []);
  return (
    <div className="foodAddContainer">
      <div className="foodAddTitle">
        <p>Choose food timings for your Property</p>
      </div>
      <div className="foodAddSection">
        {time.map((data, val) => (
          <FoodTime type={data.title} start={data.start} end={data.end} />
        ))}
      </div>
      <div className="foodAddButton">
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default FoodAdd;

const FoodTime = ({ type, start, end }) => {
  return (
    <div className="addContainerHeader">
      <div className="addMeal">
        <div className="addMealImg">
          <img src="Assets/Food/food.png" />
        </div>
        <div className="addMealTitle">
          <p>{type}</p>
        </div>
      </div>
      <div className="addMealTime">
        <input type="time" value={start} />
      </div>
      <div className="addMealTime">
        <input type="time" value={end} />
      </div>
      {/* <div className="addMealTick">
        <input type="checkbox" />
      </div> */}
    </div>
  );
};
