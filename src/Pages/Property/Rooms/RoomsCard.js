import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedRoom } from "../../../actions/roomActions";
import "./Rooms.css";

const RoomsCard = ({ roomId, name, type, status, rate }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.room.rooms);
  const handleCardClick = () => {
    dispatch(selectedRoom(roomId));
    history.push({
      pathname: "/room",
      state: { active:"details" }
    });
  }
    const handleAddTenant = () => {
      dispatch(selectedRoom(roomId));
      history.push({
        pathname: "/room",
        state: { active:"tenant" }
      });
  };
  return (
    <div className="roomsContainer" >
      <div className="roomsUnit">
        <div onClick={handleCardClick}>
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
            <p>Rs {rate} / bed</p>
          </div>
        </div>
        </div>
        <div className="roomsUnitFacility">
          <div className="roomsAddFacility">
            <p>Add Facilities</p>
            <img src="Assets/Property/next.png" />
          </div>
          <div className="roomsAddTenant">
            <button onClick={handleAddTenant}>{"Add Tenant"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
