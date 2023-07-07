import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Rooms.css";

import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import RoomsCard from "./RoomsCard";
import { getRooms } from "../../../actions/roomActions";
const Rooms = () => {
  const floor = useSelector((state) => state.floor.selectedFloor);
  const user = useSelector((state) => state.user);
  const [roomCard, setRoomCard] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await getRooms(user.userId, user.propertyId, floor);
      setRoomCard(data);
    })();
  }, []);
  return (
    <div className="rooms">
      <Header />
      <div className="roomsHolder">
        {roomCard &&
          roomCard.map((data, index) => (
            <RoomsCard
              name={data.name}
              status={data.status}
              type={data.type}
              rate={data.rate}
              key={index}
            />
          ))}
      </div>
      <Footer page={"Property"} />
    </div>
  );
};

export default Rooms;
