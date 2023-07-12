import React from "react";

const FoodAdd = () => {
  return (
    <div className="foodAddContainer">
      <div className="foodAddTitle">
        <p>Choose food timings for your Property</p>
      </div>
      <div className="foodAddSection">
        <FoodTime type="Breakfast" />
        <FoodTime type="Lunch" />
        <FoodTime type="Snacks" />
        <FoodTime type="Dinner" />
      </div>
      <div className="foodAddButton">
        <button>Save</button>
      </div>
    </div>
  );
};

export default FoodAdd;

const FoodTime = ({ type }) => {
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
        <input type="time" value="08:00" />
      </div>
      <div className="addMealTime">
        <input type="time" value="10:00" />
      </div>
      {/* <div className="addMealTick">
        <input type="checkbox" />
      </div> */}
    </div>
  );
};
