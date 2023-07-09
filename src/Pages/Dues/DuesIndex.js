import React, { useState, useEffect } from "react";
import "./DuesIndex.css";
import { useSelector } from "react-redux";
import { getTenants, getTenantsCount } from "../../actions/tenantAction";
import { allDues, calculateTotalDues } from "../../helper";
const DuesIndex = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const [dues, setDues] = useState([]);
  const [tenantCount, setTenantCount] = useState(0);
  useEffect(() => {
    (async () => {
      let data = await getTenants(user.userId, user.propertyId);
      let count = await getTenantsCount(user.userId, user.propertyId);
      setDues(data);
      setTenantCount(count);
    })();
  }, []);
  return (
    <div className="duesContainer">
      <DuesMainCard tenantCount={tenantCount} dues={dues} />
      {dues &&
        dues.map((data, index) => (
          <DuesDataCard data={data} setOpen={setOpen} key={index} />
        ))}
      {open && <DueCategory setOpen={setOpen} />}
    </div>
  );
};
export default DuesIndex;

const DuesDataCard = ({ data, setOpen }) => {
  return (
    <div className="duesDataCard">
      <div className="ddcTop">
        <div className="ddcHead">
          <div className="ddcTitle">
            <p>{data.name}</p>
          </div>
          <div className="ddcDue">
            <p>Rs {calculateTotalDues(data.dues)}</p>
          </div>
        </div>
        <div className="ddcHead">
          <div className="ddcRoom">
            <p>Ground 1</p>
          </div>
          <div className="ddcDueDate">
            <p>{data.doj}</p>
          </div>
        </div>
      </div>
      <div className="ddcBottom">
        <button className="ddcRecord" onClick={() => setOpen(true)}>
          Record Payment
        </button>
        <button className="ddcRemind">Remind To Pay</button>
      </div>
    </div>
  );
};
const DuesMainCard = ({ tenantCount, dues }) => {
  return (
    <div className="expenseMainCard">
      <div className="expenseMainTop">
        <div className="expenseDuration">Duration :</div>
        <div className="expenseMonth">
          <p>July</p>
        </div>
      </div>
      <div className="expenseTracker">
        <div
          className="trackerUnit"
          style={{ borderRight: "2px solid #f5f3f4" }}
        >
          <div className="trackerTop">
            <p>Rs {allDues(dues)}</p>
          </div>
          <div className="trackerTitle">
            <p>Total&nbsp; &nbsp; &nbsp; &nbsp;Dues</p>
            <img src="Assets/Tenant/edit.png" />
          </div>
        </div>
        <div className="trackerUnit">
          <div className="trackerTop">
            <p>{tenantCount}</p>
          </div>
          <div className="trackerTitle">
            <p>Total&nbsp; &nbsp; &nbsp; &nbsp; Tenants</p>
            <img src="Assets/Tenant/edit.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
const DueCategory = ({ setOpen }) => {
  const handleCross = () => {
    setOpen(false);
  };
  return (
    <div className="categoryMain">
      <div className="categoryCross">
        <img src="Assets/components/cross.png" onClick={handleCross} />
      </div>
      <div className="categoryContainer">
        <div className="categoryTitle">Select Expense Category </div>
        <div className="tenantAddSection">
          <p>Amount</p>
          <input type="text" />
        </div>
        <div className="tenantAddSection">
          <p>Due Date</p>
          <input type="text" />
        </div>
        <div className="tenantAddSection">
          <p>Description</p>
          <input type="text" />
        </div>
        <button className="dueButton">Add Due</button>
      </div>
    </div>
  );
};
