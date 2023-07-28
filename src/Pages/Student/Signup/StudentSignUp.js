import React, { useState, useEffect } from "react";
import "./StudentSignup.css";

const StudentSignUp = () => {
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
            <p>Add Your Details to get started</p>
          </div>
        </div>
        <div className="stuSignDataSection">
          <div className="stuSignDataUnit">
            <div className="stuSignDataUnitInput">
              <label>Name</label>
              <input type="text" readOnly />
            </div>
          </div>
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
            <div className="stuSignDataUnitInput">
              <label>Confirm Password</label>
              <input type="password" />
            </div>
          </div>
          <div className="stuSignDataUnit">
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSignUp;
