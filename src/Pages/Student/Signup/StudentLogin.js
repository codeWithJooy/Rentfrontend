import React, { useState, useEffect } from "react";
import "./StudentSignup.css";

const StudentLogin = () => {
  return (
    <div className="stuSignMain">
      <div className="stuSignContainer">
        <div className="stuSignPic">
          <img src="Assets/Students/signup.jpg" />
        </div>
        <div className="stuSignTop">
          <div className="stuSignTitle">
            <p>Sonu PG </p>
          </div>
          <div className="stuSignDes">
            <p>Log In to Your Account</p>
          </div>
        </div>
        <div className="stuSignDataSection">
          <div className="stuSignDataUnit">
            <div className="stuSignDataUnitInput">
              <label>Email</label>
              <input type="text" />
            </div>
          </div>
          <div className="stuSignDataUnit">
            <div className="stuSignDataUnitInput">
              <label>Password</label>
              <input type="pasword" />
            </div>
          </div>
          <div className="stuSignDataUnit">
            <button>Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
