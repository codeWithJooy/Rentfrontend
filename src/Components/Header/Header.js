import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <img src="Assets/Header/RentPG.jpg" />
        </div>
        <div className="headerTitle">
          <p>AbhiPG</p>
        </div>
        <div className="headerNotifications">
          <img src="Assets/Header/notification.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
