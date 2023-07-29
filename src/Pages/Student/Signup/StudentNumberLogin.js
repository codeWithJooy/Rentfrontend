import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./StudentSignup.css";
import { checkCodeNumber } from "../../../actions/Student/studentAction";

const StudentNumberLogin = () => {
  const [cred, setCred] = useState({
    number: "",
    code: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    (async () => {
      if (await checkCodeNumber(cred.number, cred.code)) {
        history.push("/studentSignup");
      }
    })();
  };
  return (
    <div className="stuSignMain">
      <div className="stuSignContainer">
        <div className="stuSignPic">
          <img src="Assets/Students/signup.jpg" />
        </div>
        <div className="stuSignTop">
          <div className="stuSignTitle">
            <p>RentPG </p>
          </div>
          <div className="stuSignDes">
            <p>Welcome to Smart Tenant App</p>
          </div>
        </div>
        <div className="stuSignDataSection">
          <div className="stuSignDataUnit">
            <div className="stuSignDataUnitInput">
              <label>Phone Number</label>
              <input
                type="text"
                name="number"
                value={cred.number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="stuSignDataUnit">
            <div className="stuSignDataUnitInput">
              <label>Add 6-digit PG code</label>
              <input
                type="Number"
                name="code"
                value={cred.code}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="stuSignDataUnit">
            <button onClick={handleLogin}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentNumberLogin;
