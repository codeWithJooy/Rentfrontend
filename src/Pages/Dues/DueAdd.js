import React from "react";
import "./Dues.css";

import Header from "../../Components/Header/Header";
const DueAdd = () => {
  return (
    <div className="duesMain">
      <Header />
      <div className="duesNavbar">
        <div className="navUnit activeUnit">
          <img src="Assets/Property/bed.png" />
          <div className="navTitle">
            <p>Rooms</p>
            <p className="roomTotal">3 Rooms</p>
          </div>
        </div>
        <div className="navUnit">
          <img src="Assets/Property/bed.png" />
          <div className="navTitle">
            <p>Rooms</p>
            <p className="roomTotal">3 Rooms</p>
          </div>
        </div>
      </div>
      <DuesUnit />
    </div>
  );
};

export default DueAdd;

const DuesUnit = () => {
  return (
    <div className="duesCard">
      <div className="duesTop">
        <div className="duesTopTitle">
          <p>Room Ground1</p>
        </div>
        <div className="duesTopButton">
          <button>Add Dues</button>
        </div>
      </div>
      <div className="duesRoom">
        <p>Room Ground1</p>
      </div>
    </div>
  );
};
