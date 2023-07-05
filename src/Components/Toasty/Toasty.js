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
  const [toast, setToast] = useState(true);
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
        <div className="toastHeader" style={{ color: code }}>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Toasty;
