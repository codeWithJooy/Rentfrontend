import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import "./Splash.css";
import { userLogin } from "../../actions/userAction";

const Splash = () => {
  let history = useHistory();
  const userId = useSelector((state) => state.user.userId);
  const propertyId = useSelector((state) => state.user.propertyId);
  let email = localStorage.getItem("email")
  let password = localStorage.getItem("password")

  useEffect(() => {
    (async () => {
      if (email !== "" && password !== "") {
        let user = {
          email,
          password,
        }
        userLogin(user)
      } else {
        setTimeout(() => {
          history.push("/get-started");
        }, 4000);
      }
    }
    )()
  }, []);

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
    <div className="splashMain">
      <img src={"Assets/Logo/RentPG.jpg"} />
    </div>
  );
};

export default Splash;
