import React from "react";
import { useHistory } from "react-router-dom";
import "./GetStarted.css";

const GetStarted = () => {
  const history = useHistory();

  const handleSignUp = () => {
    history.push("/signup");
  };
  const handleSignIn = () => {
    history.push("/login");
  };

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
          <button onClick={handleSignUp} className="buttonSign">
            Register
          </button>
          <button onClick={handleSignIn} className="buttonLogin">
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
