import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Login.css";
import { userLogin } from "../../actions/userAction";

const Login = () => {
  const userId = useSelector((state) => state.user.userId);
  const propertyId = useSelector((state) => state.user.propertyId);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignUp = () => {
    history.push("/signup");
  };
  const handleSignIn = () => {
    userLogin(user);
  };
  useEffect(() => {
    if (userId != "") {
      if (propertyId == "") {
        history.push("/add");
      } else {
        history.push("/home");
      }
    }
  }, [userId]);
  return (
    <div className="mainEntry">
      <div className="mainEntryContainer">
        <div className="entryTop">
          <div className="entryTitle">{"Hello Again"}</div>
          <div className="entryDescription">{"Welcome back to RentPG !!!"}</div>
        </div>
        <div className="entryData">
          <div className="entryDataUnit">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="entryDataUnit">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
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
