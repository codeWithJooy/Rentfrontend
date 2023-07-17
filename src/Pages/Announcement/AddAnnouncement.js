import React, { useState } from "react";
import "./Announcement.css";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
const AddAnnouncement = () => {
  const [navActive, setNavActive] = useState("new");
  const { title, message } = useSelector((state) => state.ann);
  return (
    <div className="annMain">
      <Header name={"Send Message"} link={"/announcement"} type={"back"} />
      <div className="annContainer">
        <div className="newCard">
          <div className="addCardText">
            <div className="newCardHeading">
              <p>Message Title</p>
              <img src="Assets/Announcement/write.png" />
            </div>
            <div className="addCardInstrument">
              <input
                type="text"
                placeholder="Type Message Title"
                value={title}
                onChange={() => console.log()}
              />
            </div>
          </div>
        </div>

        <div className="newCard">
          <div className="addCardText">
            <div className="newCardHeading">
              <p>Message Body</p>
              <img src="Assets/Announcement/write.png" />
            </div>
            <div className="addCardInstrument">
              <textarea
                placeholder="Type Message Body"
                value={message}
                onChange={() => console.log()}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="newCard">
          <div className="addCardText">
            <div className="newCardHeading">
              <p>Recipient</p>
            </div>
            <div className="newCardDesc" style={{ marginTop: "10px" }}>
              <input type="text" value={"All Tenants"} readOnly />
            </div>
          </div>
        </div>
        <div className="newMsg">
          <button>Send Announcement</button>
        </div>
      </div>
    </div>
  );
};

export default AddAnnouncement;
