import React from "react";
import { useSelector } from "react-redux";
import { activateFood } from "../../actions/foodAction";

const FoodInit = () => {
  const { userId, propertyId } = useSelector((state) => state.user);
  const handleActive = () => {
    activateFood(userId, propertyId);
  };
  return (
    <div className="foodInitContainer">
      <div className="foodBox">
        <img src="Assets/Food/food.png" />
        <div className="foodInitDes">
          <p>The food menu is not activted</p>
        </div>
        <div className="foodInitButton">
          <button onClick={handleActive}>{"Activate Now"}</button>
        </div>
      </div>
    </div>
  );
};

export default FoodInit;
