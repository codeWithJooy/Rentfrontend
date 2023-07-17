import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAnn } from "../../actions/annAction";
import "./Announcement.css";
import Header from "../../Components/Header/Header";
import { announcementData } from "../../data/announcementData";
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
  const [tag, setTag] = useState("all");
  const handleWrite = () => {
    history.push("/addann");
  };
  return (
    <div className="annContainer">
      <div class="newTagsSection">
        <div className="newTagUnit" onClick={() => setTag("all")}>
          <p>All</p>
        </div>
        <div className="newTagUnit" onClick={() => setTag("Festival")}>
          <p>Festival</p>
        </div>
        <div className="newTagUnit" onClick={() => setTag("Joining")}>
          <p>Joining</p>
        </div>
        <div className="newTagUnit" onClick={() => setTag("Payments")}>
          <p>Payments</p>
        </div>
        <div className="newTagUnit" onClick={() => setTag("Food")}>
          <p>Food</p>
        </div>
      </div>
      <div className="newCardSection">
        {tag !== "all" &&
          announcementData
            .filter((val) => val.tag == tag)
            .map((data, key) => (
              <AnnCard
                key={key}
                title={data.title}
                message={data.messgae}
                tag={data.tag}
              />
            ))}
        {tag == "all" &&
          announcementData.map((data, key) => (
            <AnnCard
              key={key}
              title={data.title}
              message={data.messgae}
              tag={data.tag}
            />
          ))}
      </div>
      <div className="newMsg">
        <button onClick={handleWrite}>Write New Message</button>
      </div>
    </div>
  );
};

const AnnCard = ({ title, message, tag }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    const data = {
      title: title,
      message: message,
    };
    dispatch(setAnn(data));
    history.push("/addann");
  };
  return (
    <div className="newCard" onClick={handleClick}>
      <div className="newCardText">
        <div className="newCardHeading">
          <p>{title}</p>
        </div>
        <div className="newCardDesc">
          <p>{message}</p>
        </div>
      </div>
      <div className="newCardTagSection">
        <div className="newTag">
          <p>{tag}</p>
        </div>
      </div>
    </div>
  );
};
