import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Login.css";
import { userEmail, userLogin } from "../../actions/userAction";

const AddEmail = () => {
  const userId = useSelector((state) => state.user.userId);
  const propertyId = useSelector((state) => state.user.propertyId);

  const [email, setEmail] = useState("");
  const history = useHistory();
  const handleChange = (e) => {
    setEmail(e.target.value)
  };
  const handleNext=()=>{
    (async()=>{
        if(await userEmail(email)){
            history.push("/otp")
        }
    })()
  }
  return (
    <div className="mainEntry">
      <div className="mainEntryContainer">
        <div className="entryTop">
          <div className="entryTitle">{"Hello Lost Soul"}</div>
          <div className="entryDescription">{"Enter Your email given with RentPg"}</div>
        </div>
        <div className="entryData">
          <div className="entryDataUnit">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          
          <div className="entryDataButton">
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmail;
