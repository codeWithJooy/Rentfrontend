import React from "react";
import ComplaintHeader from "../../Components/Header/StudentHeader/ComplaintHeader";
import StudentFooter from "../../Components/Footer/StudentFooter/StudentFooter";
import { useDispatch } from "react-redux";
import { complaints } from "../../data/complaintData";
import { useHistory } from "react-router-dom";
import { setComplaintType } from "../../actions/Student/studentAction";

const Complaint = () => {
  return (
    <div className="studentMain">
      <ComplaintHeader />
      <div className="stuContainer stuComplaint">
        {complaints.map((data, index) => (
          <ComplaintUnit data={data} key={index} />
        ))}
      </div>
      <StudentFooter />
    </div>
  );
};

export default Complaint;

const ComplaintUnit = ({ data }) => {
  let history = useHistory();
  let dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setComplaintType(data.main));
    history.push("/complaintHolder");
  };
  return (
    <div className="complaintUnitCard" onClick={handleClick}>
      <div className="complaintImg">
        <img src={data.img} />
      </div>
      <div className="complaintCardTitle">
        <p>{data.main}</p>
      </div>
      <div className="complaintCardDetails">
        <p>{data.main} Complaints</p>
      </div>
    </div>
  );
};
