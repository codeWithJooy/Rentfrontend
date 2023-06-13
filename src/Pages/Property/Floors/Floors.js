import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Floors.css";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import FloorUnit from "./FloorUnit";
import AddFloor from "./AddFloor";
const Floors = () => {
  const [floorDetails, setFloorDetails] = useState(false);
  const [floorName, setFloorName] = useState("");
  const floorData = useSelector((state) => state.floor.floors);
  console.log(floorData);
  return (
    <div className="floorDiv">
      <Header />
      {floorData &&
        floorData.map((data, key) => (
          <FloorUnit
            floorData={data}
            key={key}
            setFloorDetails={setFloorDetails}
            setFloorName={setFloorName}
          />
        ))}
      {floorDetails && (
        <AddFloor floorName={floorName} setFloorDetails={setFloorDetails} />
      )}
      <Footer />
    </div>
  );
};

export default Floors;
