import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSignup } from "../../actions/userAction";
import "./Login.css";

const Signup = () => {
  //This is to check if user is already present and redirect to "/add" if present.
  const userPresent = useSelector((state) => state.user);

  //We are saving firstName,lastName,email,number and password.
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number:"",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  //Function to update user's details
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Function to handle user signup
  const handleSignUp = () => {
    setLoading(true)
    setTimeout(()=>{
      userSignup(user)
      setLoading(false)
    },1000)
  };

  //Redirect to SignIn page
  const handleSignIn = () => {
    history.push("/login");
  };

  //We checks onload is user is present,if present redirects to "/add"
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
          <button onClick={handleSignUp} disabled={loading}>
              {loading ? (
                <div className="loader"></div>
              ) : (
                "Sign Up"
              )}
            </button>
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
