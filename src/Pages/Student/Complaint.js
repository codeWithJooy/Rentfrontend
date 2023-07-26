import React from "react";
import ComplaintHeader from "../../Components/Header/StudentHeader/ComplaintHeader";
import StudentFooter from "../../Components/Footer/StudentFooter/StudentFooter";

const Complaint = () => {
  return (
    <div className="studentMain">
      <ComplaintHeader />
      <div className="stuContainer stuComplaint">
        <ComplaintUnit />
        <ComplaintUnit />
        <ComplaintUnit />
        <ComplaintUnit />
      </div>
      <StudentFooter />
    </div>
  );
};

export default Complaint;

const ComplaintUnit = () => {
  return (
    <div className="complaintUnitCard">
      <div className="complaintImg">
        <img src="Assets/Students/complaint.png" />
      </div>
      <div className="complaintCardTitle">
        <p>Bedroom</p>
      </div>
      <div className="complaintCardDetails">
        <p>Raise Complainrs</p>
      </div>
    </div>
  );
};
