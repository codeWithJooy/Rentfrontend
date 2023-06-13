import React from "react";
import { useSelector } from "react-redux";
import "./Rooms.css";

import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import RoomsCard from "./RoomsCard";
const Rooms = () => {
  const data = useSelector((state) => state.room.rooms);
  const floor = useSelector((state) => state.floor.selectedFloor);
  const roomCard = data.filter((room) => room.floor == floor);
  console.log(roomCard);
  return (
    <div className="rooms">
      <Header />
      <div className="roomsHolder">
        {roomCard.map((data, index) => (
          <RoomsCard
            name={data.name}
            status={data.status}
            type={data.type}
            key={index}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Rooms;
