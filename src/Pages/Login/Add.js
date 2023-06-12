import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Add = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleAdd = () => {
    history.push("/home");
  };
  const handleSignIn = () => {
    history.push("/login");
  };
  return (
    <div className="mainEntry">
      <div className="mainEntryContainer">
        <div className="entryTop">
          <div className="entryTitle">{"Add Property"}</div>
          <div className="entryDescription">{""}</div>
        </div>
        <div className="entryData">
          <div className="entryDataUnit">
            <input type="text" placeholder="Property Name" />
          </div>
          <div className="entryDataUnit">
            <input type="text" placeholder="Property Contact" />
          </div>
          <div className="entryDataUnit">
            <input type="text" placeholder="Pincode" />
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
