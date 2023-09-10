import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const NotifiHeader = () => {
  let history = useHistory();
  const handleBack = () => {
    history.push("/student");
  };
  return (
    <div className="stuHeader">
      <div className="stuHeaderIcon" onClick={handleBack}>
        <img src="Assets/Students/userHeader.png" />
      </div>
      <div className="stuHeaderName">
        <p>My Notification</p>
      </div>
    </div>
  );
};

export default NotifiHeader;