import React, { useState } from "react";
import "./Dues.css";

import Header from "../../Components/Header/Header";
const DueAdd = () => {
  const [nav, setNav] = useState(true);
  return (
    <div className="duesMain">
      <Header type="back" name="Electricity Due" link="/dues" />
      <div className="duesNavbar">
        <div
          className={`navUnit ${nav ? "activeUnit" : ""}`}
          onClick={() => setNav(!nav)}
        >
          <img
            src={`${
              nav
                ? "Assets/Footer/apartment_selected.png"
                : "Assets/Footer/apartment.png"
            }`}
          />
          <div className="navTitle">
            <p>Rooms</p>
            <p className="roomTotal">3 Rooms</p>
          </div>
        </div>
        <div
          className={`navUnit ${nav ? "" : "activeUnit"}`}
          onClick={() => setNav(!nav)}
        >
          <img
            src={`${
              nav
                ? "Assets/Footer/group.png"
                : "Assets/Footer/group_selected.png"
            }`}
          />
          <div className="navTitle">
            <p>Tenants</p>
            <p className="roomTotal">1 Tenant</p>
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
          <p>Abhi Hazra</p>
        </div>
        <div className="duesTopButton">
          <button>Add Dues</button>
        </div>
      </div>
      <div className="duesRoom">
        <p>Room:Ground1</p>
      </div>
    </div>
  );
};

const DueCategory = () => {
  return (
    <div className="categoryMain">
      <div className="categoryCross">
        <img src="Assets/components/cross.png" />
      </div>
      <div className="categoryContainer">
        <div className="categoryTitle">Select Expense Category </div>
        <div className="tenantAddSection">
          <p>Amount</p>
          <input type="text" />
        </div>
        <div className="tenantAddSection">
          <p>Due Date</p>
          <input type="text" />
        </div>
        <div className="tenantAddSection">
          <p>Description</p>
          <input type="text" />
        </div>
        <button className="dueButton">Add Due</button>
      </div>
    </div>
  );
};
