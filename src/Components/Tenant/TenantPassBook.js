import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  calculateDayDifference,
  calculateSingleDue,
  calculateTotalDues,
} from "../../duesHelper";
import DuesCollection from "./DuesCollection";
import { getReceiptData } from "../../actions/collectionAction";
const TenantPassBook = ({ setForceUpdate }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
  };
  const [type, setType] = useState("dues");
  const dues = useSelector((state) => state.tenant.singleTenant.dues);
  const collections = useSelector((state) => state.collection.tenantCollection);
  const discounts = useSelector((state) => state.collection.tenantDiscount);
  const { due, collection, discount, sd } = calculateTotalDues(
    dues,
    collections,
    discounts
  );
  const [topActive, setTopActive] = useState("Total Dues");
  const [openCategory, setOpenCategory] = useState(false);
  const [dueDetail, setDueDetail] = useState({});
  return (
    <div className="tenantHolder">
      <div className="passbookTop">
        <Slider {...settings}>
          <PassbookTopUnit
            amount={due}
            title={"Total Dues"}
            topActive={topActive}
            setTopActive={setTopActive}
          />
          <PassbookTopUnit
            amount={collection}
            title={"Total Collection"}
            topActive={topActive}
            setTopActive={setTopActive}
          />
          <PassbookTopUnit
            amount={sd}
            title={"Current Deposit"}
            topActive={topActive}
            setTopActive={setTopActive}
          />
          <PassbookTopUnit
            amount={discount}
            title={"Total Discounts"}
            topActive={topActive}
            setTopActive={setTopActive}
          />
        </Slider>
      </div>
      <div className="passbookBody">
        {topActive == "Total Dues" &&
          dues.map((dueData, val) => (
            <DuesDataCard
              key={val}
              type={dueData.type}
              due={dueData.due}
              dueDate={dueData.dueDate}
              collection={dueData.collection}
              setOpenCategory={setOpenCategory}
              setDueDetail={setDueDetail}
            />
          ))}
        {topActive == "Total Collection" &&
          collections.map((col, val) => (
            <DuesCollectionCard
              key={val}
              type={col.type}
              amount={col.amount}
              date={col.date}
              mode={col.mode}
              receiptId={col.receiptId}
            />
          ))}
      </div>
      {openCategory && (
        <DuesCollection
          data={dueDetail}
          setOpenCategory={setOpenCategory}
          setForceUpdate={setForceUpdate}
        />
      )}
    </div>
  );
};

export default TenantPassBook;

const PassbookTopUnit = ({ amount, title, topActive, setTopActive }) => {
  let color = "#660708";
  if (topActive == "Total Collection") {
    color = "green";
  }
  return (
    <div
      className={`passTopUnit`}
      style={{
        border: title == topActive ? `1px solid ${color}` : "1px solid #d3d3d3",
      }}
      onClick={() => setTopActive(title)}
    >
      <div className="passUnitTop">
        <p style={{ color: title == topActive ? `${color}` : "#161a1d" }}>
          Rs {amount}
        </p>
      </div>
      <div className="passBottom">
        <div className="passBottomName">
          <p>{title}</p>
        </div>
        <div className="passBottomImg">
          <img src="Assets/Announcement/write.png" />
        </div>
      </div>
    </div>
  );
};
const DuesDataCard = ({
  type,
  due,
  dueDate,
  collection,
  setOpenCategory,
  setDueDetail,
}) => {
  let finalDue = due - collection;
  let obj = {
    type,
    finalDue,
    dueDate,
  };
  const handleRecord = () => {
    setDueDetail(obj);
    setOpenCategory(true);
  };
  return (
    <div className="duesDataCard">
      <div className="ddcTop">
        <div className="ddcHead">
          <div className="ddcTitle">
            <p>{type}</p>
          </div>
          <div className="ddcDue">
            <p>Rs {finalDue}</p>
          </div>
        </div>
        <div className="ddcHead">
          <div className="ddcRoom">
            <p>{dueDate}</p>
          </div>
          {calculateDayDifference(dueDate) == -1 && (
            <div className="ddcDueDate">
              <p style={{ color: "#E1C28B", fontWeight: "bold" }}>Due Today</p>
            </div>
          )}
          {calculateDayDifference(dueDate) < -1 && (
            <div className="ddcDueDate">
              <p style={{ color: "red", fontWeight: "bold" }}>
                Late by {Math.abs(calculateDayDifference(dueDate))} days
              </p>
            </div>
          )}
          {calculateDayDifference(dueDate) > -1 && (
            <div className="ddcDueDate">
              <p style={{ color: "lightgreen" }}>
                Due in {calculateDayDifference(dueDate)} days
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="ddcBottom">
        <button className="ddcRecord" onClick={handleRecord}>
          Record Payment
        </button>
        <button className="ddcRemind">Remind To Pay</button>
      </div>
    </div>
  );
};
const DuesCollectionCard = ({ type, amount, date, mode, receiptId }) => {
  const history = useHistory();
  const { userId, propertyId, propertyName } = useSelector(
    (state) => state.user
  );
  const tenantId = useSelector((state) => state.tenant.selectedTenant);
  const handleClick = () => {
    getReceiptData(userId, propertyId, propertyName, tenantId, receiptId);
    history.push("/receipt");
  };
  return (
    <div className="duesDataCard" onClick={handleClick}>
      <div className="ddcTop">
        <div className="ddcHead">
          <div className="ddcTitle">
            <p>{type}</p>
          </div>
          <div className="ddcDue">
            <p>Rs {amount}</p>
          </div>
        </div>
        <div className="ddcHead">
          <div className="ddcRoom">
            <p>Paid On {date}</p>
          </div>

          <div className="ddcDueDate">
            <p style={{ color: "lightgreen" }}>Paid Using {mode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
