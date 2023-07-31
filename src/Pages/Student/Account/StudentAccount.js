import React from "react";
import "./StudentAccount.css";
import StudentHeader from "../../../Components/Header/StudentHeader/StudentHeader";
import StudentFooter from "../../../Components/Footer/StudentFooter/StudentFooter";

const StudentAccount = () => {
  return (
    <div className="studentAccount">
      <StudentHeader />
      <div className="studentAccNavbar">
        <div className="studentAccNavUnit activeAccNavUnit">
          <div className="accNavHeader">
            <p>My Dues</p>
          </div>
          <div className="accNavAmount">
            <p>Rs 25000</p>
          </div>
        </div>
        <div className="studentAccNavUnit">
          <div className="accNavHeader">
            <p>My Expenses</p>
          </div>
          <div className="accNavAmount">
            <p>Rs 30000</p>
          </div>
        </div>
      </div>
      <StudentFooter page={"Account"} />
    </div>
  );
};

export default StudentAccount;
