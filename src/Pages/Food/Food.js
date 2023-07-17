import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Food.css";
import FoodInit from "./FoodInit";
import FoodAdd from "./FoodAdd";
import FoodList from "./FoodList";
import FoodListTest from "./FoodListTest";
import { useSelector } from "react-redux";
import { getActivated } from "../../actions/foodAction";
const Food = () => {
  const { userId, propertyId } = useSelector((state) => state.user);
  const activated = useSelector((state) => state.food.activated);
  const timeActivated = useSelector((state) => state.food.timeActivated);
  useEffect(() => {
    getActivated(userId, propertyId);
  }, [activated]);
  return (
    <div className="foodMain">
      <Header />
      {!activated && <FoodInit />}
      {activated && !timeActivated && <FoodAdd />}
      {activated && timeActivated && <FoodListTest />}
      <Footer />
    </div>
  );
};

export default Food;
