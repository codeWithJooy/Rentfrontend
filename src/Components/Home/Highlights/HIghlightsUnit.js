import React from "react";

const HighlightsUnit = ({ val }) => {
  return (
    <div className="highlightUnit">
      <div className="highlightAmount">
        <p style={{ color: val.color }}>&#8377; {val.amount}</p>
      </div>
      <div className="highlightBottom">
        <div className="highlightType">
          <p>{val.title}</p>
        </div>
        <div className="highlightIcon">
          <img src={val.icon} />
        </div>
      </div>
    </div>
  );
};

export default HighlightsUnit;
