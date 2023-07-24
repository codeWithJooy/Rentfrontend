import React, { useEffect, useState } from "react";
import "./Dues.css";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import DuesUnitRoom from "../../Components/Dues/DuesUnitRoom";
import DuesUnitTenant from "../../Components/Dues/DuesUnitTenanat";
import moment from "moment";
import { addDuesRoom, addDuesTenant } from "../../actions/duesAction";
import { getAllTenantsCount } from "../../actions/tenantAction";
import { getTotalRoomCounts } from "../../actions/roomActions";
const DueAdd = () => {
  const [nav, setNav] = useState("room");
  const [open, setOpen] = useState(false);
  const [roomCount, setRoomCount] = useState(0);
  const [tenantCount, setTenantCount] = useState(0);
  const { userId, propertyId } = useSelector((state) => state.user);
  const dueType = useSelector((state) => state.due.dueType);
  const [dueSetData, setDueSetData] = useState({});
  console.log(dueType);
  useEffect(() => {
    (async () => {
      let tenantData = await getAllTenantsCount(userId, propertyId);
      let roomData = await getTotalRoomCounts(userId, propertyId);
      setTenantCount(tenantData);
      setRoomCount(roomData);
    })();
  }, []);
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
            <p style={{ fontSize: 12 }}>{roomCount} Rooms</p>
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
            <p style={{ fontSize: 12 }}>{tenantCount} Tenant</p>
          </div>
        </div>
      </div>
      {/* <DuesUnit setOpen={setOpen} /> */}
      {nav == "room" && (
        <DuesUnitRoom setOpen={setOpen} setDueSetData={setDueSetData} />
      )}
      {nav == "tenant" && (
        <DuesUnitTenant setOpen={setOpen} setDueSetData={setDueSetData} />
      )}
      {open && <DueCategory setOpen={setOpen} dueSetData={dueSetData} />}
    </div>
  );
};

export default DueAdd;

const DueCategory = ({ setOpen, dueSetData }) => {
  const { userId, propertyId } = useSelector((state) => state.user);
  const { title, dueType, id, useFor, sharing, split } = dueSetData;
  const [dummyAmt, setDummyAmt] = useState(0);
  const [splitType, setSplitType] = useState("split");
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
    let val = e.target.value;
    setDummyAmt(val);
    if (splitType == "split") {
      if (sharing == "Double") {
        setDue({ ...due, total: Math.ceil(val / 2), due: Math.ceil(val / 2) });
      } else if (sharing == "Triple") {
        setDue({ ...due, total: Math.ceil(val / 3), due: Math.ceil(val / 3) });
      } else {
        setDue({ ...due, total: e.target.value, due: e.target.value });
      }
    } else {
      setDue({ ...due, total: e.target.value, due: e.target.value });
    }
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
  const handleChange = (e) => {
    let amount = parseInt(dummyAmt);
    console.log(amount);
    if (e.target.value == "split") {
      if (sharing == "Double") {
        let newAmt = Math.ceil(amount / 2);

        setDue({
          ...due,
          total: newAmt,
          due: newAmt,
        });
        setSplitType("split");
      } else if (sharing == "Triple") {
        setDue({
          ...due,
          total: Math.ceil(amount / 3),
          due: Math.ceil(amount / 3),
        });
        setSplitType("split");
      } else {
        setDue({
          ...due,
          total: Math.ceil(amount),
          due: Math.ceil(amount),
        });
        setSplitType("split");
      }
    } else {
      setDue({
        ...due,
        total: Math.ceil(amount),
        due: Math.ceil(amount),
        splitType: e.target.value,
      });
      setSplitType("whole");
    }
  };
  const addDue = () => {
    if (dueSetData.useFor == "room") {
      addDuesRoom(userId, propertyId, id, due);
      setOpen(false);
    } else {
      addDuesTenant(userId, propertyId, id, due);
      setOpen(false);
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
          <input type="text" value={dummyAmt} onChange={amountChange} />
        </div>
        {useFor == "room" && (
          <div className="tenantAddSection">
            <p>Split Amount</p>
            <select
              style={{ width: "100%", background: "transparent" }}
              onChange={handleChange}
            >
              <option value="split">Split Amount among Tenants</option>
              <option value="whole">Add Same Amount among Tenants</option>
            </select>
          </div>
        )}
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
