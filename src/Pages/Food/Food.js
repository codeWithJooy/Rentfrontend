import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Food.css";
import FoodInit from "./FoodInit";
import FoodAdd from "./FoodAdd";
import FoodList from "./FoodList";
import FoodListTest from "./FoodListTest";
const Food = () => {
  return (
    <div className="foodMain">
      <Header />
      <FoodListTest />
      <Footer />
    </div>
  );
};

export default Food;
