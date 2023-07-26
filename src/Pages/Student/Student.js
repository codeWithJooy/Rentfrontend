import React, { useState, useEffect } from "react";
import StudentHeader from "../../Components/Header/StudentHeader/StudentHeader";
import StudentFooter from "../../Components/Footer/StudentFooter/StudentFooter";
import MyAccount from "../../Components/Student/MyAccount/MyAccount";
import "./Student.css";
import StudentMenu from "../../Components/Student/StudentMenu/StudentMenu";
import HostelLife from "../../Components/Student/HostelLife/HostelLife";

const Student = () => {
  return (
    <div className="studentMain">
      <StudentHeader />
      <div className="stuContainer">
        <MyAccount />
        <HostelLife />
        <StudentMenu />
      </div>
      <StudentFooter />
    </div>
  );
};

export default Student;
