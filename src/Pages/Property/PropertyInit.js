import React, { useState, useEffect } from "react";
import "./Property.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setTotalFloors } from "../../actions/floorActions";

const PropertyInit = () => {
  const [floors, setFloors] = useState(0);
  const floorPresent = useSelector((state) => state.floor.floorPresent);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (floorPresent) {
      history.push("/floor");
    }
  }, []);
  const handleFloors = () => {
    dispatch(setTotalFloors(floors));
    history.push("/floor");
  };
  return (
    <div className="propertyContainer">
      <div className="propertyTitle">
        <p>Add Rooms in your property</p>
      </div>
      <div className="propertyNumber">
        <div className="propertyDetails">
          <div className="detailsTitle">
            <p>How Many floors do you have in AbhiPg ?</p>
          </div>
          <div className="propertyDetailsInput">
            <input
              type="text"
              placeholder="Total Floor"
              onChange={(e) => setFloors(e.target.value)}
            />
            <img src="Assets/Property/next.png" onClick={handleFloors} />
          </div>
        </div>
        <div className="propertyIcon">
          <img src="Assets/Property/apartment.png" />
        </div>
      </div>
    </div>
  );
};

export default PropertyInit;
