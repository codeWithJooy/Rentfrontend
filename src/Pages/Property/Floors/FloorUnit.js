import React from "react";

const FloorUnit = ({ floorName, setFloorDetails, setFloorName }) => {
  const handleFloorDetails = () => {
    setFloorName(floorName);
    setFloorDetails(true);
    console.log(floorName);
  };
  return (
    <div className="floorUnit">
      <div className="floorUnitTop">
        <div className="floor">{floorName}</div>
        <div className="floorDelete">
          <img src="Assets/Property/delete.png" />
          <p>Delete</p>
        </div>
      </div>
      <div className="floorButton">
        <button onClick={handleFloorDetails} className="floorUnitButton">
          {"+ Add Unit"}
        </button>
      </div>
    </div>
  );
};

export default FloorUnit;
