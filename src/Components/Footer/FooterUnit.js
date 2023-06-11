import React from "react";

const FooterUnit = ({ title, icon }) => {
  return (
    <div className="footerUnit">
      <div className="footerIcon">
        <img src={icon} />
      </div>
      <div className="footerText">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default FooterUnit;
