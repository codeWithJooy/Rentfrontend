import React from "react";
import { useSelector } from "react-redux";

const StudentHeader = () => {
  const name = useSelector((state) => state.student.studentData.name);
  return (
    <div className="stuHeader">
      <div className="stuHeaderIcon">
        <img src="Assets/Students/userHeader.png" />
      </div>
      <div className="stuHeaderName">
        <p>Hello, {name}</p>
      </div>
      <div className="stuHeaderNotification">
        <img src="Assets/Students/notification.png" />
      </div>
    </div>
  );
};

export default StudentHeader;
