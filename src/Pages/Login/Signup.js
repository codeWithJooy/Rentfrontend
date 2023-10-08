import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Login.css";
import Toasty from "../../Components/Toasty/Toasty";
import { userSignup } from "../../actions/userAction";

const Signup = () => {
  const userPresent = useSelector((state) => state.user);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number:"",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignUp = () => {
    userSignup(user);
  };
  const handleSignIn = () => {
    history.push("/login");
  };

  useEffect(() => {
    if (userPresent.userId !== "") {
      history.push("/add");
    }
  }, [userPresent.userId]);
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
              type="text"
              name="number"
              placeholder="Phone Number"
              value={user.number}
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
        {/* <Toasty /> */}
      </div>
    </div>
  );
};

export default Signup;
