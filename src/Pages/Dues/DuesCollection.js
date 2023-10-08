import React, { useState, useEffect } from "react";
import "./DuesList.css";
import { useSelector } from "react-redux";
import { getTenantsCount, getTenantName } from "../../actions/tenantAction";
import {
  getAllCollections,
  getAllCollectionByUser,
} from "../../actions/collectionAction";
import { getMonthCollection } from "../../actions/summaryAction";
import { beautiDate } from "../../helper";
const DuesCollection = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const [tenantCount, setTenantCount] = useState(0);
  const [collectionData, setCollectionData] = useState([]);
  const [collectionCount, setCollectionCount] = useState([]);
  useEffect(() => {
    (async () => {
      //let data = await getTenants(user.userId, user.propertyId);
      let count = await getTenantsCount(user.userId, user.propertyId);
      let collections = await getMonthCollection(user.userId, user.propertyId);
      let getAllCollection = await getAllCollectionByUser(
        user.userId,
        user.propertyId
      );
      //setDues(data);
      setTenantCount(count);
      setCollectionCount(collections);
      setCollectionData(getAllCollection);
    })();
  }, []);
  return (
    <div className="duesContainer">
      <CollectionMainCard
        tenantCount={tenantCount}
        collectionCount={collectionCount}
      />
      {collectionData.length > 0 &&
        collectionData.map((data, index) => (
          <DuesCollectionCard
            data={data}
            userId={user.userId}
            propertyId={user.propertyId}
            key={index}
          />
        ))}
    </div>
  );
};
export default DuesCollection;

//Collection Card For Each Collection
const DuesCollectionCard = ({ userId, propertyId, data }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    (async () => {
      setName(await getTenantName(userId, propertyId, data.tenantId));
    })();
  }, []);
  return (
    <div className="duesDataCard">
      <div className="ddcTop">
        <div className="ddcHead">
          <div className="ddcTitle">
            <p style={{ color: "green" }}>{name}</p>
          </div>
          <div className="ddcDue">
            <p style={{ color: "green" }}>Rs {data.amount}</p>
          </div>
        </div>
        <div className="ddcHead">
          <div className="ddcRoom">
            <p>{data.type}</p>
          </div>
          <div className="ddcDueDate">
            <p>{data.mode}</p>
          </div>
        </div>
      </div>
      {/* <div className="ddcBottom">
        <button className="ddcDate">{data.date}</button>
       <button className="ddcRemind">Share Receipt</button>
      </div> */}
      <div style={{paddingLeft:"10px"}}>
        <p style={{fontWeight:"bold"}}>{beautiDate(data.date)}</p>
      </div>
    </div>
  );
};

//Top Card To Record All Dues and ToTal Tenants
const CollectionMainCard = ({ tenantCount, collectionCount }) => {
  return (
    <div className="expenseMainCard">
      <div className="expenseMainTop">
        <div className="expenseDuration">Duration : October</div>
      </div>
      <div className="expenseTracker">
        <div
          className="trackerUnit"
          style={{ borderRight: "2px solid #f5f3f4" }}
        >
          <div className="trackerTop">
            <p>Rs {collectionCount}</p>
          </div>
          <div className="trackerTitle">
            <p>Total&nbsp; &nbsp; &nbsp; &nbsp;Collction</p>
            <img src="Assets/Home/Highlights/collection.png" />
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
