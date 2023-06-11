import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div className="getStarted">
      <div className="overlay"></div>
      <div className="topSection">
        <div className="topImage">
          <img src="Assets/Logo/RentPG.jpg" />
        </div>
        <div className="topText">
          <p>We Write about RentPG to tell user about us.</p>
        </div>
      </div>
      <div className="startButton">
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default GetStarted;
