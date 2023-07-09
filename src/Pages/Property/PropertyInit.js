import React, { useState, useEffect } from "react";
import "./Property.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTotalFloors, setTotalFloors } from "../../actions/floorActions";

const PropertyInit = ({ setToast }) => {
  const [floors, setFloors] = useState(0);
  const [forceUpdate, setForceUpdate] = useState(true);
  const floorPresent = useSelector((state) => state.floor.floorPresent);
  const user = useSelector((state) => state.user);
  const { userId, propertyId } = user;
  const history = useHistory();

  useEffect(() => {
    if (forceUpdate) {
      (async () => {
        if (await getTotalFloors(userId, propertyId)) {
          history.push("/floor");
        }
      })();
    }
    setForceUpdate(false);
  }, [forceUpdate]);
  const handleFloors = () => {
    setForceUpdate(true);
    setTotalFloors(userId, propertyId, floors);
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
