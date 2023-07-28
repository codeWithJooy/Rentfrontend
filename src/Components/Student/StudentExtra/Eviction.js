import React from "react";
import "./HostFriend.css";

const Eviction = ({ setEviction }) => {
  return (
    <div className="extraUnitBg">
      <div className="extraUnitMainSection">
        <div className="extraUnitTop">
          <img
            src="Assets/Students/close.png"
            onClick={() => setEviction(false)}
          />
          <div className="extraUnitHeader">
            <p>Eviction Notice </p>
          </div>
          <div className="extraUnitSub">
            <p>Give a minimum of 30-days Notice</p>
          </div>
        </div>

        <div className="extraUnitData">
          <div className="extraUnitInput">
            <label>Date of Leaving</label>
            <input type="date" />
          </div>
        </div>
        <div className="extraUnitData">
          <div className="extraUnitInput">
            <label>Why are you leaving ?</label>
            <textarea></textarea>
          </div>
        </div>
        <div className="extraUnitData">
          <button>Send Notice</button>
        </div>
      </div>
      ;
    </div>
  );
};

export default Eviction;
