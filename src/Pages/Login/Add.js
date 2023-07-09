import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { userProperty } from "../../actions/userAction";
import "./Login.css";

const Add = () => {
  const userId = useSelector((state) => state.user.userId);
  const propertyId = useSelector((state) => state.user.propertyId);

  const [property, setProperty] = useState({
    name: "",
    contact: "",
    pincode: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    userProperty(property, userId);
  };
  const handleSignIn = () => {
    history.push("/login");
  };
  useEffect(() => {
    if (propertyId != "") {
      history.push("/home");
    }
  }, [propertyId]);
  return (
    <div className="mainEntry">
      <div className="mainEntryContainer">
        <div className="entryTop">
          <div className="entryTitle">{"Add Property"}</div>
          <div className="entryDescription">{""}</div>
        </div>
        <div className="entryData">
          <div className="entryDataUnit">
            <input
              type="text"
              placeholder="Property Name"
              name="name"
              value={property.name}
              onChange={handleChange}
            />
          </div>
          <div className="entryDataUnit">
            <input
              type="number"
              placeholder="Property Contact"
              name="contact"
              value={property.contact}
              onChange={handleChange}
            />
          </div>
          <div className="entryDataUnit">
            <input
              type="number"
              placeholder="Pincode"
              name="pincode"
              value={property.pincode}
              onChange={handleChange}
            />
          </div>
          <div className="entryDataButton">
            <button onClick={handleAdd}>Add Property</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
