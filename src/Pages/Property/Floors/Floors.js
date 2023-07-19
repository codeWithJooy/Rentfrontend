import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Floors.css";
import { getFloors } from "../../../actions/floorActions";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import FloorUnit from "./FloorUnit";
import AddFloor from "./AddFloor";
const Floors = () => {
  const user = useSelector((state) => state.user);
  const [floorDetails, setFloorDetails] = useState(false);
  const [floorName, setFloorName] = useState("");
  const [floorData, setFloorData] = useState(null);
  useEffect(() => {
    if (!floorDetails) {
      (async () => {
        let data = await getFloors(user.userId, user.propertyId);
        setFloorData(data);
      })();
    }
  }, [floorDetails]);
  if (floorData) {
    return (
      <div className="floorDiv">
        <Header />
        <div className="floorContainer">
          {floorData != null &&
            floorData.map((data, key) => (
              <FloorUnit
                floorData={data}
                key={key}
                setFloorDetails={setFloorDetails}
                setFloorName={setFloorName}
              />
            ))}
        </div>
        {floorDetails && (
          <AddFloor floorName={floorName} setFloorDetails={setFloorDetails} />
        )}
        <Footer page={"Property"} />
      </div>
    );
  } else return <></>;
};

export default Floors;
