import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ name = "AbhiPg", link = "/home", type = "header" }) => {
  const history = useHistory();

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          {type === "header" && (
            <img
              src="Assets/Header/RentPG.jpg"
              style={{ height: "36px", width: "36px" }}
              onClick={() => history.push(link)}
            />
          )}
          {type === "back" && (
            <img
              src="Assets/Header/left-arrow.png"
              style={{ height: "22px", width: "22px" }}
              onClick={() => history.push(link)}
            />
          )}
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
