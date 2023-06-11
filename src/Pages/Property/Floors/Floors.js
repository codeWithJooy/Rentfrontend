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
  const totalFloors = useSelector((state) => state.floor.totalFloors);
  let arr = [];
  for (let i = 0; i <= totalFloors; i++) {
    if (i == 0) {
      arr.push("Ground Floor");
    } else {
      arr.push("Floor " + i);
    }
  }
  return (
    <div className="floorDiv">
      <Header />
      {arr.map((data, key) => (
        <FloorUnit
          floorName={data}
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
