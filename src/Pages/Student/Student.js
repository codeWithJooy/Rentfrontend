import React, { useState, useEffect } from "react";
import StudentHeader from "../../Components/Header/StudentHeader/StudentHeader";
import StudentFooter from "../../Components/Footer/StudentFooter/StudentFooter";
import MyAccount from "../../Components/Student/MyAccount/MyAccount";
import "./Student.css";

const Student = () => {
  return (
    <div className="studentMain">
      <StudentHeader />
      <div className="stuContainer">
        <MyAccount />
      </div>
      <StudentFooter />
    </div>
  );
};

export default Student;
