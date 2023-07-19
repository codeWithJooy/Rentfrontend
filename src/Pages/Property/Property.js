import React, { useState, useEffect } from "react";
import "./Property.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PropertyInit from "./PropertyInit";
import FloorSkeleton from "../../Components/Skeletons/FloorSkeleton";
const Property = () => {
  const history = useHistory();
  const floorPresent = useSelector((state) => state.floor.floorPresent);
  useEffect(() => {
    if (floorPresent) {
      history.push("/floor");
    }
  }, []);
  if (!floorPresent) {
    return (
      <div className="propertyHome">
        <Header />
        {!floorPresent && <PropertyInit />}

        <Footer page={"Property"} />
      </div>
    );
  } else {
    return <FloorSkeleton />;
  }
};

export default Property;
