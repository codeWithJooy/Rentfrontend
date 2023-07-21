import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Quick.css";
import { setDuesPage } from "../../../actions/duesAction";

const QuickUnit = ({ title, img, link }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    if (title == "Receive Payment") {
      dispatch(setDuesPage("dues"));
    } else if (title == "Add Dues") {
      dispatch(setDuesPage("add"));
    }
    history.push(link);
  };
  return (
    <div className="quickUnitContainer" onClick={handleClick}>
      <div className="quickUnit">
        <img src={img} />
      </div>
      <div className="quickUnitText">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default QuickUnit;
