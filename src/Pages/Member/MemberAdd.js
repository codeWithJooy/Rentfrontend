import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Member.css";
import Footer from "../../Components/Footer/Footer";
const MemberAdd = () => {
  return (
    <div className="memberMain">
      <Header name={"Add Member"} link={"/member"} type={"back"} />
      <div className="memContainer">
        <div className="sectionContainer" style={{ marginTop: "10px" }}>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Name</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Phone</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Designation</p>
            </div>
            <div className="sectionIpInput">
              <select>
                <option>Owner</option>
                <option>Partner</option>
                <option>Relative</option>
                <option>Manager</option>
                <option>Warden</option>
                <option>Staff</option>
                <option>Accountant</option>
                <option>Cook</option>
                <option>Cleaner</option>
                <option>Plumber</option>
                <option>Electrician</option>
                <option>Carpenter</option>
                <option>Guard</option>
              </select>
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Date Of Joining</p>
            </div>
            <div className="sectionIpInput">
              <input type="date" />
            </div>
          </div>
          <button>Add Member</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MemberAdd;
