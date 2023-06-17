import React, { useEffect } from "react";
import "./Toast.css";
const Toast = ({ toast, title, msg, setToast }) => {
  useEffect(() => {
    setTimeout(() => {
      setToast(false);
    }, 4000);
  }, [toast]);
  return (
    <div className={`${toast ? "toast show" : "toast"}`}>
      <div className="toastIndicator"></div>
      <div className="toastBody">
        <div className="toastTitle">
          <p>{title}</p>
        </div>
        <div className="toastMessage">
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
