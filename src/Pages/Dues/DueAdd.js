import React, { useEffect, useState } from "react";
import "./Dues.css";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import DuesUnitRoom from "../../Components/Dues/DuesUnitRoom";
import DuesUnitTenant from "../../Components/Dues/DuesUnitTenanat";
import moment from "moment";
import { addDuesRoom } from "../../actions/duesAction";
const DueAdd = () => {
  const [nav, setNav] = useState("room");
  const [open, setOpen] = useState(false);
  const dueType = useSelector((state) => state.due.dueType);
  const [dueSetData, setDueSetData] = useState({});
  console.log(dueType);
  return (
    <div className="duesMain">
      <Header type="back" name={dueType} link="/dues" />
      <div className="duesNavbar">
        <div
          className={`navUnit ${nav == "room" ? "activeUnit" : ""}`}
          onClick={() => setNav("room")}
        >
          <img
            src={`${
              nav
                ? "Assets/Footer/apartment_selected.png"
                : "Assets/Footer/apartment.png"
            }`}
          />
          <div className="navTitle">
            <p>Rooms</p>
            <p style={{ fontSize: 12 }}>8 Rooms</p>
          </div>
        </div>
        <div
          className={`navUnit ${nav == "tenant" ? "activeUnit" : ""}`}
          onClick={() => setNav("tenant")}
        >
          <img
            src={`${
              nav
                ? "Assets/Footer/group.png"
                : "Assets/Footer/group_selected.png"
            }`}
          />
          <div className="navTitle">
            <p>Tenants</p>
            <p style={{ fontSize: 12 }}>1 Tenant</p>
          </div>
        </div>
      </div>
      {/* <DuesUnit setOpen={setOpen} /> */}
      {nav == "room" && (
        <DuesUnitRoom setOpen={setOpen} setDueSetData={setDueSetData} />
      )}
      {nav == "tenant" && <DuesUnitTenant />}
      {open && <DueCategory setOpen={setOpen} dueSetData={dueSetData} />}
    </div>
  );
};

export default DueAdd;

const DuesUnit = ({ setOpen }) => {
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="duesCard">
      <div className="duesTop">
        <div className="duesTopTitle">
          <p>Abhi Hazra</p>
        </div>
        <div className="duesTopButton">
          <button onClick={handleOpen}>Add Dues</button>
        </div>
      </div>
      <div className="duesRoom">
        <p>Room:Ground1</p>
      </div>
    </div>
  );
};

const DueCategory = ({ setOpen, dueSetData }) => {
  const { userId, propertyId } = useSelector((state) => state.user);
  const { title, dueType, id, useFor } = dueSetData;
  const [due, setDue] = useState({
    type: dueType,
    total: 0,
    due: 0,
    collection: 0,
    discount: 0,
    description: "",
    dueDate: moment(new Date()).format("YYYY-MM-DD"),
  });
  const amountChange = (e) => {
    setDue({ ...due, total: e.target.value, due: e.target.value });
  };
  const timeChange = (e) => {
    const newTime = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setDue({ ...due, dueDate: newTime });
  };
  const descriptionChange = (e) => {
    setDue({ ...due, description: e.target.value });
  };
  const handleCross = () => {
    setOpen(false);
  };
  const addDue = () => {
    if (dueSetData.useFor == "room") {
      addDuesRoom(userId, propertyId, id, due);
      setOpen(false);
    } else {
    }
  };
  return (
    <div className="categoryMain">
      <div className="categoryCross">
        <img src="Assets/components/cross.png" onClick={handleCross} />
      </div>
      <div className="categoryContainer">
        <div className="categoryTitle">{`Add ${dueType} for ${title}`}</div>
        <div className="tenantAddSection">
          <p>Amount</p>
          <input type="text" value={due.total} onChange={amountChange} />
        </div>
        <div className="tenantAddSection">
          <p>Due Date</p>
          <input type="date" value={due.dueDate} onChange={timeChange} />
        </div>
        <div className="tenantAddSection">
          <p>Description</p>
          <input
            type="text"
            value={due.description}
            onChange={descriptionChange}
          />
        </div>
        <button className="dueButton" onClick={addDue}>
          Add Due
        </button>
      </div>
    </div>
  );
};
