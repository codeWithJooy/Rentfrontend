import React from "react";

const FoodAdd = () => {
  return (
    <div className="foodAddContainer">
      <div className="foodAddTitle">
        <p>Choose food timings for your Property</p>
      </div>
      <div className="foodAddSection">
        <div className="addContainerHeader">
          <div className="addMeal">
            <div className="addMealImg">
              <img src="Assets/Food/food.png" />
            </div>
            <div className="addMealTitle">
              <p>{"Breakfast"}</p>
            </div>
          </div>
          <div className="addMealTime">
            <input type="time" value="08:00" />
          </div>
          <div className="addMealTime">
            <input type="time" value="10:00" />
          </div>
          <div className="addMealTick">
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAdd;
