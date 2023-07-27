import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const ComplaintHolderHeader = () => {
  let history = useHistory();
  const title = useSelector((state) => state.student.complaintType);

  const handleBack = () => {
    history.push("/complaint");
  };
  return (
    <div className="stuHeader">
      <div className="stuHeaderIcon" onClick={handleBack}>
        <img src="Assets/Students/userHeader.png" />
      </div>
      <div className="stuHeaderName">
        <p>{title} Complaints</p>
      </div>
    </div>
  );
};

export default ComplaintHolderHeader;
