import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./DuesRoom.css";
import { getAllRooms } from "../../actions/roomActions";

const DuesUnitRoom = () => {
  const user = useSelector((state) => state.user);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await getAllRooms(user.userId, user.propertyId);
      console.log(data);
      setRooms(data);
    })();
  }, []);

  return (
    <div className="duesRoom">
      {rooms &&
        rooms.map((unit, key) => <RoomDuesCard key={key} name={unit.name} />)}
    </div>
  );
};

export default DuesUnitRoom;

const RoomDuesCard = ({ name }) => {
  return (
    <div className="roomDuesCard">
      <div className="roomDuesTop">
        <div className="roomDuesroom">
          <p>{name}</p>
        </div>
        <div className="roomDuesButton">
          <button>Add Dues</button>
        </div>
      </div>
      <div className="roomDuesBottom">
        <div className="roomDuesExtra">
          <p>2 tenants are staying in this room</p>
        </div>
      </div>
    </div>
  );
};
