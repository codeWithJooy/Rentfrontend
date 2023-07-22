import React, { useState, useEffect } from "react";
import "./Property.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PropertyInit from "./PropertyInit";
import { getTotalFloors } from "../../actions/floorActions";
import FloorSkeleton from "../../Components/Skeletons/FloorSkeleton";
const Property = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const { userId, propertyId } = user;
  const [forceUpdate, setForceUpdate] = useState(true);
  useEffect(() => {
    (async () => {
      if (await getTotalFloors(userId, propertyId)) {
        history.push("/floor");
      }
      setForceUpdate(false);
    })();
  }, []);
  if (!forceUpdate) {
    return (
      <div className="propertyHome">
        <Header />
        <PropertyInit setForceUpdate={setForceUpdate} />
        <Footer page={"Property"} />
      </div>
    );
  } else {
    return <FloorSkeleton />;
  }
};

export default Property;
