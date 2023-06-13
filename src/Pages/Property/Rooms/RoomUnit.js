import React, { useState } from "react";
import "./Rooms.css";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";

const RoomUnit = () => {
  const [navActive, setNavActive] = useState("details");
  const handleDetailsNav = () => {
    setNavActive("details");
  };
  const handleTenantNav = () => {
    setNavActive("tenant");
  };
  return (
    <div className="rooms">
      <Header />
      <div className="roomMain">
        <div className="roomNavbar">
          <div
            className={`navUnit ${navActive === "tenant" ? "navActive" : ""}`}
            onClick={handleTenantNav}
          >
            {"Room's Tenant"}
          </div>
          <div
            className={`navUnit ${navActive === "details" ? "navActive" : ""}`}
            onClick={handleDetailsNav}
          >
            {"Room Details"}
          </div>
        </div>
        {navActive === "details" ? <RoomDetails /> : <TenantDetails />}
      </div>
      <Footer />
    </div>
  );
};

export default RoomUnit;
const TenantDetails = () => {
  return (
    <div className="tenantDetails">
      <div className="tenantEmpty">
        <div className="emptyPics">
          <img src="Assets/Property/bed.png" />
        </div>
        <div className="emptyText">{"No Tenants added yet."}</div>
        <div className="emptyButton">
          <button>Add Tenant</button>
        </div>
      </div>
    </div>
  );
};
const RoomDetails = () => {
  return (
    <div className="roomDetails">
      <div className="roomDetailsHalf">
        <div className="halfUnitLeft">
          <div className="roomDetailsUnit">
            <div className="detailsLabel">
              <p>{"Room Name"}</p>
            </div>
            <div className="detailsInput">
              <p>BASE-101</p>
            </div>
          </div>
        </div>
        <div className="halfUnitRight">
          <div className="roomDetailsUnit">
            <div className="detailsLabel">
              <p>{"Unit Type"}</p>
            </div>
            <div className="detailsInput">
              <p>Room</p>
            </div>
          </div>
        </div>
      </div>
      <div className="roomDetailsHalf">
        <div className="fullUnit">
          <div className="roomDetailsUnit">
            <div className="detailsLabel">
              <p>{"Floor"}</p>
            </div>
            <div className="detailsInput">
              <p>Ground Floor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="roomDetailsHalf">
        <div className="halfUnitLeft">
          <div className="roomDetailsUnit">
            <div className="detailsLabel">
              <p>{"Sharing Type"}</p>
            </div>
            <div className="detailsInput">
              <p>Triple</p>
            </div>
          </div>
        </div>
        <div className="halfUnitRight">
          <div className="roomDetailsUnit">
            <div className="detailsLabel">
              <p>{"Rent"}</p>
            </div>
            <div className="detailsInput">
              <p>Rs 0 / bed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
