import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Splash.css";

const Splash = () => {
  let history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/get-started");
    }, 4000);
  }, []);
  return (
    <div className="splashMain">
      <img src={"Assets/Logo/RentPG.jpg"} />
    </div>
  );
};

export default Splash;
