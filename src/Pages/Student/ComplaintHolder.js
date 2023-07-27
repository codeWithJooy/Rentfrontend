import React, { useState } from "react";
import { useSelector } from "react-redux";
import StudentFooter from "../../Components/Footer/StudentFooter/StudentFooter";
import ComplaintHolderHeader from "../../Components/Header/StudentHeader/ComplaintHolderHeader";
import { complaints } from "../../data/complaintData";
const ComplaintHolder = () => {
  const title = useSelector((state) => state.student.complaintType);
  const [subComplaint, setSubComplaint] = useState("");
  const [isSet, setIsSet] = useState(false);
  const dataIndex = complaints.findIndex((val) => val.main == title);
  const complaintData = complaints[dataIndex];
  return (
    <div className="studentMain">
      <ComplaintHolderHeader />
      <div className="stuContainer">
        {!isSet &&
          complaintData &&
          complaintData.sub.map((val, index) => (
            <ComplaintUnits
              key={index}
              val={val}
              setSubComplaint={setSubComplaint}
              setIsSet={setIsSet}
            />
          ))}
        {isSet && <ComplaintFinal cat={title} subComplaint={subComplaint} />}
      </div>
      <StudentFooter />
    </div>
  );
};

export default ComplaintHolder;

const ComplaintUnits = ({ val, setSubComplaint, setIsSet }) => {
  const handleClick = () => {
    setSubComplaint(val.type);
    setIsSet(true);
  };
  return (
    <div className="complaintHolderCard" onClick={handleClick}>
      <div className="complaintHolderIcon">
        <img src={val.icon} />
      </div>
      <div className="complaintHolderText">
        <div className="complaintHolderTextHeader">
          <p>{val.type}</p>
        </div>
        <div className="complaintHolderTextSub">
          <p>{val.text}</p>
        </div>
      </div>
    </div>
  );
};
const ComplaintFinal = ({ cat, subComplaint }) => {
  return (
    <div className="complaintFinalCard">
      <div className="complaintFinalHeader">
        <label>Complaint Category</label>
        <input type="text" value={cat} readOnly />
      </div>
      <div className="complaintFinalHeader">
        <label>Complaint Sub Category</label>
        <input type="text" value={subComplaint} readOnly />
      </div>
      <div className="complaintFinalHeader">
        <label>Add Description</label>
        <textarea></textarea>
      </div>
      <div className="complaintFinalHeader">
        <button>Add Complaint</button>
      </div>
    </div>
  );
};
