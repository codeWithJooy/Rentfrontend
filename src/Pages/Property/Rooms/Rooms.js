import React from "react";
import "./Rooms.css";

import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import RoomsCard from "./RoomsCard";
const Rooms = () => {
  return (
    <div className="rooms">
      <Header />
      <RoomsCard />
      <RoomsCard />
      <RoomsCard />
      <Footer />
    </div>
  );
};

export default Rooms;
