import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Member.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Member = () => {
  const history = useHistory();
  const [navActive, setNavActive] = useState("personal");
  const handleAdd = () => {
    history.push("/addMember");
  };

  return (
    <div className="memberMain">
      <Header />
      <div className="memContainer" style={{ background: "#f5f3f4" }}>
        <div className="searchMember">
          <div className="searchMemBar">
            <img src="Assets/Member/search.png" />
            <input type="text" placeholder="Search Team Member" />
          </div>
          <button onClick={handleAdd}>Add Team</button>
        </div>
        <MemCard />
      </div>
      <Footer />
    </div>
  );
};

export default Member;

const MemCard = () => {
  const history = useHistory();
  const handleCard = () => {
    history.push("/memberProfile");
  };
  return (
    <div className="memCard" onClick={handleCard}>
      <div className="memTop">
        <div className="memPic">
          <img src="Assets/Member/user.png" />
        </div>
        <div className="memDetails">
          <div className="memDetailsTop">
            <div className="memName">
              <p>{"Owner"}</p>
            </div>
            <div className="memDesig">
              <div className="memDesignation">
                <p>{"Admin"}</p>
              </div>
            </div>
          </div>
          <div className="memDetailsBottom">
            <p>12 Jun 2023</p>
          </div>
        </div>
      </div>
      <div className="memBottom">
        <div className="memBottomUnit">
          <img src="Assets/Member/call.png" />
          <p>Call</p>
        </div>
        <div className="memBottomUnit">
          <img src="Assets/Member/whatsapp.png" />
          <p>whatsapp</p>
        </div>
        <div className="memBottomUnit">
          <img src="Assets/Member/app.png" />
          <p>App Access</p>
        </div>
      </div>
    </div>
  );
};
