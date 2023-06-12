import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleSignUp = () => {
    history.push("/signup");
  };
  const handleSignIn = () => {
    history.push("/home");
  };
  return (
    <div className="mainEntry">
      <div className="mainEntryContainer">
        <div className="entryTop">
          <div className="entryTitle">{"Hello Again"}</div>
          <div className="entryDescription">{"Welcome back to RentPG !!!"}</div>
        </div>
        <div className="entryData">
          <div className="entryDataUnit">
            <input type="text" placeholder="Email" />
          </div>
          <div className="entryDataUnit">
            <input type="password" placeholder="Password" />
          </div>
          <div className="entryDataButton">
            <button onClick={handleSignIn}>Sign In</button>
            <p>
              Not a Member ?
              <span onClick={handleSignUp} className="register">
                Register Now
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
