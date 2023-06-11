import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div className="getStarted">
      <div className="getStartedImage">
        <img src="Assets/Signup/roberto-nickson-oQ56kobbYLM-unsplash.jpg" />
      </div>
      <div className="topSection">
        <div className="topText">
          <p>One stop renting solution for your property</p>
        </div>
        <div className="topDescription">
          <p>RentPG is the most trusted & reliable helper of property owners</p>
        </div>
        <div className="buttonSection">
          <button className="buttonSign">Register</button>
          <button className="buttonLogin">SignIn</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
