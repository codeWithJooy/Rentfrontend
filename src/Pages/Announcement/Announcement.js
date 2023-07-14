import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Announcement.css";
import Header from "../../Components/Header/Header";

const Announcement = () => {
  const history = useHistory();
  const [navActive, setNavActive] = useState("new");

  const handleWrite = () => {
    history.push("/addann");
  };
  return (
    <div className="annMain">
      <Header name={"Announcements"} link={"/home"} type={"back"} />
      <div className="annNav">
        <div
          className={`annNavUnit ${navActive == "new" ? "annNavActive" : ""}`}
          onClick={() => setNavActive("new")}
        >
          <p>New Messages</p>
        </div>
        <div
          className={`annNavUnit ${navActive == "old" ? "annNavActive" : ""}`}
          onClick={() => setNavActive("old")}
        >
          <p>Old Messages</p>
        </div>
      </div>

      {navActive == "new" ? <AnnNew /> : <></>}
    </div>
  );
};

export default Announcement;

const AnnNew = () => {
  const history = useHistory();
  const handleWrite = () => {
    history.push("/addann");
  };
  return (
    <div className="annContainer">
      <div class="newTagsSection">
        <div className="newTagUnit">
          <p>All</p>
        </div>
        <div className="newTagUnit">
          <p>Festival</p>
        </div>
        <div className="newTagUnit">
          <p>Joining</p>
        </div>
        <div className="newTagUnit">
          <p>Payments</p>
        </div>
        <div className="newTagUnit">
          <p>Food</p>
        </div>
      </div>
      <div className="newCardSection">
        <AnnCard />
        <AnnCard />
        <AnnCard />
        <AnnCard />
      </div>
      <div className="newMsg">
        <button onClick={handleWrite}>Write New Message</button>
      </div>
    </div>
  );
};

const AnnCard = () => {
  return (
    <div className="newCard">
      <div className="newCardText">
        <div className="newCardHeading">
          <p>Dinner is ready</p>
        </div>
        <div className="newCardDesc">
          <p>
            Dear Tenants with light of beautiful diyas and holy chants,may
            happiness and properity fill your life foreever!Wishing you and your
            family a very happy and properous Diwali !
          </p>
        </div>
      </div>
      <div className="newCardTagSection">
        <div className="newTag">
          <p>Festival</p>
        </div>
      </div>
    </div>
  );
};
