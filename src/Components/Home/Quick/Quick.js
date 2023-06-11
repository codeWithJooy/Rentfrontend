import React from "react";
import "./Quick.css";
import QuickUnit from "./QuickUnit";
const Quick = () => {
  return (
    <div className="quick">
      <div className="quickTitle">
        <span>Quick Action</span>
      </div>
      <div className="quickContainer">
        <QuickUnit />
        <QuickUnit />
        <QuickUnit />
        <QuickUnit />
        <QuickUnit />
        <QuickUnit />
        <QuickUnit />
        <QuickUnit />
        <QuickUnit />
        <QuickUnit />
        <QuickUnit />
        <QuickUnit />
      </div>
    </div>
  );
};

export default Quick;
