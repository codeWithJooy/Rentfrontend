import React from "react";

const StudentFooter = () => {
  return (
    <div className="stuFooter">
      <FooterUnit />
      <FooterUnit />
      <FooterUnit />
      <FooterUnit />
    </div>
  );
};

export default StudentFooter;
const FooterUnit = () => {
  return (
    <div className="stuFooterUnit">
      <img src="Assets/Students/user.png" />
      <div className="stuFooterUnitText">
        <p>Home</p>
      </div>
    </div>
  );
};
