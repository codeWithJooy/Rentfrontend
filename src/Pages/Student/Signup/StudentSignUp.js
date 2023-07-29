import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./StudentSignup.css";
import { updateToast } from "../../../actions/toastActions";
import { CodeAnalogy } from "../../../Components/Toasty/Toasty";
import { addStudent } from "../../../actions/Student/studentAction";

const StudentSignUp = () => {
  const history = useHistory();
  const { userId, propertyId, propertyName, tenantId, name, number } =
    useSelector((state) => state.student.studentData);
  const [student, setStudent] = useState({
    userId,
    propertyId,
    propertyName,
    tenantId,
    email: "",
    name,
    number,
    password: "",
  });
  const [confirm, setConfirm] = useState("");
  const handleConfirm = (e) => {
    setConfirm(e.target.value);
  };
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSignUp = () => {
    if (student.password !== confirm) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Password Mismatch",
      });
      return;
    }
    (async () => {
      if (await addStudent(student)) {
        history.push("/student");
      }
    })();
  };

  return (
    <div className="stuSignMain">
      <div className="stuSignContainer">
        <div className="stuSignPic">
          <img src="Assets/Students/signup.jpg" />
        </div>
        <div className="stuSignTop">
          <div className="stuSignTitle">
            <p>{propertyName}</p>
          </div>
          <div className="stuSignDes">
            <p>Add Your Details to get started</p>
          </div>
        </div>
        <div className="stuSignDataSection">
          <div className="stuSignDataUnit">
            <div className="stuSignDataUnitInput">
              <label>Name</label>
              <input type="text" value={name} readOnly />
            </div>
          </div>
          <div className="stuSignDataUnit">
            <div className="stuSignDataUnitInput">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={student.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="stuSignDataUnit">
            <div className="stuSignDataUnitInput">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={student.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="stuSignDataUnit">
            <div className="stuSignDataUnitInput">
              <label>Confirm Password</label>
              <input type="password" value={confirm} onChange={handleConfirm} />
            </div>
          </div>
          <div className="stuSignDataUnit">
            <button onClick={handleSignUp}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSignUp;
