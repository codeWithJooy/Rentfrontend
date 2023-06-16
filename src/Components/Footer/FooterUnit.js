import React from "react";
import { useHistory } from "react-router-dom";

const FooterUnit = ({ title, icon, iconSelected, link, page }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(link);
  };
  return (
    <div className="footerUnit" onClick={handleClick}>
      <div className="footerIcon">
        <img src={`${page === title ? iconSelected : icon}`} />
      </div>
      <div className="footerText">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default FooterUnit;
