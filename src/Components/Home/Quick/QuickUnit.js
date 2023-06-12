import React from "react";
import { useHistory } from "react-router-dom";
import "./Quick.css";

const QuickUnit = ({ title, img, link }) => {
  const history = useHistory();
  const handleClick = () => {
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
