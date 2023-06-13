import React from "react";
import "./Rooms.css";

const RoomsCard = ({ name, type, status }) => {
  return (
    <div className="roomsContainer">
      <div className="roomsUnit">
        <div className="roomsUnitTitle">
          <p>{name}</p>
        </div>
        <div className="roomsUnitType">
          <img src="Assets/Property/bed.png" />
          <p>{type} Sharing</p>
        </div>
        <div className="roomsUnitDetail">
          <div className="roomsStatus">
            <div className="roomsStatusUnit">
              <p>{status}</p>
            </div>
          </div>
          <div className="roomsRate">
            <p>Rs 0 / bed</p>
          </div>
        </div>
        <div className="roomsUnitFacility">
          <div className="roomsAddFacility">
            <p>Add Facilities</p>
            <img src="Assets/Property/next.png" />
          </div>
          <div className="roomsAddTenant">
            <button>{"Add Tenant"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
