import React from "react";
import "./Dues.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Dues = () => {
  return (
    <div className="duesMain">
      <Header />
      <div className="duesContainer">
        <div className="duesUnit">
          <div className="duesUnitTitle">
            <img src="Assets/Property/bed.png" />
            <p>Rent</p>
          </div>
          <div className="duesAmount">
            <p>Variable Amount</p>
            <button>Add Dues</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Dues;
