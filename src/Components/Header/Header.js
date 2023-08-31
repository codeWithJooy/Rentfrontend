import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import { getNotificationCount } from "../../actions/summaryAction";

const Header = ({ name, link = "/home", type = "header" }) => {
  const { userId, propertyId } = useSelector((state) => state.user);
  const [notiCount, setNotiCount] = useState(0)
  const history = useHistory();
  const title = useSelector((state) => state.user.propertyName);
  if (!name) {
    name = title;
  }
  useEffect(() => {
    (async () => {
      setInterval(async () => {
        //let data = await getNotificationCount(userId, propertyId)
        //setNotiCount(data)
        setNotiCount(5)
      }, 5000)
    })()
  }, [])
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
        <div className="headerSettings" onClick={() => history.push("/settings")}>
          <img src="Assets/Settings/settings.png" />
        </div>
        <div className="headerNotifications">
          <img src="Assets/Header/notification.png" onClick={() => { history.push("/notifications") }} />
          {
            notiCount > 0 && <div className="headerNotiCount"><p>{notiCount}</p></div>
          }
        </div>

      </div>
    </div>
  );
};

export default Header;
