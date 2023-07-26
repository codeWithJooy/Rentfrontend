import React from "react";

const StudentHeader = () => {
  return (
    <div className="stuHeader">
      <div className="stuHeaderIcon">
        <img src="Assets/Students/userHeader.png" />
      </div>
      <div className="stuHeaderName">
        <p>Hello, Abhi Singh</p>
      </div>
      <div className="stuHeaderNotification">
        <img src="Assets/Students/notification.png" />
      </div>
    </div>
  );
};

export default StudentHeader;
