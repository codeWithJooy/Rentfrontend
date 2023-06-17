import React, { useState } from "react";
import "./Dues.css";

import Header from "../../Components/Header/Header";
const DueAdd = () => {
  const [nav, setNav] = useState(true);
  const [open, setOpen] = useState(false);
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
          </div>
        </div>
      </div>
      <DuesUnit setOpen={setOpen} />
      {open && <DueCategory setOpen={setOpen} />}
    </div>
  );
};

export default DueAdd;

const DuesUnit = ({ setOpen }) => {
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="duesCard">
      <div className="duesTop">
        <div className="duesTopTitle">
          <p>Abhi Hazra</p>
        </div>
        <div className="duesTopButton">
          <button onClick={handleOpen}>Add Dues</button>
        </div>
      </div>
      <div className="duesRoom">
        <p>Room:Ground1</p>
      </div>
    </div>
  );
};

const DueCategory = ({ setOpen }) => {
  const handleCross = () => {
    setOpen(false);
  };
  return (
    <div className="categoryMain">
      <div className="categoryCross">
        <img src="Assets/components/cross.png" onClick={handleCross} />
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
