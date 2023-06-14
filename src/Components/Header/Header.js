import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ name = "AbhiPg", link = "/home", type = "header" }) => {
  const history = useHistory();

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <img src="Assets/Header/RentPG.jpg" />
        </div>
        <div className="headerTitle">
          <p>{name}</p>
        </div>
        <div className="headerNotifications">
          <img src="Assets/Header/notification.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
