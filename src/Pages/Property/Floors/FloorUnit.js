import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setFloor } from "../../../actions/floorActions";
const FloorUnit = ({ floorData, setFloorDetails, setFloorName }) => {
  const { name, roomsTypes } = floorData;
  const history = useHistory();
  const dispatch = useDispatch();
  let roomsType =
    Object.keys(floorData.roomsType).length > 1
      ? floorData.roomsType
      : { single: 0, double: 0, triple: 0 };
  const single = parseInt(roomsType.single);
  const double = parseInt(roomsType.double);
  const triple = parseInt(roomsType.triple);

  const handleFloorDetails = () => {
    setFloorName(name);
    setFloorDetails(true);
  };
  const handleFloorCheckout = () => {
    dispatch(setFloor(name));
    history.push("/rooms");
  };
  return (
    <div className="floorUnit">
      <div className="floorUnitTop">
        <div className="floor">{name}</div>
        <div className="floorDelete">
          <img src="Assets/Property/delete.png" />
          <p>Delete</p>
        </div>
      </div>
      <div className="floorPlan">
        {single > 0 && (
          <div className="floorPlanUnit">
            <img src="Assets/Property/bed.png" />
            <p>{single} Single Sharing</p>
          </div>
        )}
        {double > 0 && (
          <div className="floorPlanUnit">
            <img src="Assets/Property/bed.png" />
            <p>{double} Double Sharing</p>
          </div>
        )}
        {triple > 0 && (
          <div className="floorPlanUnit">
            <img src="Assets/Property/bed.png" />
            <p>{triple} Triple Sharing</p>
          </div>
        )}
      </div>
      <div className="floorButton">
        {single < 1 && double < 1 && triple < 1 && (
          <button onClick={handleFloorDetails} className="floorUnitButton">
            {"+ Add Unit"}
          </button>
        )}
        {(single > 1 || double > 1 || triple > 1) && (
          <button onClick={handleFloorCheckout} className="floorCheckoutButton">
            {"Checkout Unit"}
          </button>
        )}
      </div>
    </div>
  );
};

export default FloorUnit;
