import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleSignUp = () => {
    history.push("/add");
  };
  const handleSignIn = () => {
    history.push("/login");
  };
  return (
    <div className="mainEntry">
      <div className="mainEntryContainer">
        <div className="entryTop">
          <div className="entryTitle">{"Hello Amigo !"}</div>
          <div className="entryDescription">{"Welcome to RentPG "}</div>
        </div>
        <div className="entryData">
          <div className="entryDataUnit">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="entryDataUnit">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="entryDataUnit">
            <input type="text" placeholder="Email" />
          </div>
          <div className="entryDataUnit">
            <input type="password" placeholder="Password" />
          </div>
          <div className="entryDataButton">
            <button onClick={handleSignUp}>Sign Up</button>
            <p>
              Already a Member ?
              <span onClick={handleSignIn} className="register">
                SignIn Now
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
