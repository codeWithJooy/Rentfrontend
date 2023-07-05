import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Toasty.css";
import { revokeToast } from "../../actions/toastActions";
import toastReducer from "../../reducers/toastReducers";

export const CodeAnalogy = Object.freeze({
  WARN: "warning",
  PROGRESS: "progress",
  INFO: "info",
  ERROR: "red",
  SUCCESS: "green",
});

const Toasty = () => {
  const toastSelector = useSelector((state) => state.toast);
  const { visible, code, title, message } = toastSelector;
  useEffect(() => {
    setTimeout(() => {
      revokeToast();
    }, 2500);
  }, [toastSelector.visible]);
  return (
    <div className={`${visible ? "toastContainer show" : "toastContainer"}`}>
      <div className="toastIcon" style={{ background: code }}></div>
      <div className="toastData">
        <div className="toastHeader">
          <p style={{ color: code }}>{title}</p>
        </div>
        <div className="toastMessage">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toasty;
