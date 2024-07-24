import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import "./Splash.css";

const Splash = () => {
  let history = useHistory();

  const userId = useSelector((state) => state.user.userId);
  const propertyId = useSelector((state) => state.user.propertyId);
  
  useEffect(() => {
    setTimeout(() => {
      history.push("/get-started");
    }, 4000);
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
