import React from "react";
import "./HostFriend.css";

const HostFriend = ({ setHost }) => {
  return (
    <div className="extraUnitBg">
      <div className="extraUnitMainSection">
        <div className="extraUnitTop">
          <img src="Assets/Students/close.png" onClick={() => setHost(false)} />
          <div className="extraUnitHeader">
            <p>Host A friend </p>
          </div>
          <div className="extraUnitSub">
            <p>Specify a Time and Invite your friend over.</p>
          </div>
        </div>

        <div className="extraUnitData">
          <div className="extraUnitInput">
            <label>Friend's Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="extraUnitData">
          <div className="extraUnitInput">
            <label>Phone Number</label>
            <input type="number" />
          </div>
        </div>
        <div className="extraUnitData">
          <button>Host Friend</button>
        </div>
      </div>
      ;
    </div>
  );
};

export default HostFriend;
