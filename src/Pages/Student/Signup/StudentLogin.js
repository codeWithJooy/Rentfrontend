import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./StudentSignup.css";
import { studentLogin } from "../../../actions/Student/studentAction";

const StudentLogin = () => {
  const history = useHistory();

  const [cred, setCred] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    (async () => {
      if (await studentLogin(cred.email, cred.password)) {
        history.push("/student");
      }
    })();
  };
  const handleSign = () => {
    history.push("/studentNumberLogin");
  };
  return (
    <div className="stuSignMain">
      <div className="stuSignContainer">
        <div className="stuSignPic">
          <img src="Assets/Students/signup.jpg" />
        </div>
        <div className="stuSignTop">
          <div className="stuSignTitle">
            <p>Rent PG </p>
          </div>
          <div className="stuSignDes">
            <p>Log In to Your Account</p>
          </div>
        </div>
        <div className="stuSignDataSection">
          <div className="stuSignDataUnit">
            <div className="stuSignDataUnitInput">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={cred.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="stuSignDataUnit">
            <div className="stuSignDataUnitInput">
              <label>Password</label>
              <input
                type="pasword"
                name="password"
                value={cred.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="stuSignButtonUnit">
            <button onClick={handleLogin}>Log In</button>
            <p className="notSection">
              Not A Member ?{" "}
              <span className="notSectionSpan" onClick={handleSign}>
                SignUp
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
