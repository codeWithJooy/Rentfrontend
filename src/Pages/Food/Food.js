import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Food.css";
import FoodInit from "./FoodInit";
import FoodAdd from "./FoodAdd";
const Food = () => {
  return (
    <div className="foodMain">
      <Header />
      <FoodAdd />
      <Footer />
    </div>
  );
};

export default Food;
