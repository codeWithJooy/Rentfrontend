import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import Toasty from "../../Components/Toasty/Toasty";
import { userSignup } from "../../actions/userAction";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignUp = () => {
    //history.push("/add");
    userSignup(user);
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
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={user.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="entryDataUnit">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={user.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="entryDataUnit">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="entryDataUnit">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            />
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
        <Toasty />
      </div>
    </div>
  );
};

export default Signup;
