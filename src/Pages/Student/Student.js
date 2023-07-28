import React, { useState, useEffect } from "react";
import StudentHeader from "../../Components/Header/StudentHeader/StudentHeader";
import StudentFooter from "../../Components/Footer/StudentFooter/StudentFooter";
import MyAccount from "../../Components/Student/MyAccount/MyAccount";
import "./Student.css";
import StudentMenu from "../../Components/Student/StudentMenu/StudentMenu";
import HostelLife from "../../Components/Student/HostelLife/HostelLife";
import HostFriend from "../../Components/Student/StudentExtra/HostFriend";
import Eviction from "../../Components/Student/StudentExtra/Eviction";
const Student = () => {
  const [host, setHost] = useState(false);
  const [eviction, setEviction] = useState(true);
  return (
    <div className="studentMain">
      <StudentHeader />
      <div className="stuContainer">
        <MyAccount />
        <HostelLife />
        <StudentMenu />
      </div>
      {host && <HostFriend setHost={setHost} />}
      {eviction && <Eviction setEviction={setEviction} />}
      <StudentFooter />
    </div>
  );
};

export default Student;
