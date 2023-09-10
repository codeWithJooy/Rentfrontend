import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

const StudentHeader = () => {
  const name = useSelector((state) => state.student.studentData.name);
  const history=useHistory()

  const handleClick=()=>{
    history.push("/studentNotifi")
  }
  return (
    <div className="stuHeader">
      <div className="stuHeaderIcon">
        <img src="Assets/Students/userHeader.png" />
      </div>
      <div className="stuHeaderName">
        <p>Hello, {name}</p>
      </div>
      <div className="stuHeaderNotification">
        <img src="Assets/Students/notification.png" onClick={handleClick}/>
      </div>
    </div>
  );
};

export default StudentHeader;
