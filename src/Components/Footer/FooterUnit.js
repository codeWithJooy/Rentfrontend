import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDuesPage } from "../../actions/duesAction";

const FooterUnit = ({ title, icon, iconSelected, link, page }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    if (title == "Money") {
      dispatch(setDuesPage);
    }
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
