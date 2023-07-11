import React from "react";

const FoodInit = () => {
  return (
    <div className="foodInitContainer">
      <div className="foodBox">
        <img src="Assets/Food/food.png" />
        <div className="foodInitDes">
          <p>The food menu is not activted</p>
        </div>
        <div className="foodInitButton">
          <button>{"Activate Now"}</button>
        </div>
      </div>
    </div>
  );
};

export default FoodInit;
